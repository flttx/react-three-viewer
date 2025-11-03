import './App.css';
import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader.js';
import { mergeVertices } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { OutlinePass } from 'three/examples/jsm/postprocessing/OutlinePass.js';

const defaultMaterialState = {
  baseColor: '#d7d1c7',
  ridgeColor: '#fff7e6',
  valleyColor: '#3b4254',
  diffuseStrength: 1.2,
  ambientStrength: 0.48,
  specularIntensity: 0.58,
  shininess: 56,
  rimIntensity: 0.6,
  rimExponent: 1.35,
  cavityStrength: 1.1,
  ridgeStrength: 0.85,
  valleyStrength: 0.9,
  exposure: 1.22,
  contrast: 1.04,
  lightAzimuth: 40,
  lightElevation: 50
};

const vertexShader = `
  varying vec3 vNormal;
  varying vec3 vViewDir;

  void main() {
    vec4 worldPosition = modelMatrix * vec4(position, 1.0);
    vec4 viewPosition = viewMatrix * worldPosition;
    vNormal = normalize(normalMatrix * normal);
    vViewDir = -viewPosition.xyz;
    gl_Position = projectionMatrix * viewPosition;
  }
`;

const fragmentShader = `
#if __VERSION__ < 300
#extension GL_OES_standard_derivatives : enable
#endif
#ifdef GL_ES
precision highp float;
#endif

uniform vec3 uBaseColor;
uniform vec3 uRidgeColor;
uniform vec3 uValleyColor;
uniform vec3 uLightDir;
uniform float uDiffuseStrength;
uniform float uAmbientStrength;
uniform float uSpecularIntensity;
uniform float uShininess;
uniform float uRimIntensity;
uniform float uRimExponent;
uniform float uCavityStrength;
uniform float uRidgeStrength;
uniform float uValleyStrength;
uniform float uExposure;
uniform float uContrast;

varying vec3 vNormal;
varying vec3 vViewDir;

void main() {
  vec3 baseNormal = normalize(vNormal);
  vec3 viewDir = normalize(vViewDir);
  vec3 lightDir = normalize(uLightDir);

  vec3 normalDx = dFdx(baseNormal);
  vec3 normalDy = dFdy(baseNormal);
  vec3 filteredNormal = normalize(baseNormal - normalDx * 0.8 - normalDy * 0.8);
  vec3 filteredDx = dFdx(filteredNormal);
  vec3 filteredDy = dFdy(filteredNormal);
  vec3 filteredNormal2 = normalize(filteredNormal - filteredDx * 0.5 - filteredDy * 0.5);
  float normalVariance = clamp(length(normalDx) + length(normalDy), 0.0, 2.0);
  float smoothingMix = smoothstep(0.035, 0.42, normalVariance);
  vec3 N = normalize(mix(baseNormal, filteredNormal2, smoothingMix));

  float NdotL = max(dot(N, lightDir), 0.0);
  float diffuseTerm = mix(uAmbientStrength, 1.0, NdotL);
  diffuseTerm = pow(diffuseTerm, uContrast);
  vec3 diffuse = uBaseColor * diffuseTerm * uDiffuseStrength;

  vec3 H = normalize(lightDir + viewDir);
  float specular = pow(max(dot(N, H), 0.0), uShininess) * uSpecularIntensity;
  specular *= mix(1.0, 0.55, smoothingMix);

  float rim = pow(1.0 - max(dot(N, viewDir), 0.0), uRimExponent) * uRimIntensity;

  vec3 gradient = fwidth(N);
  float cavityRaw = length(gradient);
  float cavity = clamp(pow(cavityRaw * uCavityStrength * mix(1.1, 0.45, smoothingMix), 0.55), 0.0, 1.0);

  float valleyMask = clamp(smoothstep(0.18, 0.78, cavity) * uValleyStrength, 0.0, 1.0);
  float ridgeMask = clamp(smoothstep(0.55, 1.02, cavity) * uRidgeStrength, 0.0, 1.0);

  vec3 cavityTint = mix(uBaseColor, uValleyColor, valleyMask);
  cavityTint = mix(cavityTint, uRidgeColor, ridgeMask);

  vec3 blendedDiffuse = mix(diffuse, cavityTint, clamp(cavity * 0.46, 0.0, 1.0));
  blendedDiffuse = mix(blendedDiffuse, mix(blendedDiffuse, uBaseColor, 0.25), smoothingMix * 0.6);

  vec3 color = blendedDiffuse;
  color += specular + rim;
  color = vec3(1.0) - exp(-color * uExposure);
  color = clamp(color, 0.0, 1.0);

  gl_FragColor = vec4(color, 1.0);
}
`;

const tempBox = new THREE.Box3();
const tempSize = new THREE.Vector3();
const tempCenter = new THREE.Vector3();
const tempOffset = new THREE.Vector3();
const cameraDirection = new THREE.Vector3(1, 0.45, 1).normalize();

const computeLightDirection = (target, azimuth, elevation) => {
  const az = THREE.MathUtils.degToRad(azimuth);
  const el = THREE.MathUtils.degToRad(elevation);
  target.set(
    Math.cos(el) * Math.sin(az),
    Math.sin(el),
    Math.cos(el) * Math.cos(az)
  );
  return target.normalize();
};

const measureBounds = (object) => {
  object.updateMatrixWorld(true);
  tempBox.setFromObject(object);
  const size = tempBox.getSize(tempSize);
  const center = tempBox.getCenter(tempCenter);
  return {
    size: size.clone(),
    center: center.clone()
  };
};

const subdivideGeometry = (geometry, iterations) => {
  if (iterations <= 0) return geometry;
  let working = geometry.index ? geometry.toNonIndexed() : geometry.clone();
  for (let step = 0; step < iterations; step += 1) {
    const indices = [];
    const positionAttr = working.getAttribute('position');
    const positionArray = positionAttr.array;
    const faceCount = positionAttr.count / 3;
    for (let face = 0; face < faceCount; face += 1) {
      const i0 = face * 3;
      const i1 = i0 + 1;
      const i2 = i0 + 2;
      const ax = positionArray[i0 * 3];
      const ay = positionArray[i0 * 3 + 1];
      const az = positionArray[i0 * 3 + 2];
      const bx = positionArray[i1 * 3];
      const by = positionArray[i1 * 3 + 1];
      const bz = positionArray[i1 * 3 + 2];
      const cx = positionArray[i2 * 3];
      const cy = positionArray[i2 * 3 + 1];
      const cz = positionArray[i2 * 3 + 2];
      const midAB = new THREE.Vector3(ax, ay, az).add(new THREE.Vector3(bx, by, bz)).multiplyScalar(0.5);
      const midBC = new THREE.Vector3(bx, by, bz).add(new THREE.Vector3(cx, cy, cz)).multiplyScalar(0.5);
      const midCA = new THREE.Vector3(cx, cy, cz).add(new THREE.Vector3(ax, ay, az)).multiplyScalar(0.5);
      indices.push(
        ax, ay, az,
        midAB.x, midAB.y, midAB.z,
        midCA.x, midCA.y, midCA.z,

        bx, by, bz,
        midBC.x, midBC.y, midBC.z,
        midAB.x, midAB.y, midAB.z,

        cx, cy, cz,
        midCA.x, midCA.y, midCA.z,
        midBC.x, midBC.y, midBC.z,

        midAB.x, midAB.y, midAB.z,
        midBC.x, midBC.y, midBC.z,
        midCA.x, midCA.y, midCA.z
      );
    }
    const newGeometry = new THREE.BufferGeometry();
    newGeometry.setAttribute('position', new THREE.Float32BufferAttribute(indices, 3));
    working.dispose();
    working = newGeometry;
  }
  return working;
};

const computeAverageEdgeLength = (geometry) => {
  const positionAttr = geometry.getAttribute('position');
  if (!positionAttr || positionAttr.count < 3) return 0;
  const array = positionAttr.array;
  const edgeLength = (ax, ay, az, bx, by, bz) => {
    const dx = ax - bx;
    const dy = ay - by;
    const dz = az - bz;
    return Math.sqrt(dx * dx + dy * dy + dz * dz);
  };
  let total = 0;
  let count = 0;
  for (let i = 0; i < array.length; i += 9) {
    const ax = array[i];
    const ay = array[i + 1];
    const az = array[i + 2];
    const bx = array[i + 3];
    const by = array[i + 4];
    const bz = array[i + 5];
    const cx = array[i + 6];
    const cy = array[i + 7];
    const cz = array[i + 8];
    total += edgeLength(ax, ay, az, bx, by, bz);
    total += edgeLength(bx, by, bz, cx, cy, cz);
    total += edgeLength(cx, cy, cz, ax, ay, az);
    count += 3;
  }
  return count === 0 ? 0 : total / count;
};

const buildAdjacency = (geometry) => {
  const indexAttr = geometry.getIndex();
  const positionAttr = geometry.getAttribute('position');
  if (!indexAttr || !positionAttr) return null;
  const neighbors = Array.from({ length: positionAttr.count }, () => new Set());
  const indices = indexAttr.array;
  for (let i = 0; i < indices.length; i += 3) {
    const a = indices[i];
    const b = indices[i + 1];
    const c = indices[i + 2];
    neighbors[a].add(b);
    neighbors[a].add(c);
    neighbors[b].add(a);
    neighbors[b].add(c);
    neighbors[c].add(a);
    neighbors[c].add(b);
  }
  return neighbors;
};

const taubinSmoothInPlace = (geometry, iterations = 2, lambda = 0.5, mu = -0.53) => {
  const positionAttr = geometry.getAttribute('position');
  if (!positionAttr) return;
  const neighbors = buildAdjacency(geometry);
  if (!neighbors) return;
  const vertexCount = positionAttr.count;
  const source = positionAttr.array;
  const temp = new Float32Array(source.length);

  const step = (factor, input, output) => {
    for (let i = 0; i < vertexCount; i += 1) {
      const start = i * 3;
      const neighborSet = neighbors[i];
      if (neighborSet.size === 0) {
        output[start] = input[start];
        output[start + 1] = input[start + 1];
        output[start + 2] = input[start + 2];
        continue;
      }
      let ax = 0;
      let ay = 0;
      let az = 0;
      neighborSet.forEach((neighbor) => {
        const idx = neighbor * 3;
        ax += input[idx];
        ay += input[idx + 1];
        az += input[idx + 2];
      });
      const inv = 1 / neighborSet.size;
      ax *= inv;
      ay *= inv;
      az *= inv;
      const sx = input[start];
      const sy = input[start + 1];
      const sz = input[start + 2];
      output[start] = sx + factor * (ax - sx);
      output[start + 1] = sy + factor * (ay - sy);
      output[start + 2] = sz + factor * (az - sz);
    }
  };

  for (let iter = 0; iter < iterations; iter += 1) {
    step(lambda, source, temp);
    step(mu, temp, source);
  }
  positionAttr.needsUpdate = true;
};

const smoothMeshGeometry = (mesh) => {
  if (!mesh.geometry || mesh.userData.sculptGeometryPrepared) return;
  const originalGeometry = mesh.geometry;
  let workingGeometry = originalGeometry.index ? originalGeometry.toNonIndexed() : originalGeometry.clone();

  const MAX_ITERATIONS = 3;
  const MAX_TRIANGLES = 450000;
  const TARGET_TRIANGLES = 280000;
  const DESIRED_EDGE_RATIO = 0.45;
  const DIAGONAL_EDGE_RATIO = 0.0025;

  workingGeometry.computeBoundingBox();
  const bbox = workingGeometry.boundingBox;
  const diagonal = bbox ? bbox.max.distanceTo(bbox.min) : 0;

  let currentTriangles = workingGeometry.getAttribute('position')?.count / 3 || 0;
  let averageEdge = computeAverageEdgeLength(workingGeometry);
  const baseAverageEdge = averageEdge || 0;

  const diagonalTarget = diagonal > 0 ? diagonal * DIAGONAL_EDGE_RATIO : Infinity;
  const relativeTarget = baseAverageEdge * DESIRED_EDGE_RATIO;
  const minimumTarget = baseAverageEdge * 0.2;
  let targetEdge = Math.max(Math.min(relativeTarget, diagonalTarget), minimumTarget);

  const EDGE_REDUCTION_FLOOR = baseAverageEdge * 0.18;

  let iteration = 0;
  while (
    iteration < MAX_ITERATIONS &&
    currentTriangles < TARGET_TRIANGLES &&
    currentTriangles < MAX_TRIANGLES &&
    averageEdge > targetEdge
  ) {
    const subdivided = subdivideGeometry(workingGeometry, 1);
    if (workingGeometry !== originalGeometry) {
      workingGeometry.dispose();
    }
    workingGeometry = subdivided;
    currentTriangles = workingGeometry.getAttribute('position').count / 3;
    averageEdge = computeAverageEdgeLength(workingGeometry);
    targetEdge = Math.max(targetEdge * 0.65, EDGE_REDUCTION_FLOOR);
    iteration += 1;
  }

  const merged = mergeVertices(workingGeometry, 1e-5) || workingGeometry;
  if (merged !== workingGeometry) {
    workingGeometry.dispose();
  }

  taubinSmoothInPlace(merged, 2, 0.52, -0.57);

  if (typeof merged.computeVertexNormals === 'function') {
    merged.computeVertexNormals();
  }
  if (typeof merged.normalizeNormals === 'function') {
    merged.normalizeNormals();
  }
  merged.computeBoundingBox();
  merged.computeBoundingSphere();

  mesh.geometry = merged;
  mesh.userData.sculptGeometryPrepared = true;
  if (merged !== originalGeometry) {
    originalGeometry.dispose();
  }
};

// 后处理轮廓线配置
const OUTLINE_COLOR = new THREE.Color(0xff6b35);

// 后处理轮廓线控制函数
const updateOutlineSelection = (outlinePass, selectedModelId, modelsRef) => {
  if (!outlinePass) return;
  
  const selectedObjects = [];
  if (selectedModelId) {
    const entry = modelsRef.current.get(selectedModelId);
    if (entry && entry.root) {
      // 收集所有mesh对象
      entry.root.traverse((child) => {
        if (child.isMesh) {
          selectedObjects.push(child);
        }
      });
    }
  }
  
  outlinePass.selectedObjects = selectedObjects;
};

const colorToFloatArray = (hex) => {
  const color = new THREE.Color(hex);
  return color.toArray().map((component) => Number(component.toFixed(6)));
};

const buildShaderExportPayload = (modelName, controls) => ({
  name: modelName || '模型',
  exportedAt: new Date().toISOString(),
  vertexShader,
  fragmentShader,
  uniforms: {
    baseColor: colorToFloatArray(controls.baseColor),
    ridgeColor: colorToFloatArray(controls.ridgeColor),
    valleyColor: colorToFloatArray(controls.valleyColor),
    diffuseStrength: controls.diffuseStrength,
    ambientStrength: controls.ambientStrength,
    specularIntensity: controls.specularIntensity,
    shininess: controls.shininess,
    rimIntensity: controls.rimIntensity,
    rimExponent: controls.rimExponent,
    cavityStrength: controls.cavityStrength,
    ridgeStrength: controls.ridgeStrength,
    valleyStrength: controls.valleyStrength,
    exposure: controls.exposure,
    contrast: controls.contrast,
    lightAzimuth: controls.lightAzimuth,
    lightElevation: controls.lightElevation
  }
});

const formatTwo = (value) => value.toFixed(2);
const formatInt = (value) => value.toFixed(0);
const formatDeg = (value) => `${value.toFixed(0)}°`;

const colorControls = [
  { key: 'baseColor', label: '基础色' },
  { key: 'ridgeColor', label: '脊线颜色' },
  { key: 'valleyColor', label: '谷线颜色' }
];

const rangeSections = [
  {
    title: '光照与明暗',
    items: [
      { key: 'diffuseStrength', label: '漫反射', min: 0.2, max: 2.4, step: 0.01, format: formatTwo },
      { key: 'ambientStrength', label: '环境光', min: 0, max: 1.4, step: 0.01, format: formatTwo },
      { key: 'specularIntensity', label: '高光强度', min: 0, max: 2.5, step: 0.01, format: formatTwo },
      { key: 'shininess', label: '光泽度', min: 8, max: 140, step: 1, format: formatInt },
      { key: 'rimIntensity', label: '轮廓光', min: 0, max: 2.5, step: 0.01, format: formatTwo },
      { key: 'rimExponent', label: '轮廓锐度', min: 0.2, max: 4, step: 0.01, format: formatTwo },
      { key: 'exposure', label: '曝光', min: 0.4, max: 2.8, step: 0.01, format: formatTwo },
      { key: 'contrast', label: '对比度', min: 0.5, max: 2.4, step: 0.01, format: formatTwo }
    ]
  },
  {
    title: 'Cavity 设置',
    items: [
      { key: 'cavityStrength', label: 'Cavity 强度', min: 0, max: 3, step: 0.01, format: formatTwo },
      { key: 'ridgeStrength', label: '脊线强度', min: 0, max: 2.5, step: 0.01, format: formatTwo },
      { key: 'valleyStrength', label: '谷线强度', min: 0, max: 2.5, step: 0.01, format: formatTwo }
    ]
  },
  {
    title: '主光方向',
    items: [
      { key: 'lightAzimuth', label: '方位角', min: 0, max: 360, step: 1, format: formatDeg },
      { key: 'lightElevation', label: '仰角', min: -5, max: 85, step: 1, format: formatDeg }
    ]
  }
];

const createSculptMaterial = (params) => {
  const lightDir = computeLightDirection(new THREE.Vector3(), params.lightAzimuth, params.lightElevation);
  const material = new THREE.ShaderMaterial({
    uniforms: {
      uBaseColor: { value: new THREE.Color(params.baseColor) },
      uRidgeColor: { value: new THREE.Color(params.ridgeColor) },
      uValleyColor: { value: new THREE.Color(params.valleyColor) },
      uLightDir: { value: lightDir },
      uDiffuseStrength: { value: params.diffuseStrength },
      uAmbientStrength: { value: params.ambientStrength },
      uSpecularIntensity: { value: params.specularIntensity },
      uShininess: { value: params.shininess },
      uRimIntensity: { value: params.rimIntensity },
      uRimExponent: { value: params.rimExponent },
      uCavityStrength: { value: params.cavityStrength },
      uRidgeStrength: { value: params.ridgeStrength },
      uValleyStrength: { value: params.valleyStrength },
      uExposure: { value: params.exposure },
      uContrast: { value: params.contrast }
    },
    vertexShader,
    fragmentShader,
    side: THREE.FrontSide
  });
  material.extensions = material.extensions || {};
  material.extensions.derivatives = true;
  return material;
};

const createBackMaterial = () => {
  return   new THREE.MeshStandardMaterial({
        color: 0xbbbbbb, // 背面灰色
        side: THREE.BackSide,
        transparent: true,
        opacity: 1
      });

};

const disposeMaterial = (material) => {
  if (!material) return;
  if (Array.isArray(material)) {
    material.forEach((item) => disposeMaterial(item));
    return;
  }
  material.dispose();
};

const disposeObject = (object) => {
  if (!object) return;
  object.traverse((child) => {
    if (child.isMesh) {
      if (child.geometry && !child.userData?.sharedGeometry) {
        child.geometry.dispose();
      }
      disposeMaterial(child.material);
    }
  });
};

const applyMaterialUniforms = (material, params) => {
  // 处理材质数组的情况
  if (Array.isArray(material)) {
    // 只更新第一个材质（shader材质）的uniforms
    const shaderMaterial = material[0];
    if (shaderMaterial && shaderMaterial.uniforms) {
      applyMaterialUniforms(shaderMaterial, params);
    }
    return;
  }
  
  // 处理单个材质的情况
  if (!material || !material.uniforms) return;
  material.uniforms.uBaseColor.value.set(params.baseColor);
  material.uniforms.uRidgeColor.value.set(params.ridgeColor);
  material.uniforms.uValleyColor.value.set(params.valleyColor);
  computeLightDirection(material.uniforms.uLightDir.value, params.lightAzimuth, params.lightElevation);
  material.uniforms.uDiffuseStrength.value = params.diffuseStrength;
  material.uniforms.uAmbientStrength.value = params.ambientStrength;
  material.uniforms.uSpecularIntensity.value = params.specularIntensity;
  material.uniforms.uShininess.value = params.shininess;
  material.uniforms.uRimIntensity.value = params.rimIntensity;
  material.uniforms.uRimExponent.value = params.rimExponent;
  material.uniforms.uCavityStrength.value = params.cavityStrength;
  material.uniforms.uRidgeStrength.value = params.ridgeStrength;
  material.uniforms.uValleyStrength.value = params.valleyStrength;
  material.uniforms.uExposure.value = params.exposure;
  material.uniforms.uContrast.value = params.contrast;
};

const addSculptMaterialToMeshes = (root, params, materialsSet) => {
  root.traverse((child) => {
    if (!child.isMesh) return;
    smoothMeshGeometry(child);
    
    // 创建正面shader材质
    const sculptMaterial = createSculptMaterial(params);
    
    // 创建背面灰色材质
    const backMaterial = createBackMaterial();
    
    // 释放原有材质
    disposeMaterial(child.material);
    

    let geometry = child.geometry;
    if (!geometry.groups || geometry.groups.length === 0) {
      const count = geometry.index
        ? geometry.index.count
        : geometry.attributes.position.count;
      geometry.clearGroups();
      geometry.addGroup(0, count, 0); // 正面材质
      geometry.addGroup(0, count, 1); // 背面材质
    }

    // geometry.deleteAttribute('normal');
    // geometry = mergeVertices(geometry);
    // geometry.computeVertexNormals();
    // geometry.attributes.position.setUsage(THREE.DynamicDrawUsage);
    // geometry.attributes.normal.setUsage(THREE.DynamicDrawUsage);
    // geometry.computeBoundsTree({ setBoundingBox: false });
    // geometry.computeBoundingBox();
    child.geometry = geometry;
    
    
    // 应用材质数组：[正面材质, 背面材质]
    child.material = [sculptMaterial, backMaterial];
    
    // 将两个材质都添加到materialsSet中
    materialsSet.add(sculptMaterial);
    materialsSet.add(backMaterial);
    
    child.castShadow = true;
    child.receiveShadow = true;
  });
};

const prepareObjectForScene = (object, name, params, materialsSet, options = {}) => {
  const { preservePosition = false } = options;
  let source = object;
  if (object.isBufferGeometry) {
    const geometry = object;
    geometry.computeVertexNormals();
    if (!preservePosition) {
      geometry.center();
    }
    const mesh = new THREE.Mesh(geometry);
    mesh.name = name;
    source = mesh;
  }
  const wrapper = new THREE.Group();
  wrapper.name = name;
  wrapper.userData.selectableRoot = true;
  wrapper.userData.autoSpin = false;
  wrapper.add(source);
  addSculptMaterialToMeshes(wrapper, params, materialsSet);
  let { size, center } = measureBounds(wrapper);
  if (!preservePosition) {
    wrapper.position.sub(center);
    wrapper.updateMatrixWorld(true);
    ({ size, center } = measureBounds(wrapper));
  }
  return { root: wrapper, size, center };
};

const fitCameraToObject = (camera, controls, object, sizeVector, centerVector) => {
  if (!camera || !object) return;
  let size = sizeVector;
  let center = centerVector;
  if (!size || !center) {
    const bounds = measureBounds(object);
    size = bounds.size;
    center = bounds.center;
  }
  const maxDim = Math.max(size.x, size.y, size.z);
  const distance = (maxDim / 2) / Math.tan(THREE.MathUtils.degToRad(camera.fov) / 2) * 1.8;
  tempOffset.copy(cameraDirection).multiplyScalar(distance);
  camera.position.copy(center).add(tempOffset);
  camera.near = Math.max(distance / 200, 0.01);
  camera.far = distance * 1000;
  camera.updateProjectionMatrix();
  if (controls) {
    controls.target.copy(center);
    controls.update();
  }
};

function App() {
  const viewerRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const controlsRef = useRef(null);
  const animationRef = useRef(null);
  const raycasterRef = useRef(new THREE.Raycaster());
  const pointerRef = useRef(new THREE.Vector2());
  const isDraggingRef = useRef(false);
  const selectableRef = useRef([]);
  const modelsRef = useRef(new Map());
  const selectedModelIdRef = useRef(null);
  const composerRef = useRef(null);
  const outlinePassRef = useRef(null);

  const [models, setModels] = useState([]);
  const [selectedModelId, setSelectedModelId] = useState(null);
  const [statusMessage, setStatusMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const selectedModel = models.find((model) => model.id === selectedModelId) || null;
  const currentControls = selectedModel?.controls ?? defaultMaterialState;

  const applyControlsToCurrentMaterials = (id, controls) => {
    const entry = modelsRef.current.get(id);
    if (!entry) return;
    entry.materials.forEach((material) => applyMaterialUniforms(material, controls));
  };

  const registerModelInScene = (
    object,
    name,
    { autoSpin = false, focus = true, status, preservePosition = false } = {}
  ) => {
    const scene = sceneRef.current;
    const camera = cameraRef.current;
    const controls = controlsRef.current;
    if (!scene || !camera) {
      setIsLoading(false);
      return null;
    }
    const id = THREE.MathUtils.generateUUID();
    const parameters = { ...defaultMaterialState };
    const materialsSet = new Set();
    const { root, size, center } = prepareObjectForScene(
      object,
      name,
      parameters,
      materialsSet,
      { preservePosition }
    );
    root.userData.autoSpin = autoSpin;
    root.userData.modelId = id;
    scene.add(root);
    selectableRef.current = [...selectableRef.current, root];
    modelsRef.current.set(id, {
      root,
      materials: materialsSet,
      name: root.name || name || '模型',
      bounds: { size, center }
    });
    setModels((prev) => [
      ...prev,
      { id, name: root.name || name || '模型', controls: parameters, visible: true }
    ]);
    setSelectedModelId(id);
    setStatusMessage(status || `${name || '模型'} 加载完成`);
    setIsLoading(false);
    if (focus) {
      fitCameraToObject(camera, controls, root, size, center);
    }
    return id;
  };

  const handleControlsUpdate = (updater) => {
    const targetId = selectedModelIdRef.current;
    if (!targetId) return;
    setModels((prev) =>
      prev.map((model) => {
        if (model.id !== targetId) return model;
        const updatedControls = updater(model.controls);
        applyControlsToCurrentMaterials(targetId, updatedControls);
        return { ...model, controls: updatedControls };
      })
    );
  };


  const handleDeleteModel = (modelId) => {
    const scene = sceneRef.current;
    if (!scene) return;

    const entry = modelsRef.current.get(modelId);
    if (!entry) return;

    // 从场景中移除模型
    scene.remove(entry.root);
    
    // 清理模型资源
    disposeObject(entry.root);
    
    // 从可选择对象列表中移除
    selectableRef.current = selectableRef.current.filter(obj => obj.userData.modelId !== modelId);
    
    // 从模型映射中移除
    modelsRef.current.delete(modelId);
    
    // 更新状态
    setModels((prev) => prev.filter((model) => model.id !== modelId));
    
    // 如果删除的是当前选中的模型，清除选择
    if (selectedModelIdRef.current === modelId) {
      setSelectedModelId(null);
      selectedModelIdRef.current = null;
    }
    
    setStatusMessage(`模型 ${entry.name} 已删除`);
  };

  const handleClearScene = () => {
    const scene = sceneRef.current;
    if (!scene) return;

    // 清理所有模型
    modelsRef.current.forEach(({ root }) => {
      scene.remove(root);
      disposeObject(root);
    });
    
    // 清空所有引用
    selectableRef.current = [];
    modelsRef.current.clear();
    
    // 清空状态
    setModels([]);
    setSelectedModelId(null);
    selectedModelIdRef.current = null;
    
    setStatusMessage('场景已清空');
  };

  const toggleModelVisibility = (modelId) => {
    const entry = modelsRef.current.get(modelId);
    if (!entry) return;

    const newVisibility = !entry.root.visible;
    entry.root.visible = newVisibility;

    // 更新状态
    setModels((prev) => 
      prev.map((model) => 
        model.id === modelId 
          ? { ...model, visible: newVisibility }
          : model
      )
    );

    // 更新可选择对象列表
    if (newVisibility) {
      // 如果显示，添加到可选择列表
      if (!selectableRef.current.includes(entry.root)) {
        selectableRef.current.push(entry.root);
      }
    } else {
      // 如果隐藏，从可选择列表中移除
      selectableRef.current = selectableRef.current.filter(obj => obj !== entry.root);
      
      // 如果隐藏的是当前选中的模型，清除选择
      if (selectedModelIdRef.current === modelId) {
        setSelectedModelId(null);
        selectedModelIdRef.current = null;
      }
    }

    const modelName = entry.name || '模型';
    setStatusMessage(`模型 ${modelName} 已${newVisibility ? '显示' : '隐藏'}`);
  };

  const handleModelSelect = (modelId) => {
    const entry = modelsRef.current.get(modelId);
    if (!entry || !entry.root.visible) return;

    // 如果点击的是当前选中的模型，则取消选择
    if (selectedModelIdRef.current === modelId) {
      setSelectedModelId(null);
      selectedModelIdRef.current = null;
      return;
    }

    // 选择新模型
    entry.root.userData.autoSpin = false;
    setSelectedModelId(modelId);
    selectedModelIdRef.current = modelId;
  };

  const initLights = () => {
      const addShadowedLight = (x, y, z, color) => {
        const d = 1;
        const directionalLight = new THREE.DirectionalLight(color, 0.4);
        directionalLight.position.set(x, y, z);
        directionalLight.castShadow = true;
        directionalLight.shadow.camera.left = -d;
        directionalLight.shadow.camera.right = d;
        directionalLight.shadow.camera.top = d;
        directionalLight.shadow.camera.bottom = -d;
        directionalLight.shadow.camera.near = 1;
        directionalLight.shadow.camera.far = 4;
        directionalLight.shadow.bias = -0.002;
        return directionalLight;
      };

      // 创建光源
      const lightGroup = new THREE.Group();
      // 环境光
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
      lightGroup.add(ambientLight);

      // 半球光
      const hemisphereLight = new THREE.HemisphereLight(
        0xffffff,
        0x666666,
        0.5
      );
      lightGroup.add(hemisphereLight);

      // 平行光
      const directionalLight1 = addShadowedLight(100, 0, 0, 0xffffff);
      const directionalLight2 = addShadowedLight(-100, 0, 0, 0xffffff);
      const directionalLight3 = addShadowedLight(0, 100, 0, 0xffffff);
      const directionalLight4 = addShadowedLight(0, -100, 0, 0xffffff);
      const directionalLight5 = addShadowedLight(0, 0, 100, 0xffffff);
      const directionalLight6 = addShadowedLight(0, 0, -100, 0xffffff);
      const directionalLight7 = addShadowedLight(100, 100, 100, 0xffffff);
      const directionalLight8 = addShadowedLight(100, -100, 100, 0xffffff);
      const directionalLight9 = addShadowedLight(-100, 100, 100, 0xffffff);
      const directionalLight10 = addShadowedLight(-100, -100, 100, 0xffffff);
      lightGroup.add(
        directionalLight1,
        directionalLight2,
        directionalLight3,
        directionalLight4,
        directionalLight5,
        directionalLight6,
        directionalLight7,
        directionalLight8,
        directionalLight9,
        directionalLight10
      );

      return lightGroup;
    }

  useEffect(() => {
    const container = viewerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#f3f3f3');
    sceneRef.current = scene;

    const lightGroup = initLights();
    scene.add(lightGroup);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    container.innerHTML = '';
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    const camera = new THREE.PerspectiveCamera(
      50,
      container.clientWidth / container.clientHeight,
      0.1,
      2000
    );
    camera.position.set(2.6, 1.8, 3.1);
    cameraRef.current = camera;

    // 初始化后处理
    const composer = new EffectComposer(renderer);
    const renderPass = new RenderPass(scene, camera);
    composer.addPass(renderPass);

    const outlinePass = new OutlinePass(
      new THREE.Vector2(container.clientWidth, container.clientHeight),
      scene,
      camera
    );
    outlinePass.edgeStrength = 3.0;
    outlinePass.edgeGlow = 0.0;
    outlinePass.edgeThickness = 1.0;
    outlinePass.pulsePeriod = 0;
    outlinePass.visibleEdgeColor.set(OUTLINE_COLOR);
    outlinePass.hiddenEdgeColor.set(OUTLINE_COLOR);
    composer.addPass(outlinePass);

    composerRef.current = composer;
    outlinePassRef.current = outlinePass;

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.08;
    controls.minDistance = 0.4;
    controls.maxDistance = 1000;
    controlsRef.current = controls;


    selectableRef.current = [];
    modelsRef.current = new Map();

    const clock = new THREE.Clock();
    const animate = () => {
      animationRef.current = requestAnimationFrame(animate);
      const delta = clock.getDelta();
      if (!isDraggingRef.current) {
        modelsRef.current.forEach(({ root }) => {
          if (root.userData.autoSpin) {
            root.rotation.y += delta * 0.3;
          }
        });
      }
      controls.update();
      composer.render();
    };
    animate();

    const domElement = renderer.domElement;
    const updatePointer = (event) => {
      const rect = domElement.getBoundingClientRect();
      pointerRef.current.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      pointerRef.current.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    };

    const handlePointerUp = (event) => {
      updatePointer(event);
      if (isDraggingRef.current) {
        return;
      }
      const cameraCurrent = cameraRef.current;
      if (!cameraCurrent) {
        return;
      }
      const raycaster = raycasterRef.current;
      raycaster.setFromCamera(pointerRef.current, cameraCurrent);
      const intersects = raycaster.intersectObjects(selectableRef.current, true);
      if (intersects.length === 0) {
        return;
      }
      let target = intersects[0].object;
      while (target && !target.userData.selectableRoot && target.parent) {
        target = target.parent;
      }
      if (target) {
        const modelId = target.userData.modelId;
        if (!modelId) {
          return;
        }
        if (modelId !== selectedModelIdRef.current) {
          target.userData.autoSpin = false;
          setSelectedModelId(modelId);
          setStatusMessage(`${target.name || '模型'} 已选中`);
        }
      }
    };

    domElement.addEventListener('pointermove', updatePointer);
    domElement.addEventListener('pointerdown', updatePointer);
    domElement.addEventListener('pointerup', handlePointerUp);

    const handleResize = () => {
      const { clientWidth, clientHeight } = container;
      renderer.setSize(clientWidth, clientHeight);
      camera.aspect = clientWidth / clientHeight;
      camera.updateProjectionMatrix();
      composer.setSize(clientWidth, clientHeight);
      outlinePass.resolution.set(clientWidth, clientHeight);
    };

    let resizeObserver = null;
    if (window.ResizeObserver) {
      resizeObserver = new ResizeObserver(handleResize);
      resizeObserver.observe(container);
    } else {
      window.addEventListener('resize', handleResize);
    }

    return () => {
      if (resizeObserver) {
        resizeObserver.disconnect();
      } else {
        window.removeEventListener('resize', handleResize);
      }
      domElement.removeEventListener('pointermove', updatePointer);
      domElement.removeEventListener('pointerdown', updatePointer);
      domElement.removeEventListener('pointerup', handlePointerUp);
      cancelAnimationFrame(animationRef.current);
      controls.dispose();
      modelsRef.current.forEach(({ root }) => {
        disposeObject(root);
        scene.remove(root);
      });
      modelsRef.current.clear();
      selectableRef.current = [];
      if (composerRef.current) {
        composerRef.current.dispose();
        composerRef.current = null;
      }
      outlinePassRef.current = null;
      renderer.dispose();
      scene.clear();
      sceneRef.current = null;
      rendererRef.current = null;
      cameraRef.current = null;
      controlsRef.current = null;
    };
  }, []);

  useEffect(() => {
    selectedModelIdRef.current = selectedModelId;
    updateOutlineSelection(outlinePassRef.current, selectedModelId, modelsRef);
  }, [selectedModelId]);

  const handleFileChange = (event) => {
    const fileList = event.target.files ? Array.from(event.target.files) : [];
    if (fileList.length === 0) return;
    event.target.value = '';

    fileList.forEach((file, index) => {
      setIsLoading(true);
      const label = index === 0 ? file.name : `${file.name} (${index + 1})`;
      setStatusMessage(`正在导入 ${label}`);
      const extension = file.name.split('.').pop()?.toLowerCase();
      if (!extension) {
        setIsLoading(false);
        setStatusMessage('无法识别的文件类型');
        return;
      }

      if (extension === 'glb' || extension === 'gltf') {
        const loader = new GLTFLoader();
        const url = URL.createObjectURL(file);
        loader.load(
          url,
          (gltf) => {
            URL.revokeObjectURL(url);
            const root = gltf.scene || gltf.scenes?.[0];
            if (!root) {
              setIsLoading(false);
              setStatusMessage('未找到 glTF 场景');
              return;
            }
            registerModelInScene(root, file.name, { preservePosition: true });
          },
          undefined,
          (error) => {
            URL.revokeObjectURL(url);
            console.error(error);
            setIsLoading(false);
            setStatusMessage('glTF 模型解析失败（请使用嵌入式资源）');
          }
        );
        return;
      }

      if (extension === 'obj') {
        const loader = new OBJLoader();
        const url = URL.createObjectURL(file);
        loader.load(
          url,
          (obj) => {
            URL.revokeObjectURL(url);
            registerModelInScene(obj, file.name, { preservePosition: true });
          },
          undefined,
          (error) => {
            URL.revokeObjectURL(url);
            console.error(error);
            setIsLoading(false);
            setStatusMessage('OBJ 模型解析失败');
          }
        );
        return;
      }

      if (extension === 'stl') {
        const loader = new STLLoader();
        const url = URL.createObjectURL(file);
        loader.load(
          url,
          (geometry) => {
            URL.revokeObjectURL(url);
            geometry.computeVertexNormals();
            const mesh = new THREE.Mesh(geometry);
            registerModelInScene(mesh, file.name, { preservePosition: true });
          },
          undefined,
          (error) => {
            URL.revokeObjectURL(url);
            console.error(error);
            setIsLoading(false);
            setStatusMessage('STL 模型解析失败');
          }
        );
        return;
      }

      setIsLoading(false);
      setStatusMessage('暂未支持该文件类型');
    });
  };

  const handleRangeChange = (key) => (event) => {
    const value = parseFloat(event.target.value);
    handleControlsUpdate((controls) => ({ ...controls, [key]: value }));
  };

  const handleColorChange = (key) => (event) => {
    const value = event.target.value;
    handleControlsUpdate((controls) => ({ ...controls, [key]: value }));
  };

  const handleExportShader = () => {
    if (!selectedModel) return;
    const payload = buildShaderExportPayload(selectedModel.name, currentControls);
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
    const safeName = (selectedModel.name || 'model')
      .replace(/[^a-zA-Z0-9\-_]+/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '');
    const fileName = `${safeName || 'model'}-shader.json`;
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    setStatusMessage(`已导出 ${selectedModel.name || '模型'} Shader 设置`);
  };

  return (
    <div className="app">
      <header className="toolbar">
        <label className="file-input">
          <input
            type="file"
            accept=".glb,.gltf,.obj,.stl"
            multiple
            onChange={handleFileChange}
          />
          导入模型
        </label>
        <button 
          className="toolbar-button" 
          onClick={handleClearScene}
          disabled={models.length === 0}
        >
          清理场景
        </button>
        <div className="toolbar-status">
          {isLoading ? '正在加载模型…' : statusMessage}
        </div>
      </header>
      <div className="content">
        <aside className="models-panel">
          <div className="panel-header">
            模型列表 ({models.length})
          </div>
          <div className="panel-body">
            {models.length === 0 ? (
              <div className="empty-state">
                暂无模型，请导入模型文件
              </div>
            ) : (
              <div className="model-list">
                {models.map((model) => (
                  <div 
                    key={model.id} 
                    className={`model-item ${!model.visible ? 'hidden' : ''} ${selectedModelId === model.id ? 'selected' : ''}`}
                    onClick={() => handleModelSelect(model.id)}
                  >
                    <div className="model-name">{model.name}</div>
                    <div className="model-actions">
                      <button 
                        className={`visibility-button ${model.visible ? 'visible' : 'hidden'}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleModelVisibility(model.id);
                        }}
                        title={model.visible ? '隐藏模型' : '显示模型'}
                      >
                        {model.visible ? '👁' : '👁‍🗨'}
                      </button>
                      <button 
                        className="delete-button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDeleteModel(model.id);
                        }}
                        title="删除模型"
                      >
                        ×
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </aside>
        <div ref={viewerRef} className="viewer" />
        {selectedModel && (
          <aside className="material-panel">
            <div className="panel-header">
              {selectedModel.name || '未命名模型'}
            </div>
            <div className="panel-body">
              <div className="panel-section">
                <div className="section-title">材质颜色</div>
                {colorControls.map((control) => (
                  <label key={control.key} className="control">
                    <div className="control-label">
                      <span>{control.label}</span>
                      <span>{currentControls[control.key].toUpperCase()}</span>
                    </div>
                    <input
                      type="color"
                      value={currentControls[control.key]}
                      onChange={handleColorChange(control.key)}
                    />
                  </label>
                ))}
              </div>
              {rangeSections.map((section) => (
                <div key={section.title} className="panel-section">
                  <div className="section-title">{section.title}</div>
                  {section.items.map((item) => (
                    <label key={item.key} className="control">
                      <div className="control-label">
                        <span>{item.label}</span>
                        <span>{item.format(currentControls[item.key])}</span>
                      </div>
                      <input
                        type="range"
                        min={item.min}
                        max={item.max}
                        step={item.step}
                        value={currentControls[item.key]}
                        onChange={handleRangeChange(item.key)}
                      />
                    </label>
                  ))}
                </div>
              ))}
              <div className="panel-actions">
                <button className="panel-button" type="button" onClick={handleExportShader}>
                  导出 Shader
                </button>
              </div>
            </div>
          </aside>
        )}
      </div>
    </div>
  );
}

export default App;

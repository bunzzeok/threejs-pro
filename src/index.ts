import * as THREE from "three";
import { OrbitControls } from "./tsFile/controlPage.js";
import "./style.css";

import { setCamera } from "./tsFile/camera";
import { setCube } from "./tsFile/cube";
import { setLight } from "./tsFile/light";
import { setRenderer } from "./tsFile/renderer";
import { setField } from "./tsFile/field";
import { setFont } from "./tsFile/font";

// 공간 생성
const scene = new THREE.Scene();
// 시야
const camera = setCamera();

const renderer = setRenderer();

setFont(scene);
const light = setLight();

const controls = new OrbitControls(camera, renderer.domElement);
controls.target.set(0, 0, 0);
controls.update();
// 주방식탁
setCube(scene, "#333333", 13, 50, 20, -70, 15, 10);

// 테이블
setCube(scene, "#ada671", 30, 50, 5, 30, 0, 15);
// 테이블
setCube(scene, "#000000", 2, 2, 15, 43, -23, 6);
setCube(scene, "#333333", 2, 2, 15, 17, -23, 6);
setCube(scene, "#333333", 2, 2, 15, 43, 23, 6);
setCube(scene, "#333333", 2, 2, 15, 17, 23, 6);

//소파
setCube(scene, "#333333", 40, 10, 20, 30, 65, 10);
setCube(scene, "#333333", 40, 10, 10, 30, 55, 5);

const cubes = [setCube(scene, "#f2f5f8", 20, 20, 20, -70, 15, 10)];

const filed = [
  // 필드
  setField(scene, "#777777", 200, 140, 0, 0, 0, 0, 0, 0),
  // 왼쪽벽
  setField(scene, "#f2f5f8", 50, 140, -100, 0, 25, 0, Math.PI * 0.5, 0),
  // 위쪽 벽
  setField(scene, "#f2f5f8", 200, 50, 0, 70, 25, Math.PI * 0.5, 0, 0),
  // 회의실 벽
  setField(scene, "#f2f5f8", 200, 50, 0, -45, 25, Math.PI * 0.5, 0, 0),
  // 회의실간의 사이
  setField(scene, "#f2f5f8", 40, 25, -10, -58, 25, 0, Math.PI * 0.5, 0),
  setField(scene, "#f2f5f8", 40, 25, 60, -58, 25, 0, Math.PI * 0.5, 0),
];

scene.add(light);

function animate() {
  requestAnimationFrame(animate);

  cubes.forEach((aItem) => {
    aItem.position.z += 2;
    aItem.position.x += 1;

    aItem.rotation.z += 0.02;
    aItem.rotation.y += 0.02;
  });

  renderer.render(scene, camera);
}

animate();

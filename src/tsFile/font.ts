import * as THREE from "three";
import { FontLoader } from "./FontLoader.js";

const setFont = (scene) => {
  const spread = 15;
  const objects = [];

  const loader = new FontLoader();

  function loadFont(url) {
    // return require(url);
    // return fetch(url).then((res) => {
    //   console.log(res);
    //   return res.json();
    // });
    return new Promise((resolve, reject) => {
      loader.load(url, resolve, undefined, reject);
    });
  }

  function createMaterial() {
    const material = new THREE.MeshPhongMaterial({
      side: THREE.DoubleSide,
    });

    const hue = Math.random();
    const saturation = 1;
    const luminance = 0.5;
    material.color.setHSL(hue, saturation, luminance);

    return material;
  }

  function addSolidGeometry(x, y, geometry) {
    const mesh = new THREE.Mesh(geometry, createMaterial());
    addObject(x, y, mesh);
  }

  function addObject(x, y, obj) {
    obj.position.x = x * spread;
    obj.position.y = y * spread;

    scene.add(obj);
    objects.push(obj);
  }

  async function doit() {
    const font = await loadFont("../helvetiker_regular_typeface.json");
    console.log(font);
    const geometry = new THREE.TextGeometry("three.js", {
      font: font,
      size: 3.0,
      height: 0.2,
      curveSegments: 12,
      bevelEnabled: true,
      bevelThickness: 0.15,
      bevelSize: 0.3,
      bevelSegments: 5,
    });

    addSolidGeometry(-0.5, 0, geometry);

    const mesh = new THREE.Mesh(geometry, createMaterial());
    geometry.computeBoundingBox();
    geometry.boundingBox.getCenter(mesh.position).multiplyScalar(-1);

    const parent = new THREE.Object3D();
    parent.add(mesh);

    addObject(0.5, 0, parent);
  }
  doit();
};
export { setFont };

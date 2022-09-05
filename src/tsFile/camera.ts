import * as THREE from "three";

const setCamera = () => {
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  // const canvas = renderser.domElement;
  // camera.aspect = canvas.clientWidth / canvas.clientHeight;
  camera.updateProjectionMatrix();

  camera.position.set(150, -100, 150);

  return camera;
};

export { setCamera };

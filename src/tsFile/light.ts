import * as THREE from "three";

const setLight = () => {
  const light = new THREE.DirectionalLight("#f8f8f8", 3);

  light.position.set(50, -50, 50);

  return light;
};

export { setLight };

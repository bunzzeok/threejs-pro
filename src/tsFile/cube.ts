import * as THREE from "three";

const setCube = (
  scene,
  aColor: string,
  aXSize: number,
  aYSize: number,
  aZSize: number,
  aXaxis: number,
  aYaxis: number,
  aZaxis: number
) => {
  const loader = new THREE.TextureLoader();

  const material = new THREE.MeshStandardMaterial({ color: aColor });

  const geometry = new THREE.BoxBufferGeometry(aXSize, aYSize, aZSize);

  const cube = new THREE.Mesh(geometry, material);

  cube.position.x = aXaxis;
  cube.position.y = aYaxis;
  cube.position.z = aZaxis;

  scene.add(cube);

  return cube;
};

export { setCube };

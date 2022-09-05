import * as THREE from "three";

const setField = (
  scene,
  aColor: string,
  aWidth: number,
  aHeight: number,
  aXaxis: number,
  yXaxis: number,
  zXaxis: number,
  aXRotation: number,
  aYRotation: number,
  aZRotation: number
) => {
  const width = aWidth; // ui: width
  const height = aHeight; // ui: height
  const geometry = new THREE.PlaneGeometry(width, height);
  const material = new THREE.MeshStandardMaterial({ color: aColor });
  const field = new THREE.Mesh(geometry, material);

  field.position.x = aXaxis;
  field.position.y = yXaxis;
  field.position.z = zXaxis;

  field.rotation.y = aYRotation;
  field.rotation.x = aXRotation;
  field.rotation.z = aZRotation;

  scene.add(field);

  return field;
};

export { setField };

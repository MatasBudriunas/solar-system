import * as THREE from 'three';

export function addSunlight(scene, sun) {
    const pointLight = new THREE.PointLight(0xffffff, 200, 200);
    pointLight.position.copy(sun.position);
    scene.add(pointLight);
}

export function addAmbientLight(scene) {
    const ambientLight = new THREE.AmbientLight(0xffffff, 10);
    scene.add(ambientLight);

    return ambientLight;
}

import * as THREE from 'three';

export function createSun() {
    let geometry = new THREE.SphereGeometry(3, 32, 32);
    let texture = new THREE.TextureLoader().load('/textures/sun-texture-8k.jpg');
    let material = new THREE.MeshPhongMaterial({ map: texture });
    return new THREE.Mesh(geometry, material);
}

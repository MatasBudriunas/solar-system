import * as THREE from 'three';

export function addMilkyWay(scene) {
    const starTexture = new THREE.TextureLoader().load('/textures/stars-milky-way-8k.jpg');
    const starGeometry = new THREE.SphereGeometry(750, 64, 64);
    const starMaterial = new THREE.MeshBasicMaterial({
        map: starTexture,
        side: THREE.BackSide
    });

    const milkyWay = new THREE.Mesh(starGeometry, starMaterial);
    scene.add(milkyWay);
}

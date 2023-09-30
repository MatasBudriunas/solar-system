import axios from 'axios';
import * as THREE from 'three';

export async function createPlanets() {
    const { data } = await axios.get('/api/get-solar-system-planets');
    const planetsData = data.planets;
    let planetMeshes = [];

    planetsData.forEach(planetData => {
        let geometry = new THREE.SphereGeometry(planetData.size, 32, 32);
        let texture = new THREE.TextureLoader().load(planetData.texture);
        let material = new THREE.MeshBasicMaterial({ map: texture });
        let planet = new THREE.Mesh(geometry, material);
        planetMeshes.push({ mesh: planet, ...planetData });
    });

    return planetMeshes;
}

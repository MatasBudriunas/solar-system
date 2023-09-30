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
        planet.name = planetData.name;

        if (planetData.moons) {
            planetData.moons.forEach(moonData => {
                let moonGeometry = new THREE.SphereGeometry(moonData.size, 16, 16);
                let moonTexture = new THREE.TextureLoader().load(moonData.texture);
                let moonMaterial = new THREE.MeshBasicMaterial({ map: moonTexture });
                let moon = new THREE.Mesh(moonGeometry, moonMaterial);

                moon.rotationSpeed = moonData.rotationSpeed;
                moon.orbitRadius = moonData.orbitRadius;

                moon.position.set(moonData.orbitRadius, 0, 0);
                planet.add(moon);
            });
        }

        if (planetData.name === 'Saturn') {
            const ringInnerRadius = 1.2 * planetData.size;
            const ringOuterRadius = 2.0 * planetData.size;
            const ringHeight = 0.02;
            const ringSegments = 128;

            const ringGeometry = new THREE.CylinderGeometry(ringInnerRadius, ringOuterRadius, ringHeight, ringSegments);
            const ringTexture = new THREE.TextureLoader().load('/textures/saturn-ring-texture-8k.png');
            const ringMaterial = new THREE.MeshBasicMaterial({ map: ringTexture, side: THREE.DoubleSide });
            const ring = new THREE.Mesh(ringGeometry, ringMaterial);

            ring.rotation.x = Math.PI / 2;

            ring.name = 'SaturnRing';
            planet.add(ring);
        }

        planetMeshes.push({ mesh: planet, ...planetData });
    });

    return planetMeshes;
}

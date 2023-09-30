import { updateCameraPosition } from './ControlHandlers.js'

export function animate(camera, sun, planetMeshes, renderer, scene, state, ambientLight) {
    let timeIncrement = 0.1;
    let lightTimeIncrement = 0.01;
    let time = 0;
    let lightTime = 0;
    let sunRotationSpeed = 0.00005;

    function animate() {
        requestAnimationFrame(animate);

        time += timeIncrement;
        lightTime += lightTimeIncrement;

        ambientLight.intensity = 7 + 8 * Math.sin(lightTime);

        planetMeshes.forEach((planetData) => {
            const orbitTime = time * planetData.rotationSpeed;

            sun.rotation.x += sunRotationSpeed;
            sun.rotation.y += sunRotationSpeed;

            planetData.mesh.rotation.x += planetData.rotationSpeed * timeIncrement;
            planetData.mesh.rotation.y += planetData.rotationSpeed * timeIncrement;

            planetData.mesh.position.x = planetData.orbitRadius * Math.cos(orbitTime);
            planetData.mesh.position.z = planetData.orbitRadius * Math.sin(orbitTime);
        });
        updateCameraPosition(camera, state);

        renderer.render(scene, camera);
    }

    animate();
}

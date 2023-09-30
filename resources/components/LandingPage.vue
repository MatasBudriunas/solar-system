<template>
    <!-- Bind the ref here -->
    <div :ref="threeJsContainer"></div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import initThreeJS from '../js/initThreeJS.js';
import { createSun } from '../js/CreateSun.js';
import { addSunlight, addAmbientLight } from '../js/lighting.js';
import { createPlanets } from '../js/CreatePlanets.js';
import { handleZoom, handleDragRotation } from '../js/ControlHandlers.js';
import { animate } from '../js/Animate.js';

const threeJsContainer = ref(null);

onMounted(async () => {
    const state = {
        radius: 75,
        theta: Math.PI / 4,
        phi: Math.PI / 4
    };

    const { scene, camera, renderer } = initThreeJS(state);

    const sun = createSun();
    const ambientLight = addAmbientLight(scene);
    const planetMeshes = await createPlanets();

    scene.add(sun);
    addAmbientLight(scene);
    addSunlight(scene, sun);

    planetMeshes.forEach(planetData => scene.add(planetData.mesh));

    handleZoom(camera, state, sun);
    handleDragRotation(camera, state, sun);
    animate(camera, sun, planetMeshes, renderer, scene, state, ambientLight);

    if (threeJsContainer.value) {
        threeJsContainer.value.appendChild(renderer.domElement);
    }

    camera.lookAt(sun.position);
});
</script>

<style scoped>
</style>

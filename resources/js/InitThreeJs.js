import * as THREE from 'three';
import { addMilkyWay } from '../js/AddStars.js';

export default function initThreeJS(state) {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();

    camera.position.x = state.radius * Math.sin(state.phi) * Math.cos(state.theta);
    camera.position.y = state.radius * Math.cos(state.phi);
    camera.position.z = state.radius * Math.sin(state.phi) * Math.sin(state.theta);

    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    addMilkyWay(scene);

    return { scene, camera, renderer };
}

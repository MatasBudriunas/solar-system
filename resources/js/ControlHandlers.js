let zoomFactor = 1.1;

const minZoom = 4;
const maxZoom = 100;

export const handleZoom = (camera, state, sun) => {
    window.addEventListener('wheel', function(event) {
        if (event.deltaY < 0 && state.radius > minZoom) {
            state.radius /= zoomFactor;
        } else if (event.deltaY > 0 && state.radius < maxZoom) {
            state.radius *= zoomFactor;
        }
        updateCameraPosition(camera, state);
        camera.lookAt(sun.position);
    });
    updateCameraPosition(camera, state);
};

let dragSpeed = 0.01;
const minPolarAngle = 0.01;
const maxPolarAngle = Math.PI - 0.01;

export const handleDragRotation = (camera, state, sun) => {
    let isDragging = false;
    let lastX, lastY;

    window.addEventListener('mousedown', function(event) {
        isDragging = true;
        lastX = event.clientX;
        lastY = event.clientY;
    });

    window.addEventListener('mousemove', function(event) {
        if (!isDragging) return;

        let deltaX = event.clientX - lastX;
        let deltaY = event.clientY - lastY;

        state.theta += deltaX * dragSpeed;
        state.phi += deltaY * dragSpeed;

        state.phi = Math.max(minPolarAngle, Math.min(maxPolarAngle, state.phi));

        lastX = event.clientX;
        lastY = event.clientY;

        updateCameraPosition(camera, state);
        camera.lookAt(sun.position);
    });

    window.addEventListener('mouseup', function() {
        isDragging = false;
    });

    updateCameraPosition(camera, state);
};

export const updateCameraPosition = (camera, state) => {
    let x = state.radius * Math.sin(state.phi) * Math.cos(state.theta);
    let y = state.radius * Math.cos(state.phi);
    let z = state.radius * Math.sin(state.phi) * Math.sin(state.theta);
    camera.position.set(x, y, z);
    camera.updateProjectionMatrix();
};

export const handlePause = (state) => {
    window.addEventListener('keydown', function(event) {
        switch (event.code) {
            case "Space":
                state.isPaused = !state.isPaused;
                break;
            default:
                break;
        }
    });
};

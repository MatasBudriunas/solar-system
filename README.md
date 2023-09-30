# 3D Solar System Simulator

## Overview

This is a 3D solar system simulator built using Laravel, Vue, Vite, and Three.js. Experience the planets revolving around the sun in real-time, drag to rotate the view, and zoom in/out to explore the solar system!

---

## Features

- **3D Planets**: Realistic 3D models of planets in our solar system.
- **Interactive Controls**: Drag to rotate the solar system and use the scroll wheel to zoom in and out.
- **Responsive**: Adjusts to fit the screen size, ensuring a smooth experience on any device.

---

## Installation

### Prerequisites

- PHP >= 8.0
- Node.js >= 14
- Composer
- Yarn or npm

### Steps

1. **Clone the repository**

    ```bash
    git clone https://github.com/MatasBudriunas/solar-system.git
    cd solar-system
    ```

2. **Install PHP dependencies**

    ```bash
    composer install
    ```

3. **Install JavaScript dependencies**

    ```bash
    yarn install
    # OR
    npm install
    ```

4. **Environment Setup**

    Copy `.env.example` to `.env` and update the environment variables as necessary.

    ```bash
    cp .env.example .env
    ```

5. **Development Server**

    ```bash
    php artisan serve
    ```

    In another terminal window, run:

    ```bash
    vite
    # OR
    vite build
    ```

    Now, the app should be accessible at `http://localhost:8000`.

---

## Usage

- **Drag**: Hold down the left mouse button and move the mouse to rotate the solar system.
- **Zoom**: Use the scroll wheel to zoom in and out.

---

## Contributing

Feel free to open issues and pull requests!

---

## License

This project is open-source, under the MIT License.

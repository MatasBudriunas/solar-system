<?php

declare(strict_types=1);

namespace App\Constants;

final class PlanetConstants
{
    public const PLANETS = [
        'MERCURY' => [
            'name' => 'Mercury',
            'rotationSpeed' => 0.005,
            'orbitRadius' => 5,  // approximated, not to scale
            'size' => 0.4,  // scaled down size, not to scale
            'texture' => '/textures/mercury-texture-8k.jpg',
        ],
        'VENUS' => [
            'name' => 'Venus',
            'rotationSpeed' => 0.004,
            'orbitRadius' => 9,
            'size' => 0.9,
            'texture' => '/textures/venus-texture-8k.jpg',
        ],
        'EARTH' => [
            'name' => 'Earth',
            'rotationSpeed' => 0.01,
            'orbitRadius' => 12,
            'size' => 1,
            'texture' => '/textures/earth-texture-8k.jpg',
        ],
        'MARS' => [
            'name' => 'Mars',
            'rotationSpeed' => 0.008,
            'orbitRadius' => 18,
            'size' => 0.5,
            'texture' => '/textures/mars-texture-8k.jpg',
        ],
        'JUPITER' => [
            'name' => 'Jupiter',
            'rotationSpeed' => 0.003,
            'orbitRadius' => 26,
            'size' => 2.3,
            'texture' => '/textures/jupiter-texture-8k.jpg',
        ],
        'SATURN' => [
            'name' => 'Saturn',
            'rotationSpeed' => 0.002,
            'orbitRadius' => 35,
            'size' => 1.9,
            'texture' => '/textures/saturn-texture-8k.jpg',
        ],
        'URANUS' => [
            'name' => 'Uranus',
            'rotationSpeed' => 0.001,
            'orbitRadius' => 45,
            'size' => 1.6,
            'texture' => '/textures/uranus-texture.jpg',
        ],
        'NEPTUNE' => [
            'name' => 'Neptune',
            'rotationSpeed' => 0.0009,
            'orbitRadius' => 55,
            'size' => 1.5,
            'texture' => '/textures/neptune-texture.jpg',
        ],
    ];
}

<?php

namespace App\Factories;

class PlanetFactory
{
    public static function createPlanet($name, $rotationSpeed, $orbitRadius, $size, $texture, ?array $moons): array
    {
        return [
            'name' => $name,
            'rotationSpeed' => $rotationSpeed,
            'orbitRadius' => $orbitRadius,
            'size' => $size,
            'texture' => $texture,
            'moons' => $moons ?? null,
        ];
    }
}

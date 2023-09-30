<?php

namespace App\Factories;

class PlanetFactory
{
    public static function createPlanet($name, $rotationSpeed, $orbitRadius, $size, $texture): array
    {
        return [
            'name' => $name,
            'rotationSpeed' => $rotationSpeed,
            'orbitRadius' => $orbitRadius,
            'size' => $size,
            'texture' => $texture,
        ];
    }
}

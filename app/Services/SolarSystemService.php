<?php

declare(strict_types=1);

namespace App\Services;

use App\Constants\PlanetConstants;
use App\Factories\PlanetFactory;

class SolarSystemService
{

    public function __construct(private readonly PlanetFactory $planetFactory) {
    }
    public function getAllPlanets(): array
    {
        $allPlanets = [];

        foreach (PlanetConstants::PLANETS as $planet) {
            $allPlanets[] = $this->planetFactory->createPlanet(
                $planet['name'],
                $planet['rotationSpeed'],
                $planet['orbitRadius'],
                $planet['size'],
                $planet['texture']
            );
        }

        return $allPlanets;
    }
}

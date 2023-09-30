<?php

declare(strict_types=1);

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Services\SolarSystemService;
use Symfony\Component\HttpFoundation\JsonResponse;

class SolarSystemController extends Controller
{
    public function __construct(private readonly SolarSystemService $solarSystemService){
    }
    public function getSolarSystemPlanets(): JsonResponse
    {
        return response()->json(['planets' => $this->solarSystemService->getAllPlanets()]);
    }
}

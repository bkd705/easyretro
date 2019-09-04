<?php

namespace App\Http\Controllers;

use App\Team;
use Illuminate\Http\Request;

class TeamController extends Controller
{
    public function show(Team $team)
    {
        return $team;
    }

    public function store(Request $request)
    {
        $teamName = $request->input('name');

        $team = Team::create([
            'name' => $teamName
        ]);

        return response($team, 200);
    }
}

<?php

namespace App\Http\Controllers;

use App\Board;
use App\Team;
use Illuminate\Http\Request;

class BoardController extends Controller
{
    public function index(Team $team)
    {
        $boards = $team->boards()->get();

        return response($boards, 200);
    }

    public function store(Request $request, Team $team)
    {
        $board = $team->boards()->create();

        return response($board, 200);
    }
}

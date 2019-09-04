<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/team/{team}', 'TeamController@show');
Route::post('/team', 'TeamController@store');

Route::post('/team/{team}/board', 'BoardController@store');
Route::get('/team/{team}/board', 'BoardController@index');

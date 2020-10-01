<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();

});
Route::post('/login', 'Api\AuthController@login');

//Route::resource('spot', 'SpotsController');
Route::post('/judge', [\App\Http\Controllers\Api\JudgesController::class, 'storeJudge']);
Route::post('/spot', [\App\Http\Controllers\Api\SpotsController::class, 'storeSpot']);
Route::post('/team', [\App\Http\Controllers\Api\TeamsController::class, 'storeTeam']);


// get data
Route::get('/judge/get', [\App\Http\Controllers\Api\JudgesController::class, 'index']);
Route::get('/spot/get', [\App\Http\Controllers\Api\SpotsController::class, 'index']);
Route::get('/team/get', [\App\Http\Controllers\Api\TeamsController::class, 'index']);




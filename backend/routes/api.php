<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\OrderAPIController;
use App\Http\Controllers\LoginAPIController;
use App\Http\Controllers\WorkerAPIController;
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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
//for html file
Route::get('/orders/list',[OrderController::class,'APIList']);
Route::post('/orders/list',[OrderController::class,'APIPost']);
// for working with react
Route::get('/order/list',[OrderAPIController::class,'list'])->middleware('APIAuth');
Route::post('/order/list',[OrderAPIController::class,'add']);

Route::post('/register',[LoginAPIController::class,'Register']); 

//Route::post('/uploadImg',[WorkerAPIController::class,'UploadImage']); 
Route::post('/addworker',[WorkerAPIController::class,'addworker']); 
Route::get('/workers/list',[WorkerAPIController::class,'index']);
Route::delete('/deleteWorker/{id}',[WorkerAPIController::class,'destroyWorker'])->name('destroyWorker');
Route::get('/editWorker/{id}',[WorkerAPIController::class,'editWorker'])->name('editWorker');
Route::post('/updateWorker/{id}',[WorkerAPIController::class,'updateWorker'])->name('updateWorker');
    

Route::post('/login',[LoginAPIController::class,'login']); 
Route::post('/logout',[LoginAPIController::class,'logout']); 
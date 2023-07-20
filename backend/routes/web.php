<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\EmployeeController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\UploadImageController;
use App\Mail\TestMail;
use App\Mail\TestMails;
use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('index');
});

Route::get('/send', function(){
    Mail::to("20-42888-1@student.aiub.edu")->send(new TestMails('hello'));
    dd("mail sent!");
 });

Route::get('send-email', function(){
 
    $mailData=[
        "name" =>"test name",
        "dob"=>"2/2/1"       
    ];
    Mail::to("oscardeb2000@gmail.com")->send(new TestMail($mailData));
    dd("mail sent!");
});

Route::get('set-session', function(Request $request){
    $request->session()->put('a', 'v');
    return redirect('get-all');
});
Route::get('image',[UploadImageController::class,'viewImage'])->name('viewImage');
Route::post('/upload-image',[UploadImageController::class,'uploadImage'])->name('uploadImage');
Route::get('uploadedImages',[UploadImageController::class,'uploadedImage'])->name('uploadImage');

Route::group(['middleware'=>'guest','role'],function(){
Route::get('login',[AuthController::class, 'index'])->name('login');
Route::post('login',[AuthController::class,'login'])->name('login');

Route::get('register',[AuthController::class, 'register_view'])->name('register');
Route::post('register',[AuthController::class,'register'])->name('register');

});

Route::group(['middleware'=>'auth'],function(){
    Route::get('employeeDashboard',[EmployeeController::class,'index'])->name('employeeDashboard');
    Route::get('home',[AuthController::class,'home'])->name('home');
    Route::get('logout',[AuthController::class,'logout'])->name('logout');
    Route::get('viewServices',[EmployeeController::class,'viewServices'])->name('viewServices');
    Route::post('viewServices',[EmployeeController::class,'createService'])->name('createServices');
    Route::get('/editServices/{id}',[EmployeeController::class,'editService'])->name('editServices');
    Route::put('/editServices/{id}',[EmployeeController::class,'updateService'])->name('updateServices');
    Route::get('/deleteServices/{id}',[EmployeeController::class,'destroyService'])->name('deleteServices');
    ///////////
    Route::get('viewWorker',[EmployeeController::class,'viewWorker'])->name('viewWorker');
    Route::post('viewWorker',[EmployeeController::class,'createWorker'])->name('createWorker');
    Route::get('/editWorker/{id}',[EmployeeController::class,'editWorker'])->name('editWorker');
    Route::put('/editWorker/{id}',[EmployeeController::class,'updateWorker'])->name('updateWorker');
    Route::get('/deleteWorker/{id}',[EmployeeController::class,'destroyWorker'])->name('destroyWorker');
   
});
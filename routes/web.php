<?php

use Illuminate\Support\Facades\Route;

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
Route::get('/orders/', function () {
	return view('orders');
});
Route::get('/reviews/', function () {
	return view('reviews');
});

Route::post('/orders/index/', 'App\Http\Controllers\OrdersController@index');
Route::post('/reviews/index/', 'App\Http\Controllers\ReviewsController@index');
Route::post('/reviews/form/', 'App\Http\Controllers\ReviewsController@form');
Route::post('/orders/form/', 'App\Http\Controllers\OrdersController@form');

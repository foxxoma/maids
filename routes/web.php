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
Route::group(['middleware' => 'cors'], function() {
	Route::post('/auth/createUser', 'App\Http\Controllers\LoginController@createUser');
	Route::get('/auth/getToken', 'App\Http\Controllers\LoginController@getToken');
	Route::post('/auth/logout', 'App\Http\Controllers\LoginController@logout');
	Route::post('/auth/authenticate', 'App\Http\Controllers\LoginController@authenticate');
	Route::post('/auth/checkUser', 'App\Http\Controllers\LoginController@checkUser');
	Route::get('/reviews/getAll', 'App\Http\Controllers\ReviewsController@getAll');
	Route::post('/reviews/setReview', 'App\Http\Controllers\ReviewsController@setReview');
	Route::post('/orders/setOrder', 'App\Http\Controllers\OrdersController@setOrder');
});


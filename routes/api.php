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
Route::group(['middleware' => 'cors'], function() {
	Route::post('/auth/createUser', 'App\Http\Controllers\LoginController@createUser');
	Route::post('/auth/deleteUser', 'App\Http\Controllers\LoginController@deleteUser');
	Route::post('/auth/authenticate', 'App\Http\Controllers\LoginController@authenticate');
	Route::post('/auth/editUser', 'App\Http\Controllers\LoginController@editUser');

	Route::post('/reviews/getAll', 'App\Http\Controllers\ReviewsController@getAll');
	Route::post('/reviews/delete', 'App\Http\Controllers\ReviewsController@delete');
	Route::post('/reviews/edit', 'App\Http\Controllers\ReviewsController@edit');
	Route::post('/reviews/setReview', 'App\Http\Controllers\ReviewsController@setReview');

	Route::post('/orders/setOrder', 'App\Http\Controllers\OrdersController@setOrder');
	Route::post('/orders/delete', 'App\Http\Controllers\OrdersController@delete');
	Route::post('/orders/getAll', 'App\Http\Controllers\OrdersController@getAll');
	
	Route::post('/admin/auth', 'App\Http\Controllers\AdminController@authenticate');
	Route::post('/admin/getRows', 'App\Http\Controllers\AdminController@getRows');
	Route::post('/admin/editRowsTabel', 'App\Http\Controllers\AdminController@editRowsTabel');
	Route::post('/admin/pagenTabel', 'App\Http\Controllers\AdminController@pagenTabel');
	Route::post('/admin/deleteTebelRow', 'App\Http\Controllers\AdminController@deleteTebelRow');
});
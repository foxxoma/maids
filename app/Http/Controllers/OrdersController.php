<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Orders;
use App\Models\User;

class OrdersController extends Controller
{
	public function getAll(Request $req)
	{
		$user = User::where('email','=',$req['user']['email'])->where('token','=',$req->bearerToken())->first();

		if(empty($user) || empty($req->bearerToken()))
			return ['error' =>'войдите в аккаунт'];

		if(!empty($req->search))
			$orders = Orders::where('user','=',$user['id'])->where('date', '>=', "$req->search")->get()->sortBy('date')->values()->all();
		else
			$orders = Orders::where('user','=',$user['id'])->get();
		
		if(empty($orders))
			return ['error' =>'нет заказов'];

		return ['orders' => $orders];
	}
	public function delete(Request $req)
	{
		$user = User::where('email','=',$req['user']['email'])->where('token','=',$req->bearerToken())->first();

		if(empty($user) || empty($req->bearerToken()))
			return ['error' =>'войдите в аккаунт'];

		$order = Orders::where('id', '=', $req->order)->where('user','=',$user['id'])->first();

		if(!empty($order))
		{
			$order->delete();
			return true;
		}
		else
			return ['error' =>'Вы не можете удалить эту запись'];
	}
    public function setOrder(Request $req)
	{
		$user = User::where('email','=',$req['user']['email'])->where('token','=',$req->bearerToken())->first();

		if(empty($user) || empty($req->bearerToken()))
			return ['error' =>'войдите в аккаунт'];

		$orders = new Orders();
		$orders->user = $user->id;
		$orders->name = $req->input('name');
		$orders->task = $req->input('task');
		$orders->hours = $req->input('hours');
		$orders->phone = $req->input('phone');
		$orders->date = $req->input('date');
		$orders->time = $req->input('time');
		$orders->price = $req->input('price');

		$orders->save();

		return ['order' => $orders];
	}
}

<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Orders;

class OrdersController extends Controller
{
	public function index()
	{
		return [
			'labels' => ['a', 'b', 'c'],
			'datasets' => [
				[
					'label' => 'Зкакзы',
					'backgroundColor' => '#333333',
					'data' => [1,4,2] 
				]
			]
		];
		// $orders = Orders::all();
		// return $orders;
	}
    public function form(Request $req)
	{
		$orders = new Orders();
		$orders->name = $req->input('name');
		$orders->phone = $req->input('phone');
		$orders->date = $req->input('date');
		$orders->time = $req->input('time');
		$orders->price = $req->input('price');

		$orders->save();

		return true;
	}
}

<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Reviews;

class ReviewsController extends Controller
{
	public function index()
	{
		$reviews = Reviews::all();
		return $reviews;
	}
	public function form(Request $req)
	{
		$reviews = new Reviews();
		$reviews->name = $req->input('name');
		$reviews->review = $req->input('review');

		$reviews->save();

		return true;
	}
}

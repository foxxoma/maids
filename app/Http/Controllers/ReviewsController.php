<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Reviews;
use App\Models\User;

class ReviewsController extends Controller
{
	public function getAll(Request $req)
	{
		if(!empty($req->search))
			$reviews = Reviews::where('name', 'like', "%{$req->search}%")->orWhere('review', 'like', "%{$req->search}%")->get();
		else
			$reviews = Reviews::all();
		return ['reviews' => $reviews];
	}
	public function setReview(Request $req)
	{
		$user = User::where('email','=',$req['user']['email'])->where('token','=',$req->bearerToken())->first();

		if(empty($user) || empty($req->bearerToken()))
			return ['error' =>'войдите в аккаунт'];

		$reviews = new Reviews();
		$reviews->user = $user->id;
		$reviews->name = $req->input('name');
		$reviews->review = $req->input('review');

		$reviews->save();

		return ['review' => $reviews];
	}
	public function delete(Request $req)
	{
		$user = User::where('email','=',$req['user']['email'])->where('token','=',$req->bearerToken())->first();

		if(empty($user) || empty($req->bearerToken()))
			return ['error' =>'войдите в аккаунт'];

		$review = Reviews::where('id', '=', $req->review)->where('user','=',$user['id'])->first();

		if(!empty($review))
		{
			$review->delete();
			return true;
		}
		else
			return ['error' =>'Вы не можете удалить эту запись'];
	}
	public function edit(Request $req)
	{
		$user = User::where('email','=',$req['user']['email'])->where('token','=',$req->bearerToken())->first();

		if(empty($user) || empty($req->bearerToken()))
			return ['error' =>'войдите в аккаунт'];

		$review = Reviews::where('id', '=', $req->id)->where('user','=',$user['id'])->first();

		if(!empty($review))
		{
			$review->review = $req->review;
			if($review->save())
				return ['review' => $review];
			else
				return ['error' => 'Не удалось изменить отзыв'];
		}
		else
			return ['error' => 'Вы не можете удалить эту запись'];
	}
}

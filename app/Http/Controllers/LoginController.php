<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\DB;

class LoginController extends Controller
{
	/**
	 * Обработка попытки аутентификации.
	 *
	 * @param  \Illuminate\Http\Request $request
	 * @return Response
	 */
	public function authenticate(Request $request)
	{
		$user = User::where('email','=',$request->input('email'))->first();

		if(empty($user))
			return ['error' =>'не верный email'];

		if(password_verify($request->input('password'),$user->password))
			return ['user' => $user];
		else
			return ['error' => 'не верный пароль'];
	}
	public function createUser(Request $request)
	{
		$user = User::where('email','=',$request->input('email'))->first();

		if(!empty($user))
			return ['error' =>'такой email уже есть'];

		if(User::create([
			'email' => $request->input('email'),
			'name' => $request->input('name'),
			'phone' => $request->input('phone'),
			'password' => bcrypt($request->input('password')),
			'token' => bin2hex(random_bytes(15)),
		]))
			return true;
		else
			return false;
	}
	public function editUser(Request $req)
	{
		$user = User::where('email','=',$req['user']['email'])->where('token','=',$req->bearerToken())->first();

		if(empty($user) || empty($req->bearerToken()))
			return ['error' =>'войдите в аккаунт'];

		$email = User::where('email','=', $req['edit']['email'])->where('id','!=', $user->id)->first();

		if(!empty($email))
			return ['error' =>'такой email уже есть'];

		$user->name = $req['edit']['name'];
		$user->phone = $req['edit']['phone'];
		$user->password = bcrypt($req['edit']['password']);
		$user->email = $req['edit']['email'];

		if($user->save())
			return true;
		else
			return false;
	}
	public function deleteUser(Request $req)
	{
		$user = User::where('email','=',$req['user']['email'])->where('token','=',$req->bearerToken())->first();

		if(empty($user) || empty($req->bearerToken()))
			return ['error' =>'войдите в аккаунт'];

		if ($user->delete())
			return true;
		else
			return ['error' =>'Вы не можете удалить этот аккаунт'];
	}
}

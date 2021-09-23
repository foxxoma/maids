<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Admin;

class AdminController extends Controller
{
	public function authenticate(Request $req)
	{
		$user = Admin::where('email','=',$req->input('email'))->first();

		if(empty($user))
			return ['error' =>'не верный email'];

		if(password_verify($req->input('password'),$user->password))
			return ['user' => $user];
		else
			return ['error' => 'не верный пароль'];
	}
	public function getRows(Request $req)
	{
		$errors = [];
		$tabels = [];

		$user = Admin::where('email','=',$req['user']['email'])->where('token','=',$req->bearerToken())->first();

		if(empty($user) || empty($req->bearerToken()))
			$errors[] = ['error' =>'войдите в аккаунт'];

		if(!empty($errors))
			return $errors;

		$tabelsAll = DB::select('SHOW TABLES');

		foreach ($tabelsAll as $value)
		{
			$tabels[$value->Tables_in_maids]['rows'] = DB::table($value->Tables_in_maids)->skip($req['tabel']['page'][0])->take($req['tabel']['page'][1])->get();
			$tabels[$value->Tables_in_maids]['name'] = $value->Tables_in_maids;
			$tabels[$value->Tables_in_maids]['page'] = $req['tabel']['page'];
			$tabels[$value->Tables_in_maids]['nameRows'] = DB::getSchemaBuilder()->getColumnListing($value->Tables_in_maids);
		}

		if(!empty($tabels))
			return ['tabels' => $tabels];
		else
			return [['error' => 'ничего не найдено']];

	}
	public function pagenTabel(Request $req)
	{
		$errors = [];
		$tabel = [];

		$user = Admin::where('email','=',$req['user']['email'])->where('token','=',$req->bearerToken())->first();

		if(empty($user) || empty($req->bearerToken()))
			$errors[] = ['error' =>'войдите в аккаунт'];

		if(!empty($errors))
			return $errors;

		$tabel[$req['tabel']['name']]['rows'] = DB::table($req['tabel']['name'])->skip($req['tabel']['page'][0])->take($req['tabel']['page'][1])->get();
		$tabel[$req['tabel']['name']]['name'] = $req['tabel']['name'];
		$tabel[$req['tabel']['name']]['page'] = $req['tabel']['page'];
		$tabel[$req['tabel']['name']]['nameRows'] = DB::getSchemaBuilder()->getColumnListing($req['tabel']['name']);

		if(!empty($tabel))
			return ['tabel' => $tabel[$req['tabel']['name']]];
		else
			return [['error' => 'ничего не найдено']];
	}
	public function editRowsTabel(Request $req)
	{
		$errors = [];

		$user = Admin::where('email','=',$req['user']['email'])->where('token','=',$req->bearerToken())->first();

		if(empty($user) || empty($req->bearerToken()))

			$errors[] = ['error' =>'войдите в аккаунт'];

		if(!empty($errors))
			return $errors;

		foreach ($req['tabels'] as $key => $rTabel)
		{
			$tabel = DB::table($key);

			foreach ($rTabel['rows'] as $row)
			{
				if(empty($row['id']))
				{
					$empty = false;

					foreach ($row as $nonKey => $non)
						if(empty($non) && $nonKey != 'id' && $nonKey != 'created_at' && $nonKey != 'updated_at'&& $nonKey != 'remember_token' && $nonKey != 'email_verified_at')
							$empty = true;

					if(!$empty)
						$tabel->insert($row);
				}
				else
				{
					$tabel = DB::table($key);

					$editRow = $tabel->where('id','=',$row['id'])->update($row);
				}
			}
		}

		if(empty($errors))
			return true;
		else
			return $errors;
	}
	public function addRowsTabel($data)
	{
		$errors = [];

		$tabel = DB::table($data['name']);

		if($tabel->insert($data['tabel']))
			return true;
		else
			return [['error' => 'Что-то пошло не так']];
	}
	public function deleteTebelRow(Request $req)
	{
		$errors = [];

		$user = Admin::where('email','=',$req['user']['email'])->where('token','=',$req->bearerToken())->first();

		if(empty($user) || empty($req->bearerToken()))

			$errors[] = ['error' =>'войдите в аккаунт'];

		if(!empty($errors))
			return $errors;

		$tabel = DB::table($req['tabelName']);

		$deleteRow = $tabel->where('id','=',$req['id']);

		if(!$deleteRow->delete())
			$errors[] = ['error' => 'Не удалось изменить запись' . $deleteRow['id']];

		if(empty($errors))
			return true;
		else
			return $errors;
	}
}

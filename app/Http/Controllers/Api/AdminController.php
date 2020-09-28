<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use function GuzzleHttp\Promise\all;

class AdminController extends Controller
{
    //
    public function index()
    {
        return view('dashboard');

    }
    public function CreateSpot(Request $request) {

        dd(all($request));
        $this->validate($request, [
            'name' => 'required|string',
            'address' => 'required|string',
        ]);

        /*
          Add mail functionality here.
        */

        return response()->json(null, 200);
    }
}

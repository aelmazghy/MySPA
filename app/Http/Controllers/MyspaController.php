<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class MyspaController extends Controller
{
    public function index()
    {
        //return view('dashboard');
       return view('welcome');
    }
}

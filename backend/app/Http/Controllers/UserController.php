<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Employee;
use App\Models\User;
class UserController extends Controller
{

    public function index(){
        return view('employee.employeeDashboard');
    }
    
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */

    public function bookService(Request $request)
    {
      $user= new User;

    }


    public function userDashboard(){
        return view('employee.employeeDashboard');
    }
    
}

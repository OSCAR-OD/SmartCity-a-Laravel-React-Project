<?php

namespace App\Http\Controllers;

use App\Models\Login;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Cookie;

class LoginController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(){
        return view('auth.login');
    }

    public function login(Request $req){
        $req->validate([
            'email' => 'required',
            'password' => 'required'
        ]);
        /*
        $e = Employee::where('email',$req->email)
        ->where('password',$req->password)
        ->first();
        if($e){
            session()->put('user',$e->email);
            if ($req->remember) {
                setcookie('remember',$req->email, time()+36000);
                Cookie::queue('name',$c->email,time()+60);
            }
            return redirect()->route('employeeDashboard');
        }
        return redirect()->route('login');
*/
if(\Auth::attempt($req->only('email','password'))){
    return redirect('employeeDashboard');
}

    }
    public function logout(){
        session()->flush();
        return redirect()->route('login');
    }
    //register
    public function register_view(){
        return view('auth.register');
    }
    public function register(Request $req){
        // $req->validate([
        //     'email' => 'required',
        //     'password' => 'required'
        // ]);
    }

    
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreLoginRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreLoginRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Login  $login
     * @return \Illuminate\Http\Response
     */
    public function show(Login $login)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Login  $login
     * @return \Illuminate\Http\Response
     */
    public function edit(Login $login)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateLoginRequest  $request
     * @param  \App\Models\Login  $login
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateLoginRequest $request, Login $login)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Login  $login
     * @return \Illuminate\Http\Response
     */
    public function destroy(Login $login)
    {
        //
    }
    }
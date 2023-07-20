<?php
//namespace App\Http\Controllers\Auth;
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Employee;
use Illuminate\Support\Facades\Cookie;
class SystemController extends Controller
{
    
    public function index(){
        return view('auth.login');
    }
/*
    public function login(Request $req){
        $c = User::where('email',$req->email)
                  ->where('password',$req->password)
                  ->first();
        if($c){
            session()->put('user',$c->email);
            if ($req->remember) {
                setcookie('remember',$req->email, time()+36000);
                Cookie::queue('name',$c->email,time()+60);
            }
            return redirect()->route('products.mycart');
        }
        return redirect()->route('login');

    }
  */
    
public function login(Request $request){
    // validate data 
    $request->validate([
        'email' => 'required',
        'password' => 'required'
    ]);
  /*
    $c = User::where('email',$request->email)
                  ->where('password',$request->password)
                  ->first();
                  if($c){
                    session()->put('user',$c->email);
                    if ($req->remember) {
                        setcookie('remember',$request->email, time()+36000);
                        Cookie::queue('name',$c->email,time()+60);
                    }
                    return redirect()->route('employeeDashboard');
                }
                    /*
    if( DB::select("SELECT * FROM users, employees WHERE email='$request->email' && password= '$request->password'")){
        return redirect('employeeDashboard');
    }
*/
    
    if(\Auth::attempt($request->only('email','password'))){
        return redirect('employeeDashboard');
    }


/*
    if(\Auth::attempt($request->only('email','password'))){
        Session::put('name', Auth::User()->name);
       // Session::put('email', $user->email);
       // Session::put('jobtitle', $user->jobtitle);
        // Session::get('jobtitle')=="general user"
        if($x){
            return redirect('employeeDashboard');
       }return redirect('employeeDashboard');
    }
    /*
  if($u){
  //session()->put('user',$u->email);
  
  if ($req->remember) {
  setcookie('remember',$req->email, time()+36000);
  Cookie::queue('name',$c->email,time()+60);
}

 return redirect()->route('employeeDashboard');
}
*/

else{
 return redirect('login')->withError('Login details are not valid');
}
}

    public function register_view(){
        return view('auth.register');
    }

    public function register(Request $request){
        // validate 
        $request->validate([
            'name'=>'required',
            'email' => 'required|unique:users|email',
            'password'=>'required|confirmed'
        ]);

        // save in users table 
        
       User::create([
            'name'=>$request->name,
            'email'=>$request->email,
            'password'=> \Hash::make($request->password),
            'jobtitle'=>"general user",
        ]);
        if(\Auth::attempt($request->only('email','password'))){
            return redirect('employeeDashboard');
        }

        return redirect('register')->withError('Error');


    }


public function home(){
    return view('home');
}

public function logout(){
    \Session::flush();
    \Auth::logout();
    return redirect('');
}

}

<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Image;
use App\Models\Token;
use Illuminate\Support\Str;
use DateTime;
class LoginAPIController extends Controller
{
    
    public function  login(Request $req){
        if(\Auth::attempt($req->only('email','password'))){
           
            $api_token = Str::random(64);
            $token = new Token();
            $token->email = $req->email;
            $token->token = $api_token;
            $token->created_at = new DateTime();
            $token->save();
            return $token;
        }
        return "No user found";

    }

    /*
    public function  login(Request $req){

        $user = User::where('email',$req->email)->where('password',$req->password)->first();
        
        if($user){
            return "hello";
            $api_token = Str::random(64);
            $token = new Token();
            $token->userid = $user->id;
            $token->token = $api_token;
            $token->created_at = new DateTime();
            $token->save();
            return $token;
        }
        return "No user found";

    }
*/
    public function  logout(Request $req){

        $token = Token::where('token',$req->token)->first();
        if($token){
            $token->expired_at =new DateTime();
            $token->save();
            return $token;
        }

    }

     //register
    
    public function Register(Request $req){
        // $req->validate([
        //     'name' => 'required',
        //     'email' => 'required|email',
        //     'password' => 'required'
        //  ]);
        $name=$req->Input('name');
        $email=$req->Input('email');
        $password=\Hash::make($req->Input('password'));
        $jobtitle=$req->Input('jobtitle');
        $address=$req->Input('address');
        $phone=$req->Input('phone');
        User::create([
            'name'=> $name,
            'email'=> $email,
            'password'=> $password,
            'jobtitle'=>$jobtitle,
            'address'=>$address,
            'phone'=>$phone
         ]);
       }
       public function UploadImage(Request $req){
     if($req->has('image')){
        $image=$req->file('image');
   $imgname=time().'_'.$req->name.'.'.$image->getClientOriginalExtension();
  $image->move('images/',$imgname);
  Image::create([
    'imgname'=>$imgname,
      'name' => $req->input('name'),
]);
  return response()->json(['success'=>'Upload done']);
}  
return response()->json('tryyyyyyyyyyy');
}



} 
<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Image;

class UploadImageController extends Controller
{
    public function uploadImage(Request $request){
    /*
request()->validate([
            'imgname' => 'image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);
      */  
        $image= $request->imgname;
         $name = $image->getClientOriginalName();
        $image->storeAs('public/images',$name);
        $image_save=new Image;
        $image_save->imgname=$name;
        $image_save->save();
        return back();
     
       
        /*

if($request->hasFile('imgname')){
    $ext = $request->file('imgname')->extension();
$final_name=time().'.'.$ext;    
   $request->file('imgname')->move(public_path('uploads/'),$final_name);getClientOriginalName();
    
    // return $imageName;
    */
  

    }
   
    public function viewImage(){
        return view('images.image');
}

public function uploadedImage(){
    $images=Image::all();
    return view('images.image',['image'=>$images]);
}

}
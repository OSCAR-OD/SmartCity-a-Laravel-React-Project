<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Worker;
use App\Models\Image;
use App\Models\Token;
use Illuminate\Support\Str;
use App\Mail\TestMail;
use DateTime;
class WorkerAPIController extends Controller
{
    public function index()
    {
        return response()->json(Worker::latest()->get());

    }
    
public function addworker(Request $req){
    if($req->has('image')){
       $image=$req->file('image');
  $imgname=time().'_'.$req->name.'.'.$image->getClientOriginalExtension();
 $image->move('images/',$imgname);
 Worker::create([
   'imgname'=>$imgname,
     'name' => $req->input('name'),
     'email' => $req->input('email'),
     'address' => $req->input('address'),
     'jobtitle' => $req->input('jobtitle'),
    ]);

    $mailData=[
        "name" =>"You are added as a worker",
        "dob"=>"2/2/1"       
    ];
    \Mail::to($req->email)->send(new TestMail($mailData));
   
    //\Mail::to("oscardeb2000@gmail.com")->send(new TestMail());

    // Mail::to($req->email)->send(new TestMail());
     return response()->json(['success']);
   
 }   
    return response()->json('tryyyyyyyyyyy');
}

public function editWorker($id)
{
    return response()->json(Worker::whereId($id)->first());
}
public function update(Request $request, $id)
    {
        $student = Student::find($id);
        $student->name = $request->input('name');
        $student->email = $request->input('email');
        $student->course = $request->input('course');

        if($request->hasfile('profile_image'))
        {
           //////
            $destination = 'uploads/students/'.$student->profile_image;
            if(File::exists($destination))
            {
                File::delete($destination);
            }
            ///////
            $file = $request->file('profile_image');
            $extention = $file->getClientOriginalExtension();
            $filename = time().'.'.$extention;
            $file->move('uploads/students/', $filename);
            $student->profile_image = $filename;
        }

        $student->update();
        return redirect()->back()->with('status','Student Image Updated Successfully');
    }

public function updateWorker(Request $req, $id)
{ 
$Worker = Worker::whereId($id)->first();
if($req->has('image')){

    $image=$req->file('image');
$imgname=time().'_'.$req->name.'.'.$image->getClientOriginalExtension();
$image->move('images/',$imgname);
$Worker->update([
$Worker->imgname=$imgname,
$Worker->name=$req->name,
 $Worker->email=$req->email,
 $Worker->address=$req->address,
 $Worker->jobtitle=$req->jobtitle,
]);
 return response()->json('Success');
}else{
  return response()->json('tryyyyyyyyyyy');
}
}
public function destroyWorker($id)
{
    Worker::whereId($id)->first()->delete();

    return response()->json('success');
}

} 
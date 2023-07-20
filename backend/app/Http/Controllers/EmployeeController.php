<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Employee;
use App\Models\Service;
use App\Models\Worker;
class EmployeeController extends Controller
{
    public function index(){
        return view('employee.employeeDashboard');
    }

    public function employeeDashboard(){
        return view('employee.employeeDashboard');
    }

    public function viewServices(){
        $service=Service::all();
        return view('services.services',['service'=>$service]);
    }

    public function createService(Request $request){
        $service= new Service;
        $service->srvname=$request->srvname;
        $service->save();
        return redirect(route('viewServices'));
       }
    
       public function editService($id)
       {
        $service=Service::find($id);
        return view('editServices',['service'=>$service]);
 
       }

       public function updateService(Request $request, $id)
       { 
        $service=Service::find($id);
        $service->srvname=$request->srvname;
        $service->save();
        return redirect(route('viewServices'));
    }
    public function destroyService($id)
       {
        Service::destroy($id);
        return redirect(route('viewServices'));
 
       }
////////////////
public function viewWorker(){
    $Worker=Worker::all();
    return view('employee.worker',['Worker'=>$Worker]);
}

public function createWorker(Request $request){
    $Worker= new Worker;
    $Worker->srvname=$request->srvname;
    $Worker->save();
    return redirect(route('viewWorker'));
   }

   public function editWorker($id)
   {
    // $Worker=Worker::find($id);
    // return view('editWorker',['worker'=>$Worker]);

    return response()->json(Worker::whereId($id)->first());
   }

   public function updateWorker(Request $request, $id)
   { 
    $Worker=Worker::find($id);
    $Worker->wname=$request->wname;
    $Worker->email=$request->email;
    $Worker->srvnam=$request->srvnam;
    $Worker->save();
    return redirect(route('viewWorker'));
}
public function destroyWorker($id)
   {
    Worker::destroy($id);
    return redirect(route('viewWorker'));
 }
   //////////
      
   
       }

<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Order;
class OrderAPIController extends Controller
{
    public function list(){
        $products = Order::all();
        return $products;
    }
    public function add(Request $req){
        $pr = new Order();
        //$pr->id = $req->id;
        $pr->oname = $req->oname;
        $pr->oemail = $req->oemail;
        if($pr->save()) return "Successful";
    }
}

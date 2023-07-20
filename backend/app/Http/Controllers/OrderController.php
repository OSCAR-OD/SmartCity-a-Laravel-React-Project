<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Order;
class OrderController extends Controller
{
    public function APIList(){
        return Order::all();
    }
    public function APIPost(Request $req){
        $order = new Order();
        $order->name = $req->name;
        $order->price = $req->price;
        $order->image = $req->image;
        $order->save();
        return $req;
    }
}

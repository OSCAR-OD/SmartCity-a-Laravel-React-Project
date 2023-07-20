<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Order;
use Illuminate\Support\Facades\Hash;

class OrderSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Order::create([
            'oname'=>'osd',
            'email'=>'o@o.com',
            'phone'=>123 ,
            'amount'=>12 ,
            'u_id'=>'1',
            
         ]);
         Order::create([
            'oname'=>'oscar',
            'email'=>'o@a.com',
            'phone'=>01234 ,
            'amount'=>30 ,
            'u_id'=>'1',
            
         ]);
         Order::create([
            'oname'=>'oscar',
            'email'=>'o@a.com',
            'phone'=>01234 ,
            'amount'=>30 ,
            'u_id'=>'1',
            
         ]);
    }
}

<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'name'=>'osd',
            'email'=>'o@o.com',
            'jobtitle'=>'General User',
            'address'=>'1 dhaka',
            'phone'=>123 ,
            'password'=>Hash::make('123456'),
            
         ]);
         User::create([
            'name'=>'arnob',
            'email'=>'a@a.com',
            'jobtitle'=>'user',
            'address'=>'1 dhaka',
            'phone'=>123 ,
            'password'=>Hash::make('123456'),
            
         ]);
    }
}

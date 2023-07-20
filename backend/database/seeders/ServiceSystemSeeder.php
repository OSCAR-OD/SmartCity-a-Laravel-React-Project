<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\ServiceSystem;
use Illuminate\Support\Facades\Hash;
class ServiceSystemSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        ServiceSystem::create([
            'sname'=>'Basundhara City System',
            'email'=>'basundhara@gmail.com',
            'password'=>Hash::make('123456'),
            'slisense'=>'54a21',
         ]); 
    }
}

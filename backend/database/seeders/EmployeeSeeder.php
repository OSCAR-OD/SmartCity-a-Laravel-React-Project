<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Employee;
use Illuminate\Support\Facades\Hash;
class EmployeeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
         Employee::create([
            'name'=>'osd',
            'email'=>'o@o.com',
            'password'=>Hash::make('123456'),
            'jobtitle'=>'employee',
         ]);
    }
}

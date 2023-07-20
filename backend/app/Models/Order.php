<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;
    protected $fillable = [
        'oname',
        'email',
        'phone',
        'amount',
        'id',
    ];
    public function user(){
        return $this->belongsTo(User::class);
    }
}

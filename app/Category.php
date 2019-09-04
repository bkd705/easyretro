<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    public function items()
    {
        $this->hasMany(Item::class);
    }

    public function boards()
    {
        $this->belongsToMany(Board::class);
    }
}

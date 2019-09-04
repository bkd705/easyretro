<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Board extends Model
{
    public function team()
    {
        $this->belongsTo(Team::class);
    }

    public function categories()
    {
        $this->hasMany(Category::class);
    }
}

<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Item extends Model
{
    public function board()
    {
        $this->belongsTo(Board::class);
    }

    public function category()
    {
        $this->belongsTo(Category::class);
    }
}

<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Team extends Model
{
    protected $fillable = ['name'];

    public function boards()
    {
        return $this->hasMany(Board::class);
    }
}

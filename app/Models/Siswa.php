<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Siswa extends Model
{
    use HasFactory;

    public function scopeSearch($query, $searchQuery)
    {
        return $query
            ->where('fullname', 'like', '%' . $searchQuery . '%')
            ->orWhere('nisn', 'like', '%' . $searchQuery . '%')
            ->orWhere('nik', 'like', '%' . $searchQuery . '%')
            ->orWhere('asal_sekolah', 'like', '%' . $searchQuery . '%')
            ->orWhere('tinggal_bersama', 'like', '%' . $searchQuery . '%')
            ->orWhere('alamat_siswa', 'like', '%' . $searchQuery . '%')
            ->orWhere('nama_wali', 'like', '%' . $searchQuery . '%')
            ->orWhere('alamat_wali', 'like', '%' . $searchQuery . '%')
            ->orWhere('domisili', 'like', '%' . $searchQuery . '%')
            ->orWhere('no_aktif', 'like', '%' . $searchQuery . '%');
    }
}

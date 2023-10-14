<?php

namespace App\Models;

use Illuminate\Auth\Authenticatable;
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

    

    protected $fillable = [
        'fullname',
        'nisn',
        'nik',
        'no_telp',
        'role_id',
        'asal_sekolah',
        'tinggal_bersama',
        'alamat_siswa',
        'nama_wali',
        'alamat_wali',
        'domisili',
        'no_aktif',
        'jurusan_id'
    ];

    public function Jurusan()
    {
        return $this->belongsTo(Jurusan::class);
    }
}

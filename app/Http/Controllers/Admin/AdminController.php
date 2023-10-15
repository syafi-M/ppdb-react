<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Siswa;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminController extends Controller
{
    public function IndexAdmin() {
        return Inertia::render('Admin/IndexAdmin', [
            "siswa" => Siswa::paginate(5)
        ]);
    }
}

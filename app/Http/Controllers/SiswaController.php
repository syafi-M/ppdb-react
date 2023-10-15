<?php

namespace App\Http\Controllers;

use App\Http\Requests\Auth\LoginSiswaRequest;
use App\Http\Requests\SiswaRequest;
use App\Http\Resources\SiswaCollection;
use App\Models\Jurusan;
use App\Models\Siswa;
use App\Models\User;
use App\Providers\RouteServiceProvider;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

class SiswaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function search(Request $request)
    {
        $searchQuery = $request->input('query');

        $results = Siswa::search($searchQuery)->get();

        return response()->json($results);
    }
    public function index(Request $request)
    {
        $siswa = Siswa::latest()->paginate(5);
        // dd($siswa);
        
        return Inertia::render('Admin/Siswa/IndexSiswa', [
            'siswas' => $siswa,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $siswa = Siswa::all();
        $jurusan = Jurusan::all();
        return Inertia::render('Admin/Siswa/CreateSiswa', [
            'siswa' => $siswa,
            'jurusan' => $jurusan,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(SiswaRequest $request)
    {
        $siswa = new Siswa();
        $user = new User();

        $user = [
            'name' => $request->fullname,
            'password' => Hash::make($request->nisn),
        ];

        $siswa = [
            'fullname' => $request->fullname,
            'nisn' => $request->nisn,
            'nik' => $request->nik,
            'no_telp' => $request->no_telp,
            'asal_sekolah' => $request->asal_sekolah,
            'tinggal_bersama' => $request->tinggal_bersama,
            'alamat_siswa' => $request->alamat_siswa,
            'nama_wali' => $request->nama_wali,
            'alamat_wali' => $request->alamat_wali,
            'domisili' => $request->domisili,
            'no_aktif' => $request->no_aktif,
            'jurusan_id' => $request->jurusan_id,
        ];

        // dd($siswa, $user);
        Siswa::create($siswa);
        User::create($user);
        
        return redirect()->back();
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $siswas = Siswa::findOrFail($id);
        return Inertia::render("Admin/Siswa/ShowSiswa", [
            'siswa' => $siswas
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $siswas = Siswa::findOrFail($id);
        $jurusan = Jurusan::all();
        return Inertia::render("Admin/Siswa/EditSiswa", [
            'siswa' => $siswas, 
            'jurusan' => $jurusan
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Siswa $siswa)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Siswa $siswa)
    {
        //
    }

    public function LoginSiswa()
    {
        return Inertia::render('Auth/LoginSiswa', [
            'canResetPassword' => Route::has('password.request'),
            'status' => session('status'),
        ]);
    }

    public function LoginSiswaStore(LoginSiswaRequest $request): RedirectResponse
    {
        $request->authenticate();

        $request->session()->regenerate();
        
            return redirect()->intended(RouteServiceProvider::HOME); 
    }
}

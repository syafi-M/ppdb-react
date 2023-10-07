<?php

use App\Models\Jurusan;
use App\Models\User;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('siswas', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(User::class)->nullable();
            $table->string('fullname');
            $table->string('nisn');
            $table->string('nik');
            $table->string('no_telp')->nullable();
            $table->string('asal_sekolah');
            $table->string('tinggal_bersama');
            $table->string('alamat_siswa');
            $table->string('nama_wali');
            $table->string('alamat_wali');
            $table->string('domisili');
            $table->string('no_aktif');
            $table->foreignIdFor(Jurusan::class);
            $table->string('status')->default('daftar ulang');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('siswas');
    }
};

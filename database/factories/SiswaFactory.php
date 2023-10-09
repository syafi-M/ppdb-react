<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Siswa>
 */
class SiswaFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            "fullname" => fake()->name(),
            'nisn' => random_int(1, 12),
            'nik' => random_int(1, 12),
            'no_telp' => fake()->phoneNumber(),
            'asal_sekolah' => fake()->address(),
            'tinggal_bersama' => 'ortu',
            'alamat_siswa' => fake()->address(),
            'nama_wali' => fake()->userName(),
            'alamat_wali' => fake()->address(),
            'domisili' => 'ponorogo',
            'no_aktif' => fake()->phoneNumber(),
            'jurusan_id' => 1,
        ];
    }
}

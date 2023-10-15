<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class SiswaRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'user_id' => 'nullable',
            'fullname' => 'required',
            'nisn' => 'required',
            'nik' => 'required',
            'no_telp' => 'string|nullable',
            'asal_sekolah' => 'string|nullable',
            'tinggal_bersama' => 'string',
            'alamat_siswa' => 'string|nullable',
            'nama_wali' => 'string',
            'alamat_wali' => 'string|nullable',
            'domisili' => 'string',
            'no_aktif' => 'required',
            'jurusan_id' => 'required',
        ];
    }
}

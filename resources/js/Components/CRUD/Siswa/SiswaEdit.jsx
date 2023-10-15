import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Link, useForm } from "@inertiajs/react";
import { toast } from "react-toastify";

export default function SiswaEdit({ jurusan, siswa }) {
    const { data, setData, processing, post, errors, reset } = useForm({
        fullname: siswa.fullname,
        nisn: siswa.nisn,
        nik: siswa.nik,
        no_telp: siswa.no_telp,
        asal_sekolah: siswa.asal_sekolah,
        tinggal_bersama: siswa.tinggal_bersama,
        alamat_siswa: siswa.alamat_siswa,
        nama_wali: siswa.nama_wali,
        alamat_wali: siswa.alamat_wali,
        domisili: siswa.domisili,
        no_aktif: siswa.no_aktif,
        jurusan_id: siswa.jurusan_id !== null ? siswa.jurusan_id : "",
    });

    const submit = (e) => {
        e.preventDefault();

        post(
            route("siswa.update", siswa.id, {
                onSuccess: () => {
                    toast.success("Siswa Berhasil Ditambah", {
                        autoClose: 2000,
                    });
                },
            })
        );
        toast.success("Siswa Berhasil Ditambah", {
            autoClose: 2000,
        });
    };
    // console.log(data);

    return (
        <>
            <form onSubmit={submit}>
                <div className="mx-10">
                    <div className="py-2 flex gap-2">
                        <span className="w-full">
                            <InputLabel
                                htmlFor="fullname"
                                value="Nama Lengkap"
                                className="required"
                            />
                            <TextInput
                                id="fullname"
                                type="text"
                                name="fullname"
                                value={data.fullname}
                                className="mt-1 block w-full"
                                autoComplete="fullname"
                                placeholder="nama lengkap.."
                                isFocused={true}
                                onChange={(e) =>
                                    setData("fullname", e.target.value)
                                }
                            />
                            <InputError message={errors.fullname} />
                        </span>
                        <span className="w-full">
                            <InputLabel
                                htmlFor="nama_wali"
                                value="Nama Wali Siswa"
                            />
                            <TextInput
                                id="nama_wali"
                                type="text"
                                name="nama_wali"
                                value={data.nama_wali}
                                className="mt-1 block w-full"
                                autoComplete="nama_wali"
                                placeholder="nama wali.."
                                isFocused={true}
                                onChange={(e) =>
                                    setData("nama_wali", e.target.value)
                                }
                            />
                            <InputError message={errors.nama_wali} />
                        </span>
                    </div>
                    <div className="w-full py-2">
                        <span className="flex gap-2">
                            <div className="w-full">
                                <InputLabel
                                    htmlFor="nisn"
                                    value="NISN"
                                    className="required"
                                />
                                <TextInput
                                    id="nisn"
                                    type="text"
                                    name="nisn"
                                    value={data.nisn}
                                    className="mt-1 block w-full"
                                    autoComplete="nisn"
                                    placeholder="nisn.."
                                    isFocused={true}
                                    onChange={(e) =>
                                        setData("nisn", e.target.value)
                                    }
                                    required
                                />
                                <InputError message={errors.nisn} />
                            </div>
                            <div className="w-full">
                                <InputLabel
                                    htmlFor="nik"
                                    value="NIK"
                                    className="required"
                                />
                                <TextInput
                                    id="nik"
                                    type="text"
                                    name="nik"
                                    value={data.nik}
                                    className="mt-1 block w-full"
                                    autoComplete="nik"
                                    placeholder="nomor induk keluarga.."
                                    isFocused={true}
                                    onChange={(e) =>
                                        setData("nik", e.target.value)
                                    }
                                    required
                                />
                                <InputError message={errors.nik} />
                            </div>
                        </span>
                    </div>
                    <div className="py-2 flex gap-2">
                        <span className="w-full">
                            <InputLabel
                                htmlFor="no_telp"
                                value="Nomor Telepon"
                                className="required"
                            />
                            <TextInput
                                id="no_telp"
                                type="tel"
                                name="no_telp"
                                value={data.no_telp}
                                className="mt-1 block w-full"
                                autoComplete="no_telp"
                                placeholder="Nomor Aktif.."
                                isFocused={true}
                                onChange={(e) =>
                                    setData("no_telp", e.target.value)
                                }
                                required
                            />
                            <InputError message={errors.no_telp} />
                        </span>
                        <span className="w-full">
                            <InputLabel
                                htmlFor="no_aktif"
                                value="Nomor Aktif"
                                className="required"
                            />
                            <TextInput
                                id="no_aktif"
                                type="tel"
                                name="no_aktif"
                                value={data.no_aktif}
                                className="mt-1 block w-full"
                                autoComplete="no_aktif"
                                placeholder="Nomor Aktif.."
                                isFocused={true}
                                onChange={(e) =>
                                    setData("no_aktif", e.target.value)
                                }
                            />
                            <InputError message={errors.no_aktif} />
                        </span>
                    </div>
                    <div className="py-2">
                        <InputLabel
                            htmlFor="asal_sekolah"
                            value="Asal sekolah"
                            className="required"
                        />
                        <TextInput
                            id="asal_sekolah"
                            type="text"
                            name="asal_sekolah"
                            value={data.asal_sekolah}
                            className="mt-1 block w-full"
                            autoComplete="asal_sekolah"
                            placeholder="nama lengkap.."
                            isFocused={true}
                            onChange={(e) =>
                                setData("asal_sekolah", e.target.value)
                            }
                            required
                        />
                        <InputError message={errors.asal_sekolah} />
                    </div>
                    <div className="py-2 flex gap-2">
                        <span className="w-full">
                            <InputLabel
                                htmlFor="tinggal_bersama"
                                value="Tinggal bersama"
                                className="required"
                            />

                            <select
                                id="tinggal_bersama"
                                name="tinggal_bersama"
                                value={data.tinggal_bersama}
                                autoComplete="tinggal_bersama"
                                onChange={(e) => {
                                    setData("tinggal_bersama", e.target.value);
                                }}
                                className="select select-bordered w-full"
                            >
                                <option selected defaultValue="0">
                                    - Pilih Opsi -
                                </option>
                                <option value="ortu">Orang Tua</option>
                                <option value="saudara">Saudara</option>
                                <option value="kakek-nenek">
                                    Kakek - Nenek
                                </option>
                                <option value="sendiri">Rumah Sendiri</option>
                                <option value="kost">Kost</option>
                            </select>
                            <InputError message={errors.tinggal_bersama} />
                        </span>
                        <span className="w-full">
                            <InputLabel htmlFor="domisili" value="Domisili" />
                            <TextInput
                                id="domisili"
                                type="text"
                                name="domisili"
                                value={data.domisili}
                                className="mt-1 block w-full"
                                autoComplete="domisili"
                                placeholder="domisili siswa.."
                                isFocused={true}
                                onChange={(e) =>
                                    setData("domisili", e.target.value)
                                }
                            />
                            <InputError message={errors.domisili} />
                        </span>
                    </div>
                    <div className="py-2 flex gap-2">
                        <span className="w-full">
                            <InputLabel
                                htmlFor="alamat_siswa"
                                value="Alamat Siswa"
                                className="required"
                            />
                            <TextInput
                                id="alamat_siswa"
                                type="text"
                                name="alamat_siswa"
                                value={data.alamat_siswa}
                                className="mt-1 block w-full"
                                autoComplete="alamat_siswa"
                                placeholder="Alamat Siswa.."
                                isFocused={true}
                                onChange={(e) =>
                                    setData("alamat_siswa", e.target.value)
                                }
                            />
                            <InputError message={errors.alamat_siswa} />
                        </span>
                        <span className="w-full">
                            <InputLabel
                                htmlFor="alamat_wali"
                                value="Alamat Wali Siswa"
                            />
                            <TextInput
                                id="alamat_wali"
                                type="text"
                                name="alamat_wali"
                                value={data.alamat_wali}
                                className="mt-1 block w-full"
                                autoComplete="alamat_wali"
                                placeholder="alamat wali siswa.."
                                isFocused={true}
                                onChange={(e) =>
                                    setData("alamat_wali", e.target.value)
                                }
                            />
                            <InputError message={errors.alamat_wali} />
                        </span>
                    </div>

                    <div className="py-2">
                        <InputLabel
                            htmlFor="jurusan_id"
                            value="Pilih Jurusan"
                            className="required"
                        />

                        <select
                            id="jurusan_id"
                            name="jurusan_id"
                            value={data.jurusan_id}
                            autoComplete="jurusan_id"
                            onChange={(e) => {
                                setData("jurusan_id", e.target.value);
                            }}
                            className="select select-bordered w-full"
                        >
                            <option selected defaultValue="0">
                                - Pilih Opsi -
                            </option>
                            {jurusan.map((jur, i) => (
                                <option key={i} value={jur.id}>
                                    {jur.name}
                                </option>
                            ))}
                        </select>
                        <InputError message={errors.jurusan_id} />
                    </div>
                    <div className="flex justify-center mt-5 gap-1 mr-16">
                        <Link
                            href={route("siswa.index")}
                            className="btn btn-error hover:bg-red-600 shadow-md hover:shadow-none transition-all ease-linear .2s"
                        >
                            Kembali
                        </Link>
                        <PrimaryButton className="ml-4" disabled={processing}>
                            {processing ? (
                                <span className="loading loading-spinner"></span>
                            ) : (
                                ""
                            )}
                            Simpan
                        </PrimaryButton>
                    </div>
                </div>
            </form>
        </>
    );
}

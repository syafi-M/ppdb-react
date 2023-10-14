import { Head, Link, usePage } from "@inertiajs/react";
import bgBiru from "@/../../public/logo/bg-biru.jpg";
import pemkab from "@/../../public/logo/pemkab.png";
import { useState } from "react";
import Modal from "@/Components/Modal";

export default function Welcome(props) {
    const { canLogin, canRegister, tahun } = usePage().props;

    const [login, setLogin] = useState(false);

    const pencetLogin = () => {
        setLogin(true);
    };
    const tutupLogin = () => {
        setLogin(false);
        reset();
    };

    return (
        <div className="min-h-screen antialiased">
            <Head title="Selamat Datang" />
            <div
                style={{ backgroundImage: `url(${bgBiru})` }}
                className="h-screen bg-cover"
            >
                <div className="bg-slate-50 py-4 w-full shadow-md rounded-b-md top-0">
                    <p className="mx-4 text-slate-800 font-semibold flex items-center gap-2">
                        <span>
                            <img
                                src={pemkab}
                                alt=""
                                srcSet=""
                                className="w-10 "
                            />
                        </span>
                        PPDB | {tahun}, SMK Pemkab Ponorogo
                    </p>
                </div>
                <div className="flex items-center text-center justify-center my-10">
                    <div className="m-5 max-w-3xl bg-slate-50 px-4 py-2 shadow rounded">
                        <div className="my-5 font-semibold text-xl text-center text-slate-800">
                            <p>Selamat Datang Di Web PPDB</p>
                            <p>SMK Pemkab Ponorogo Tahun {tahun}</p>
                        </div>
                        <div className="mb-10 mx-10">
                            <p className="">
                                Ini adalah web untuk kegiatan PPDB SMK Pemkab
                                Ponorogo tahun {tahun}, SMK Pemkab Ponorogo
                                membuka pendaftaran untuk siswa yang sudah lulus
                                tingkatan SMP.
                            </p>
                            <p className="font-semibold my-10 text-lg">
                                Yuk Join SMK Pemkab Ponorogo :D
                            </p>
                        </div>
                        <div className="rounded bg-cyan-200 mb-10 mx-10">
                            <div className="flex items-center justify-center p-2">
                                {props.auth.user ? (
                                    <p className="w-[75%] text-center">
                                        Anda Sudah Login
                                    </p>
                                ) : (
                                    <p className="w-[75%] text-center">
                                        Silahkan Login, Jika Anda Belum Memiliki
                                        Akun Silahkan Daftar
                                    </p>
                                )}
                            </div>
                        </div>
                        {canLogin ? (
                            <div className="flex mb-8 justify-center gap-5">
                                {props.auth.user ? (
                                    <Link
                                        href={route("dashboard")}
                                        className="px-4 py-2 rounded bg-sky-400 font-semibold text-slate-50 shadow-md hover:bg-sky-500 hover:text-slate-100 transition .2s ease-in-out"
                                    >
                                        Dashboard
                                    </Link>
                                ) : (
                                    <div>
                                        <button
                                            onClick={pencetLogin}
                                            className="px-4 py-2 rounded bg-sky-400 font-semibold text-slate-50 shadow-md hover:bg-sky-500 hover:text-slate-100 transition .2s ease-in-out"
                                        >
                                            Login
                                        </button>
                                        <Modal
                                            show={login}
                                            onClose={tutupLogin}
                                        >
                                            <span className="flex justify-end pt-4 pr-4">
                                                <button
                                                    onClick={tutupLogin}
                                                    className="text-2xl btn btn-error"
                                                >
                                                    &times;
                                                </button>
                                            </span>
                                            <p className=" text-center font-semibold text-lg">
                                                Pilih Login
                                            </p>
                                            <span className="p-4 flex gap-2 justify-center">
                                                <Link
                                                    href={route("login")}
                                                    className="px-4 py-2 rounded bg-sky-400 font-semibold text-slate-50 shadow-md hover:bg-sky-500 hover:text-slate-100 transition .2s ease-in-out"
                                                >
                                                    Log in Sebagai Admin
                                                </Link>
                                                <Link
                                                    href={route("login-siswa")}
                                                    className="px-4 py-2 rounded bg-sky-400 font-semibold text-slate-50 shadow-md hover:bg-sky-500 hover:text-slate-100 transition .2s ease-in-out"
                                                >
                                                    Log in Sebagai Siswa
                                                </Link>
                                            </span>
                                        </Modal>
                                    </div>
                                )}
                            </div>
                        ) : null}
                    </div>
                </div>
            </div>
        </div>
    );
}

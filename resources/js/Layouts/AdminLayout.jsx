import MainDiv from "@/Components/MainDiv";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import { useState } from "react";

export default function AdminLayout({ children, title }) {
    return (
        <>
            <Head title={title} />
            <Authenticated>
                <div className="px-10 pt-20">
                    <div className="bg-slate-50 overflow-hidden shadow-sm sm:rounded-lg px-2">
                        <span>
                            <p className="text-center text-lg sm:text-2xl font-bold py-3">
                                Dashboard Admin
                            </p>
                        </span>
                    </div>
                </div>
                <div className=" mx-5 py-5 flex justify-between gap-2">
                    <section className="w-1/4  bg-slate-50 rounded-l-xl rounded-r-sm">
                        <p className="text-center pt-3 font-semibold">
                            Menu - Menu Admin
                        </p>
                        <ul className="menu rounded-box">
                            <li>
                                <details>
                                    <summary>Menu Siswa</summary>
                                    <ul>
                                        <li>
                                            <Link href={route("siswa.index")}>
                                                Index Siswa
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href={route("siswa.create")}>
                                                Tambah Siswa
                                            </Link>
                                        </li>
                                    </ul>
                                </details>
                            </li>
                            <li>
                                <details>
                                    <summary>Menu Siswa</summary>
                                    <ul>
                                        <li>
                                            <Link href={route("siswa.index")}>
                                                Index Siswa
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href={route("siswa.create")}>
                                                Tambah Siswa
                                            </Link>
                                        </li>
                                    </ul>
                                </details>
                            </li>
                        </ul>
                    </section>
                    <section className="w-3/4 bg-slate-50 rounded-r-xl rounded-l-sm">
                        {children}
                    </section>
                </div>
            </Authenticated>
        </>
    );
}

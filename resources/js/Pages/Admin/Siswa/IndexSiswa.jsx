import MainDiv from "@/Components/MainDiv";
import Paginator from "@/Components/Paginator";
import SearchBar from "@/Components/SearchBar";
import AdminLayout from "@/Layouts/AdminLayout";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm, usePage } from "@inertiajs/react";
import _, { debounce, result } from "lodash";
import { useEffect, useState } from "react";
import {
    RiDeleteBin2Line,
    RiDeleteBin3Fill,
    RiDeleteBin3Line,
    RiEdit2Line,
    RiInformationLine,
} from "react-icons/ri";

export default function IndexSiswa({ siswas }) {
    const { auth } = usePage().props;

    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);
    const [showResults, setShowResults] = useState(false);

    const [currentPage, setCurrentPage] = useState(siswas.current_page);
    const itemPerPage = siswas.per_page;

    const displayData = query ? results : siswas.data;

    // console.log(siswas);

    useEffect(() => {
        query;
    }, [results]);

    return (
        <div>
            <AdminLayout title={"Index Siswa"}>
                <MainDiv subtitle={"Index Siswa"} className={"-top-10"}>
                    <div className="flex justify-end mx-10">
                        <SearchBar
                            link={"search"}
                            query={query}
                            setQuery={setQuery}
                            results={results}
                            setResults={setResults}
                            setShowResults={setShowResults}
                        />
                    </div>

                    <div>
                        <div className="my-10 mx-5">
                            <table className="table table-zebra table-sm bg-slate-50">
                                <thead className="text-center">
                                    <tr>
                                        <th className="bg-cyan-400 rounded-tl-lg">
                                            #
                                        </th>
                                        <th className="bg-cyan-400">
                                            Nama Lengkap
                                        </th>
                                        <th className="bg-cyan-400">NISN</th>
                                        <th className="bg-cyan-400">
                                            Nomor Telepon
                                        </th>
                                        <th className="bg-cyan-400">Alamat</th>
                                        <th className="bg-cyan-400 px-11 ">
                                            Status
                                        </th>
                                        <th className="bg-cyan-400 rounded-tr-lg">
                                            Aksi
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {displayData.map((sis, i) => (
                                        <tr key={sis.id}>
                                            <td>{i + 1}</td>
                                            <td>{sis.fullname}</td>
                                            <td>{sis.nisn}</td>
                                            <td>{sis.no_aktif}</td>
                                            <td>{sis.alamat_siswa}</td>
                                            {sis.status == "daftar ulang" ? (
                                                <td className=" flex items-center justify-center">
                                                    <span className="badge badge-error my-2 text-center text-sm">
                                                        {sis.status}
                                                    </span>
                                                </td>
                                            ) : (
                                                <td className="badge badge-success text-center flex items-center justify-center">
                                                    {sis.status}
                                                </td>
                                            )}
                                            <td>
                                                <span className="join gap-1">
                                                    <Link
                                                        href={route(
                                                            "siswa.show",
                                                            sis
                                                        )}
                                                        className="join-item btn btn-xs rounded-full btn-info"
                                                    >
                                                        <RiInformationLine className="text-lg" />
                                                    </Link>
                                                    <Link
                                                        href={route(
                                                            "siswa.edit",
                                                            sis.id
                                                        )}
                                                        method="get"
                                                        className="join-item btn btn-xs rounded-full btn-warning"
                                                    >
                                                        <RiEdit2Line className="text-lg" />
                                                    </Link>
                                                    <Link
                                                        href={route(
                                                            "siswa.index"
                                                        )}
                                                        className="join-item btn btn-xs rounded-full btn-error"
                                                    >
                                                        <RiDeleteBin2Line className="text-lg" />
                                                    </Link>
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                    {displayData.length == 0 && (
                                        <tr>
                                            <td
                                                colSpan="6"
                                                className="text-center"
                                            >
                                                Data Tidak Ada
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                        {!query && displayData.length != 0 && (
                            <Paginator page={siswas} />
                        )}
                    </div>
                </MainDiv>
            </AdminLayout>
        </div>
    );
}

import MainDiv from "@/Components/MainDiv";
import Paginator from "@/Components/Paginator";
import SearchBar from "@/Components/SearchBar";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import _, { debounce, result } from "lodash";
import { useEffect, useState } from "react";

export default function IndexSiswa(props) {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);
    const [showResults, setShowResults] = useState(false);

    const [currentPage, setCurrentPage] = useState(props.siswas.current_page);
    const itemPerPage = props.siswas.per_page;

    const displayData = query ? results : props.siswas.data;

    console.log(props.siswas);

    useEffect(() => {
        query;
    }, [results]);

    return (
        <div>
            <Head title="Index Siswa" />
            <Authenticated user={props.auth.user}>
                <MainDiv subtitle={"Index Siswa"}>
                    <div className="flex justify-between mx-10">
                        <span>
                            <a
                                href={route("dashboard")}
                                className="btn btn-warning"
                            >
                                Kembali
                            </a>
                        </span>

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
                                        <th className="bg-cyan-400 rounded-tr-lg">
                                            Status
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
                                            <td>{sis.status}</td>
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
                        <Paginator page={props.siswas} />
                    </div>
                </MainDiv>
            </Authenticated>
        </div>
    );
}

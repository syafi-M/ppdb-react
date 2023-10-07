import MainDiv from "@/Components/MainDiv";
import SearchBar from "@/Components/SearchBar";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import _, { debounce } from "lodash";
import { useEffect, useState } from "react";

export default function IndexSiswa({ auth }) {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);

    // const debouncedSearch = debounce((searchQuery) => {
    //     if (searchQuery.trim() === "") {
    //         setResults([]);
    //     } else {
    //         // Make an API request to search based on the 'searchQuery'
    //         axios
    //             .get(`/search?query=${searchQuery}`)
    //             .then((response) => {
    //                 setResults(response.data);
    //             })
    //             .catch((error) => {
    //                 console.error(error);
    //             });
    //     }
    // }, 500);

    // useEffect(() => {
    //     debouncedSearch(query); // Call the debounced function with the current query
    // }, [query]);

    return (
        <div>
            <Head title="Index Siswa" />
            <Authenticated user={auth.user}>
                <MainDiv subtitle={"Index Siswa"}>
                    <SearchBar
                        link={"search"}
                        query={query}
                        setQuery={setQuery}
                        results={results}
                        setResults={setResults}
                    />
                    {results >= 0 ? (
                        <p>gak temu cuy</p>
                    ) : (
                        <pre>
                            {results.map((result) => (
                                <span key={result.id}>{result.fullname}</span>
                            ))}
                        </pre>
                    )}
                </MainDiv>
            </Authenticated>
        </div>
    );
}

import { debounce } from "lodash";
import { useEffect, useState } from "react";

export default function SearchBar({
    link,
    query,
    setQuery,
    results,
    setResults,
}) {
    const debouncedSearch = debounce((searchQuery) => {
        if (searchQuery.trim() === "") {
            setResults([]);
        } else {
            // Make an API request to search based on the 'searchQuery'
            axios
                .get(`/${link}?query=${searchQuery}`)
                .then((response) => {
                    setResults(response.data);
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    }, 500);

    useEffect(() => {
        debouncedSearch(query); // Call the debounced function with the current query
    }, [query]);
    return (
        <div>
            <div>
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search..."
                    className="input input-bordered"
                />
            </div>
        </div>
    );
}

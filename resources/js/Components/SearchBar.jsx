import { debounce } from "lodash";
import { useEffect, useState } from "react";
import { RiSearch2Line } from "react-icons/ri";
import axios from "axios"; // Import axios here

export default function SearchBar({ link, query, setQuery, setResults }) {
    const performSearch = async (searchQuery) => {
        try {
            if (searchQuery.trim() === "") {
                setResults([]);
            } else {
                const response = await axios.get(
                    `/${link}?query=${searchQuery}`
                );
                setResults(response.data);
            }
        } catch (error) {
            console.error("Error performing search:", error);
        }
    };

    // Debounce the search function
    const debouncedSearch = debounce(performSearch, 500);

    // Handle search query changes
    useEffect(() => {
        debouncedSearch(query); // Call the debounced function with the current query
    }, [query]);

    return (
        <div>
            <div className="join">
                <span className="flex items-center join-item bg-info text-xl px-4">
                    <RiSearch2Line />
                </span>
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search..."
                    className="input input-bordered join-item"
                />
            </div>
        </div>
    );
}

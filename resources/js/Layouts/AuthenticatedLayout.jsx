import { useState } from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Head, Link, usePage } from "@inertiajs/react";
import NavBar from "@/Components/NavBar";
import "react-toastify/dist/ReactToastify.css";

export default function Authenticated({ header, children, title }) {
    const { user } = usePage().props.auth;

    return (
        <div className="min-h-screen bg-gray-100">
            <Head title={title} />
            <div>
                <NavBar user={user} />
            </div>
            {header && (
                <header className="bg-white shadow">
                    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                        {header}
                    </div>
                </header>
            )}

            <div className="bg-gradient-to-br from-sky-500/50 to-sky-400">
                <main className="min-h-screen">
                    <div className="relative">{children}</div>
                </main>
            </div>
        </div>
    );
}

import { method } from "lodash";
import NavLink from "./NavLink";
import { Link, usePage } from "@inertiajs/react";

export default function NavBar({ user }) {
    const logout = (e) => {
        e.preventDefault();

        post(route("logout"));
    };
    return (
        <div>
            <div className="bg-slate-50 py-3 fixed top-0 w-full shadow z-[10]">
                <nav className="flex justify-between items-center mx-10">
                    <div className="flex items-center gap-4 text-slate-800 font-semibold">
                        <span>
                            <img
                                src="../logo/pemkab.png"
                                alt="logo"
                                className="w-10"
                            />
                        </span>
                        <p>{user.name}</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <NavLink
                            href={route("dashboard")}
                            active={route().current("dashboard")}
                        >
                            Dashboard
                        </NavLink>
                        {user.roles_id == 1 && (
                            <div className="gap-2 flex items-center">
                                <NavLink
                                    href={route("siswa.index")}
                                    active={route().current("siswa.index")}
                                >
                                    Siswa
                                </NavLink>
                                <NavLink
                                    href={route("jurusan.index")}
                                    active={route().current("jurusan.index")}
                                >
                                    Jurusan
                                </NavLink>
                            </div>
                        )}
                        <Link
                            href={route("logout")}
                            as="button"
                            method="POST"
                            className="bg-amber-400/90 hover:bg-amber-500 ring-2 ring-amber-500/70 hover:border-0 border-b-2 shadow font-semibold transition duration-150 ease-in-out border-none rounded-md px-2 py-1"
                        >
                            Log out
                        </Link>
                    </div>
                </nav>
            </div>
        </div>
    );
}

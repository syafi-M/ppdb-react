import MainDiv from "@/Components/MainDiv";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function IndexAdmin() {
    return (
        <>
            <Head title="Dashboard Admin" />
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
                <div className=" mx-5 mt-5 flex justify-between gap-2">
                    <section className="w-1/4 bg-slate-50 rounded-sm">
                        <p className="text-center pt-3 font-semibold">
                            Menu - Menu Admin
                        </p>
                        <ul className="menu rounded-box">
                            <li>
                                <details open>
                                    <summary>Parent</summary>
                                    <ul>
                                        <li>
                                            <a>level 2 item 1</a>
                                        </li>
                                        <li>
                                            <a>level 2 item 2</a>
                                        </li>
                                        <li>
                                            <details open>
                                                <summary>Parent</summary>
                                                <ul>
                                                    <li>
                                                        <a>level 3 item 1</a>
                                                    </li>
                                                    <li>
                                                        <a>level 3 item 2</a>
                                                    </li>
                                                </ul>
                                            </details>
                                        </li>
                                    </ul>
                                </details>
                            </li>
                            <li>
                                <a>Item 3</a>
                            </li>
                        </ul>
                    </section>
                    <section className="w-3/4 bg-slate-50 rounded-sm">
                        p
                    </section>
                </div>
            </Authenticated>
        </>
    );
}

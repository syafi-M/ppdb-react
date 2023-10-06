import { Link } from "@inertiajs/react";

export default function NavLink({
    active = false,
    className = "",
    children,
    ...props
}) {
    return (
        <Link
            {...props}
            className={
                (active
                    ? " inline-flex items-center h-8 pt-1 ring-2 hover:ring-0 hover:shadow-inner hover:border-0 border-b-2 border-blue-400 text-md hover:bg-blue-300/50 ease-in-out px-2 py-1 rounded hover:text-slate-600  text-slate-800 font-semibold leading-5 focus:outline-none focus:border-indigo-700 transition duration-150"
                    : "inline-flex items-center h-8 pt-1 border-b-2 border-transparent text-md hover:bg-blue-300/50 transition duration-150 ease-in-out px-2 py-1 rounded text-slate-800 font-semibold leading-5  hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300") +
                className
            }
        >
            {children}
        </Link>
    );
}

import { Link } from "@inertiajs/react";

export default function Paginator({ page }) {
    const prev = page.links[0]?.url;
    const next = page.links[page.links.length - 1]?.url;
    const current = page.current_page;

    return (
        <div className="flex justify-center sm:justify-end m-10">
            <div className="join shadow-md">
                {prev ? (
                    <Link href={prev} className="join-item btn">
                        &laquo;
                    </Link>
                ) : (
                    <Link className="join-item btn btn-disabled">&laquo;</Link>
                )}
                <button className="btn">Page {current}</button>
                {next ? (
                    <Link href={next} className="join-item btn">
                        &raquo;
                    </Link>
                ) : (
                    <Link className="join-item btn btn-disabled">&raquo;</Link>
                )}
            </div>
        </div>
    );
}

export default function MainDiv({ children, subtitle }) {
    return (
        <div className="p-10 py-20">
            <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg px-2">
                <span>
                    <p className="text-center text-lg sm:text-2xl font-bold py-5">
                        {subtitle}
                    </p>
                </span>
                <span>{children}</span>
            </div>
        </div>
    );
}

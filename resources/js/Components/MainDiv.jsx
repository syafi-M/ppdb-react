export default function MainDiv({ children, subtitle, className }) {
    return (
        <div className={"p-10 py-16" + className}>
            <div className="bg-slate-50 overflow-hidden shadow-sm sm:rounded-lg px-2">
                <span>
                    <p className="text-center text-lg sm:text-2xl font-bold mb-4">
                        {subtitle}
                    </p>
                </span>
                <span>{children}</span>
            </div>
        </div>
    );
}

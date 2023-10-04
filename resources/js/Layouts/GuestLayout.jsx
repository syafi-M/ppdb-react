import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

export default function Guest({ children }) {
    return (
        <div className="min-h-screen flex w-full flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gradient-to-br from-sky-500/50 to-sky-400">
            <div>
                <Link href="/">
                    <div className='rounded-full bg-slate-50 p-2 scale-75'>
                        <ApplicationLogo className="w-20 h-20 fill-current text-gray-500" />
                    </div>
                </Link>
            </div>

            <div className="min-w-max max-w-2xl w-full">
                <div className="px-4 w-full flex items-center justify-center">
                    <div
                        className="w-full sm:mx-0 sm:max-w-md mt-6 px-6 py-4 rounded-md bg-white shadow-md overflow-hidden sm:rounded-lg"
                    >
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}

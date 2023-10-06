import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Dashboard" />

            <div className="py-12 pt-20 h-screen">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-slate-900 font-semibold">
                            Selamat Datang {auth.user.name}
                        </div>
                        <div className="p-6 space-y-4">
                            <p v-if="$page.props.auth.user.role_id == 1">
                                Dikarenakan anda adalah seorang admin, anda bisa
                                menggunakan tombol navigasi diatas untuk
                                melakukan pekerjaan
                            </p>
                            <p>Selamat Berselancar Di Website Ini :D</p>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

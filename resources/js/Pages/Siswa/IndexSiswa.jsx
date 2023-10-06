import MainDiv from "@/Components/MainDiv";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function IndexSiswa({ auth }) {
    return (
        <div>
            <Head title="Index Siswa" />
            <Authenticated user={auth.user}>
                <MainDiv subtitle={"Index Siswa"}>
                    <p>Aku Index User</p>
                </MainDiv>
            </Authenticated>
        </div>
    );
}

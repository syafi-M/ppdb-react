import SiswaCreate from "@/Components/CRUD/Siswa/SiswaCreate";
import MainDiv from "@/Components/MainDiv";
import AdminLayout from "@/Layouts/AdminLayout";
import Authenticated from "@/Layouts/AuthenticatedLayout";

export default function CreateSiswa({ jurusan }) {
    // console.log(props);
    return (
        <AdminLayout title={"Tambah Siswa"}>
            <MainDiv subtitle={"Tambah Siswa"}>
                <SiswaCreate jurusan={jurusan} />
            </MainDiv>
        </AdminLayout>
    );
}

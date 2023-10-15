import SiswaEdit from "@/Components/CRUD/Siswa/SiswaEdit";
import MainDiv from "@/Components/MainDiv";
import AdminLayout from "@/Layouts/AdminLayout";
import Authenticated from "@/Layouts/AuthenticatedLayout";

export default function EditSiswa({ siswa, jurusan }) {
    console.log(siswa);
    return (
        <AdminLayout title={"Edit Siswa " + siswa.fullname}>
            <MainDiv subtitle={"Edit Siswa"}>
                <SiswaEdit siswa={siswa} jurusan={jurusan} />
            </MainDiv>
        </AdminLayout>
    );
}

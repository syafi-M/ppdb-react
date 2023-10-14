import SiswaCreate from "@/Components/CRUD/Siswa/SiswaCreate";
import MainDiv from "@/Components/MainDiv";
import Authenticated from "@/Layouts/AuthenticatedLayout";

export default function CreateSiswa({ jurusan }) {
    // console.log(props);
    return (
        <Authenticated title={"Tambah Siswa"}>
            <MainDiv subtitle={"Tambah Siswa"}>
                <SiswaCreate jurusan={jurusan} />
            </MainDiv>
        </Authenticated>
    );
}

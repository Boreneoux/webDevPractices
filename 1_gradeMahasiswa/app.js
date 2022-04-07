const gradeForms = document.querySelector('#gradeForm');
const tabelMahasiswa = document.querySelector('#dataMahasiswa')

let gradeMahasiswa = "";
let statusMahasiswa = "";


gradeForms.addEventListener('submit', function (e) {
    e.preventDefault();
    const namaMahasiswa = gradeForms.elements.nama;
    const nimMahasiswa = gradeForms.elements.nim;
    const alamatMahasiswa = gradeForms.elements.alamat;
    const nilaiMahasiswa = gradeForms.elements.nilai;

    if (nilaiMahasiswa.value >= 80 && nilaiMahasiswa.value <= 100) {
        gradeMahasiswa = "A";
        statusMahasiswa = "LULUS!"
    } else if (nilaiMahasiswa.value >= 60 && nilaiMahasiswa.value <= 79) {
        gradeMahasiswa = "B";
        statusMahasiswa = "LULUS!"
    } else if (nilaiMahasiswa.value >= 0 && nilaiMahasiswa.value <= 59) {
        gradeMahasiswa = "C";
        statusMahasiswa = "GAGAL!"
    }

    addMahasiswa(namaMahasiswa.value, nimMahasiswa.value, alamatMahasiswa.value, nilaiMahasiswa.value, gradeMahasiswa, statusMahasiswa);
    alert("Input data succeeded");

    namaMahasiswa.value = '';
    nimMahasiswa.value = '';
    alamatMahasiswa.value = '';
    nilaiMahasiswa.value = '';
});



// const results = (nilaiMahasiswa) => {
//     if (nilaiMahasiswa >= 80 && nilaiMahasiswa <= 100) {
//         const gradeMahasiswa = "A";
//         const statusMahasiswa = "LULUS!"
//     } else if (nilaiMahasiswa >= 60 && nilaiMahasiswa <= 79) {
//         const gradeMahasiswa = "B";
//         const statusMahasiswa = "LULUS!"
//     } else if (nilaiMahasiswa >= 0 && nilaiMahasiswa <= 59) {
//         const gradeMahasiswa = "C";
//         const statusMahasiswa = "GAGAL!"
//     }
//     return [resultGrade(gradeMahasiswa), resultStatus(statusMahasiswa)];
// }

const addMahasiswa = (namaMahasiswa, nimMahasiswa, alamatMahasiswa, nilaiMahasiswa, gradeMahasiswa, statusMahasiswa) => {

    const newMahasiswa = document.createElement('tr');
    const newNamaMahasiswa = document.createElement('td');
    const newNIMMahasiswa = document.createElement('td');
    const newAlamatMahasiswa = document.createElement('td');
    const newNilaiMahasiswa = document.createElement('td');
    const newGradeMahasiswa = document.createElement('td');
    const newStatusMahasiswa = document.createElement('td');

    newNamaMahasiswa.append(namaMahasiswa);
    newNIMMahasiswa.append(nimMahasiswa);
    newAlamatMahasiswa.append(alamatMahasiswa);
    newNilaiMahasiswa.append(nilaiMahasiswa);
    newGradeMahasiswa.append(gradeMahasiswa);
    newStatusMahasiswa.append(statusMahasiswa);
    newMahasiswa.append(newNamaMahasiswa, newNIMMahasiswa, newAlamatMahasiswa, newNilaiMahasiswa, newGradeMahasiswa, newStatusMahasiswa);
    tabelMahasiswa.append(newMahasiswa);

};



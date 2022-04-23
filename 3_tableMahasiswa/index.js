const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override')

app.use(express.static(path.join(__dirname, 'public')))

// Untuk membuat patch & delete request
app.use(methodOverride('_method'))
// untuk parsing data form didalam request post pada body
app.use(express.urlencoded({ extended: true }))
// Untuk Parse data yang dikirim dari post request yang menggunakan format JSON
app.use(express.json())
// Untuk akses folder views dan setup untuk EJS
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// fake database menggunakan array of object
let Mahasiswa = [
    {
        NIM: "20200801111",
        name: "Ichlasul Fikri",
        nilai: "88",
        grade: "",
        status: ""
    },
    {
        NIM: "20200801112",
        name: "Eko Musk",
        nilai: "99",
        grade: "",
        status: ""
    },
    {
        NIM: "20200801113",
        name: "Jeff Sutarman",
        nilai: "50",
        grade: "",
        status: ""
    }
]

// Homepage yang menampilkan halaman homepage.
app.get('/', (req, res) => {
    res.render('home')
})

// READ function/routes - View page yang menampilkan seluruh data mahasiswa yang ada.
app.get('/view', (req, res) => {
    res.render('view', { Mahasiswa });
})

//Input page yang menampilkan form untuk memasukkan data mahasiwa baru.
app.get('/input', (req, res) => {
    res.render('input')
})

// CREATE function/routes - untuk input data mahasiswa baru ke dalam object array Mahasiswa
app.post('/input', (req, res) => {
    const { NIM, name, nilai } = req.body;
    Mahasiswa.push({ NIM, name, nilai })
    res.redirect('view')
})

// Show page or detail page untuk menampilkan 1 data mahasiswa tertentu. (Bagian dari READ juga(?))
app.get('/show/:NIM', (req, res) => {
    const { NIM } = req.params;
    const student = Mahasiswa.find(m => m.NIM === NIM)
    res.render('show', { student })
})

// Edit page untuk menampilkan page yang digunakan untuk mengubah nilai mahasiswa tertentu.
app.get('/edit/:NIM', (req, res) => {
    const { NIM } = req.params;
    const student = Mahasiswa.find(m => m.NIM === NIM)
    res.render('edit', { student })

})

// EDIT function/routes - untuk mengubah data mahasiswa tertentu dengan data baru yang baru saja di input.
app.patch('/edit/:NIM', (req, res) => {
    const { NIM } = req.params;
    const newNilai = req.body.nilai;
    const foundStudent = Mahasiswa.find(m => m.NIM === NIM)
    foundStudent.nilai = newNilai;
    res.redirect('/view')

})

// DELETE function/routes - untuk menghapus atau menghancurkan data mahasiswa tertentu.
app.delete('/edit/:NIM', (req, res) => {
    const { NIM } = req.params;
    Mahasiswa = Mahasiswa.filter(m => m.NIM !== NIM);
    res.redirect('/view')
})


app.listen(3000, () => {
    console.log('Listening On Port 3000')
})
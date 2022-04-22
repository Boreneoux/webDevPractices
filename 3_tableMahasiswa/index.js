const express = require('express');
const app = express();
const path = require('path');
// const dataMahasiswa = require('./data.json')
// let Mahasiswa = dataMahasiswa;

app.use(express.static(path.join(__dirname, 'public')))

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

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


app.get('/', (req, res) => {
    res.render('home')
})

app.get('/view', (req, res) => {
    res.render('view', { Mahasiswa });
})

app.get('/input', (req, res) => {
    res.render('input')
})

app.post('/input', (req, res) => {
    const { NIM, name, nilai } = req.body;
    Mahasiswa.push({ NIM, name, nilai })
    res.redirect('view')
})

// app.get('/view/:NIM', (req, res) => {
//     const { NIM } = req.params;
//     const student = Mahasiswa.find(m => m.NIM === parseInt(NIM))
//     res.render('show', { student })
// })



app.listen(3000, () => {
    console.log('Listening On Port 3000')
})
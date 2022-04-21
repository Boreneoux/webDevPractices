const express = require('express');
const app = express();
const path = require('path');
const dataMahasiswa = require('./data.json')

app.use(express.static(path.join(__dirname, 'public')))

app.use(express.urlencoded({ extended: true }))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')


app.get('/', (req, res) => {
    res.render('home')
})

app.get('/view', (req, res) => {
    let Mahasiswa = dataMahasiswa;
    // let Mahasiswa = { ...data };
    // for (let m of Mahasiswa) {
    //     if (m.nilai >= 80 && m.nilai <= 100) {
    //         m.grade = 'A'
    //         m.status = 'LULUS!'
    //     } else if (m.nilai >= 60 && m.nilai <= 79) {
    //         m.grade = 'B'
    //         m.status = 'LULUS!'
    //     } else if (m.nilai >= 0 && m.nilai <= 59) {
    //         m.grade = 'C'
    //         m.status = 'GAGAL!'
    //     }
    //     // console.log(m.name)
    // }
    // console.log(Mahasiswa);
    res.render('view', { ...Mahasiswa });
    console.log(Mahasiswa);
})

app.listen(3000, () => {
    console.log('Listening On Port 3000')
})
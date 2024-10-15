const index = (req, res)=>{
    const berita= [
        {
            judul: "berita 1",
            isi : "isi berita 1"
        },
        {
            judul: "berita 2",
            isi : "isi berita 2"
        },
    ];
    res.render('index', {title: 'halaman home',berita, layout: 'main'});
}
const contact = (req, res)=>{
   res.render('contact', {title: 'halaman contact',layout: 'main'});
}
const about = (req, res)=>{
    res.render('aboutus', {title: 'halaman about',layout: 'main'});
 }
const prodi = (req, res)=>{
    const prodi= [
        {
            nama: "sistem informasi",
            fakultas : "FIKR",
            singkatan : "SI"
        },
        {
            nama: "informatika",
            fakultas : "FIKR",
            singkatan : "IF"
        },
        {
            nama: "teknik elektro",
            fakultas : "FIKR",
            singkatan : "TE"
        },
        {
            nama: "manajemen informatika",
            fakultas : "FIKR",
            singkatan : "MI"
        },
        {
            nama: "manajemen",
            fakultas : "FEB",
            singkatan : "MJ"
        },
        {
            nama: "akutansi",
            fakultas : "FEB",
            singkatan : "AK"
        },
    ];
    res.render('prodi', {title: 'halaman prodi', prodi, layout: 'main'});
 }
 
module.exports = {index, contact, about, prodi};

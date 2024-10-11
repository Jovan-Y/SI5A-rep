var express = require('express');
var router = express.Router();

/* GET home page. */
const maincontroller = require('../controller/maincontroller')
router.get('/', maincontroller.index)
router.get('/contact', maincontroller.contact)
router.get('/about', maincontroller.about)
router.get('/prodi', maincontroller.prodi)
//
// router.get('/', function(req, res, next) {
//    const berita= [
//         {
//             judul: "berita 1",
//             isi : "isi berita 1"
//         },
//         {
//             judul: "berita 2",
//             isi : "isi berita 2"
//         },
//     ];
//     res.render('index', {title: 'halaman home',berita, layout: 'main'});
// });
// router.get('/about', function(req, res, next) {
//    res.render('aboutus', {title: 'halaman about us', layout: 'main' });
// });
// router.get('/contact', function(req, res, next) {
//    res.render('contact', {title: 'halaman contact', layout: 'main'});
// });
// router.get('/prodi', function(req, res, next) {
//   const prodi= [
//         {
//             nama: "sistem informasi",
//             fakultas : "FIKR",
//             singkatan : "SI"
//         },
//         {
//             nama: "informatika",
//             fakultas : "FIKR",
//             singkatan : "IF"
//         },
//         {
//             nama: "teknik elektro",
//             fakultas : "FIKR",
//             singkatan : "TE"
//         },
//         {
//             nama: "manajemen informatika",
//             fakultas : "FIKR",
//             singkatan : "MI"
//         },
//         {
//             nama: "manajemen",
//             fakultas : "FEB",
//             singkatan : "MJ"
//         },
//         {
//             nama: "akutansi",
//             fakultas : "FEB",
//             singkatan : "AK"
//         },
//     ];
//     res.render('prodi', {title: 'halaman prodi', prodi, layout: 'main'});
// });



module.exports = router;

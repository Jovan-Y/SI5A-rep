const express = require("express")
const app = express()
const port = 3000

//route
app.get("/" ,(req,res) => {
    //res.send("hello");
    res.sendFile(__dirname + "/home.html");
});
//route
app.get("/about" ,(req,res) => {
    //res.send("about");
    res.sendFile(__dirname + "/aboutus.html");
});
// route kontak
app.get("/contact" ,(req,res) => {
    //res.send("contact us");
    res.sendFile(__dirname + "/contact.html");
});

app.get("/mahasiswa", (req,res)=>{
    res.json({
        "status" : "success",
        "message" : "data mahasiswa",
        "data" : [{npm: 2226240108, nama: "irpan paok"},
            {npm: 2226240109, nama: "irpan paok2"} 
        ]
    })
})
app.get("/dosen", (req,res)=>{
    res.json({
        "status" : "success",
        "message" : "data dosen",
        "data" : [
            {prodi : "sistem_informasi", 
            dosen : ["Faris","Pak Iis"]
        }
    ]
    })
});
// handle route yang tidak terdaftar
app.use("/" ,(req,res) => {
    res.send("<h1>404 not found</h1>");
});

//jalankan route
app.listen(port, ()=>{
    console.log(`server dapat di akses di http://localhost:${port}`);
});


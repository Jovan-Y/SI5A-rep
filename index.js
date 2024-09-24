const express = require("express")
const app = express()
const port = 3000

//route
app.get("/" ,(req,res) => {
    res.send("irpan paok");
});

//jalankan route
app.listen(port, ()=>{
    console.log(`server dapat di akses di htttp://localhost:${port}`);
});

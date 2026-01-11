const express = require('express');
const dotenv = require('dotenv').config()

const app = express();

const PORT = process.env.PORT || 5000;

// app.get("/api/contacts",(req,res)=>{
//     // res.send("All contacts")
//     res.status(200).json({"message":"All contacts"})
// })

app.use("/api/contacts", require("./routes/contactsRoutes"));

app.listen(PORT,()=>{
    console.log(`Port is open on ${PORT}` )
})


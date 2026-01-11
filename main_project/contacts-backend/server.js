const express = require('express');
const { errorHandler } = require('./middleware/errorHandler');
const dotenv = require('dotenv').config()

const app = express();
app.use(express.json());


const PORT = process.env.PORT || 5000;

// app.get("/api/contacts",(req,res)=>{
//     // res.send("All contacts")
//     res.status(200).json({"message":"All contacts"})
// })

app.use("/api/contacts", require("./routes/contactsRoutes"));

app.use(errorHandler);

app.listen(PORT,()=>{
    console.log(`Port is open on ${PORT}` )
})


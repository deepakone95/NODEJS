const register = require('./registration.js');

const os = require("os");

const fs = require("fs");
const e = require('express');

// **********Registration Module **********

// const is_exists = register.checkuser()
// function greet(){
//     console.log("hello")
//     if (is_exists){
//         console.log("user exists");
//     }
//     else{
//         register.registeruser();
//     }}

// greet();


// **********OS Module **********

// console.log(os.platform());
// console.log(os.arch());
// console.log(os.cpus());
// console.log(os.freemem());

// **********File Module **********

// fs.writeFile("demo.txt","hello world",(err)=>{
//     if (err) {
//         console.log("error",err);}
//     else{
//         console.log("file written successfully");
//     }   
// });
// fs.readFile("demo.txt","utf8",(err,data)=>{
//     if (err) {
//         console.log("error",err);}
//     else{
//         console.log("data",data);
//     }   
// });

// **********Express **********

express = require('express');

app = express();

app.get("/",(req,res)=>{
    res.send("hello world");
})

app.listen(8000,()=>{
    console.log("server started at port 8000");
});

app.get("/bye",(req,res)=>{
        res.send("Byeeee.......!");
    })
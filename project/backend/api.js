const express = require("express");
const cors = require("cors");
const app = express();
const mysql = require("mysql2");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "root1234",
        database: "todo"
    }
)

db.connect((err)=>{
    if (err){
        console.log("DB connection error",err);

    }
    console.log("DB connected successfully");
    
});

app.get("/", (req, res) => {
    db.query("select * from todoItems", (err, result) => {
        if (err) {
            console.log("Error fetching data:", err);
            res.status(500).send("Error fetching data");
        } else {
            console.log("Data fetched successfully:", result);
            res.status(200).json(result);
        }
    })
});




app.post("/add-todo", (req, res) => {
    const receivedData = req.body;
    console.log("Received data:", receivedData);
    db.query(`insert into todoItems(itemDescription) values(?)`, [receivedData.text], (err, result) => {
        if (err) {
            console.log("Error inserting data:", err);
            res.status(500).send("Error inserting data");
        } else {
            console.log("Data inserted successfully:", result);
            res.status(200).send("Data inserted successfully");
            
        }
    })

});


app.put("/edit_item/:id", (req, res) => {
    const todoId = req.params.id;
    const updatedData = req.body;
    console.log("Updating todo ID:", todoId, "with data:", updatedData);
    db.query(`update todoItems set itemDescription=? where ID=?`, [updatedData.text, todoId], (err, result) => {
        if (err) {
            console.log("Error updating data:", err);
            res.status(500).send("Error updating data");
        } else {
            console.log("Data updated successfully:", result);
            res.status(200).send("Data updated successfully");
        }
    });
});


app.listen(3000, ()=>{
    console.log("API server started on port 3000");
});
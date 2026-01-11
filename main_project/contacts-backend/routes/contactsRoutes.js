const express = require("express")

const router = express.Router()


router.route("/").get((req,res)=>{
    res.json({"message":"Get all contacts"})
});

router.route("/:id").get((req,res)=>{
    res.json({"message":`Get contact by ID ${req.params.id}`})
});

router.route("/").post((req,res)=>{
    res.json({"message":"Create a new contact"})
});

router.route("/:id").put((req,res)=>{
    res.json({"message":`Update a contact ${req.params.id}`})
});

router.route("/:id").delete((req,res)=>{
    res.json({"message":`Delete a contact ${req.params.id}`})
});


module.exports = router;
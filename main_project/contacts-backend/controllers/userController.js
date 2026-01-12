const asyncHandler = require("express-async-handler");
const User = require("../models/userModels");
const { hash } = require("bcrypt");

const loginUser = asyncHandler(async (req, res) => {
    res.json({"message":"Login user"});
})

const registerUser = asyncHandler(async (req, res) => {
    const {username, email, password} = req.body;

    if (!username || !email || !password) {
        res.status(400)
        throw new Error("All fields are mandatory")
    } 

    userAvailable = await User.findOne({email: email});
    if (userAvailable) {
        res.status(400)
        throw new Error("User already registered")
    }
    const hashPassword = await hash(password,10);

    console.log(hashPassword)
    
    const user = await User.create({
        username,
        email,
        password: hashPassword
    });

    if (user) {
        res.status(201).json({ _id: user.id, email: user.email });
    } else {
        res.status(400)
        throw new Error("User data is not valid")
    }

    res.json(user);
})

const currentUser = asyncHandler(async (req, res) => {
    res.json({"message":`currentuser Info ${req.params.id}`});
})

module.exports = {
    loginUser,
    registerUser,
    currentUser
};
//description Get all controller functions for contacts
// @route  GET /api/contacts
// access Public

const asyncHandler = require("express-async-handler");

const getContacts = asyncHandler(async (req, res) => {
    res.json({ "message": "Get all contacts" });
})

const createContact = asyncHandler(async (req, res) => {

    const {name, email, phone} = req.body;

    if (!name || !email || !phone) {
        res.status(400)
        throw new Error("All fields are mandatory")
    }

    res.json({ "message": "Create a new contact" });
})

const updateContact = asyncHandler(async (req, res) => {
    res.json({ "message": `Update a contact ${req.params.id}` });
})
const deleteContact = asyncHandler(async (req, res) => {
    res.json({ "message": `Delete a contact ${req.params.id}` });
})

const getContactById = asyncHandler(async (req, res) => {
    res.json({ "message": `Get contact by ID ${req.params.id}` });
})


module.exports = {
    getContacts,
    createContact,
    updateContact,
    deleteContact,
    getContactById
};

//description Get all controller functions for contacts
// @route  GET /api/contacts
// access Public


const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModels");

const getContacts = asyncHandler(async (req, res) => {
    const contacts = await Contact.find();
    res.json(contacts);
})

const createContact = asyncHandler(async (req, res) => {

    const {name, email, phone} = req.body;

    if (!name || !email || !phone) {
        res.status(400)
        throw new Error("All fields are mandatory")
    }
    const contact = await Contact.create({
        name,
        email,
        phone
    });

    res.json(contact);
})

const updateContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    res.json({ "message": `Update a contact ${req.params.id}` });
    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );
    res.json(updatedContact);
})
const deleteContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(404)
        throw new Error("Contact not found")
    }
    await Contact.findByIdAndDelete(req.params.id);

    res.json(contact);
})

const getContactById = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(404)
        throw new Error("Contact not found")
    }
    res.json(contact);
})


module.exports = {
    getContacts,
    createContact,
    updateContact,
    deleteContact,
    getContactById
};
//description Get all controller functions for contacts
// @route  GET /api/contacts
// access Public
const getContacts = (req, res) => {
    res.json({ "message": "Get all contacts" });
}

const createContact = (req, res) => {

    const {name, email, phone} = req.body;

    if (!name || !email || !phone) {
        res.status(400)
        throw new Error("All fields are mandatory")
    }

    res.json({ "message": "Create a new contact" });
}

const updateContact = (req, res) => {
    res.json({ "message": `Update a contact ${req.params.id}` });
}

const deleteContact = (req, res) => {
    res.json({ "message": `Delete a contact ${req.params.id}` });
}

const getContactById = (req, res) => {
    res.json({ "message": `Get contact by ID ${req.params.id}` });
}


module.exports = {
    getContacts,
    createContact,
    updateContact,
    deleteContact,
    getContactById
};
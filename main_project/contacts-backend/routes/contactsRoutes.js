const express = require("express")

const router = express.Router()

const {getContacts,
    createContact,
    updateContact,
    deleteContact,
    getContactById} = require("../controllers/contactController")


router.route("/").get(getContacts).post(createContact);

router.route("/:id").get(getContactById).put(updateContact).delete(deleteContact);

module.exports = router;
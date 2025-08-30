const express = require('express');
const router = express.Router();

const {
    submitContact,
    getAllContacts,
    deleteContact
} = require("../controllers/contactController");

router.post("/contact", submitContact);
router.get("/contact", getAllContacts);
router.delete("/contact/:id", deleteContact);

module.exports = router;
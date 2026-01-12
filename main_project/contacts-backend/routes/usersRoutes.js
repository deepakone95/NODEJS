const express = require('express');
const router = express.Router();
const { loginUser, registerUser, currentUser } = require('../controllers/userController');
const validateTokenHandler = require('../middleware/validateTokenHandler');

// Placeholder controller functions for user routes
router.post('/login', loginUser);

router.post('/register', registerUser);
router.get('/current', validateTokenHandler, currentUser);

module.exports = router;
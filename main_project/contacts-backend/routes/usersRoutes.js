const express = require('express');
const router = express.Router();
const { loginUser, registerUser, currentUser } = require('../controllers/userController');

// Placeholder controller functions for user routes
router.post('/login', loginUser);

router.post('/register', registerUser);
router.get('/current', currentUser);

module.exports = router;
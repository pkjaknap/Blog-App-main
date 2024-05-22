const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();
const authController=require('../controllers/authController');

router.post('/register', userController.createUser);
router.get('/all', userController.getAllUsers); // New route for fetching all users
router.post('/login',authController.login);


module.exports = router;

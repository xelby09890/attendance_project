const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

//views
router.get('/login', (req,res) => {res.render('login');});

router.get('/register', (req,res) => {res.render('register');});

//controller actions
router.post('/register', authController.register);

module.exports = router;

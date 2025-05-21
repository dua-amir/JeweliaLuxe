const express = require('express');
const router = express.Router();
const { signup, login } = require('../controllers/authController');
const authMiddleware = require("../middlewares/authMiddleware");
const { getProfile } = require("../controllers/authController"); 
const { updateProfile} = require("../controllers/authController");

router.post('/signup', signup);
router.post('/login', login);
router.get("/profile", authMiddleware, getProfile);
router.put("/profile", authMiddleware, updateProfile);


module.exports = router;

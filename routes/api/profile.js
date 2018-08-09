const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

// Load Profile Model
const Profile = require('../../models/Profile');
// Load User Profile
const User = require('../../models/User');

//@route GET api/profile/test
//@description Tests profile route
//@access Public
router.get('/test', (req, res) => res.json({msg: "Profile Works"}));

//@route GET api/profile/:id
//@description Get current users profile
//@access Private
router.get('/', passport.authenticate('jwt', {session: false}));

module.exports = router;
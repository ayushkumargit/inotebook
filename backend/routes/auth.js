const express = require("express");
const router = express.Router();
const User = require("../models/User")
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const { findOne } = require("../models/User");
const fetchuser = require("../middleware/fetchuser")

const JWT_SECRET = "ayushisagoodb$oy"

// ROUTE 1: create a user string : POST "api/auth/createuser". no login required 
router.post("/createuser", [
  // validaing email, name , and password
  body('email', "Enter a valid email").isEmail(),
  body('name', "Enter a valid name").isLength({ min: 3 }),
  body('password', "password must be atleast 5 character").isLength({ min: 5 }),
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  // chek whether the user with the email exist already
  let user = await User.findOne({ email: req.body.email })
  if (user) {
    return res.status(400).json({ error: "sorry a user with email exist" })
  }
  const salt = await bcrypt.genSalt(10);
  const secPass = await bcrypt.hash(req.body.password, salt);
  try {
    // create a new user
    user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: secPass,
    })
    const data={
      user:{
        id:user.id
      }
    }
    var authToken = jwt.sign( data, JWT_SECRET);
    // res.json(user)
    res.json({authToken})

  } catch (error) {
    console.error(error.message)
    res.status(500).send("Enternal server error")
  }
})

// ROUTE 2: authenticate a user string : POST "api/auth/login". no login required 
router.post('/login', [
  body('email', 'Enter a valid email').isEmail(),
  body('password', 'Password cannot be blank').exists(),
], async (req, res) => {
  let success = false;
  // If there are errors, return Bad request and the errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (!user) {
      success = false
      return res.status(400).json({ error: "Please try to login with correct credentials" });
    }

    const passwordCompare = await bcrypt.compare(password, user.password);
    if (!passwordCompare) {
      success = false
      return res.status(400).json({ success, error: "Please try to login with correct credentials" });
    }

    const data = {
      user: {
        id: user.id
      }
    }
    const authtoken = jwt.sign(data, JWT_SECRET);
    success = true;
    res.json({ success, authtoken })

  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }


});


// ROUTE 3: get loggedin user detail using : POST "api/auth/getuser".  login required 
router.post("/getuser" , fetchuser , async (req, res) => {

  try {
    userId = req.user.id;
    user = await User.findById(userId).select("-password")
    res.send(user)
    
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }

})

module.exports = router
const jwt = require("jsonwebtoken");

require('dotenv').config();

exports.login = (req,res)=>{
  const {email, password} = req.body;

  if(email !== process.env.ADMIN_EMAIL || password !== process.env.ADMIN_PASSWORD){
    return res.status(400).json({message: "Invalid Credentials"});
  }

  // Generate JWT Token
  const token = jwt.sign({email, role: "admin"}, process.env.JWT_SECRET, {expiresIn: "1d"});

  res.status(200).json({token});
};
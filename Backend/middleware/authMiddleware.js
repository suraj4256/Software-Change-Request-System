const jwt = require('jsonwebtoken');
const User = require('../models/User');
require('dotenv').config();

const verifyToken =  (req,res,next) =>{
    const token = req.headers['authorization']?.split(' ')[1];

    if(!token) {
        return res.status(403).json({message:"No token Provided"});
    }

    jwt.verify(token,process.env.JWT_SECRET,(err,decoded)=>{
        if (err) {
            return res.status(401).json({ message: 'Unauthorized!' });
        }
        req.userId = decoded.id;
        console.log(req.userId+"<-");// Extract user ID from the token
        req.userRole = decoded.role; // Extract user role from the token
        next(); // Pass control to the next middleware/route handler
    })
};
module.exports = verifyToken;
console.log(verifyToken);
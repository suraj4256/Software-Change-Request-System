const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.register = async(req,res)=>{
    const{username, email, password, roleId} =req.body;

    try{
        const hashedPassword = await bcrypt.hash(password,10);
        const newUser = await User.create({
            username:username,
            email:email,
            password:hashedPassword,
            roleId:roleId,
        });
        const token = jwt.sign({id:newUser.id, roleId:newUser.roleId},process.env.JWT_SECRET,{
            expiresIn:'2h'
        });
        res.json({token:token});
        // res.status(201).json({
        //     message:"User Registered Successfully"
        // });
    }catch(err){
        res.status(500).json({
            message:"Registration failed", err
        })
    }
};

exports.login = async(req,res)=>{
    const {username, password} = req.body;

    try {
        const user = await User.findOne({where:
           {username:username}
          });
        if(!user){
            res.status(401).json({
                message:"Invalid Credentials"
            })
        }
        const passwordCompare = await bcrypt.compare(password,user.password);
        if(!passwordCompare){
            res.status(401).json({
                message:"Invalid Credentials"
            })
        }else{
        const token = jwt.sign({id:user.id, roleId:user.roleId},process.env.JWT_SECRET,{
            expiresIn:'2h'
        });
        res.json({token:token});
    }
        

        // res.status(201).json({
        //     message:"User Logged in Successfully",
        //     token:user.token
        // });
    } catch (error) {
        res.status(500).json({
            message:"Login failed", error
        })
    }
};
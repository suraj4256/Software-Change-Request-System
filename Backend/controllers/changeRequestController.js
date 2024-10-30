const changeRequest = require('../models/ChangeRequest');

const createChangeRequest = async(req,res)=>{
   const {title, description, priority} = req.body;
   const requesterId = req.userId; 
   try {
    const newRequest = await changeRequest.create({
        title:title,
        description:description,
        priority:priority,
        requesterId:requesterId
    });
    res.status(201).json({
        message: 'Change request created',
        newRequest
    })
   } catch (error) {
    res.status(500).json({
        message:"Failed to create change request", error
    })
   }
};

const getAllChangeRequest = async(req,res)=>{
    try {
        const requests = await changeRequest.findAll();
        res.json(requests)
    } catch (error) {
        res.status(500).json({
            message:"Failed to get request", error
        })
    }
};

const deleteChangeRequests = async(req,res)=>{
    
}


module.exports = {
    createChangeRequest,
    getAllChangeRequest,
};

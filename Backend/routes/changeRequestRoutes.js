const express = require('express');

const {createChangeRequest,getAllChangeRequest} = require('../controllers/changeRequestController');

const verifyToken = require('../middleware/authMiddleware');

console.log("verifyToken:", verifyToken);
console.log("createChangeRequest:", createChangeRequest);
console.log("getAllChangeRequest:", getAllChangeRequest);

const router = express.Router();

router.post('/createRequest',verifyToken, createChangeRequest);

router.get('/getRequests',verifyToken, getAllChangeRequest);

module.exports = router;
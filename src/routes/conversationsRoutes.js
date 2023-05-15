const express = require('express');
const { create, update } = require('../controller/conversationController');
const conversationRouter = express.Router();

//post request
conversationRouter.post('/conversation',create);
//put
conversationRouter.put('/conversation/:uuid',update);

module.exports = conversationRouter;
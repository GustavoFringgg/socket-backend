var express = require('express');
var router = express.Router();

const messagesRouter = require('./messages')

 
router.use('/api/messages',messagesRouter)

module.exports = router;

/*
    Messages Routes
    /message
*/
const { Router } = require('express');
const { getMessage } = require('../controllers/messageController');

const router = Router();

// Obtain message
router.get('/', getMessage );

module.exports = router;
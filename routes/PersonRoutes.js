const express = require('express');
const Validate = require('../middleware/PersonMiddleware');
const { createPerson, getAperson, updatePerson, deletePerson } = require('../controllers/PersonController');

const router = express();

// validate the API
router.post('/api', Validate, createPerson);
router.get('/api/user_id', Validate, getAperson );
router.put('/api/user_id', Validate, updatePerson );
router.delete('/api/user_id',Validate, deletePerson );

module.exports = router;

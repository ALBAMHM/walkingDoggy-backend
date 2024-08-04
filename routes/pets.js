const express = require('express');
const { createPet, getPets, getAllPets } = require('../controllers/petController');
const auth = require('../middleware/auth');
const router = express.Router();

router.post('/', auth, createPet);
router.get('/', auth, getPets);
router.get('/all-pets', auth, getAllPets);


module.exports = router;
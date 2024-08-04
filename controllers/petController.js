const Pet = require('../models/Pet');

exports.createPet = async (req, res) => {
  const { name, species, breed, age, size, personality, preferences, photo_url } = req.body;
  try {
    const newPet = new Pet({
      user_id: req.user,
      name,
      species,
      breed,
      age,
      size,
      personality,
      preferences,
      photo_url,
    });
    await newPet.save();
    res.status(201).json(newPet);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getPets = async (req, res) => {
  try {
    const pets = await Pet.find({ user_id: req.user });
    res.json(pets);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllPets = async (req, res) => {
    try {
      const pets = await Pet.find().populate('owner', 'email location'); 
      res.json(pets);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
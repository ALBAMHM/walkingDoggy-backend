const Pet = require('../models/Pet');

// Crear una nueva mascota
exports.createPet = async (req, res) => {
  const { name, species, breed, age, size, personality, preferences, photo_url } = req.body;

  try {
    // Crear una nueva mascota
    const newPet = new Pet({
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

// Obtener mascotas del usuario autenticado
exports.getPets = async (req, res) => {
  try {
    const pets = await Pet.find();
    res.json(pets);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener todas las mascotas con información del propietario
exports.getAllPets = async (req, res) => {
  try {
    const pets = await Pet.find();
    res.json(pets);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
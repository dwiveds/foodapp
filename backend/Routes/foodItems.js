// routes/foodItems.js
const express = require('express');
const router = express.Router();
const FoodItem = require('../models/FoodItem');

// Create
router.post('/create', async (req, res) => {
  try {
    const foodItem = new FoodItem(req.body);
    await foodItem.save();
    res.status(201).json(foodItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Read All
router.get('/', async (req, res) => {
  try {
    const foodItems = await FoodItem.find();
    res.json(foodItems);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Read One
router.get('/:id', async (req, res) => {
  try {
    const foodItem = await FoodItem.findById(req.params.id);
    res.json(foodItem);
  } catch (error) {
    res.status(404).json({ error: 'Item not found' });
  }
});

// Update
router.put('/update/:id', async (req, res) => {
  try {
    const foodItem = await FoodItem.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(foodItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete
router.delete('/delete/:id', async (req, res) => {
  try {
    await FoodItem.findByIdAndDelete(req.params.id);
    res.json({ message: 'Item deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;

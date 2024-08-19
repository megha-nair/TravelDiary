const express = require('express');
const router = express.Router();
const Entry = require('../models/Entry');

// @route GET /api/entries
// @desc Get all entries
router.get('/all', async (req, res) => {
  try {
    const entries = await Entry.find();
    res.json(entries);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// @route POST /api/entries
// @desc Create a new entry
router.post('/add', async (req, res) => {
  const { title, date, location, description } = req.body;

  try {
    const newEntry = new Entry({
      title,
      date,
      location,
      description,
    });

    const entry = await newEntry.save();
    res.json(entry);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// @route PUT /api/entries/:id
// @desc Update an entry
router.put('/update/:id', async (req, res) => {
  try {
    const entry = await Entry.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(entry);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// @route DELETE /api/entries/:id
// @desc Delete an entry
router.delete('/delete/:id', async (req, res) => {
  try {
    await Entry.findByIdAndDelete(req.params.id);
    res.json({ message: 'Entry deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;

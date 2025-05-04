const express = require('express');
const router = express.Router();
const Listing = require('../models/listing');

router.get('/', async (req, res) => {
  try {
    const listings = await Listing.findAll({
      order: [['created_at', 'DESC']]
    });
    res.json(listings);
  } catch (err) {
    console.error('Error fetching listings:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

router.post('/', async (req, res) => {
  const { title, description, rent, address, rooms, contact_info } = req.body;

  if (!title || !rent || !address || !rooms || !contact_info) {
    return res.status(400).json({ error: 'Please provide all required fields' });
  }
  
  try {
    const listing = await Listing.create({
      title,
      description,
      rent,
      address,
      rooms,
      contact_info
    });
    
    res.status(201).json(listing);
  } catch (err) {
    console.error('Error adding listing:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
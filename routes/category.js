const express = require('express');
const router = express.Router();
const categoryService = require('../services/categoryService');

router.get('/', async (req, res) => {
  try {
    const categories = await categoryService.getCategories();
    res.json({ categories });
  } catch (err) {
    console.error('Failed to fetch categories:', err);
    res.status(500).json({ error: 'Failed to fetch categories' });
  }
});

module.exports = router;
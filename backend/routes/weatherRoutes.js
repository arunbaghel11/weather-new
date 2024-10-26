const express = require('express');
const { updateWeatherData } = require('../controllers/weatherController');

const router = express.Router();

// Route to update weather data
router.get('/update', updateWeatherData);

module.exports = router;

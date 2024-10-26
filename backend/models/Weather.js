const mongoose = require('mongoose');

const WeatherSchema = new mongoose.Schema({
    city: { type: String, required: true },
    temperature: { type: Number, required: true },
    feels_like: { type: Number, required: true },
    condition: { type: String, required: true },
    timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Weather', WeatherSchema);

const cron = require('node-cron');
const { updateWeatherData } = require('../controllers/weatherController');

// Schedule weather updates every 5 minutes
cron.schedule('*/5 * * * *', () => {
    console.log('Updating weather data...');
    updateWeatherData();
});

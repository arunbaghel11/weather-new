const axios = require('axios');
const Weather = require('../models/Weather');
const nodemailer = require('nodemailer');

// Function to fetch weather data
const fetchWeatherData = async (city) => {
    const response = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
        params: {
            q: city,
            appid: process.env.OPENWEATHER_API_KEY,
            units: 'metric'  // Get temperature in Celsius
        },
    });
    return response.data;
};

// Controller to get weather data and save it to the database
const updateWeatherData = async (req, res) => {
    const cities = ['Delhi', 'Mumbai', 'Chennai', 'Bangalore', 'Kolkata', 'Hyderabad'];
    try {
        for (const city of cities) {
            const data = await fetchWeatherData(city);
            const weather = new Weather({
                city: city,
                temperature: data.main.temp,
                feels_like: data.main.feels_like,
                condition: data.weather[0].main,
            });
            await weather.save();
        }
        res.status(200).json({ message: 'Weather data updated successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to update weather data' });
    }
};

// Email alert function
const sendEmailAlert = async (alertData) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.ALERT_EMAIL,
            pass: process.env.ALERT_EMAIL_PASSWORD,
        },
    });

    const mailOptions = {
        from: process.env.ALERT_EMAIL,
        to: process.env.ALERT_EMAIL,
        subject: 'Weather Alert',
        text: `Alert! Weather condition has reached: ${alertData}`,
    };

    await transporter.sendMail(mailOptions);
};

module.exports = { updateWeatherData, sendEmailAlert };

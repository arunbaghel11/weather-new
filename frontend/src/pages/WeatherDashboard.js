import React, { useEffect, useState } from 'react';
import axios from 'axios';

const WeatherDashboard = () => {
    const [weatherData, setWeatherData] = useState([]);

    const fetchWeatherData = async () => {
        const response = await axios.get('/api/weather');
        setWeatherData(response.data);
    };

    useEffect(() => {
        fetchWeatherData();
        const interval = setInterval(fetchWeatherData, 300000); // Fetch every 5 minutes
        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <h2>Current Weather Data</h2>
            <table>
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (°C)</th>
                        <th>Feels Like (°C)</th>
                        <th>Condition</th>
                        <th>Timestamp</th>
                    </tr>
                </thead>
                <tbody>
                    {weatherData.map((weather) => (
                        <tr key={weather._id}>
                            <td>{weather.city}</td>
                            <td>{weather.temperature}</td>
                            <td>{weather.feels_like}</td>
                            <td>{weather.condition}</td>
                            <td>{new Date(weather.timestamp).toLocaleString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default WeatherDashboard;

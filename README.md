
# Weather Monitoring System

## Objective
Develop a real-time data processing system to monitor weather conditions and provide summarized insights using rollups and aggregates.

## Project Structure
- **Backend**: Express.js server, MongoDB for data storage, Axios for API calls to OpenWeatherMap, and NodeMailer for alerts.
- **Frontend**: React.js application for displaying weather data and alerts.

## Setup Instructions

### Backend
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the backend directory and add your MongoDB URI and OpenWeather API key:
   ```env
   MONGO_URI=your_mongo_db_uri
   OPENWEATHER_API_KEY=your_openweather_api_key
   ALERT_EMAIL=your_email@gmail.com
   ALERT_EMAIL_PASSWORD=your_email_password
   ```
4. Start the server:
   ```bash
   npm run dev
   ```

### Frontend
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```
3. Start the React application:
   ```bash
   npm start
   ```

## Features
- Fetches weather data for Indian metro cities every 5 minutes.
- Stores weather data in MongoDB.
- Sends email alerts based on user-configurable thresholds.

## Tech Stack
- **Backend**: Node.js, Express, MongoDB
- **Frontend**: React, Axios
- **Utilities**: NodeMailer for alerts, Node-Cron for scheduling tasks

## Author
Arun Baghel

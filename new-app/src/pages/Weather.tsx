import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Weather() {
    const [forecast, setForecast] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchWeather = async () => {
            const apiKey = '003601dc0216276c4f4b5c991b2ed23e'; // Your API key
            const city = 'Colombo'; // City name (can be changed)
            const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

            try {
                const response = await axios.get(url);
                setForecast(response.data);
                setLoading(false);
            } catch (err) {
                setError('Error fetching weather data');
                setLoading(false);
            }
        };

        fetchWeather();
    }, []);

    // Helper function to format the date
    const formatDate = (date) => {
        const options = { weekday: 'long', month: 'long', day: 'numeric' };
        return new Date(date).toLocaleDateString(undefined, options);
    };

    if (loading) {
        return <p>Loading weather data...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    // Get today's and tomorrow's forecast
    const today = forecast.list.filter(item => {
        const todayDate = new Date().setHours(0, 0, 0, 0);
        return new Date(item.dt * 1000).setHours(0, 0, 0, 0) === todayDate;
    })[0]; // The first entry for today
    const tomorrow = forecast.list.filter(item => {
        const tomorrowDate = new Date();
        tomorrowDate.setDate(tomorrowDate.getDate() + 1);
        tomorrowDate.setHours(0, 0, 0, 0);
        return new Date(item.dt * 1000).setHours(0, 0, 0, 0) === tomorrowDate;
    })[0]; // The first entry for tomorrow

    return (
        <div className="container py-12">
            <h1 className="text-2xl font-bold mb-4">Weather Forecast</h1>
            <p className="text-muted-foreground">
                Get the latest weather updates for your favorite destinations in Sri Lanka.
            </p>

            {/* Today */}
            {today && (
                <div>
                    <h2 className="text-xl font-semibold">Today - {formatDate(today.dt * 1000)}</h2>
                    <p>{today.weather[0].description}</p>
                    <p>Temperature: {today.main.temp}°C</p>
                    <p>Humidity: {today.main.humidity}%</p>
                    <p>Wind Speed: {today.wind.speed} m/s</p>
                </div>
            )}

            {/* Tomorrow */}
            {tomorrow && (
                <div className="mt-6">
                    <h2 className="text-xl font-semibold">Tomorrow - {formatDate(tomorrow.dt * 1000)}</h2>
                    <p>{tomorrow.weather[0].description}</p>
                    <p>Temperature: {tomorrow.main.temp}°C</p>
                    <p>Humidity: {tomorrow.main.humidity}%</p>
                    <p>Wind Speed: {tomorrow.wind.speed} m/s</p>
                </div>
            )}
        </div>
    );
}

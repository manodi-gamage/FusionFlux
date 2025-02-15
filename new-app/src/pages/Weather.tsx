import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { WiThermometer, WiHumidity, WiStrongWind } from 'react-icons/wi';
import './Weather.css';
import { useTheme } from '../hooks/useTheme'; // Import the useTheme hook

export default function Weather() {
    const [forecast, setForecast] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { theme } = useTheme(); // Get the current theme

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

    const forecastDays = forecast.list.reduce((days, item) => {
        const day = new Date(item.dt * 1000).setHours(0, 0, 0, 0);
        if (!days.some(d => d.date === day)) {
            days.push({
                date: day,
                data: forecast.list.filter(i => new Date(i.dt * 1000).setHours(0, 0, 0, 0) === day),
            });
        }
        return days;
    }, []);

    return (
        <div className="container py-12">
            <div className="weather-header">
                <h1 className="text-2xl font-bold mb-4">Weather Forecast</h1>
                <p className="text-muted-foreground">
                    Get the latest weather updates for your favorite destinations in Sri Lanka.
                </p>
            </div>

            <div className="weather-cards-wrapper">
                {forecastDays.map((day, index) => {
                    const dayData = day.data[0];
                    return (
                        <div key={index} className="weather-card">
                            <h2 className="date-heading">{formatDate(day.date)}</h2>
                            <p className="weather-description">{dayData.weather[0].description}</p>
                            <div className="weather-stats">
                                <p><WiThermometer /> {dayData.main.temp}°C</p>
                                <p><WiHumidity /> {dayData.main.humidity}%</p>
                                <p><WiStrongWind /> {dayData.wind.speed} m/s</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

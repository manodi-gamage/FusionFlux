import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Cloud, Sun, Droplets, Wind, CloudRain, Loader2, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

export default function Weather() {
    const [forecast, setForecast] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [city, setCity] = useState('Colombo');
    const [searchQuery, setSearchQuery] = useState('');
    const { toast } = useToast();

    const fetchWeather = async (cityName) => {
        setLoading(true);
        setError(null);
        const apiKey = '003601dc0216276c4f4b5c991b2ed23e';
        const url = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}&units=metric`;

        try {
            const response = await axios.get(url);
            setForecast(response.data);
            setCity(cityName);
            setLoading(false);
        } catch (err) {
            setError('City not found. Please try another city name.');
            toast({
                variant: 'destructive',
                title: 'Error',
                description: 'City not found. Please try another city name.',
            });
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchWeather(city);
    }, []);

    const handleSearch = (e) => {
        e.preventDefault();
        if (!searchQuery.trim()) {
            toast({
                variant: 'destructive',
                title: 'Error',
                description: 'Please enter a city name',
            });
            return;
        }
        fetchWeather(searchQuery);
    };

    // Helper function to format the date
    const formatDate = (date) => {
        const options = { weekday: 'long', month: 'long', day: 'numeric' };
        return new Date(date).toLocaleDateString(undefined, options);
    };

    const getWeatherIcon = (description) => {
        if (description.includes('rain')) return <CloudRain className="h-12 w-12" />;
        if (description.includes('cloud')) return <Cloud className="h-12 w-12" />;
        return <Sun className="h-12 w-12" />;
    };

    const getTomorrowsForecast = (forecastList) => {
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        tomorrow.setHours(0, 0, 0, 0);

        return forecastList.find((item) => {
            const itemDate = new Date(item.dt * 1000);
            return itemDate.getDate() === tomorrow.getDate() && itemDate.getMonth() === tomorrow.getMonth();
        });
    };

    // Update the today and tomorrow calculations
    const today = forecast?.list[0]; // First entry is always current/today
    const tomorrow = forecast?.list ? getTomorrowsForecast(forecast.list) : null;

    return (
        <div className="container py-12 max-w-4xl mx-auto">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-4">Weather Forecast</h1>
            <p className="text-muted-foreground mb-8 text-lg">
                Get the latest weather updates for your favorite destinations in Sri Lanka.
            </p>

            <form onSubmit={handleSearch} className="flex gap-4 mb-8">
                <Input
                    type="text"
                    placeholder="Enter city name..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="max-w-[300px]"
                />
                <Button type="submit" disabled={loading}>
                    {loading ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : <Search className="h-4 w-4 mr-2" />}
                    Search
                </Button>
            </form>

            {loading ? (
                <div className="flex items-center justify-center min-h-[400px]">
                    <Loader2 className="h-8 w-8 animate-spin text-primary" />
                </div>
            ) : error ? (
                <Card className="bg-destructive/10">
                    <CardContent className="flex items-center justify-center min-h-[100px]">
                        <p className="text-destructive">{error}</p>
                    </CardContent>
                </Card>
            ) : (
                <>
                    <h2 className="text-2xl font-semibold mb-6">Weather in {city}</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {/* Today */}
                        {today && (
                            <Card>
                                <CardHeader>
                                    <CardTitle>Today - {formatDate(today.dt * 1000)}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex items-center gap-4 mb-6">
                                        {getWeatherIcon(today.weather[0].description)}
                                        <div>
                                            <p className="text-lg capitalize">{today.weather[0].description}</p>
                                            <p className="text-3xl font-bold">{Math.round(today.main.temp)}°C</p>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="flex items-center gap-2">
                                            <Droplets className="text-blue-500" />
                                            <span>Humidity: {today.main.humidity}%</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Wind className="text-gray-500" />
                                            <span>Wind: {today.wind.speed} m/s</span>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        )}

                        {/* Tomorrow */}
                        {tomorrow && (
                            <Card>
                                <CardHeader>
                                    <CardTitle>Tomorrow - {formatDate(tomorrow.dt * 1000)}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex items-center gap-4 mb-6">
                                        {getWeatherIcon(tomorrow.weather[0].description)}
                                        <div>
                                            <p className="text-lg capitalize">{tomorrow.weather[0].description}</p>
                                            <p className="text-3xl font-bold">{Math.round(tomorrow.main.temp)}°C</p>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="flex items-center gap-2">
                                            <Droplets className="text-blue-500" />
                                            <span>Humidity: {tomorrow.main.humidity}%</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Wind className="text-gray-500" />
                                            <span>Wind: {tomorrow.wind.speed} m/s</span>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        )}
                    </div>
                </>
            )}
        </div>
    );
}

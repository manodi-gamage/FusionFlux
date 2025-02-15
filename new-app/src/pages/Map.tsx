import { useState } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow, Autocomplete } from '@react-google-maps/api';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const locations = [
    { id: 1, name: 'Sigiriya', position: { lat: 7.957, lng: 80.7603 } },
    { id: 2, name: 'Galle Fort', position: { lat: 6.03, lng: 80.2167 } },
    { id: 3, name: 'Ella', position: { lat: 6.8667, lng: 81.0466 } },
    { id: 4, name: 'Yala National Park', position: { lat: 6.3106, lng: 81.5045 } },
    { id: 5, name: 'Polonnaruwa', position: { lat: 7.9403, lng: 81.0188 } },
];

const mapContainerStyle = {
    width: '100%',
    height: '600px',
};

const defaultCenter = {
    lat: 7.8731,
    lng: 80.7718,
};

const libraries = ['places']; // Defined statically to prevent reloads

export default function Map() {
    const [selectedLocation, setSelectedLocation] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [autocomplete, setAutocomplete] = useState(null);
    const filteredLocations = locations.filter((location) =>
        location.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const onLoad = (auto) => setAutocomplete(auto);
    const onPlaceChanged = () => {
        if (autocomplete) {
            const place = autocomplete.getPlace();
            if (place?.geometry) {
                const newLoc = {
                    id: Date.now(),
                    name: place.name,
                    position: {
                        lat: place.geometry.location.lat(),
                        lng: place.geometry.location.lng(),
                    },
                };
                setSelectedLocation(newLoc);
            }
        }
    };

    return (
        <div className="container py-12 flex items-center justify-center min-h-screen">
            <div className="w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-4xl font-bold mb-4">Explore Sri Lanka Map</h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Find your way around Sri Lanka's most beautiful destinations and plan your perfect route.
                    </p>
                </motion.div>

                <LoadScript
                    googleMapsApiKey="AIzaSyCNA1ucfAXxhhx5JH0AprkMt5pHkwVqEyM" // Replace with a valid API key
                    libraries={libraries}
                >
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <Card className="lg:col-span-1">
                            <CardContent className="p-6">
                                <div className="space-y-6">
                                    {/* Google Places search */}
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">Search anywhere</label>
                                        <div className="flex items-center gap-2 w-full">
                                            <Autocomplete
                                                onLoad={onLoad}
                                                onPlaceChanged={onPlaceChanged}
                                                className="w-full"
                                            >
                                                <Input type="text" placeholder="Enter location..." className="w-full" />
                                            </Autocomplete>
                                            <Button size="icon" className="flex-shrink-0">
                                                <Search className="h-4 w-4" />
                                            </Button>
                                        </div>
                                    </div>

                                    <div className="relative">
                                        <div className="absolute inset-0 flex items-center">
                                            <span className="w-full border-t" />
                                        </div>
                                        <div className="relative flex justify-center text-xs uppercase">
                                            <span className="bg-background px-2 text-muted-foreground">
                                                or search popular locations
                                            </span>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">Filter locations</label>
                                        <Input
                                            type="text"
                                            placeholder="Type to filter..."
                                            value={searchQuery}
                                            onChange={(e) => setSearchQuery(e.target.value)}
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        {filteredLocations.map((location) => (
                                            <Button
                                                key={location.id}
                                                variant="outline"
                                                className="w-full justify-start"
                                                onClick={() => setSelectedLocation(location)}
                                            >
                                                {location.name}
                                            </Button>
                                        ))}
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="lg:col-span-2">
                            <CardContent className="p-6">
                                <GoogleMap
                                    mapContainerStyle={mapContainerStyle}
                                    center={selectedLocation ? selectedLocation.position : defaultCenter}
                                    zoom={selectedLocation ? 12 : 8}
                                >
                                    {filteredLocations.map((location) => (
                                        <Marker
                                            key={location.id}
                                            position={location.position}
                                            title={location.name}
                                            onClick={() => setSelectedLocation(location)}
                                        />
                                    ))}

                                    {selectedLocation && (
                                        <InfoWindow
                                            position={selectedLocation.position}
                                            onCloseClick={() => setSelectedLocation(null)}
                                        >
                                            <div className="p-2">
                                                <h3 className="text-lg font-semibold">{selectedLocation.name}</h3>
                                                {/* ...additional info if needed... */}
                                            </div>
                                        </InfoWindow>
                                    )}
                                </GoogleMap>
                            </CardContent>
                        </Card>
                    </div>
                </LoadScript>
            </div>
        </div>
    );
}

import { useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const locations = [
  { id: 1, name: 'Sigiriya', position: { lat: 7.9570, lng: 80.7603 } },
  { id: 2, name: 'Galle Fort', position: { lat: 6.0300, lng: 80.2167 } },
  { id: 3, name: 'Ella', position: { lat: 6.8667, lng: 81.0466 } },
  { id: 4, name: 'Yala National Park', position: { lat: 6.3106, lng: 81.5045 } },
  { id: 5, name: 'Polonnaruwa', position: { lat: 7.9403, lng: 81.0188 } },
];

const mapContainerStyle = {
  width: '100%',
  height: '600px',
};

const center = {
  lat: 7.8731,
  lng: 80.7718,
};

export default function Map() {
  const [selectedLocation, setSelectedLocation] = useState(null);
  
  return (
    <div className="container py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold mb-4">Explore Sri Lanka Map</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Find your way around Sri Lanka's most beautiful destinations and plan your
          perfect route.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Card className="lg:col-span-1">
          <CardContent className="p-6">
            <div className="flex items-center space-x-2 mb-6">
              <Input
                type="text"
                placeholder="Search locations..."
                className="flex-1"
              />
              <Button size="icon">
                <Search className="h-4 w-4" />
              </Button>
            </div>

            <div className="space-y-4">
              {locations.map((location) => (
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
          </CardContent>
        </Card>

        <Card className="lg:col-span-2">
          <CardContent className="p-6">
            <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
              <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={selectedLocation?.position || center}
                zoom={selectedLocation ? 12 : 8}
              >
                {locations.map((location) => (
                  <Marker
                    key={location.id}
                    position={location.position}
                    title={location.name}
                  />
                ))}
              </GoogleMap>
            </LoadScript>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
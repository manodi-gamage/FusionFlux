import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star } from 'lucide-react';

const hotels = [
  {
    id: 1,
    name: 'Heritance Kandalama',
    location: 'Dambulla',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945',
    rating: 5,
    price: '$200',
    description: 'Luxury hotel built into a cliff, offering stunning views of Sigiriya Rock.',
    amenities: ['Pool', 'Spa', 'Restaurant', 'Gym'],
  },
  {
    id: 2,
    name: 'Jetwing Lighthouse',
    location: 'Galle',
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4',
    rating: 5,
    price: '$180',
    description: 'Colonial-style beachfront hotel with excellent seafood restaurant.',
    amenities: ['Beach Access', 'Pool', 'Spa', 'Bar'],
  },
  {
    id: 3,
    name: '98 Acres Resort',
    location: 'Ella',
    image: 'https://images.unsplash.com/photo-1580977276076-ae4b8c219b8e',
    rating: 4,
    price: '$150',
    description: 'Eco-luxury resort with panoramic views of Ella Gap.',
    amenities: ['Mountain View', 'Restaurant', 'Spa', 'Bar'],
  },
  {
    id: 4,
    name: 'Cinnamon Grand',
    location: 'Colombo',
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb',
    rating: 5,
    price: '$220',
    description: 'Luxury city hotel with multiple restaurants and excellent service.',
    amenities: ['Pool', 'Gym', 'Spa', 'Multiple Restaurants'],
  },
  {
    id: 5,
    name: 'Wild Coast Tented Lodge',
    location: 'Yala',
    image: 'https://images.unsplash.com/photo-1533008093099-e2681382639a',
    rating: 5,
    price: '$400',
    description: 'Luxury camping experience near Yala National Park.',
    amenities: ['Safari Access', 'Pool', 'Restaurant', 'Unique Accommodation'],
  },
  {
    id: 6,
    name: 'Anantara Peace Haven',
    location: 'Tangalle',
    image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9',
    rating: 5,
    price: '$300',
    description: 'Beachfront resort with private beach and excellent spa.',
    amenities: ['Private Beach', 'Spa', 'Pool', 'Water Sports'],
  },
];

export default function Hotels() {
  return (
    <div className="container py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold mb-4">Luxury Stays in Sri Lanka</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Experience world-class hospitality at our carefully curated selection of
          luxury hotels and resorts across Sri Lanka.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {hotels.map((hotel, index) => (
          <motion.div
            key={hotel.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full">
              <img
                src={hotel.image}
                alt={hotel.name}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold">{hotel.name}</h3>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 fill-primary text-primary" />
                    <span className="ml-1 text-sm">{hotel.rating}</span>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-2">{hotel.location}</p>
                <p className="text-muted-foreground mb-4">{hotel.description}</p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Amenities:</h4>
                    <div className="flex flex-wrap gap-2">
                      {hotel.amenities.map((amenity) => (
                        <span
                          key={amenity}
                          className="bg-secondary text-secondary-foreground px-2 py-1 rounded-md text-sm"
                        >
                          {amenity}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold">
                      From {hotel.price}/night
                    </span>
                    <Button>Book Now</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
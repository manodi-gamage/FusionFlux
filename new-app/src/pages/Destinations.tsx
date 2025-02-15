import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const destinations = [
  {
    id: 1,
    name: 'Sigiriya',
    image: 'https://images.unsplash.com/photo-1586613168754-9e8a66fad03b',
    description: 'Ancient palace and fortress complex with stunning views.',
    activities: ['Rock Climbing', 'Historical Tours', 'Photography'],
    bestTime: 'Early Morning',
    duration: '4-5 hours',
  },
  {
    id: 2,
    name: 'Galle Fort',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96',
    description: 'UNESCO World Heritage site with Dutch colonial architecture.',
    activities: ['Walking Tours', 'Shopping', 'Sunset Views'],
    bestTime: 'Late Afternoon',
    duration: '2-3 hours',
  },
  {
    id: 3,
    name: 'Ella',
    image: 'https://images.unsplash.com/photo-1586613168185-9a30989b11d3',
    description: 'Scenic mountain village famous for hiking and tea plantations.',
    activities: ['Hiking', 'Tea Tasting', 'Train Rides'],
    bestTime: 'Morning',
    duration: 'Full Day',
  },
  {
    id: 4,
    name: 'Yala National Park',
    image: 'https://images.unsplash.com/photo-1590418606746-018840f9cd0f',
    description: 'Famous wildlife sanctuary home to leopards and elephants.',
    activities: ['Safari Tours', 'Bird Watching', 'Photography'],
    bestTime: 'Early Morning/Late Afternoon',
    duration: 'Half Day',
  },
  {
    id: 5,
    name: 'Polonnaruwa',
    image: 'https://images.unsplash.com/photo-1625736036341-0a2a647b5686',
    description: 'Ancient city with well-preserved ruins and archaeological sites.',
    activities: ['Cycling Tours', 'Historical Tours', 'Photography'],
    bestTime: 'Morning',
    duration: 'Full Day',
  },
  {
    id: 6,
    name: 'Mirissa Beach',
    image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5',
    description: 'Popular beach destination for whale watching and surfing.',
    activities: ['Whale Watching', 'Surfing', 'Beach Activities'],
    bestTime: 'December to April',
    duration: 'Flexible',
  },
];

export default function Destinations() {
  return (
    <div className="container py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold mb-4">Explore Sri Lanka</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Discover the most beautiful and culturally rich destinations across the island,
          from ancient ruins to pristine beaches.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {destinations.map((destination, index) => (
          <motion.div
            key={destination.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full">
              <img
                src={destination.image}
                alt={destination.name}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{destination.name}</h3>
                <p className="text-muted-foreground mb-4">{destination.description}</p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Activities:</h4>
                    <div className="flex flex-wrap gap-2">
                      {destination.activities.map((activity) => (
                        <span
                          key={activity}
                          className="bg-secondary text-secondary-foreground px-2 py-1 rounded-md text-sm"
                        >
                          {activity}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Best time: {destination.bestTime}</span>
                    <span>Duration: {destination.duration}</span>
                  </div>
                  
                  <Button className="w-full">Learn More</Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
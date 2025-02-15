import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const destinations = [
  {
    id: 1,
    name: 'Sigiriya',
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/ed/85/6b/um-palacio-no-topo-da.jpg?w=1200&h=1200&s=1',
    description: 'Ancient palace and fortress complex with stunning views.',
    activities: ['Rock Climbing', 'Historical Tours', 'Photography'],
    bestTime: 'Early Morning',
    duration: '4-5 hours',
  },
  {
    id: 2,
    name: 'Galle Fort',
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/24/05/e0/galle-fort.jpg?w=900&h=500&s=1',
    description: 'UNESCO World Heritage site with Dutch colonial architecture.',
    activities: ['Walking Tours', 'Shopping', 'Sunset Views'],
    bestTime: 'Late Afternoon',
    duration: '2-3 hours',
  },
  {
    id: 3,
    name: 'Ella',
    image: 'https://media-cdn.tripadvisor.com/media/photo-c/1280x250/0d/bc/05/aa/ella.jpg',
    description: 'Scenic mountain village famous for hiking and tea plantations.',
    activities: ['Hiking', 'Tea Tasting', 'Train Rides'],
    bestTime: 'Morning',
    duration: 'Full Day',
  },
  {
    id: 4,
    name: 'Yala National Park',
    image: 'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/09/f2/0f/25.jpg',
    description: 'Famous wildlife sanctuary home to leopards and elephants.',
    activities: ['Safari Tours', 'Bird Watching', 'Photography'],
    bestTime: 'Early Morning',
    duration: 'Half Day',
  },
  {
    id: 5,
    name: 'Polonnaruwa',
    image: 'https://www.storyofsrilanka.com/images/slider/sri-lanka-guide-destinations/polonnaruwa/01.jpg',
    description: 'Ancient city with well-preserved ruins and archaeological sites.',
    activities: ['Cycling Tours', 'Historical Tours', 'Photography'],
    bestTime: 'Morning',
    duration: 'Full Day',
  },
  {
    id: 6,
    name: 'Mirissa Beach',
    image: 'https://lp-cms-production.imgix.net/2021-03/Mirissa_beach_Sri_Lanka.jpg',
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
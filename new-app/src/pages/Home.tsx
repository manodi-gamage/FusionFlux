import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const destinations = [
  {
    id: 1,
    name: 'Sigiriya',
    image: 'https://images.unsplash.com/photo-1586613168754-9e8a66fad03b',
    description: 'Ancient palace and fortress complex with stunning views.',
  },
  {
    id: 2,
    name: 'Galle Fort',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96',
    description: 'UNESCO World Heritage site with Dutch colonial architecture.',
  },
  {
    id: 3,
    name: 'Ella',
    image: 'https://images.unsplash.com/photo-1586613168185-9a30989b11d3',
    description: 'Scenic mountain village famous for hiking and tea plantations.',
  },
];

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    country: 'United Kingdom',
    comment: 'Sri Lanka exceeded all my expectations. The people are incredibly friendly and the food is amazing!',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
  },
  {
    id: 2,
    name: 'Michael Chen',
    country: 'Singapore',
    comment: 'The cultural heritage and natural beauty of Sri Lanka is breathtaking. Will definitely return!',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
  },
  {
    id: 3,
    name: 'Emma Wilson',
    country: 'Australia',
    comment: 'From beaches to mountains, Sri Lanka has it all. An unforgettable experience!',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1588416936097-41850ab3d86d"
            alt="Sri Lanka"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-center text-white"
        >
          <h1 className="text-5xl font-bold mb-4">Discover Sri Lanka</h1>
          <p className="text-xl mb-8">Experience the wonder of the Pearl of the Indian Ocean</p>
          
          <div className="flex items-center justify-center max-w-md mx-auto bg-white rounded-lg p-2">
            <Input
              type="text"
              placeholder="Search destinations, hotels, activities..."
              className="border-none focus-visible:ring-0"
            />
            <Button size="icon">
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Featured Destinations */}
      <section className="py-16 container">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Destinations</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <motion.div
              key={destination.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <CardContent className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{destination.name}</h3>
                  <p className="text-muted-foreground">{destination.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-muted">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Visitors Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h4 className="font-semibold">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground">{testimonial.country}</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground">{testimonial.comment}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
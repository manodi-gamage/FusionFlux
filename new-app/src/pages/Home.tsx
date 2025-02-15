import { motion, stagger } from 'framer-motion';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const destinations = [
    {
        id: 1,
        name: 'Sigiriya',
        image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/ed/85/6b/um-palacio-no-topo-da.jpg?w=1200&h=1200&s=1',
        description: 'Ancient palace and fortress complex with stunning views.',
    },
    {
        id: 2,
        name: 'Galle Fort',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Galle_Fort.jpg/640px-Galle_Fort.jpg',
        description: 'UNESCO World Heritage site with Dutch colonial architecture.',
    },
    {
        id: 3,
        name: 'Ella',
        image: 'https://www.erikastravels.com/wp-content/uploads/2017/10/9-Arch-Bridge-Train.jpg',
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
            <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <motion.img
                        initial={{ scale: 1.2, filter: 'blur(0px)' }}
                        animate={{ scale: 1, filter: 'blur(3px)' }}
                        transition={{ duration: 1.5 }}
                        src="https://images.unsplash.com/photo-1588416936097-41850ab3d86d"
                        alt="Sri Lanka"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
                </div>

                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.3,
                            },
                        },
                    }}
                    className="relative text-center text-white"
                >
                    <motion.h1
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        className="text-6xl font-bold mb-4 drop-shadow-lg"
                    >
                        Discover Sri Lanka
                    </motion.h1>
                    <motion.p
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        className="text-2xl mb-8 drop-shadow-md"
                    >
                        Experience the wonder of the Pearl of the Indian Ocean
                    </motion.p>

                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        className="flex items-center justify-center max-w-md mx-auto bg-white/90 backdrop-blur-sm rounded-lg p-2 shadow-lg"
                    >
                        <Input
                            type="text"
                            placeholder="Search destinations, hotels, activities..."
                            className="border-none focus-visible:ring-0 text-black placeholder:text-gray-500"
                        />
                        <Button size="icon" className="bg-primary hover:bg-primary/90">
                            <Search className="h-4 w-4" />
                        </Button>
                    </motion.div>
                </motion.div>
            </section>

            {/* Featured Destinations */}
            <section className="py-20 container">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold text-center mb-12"
                >
                    Featured Destinations
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {destinations.map((destination, index) => (
                        <motion.div
                            key={destination.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            whileHover={{ y: -10 }}
                        >
                            <Card className="overflow-hidden transform transition-all duration-300 hover:shadow-xl">
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
            <section className="py-20 bg-muted">
                <div className="container">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl font-bold text-center mb-12"
                    >
                        What Our Visitors Say
                    </motion.h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={testimonial.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                whileHover={{ scale: 1.03 }}
                            >
                                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
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

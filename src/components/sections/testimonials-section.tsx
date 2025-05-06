import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Priya S.',
    location: 'Bangalore',
    avatar: 'PS',
    image: 'https://picsum.photos/seed/priya/100/100',
    rating: 5,
    comment: "Excellent service and very professional doctors. My root canal was painless! Highly recommend Aditi Oro Dental Clinic.",
  },
  {
    name: 'Amit K.',
    location: 'Ranchi',
    avatar: 'AK',
    image: 'https://picsum.photos/seed/amit/100/100',
    rating: 5,
    comment: "The staff is very friendly and the clinic is super clean. Dr. Jane Smith explained everything clearly. Great experience.",
  },
  {
    name: 'Deepa M.',
    location: 'Bangalore',
    avatar: 'DM',
    image: 'https://picsum.photos/seed/deepa/100/100',
    rating: 4,
    comment: "Good facilities and experienced dentists. The waiting time can sometimes be long, but the quality of care is worth it.",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-16 lg:py-24 bg-background fade-in-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">What Our Patients Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from those who have experienced our care firsthand.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={testimonial.image} alt={testimonial.name} data-ai-hint="person photo" />
                    <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground italic">"{testimonial.comment}"</p>
              </CardContent>
              <CardFooter>
                <div className="flex items-center">
                  {Array(testimonial.rating)
                    .fill(0)
                    .map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  {Array(5 - testimonial.rating)
                    .fill(0)
                    .map((_, i) => (
                      <Star key={i + testimonial.rating} className="h-5 w-5 text-yellow-400" />
                    ))}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

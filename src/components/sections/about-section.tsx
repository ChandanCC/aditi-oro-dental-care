import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, ShieldCheck, Smile } from 'lucide-react';

const values = [
  {
    icon: <CheckCircle className="h-8 w-8 text-primary" />,
    title: 'Patient-Centric Care',
    description: 'We prioritize your comfort and needs, tailoring treatments to achieve the best outcomes.',
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
    title: 'Advanced Technology',
    description: 'Utilizing the latest dental technology for precise diagnostics and effective treatments.',
  },
  {
    icon: <Smile className="h-8 w-8 text-primary" />,
    title: 'Experienced Team',
    description: 'Our skilled dentists and staff are committed to providing exceptional dental care.',
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-16 lg:py-24 bg-background fade-in-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">
              About Aditi Oro Dental Clinic
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Aditi Oro Dental Clinic, with state-of-the-art centers in Ranchi and Bangalore, is dedicated to providing comprehensive, high-quality dental care in a friendly and comfortable environment. Our mission is to help you achieve and maintain optimal oral health and a beautiful smile for life.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              We believe in continuous learning and adopt the latest advancements in dentistry to offer a wide range of services, from routine check-ups and cleanings to complex cosmetic and restorative procedures. Your trust is our greatest asset, and we strive to exceed your expectations at every visit.
            </p>
            <div className="grid sm:grid-cols-1 gap-6">
              {values.map((value) => (
                <div key={value.title} className="flex items-start space-x-4 p-4 bg-secondary/50 rounded-lg shadow-sm">
                  <div className="flex-shrink-0 mt-1">{value.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-1">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="order-1 lg:order-2 relative">
            <Image
              src="https://picsum.photos/seed/dentalclinic/600/700"
              alt="Interior of Aditi Oro Dental Clinic"
              width={600}
              height={700}
              className="rounded-xl shadow-xl object-cover"
              data-ai-hint="clinic interior"
            />
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-primary/10 rounded-lg transform rotate-12 hidden lg:block"></div>
             <div className="absolute -top-8 -right-8 w-24 h-24 bg-accent/10 rounded-full hidden lg:block"></div>
          </div>
        </div>
      </div>
    </section>
  );
}


'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const CLICK4APPOINTMENT_BASE_URL = "https://click4appointment.com/book-appointment-guest/4190";

export default function HeroSection() {
  return (
    <section id="hero" className="relative bg-gradient-to-r from-primary/10 via-background to-secondary/20 py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        {/* You can use a subtle pattern or a very faint large image here if desired */}
        {/* For example a very large tooth icon or dental pattern */}
         <Image 
            src="https://picsum.photos/seed/dentalpattern/1920/1080" 
            alt="Subtle background pattern" 
            layout="fill" 
            objectFit="cover" 
            className="opacity-50"
            data-ai-hint="abstract pattern"
          />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-primary mb-6 tracking-tight">
              Your Smile, <span className="block sm:inline text-foreground">Our Passion.</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-xl mx-auto md:mx-0">
              Experience exceptional dental care at Aditi Oro Dental Clinic. Our expert team in Ranchi and Bangalore is dedicated to providing personalized treatments for a healthy, beautiful smile.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg transform hover:scale-105 transition-transform duration-300" asChild>
                <Link href={CLICK4APPOINTMENT_BASE_URL} target="_blank" rel="noopener noreferrer">
                  Book an Appointment <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="shadow-lg transform hover:scale-105 transition-transform duration-300" asChild>
                <Link href="tel:+919902780440">
                 <Phone className="mr-2 h-5 w-5" /> Call Us Now
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative aspect-square max-w-md mx-auto md:max-w-none">
            <Image
              src="https://picsum.photos/seed/dentalhero/600/600"
              alt="Smiling patient at Aditi Oro Dental Clinic"
              width={600}
              height={600}
              className="rounded-xl shadow-2xl object-cover"
              priority
              data-ai-hint="smiling person"
            />
             <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/80 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white lucide lucide-tooth"><path d="M9.34 2.49 7.5 6a3.59 3.59 0 0 1-5-.52.5.5 0 0 0-.72.71 4.59 4.59 0 0 0 6.22 1.34l.74-.49.74.49a4.59 4.59 0 0 0 6.22-1.34.5.5 0 0 0-.72-.71 3.59 3.59 0 0 1-5 .52L14.66 2.49a1 1 0 0 0-1.64 0Z"/><path d="M7.5 6h9"/><path d="m17.5 14.5-.9-.9a2.52 2.52 0 0 0-3.1.62l-.5.5-.5-.5a2.52 2.52 0 0 0-3.1-.62l-.9.9c-2 2-2 5 .5 6.5a4.47 4.47 0 0 0 5.5 0c2.5-1.5 2.5-4.5.5-6.5Z"/></svg>
            </div>
          </div>
        </div>
      </div>
       {/* Decorative shapes */}
       <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/5 rounded-full animate-blob animation-delay-2000 opacity-50"></div>
       <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-accent/5 rounded-full animate-blob animation-delay-4000 opacity-50"></div>
       <style jsx>{`
        @keyframes blob {
          0% { transform: scale(1) translate(0px, 0px); }
          33% { transform: scale(1.1) translate(30px, -50px); }
          66% { transform: scale(0.9) translate(-20px, 20px); }
          100% { transform: scale(1) translate(0px, 0px); }
        }
        .animate-blob {
          animation: blob 15s infinite ease-in-out;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
}


import HeroSection from '@/components/sections/hero-section';
import AboutSection from '@/components/sections/about-section';
import ServicesSection from '@/components/sections/services-section';
import DoctorsSection from '@/components/sections/doctors-section';
import CentersSection from '@/components/sections/centers-section';
import TestimonialsSection from '@/components/sections/testimonials-section';
import ContactSection from '@/components/sections/contact-section';
import { getClinics, getDoctors } from '@/services/aditi-oro-dental-care';

export default async function HomePage() {
  const clinics = await getClinics();
  const doctors = await getDoctors();

  return (
    <div className="flex flex-col">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <DoctorsSection doctors={doctors} />
      {/* CentersSection is now a client component, but it's fine to pass server-fetched props to it */}
      <CentersSection clinics={clinics} />
      <TestimonialsSection />
      <ContactSection />
    </div>
  );
}

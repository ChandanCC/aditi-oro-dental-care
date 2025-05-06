import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getClinicById, getClinics } from '@/services/aditi-oro-dental-care';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { MapPin, Phone, Clock, CalendarDays, Building } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

interface ClinicPageProps {
  params: { id: string };
}

export async function generateStaticParams() {
  const clinics = await getClinics();
  return clinics.map((clinic) => ({
    id: clinic.id,
  }));
}

export async function generateMetadata({ params }: ClinicPageProps): Promise<Metadata> {
  const clinic = await getClinicById(params.id);

  if (!clinic) {
    return {
      title: 'Clinic Not Found',
      description: 'The requested clinic page could not be found.',
    };
  }

  return {
    title: `${clinic.name} | Aditi Oro Dental Clinic`,
    description: `Details for ${clinic.name}, located in ${clinic.city}. Address: ${clinic.address}. Contact: ${clinic.phoneNumber}.`,
    keywords: `${clinic.name}, dental clinic, ${clinic.city}, Aditi Oro Dental Clinic, oral care`,
    openGraph: {
      title: `${clinic.name} - Aditi Oro Dental Clinic`,
      description: `Visit ${clinic.name} in ${clinic.city} for expert dental care.`,
      images: [
        {
          url: `https://picsum.photos/seed/${clinic.id}-og/1200/630`,
          width: 1200,
          height: 630,
          alt: clinic.name,
        },
      ],
    },
  };
}

export default async function ClinicPage({ params }: ClinicPageProps) {
  const clinic = await getClinicById(params.id);

  if (!clinic) {
    notFound();
  }

  const galleryImages = Array.from({ length: 6 }, (_, i) => ({
    src: `https://picsum.photos/seed/${clinic.id}-gallery${i + 1}/600/400`,
    alt: `${clinic.name} - Image ${i + 1}`,
    hint: i % 2 === 0 ? "clinic interior" : "dental equipment"
  }));

  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <Card className="overflow-hidden shadow-xl mb-12">
        <div className="relative h-72 md:h-96 w-full">
          <Image
            src={`https://picsum.photos/seed/${clinic.id}-hero/1200/400`}
            alt={`Hero image for ${clinic.name}`}
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg"
            data-ai-hint="clinic building modern"
            priority
          />
           <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
           <div className="absolute bottom-0 left-0 p-6 md:p-8">
            <h1 className="text-3xl md:text-4xl font-bold text-white shadow-text">{clinic.name}</h1>
            <p className="text-lg text-primary-foreground/90 flex items-center mt-1 shadow-text">
                <Building className="mr-2 h-5 w-5" /> {clinic.city}
            </p>
           </div>
        </div>
        <CardContent className="p-6 md:p-8 grid md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-2xl font-semibold text-primary mb-4">Clinic Details</h2>
            <div className="space-y-3 text-muted-foreground">
              <div className="flex items-start">
                <MapPin className="h-6 w-6 mr-3 mt-1 text-primary flex-shrink-0" />
                <p className="text-lg">{clinic.address}</p>
              </div>
              <div className="flex items-center">
                <Phone className="h-6 w-6 mr-3 text-primary flex-shrink-0" />
                <a href={`tel:${clinic.phoneNumber}`} className="text-lg hover:text-primary transition-colors">{clinic.phoneNumber}</a>
              </div>
              <div className="flex items-center">
                <Clock className="h-6 w-6 mr-3 text-primary flex-shrink-0" />
                <p className="text-lg">{clinic.openingHours}</p>
              </div>
            </div>
          </div>
          <div className="md:pl-6 md:border-l md:border-border">
             <h2 className="text-2xl font-semibold text-primary mb-4">Services Offered</h2>
             <p className="text-lg text-muted-foreground mb-4">
                At {clinic.name.replace('Aditi Oro Dental Clinic - ', '')}, we provide a comprehensive range of dental services to meet all your oral health needs. From routine check-ups to advanced cosmetic and restorative procedures, our expert team is here to help you achieve a healthy and beautiful smile.
             </p>
             <ul className="list-disc list-inside text-muted-foreground space-y-1 text-lg">
                <li>General Dentistry</li>
                <li>Cosmetic Fillings</li>
                <li>Root Canal Treatment</li>
                <li>Dental Implants</li>
                <li>Orthodontics</li>
                <li>Pediatric Dentistry</li>
             </ul>
          </div>
        </CardContent>
      </Card>

      <Separator className="my-12" />

      <section id="gallery">
        <h2 className="text-3xl font-bold text-primary mb-8 text-center">Clinic Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 aspect-video">
              <Image
                src={image.src}
                alt={image.alt}
                width={600}
                height={400}
                className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-300"
                data-ai-hint={image.hint}
              />
            </div>
          ))}
        </div>
      </section>

      <Separator className="my-12" />

       <section id="map" className="mt-12">
        <h2 className="text-3xl font-bold text-primary mb-8 text-center">Find Us</h2>
        <div className="aspect-[16/9] rounded-lg overflow-hidden shadow-xl">
          <iframe
            src={`https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=${encodeURIComponent(clinic.address)}`} // Replace YOUR_GOOGLE_MAPS_API_KEY
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            title={`Map of ${clinic.name}`}
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
           <p className="text-center text-sm text-muted-foreground mt-2">Note: This is a placeholder map. Replace YOUR_GOOGLE_MAPS_API_KEY with your actual Google Maps API Key for it to work.</p>
        </div>
      </section>

    </div>
  );
}

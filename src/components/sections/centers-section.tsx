import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { MapPin, Phone, Clock } from 'lucide-react';
import type { Clinic } from '@/services/aditi-oro-dental-care';
import Image from 'next/image';

interface CentersSectionProps {
  clinics: Clinic[];
}

export default function CentersSection({ clinics }: CentersSectionProps) {
  const bangaloreClinics = clinics.filter(clinic => clinic.city === 'Bangalore');
  const ranchiClinics = clinics.filter(clinic => clinic.city === 'Ranchi');

  const renderClinics = (cityClinics: Clinic[], cityName: string) => (
    <div key={cityName}>
      <h3 className="text-2xl font-semibold text-foreground mb-6">{cityName} Centers</h3>
      {cityClinics.length > 0 ? (
        <div className="grid md:grid-cols-2 gap-8">
          {cityClinics.map((clinic, index) => (
            <Card key={clinic.name} className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col overflow-hidden">
              <div className="relative h-56 w-full">
                <Image 
                  src={`https://picsum.photos/seed/${clinic.name.replace(/\s+/g, '-')}/600/400`} 
                  alt={`Exterior of ${clinic.name}`}
                  layout="fill"
                  objectFit="cover"
                  data-ai-hint="clinic exterior"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-primary">{clinic.name.replace(`Aditi Oro Dental Clinic - ${cityName} `, '') || clinic.name.replace('Aditi Oro Dental Clinic - ', '')}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow space-y-3 text-muted-foreground">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 mr-3 mt-1 text-primary flex-shrink-0" />
                  <p>{clinic.address}</p>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-3 text-primary flex-shrink-0" />
                  <a href={`tel:${clinic.phoneNumber}`} className="hover:text-primary transition-colors">{clinic.phoneNumber}</a>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 mr-3 text-primary flex-shrink-0" />
                  <p>{clinic.openingHours}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <p className="text-muted-foreground">Details for {cityName} clinics are coming soon.</p>
      )}
    </div>
  );

  return (
    <section id="centers" className="py-16 lg:py-24 bg-secondary/30 fade-in-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">Our Clinic Locations</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find an Aditi Oro Dental Clinic near you in Bangalore and Ranchi.
          </p>
        </div>
        <div className="space-y-12">
          {renderClinics(bangaloreClinics, 'Bangalore')}
          {renderClinics(ranchiClinics, 'Ranchi')}
        </div>
        {clinics.length === 0 && <p className="text-center text-muted-foreground mt-8">Clinic information is currently unavailable. Please check back later.</p>}
      </div>
    </section>
  );
}


'use client';

import type { ReactNode } from 'react';
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Clock } from 'lucide-react';
import type { Clinic } from '@/services/aditi-oro-dental-care';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface CentersSectionProps {
  clinics: Clinic[];
}

type City = 'Bangalore' | 'Ranchi';

export default function CentersSection({ clinics }: CentersSectionProps) {
  const [selectedCity, setSelectedCity] = useState<City>('Bangalore');

  const filteredClinics = clinics.filter(clinic => clinic.city === selectedCity);

  const renderClinics = (cityClinics: Clinic[]): ReactNode => {
    if (cityClinics.length === 0) {
      return <p className="text-muted-foreground text-center col-span-full">Details for {selectedCity} clinics are coming soon, or no clinics are listed for this city.</p>;
    }
    return (
      <>
        {cityClinics.map((clinic) => (
          <Link key={clinic.id} href={`/clinics/${clinic.id}`} passHref legacyBehavior>
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col overflow-hidden cursor-pointer h-full">
              <div className="relative h-56 w-full">
                <Image
                  src={`https://placehold.co/600x400.png`}
                  alt={`Exterior of ${clinic.name}`}
                  layout="fill"
                  objectFit="cover"
                  data-ai-hint={clinic.city === 'Bangalore' ? "bangalore clinic" : "ranchi clinic"}
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-primary">{clinic.name.replace(`Aditi Oro Dental Clinic - ${selectedCity} `, '') || clinic.name.replace('Aditi Oro Dental Clinic - ', '')}</CardTitle>
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
          </Link>
        ))}
      </>
    );
  };

  return (
    <section id="centers" className="py-16 lg:py-24 bg-secondary/30 fade-in-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">Our Clinic Locations</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Select a city to view our clinics. Click on a center to learn more.
          </p>
        </div>

        <div className="flex justify-center gap-4 mb-10">
          <Button
            onClick={() => setSelectedCity('Bangalore')}
            variant={selectedCity === 'Bangalore' ? 'default' : 'outline'}
            className={cn(
              "px-6 py-3 text-lg",
              selectedCity === 'Bangalore' ? 'bg-primary text-primary-foreground hover:bg-primary/90' : 'border-primary text-primary hover:bg-primary/10'
            )}
          >
            Bangalore
          </Button>
          <Button
            onClick={() => setSelectedCity('Ranchi')}
            variant={selectedCity === 'Ranchi' ? 'default' : 'outline'}
             className={cn(
              "px-6 py-3 text-lg",
              selectedCity === 'Ranchi' ? 'bg-primary text-primary-foreground hover:bg-primary/90' : 'border-primary text-primary hover:bg-primary/10'
            )}
          >
            Ranchi
          </Button>
        </div>

        {clinics.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-8">
                 {renderClinics(filteredClinics)}
            </div>
        ) : (
            <p className="text-center text-muted-foreground mt-8">Clinic information is currently unavailable. Please check back later.</p>
        )}

      </div>
    </section>
  );
}


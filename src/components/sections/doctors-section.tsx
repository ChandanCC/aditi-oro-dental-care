import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import type { Doctor } from '@/services/aditi-oro-dental-care';
import { Stethoscope, GraduationCap } from 'lucide-react';

interface DoctorsSectionProps {
  doctors: Doctor[];
}

export default function DoctorsSection({ doctors }: DoctorsSectionProps) {
  return (
    <section id="doctors" className="py-16 lg:py-24 bg-background fade-in-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">Meet Our Expert Dentists</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our highly skilled and compassionate dental professionals are dedicated to providing you with the best care.
          </p>
        </div>
        {doctors.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {doctors.map((doctor) => (
              <Link key={doctor.id} href={`/doctors/${doctor.id}`} passHref legacyBehavior>
                <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full cursor-pointer">
                  <div className="relative h-72 w-full">
                    <Image
                      src={doctor.profilePicture !== '/images/doctor-john-doe.jpg' && doctor.profilePicture !== '/images/doctor-jane-smith.jpg' ? doctor.profilePicture : `https://picsum.photos/seed/${doctor.name.split(' ').join('')}/400/500`}
                      alt={`Dr. ${doctor.name}`}
                      layout="fill"
                      objectFit="cover"
                      data-ai-hint="doctor portrait"
                    />
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-2xl font-semibold text-foreground">{doctor.name}</CardTitle>
                    <CardDescription className="text-primary font-medium flex items-center">
                      <Stethoscope className="mr-2 h-5 w-5" /> {doctor.specialization}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-sm text-muted-foreground mb-2 line-clamp-3">
                      {doctor.bio ? doctor.bio.substring(0, 100) + '...' : `Dr. ${doctor.name.split(' ')[1]} is a dedicated ${doctor.specialization.toLowerCase()} with years of experience in providing top-notch dental care.`}
                    </p>
                    <div className="text-sm text-muted-foreground">
                      <GraduationCap className="inline mr-2 h-4 w-4" /> Available at: {doctor.clinics.join(', ').replace(/Aditi Oro Dental Clinic - /g, '')}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        ) : (
          <p className="text-center text-muted-foreground">Information about our doctors is coming soon.</p>
        )}
      </div>
    </section>
  );
}

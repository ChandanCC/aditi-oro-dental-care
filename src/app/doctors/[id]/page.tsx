import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getDoctorById, getDoctors } from '@/services/aditi-oro-dental-care';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Stethoscope, GraduationCap, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface DoctorPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  const doctors = await getDoctors();
  return doctors.map((doctor) => ({
    id: doctor.id,
  }));
}

export async function generateMetadata({ params }: DoctorPageProps): Promise<Metadata> {
  const { id } = await params;
  const doctor = await getDoctorById(await id);

  if (!doctor) {
    return {
      title: 'Doctor Not Found',
      description: 'The requested doctor profile could not be found.',
    };
  }

  return {
    title: `${doctor.name} - ${doctor.specialization} | Aditi Oro Dental Clinic`,
    description: `Learn more about Dr. ${doctor.name}, ${doctor.specialization} at Aditi Oro Dental Clinic. ${doctor.bio?.substring(0, 160) || ''}...`,
    keywords: `${doctor.name}, ${doctor.specialization}, dentist, Aditi Oro Dental Clinic, oral care`,
    openGraph: {
      title: `${doctor.name} - Aditi Oro Dental Clinic`,
      description: `Expert ${doctor.specialization} at Aditi Oro Dental Clinic.`,
      images: [
        {
          url: doctor.profilePicture.startsWith('http') ? doctor.profilePicture : `/images/${doctor.profilePicture}`,
          width: 400,
          height: 500,
          alt: doctor.name,
        },
      ],
    },
  };
}

export default async function DoctorPage({ params }: DoctorPageProps) {
  const { id } = await params;
  const doctor = await getDoctorById(id);

  if (!doctor) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <Card className="overflow-hidden shadow-xl">
        <div className="grid md:grid-cols-3">
          <div className="md:col-span-1 relative min-h-[300px] md:min-h-0">
            <Image
              src={doctor.profilePicture !== '/images/doctor-john-doe.jpg' && doctor.profilePicture !== '/images/doctor-jane-smith.jpg' ? doctor.profilePicture : `https://picsum.photos/seed/${doctor.name.split(' ').join('')}/400/600`}
              alt={`Dr. ${doctor.name}`}
              layout="fill"
              objectFit="cover"
              className="md:rounded-l-lg"
              data-ai-hint="doctor portrait professional"
            />
          </div>
          <div className="md:col-span-2">
            <CardHeader className="p-6">
              <CardTitle className="text-3xl font-bold text-primary">{doctor.name}</CardTitle>
              <CardDescription className="text-xl text-foreground/80 flex items-center pt-1">
                <Stethoscope className="mr-2 h-6 w-6 text-primary" /> {doctor.specialization}
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6 pt-0 space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center">
                  <GraduationCap className="mr-2 h-5 w-5 text-primary" /> About Dr. {doctor.name.split(' ')[1]}
                </h3>
                <p className="text-muted-foreground whitespace-pre-line">
                  {doctor.bio || 'Detailed biography coming soon.'}
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center">
                  <MapPin className="mr-2 h-5 w-5 text-primary" /> Available At
                </h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  {doctor.clinics.map((clinicName) => (
                    <li key={clinicName}>{clinicName.replace('Aditi Oro Dental Clinic - ', '')}</li>
                  ))}
                </ul>
              </div>
              <div className="pt-4">
                <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Link href="/#contact">
                    <Phone className="mr-2 h-5 w-5" /> Book Appointment with Dr. {doctor.name.split(' ')[1]}
                  </Link>
                </Button>
              </div>
            </CardContent>
          </div>
        </div>
      </Card>
    </div>
  );
}

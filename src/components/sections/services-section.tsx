// Suggested code may be subject to a license. Learn more: ~LicenseLog:1546855132.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:4254404149.
// Disclaimer: Code under a license, see LicenseLog for details.
// Usage may require reviewing the license terms.
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Stethoscope, Droplets, ShieldPlus, SmilePlus, Sparkles, UserCheck } from 'lucide-react';

// Custom Tooth Icon SVG as a React component
const ToothIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M9.34 2.49 7.5 6a3.59 3.59 0 0 1-5-.52.5.5 0 0 0-.72.71 4.59 4.59 0 0 0 6.22 1.34l.74-.49.74.49a4.59 4.59 0 0 0 6.22-1.34.5.5 0 0 0-.72-.71 3.59 3.59 0 0 1-5 .52L14.66 2.49a1 1 0 0 0-1.64 0Z"/>
    <path d="M7.5 6h9"/>
    <path d="m17.5 14.5-.9-.9a2.52 2.52 0 0 0-3.1.62l-.5.5-.5-.5a2.52 2.52 0 0 0-3.1-.62l-.9.9c-2 2-2 5 .5 6.5a4.47 4.47 0 0 0 5.5 0c2.5-1.5 2.5-4.5.5-6.5Z"/>
  </svg>
);


const services = [
  {
    icon: <ToothIcon className="h-10 w-10 text-primary" />,
    title: 'ROOT CANAL',
    description: `Repairs and saves infected teeth by cleaning and sealing them. Our specialists ensure a painless process.`,
  },
  {
    icon: <Sparkles className="h-10 w-10 text-primary" />,
    title: 'COSMETIC FILLING',
    description: `Uses fillings like silver amalgam or composite to treat decayed teeth and prevent further decay. Restores teeth health.`,
  },
  {
    icon: <Droplets className="h-10 w-10 text-primary" />,
    title: 'BLEACHING',
    description: `Professional whitening to address discoloration from food and smoking. Seek dentist help, avoid DIY remedies.`,
  },
  {
    icon: <ShieldPlus className="h-10 w-10 text-primary" />,
    title: 'DENTAL IMPLANTS',
    description: `Titanium screw to replace a missing tooth root. A conservative and long-lasting solution that restores the functionality.`,
  },
  {
    icon: <SmilePlus className="h-10 w-10 text-primary" />,
    title: 'CROWNS & BRIDGES',
    description: `Fixed prosthetics used to cover damaged teeth or implants. Dentists use modern technology to customize crowns to match your natural teeth.`,
  },
  {
    icon: <UserCheck className="h-10 w-10 text-primary" />,
    title: 'LASER SURGERY',
    description: `Treats dental conditions with high precision. Reduces pain, bleeding, and recovery time, avoiding stitches and infection risks.`,
  },
  {
    icon: <UserCheck className="h-10 w-10 text-primary" />,
    title: 'PEDIATRIC DENTISTRY',
    description: `Dedicated to children's oral health, from childhood to adolescence. Routine check-ups can prevent many dental issues.`,
  },
  {
    icon: <UserCheck className="h-10 w-10 text-primary" />,
    title: 'CLEAR ALIGNERS',
    description: `Invisible alternative to metal braces. Aligners are removable for eating, brushing, and flossing.`,
  },
  {
    icon: <UserCheck className="h-10 w-10 text-primary" />,
    title: 'ORTHODONTICS TREATMENT',
    description: `Moves teeth to improve appearance and function. Wires and brackets correct irregularities and improve oral health.`,
  },
  
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 lg:py-24 bg-secondary/30 fade-in-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">Our Dental Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We offer a comprehensive range of dental treatments to cater to all your oral health needs.
          </p>
        </div><div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.title} className="shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card">
              <CardHeader className="items-center text-center">
                <div className="p-4 bg-primary/10 rounded-full mb-4 inline-block">
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-semibold text-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

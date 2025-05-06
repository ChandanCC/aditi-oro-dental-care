import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Linkedin, Twitter, Youtube, MapPin, Phone, Mail } from 'lucide-react';

const socialLinks = [
  { href: '#', icon: <Facebook className="h-5 w-5" />, label: 'Facebook' },
  { href: '#', icon: <Instagram className="h-5 w-5" />, label: 'Instagram' },
  { href: '#', icon: <Twitter className="h-5 w-5" />, label: 'Twitter' },
  { href: '#', icon: <Linkedin className="h-5 w-5" />, label: 'LinkedIn' },
  { href: '#', icon: <Youtube className="h-5 w-5" />, label: 'YouTube' },
];

const quickLinks = [
  { href: '/#about', label: 'About Us' },
  { href: '/#services', label: 'Services' },
  { href: '/#doctors', label: 'Our Doctors' },
  { href: '/#centers', label: 'Our Centers' },
  { href: '/#contact', label: 'Contact Us' },
  { href: '/privacy-policy', label: 'Privacy Policy' },
  { href: '/terms-of-service', label: 'Terms of Service' },
];


export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-800 text-slate-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Logo and About */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <Image src="/images/logo.png" alt="Aditi Oro Dental Clinic Logo" width={40} height={40} className="rounded-full" data-ai-hint="dental logo" />
              <span className="text-xl font-semibold text-white">Aditi Oro Dental Clinic</span>
            </Link>
            <p className="text-sm">
              Providing top-quality dental care with a compassionate touch. Your smile is our priority.
            </p>
            <div className="flex space-x-3 pt-2">
              {socialLinks.map((link) => (
                <Link key={link.label} href={link.href} aria-label={link.label} className="text-slate-400 hover:text-primary transition-colors">
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <address className="not-italic space-y-3 text-sm">
              <p className="flex items-start gap-2">
                <MapPin className="h-5 w-5 mt-0.5 shrink-0 text-primary" />
                <span>Main Clinic: 123 Dental Street, Bangalore, KA & Example Road, Ranchi, JH</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="h-5 w-5 shrink-0 text-primary" />
                <a href="tel:+919902780440" className="hover:text-primary transition-colors">+91 99027 80440</a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-5 w-5 shrink-0 text-primary" />
                <a href="mailto:info@aditiorodental.com" className="hover:text-primary transition-colors">info@aditiorodental.com</a>
              </p>
            </address>
          </div>
          
          {/* Column 4: Newsletter/Map Placeholder */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Our Locations</h3>
             <p className="text-sm mb-2">Visit us in Bangalore or Ranchi.</p>
            {/* Placeholder for a small map or an image */}
            <Link href="/#centers">
              <div className="aspect-video bg-slate-700 rounded-md flex items-center justify-center hover:bg-slate-600 transition-colors cursor-pointer">
                  <MapPin className="h-10 w-10 text-primary" />
              </div>
            </Link>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-700 pt-8 text-center text-sm">
          <p>&copy; {currentYear} Aditi Oro Dental Clinic. All rights reserved.</p>
          <p className="mt-1">
            Designed with <span role="img" aria-label="heart">❤️</span> by Your Name/Company
          </p>
        </div>
      </div>
    </footer>
  );
}

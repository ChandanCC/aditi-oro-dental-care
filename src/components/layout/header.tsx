'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Phone } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import React, { useState, useEffect } from 'react';

const navLinks = [
  { href: '/#about', label: 'About Us', sectionId: 'about' },
  { href: '/#services', label: 'Services', sectionId: 'services' },
  { href: '/#doctors', label: 'Our Doctors', sectionId: 'doctors' },
  { href: '/#centers', label: 'Our Centers', sectionId: 'centers' },
  { href: '/#contact', label: 'Contact Us', sectionId: 'contact' },
];

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      if (pathname === '/') { // Only track sections on homepage
        let currentSection = '';
        navLinks.forEach(link => {
          if (link.sectionId) {
            const sectionElement = document.getElementById(link.sectionId);
            if (sectionElement) {
              const rect = sectionElement.getBoundingClientRect();
              // Check if section is within viewport, with a bit of offset for better UX
              if (rect.top <= 100 && rect.bottom >= 100) {
                 currentSection = link.href;
              }
            }
          }
        });
         // If no section is actively in view but we've scrolled, keep the last active one or clear
        if (currentSection) {
          setActiveSection(currentSection);
        } else if (window.scrollY < 50) { // Near top of page
            setActiveSection('');
        }

      } else {
        setActiveSection(''); // Clear active section if not on homepage
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);


  const isLinkActive = (linkHref: string) => {
    if (pathname === '/' && linkHref.startsWith('/#')) {
      return activeSection === linkHref;
    }
    return pathname === linkHref || pathname.startsWith(`${linkHref}/`);
  };


  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300 ease-in-out',
        isScrolled || isMobileMenuOpen ? 'bg-background/95 shadow-md backdrop-blur-md' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2" aria-label="Aditi Oro Dental Clinic Home">
          <Image src="/images/logo.png" alt="Aditi Oro Dental Clinic Logo" width={50} height={50} className="rounded-full" data-ai-hint="dental logo" />
          <span className="hidden sm:block text-xl font-bold text-primary">
            Aditi Oro Dental Clinic
          </span>
        </Link>

        <nav className="hidden lg:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'text-sm font-medium transition-colors hover:text-primary',
                isLinkActive(link.href) ? 'text-primary' : 'text-foreground/70'
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Button asChild className="hidden lg:flex bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="tel:+919902780440">
              <Phone className="mr-2 h-4 w-4" />
              Book Appointment
            </Link>
          </Button>

          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden text-primary">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[350px] bg-background">
              <div className="flex flex-col h-full p-6">
                <Link href="/" className="mb-8 flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
                  <Image src="/images/logo.png" alt="Aditi Oro Dental Clinic Logo" width={40} height={40} className="rounded-full" data-ai-hint="dental logo" />
                  <span className="text-lg font-bold text-primary">Aditi Oro Dental</span>
                </Link>
                <nav className="flex flex-col space-y-4">
                  {navLinks.map((link) => (
                     <SheetTrigger asChild key={link.href}>
                        <Link
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={cn(
                            'block rounded-md px-3 py-2 text-base font-medium transition-colors hover:bg-accent hover:text-accent-foreground',
                            isLinkActive(link.href) ? 'bg-accent text-accent-foreground' : 'text-foreground'
                        )}
                        >
                        {link.label}
                        </Link>
                    </SheetTrigger>
                  ))}
                </nav>
                <Button asChild className="mt-auto bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Link href="tel:+919902780440" onClick={() => setIsMobileMenuOpen(false)}>
                    <Phone className="mr-2 h-4 w-4" />
                    Book Appointment
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

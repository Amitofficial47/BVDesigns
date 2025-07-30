
import { Instagram, Facebook } from "lucide-react";
import Link from "next/link";
import Image from "next/image";


const Logo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    fill="none"
    stroke="currentColor"
    strokeWidth="5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M 90,50 A 40,40 0 1,1 50,10" />
    <path d="M 70,30 L 90,10" />
    <path d="M 50,90 A 40,40 0 0,1 10,50" />
    <path d="M 30,35 H 45 V 65 H 30" />
    <path d="M 30,50 H 45" />
    <path d="M 45,35 C 55,35 55,50 45,50" />
    <path d="M 45,50 C 55,50 55,65 45,65" />
    <path d="M 20,65 H 55" />
    <path d="M 55,65 L 70,30 L 75,35" />
  </svg>
);


const WhatsAppIcon = (props: React.ComponentProps<'svg'>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
    >
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
    </svg>
);


export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground py-8 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-center md:items-start">
          <Link href="/" className="flex items-center gap-2 mb-4">
            <Logo className="h-10 w-10 text-accent" />
            <span className="text-xl font-headline font-bold text-primary">B&V Designs</span>
          </Link>
          <p className="text-sm text-center md:text-left text-muted-foreground">
            Crafting spaces that inspire and endure.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <h3 className="font-headline text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="/projects" className="hover:text-accent transition-colors">Projects</Link></li>
            <li><Link href="/services" className="hover:text-accent transition-colors">Services</Link></li>
            <li><Link href="/about" className="hover:text-accent transition-colors">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
          </ul>
        </div>
        <div className="flex flex-col items-center md:items-end">
          <h3 className="font-headline text-lg font-semibold mb-4">Connect With Us</h3>
          <div className="flex space-x-4">
            <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Instagram className="h-6 w-6 text-muted-foreground hover:text-accent transition-colors" />
            </Link>
            <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <Facebook className="h-6 w-6 text-muted-foreground hover:text-accent transition-colors" />
            </Link>
            <Link href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <WhatsAppIcon className="h-6 w-6 text-muted-foreground hover:text-accent transition-colors" />
            </Link>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
        <p>&copy; 2021 - {new Date().getFullYear()} B&V Designs. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

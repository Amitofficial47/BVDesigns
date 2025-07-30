
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./theme-toggle";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

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


export function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="bg-background/80 backdrop-blur-sm sticky top-0 z-50 border-b">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2" onClick={() => setMenuOpen(false)}>
          <Logo className="h-10 w-10 text-primary" />
          <span className="text-2xl font-headline font-bold text-primary">B&V Designs</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "font-medium transition-colors hover:text-accent",
                pathname === link.href ? "text-accent font-semibold" : "text-primary/80"
              )}
            >
              {link.label}
            </Link>
          ))}
           <ThemeToggle />
        </nav>

        <div className="md:hidden flex items-center gap-2">
           <ThemeToggle />
          <Sheet open={isMenuOpen} onOpenChange={setMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[60vw] bg-background">
              <SheetHeader className="border-b pb-4">
                 <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
                 <SheetDescription className="sr-only">Navigation links for B&V Designs.</SheetDescription>
                 <Link href="/" className="flex items-center gap-2" onClick={() => setMenuOpen(false)}>
                    <Logo className="h-8 w-8 text-primary" />
                    <span className="text-lg font-headline font-bold text-primary">B&V Designs</span>
                  </Link>
              </SheetHeader>
              <div className="flex flex-col h-full">
                
                <nav className="flex flex-col items-center gap-6 pt-8 text-xl font-medium">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className={cn(
                        "transition-colors hover:text-accent",
                        pathname === link.href ? "text-accent font-semibold" : "text-primary"
                      )}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

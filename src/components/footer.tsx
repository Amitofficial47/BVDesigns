"use client";

import { Instagram, Facebook, Mail, Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

const WhatsAppIcon = (props: React.ComponentProps<"svg">) => (
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

function FooterLogo() {
	const { resolvedTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		// Render a placeholder or nothing to avoid hydration mismatch
		return <div style={{ width: 40, height: 40 }} />;
	}

	const src = resolvedTheme === "dark" ? "/white-logo.png" : "/black-logo.png";

	return <Image src={src} alt="B&V Designs Logo" width={40} height={40} />;
}

export function Footer() {
	return (
		<footer className="bg-footer text-footer-foreground">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					<div className="flex flex-col items-center md:items-start">
						<Link href="/" className="flex items-center gap-1 mb-4">
							<FooterLogo />
							<span className="text-xl font-headline font-bold">
								B&V Designs
							</span>
						</Link>
						<p className="text-sm text-center md:text-left text-footer-foreground/70">
							Crafting spaces that inspire and endure, blending timeless design
							with modern innovation.
						</p>
					</div>

					<div className="flex flex-col items-center md:items-start">
						<h3 className="font-headline text-lg font-semibold mb-4">
							Quick Links
						</h3>
						<ul className="space-y-2 text-footer-foreground/70">
							<li>
								<Link
									href="/projects"
									className="hover:text-accent transition-colors"
								>
									Projects
								</Link>
							</li>
							<li>
								<Link
									href="/services"
									className="hover:text-accent transition-colors"
								>
									Services
								</Link>
							</li>
							<li>
								<Link
									href="/about"
									className="hover:text-accent transition-colors"
								>
									About Us
								</Link>
							</li>
							<li>
								<Link
									href="/contact"
									className="hover:text-accent transition-colors"
								>
									Contact
								</Link>
							</li>
						</ul>
					</div>

					<div className="flex flex-col items-center md:items-start">
						<h3 className="font-headline text-lg font-semibold mb-4">
							Contact Us
						</h3>
						<ul className="space-y-3 text-footer-foreground/70">
							<li className="flex items-center gap-3">
								<Phone className="h-5 w-5 text-accent" />
								<span>+91 7766001420</span>
							</li>
							<li className="flex items-center gap-3">
								<Mail className="h-5 w-5 text-accent" />
								<a
									href="mailto:bvdesign35@gmail.com"
									className="hover:text-accent transition-colors"
								>
									bvdesign35@gmail.com
								</a>
							</li>
						</ul>
					</div>

					<div className="flex flex-col items-center md:items-start">
						<h3 className="font-headline text-lg font-semibold mb-4">
							Connect With Us
						</h3>
						<div className="flex space-x-4">
							<Link
								href="https://www.instagram.com/bv.design.35?igsh=NGdrZ2Rwdzd1bmp0"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="Instagram"
							>
								<Instagram className="h-6 w-6 text-footer-foreground/70 hover:text-accent transition-colors" />
							</Link>
							<Link
								href="https://www.facebook.com/share/16Z9oUCk3Q/?mibextid=wwXIfr"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="Facebook"
							>
								<Facebook className="h-6 w-6 text-footer-foreground/70 hover:text-accent transition-colors" />
							</Link>
							<Link
								href="https://wa.me/917766001420"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="WhatsApp"
							>
								<WhatsAppIcon className="h-6 w-6 text-footer-foreground/70 hover:text-accent transition-colors" />
							</Link>
						</div>
					</div>
				</div>
			</div>
			<div className="bg-footer/80">
				<div className="container mx-auto py-4 px-4 sm:px-6 lg:px-8 text-center text-sm text-footer-foreground/70">
					<p>
						&copy; 2021 - {new Date().getFullYear()} B&V Designs. All Rights
						Reserved.
					</p>
				</div>
			</div>
		</footer>
	);
}

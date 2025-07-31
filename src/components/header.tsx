"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { useTheme } from "next-themes";
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

function Logo() {
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

	return (
		<Image
			src={src}
			alt="B&V Design Logo"
			width={40}
			height={40}
			className="text-primary"
		/>
	);
}

function MobileLogo() {
	const { resolvedTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		// Render a placeholder or nothing to avoid hydration mismatch
		return <div style={{ width: 32, height: 32 }} />;
	}

	const src = resolvedTheme === "dark" ? "/white-logo.png" : "/black-logo.png";
	return (
		<Image
			src={src}
			alt="B&V Design Logo"
			width={32}
			height={32}
			className="text-primary"
		/>
	);
}

export function Header() {
	const [isMenuOpen, setMenuOpen] = useState(false);
	const pathname = usePathname();

	return (
		<header className="bg-background/80 backdrop-blur-sm sticky top-0 z-50 border-b">
			<div className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
				<Link
					href="/"
					className="flex items-center gap-2"
					onClick={() => setMenuOpen(false)}
				>
					<Logo />
					<span className="text-2xl font-headline font-bold text-primary">
						B&V Design
					</span>
				</Link>

				<nav className="hidden md:flex items-center gap-6">
					{navLinks.map((link) => (
						<Link
							key={link.href}
							href={link.href}
							className={cn(
								"font-medium transition-colors hover:text-accent",
								pathname === link.href
									? "text-accent font-semibold"
									: "text-primary/80"
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
						<SheetContent side="right" className="w-[80vw] bg-background">
							<SheetHeader className="border-b pb-4">
								<SheetTitle className="sr-only">Mobile Menu</SheetTitle>
								<SheetDescription className="sr-only">
									Navigation links for B&V Designs.
								</SheetDescription>
								<Link
									href="/"
									className="flex items-center gap-2"
									onClick={() => setMenuOpen(false)}
								>
									<MobileLogo />
									<span className="text-lg font-headline font-bold text-primary">
										B&V Design
									</span>
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
												pathname === link.href
													? "text-accent font-semibold"
													: "text-primary"
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

"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
	CardFooter,
} from "@/components/ui/card";
import { ArrowRight, Building, Home as HomeIcon, Sun } from "lucide-react";
import React from "react";
import type { Project, Testimonial } from "@/lib/types";
import { TestimonialCard } from "@/components/testimonial-card";

const services = [
	{
		icon: <HomeIcon />,
		title: "Residential Design",
		description:
			"Crafting beautiful and functional homes tailored to your lifestyle.",
	},
	{
		icon: <Building />,
		title: "Commercial Development",
		description:
			"Innovative designs for workspaces, retail, and public buildings.",
	},
	{
		icon: <Sun />,
		title: "Sustainable Practices",
		description: "Integrating green technology for an eco-friendly future.",
	},
];

const heroContent = {
	image: "/about.png",
	hint: "modern architecture",
	headline: "Shaping the Future, One Building at a Time.",
	subtext:
		"B&V Designs is a visionary architectural studio dedicated to creating spaces that are not only aesthetically pleasing but also functional and sustainable.",
};

const allProjects: Project[] = [
	{
		id: "1",
		title: "Hotel Grand Hill",
		category: "hotel",
		location: "Dalhousie, Himachal Pradesh",
		year: 2023,
		description:
			"A luxurious hotel offering stunning valley views, blending modern amenities with traditional Himachali architecture.",
		images: [
			"/projects/hotel-grand-hill.jpg",
			"/projects/hotel-grand-hill-2.jpg",
			"/projects/hotel-grand-hill-3.jpg",
		],
		hints: ["mountain hotel", "hotel interior", "hotel view"],
	},
	{
		id: "2",
		title: "Azad Residence",
		category: "residence",
		location: "Palampur, Himachal Pradesh",
		year: 2023,
		description:
			"A contemporary family home designed for comfort and elegance, nestled in the serene hills.",
		images: [
			"/projects/azad-residence.jpg",
			"/projects/azad-residence-2.jpg",
			"/projects/azad-residence-3.jpg",
		],
		hints: ["modern house", "house living room", "house exterior"],
	},
	{
		id: "3",
		title: "Hotel Luxe Vista",
		category: "hotel",
		location: "Banikhet, Himachal Pradesh",
		year: 2022,
		description:
			"An upscale hotel featuring panoramic windows and minimalist design, catering to the modern traveler.",
		images: [
			"/projects/hotel-lux-vista.jpg",
			"/projects/hotel-lux-vista-2.jpg",
			"/projects/hotel-lux-vista-3.jpg",
		],
		hints: ["luxury hotel", "hotel lobby", "modern hotel room"],
	},
	{
		id: "4",
		title: "Thakur Residence",
		category: "residence",
		location: "Kakiyana, Himachal Pradesh",
		year: 2022,
		description:
			"A spacious and rustic residence that harmonizes with its natural surroundings, using local stone and wood.",
		images: [
			"/projects/balwinder-singh-slaria-residence.jpeg",
			"/projects/balwinder-singh-slaria-residence-2.jpg",
			"/projects/balwinder-singh-slaria-residence-3.jpg",
		],
		hints: ["rustic house", "stone house", "wood interior"],
	},
	{
		id: "5",
		title: "Pankaj Thakur Residence",
		category: "residence",
		location: "Sherpur, Himachal Pradesh",
		year: 2021,
		description:
			"A beautiful villa with a terraced garden, designed to maximize natural light and mountain vistas.",
		images: [
			"/projects/pankaj-thakur-residence.jpg",
			"/projects/pankaj-thakur-residence-2.jpg",
			"/projects/pankaj-thakur-residence-3.jpg",
		],
		hints: ["house garden", "villa design", "mountain view home"],
	},
	{
		id: "6",
		title: "Hotel Ravi View",
		category: "hotel",
		location: "Chamba, Himachal Pradesh",
		year: 2021,
		description:
			"A charming hotel situated by the river, offering a tranquil retreat with classic design elements.",
		images: [
			"/projects/hotel-ravi-view.jpg",
			"/projects/hotel-ravi-view-2.jpg",
			"/projects/hotel-ravi-view-3.jpg",
		],
		hints: ["river hotel", "hotel balcony", "classic hotel"],
	},
	{
		id: "7",
		title: "Sharma Residence",
		category: "residence",
		location: "DeviDehra, Himachal Pradesh",
		year: 2020,
		description:
			"A cozy and compact home featuring smart space solutions and a warm, inviting interior.",
		images: [
			"/projects/sharma-residence.jpg",
			"/projects/sharma-residence-2.jpg",
			"/projects/sharma-residence-3.jpg",
		],
		hints: ["cozy house", "small house interior", "modern small home"],
	},
	{
		id: "8",
		title: "Rahul Residence Saho",
		category: "residence",
		location: "Saho, Chamba, Himachal Pradesh",
		year: 2023,
		description:
			"A traditional home in the village of Saho, built with sustainable materials and local craftsmanship.",
		images: [
			"/projects/rahul-residence-saho.jpg",
			"/projects/rahul-residence-saho-2.jpg",
			"/projects/rahul-residence-saho-3.jpg",
		],
		hints: ["village house", "traditional architecture", "sustainable house"],
	},
	{
		id: "9",
		title: "Hotel Crown Plaza",
		category: "hotel",
		location: "Palampur, Himachal Pradesh",
		year: 2022,
		description:
			"A grand hotel known for its opulent interiors and exceptional hospitality services.",
		images: [
			"/projects/hotel-crown-plaza.jpg",
			"/projects/hotel-crown-plaza-2.jpg",
			"/projects/hotel-crown-plaza-3.jpg",
		],
		hints: ["grand hotel", "luxury hotel interior", "hotel facade"],
	},
	{
		id: "10",
		title: "Mahinder Residence",
		category: "residence",
		location: "Pukhri, Himachal Pradesh",
		year: 2021,
		description:
			"An elegant and modern house with clean lines and a minimalist aesthetic.",
		images: [
			"/projects/mahinder-residence.jpg",
			"/projects/mahinder-residence-2.jpg",
			"/projects/mahinder-residence-3.jpg",
		],
		hints: [
			"minimalist house",
			"modern house exterior",
			"clean line architecture",
		],
	},
	{
		id: "11",
		title: "Sai Furniture Galleria",
		category: "commercial",
		location: "Palampur, Himachal Pradesh",
		year: 2023,
		description:
			"A modern commercial building housing shops and offices, featuring a glass facade.",
		images: [
			"/projects/sai-commercial-complex.jpg",
			"/projects/sai-commercial-complex-2.jpg",
			"/projects/sai-commercial-complex-3.jpg",
		],
		hints: ["commercial building", "glass facade", "modern office"],
	},
	{
		id: "12",
		title: "Chamba Valley Retreat",
		category: "hotel",
		location: "Chamba, Himachal Pradesh",
		year: 2022,
		description:
			"A wellness retreat with cottages, yoga pavilions, and organic gardens for a holistic experience.",
		images: [
			"/projects/chamba-valley-retreat.jpg",
			"/projects/chamba-valley-retreat-2.jpg",
			"/projects/chamba-valley-retreat-3.jpg",
		],
		hints: ["wellness retreat", "yoga pavilion", "eco resort"],
	},
];

const featuredProjects = allProjects.slice(0, 3);

const testimonials: Testimonial[] = [
	{
		id: "1",
		name: "Rajat Sharma",
		location: "Dalhousie",
		rating: 5,
		comment:
			"B&V Designs transformed our vision into a breathtaking reality. Their attention to detail and commitment to quality is unparalleled. We couldn't be happier with our new home.",
		image: "/testimonials/rajat-sharma.png",
		hint: "male portrait",
	},
	{
		id: "2",
		name: "Priya Singh",
		location: "Dharamshala",
		rating: 5,
		comment:
			"Working with the B&V team was an absolute pleasure. They are professional, creative, and truly listen to their clients. The result was a space that is both beautiful and functional.",
		image: "/testimonials/priya-singh.png",
		hint: "female portrait",
	},
	{
		id: "3",
		name: "Anil Kumar",
		location: "Chamba",
		rating: 5,
		comment:
			"The hotel they designed for us has become a landmark. Their innovative approach to blending modern design with local aesthetics is simply brilliant. Highly recommended!",
		image: "/testimonials/anil-kumar.png",
		hint: "male headshot",
	},
];

export default function Home() {
	return (
		<div className="flex flex-col">
			<section className="relative w-full text-white h-[60vh] md:h-[70vh] lg:h-[80vh]">
				<div className="relative h-full w-full">
					<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent z-10" />
					<Image
						src={heroContent.image}
						alt={heroContent.headline}
						fill
						style={{ objectFit: "cover" }}
						className="bg-primary"
						data-ai-hint={heroContent.hint}
						priority
					/>
					<div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4">
						<h1 className="text-4xl md:text-6xl lg:text-7xl font-headline font-bold mb-4 drop-shadow-md">
							{heroContent.headline}
						</h1>
						<p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 font-body drop-shadow">
							{heroContent.subtext}
						</p>
						<Button
							asChild
							size="lg"
							className="bg-accent text-accent-foreground hover:bg-accent/90"
						>
							<Link href="/projects">
								Explore Our Work <ArrowRight className="ml-2" />
							</Link>
						</Button>
					</div>
				</div>
			</section>

			<section
				id="services"
				className="py-20 lg:py-28 bg-gradient-to-br from-secondary via-background to-secondary"
			>
				<div className="container mx-auto px-4">
					<div className="text-center mb-12">
						<h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">
							Our Expertise
						</h2>
						<p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
							We offer a comprehensive range of architectural services to bring
							your vision to life.
						</p>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{services.map((service, index) => (
							<Card
								key={index}
								className="text-center bg-card shadow-lg hover:shadow-xl transition-shadow duration-300"
							>
								<CardHeader>
									<div className="mx-auto bg-accent/20 text-accent rounded-full p-4 w-fit mb-4">
										{React.cloneElement(service.icon, { className: "h-8 w-8" })}
									</div>
									<CardTitle className="font-headline text-2xl text-primary">
										{service.title}
									</CardTitle>
								</CardHeader>
								<CardContent>
									<p className="text-muted-foreground">{service.description}</p>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</section>

			<section id="featured-projects" className="py-20 lg:py-28 bg-background">
				<div className="container mx-auto px-4">
					<div className="text-center mb-12">
						<h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">
							Featured Projects
						</h2>
						<p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
							A glimpse into our portfolio of architectural excellence and
							innovative design.
						</p>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{featuredProjects.map((project) => (
							<Link key={project.id} href={`/projects/${project.id}`} passHref>
								<Card className="flex flex-col overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-card h-full cursor-pointer group">
									<div className="relative w-full h-80">
										<Image
											src={project.images[0]}
											alt={project.title}
											fill
											style={{ objectFit: "cover" }}
											data-ai-hint={project.hints[0]}
										/>
										<div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
									</div>
									<CardHeader className="flex-1 flex flex-col justify-center items-start text-left">
										<CardTitle className="font-headline text-2xl text-primary">
											{project.title}
										</CardTitle>
										<CardDescription>{project.location}</CardDescription>
									</CardHeader>
									<CardContent className="flex-grow">
										<p className="text-muted-foreground line-clamp-3 text-justify">
											{project.description}
										</p>
									</CardContent>
									<CardFooter>
										<p className="text-sm font-semibold text-accent">
											{project.year} Completed
										</p>
									</CardFooter>
								</Card>
							</Link>
						))}
					</div>
					<div className="text-center mt-12">
						<Button asChild size="lg" variant="outline">
							<Link href="/projects">
								View All Projects <ArrowRight className="ml-2" />
							</Link>
						</Button>
					</div>
				</div>
			</section>

			<section id="testimonials" className="py-20 lg:py-28 bg-secondary">
				<div className="container mx-auto px-4">
					<div className="text-center mb-12">
						<h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">
							What Our Clients Say
						</h2>
						<p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
							We are proud to have earned the trust of our clients. Here's what
							they have to say about their experience with B&V Designs.
						</p>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{testimonials.map((testimonial) => (
							<TestimonialCard key={testimonial.id} testimonial={testimonial} />
						))}
					</div>
				</div>
			</section>

			<section className="bg-gradient-to-br from-primary to-slate-800 text-primary-foreground py-20 lg:py-28">
				<div className="container mx-auto px-4 text-center">
					<h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">
						Have a Project in Mind?
					</h2>
					<p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-8">
						Let's collaborate to create something extraordinary. Our team is
						ready to discuss your ideas.
					</p>
					<Button
						asChild
						size="lg"
						className="bg-accent text-accent-foreground hover:bg-accent/90"
					>
						<Link href="/contact">
							Get in Touch <ArrowRight className="ml-2" />
						</Link>
					</Button>
				</div>
			</section>
		</div>
	);
}

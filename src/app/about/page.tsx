"use client";

import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import type { TeamMember, Testimonial } from "@/lib/types";
import { TestimonialCard } from "@/components/testimonial-card";

const studioValues = [
	"Innovation",
	"Sustainability",
	"Client Collaboration",
	"Timeless Design",
	"Integrity",
];

const team: TeamMember[] = [
	{
		id: "1",
		name: "Vikas Thakur",
		role: "Architectural Designer",
		image: "/team/vikas-thakur.jpg",
		fallback: "VT",
		hint: "professional portrait",
	},
	{
		id: "2",
		name: "Baljinder Singh",
		role: "Structural Designer",
		image: "/team/baljinder-singh.jpg",
		fallback: "BS",
		hint: "professional portrait",
	},
	{
		id: "3",
		name: "Bovit Singh",
		role: "Project Manager",
		image: "/team/bovit-singh.jpg",
		fallback: "BS",
		hint: "professional portrait",
	},
];

const testimonials: Testimonial[] = [
	{
		id: "1",
		name: "Vipan Verma",
		location: "Dalhousie",
		rating: 5,
		comment:
			"B&V Designs transformed our vision into a breathtaking reality. Their attention to detail and commitment to quality is unparalleled. We couldn't be happier with our new home.",
		image: "/testimonials/rajat-sharma.png",
		hint: "male portrait",
	},
	{
		id: "2",
		name: "Amit Kumar",
		location: "Dharamshala",
		rating: 5,
		comment:
			"Working with the B&V team was an absolute pleasure. They are professional, creative, and truly listen to their clients. The result was a space that is both beautiful and functional.",
		image: "/testimonials/priya-singh.png",
		hint: "female portrait",
	},
	{
		id: "3",
		name: "Rahul Sharma",
		location: "Chamba",
		rating: 5,
		comment:
			"The hotel they designed for us has become a landmark. Their innovative approach to blending modern design with local aesthetics is simply brilliant. Highly recommended!",
		image: "/testimonials/anil-kumar.png",
		hint: "male headshot",
	},
];

export default function AboutPage() {
	return (
		<div className="bg-background font-body">
			<div className="container mx-auto px-4 py-16 sm:py-24 lg:py-28">
				<section className="text-center mb-20">
					<h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">
						About B&V Designs
					</h1>
					<p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
						We are a collective of architects, designers, and thinkers dedicated
						to creating spaces that are not just built, but thoughtfully
						crafted.
					</p>
				</section>

				<section className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
					<div className="order-2 md:order-1">
						<h2 className="text-3xl font-headline font-bold text-primary mb-4">
							Our Philosophy
						</h2>
						<p className="text-muted-foreground mb-4 leading-relaxed text-justify">
							At B&V Designs, we believe that great architecture is a dialogue
							between the environment, the community, and the human spirit. Our
							work is rooted in a deep understanding of context and a commitment
							to creating buildings that are both timeless and of their time. We
							strive to push the boundaries of design while remaining grounded
							in the principles of functionality and sustainability.
						</p>
						<p className="text-muted-foreground leading-relaxed text-justify">
							Our collaborative process ensures that every project is a unique
							reflection of our client's vision, enhanced by our expertise and
							creative insight. We don't just design buildings; we build
							relationships and craft legacies.
						</p>
					</div>
					<div className="order-1 md:order-2 h-80 md:h-full w-full relative rounded-lg overflow-hidden shadow-xl">
						<Image
							src="/About.png"
							alt="A modern, well-lit architectural studio office"
							fill
							style={{ objectFit: "cover" }}
							data-ai-hint="architect office"
						/>
					</div>
				</section>

				<section className="bg-secondary p-12 rounded-lg mb-20">
					<div className="text-center mb-8">
						<h2 className="text-3xl font-headline font-bold text-primary">
							Our Core Values
						</h2>
					</div>
					<div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
						{studioValues.map((value) => (
							<div key={value} className="flex items-center gap-2">
								<CheckCircle className="h-5 w-5 text-accent" />
								<span className="font-medium text-lg text-primary/90">
									{value}
								</span>
							</div>
						))}
					</div>
				</section>

				<section className="mb-20">
					<div className="text-center mb-12">
						<h2 className="text-3xl font-headline font-bold text-primary">
							Meet Our Team
						</h2>
						<p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
							The creative force behind our award-winning designs.
						</p>
					</div>
					<div className="flex flex-wrap justify-center gap-8">
						{team.map((member) => (
							<Card
								key={member.id}
								className="text-center border-0 shadow-none bg-transparent relative group w-64"
							>
								<CardHeader className="p-0">
									<Avatar className="w-32 h-32 mx-auto mb-4 ring-4 ring-accent/50">
										<AvatarImage
											src={member.image}
											alt={member.name}
											data-ai-hint={member.hint}
										/>
										<AvatarFallback className="text-3xl bg-primary text-primary-foreground">
											{member.fallback}
										</AvatarFallback>
									</Avatar>
									<CardTitle className="font-headline text-xl text-primary">
										{member.name}
									</CardTitle>
								</CardHeader>
								<CardContent className="p-2">
									<p className="text-accent font-semibold">{member.role}</p>
								</CardContent>
							</Card>
						))}
					</div>
				</section>

				<section
					id="testimonials"
					className="bg-secondary py-20 lg:py-28 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8"
				>
					<div className="container mx-auto">
						<div className="text-center mb-12">
							<h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">
								What Our Clients Say
							</h2>
							<p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
								We are proud to have earned the trust of our clients. Here's
								what they have to say about their experience with B&V Designs.
							</p>
						</div>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
							{testimonials.map((testimonial) => (
								<TestimonialCard
									key={testimonial.id}
									testimonial={testimonial}
								/>
							))}
						</div>
					</div>
				</section>
			</div>
		</div>
	);
}

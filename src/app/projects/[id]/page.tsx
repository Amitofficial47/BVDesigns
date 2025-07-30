import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { ProjectDetailView } from "@/components/project-detail-view";
import type { Project } from "@/lib/types";

// This data would typically be fetched from a CMS or database
const allProjects: Project[] = [
	{
		id: "1",
		title: "Hotel Grand Hill",
		category: "hotel",
		location: "Near Dalhousie, Distt. Chamba, Himachal Pradesh",
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
		location: "Near Dalhousie, Distt. Chamba, Himachal Pradesh",
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
		location: "Near Dalhousie, Distt. Chamba, Himachal Pradesh",
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
		location: "Near Dalhousie, Distt. Chamba, Himachal Pradesh",
		year: 2022,
		description:
			"A spacious and rustic residence that harmonizes with its natural surroundings, using local stone and wood.",
		images: [
			"/projects/thakur-residence.jpeg",
			"/projects/thakur-residence-2.jpg",
			"/projects/thakur-residence-3.jpg",
		],
		hints: ["rustic house", "stone house", "wood interior"],
	},
	{
		id: "5",
		title: "Pankaj Thakur Residence",
		category: "residence",
		location: "Near Dalhousie, Distt. Chamba, Himachal Pradesh",
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
		location: "Near Dalhousie, Distt. Chamba, Himachal Pradesh",
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
		location: "Near Dalhousie, Distt. Chamba, Himachal Pradesh",
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
		location: "Saho, Near Dalhousie, Distt. Chamba, Himachal Pradesh",
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
		location: "Near Dalhousie, Distt. Chamba, Himachal Pradesh",
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
		location: "Near Dalhousie, Distt. Chamba, Himachal Pradesh",
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
		location: "Near Dalhousie, Distt. Chamba, Himachal Pradesh",
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
		location: "Near Dalhousie, Distt. Chamba, Himachal Pradesh",
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

export default async function ProjectDetailPage({
	params,
}: {
	params: { id: string };
}) {
	const project = allProjects.find((p) => p.id === params.id);

	if (!project) {
		notFound();
	}

	return (
		<div className="bg-background">
			<div className="container mx-auto px-4 py-16 sm:py-24 lg:py-28">
				<div className="mb-8">
					<Button asChild variant="outline">
						<Link href="/projects">
							<ArrowLeft className="mr-2 h-4 w-4" />
							Back to Portfolio
						</Link>
					</Button>
				</div>
				<ProjectDetailView project={project} />
			</div>
		</div>
	);
}

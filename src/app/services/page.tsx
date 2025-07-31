
"use client";

import React, { ComponentType } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { DraftingCompass, Calculator, Landmark, Sofa, View, Trees, Pen, LucideProps } from "lucide-react";
import type { Service } from "@/lib/types";

const icons: { [key: string]: ComponentType<LucideProps> } = {
  DraftingCompass,
  Calculator,
  Landmark,
  Sofa,
  View,
  Trees,
  Pen,
};

const getIconComponent = (iconName: string): ComponentType<LucideProps> => {
    return icons[iconName] || Pen;
};

const services: Service[] = [
    { id: "1", icon: "DraftingCompass", title: "Architectural Design", description: "From initial sketches to detailed blueprints, we provide comprehensive architectural design services for projects of all scales." },
    { id: "2", icon: "Calculator", title: "Feasibility Studies", description: "We conduct thorough site analysis and feasibility studies to ensure your project's viability and success from the outset." },
    { id: "3", icon: "Landmark", title: "Master Planning", description: "Our team excels in creating long-term master plans for urban and rural developments, focusing on sustainability and community." },
    { id: "4", icon: "Sofa", title: "Interior Design", description: "We craft beautiful and functional interior spaces that complement the architectural style and meet our clients' needs." },
    { id: "5", icon: "View", title: "3D Visualization", description: "Using cutting-edge technology, we create realistic 3D renderings and virtual tours to help you visualize your project before construction." },
    { id: "6", icon: "Trees", title: "Landscape Architecture", description: "We design outdoor spaces that enhance the natural environment and create a harmonious connection between buildings and nature." },
];

export default function ServicesPage() {
  return (
    <div className="bg-secondary">
      <div className="container mx-auto px-4 py-16 sm:py-24 lg:py-28">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">Our Services</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            We provide a full spectrum of architectural and design services, ensuring a seamless and integrated process from concept to completion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {services.map((service, index) => {
            const IconComponent = getIconComponent(service.icon);
            return (
              <Card key={service.id} className="relative text-center shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card pt-12">
                <div className="absolute -top-7 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground rounded-full p-4 border-4 border-secondary">
                   <IconComponent className="h-8 w-8" />
                </div>
                <CardHeader>
                  <CardTitle className="font-headline text-2xl text-primary">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}


"use client";

import React, { ComponentType } from "react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
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
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 sm:py-24 lg:py-28">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">Our Services</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            We provide a full spectrum of architectural and design services, ensuring a seamless and integrated process from concept to completion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = getIconComponent(service.icon);
            return (
              <Card key={service.id} className="relative group text-left shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-accent bg-secondary/50">
                <CardHeader className="flex flex-row items-start gap-4">
                  <div className="text-accent flex-shrink-0">
                    <IconComponent className="h-10 w-10 mt-1" />
                  </div>
                  <div>
                    <CardTitle className="font-headline text-2xl text-primary mb-2">{service.title}</CardTitle>
                    <CardDescription className="text-muted-foreground leading-relaxed">{service.description}</CardDescription>
                  </div>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}

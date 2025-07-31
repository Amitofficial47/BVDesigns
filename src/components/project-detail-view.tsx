
"use client";

import { useState } from 'react';
import Image from 'next/image';
import { MapPin, Calendar } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import type { Project } from '@/lib/types';

export function ProjectDetailView({ project }: { project: Project }) {
  const [mainImage, setMainImage] = useState(project.images[0]);
  const [mainImageHint, setMainImageHint] = useState(project.hints[0]);

  return (
    <div className="grid lg:grid-cols-5 gap-8 md:gap-12">
      <div className="lg:col-span-3">
        <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg mb-4">
          <Image
            src={mainImage}
            alt={`Main view of ${project.title}`}
            fill
            style={{objectFit: 'cover'}}
            className="transition-transform duration-500 hover:scale-105"
            data-ai-hint={mainImageHint}
            priority
          />
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2">
          {project.images.map((image, index) => (
            <div
              key={index}
              className={`relative aspect-square rounded-md overflow-hidden cursor-pointer ring-2 ${mainImage === image ? 'ring-primary' : 'ring-transparent'
                } hover:ring-primary/70`}
              onClick={() => {
                setMainImage(image);
                setMainImageHint(project.hints[index]);
              }}
            >
              <Image
                src={image}
                alt={`${project.title} thumbnail ${index + 1}`}
                fill
                style={{objectFit: 'cover'}}
                data-ai-hint={project.hints[index]}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="lg:col-span-2">
        <Badge variant="secondary" className="mb-2 capitalize">{project.category}</Badge>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-headline font-bold text-primary mb-4">{project.title}</h1>
        <div className="space-y-4 text-base sm:text-lg text-muted-foreground mb-6">
          <div className="flex items-start gap-3">
            <MapPin className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
            <span>{project.location}</span>
          </div>
          <div className="flex items-center gap-3">
            <Calendar className="h-5 w-5 text-accent" />
            <span>Completed in {project.year}</span>
          </div>
        </div>
        <h2 className="text-xl sm:text-2xl font-headline font-bold text-primary mb-3">About the Project</h2>
        <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">
          {project.description}
        </p>
      </div>
    </div>
  )
}

    
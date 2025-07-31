
"use client";

import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { StarIcon } from "@/components/ui/star-icon";
import type { Testimonial } from "@/lib/types";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
    return (
        <Card className="bg-card shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col text-center">
            <CardContent className="pt-6 flex-grow">
                <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                        <StarIcon key={i} className={`w-5 h-5 ${i < testimonial.rating ? 'text-accent' : 'text-muted-foreground/50'}`} />
                    ))}
                </div>
                <p className="text-muted-foreground italic">"{testimonial.comment}"</p>
            </CardContent>
            <CardHeader className="flex-col items-center gap-4 pt-4">
                <Avatar>
                    <AvatarImage src={testimonial.image} alt={testimonial.name} data-ai-hint={testimonial.hint} />
                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                    <p className="font-bold text-primary">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
            </CardHeader>
        </Card>
    );
}

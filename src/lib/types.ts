
export interface Project {
  id: string;
  title: string;
  category: 'residence' | 'hotel' | 'commercial';
  location: string;
  year: number;
  description: string;
  images: string[];
  hints: string[];
}

export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  fallback: string;
  hint: string;
}

export interface Testimonial {
    id: string;
    name: string;
    location: string;
    rating: number;
    comment: string;
    image: string;
    hint: string;
}

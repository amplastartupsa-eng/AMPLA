export interface TimelineStep {
  step: number;
  icon: string;
  title: string;
  description: string;
}

export interface Partner {
    name: string;
    logo: string;
    website: string;
    phone: string;
    description: string;
}

export interface CorreiosPreset {
    id: string;
    name: string;
    dimensions: string;
    weight: string;
    price: number;
    h: number;
    w: number;
    l: number;
    kg: number;
}

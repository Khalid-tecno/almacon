export interface Service {
  id: string;
  name: string;
  description: string;
  icon: string;
  image: string;
}

export const services: Service[] = [
  {
    id: 'block-production',
    name: 'Block production',
    description: 'High-quality concrete block manufacturing for construction projects',
    icon: '🏭',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop'
  },
  {
    id: 'building-construction',
    name: 'building and constraction',
    description: 'Complete building construction services from foundation to finishing',
    icon: '🏗️',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb92e3c6c?w=800&h=600&fit=crop'
  },
  {
    id: 'real-estate-supply',
    name: 'Real State and Construction Supply production',
    description: 'Comprehensive real estate development and construction supply solutions',
    icon: '🏢',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop'
  },
  {
    id: 'aluminium-iron',
    name: 'Alluminium & Iron work',
    description: 'Custom aluminium and iron fabrication for architectural and industrial applications',
    icon: '🔧',
    image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&h=600&fit=crop'
  }
];

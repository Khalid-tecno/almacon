import type { Language } from '../contexts/LanguageContext';
import type { Service } from '../data/services';
import { getTranslation } from '../translations/dictionary';

export const getTranslatedServices = (language: Language): Service[] => {
  return [
    {
      id: 'block-production',
      name: getTranslation('services.blockProduction', language),
      description: getTranslation('services.blockProduction.description', language),
      icon: '🏭',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop'
    },
    {
      id: 'building-construction',
      name: getTranslation('services.buildingConstruction', language),
      description: getTranslation('services.buildingConstruction.description', language),
      icon: '🏗️',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb92e3c6c?w=800&h=600&fit=crop'
    },
    {
      id: 'real-estate-supply',
      name: getTranslation('services.realEstateSupply', language),
      description: getTranslation('services.realEstateSupply.description', language),
      icon: '🏢',
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop'
    },
    {
      id: 'aluminium-iron',
      name: getTranslation('services.aluminiumIron', language),
      description: getTranslation('services.aluminiumIron.description', language),
      icon: '🔧',
      image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&h=600&fit=crop'
    }
  ];
};

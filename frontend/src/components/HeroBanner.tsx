import React from 'react';
import { useTranslation } from '../hooks/useTranslation';

const HeroBanner: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <div className="relative h-96 overflow-hidden">
      <img 
        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&h=600&fit=crop"
        alt="Cityscape banner"
        className="w-full h-full object-cover"
      />
      {/* Diagonal cut overlay revealing teal background */}
      <div 
        className="absolute top-0 right-0 w-full h-full bg-primary"
        style={{
          clipPath: 'polygon(85% 0, 100% 0, 100% 100%, 0 100%)'
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-white z-10 text-center">
          {t('heroBanner.welcome')}
        </h1>
      </div>
    </div>
  );
};

export default HeroBanner;

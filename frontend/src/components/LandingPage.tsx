import React from 'react';
import { useTranslation } from '../hooks/useTranslation';
import './LandingPage.css';

const LandingPage: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="slogan">{t('landing.slogan')}</h1>
          <p className="mission">{t('landing.mission')}</p>
        </div>
        
        <div className="triangle-wrapper">
          <div className="triangle-container">
            <img src="/landing_image.png" alt="landing" />
          </div>

          <div className="triangle-gap"></div>
          <div className="triangle-accent"></div>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;

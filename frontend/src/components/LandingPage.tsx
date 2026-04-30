import React from 'react';
import { useTranslation } from '../hooks/useTranslation';
import './LandingPage.css';

const LandingPage: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <section className="landing-hero">
      <div className="hero-content">
        <div className="top-left-diagonal">
          <div className="city-overlay">
            <div className="logo-o">O</div>
            <div className="main-headline">
              {t('landing.mainHeadline')}
            </div>
          </div>
        </div>
        <div className="bottom-right-diagonal">
          <div className="decorative-triangle"></div>
        </div>
        <div className="brand-text">
          {t('landing.brandText')}
        </div>
      </div>
    </section>
  );
};

export default LandingPage;

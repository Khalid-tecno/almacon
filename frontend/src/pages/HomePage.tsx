import { useTranslation } from '../hooks/useTranslation';
import { Link } from 'react-router-dom';
import LandingPage from '../components/LandingPage';
import HeroBanner from '../components/HeroBanner';

const HomePage = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-deep-teal">
      {/* Landing Page Hero Section */}
      <LandingPage />
      
      {/* Original Hero Banner */}
      <HeroBanner />
      
      {/* Original HomePage Content */}
      
      {/* Our Core Sectors Section */}
      <div className="px-4 sm:px-6 md:px-8 lg:px-16 py-12 md:py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            {t('coreSectors.title')}
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-8 md:mb-12">
            {t('coreSectors.subtitle')}
          </p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-4 sm:p-6 md:p-8 border border-golden-yellow border-opacity-30 hover:bg-opacity-20 transition duration-300 flex flex-col h-full">
              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 bg-golden-yellow rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-deep-teal" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/>
                  <path d="M14 2v6h6"/>
                  <path d="M8 13h8M8 17h8"/>
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-4 text-center">
                {t('coreSectors.construction.title')}
              </h3>
              <div className="text-center mb-4">
                <span className="inline-block px-3 py-2 bg-golden-yellow text-deep-teal text-sm font-bold rounded-full">
                  {t('coreSectors.construction.keyFact')}
                </span>
              </div>
              <p className="text-gray-300 mb-4 text-center flex-grow text-sm sm:text-base">
                {t('coreSectors.construction.description')}
              </p>
              <div className="text-center">
                <Link 
                  to="/services/building-construction"
                  className="inline-flex items-center text-golden-yellow hover:text-white transition duration-300 py-2 px-4 rounded-lg hover:bg-white hover:bg-opacity-10 min-h-[44px]"
                >
                  {t('coreSectors.learnMore')}
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-4 sm:p-6 md:p-8 border border-golden-yellow border-opacity-30 hover:bg-opacity-20 transition duration-300 flex flex-col h-full">
              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 bg-golden-yellow rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-deep-teal" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                  <polyline points="9,22 9,12 15,12 15,22"/>
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-4 text-center">
                {t('coreSectors.realEstate.title')}
              </h3>
              <div className="text-center mb-4">
                <span className="inline-block px-3 py-2 bg-golden-yellow text-deep-teal text-sm font-bold rounded-full">
                  {t('coreSectors.realEstate.keyFact')}
                </span>
              </div>
              <p className="text-gray-300 mb-4 text-center flex-grow text-sm sm:text-base">
                {t('coreSectors.realEstate.description')}
              </p>
              <div className="text-center">
                <Link 
                  to="/services/real-estate-supply"
                  className="inline-flex items-center text-golden-yellow hover:text-white transition duration-300 py-2 px-4 rounded-lg hover:bg-white hover:bg-opacity-10 min-h-[44px]"
                >
                  {t('coreSectors.learnMore')}
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-4 sm:p-6 md:p-8 border border-golden-yellow border-opacity-30 hover:bg-opacity-20 transition duration-300 flex flex-col h-full">
              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 bg-golden-yellow rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-deep-teal" fill="currentColor" viewBox="0 0 24 24">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                  <line x1="8" y1="21" x2="16" y2="21"/>
                  <line x1="12" y1="17" x2="12" y2="21"/>
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-4 text-center">
                {t('coreSectors.materials.title')}
              </h3>
              <div className="text-center mb-4">
                <span className="inline-block px-3 py-2 bg-golden-yellow text-deep-teal text-sm font-bold rounded-full">
                  {t('coreSectors.materials.keyFact')}
                </span>
              </div>
              <p className="text-gray-300 mb-4 text-center flex-grow text-sm sm:text-base">
                {t('coreSectors.materials.description')}
              </p>
              <div className="text-center">
                <Link 
                  to="/services/block-production"
                  className="inline-flex items-center text-golden-yellow hover:text-white transition duration-300 py-2 px-4 rounded-lg hover:bg-white hover:bg-opacity-10 min-h-[44px]"
                >
                  {t('coreSectors.learnMore')}
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section className="py-12 md:py-20 px-4 sm:px-6 md:px-8 lg:px-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-deep-teal mb-4 text-center">
            {t('services.title')}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-8 md:mb-12 text-center max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
            <div className="bg-gray-50 p-4 sm:p-6 md:p-8 rounded-lg shadow-lg border-l-4 border-golden-yellow hover:shadow-xl transition duration-300">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-golden-yellow rounded-full flex items-center justify-center mb-4 sm:mb-6">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-deep-teal" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 3h18v18H3zM12 8v8m-4-4h8"/>
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-deep-teal mb-4">
                {t('services.integrated.title')}
              </h3>
              <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
                {t('services.integrated.description')}
              </p>
              <Link 
                to="/services/building-construction"
                className="inline-flex items-center text-golden-yellow hover:text-deep-teal font-semibold transition duration-300 py-2 px-4 rounded-lg hover:bg-gray-100 min-h-[44px]"
              >
                {t('services.learnMore')}
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="bg-gray-50 p-4 sm:p-6 md:p-8 rounded-lg shadow-lg border-l-4 border-golden-yellow hover:shadow-xl transition duration-300">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-golden-yellow rounded-full flex items-center justify-center mb-4 sm:mb-6">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-deep-teal" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-deep-teal mb-4">
                {t('services.technological.title')}
              </h3>
              <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
                {t('services.technological.description')}
              </p>
              <Link 
                to="/services/block-production"
                className="inline-flex items-center text-golden-yellow hover:text-deep-teal font-semibold transition duration-300 py-2 px-4 rounded-lg hover:bg-gray-100 min-h-[44px]"
              >
                {t('services.learnMore')}
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="bg-gray-50 p-4 sm:p-6 md:p-8 rounded-lg shadow-lg border-l-4 border-golden-yellow hover:shadow-xl transition duration-300">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-golden-yellow rounded-full flex items-center justify-center mb-4 sm:mb-6">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-deep-teal" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-deep-teal mb-4">
                {t('services.socialImpact.title')}
              </h3>
              <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
                {t('services.socialImpact.description')}
              </p>
              <Link 
                to="/services/real-estate-supply"
                className="inline-flex items-center text-golden-yellow hover:text-deep-teal font-semibold transition duration-300 py-2 px-4 rounded-lg hover:bg-gray-100 min-h-[44px]"
              >
                {t('services.learnMore')}
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-16 bg-deep-teal">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
              {t('about.slogan')}
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto">
              {t('about.companyOverview')}
            </p>
          </div>
          
          {/* Vision & Mission Cards */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 mb-8 md:mb-12">
            <div className="bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-lg border-l-4 border-golden-yellow">
              <h3 className="text-xl sm:text-2xl font-bold text-deep-teal mb-4">
                {t('about.vision.title')}
              </h3>
              <p className="text-gray-700">
                {t('about.vision.text')}
              </p>
            </div>
            <div className="bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-lg border-l-4 border-golden-yellow">
              <h3 className="text-xl sm:text-2xl font-bold text-deep-teal mb-4">
                {t('about.mission.title')}
              </h3>
              <p className="text-gray-700">
                {t('about.mission.text')}
              </p>
            </div>
          </div>
          
          {/* Core Values Grid */}
          <div className="mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-white text-center mb-6 sm:mb-8">
              {t('about.coreValues.title')}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
              <div className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-2 sm:mb-3 bg-golden-yellow rounded-full flex items-center justify-center">
                  <span className="text-lg sm:text-2xl">✓</span>
                </div>
                <h4 className="text-white font-semibold text-sm sm:text-base">{t('about.coreValues.integrity')}</h4>
                <p className="text-gray-300 text-xs sm:text-sm">{t('about.coreValues.integrity.am')}</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-2 sm:mb-3 bg-golden-yellow rounded-full flex items-center justify-center">
                  <span className="text-lg sm:text-2xl">💡</span>
                </div>
                <h4 className="text-white font-semibold text-sm sm:text-base">{t('about.coreValues.innovation')}</h4>
                <p className="text-gray-300 text-xs sm:text-sm">{t('about.coreValues.innovation.am')}</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-2 sm:mb-3 bg-golden-yellow rounded-full flex items-center justify-center">
                  <span className="text-lg sm:text-2xl">🤝</span>
                </div>
                <h4 className="text-white font-semibold text-sm sm:text-base">{t('about.coreValues.teamwork')}</h4>
                <p className="text-gray-300 text-xs sm:text-sm">{t('about.coreValues.teamwork.am')}</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-2 sm:mb-3 bg-golden-yellow rounded-full flex items-center justify-center">
                  <span className="text-lg sm:text-2xl">🌱</span>
                </div>
                <h4 className="text-white font-semibold text-sm sm:text-base">{t('about.coreValues.sustainability')}</h4>
                <p className="text-gray-300 text-xs sm:text-sm">{t('about.coreValues.sustainability.am')}</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-2 sm:mb-3 bg-golden-yellow rounded-full flex items-center justify-center">
                  <span className="text-lg sm:text-2xl">⭐</span>
                </div>
                <h4 className="text-white font-semibold text-sm sm:text-base">{t('about.coreValues.quality')}</h4>
                <p className="text-gray-300 text-xs sm:text-sm">{t('about.coreValues.quality.am')}</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-2 sm:mb-3 bg-golden-yellow rounded-full flex items-center justify-center">
                  <span className="text-lg sm:text-2xl">❤️</span>
                </div>
                <h4 className="text-white font-semibold text-sm sm:text-base">{t('about.coreValues.customer')}</h4>
                <p className="text-gray-300 text-xs sm:text-sm">{t('about.coreValues.customer.am')}</p>
              </div>
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="text-center">
            <Link 
              to="/about" 
              className="inline-flex items-center px-6 py-3 sm:px-8 sm:py-4 bg-golden-yellow text-deep-teal font-bold rounded-lg hover:bg-opacity-90 transition duration-300 min-h-[44px]"
            >
              {t('about.readMore')}
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 md:py-20 px-4 sm:px-6 md:px-8 lg:px-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-deep-teal mb-4 text-center">
            {t('testimonials.title')}
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-golden-yellow mx-auto mb-8 md:mb-12"></div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img 
                src="/Ato_Tsedalu_Alemu.png" 
                alt={t('testimonials.client1.name')}
                className="w-full h-40 sm:h-48 object-cover max-w-full"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const fallback = target.nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = 'flex';
                }}
              />
              <div className="hidden w-full h-40 sm:h-48 bg-gray-200 items-center justify-center">
                <svg className="w-16 sm:w-24 h-16 sm:h-24 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
              </div>
              <div className="border-b-4 border-[#FFD700]"></div>
              <div className="p-6 text-center">
                <p className="text-gray-700 italic mb-4 font-serif">
                  "{t('testimonials.client1.text')}"
                </p>
                <h4 className="font-bold text-deep-teal text-lg">{t('testimonials.client1.name')}</h4>
                <p className="text-gray-600 text-sm">{t('testimonials.client1.role')}</p>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img 
                src="/Ato_Melkamu_Terefe.png" 
                alt={t('testimonials.client2.name')}
                className="w-full h-40 sm:h-48 object-cover max-w-full"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const fallback = target.nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = 'flex';
                }}
              />
              <div className="hidden w-full h-40 sm:h-48 bg-gray-200 items-center justify-center">
                <svg className="w-16 sm:w-24 h-16 sm:h-24 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
              </div>
              <div className="border-b-4 border-[#FFD700]"></div>
              <div className="p-6 text-center">
                <p className="text-gray-700 italic mb-4 font-serif">
                  "{t('testimonials.client2.text')}"
                </p>
                <h4 className="font-bold text-deep-teal text-lg">{t('testimonials.client2.name')}</h4>
                <p className="text-gray-600 text-sm">{t('testimonials.client2.role')}</p>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img 
                src="/Ato_Nega_Yihune.png" 
                alt={t('testimonials.client3.name')}
                className="w-full h-40 sm:h-48 object-cover max-w-full"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const fallback = target.nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = 'flex';
                }}
              />
              <div className="hidden w-full h-40 sm:h-48 bg-gray-200 items-center justify-center">
                <svg className="w-16 sm:w-24 h-16 sm:h-24 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
              </div>
              <div className="border-b-4 border-[#FFD700]"></div>
              <div className="p-6 text-center">
                <p className="text-gray-700 italic mb-4 font-serif">
                  "{t('testimonials.client3.text')}"
                </p>
                <h4 className="font-bold text-deep-teal text-lg">{t('testimonials.client3.name')}</h4>
                <p className="text-gray-600 text-sm">{t('testimonials.client3.role')}</p>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link 
              to="/testimonials" 
              className="inline-flex items-center px-6 py-3 sm:px-8 sm:py-3 bg-golden-yellow text-deep-teal font-bold rounded-lg hover:bg-opacity-90 transition duration-300 min-h-[44px]"
            >
              {t('testimonials.viewAll')}
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 md:px-8 lg:px-16 bg-[#004d4d]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 text-center">
            {t('contact.title')}
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-8 md:mb-12 text-center max-w-3xl mx-auto">
            {t('contact.getInTouch')}
          </p>
          
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Left Column: Contact Info & Social Media */}
            <div className="space-y-8">
              {/* Contact Information Cards */}
              <div className="space-y-6">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">{t('contact.connect')}</h3>
                
                {/* Email Card */}
                <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-6 border border-white border-opacity-20 hover:bg-opacity-20 transition duration-300">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-[#F5A623] rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-[#004d4d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-300 text-sm mb-1">Email</p>
                      <p className="text-white font-semibold">{t('contact.officialEmail')}</p>
                    </div>
                  </div>
                </div>

                {/* Phone Cards */}
                <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-6 border border-white border-opacity-20 hover:bg-opacity-20 transition duration-300">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-[#F5A623] rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-[#004d4d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-300 text-sm mb-1">Office Lines</p>
                      <p className="text-white font-semibold">{t('contact.phone1')}</p>
                      <p className="text-white font-semibold">{t('contact.phone2')}</p>
                    </div>
                  </div>
                </div>

                {/* Address Card */}
                <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-6 border border-white border-opacity-20 hover:bg-opacity-20 transition duration-300">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-[#F5A623] rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-[#004d4d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-300 text-sm mb-1">Address</p>
                      <p className="text-white font-semibold">{t('contact.headOffice')}</p>
                    </div>
                  </div>
                </div>

                {/* Working Hours Card */}
                <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-6 border border-white border-opacity-20 hover:bg-opacity-20 transition duration-300">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-[#F5A623] rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-[#004d4d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-300 text-sm mb-1">Working Hours</p>
                      <p className="text-white font-semibold">{t('contact.workingHours')}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="space-y-4">
                <h4 className="text-lg font-bold text-white mb-4">{t('contact.followUs')}</h4>
                <div className="flex flex-wrap gap-3">
                  <a 
                    href="https://www.facebook.com/share/1KJc6W1BXX/?mibextid=wwXIfr" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-3 border border-white border-opacity-20 hover:bg-opacity-20 transition duration-300"
                  >
                    <svg width={20} height={20} viewBox="0 0 24 24" fill="#F5A623">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" fill="#F5A623"/>
                    </svg>
                  </a>
                  <a 
                    href="https://t.me/almacoo" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-3 border border-white border-opacity-20 hover:bg-opacity-20 transition duration-300"
                  >
                    <svg width={20} height={20} viewBox="0 0 24 24" fill="#F5A623">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.56c-.21 2.27-1.13 7.75-1.6 10.29-.2 1.08-.59 1.44-.97 1.47-.82.07-1.45-.54-2.23-1.06-1.24-.81-1.94-1.32-3.14-2.11-1.39-.91-.49-1.41.3-2.23.21-.21 3.77-3.46 3.83-3.74.01-.04.01-.18-.07-.26s-.21-.03-.3-.02c-.13.02-2.13 1.35-6.01 3.96-.57.39-1.08.58-1.54.57-.51-.01-1.49-.29-2.21-.52-.89-.29-1.59-.44-1.53-.93.03-.25.38-.51 1.05-.78 4.11-1.79 6.84-2.97 8.18-3.54 3.92-1.63 4.73-1.92 5.26-1.93.12 0 .37.03.54.17.14.12.18.28.2.44-.01.06 0 .12-.01.18z" fill="#F5A623"/>
                    </svg>
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/የ-ነገየ-አለም-8aa780406" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-3 border border-white border-opacity-20 hover:bg-opacity-20 transition duration-300"
                  >
                    <svg width={20} height={20} viewBox="0 0 24 24" fill="#F5A623">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" fill="#F5A623"/>
                      <rect x="2" y="9" width="4" height="12" fill="#F5A623"/>
                      <circle cx="4" cy="4" r="2" fill="#F5A623"/>
                    </svg>
                  </a>
                  <a 
                    href="https://www.youtube.com/@conofficia" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-3 border border-white border-opacity-20 hover:bg-opacity-20 transition duration-300"
                  >
                    <svg width={20} height={20} viewBox="0 0 24 24" fill="#F5A623">
                      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.4 19.62C5.12 20 12 20 12 20s6.88 0 8.6-.38a2.78 2.78 0 0 0 1.94-2A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" fill="#F5A623"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-6 sm:p-8 border border-white border-opacity-20">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">{t('contact.sendUsMessage')}</h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder={t('contact.form.name')}
                  className="w-full p-4 bg-white bg-opacity-20 backdrop-blur-md border border-white border-opacity-20 rounded-lg focus:outline-none focus:border-[#F5A623] text-white placeholder-gray-300 min-h-[48px] transition duration-300"
                />
                <input
                  type="email"
                  placeholder={t('contact.form.email')}
                  className="w-full p-4 bg-white bg-opacity-20 backdrop-blur-md border border-white border-opacity-20 rounded-lg focus:outline-none focus:border-[#F5A623] text-white placeholder-gray-300 min-h-[48px] transition duration-300"
                />
                <input
                  type="text"
                  placeholder={t('contact.form.subjectPlaceholder')}
                  className="w-full p-4 bg-white bg-opacity-20 backdrop-blur-md border border-white border-opacity-20 rounded-lg focus:outline-none focus:border-[#F5A623] text-white placeholder-gray-300 min-h-[48px] transition duration-300"
                />
                <textarea
                  placeholder={t('contact.form.messagePlaceholder')}
                  rows={4}
                  className="w-full p-4 bg-white bg-opacity-20 backdrop-blur-md border border-white border-opacity-20 rounded-lg focus:outline-none focus:border-[#F5A623] text-white placeholder-gray-300 min-h-[48px] transition duration-300 resize-none"
                />
                <button
                  type="submit"
                  className="w-full bg-[#F5A623] text-black font-bold py-4 px-6 rounded-lg hover:bg-[#d48c1b] transition duration-300 min-h-[48px]"
                >
                  {t('contact.form.submit')}
                </button>
              </form>
            </div>
          </div>

          {/* Google Maps Placeholder */}
          <div className="mt-12">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 text-center">{t('contact.findUs')}</h3>
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15282.123456789!2d37.123456789!3d11.123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDc3JzI2LjAiTiAzN8KwMDQnMjguNCJF!5e0!3m2!1sen!2set!4v1234567890"
                width="100%"
                height="400"
                style={{ border: 0, filter: 'grayscale(100%) contrast(1.25)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#004d4d] to-transparent opacity-30 pointer-events-none"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

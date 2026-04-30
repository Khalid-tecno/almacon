import { Link } from 'react-router-dom';
import { useTranslation } from '../hooks/useTranslation';
import { getTranslatedServices } from '../utils/getTranslatedServices';

const ServicesPage = () => {
  const { t, language } = useTranslation();
  const services = getTranslatedServices(language);
  return (
    <div className="min-h-screen bg-deep-teal">
      {/* Header Banner with Diagonal Cut */}
      <div className="relative h-96 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&h=600&fit=crop"
          alt="Cityscape banner"
          className="w-full h-full object-cover"
        />
        {/* Diagonal cut overlay revealing teal background */}
        <div 
          className="absolute top-0 right-0 w-full h-full bg-deep-teal"
          style={{
            clipPath: 'polygon(85% 0, 100% 0, 100% 100%, 0 100%)'
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white z-10">{t('ui.ourServices')}</h1>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <Link 
              key={service.id} 
              to={`/services/${service.id}`}
              className="group cursor-pointer transform transition-all duration-300 hover:scale-105"
            >
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-8 text-center hover:bg-opacity-20 transition-all">
                {/* Service Icon */}
                <div className="service-icon mx-auto mb-6 relative">
                  <div className="text-4xl z-10 relative">
                    {service.icon}
                  </div>
                </div>
                
                {/* Service Name */}
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-golden-yellow transition-colors">
                  {service.name}
                </h3>
                
                {/* Service Description */}
                <p className="text-gray-300 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Additional Information Section */}
      <div className="bg-black bg-opacity-20 py-16">
        <div className="container mx-auto px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            {t('ui.whyChooseAlmacon')}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            {t('home.tagline')}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-golden-yellow text-4xl font-bold mb-2">15+</div>
              <div className="text-white font-medium">{t('ui.yearsExperience')}</div>
            </div>
            <div className="text-center">
              <div className="text-golden-yellow text-4xl font-bold mb-2">500+</div>
              <div className="text-white font-medium">{t('ui.projectsCompleted')}</div>
            </div>
            <div className="text-center">
              <div className="text-golden-yellow text-4xl font-bold mb-2">100%</div>
              <div className="text-white font-medium">{t('ui.clientSatisfaction')}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;

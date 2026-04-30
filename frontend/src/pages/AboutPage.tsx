import { useTranslation } from '../hooks/useTranslation';

const AboutPage = () => {
  const { t } = useTranslation();
  
  const employeeVoices = [
    {
      name: t('about.employee.solomon'),
      role: t('about.employee.solomon.role'),
      quote: t('about.employee.solomon.quote'),
      image: '/Ato_Solomon_Leulseged.png'
    },
    {
      name: t('about.employee.ayalnesh'),
      role: t('about.employee.ayalnesh.role'),
      quote: t('about.employee.ayalnesh.quote'),
      image: '/Wro_Ayalnesh_Shimelis.png'
    },
    {
      name: t('about.employee.yigrem'),
      role: t('about.employee.yigrem.role'),
      quote: t('about.employee.yigrem.quote'),
      image: '/Ato_Yigrem_Yeneante.png'
    }
  ];
  
  return (
    <div className="min-h-screen bg-primary py-20">
      <div className="container mx-auto px-8">
        {/* Header Section */}
        <div className="text-center mb-20">
          <h1 className="text-5xl font-bold text-white mb-6">{t('about.title')}</h1>
          <div className="max-w-4xl mx-auto">
            <p className="text-2xl font-semibold text-secondary mb-4">{t('about.slogan')}</p>
            <p className="text-lg text-gray-300 mb-4">{t('about.established')}</p>
            <p className="text-xl text-gray-300 leading-relaxed">
              {t('about.description')}
            </p>
          </div>
        </div>

        {/* Our Story Section */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="bg-white bg-opacity-10 rounded-lg p-10">
            <h2 className="text-4xl font-bold text-secondary mb-6 text-center">{t('about.ourStory')}</h2>
            <p className="text-gray-300 leading-relaxed text-lg text-center max-w-4xl mx-auto">
              {t('about.ourStory.content')}
            </p>
          </div>
        </div>

        {/* Social Impact Section */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="bg-white bg-opacity-10 rounded-lg p-10">
            <h2 className="text-4xl font-bold text-secondary mb-6 text-center">{t('about.ultimatePurpose')}</h2>
            <p className="text-gray-300 leading-relaxed text-lg text-center max-w-4xl mx-auto">
              {t('about.ultimatePurpose.content')}
            </p>
          </div>
        </div>

        {/* Brand Identity Section */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="bg-white bg-opacity-10 rounded-lg p-10">
            <h2 className="text-4xl font-bold text-secondary mb-6 text-center">{t('about.brandIdentity')}</h2>
            <p className="text-gray-300 leading-relaxed text-lg text-center max-w-4xl mx-auto">
              {t('about.brandIdentity.content')}
            </p>
          </div>
        </div>

        {/* Business Sectors Section */}
        <div className="max-w-6xl mx-auto mb-20">
          <h2 className="text-4xl font-bold text-secondary mb-10 text-center">{t('about.businessSectors')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white bg-opacity-10 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-semibold text-secondary mb-4">{t('about.sectors.construction')}</h3>
              <p className="text-gray-300 leading-relaxed">
                {t('about.sectors.construction.desc')}
              </p>
            </div>
            <div className="bg-white bg-opacity-10 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-semibold text-secondary mb-4">{t('about.sectors.realEstate')}</h3>
              <p className="text-gray-300 leading-relaxed">
                {t('about.sectors.realEstate.desc')}
              </p>
            </div>
            <div className="bg-white bg-opacity-10 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-semibold text-secondary mb-4">{t('about.sectors.materialSupply')}</h3>
              <p className="text-gray-300 leading-relaxed">
                {t('about.sectors.materialSupply.desc')}
              </p>
            </div>
          </div>
        </div>

        {/* Employee Voices Section */}
        <div className="max-w-6xl mx-auto mb-20">
          <h2 className="text-4xl font-bold text-secondary mb-16 text-center">{t('about.employeeVoices')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {employeeVoices.map((employee, index) => (
              <div key={index} className="bg-white bg-opacity-10 rounded-lg overflow-hidden h-full flex flex-col">
                {/* Large Portrait Image */}
                <div className="relative">
                  {employee.image ? (
                    <img 
                      src={employee.image} 
                      alt={employee.name}
                      className="w-full h-80 object-cover object-top border-b-4 border-secondary"
                      onError={(e) => {
                        e.currentTarget.src = '';
                        e.currentTarget.className = 'w-full h-80 bg-gray-400 border-b-4 border-secondary flex items-center justify-center';
                        e.currentTarget.innerHTML = '<svg class="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3a1 1 0 01-1-1v-5a1 1 0 011-1h12a1 1 0 011 1v5a1 1 0 01-1 1h-1a7 7 0 11-7 0z" clip-rule="evenodd"></path></svg>';
                      }}
                    />
                  ) : (
                    <div className="w-full h-80 bg-gray-400 border-b-4 border-secondary flex items-center justify-center">
                      <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3a1 1 0 01-1-1v-5a1 1 0 011-1h12a1 1 0 011 1v5a1 1 0 01-1 1h-1a7 7 0 11-7 0z" clip-rule="evenodd"></path>
                      </svg>
                    </div>
                  )}
                </div>
                
                {/* Content Section */}
                <div className="p-6 flex-grow flex flex-col justify-center text-center">
                  {/* Decorative Quotation Mark */}
                  <div className="text-secondary text-4xl font-serif opacity-20 mb-3 leading-none">"</div>
                  
                  {/* Quote */}
                  <blockquote className="text-gray-300 leading-relaxed italic text-lg mb-6">
                    {employee.quote}
                  </blockquote>
                  
                  {/* Employee Info */}
                  <div className="mt-auto">
                    <h3 className="text-xl font-bold text-white mb-2">{employee.name}</h3>
                    <p className="text-gray-400 text-sm uppercase tracking-wide">{employee.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Core Values Section */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white bg-opacity-10 rounded-lg p-8">
            <h2 className="text-3xl font-semibold text-secondary mb-6 text-center">{t('about.coreValues')}</h2>
            <p className="text-gray-300 text-center text-lg leading-relaxed">
              {t('about.coreValues.list')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

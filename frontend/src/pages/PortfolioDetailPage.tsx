import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from '../hooks/useTranslation';
import { getTranslatedPortfolio } from '../utils/getTranslatedPortfolio';

const PortfolioDetailPage = () => {
  const { t, language } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const portfolioProjects = getTranslatedPortfolio(language);
  const project = portfolioProjects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-primary flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">{t('portfolioDetail.notFound')}</h1>
          <p className="text-gray-300 mb-8">{t('portfolioDetail.notFoundText')}</p>
          <button
            onClick={() => navigate('/portfolio')}
            className="inline-block bg-secondary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors cursor-pointer"
            type="button"
          >
            {t('portfolioDetail.backToPortfolio')}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-primary pt-20 pb-16">
      <div className="container mx-auto px-8">
        {/* Back Button */}
        <button
          onClick={() => {
            console.log('Back to Portfolio button clicked');
            navigate('/portfolio');
          }}
          className="mb-8 inline-flex items-center bg-secondary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors relative z-50 cursor-pointer"
          type="button"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          {t('portfolioDetail.backToPortfolio')}
        </button>

        {/* Project Header */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Project Image */}
            <div className="lg:w-1/2">
              <div className="relative h-96 lg:h-full min-h-[400px] bg-black bg-opacity-30 rounded-lg overflow-hidden">
                <img 
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback to placeholder if image fails to load
                    e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiBmaWxsPSIjMUQzRjQ0Ii8+CjxwYXRoIGQ9Ik0yMCAyNEg0NFY0MEgyMFYyNFoiIGZpbGw9IiNGNUE2MjMiLz4KPGNpcmNsZSBjeD0iMzIiIGN5PSIzMCIgcj0iNCIgZmlsbD0iIzFEM0Y0QSIvPgo8L3N2Zz4K';
                  }}
                />
              </div>
            </div>

            {/* Project Information */}
            <div className="lg:w-1/2">
              <div className="mb-6">
                <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">{project.title}</h1>
                <p className="text-xl text-secondary font-medium mb-6">{project.category}</p>
              </div>

              {/* Project Details */}
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 mb-8">
                <h2 className="text-2xl font-semibold text-white mb-6">{t('portfolioDetail.projectDetails')}</h2>
                
                <div className="space-y-4">
                  {project.client && (
                    <div>
                      <h3 className="text-secondary font-medium mb-1">{t('portfolioDetail.client')}</h3>
                      <p className="text-white">{project.client}</p>
                    </div>
                  )}
                  
                  {project.location && (
                    <div>
                      <h3 className="text-secondary font-medium mb-1">{t('portfolioDetail.location')}</h3>
                      <p className="text-white flex items-center">
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                        </svg>
                        {project.location}
                      </p>
                    </div>
                  )}
                  
                  {project.contractValue && (
                    <div>
                      <h3 className="text-secondary font-medium mb-1">{t('portfolioDetail.contractValue')}</h3>
                      <p className="text-white">{project.contractValue}</p>
                    </div>
                  )}
                  
                  {project.contractPeriod && (
                    <div>
                      <h3 className="text-secondary font-medium mb-1">{t('portfolioDetail.contractPeriod')}</h3>
                      <p className="text-white">{project.contractPeriod}</p>
                    </div>
                  )}
                  
                  {project.completionYear && (
                    <div>
                      <h3 className="text-secondary font-medium mb-1">{t('portfolioDetail.completionYear')}</h3>
                      <p className="text-white">{project.completionYear}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Project Description */}
        <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-8">
          <h2 className="text-3xl font-semibold text-white mb-6">{t('portfolioDetail.projectDescription')}</h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 text-lg leading-relaxed mb-6">{project.description}</p>
          </div>
        </div>

        {/* Additional Project Information */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-6">
            {t('portfolioDetail.commitmentText')}
          </p>
          <button
            onClick={() => navigate('/portfolio')}
            className="bg-secondary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
          >
            {t('portfolioDetail.viewMoreProjects')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PortfolioDetailPage;

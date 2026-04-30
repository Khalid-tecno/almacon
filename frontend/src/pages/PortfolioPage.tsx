import { useNavigate } from 'react-router-dom';
import { useTranslation } from '../hooks/useTranslation';
import { getTranslatedPortfolio } from '../utils/getTranslatedPortfolio';

const PortfolioPage = () => {
  const { t, language } = useTranslation();
  const navigate = useNavigate();
  
  const portfolioProjects = getTranslatedPortfolio(language);

  return (
    <div className="min-h-screen bg-primary pt-20 pb-16">
      <div className="container mx-auto px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">{t('portfolio.title')}</h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            {t('portfolio.description')}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {portfolioProjects.map((project) => (
            <div
              key={project.id}
              className="relative group cursor-pointer transform transition-all duration-300 hover:scale-105"
              onClick={() => navigate(`/portfolio/${project.id}`)}
            >
              {/* Project Card */}
              <div className="bg-white bg-opacity-10 rounded-lg overflow-hidden backdrop-blur-sm border border-transparent group-hover:border-secondary transition-all duration-300">
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    onError={(e) => {
                      // Fallback to placeholder if image fails to load
                      e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiBmaWxsPSIjMUQzRjQ0Ii8+CjxwYXRoIGQ9Ik0yMCAyNEg0NFY0MEgyMFYyNFoiIGZpbGw9IiNGNUE2MjMiLz4KPGNpcmNsZSBjeD0iMzIiIGN5PSIzMCIgcj0iNCIgZmlsbD0iIzFEM0Y0QSIvPgo8L3N2Zz4K';
                    }}
                  />
                  
                  {/* Hover Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-secondary to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-end p-4`}>
                    <div className="text-black">
                      <p className="text-sm font-semibold">{t('portfolio.viewDetails')}</p>
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-secondary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-3">{project.category}</p>
                  <p className="text-gray-300 text-sm line-clamp-2">
                    {project.description}
                  </p>
                  
                  {/* Project Details */}
                  <div className="mt-4 space-y-1">
                    {project.location && (
                      <p className="text-gray-400 text-xs flex items-center">
                        <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                        </svg>
                        {project.location}
                      </p>
                    )}
                    {project.client && (
                      <p className="text-gray-400 text-xs">
                        <span className="font-medium">{t('portfolio.client')}:</span> {project.client}
                      </p>
                    )}
                    {project.contractValue && (
                      <p className="text-gray-400 text-xs">
                        <span className="font-medium">{t('portfolio.value')}:</span> {project.contractValue}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Geometric Hover Effect */}
              <div className={`absolute -inset-1 border-2 border-secondary rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform rotate-1`}></div>
            </div>
          ))}
        </div>

        {/* Empty State for Projects without Images */}
        {portfolioProjects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-400 text-lg">{t('portfolio.noProjects')}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PortfolioPage;

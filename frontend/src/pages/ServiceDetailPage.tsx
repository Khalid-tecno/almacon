import { useParams, Link } from 'react-router-dom';
import { useTranslation } from '../hooks/useTranslation';
import { getTranslatedServices } from '../utils/getTranslatedServices';

// Import images directly
import blockProductionImg from '../data/Block Production.jpeg';
import buildingConstructionImg from '../data/Building Construction.jpeg';
import realEstateSupplyImg from '../data/Real Estate Supply.jpeg';
import aluminiumIronWorkImg from '../data/aluminiumandiron work.jpeg';

// Service data structure with real content, imported images, and Amharic localization
const servicesData = {
  'block-production': {
    title: {
      en: 'Block Production',
      am: 'ብሎክ ምርት'
    },
    description: {
      en: 'Our state-of-the-art manufacturing facility produces high-strength concrete blocks designed for maximum durability. We utilize precision vibration technology to ensure uniform density and structural integrity for every project.',
      am: 'የፍልተማዊ ቴክኖሎሎች የምርት ቤችልች በስብሪያች ከፍተላማነታ ኃዋል ጥቅምናት ኮንክሪት ብሎክኖ የሚገበትን እና አንደውብነትን ለማናት የሚለናትን እና የማነኛትን ለምርትን ለማናት።'
    },
    image: blockProductionImg
  },
  'building-construction': {
    title: {
      en: 'Building Construction',
      am: 'ህንጻህ እና ግንባታ'
    },
    description: {
      en: 'We provide end-to-end building construction services. From initial groundwork and foundation laying to structural framing and final interior finishes, we build with a commitment to quality and safety.',
      am: 'ከመሰረቱተማዊ እና እርምምርት እስከ ወደስት እስከ ማናትን እስከ ማናትን እስከ ማናትን። ከመጀመሪያዊ እና መሰረቱተማዊ እስከ ወደስት እስከ ማናትን እስከ ማናትን እስከ ማናትን፣ እንደውብነትን በጥራምትን እና የጥብነት እና የፍርርትን ለምርትን እና የሚገበትን እና የማነኛትን ለማናት።'
    },
    image: buildingConstructionImg
  },
  'real-estate-supply': {
    title: {
      en: 'Real Estate Supply',
      am: 'የሪል እስቴት እና ግንባታ እቅድ'
    },
    description: {
      en: 'Integrated Real Estate and construction material supply. Access a curated portfolio of properties and a reliable supply of top-tier building materials, all managed by our expert team.',
      am: 'የተውርማዊ ብርምርትን እና የግንባታ ዕቅድ ምርትን። የንብራይኛትዎችንን እና የሚለናትን የፍርርትን ምርትን የማነኛትን ለማናት የላገኛባትን የሚያለምክናትን ቡልንዎች እና ከፍተላማነታ የግንባታ ዕቅድ ምርትን የማነኛትን ለማናት።'
    },
    image: realEstateSupplyImg
  },
  'aluminium-iron': {
    title: {
      en: 'Aluminium & Iron Work',
      am: 'አሉሚኒኒየም እና ብረብ'
    },
    description: {
      en: 'Custom-fabricated metalwork solutions. Specializing in ornamental iron designs, secure gates, and modern aluminum framing systems, combining aesthetic appeal with long-lasting strength.',
      am: 'የተለዋይ የተለዋይ የምርትን መፍለጥንጻታዎች። በመዋትረኛ የብረብ ዲማዎች ዲማዎች ፣ ደረባቶች እና ዘይማን አሉሚኒኒየም ክፈሪዎች ስርዮችን፣ የዘማሪን እና የሚለናትን አልታምናትን እና የረጋን ኃውል ጥቅምናት በማነኛትን ለምርትን እና የሚገበትን እና የማነኛትን ለማናት።'
    },
    image: aluminiumIronWorkImg
  }
};

const ServiceDetailPage = () => {
  const { t, language } = useTranslation();
  const { serviceId } = useParams<{ serviceId: string }>();
  const services = getTranslatedServices(language);
  const service = services.find(s => s.id === serviceId);
  
  // Get current service data from our dynamic structure
  const currentServiceData = servicesData[serviceId as keyof typeof servicesData];

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{backgroundColor: '#1a2e35'}}>
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">{t('serviceDetail.notFound')}</h1>
          <Link to="/services" className="text-yellow-600 hover:text-white transition-colors">
            {t('serviceDetail.backToServices')}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{backgroundColor: '#1a2e35', fontFamily: 'Inter, sans-serif'}}>
      {/* Hide only fixed side navigation on this page, keep original header */}
      <style>
        {`
          nav.fixed.left-0, nav.fixed.right-0 {
            display: none !important;
          }
          header.absolute.top-0 {
            position: relative !important;
            padding-top: 0 !important;
          }
        `}
      </style>
      {/* Centered Navigation Links */}
      <header className="px-8 py-6 relative z-50">
        <nav className="flex justify-center items-center max-w-6xl mx-auto">
          <div className="flex space-x-8">
            <Link to="/" className="text-white text-lg hover:text-yellow-600 transition-colors">{t('nav.home')}</Link>
            <Link to="/projects" className="text-white text-lg hover:text-yellow-600 transition-colors">{t('nav.projects')}</Link>
            <Link to="/portfolio" className="text-white text-lg hover:text-yellow-600 transition-colors">{t('nav.portfolio')}</Link>
            <Link to="/services" className="text-white text-lg hover:text-yellow-600 transition-colors">{t('nav.services')}</Link>
            <Link to="/about" className="text-white text-lg hover:text-yellow-600 transition-colors">{t('nav.about')}</Link>
            <Link to="/testimonials" className="text-white text-lg hover:text-yellow-600 transition-colors">{t('nav.testimonials')}</Link>
            <Link to="/contact" className="text-white text-lg hover:text-yellow-600 transition-colors">{t('nav.contact')}</Link>
          </div>
        </nav>
      </header>

      {/* Back to Services Button */}
      <div className="px-8 pt-8 relative z-50">
        <Link 
          to="/services" 
          className="inline-flex items-center text-yellow-600 hover:text-white transition-colors duration-200 font-medium relative z-50"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Services
        </Link>
      </div>

      {/* Main Content */}
      <div className="px-8 pb-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content Section */}
          <div className="flex-1 space-y-8">
            {/* Building/Real Estate Icon */}
            <div className="flex justify-center lg:justify-start">
              <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
              </svg>
            </div>

            {/* Header */}
            <h1 className="text-4xl lg:text-5xl font-bold text-white text-center lg:text-left">
              {currentServiceData?.title?.[language] || service?.name}
            </h1>

            {/* White Card with Diagonal Cut */}
            <div className="bg-white p-8 max-w-md mx-auto lg:mx-0 relative" style={{clipPath: 'polygon(0 0, calc(100% - 40px) 0, 100% 40px, 100% 100%, 0 100%)'}}>
              <h2 className="text-2xl font-bold mb-4 text-black">{currentServiceData?.title?.[language] || service?.name}</h2>
              <p className="text-gray-700 leading-relaxed">
                {currentServiceData?.description?.[language] || service?.description}
              </p>
            </div>
          </div>

          {/* Central Decorative Triangle */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="w-0 h-0 border-l-[30px] border-l-transparent border-r-[30px] border-r-transparent border-b-[50px] border-b-yellow-600 opacity-80"></div>
          </div>

          {/* Right Graphic Element */}
          <div className="flex-1 flex items-center justify-center relative">
            {/* Large Circular Composition */}
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
              {/* Outer Transparent Border */}
              <div className="absolute inset-0 rounded-full border-4 border-yellow-600 opacity-20"></div>
              
              {/* Middle Transparent Border */}
              <div className="absolute inset-4 rounded-full border-2 border-yellow-600 opacity-30"></div>
              
              {/* Main Circle */}
              <div className="absolute inset-8 rounded-full overflow-hidden flex">
                {/* C-Shape Gold Ring */}
                <div className="w-1/2 bg-yellow-600 rounded-l-full"></div>
                {/* Service Image */}
                <div className="w-1/2 rounded-r-full overflow-hidden">
                  <img 
                    src={currentServiceData?.image}
                    alt={currentServiceData?.title?.[language] || 'Service image'}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailPage;

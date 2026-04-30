import type { Language } from '../contexts/LanguageContext';

export interface TranslationDictionary {
  [key: string]: {
    en: string;
    am: string;
  };
}

export const translations: TranslationDictionary = {
  // Header
  'header.changeLanguages': {
    en: 'Change Languages',
    am: 'ቋንቋዎችን ቀይር'
  },
  'header.search': {
    en: 'Search...',
    am: 'ፈልግ...'
  },

  // Navigation
  'nav.home': {
    en: 'Home',
    am: 'ቤት'
  },
  'nav.projects': {
    en: 'projects',
    am: 'ፕሮጀክቶች'
  },
  'nav.portfolio': {
    en: 'Portfolio',
    am: 'ፖርትፎሊዮ'
  },
  'nav.services': {
    en: 'services',
    am: 'አገልግሎቶች'
  },
  'nav.team': {
    en: 'Team',
    am: 'የሥራ አመራር'
  },
  'nav.about': {
    en: 'About',
    am: 'ስለ እኛ'
  },
  'nav.testimonials': {
    en: 'Testimonials',
    am: 'ምስክርናዎች'
  },
  'nav.contact': {
    en: 'Contact',
    am: 'ያግኙን'
  },

  // Services
  'services.blockProduction': {
    en: 'Block production',
    am: 'ብሎክ ምርት'
  },
  'services.blockProduction.description': {
    en: 'High-quality concrete block manufacturing for construction projects',
    am: 'ለግንባታ ፕሮጀክቶች ከፍተኛ ጥራቫ ያለው ኮንክሪት ብሎክ ማምረቻ'
  },
  'services.buildingConstruction': {
    en: 'building and constraction',
    am: 'ህንጻ እና ግንባታ'
  },
  'services.buildingConstruction.description': {
    en: 'Complete building construction services from foundation to finishing',
    am: 'ከመሰረቻ እስከ መጨረሻ የሚደርስ ሙሉ የህንጻ ግንባታ አገልግሎቶች'
  },
  'services.realEstateSupply': {
    en: 'Real State and Construction Supply production',
    am: 'ሪል እስቴት እና ግንባታ እቅድ ምርት'
  },
  'services.realEstateSupply.description': {
    en: 'Comprehensive real estate development and construction supply solutions',
    am: 'ጠቃሚ የሪል እስቴት እድገት እና የግንባታ እቅድ መፍትሄዎች'
  },
  'services.aluminiumIron': {
    en: 'Alluminium & Iron work',
    am: 'አሉሚኒየም እና ብረት ስራ'
  },
  'services.aluminiumIron.description': {
    en: 'Custom aluminium and iron fabrication for architectural and industrial applications',
    am: 'ለአርክቴክቸራል እና ኢንዱስትሪያል ተግባራት ብጁ አሉሚኒየም እና ብረት ፋብሪኬሽን'
  },

  // Categories
  'category.educationalConstruction': {
    en: 'Educational Construction',
    am: 'የትምህርት ግንባታ'
  },
  'category.commercialConstruction': {
    en: 'Commercial Construction',
    am: 'ንግድ ግንባታ'
  },
  'category.specializedConstruction': {
    en: 'Specialized Construction',
    am: 'የተለየ ግንባታ'
  },
  'category.healthcareConstruction': {
    en: 'Healthcare Construction',
    am: 'የጤና እንክይታዊ ግንባታ'
  },

  // Home Page
  'home.welcome': {
    en: 'Welcome to Almacon',
    am: 'እንኳን ወደ አልማኮን በደህና መጡ'
  },
  'home.tagline': {
    en: 'Your trusted partner in construction, real estate, and building solutions. We deliver excellence in every project with innovation and expertise.',
    am: 'በግንባታ፣ ሪል እስቴት እና የህንጻ መፍትሄዎች የሚታመኑ አጋርዎ። በእያንዳንዱ ፕሮጀክት በንድፍን እና በልምድ አክለንነት ውጤታማነትን እናደርሳለን።'
  },
  'home.qualityConstruction': {
    en: 'Quality Construction',
    am: 'ጥራታማ ግንባታ'
  },
  'home.qualityConstruction.desc': {
    en: 'Premium building materials and construction services',
    am: 'የመጀመሪያ ደረጃ የህንጻ ቁሳቁሶች እና የግንባታ አገልግሎቶች'
  },
  'home.realEstate': {
    en: 'Real Estate',
    am: 'ሪል እስቴት'
  },
  'home.realEstate.desc': {
    en: 'Comprehensive property development and management',
    am: 'ጠቃሚ የንብረት እድገት እና አስተዳደር'
  },
  'home.expertSolutions': {
    en: 'Expert Solutions',
    am: 'የባለሙያ መፍትሄዎች'
  },
  'home.expertSolutions.desc': {
    en: 'Custom fabrication and specialized construction services',
    am: 'ብጁ ፋብሪኬሽን እና የተለየ የግንባታ አገልግሎቶች'
  },

  // Contact Form
  'contact.name': {
    en: 'Name',
    am: 'ስም'
  },
  'contact.email': {
    en: 'Email',
    am: 'ኢሜይል'
  },
  'contact.message': {
    en: 'Message',
    am: 'መ massages'
  },
  'contact.submit': {
    en: 'Submit',
    am: 'ይላኩ'
  },
  'contact.getInTouch': {
    en: 'Get in Touch',
    am: 'ይደውሉን'
  },
  'contact.address': {
    en: 'Address',
    am: 'አድራሻ'
  },
  'contact.addressDetails': {
    en: 'Bahir Dar, Amhara Region\nEthiopia',
    am: 'ባህር ዳር፣ አማራ ክልል\nኢትዮጵያ'
  },
  'contact.phone': {
    en: 'Phone',
    am: 'ስልክ'
  },
  'contact.businessHours': {
    en: 'Business Hours',
    am: 'የንግድ ሰዓቶች'
  },
  'contact.sendUsMessage': {
    en: 'Send us a Message',
    am: 'መልዕክት ይላኩልን'
  },
  'contact.namePlaceholder': {
    en: 'Your Name',
    am: 'ስምህ'
  },
  'contact.emailPlaceholder': {
    en: 'your@email.com',
    am: 'ኢሜይልህ@email.com'
  },
  'contact.messagePlaceholder': {
    en: 'Your message...',
    am: 'መ Massageህ...'
  },

  // Common
  'common.learnMore': {
    en: 'Learn More',
    am: 'ተጨማሪ ያንብቡ'
  },
  'common.viewProject': {
    en: 'View Project',
    am: 'ፕሮጀክቱን ይመልከቱ'
  },
  'common.back': {
    en: 'Back',
    am: 'ተመለስ'
  },
  'common.next': {
    en: 'Next',
    am: 'ይቀጥሉ'
  },
  'common.previous': {
    en: 'Previous',
    am: 'ቀዳሚ'
  },

  // 404 Page
  'error404.title': {
    en: 'Page Not Found',
    am: 'ገጽ አልተገኘችም'
  },
  'error404.message': {
    en: 'The page you are looking for does not exist.',
    am: 'የምወዱት ገጽ አይኖርም።'
  },
  'error404.backHome': {
    en: 'Back to Home',
    am: 'ወደ ቤት ተመለስ'
  },

  // Portfolio Projects - All 20 projects with full Amharic translations
  'portfolio.felegeabay.title': {
    en: 'Felegeabay G+2 Primary School',
    am: 'ፈለገ አባይ ጂ+2 የመጀመሪያ ትምህርት ቤት'
  },
  'portfolio.felegeabay.description': {
    en: 'Construction of a modern G+2 primary school facility serving the educational needs of the local community. This project involved comprehensive building construction including classrooms, administrative offices, and supporting facilities. The school was designed to accommodate a large number of students with modern educational infrastructure and safety features. Our team executed the project with attention to quality standards and timely delivery, ensuring the facility meets all educational requirements and provides a conducive learning environment for students.',
    am: 'የአካባቢው ማህበረሰብ የትምህርት ፍላጎቶችን የሚያሟላ ዘመናዊ ጂ+2 የመጀመሪያ ትምህርት ቤት ግንባታ። ይህ ፕሮጀክት ክፍሎች ቤቶች፣ አስተዳዳሪ ቢሮዎች እና የመርዛብ አቅርቦቶችን ጨምሮ የሚሸፍን ጠቃሚ የህንጻ ግንባታ ያካትታል። ትምህርቱ ቤቱ በከፍተኛ የትምህርት አውታረ መረቃ እና የደህንነት ገጽቶች ብዙ ተማማኪዎችን ለመቀበድ ተዘጋጅቷል። ቡድናችን ይህንን ፕሮጀክት በጥራታማ ግንባታ እና በትክክለኛው ጊዜ መጠናቀቅ ትኩረት በመስጠት በተሳካ ሁኔታ አደረሰው፣ ትምህርቱ ቤቱ ሁሉንም የትምህርት ማሟያዎችን እና ተማማኪዎች ለመማር የሚያስችል አነስተኛ አካባቢን እንደሚያሟላ አረጋግጟል።'
  },
  'portfolio.azezo.title': {
    en: 'Azezo General Secondary & Preparatory School',
    am: 'አዜዞ የአጠቃላይ ሁለተኛ ደረጃ እና የተማማኪ ትምህርት ቤት'
  },
  'portfolio.azezo.description': {
    en: 'A comprehensive secondary and preparatory school project designed to provide quality education for students preparing for higher education. The facility includes modern classroom spaces, science laboratories, library facilities, and administrative spaces. Our construction team implemented advanced building techniques to ensure durability and functionality. The project was completed with attention to detail and adherence to educational building standards, providing a conducive environment for secondary education.',
    am: 'ለከፍተኛ ትምህርት የሚዘጋጁ ተማማኪዎች ጥራታማ ትምህርት ለመስጠት የተዘጋጀ ጠቃሚ ሁለተኛ ደረጃ እና የተማማኪ ትምህርት ቤት ፕሮጀክት። ትምህርቱ ቤቱ ዘመናዊ የክፍሎች ቦታዎች፣ የሳይንስ ላቦራቶሪዎች፣ የመጽሐፍ ቤት አገልግሎቶች እና የአስተዳዳሪ ቦታዎችን ያካትታል። የግንባታ ቡድናችን የሚታዘዝ የህንጻ ቴክኒኮችን ተግባራዊ አድርጓል እና ለትምህርታዊ እንቅስትሶች ተስማሚ አውታረ መረቃን አረጋግጟል። ፕሮጀክቱ በዝርዝር ትኩረት እና በትምህርታዊ የህንጻ መደብኖች ተጥሎ ተጠናቅቋል፣ ለሁለተኛ ደረጃ ትምህርት ደህና አካባቢን ይሰጣል።'
  },
  'portfolio.ayerTena.title': {
    en: 'Ayer Tena Primary School',
    am: 'አየር ቴና የመጀመሪያ ትምህርት ቤት'
  },
  'portfolio.ayerTena.description': {
    en: 'Modern primary school construction project featuring multiple classroom buildings and supporting educational facilities. This project involved comprehensive site development and building construction to create a proper learning environment for primary education. The facility includes spacious classrooms, administrative offices, and recreational areas. Our team successfully delivered this project with focus on quality construction and timely completion, ensuring the school meets all educational standards and provides a safe environment for students.',
    am: 'ብዙ ክፍሎች ቤቶች እና የተደጋጋሚ የትምህርት አቅርቦቶችን የሚያካትት ዘመናዊ የመጀመሪያ ትምህርት ቤት ግንባታ ፕሮጀክት። ይህ ፕሮጀክት ለመጀመሪያዎቹ የልጅነት ትምህርት ትክክለኛውን የመማር አካባቢ ለመፍጠር ጠቃሚ የጣቢያ እድገት እና የህንጻ ግንባታን ያካትታል። ትምህርቱ ቤቱ ተለዋዋጭ ክፍሎች ቤቶች፣ አስተዳዳሪ ቢሮዎች እና የመዝናኛ ቦታዎችን ያካትታል። ቡድናችን ይህንን ፕሮጀክት በጥራታማ ግንባታ እና በትክክለኛው ጊዜ መጠናቀቅ ትኩረት በመስጠት በተሳካ ሁኔታ አደረሰው፣ ትምህርቱ ቤቱ ሁሉንም የትምህርት ማሟያዎችን እና ተማማኪዎች ለመማር የሚያስችል አነስተኛ አካባቢን እንደሚያሟላ አረጋግጟል።'
  },
  'portfolio.fasiledes.title': {
    en: 'Fasiledes General Secondary School',
    am: 'ፋሲለደስ የአጠቃላይ ሁለተኛ ደረጃ ትምህርት ቤት'
  },
  'portfolio.fasiledes.description': {
    en: 'General secondary school construction project designed to accommodate the growing educational needs of the region. The facility features modern classroom spaces, science laboratories, and administrative facilities. Our construction team implemented quality building practices and ensured proper infrastructure for educational activities. The project was completed with attention to detail and adherence to educational building standards, providing a conducive environment for secondary education.',
    am: 'የክልሉ በሚያደግ የትምህርት ፍላጎቶችን ለመሟላት የተዘጋጀ የአጠቃላይ ሁለተኛ ደረጃ ትምህርት ቤት ግንባታ ፕሮጀክት። ትምህርቱ ቤቱ ዘመናዊ የክፍሎች ቦታዎች፣ የሳይንስ ላቦራቶሪዎች እና የአስተዳዳሪ አቅርቦቶችን ይገልጻል። የግንባታ ቡድናችን ጥራታማ የህንጻ ተግባራትን ተግባራዊ አድርጓል እና ለትምህርታዊ እንቅስትሶች ተስማሚ አውታረ መረቃን አረጋግጟል። ፕሮጀክቱ በዝርዝር ትኩረት እና በትምህርታዊ የህንጻ መደብኖች ተጥሎ ተጠናቅቋል፣ ለሁለተኛ ደረጃ ትምህርት ደህና አካባቢን ይሰጣል።'
  },
  'portfolio.debreBirhan.title': {
    en: 'Debre Birhan ADA G+4 Office Building',
    am: 'ደብረ ብርሃን ኤዲኤ ጂ+4 የቢሮ ህንጻ'
  },
  'portfolio.debreBirhan.description': {
    en: 'Modern G+4 office building construction for the Amhara Development Association, featuring contemporary design and functional office spaces. This project involved multi-story construction with advanced structural systems and modern building amenities. The building includes office spaces, meeting rooms, and supporting facilities designed for efficient administrative operations. Our team executed this complex project with precision, ensuring structural integrity and modern building standards.',
    am: 'ለአማራ ዕውቀት ማህበር ዘመናዊ ጂ+4 የቢሮ ህንጻ ግንባታ፣ የዛሬውን ዲዛይን እና ተግባራዊ የቢሮ ቦታዎችን የሚያሳይ። ይህ ፕሮጀክት በላቀ የህንጻ አካላቶች እና በዘመናዊ የህንጻ አማራጮች ብዙ አርእስት ግንባታን ያካትታል። ህንጻው የቢሮ ቦታዎች፣ የስብሰባ ክፍሎች እና የመርዛብ አቅርቦቶችን ያካትታል። ቡድናችን ይህን ውስጥ ያለውን ፕሮጀክት በትክክል አከናውነዋል፣ የህንጻ አካላዊ እኩልነትን እና የዘመናዊ የህንጻ መደብኖችን አረጋግጟል።'
  },
  'portfolio.primaryMarket.title': {
    en: 'Primary Market Center',
    am: 'ዋናው ገበያ ማእከል'
  },
  'portfolio.primaryMarket.description': {
    en: 'Large-scale market center construction project designed to facilitate commercial activities and trade in the region. This facility features modern market spaces with proper infrastructure for commercial operations. The project included comprehensive site development and building construction to create a functional market environment. Our team successfully delivered this project with focus on commercial functionality and durability, ensuring the market meets all operational requirements.',
    am: 'በክልሉ ውስጥ የንግድ እንቅስትሶችን እና ንግድን ለማስቻል የተዘጋጀ ትልቅ የገበያ ማእከል ግንባታ ፕሮጀክት። ይህ ተቋም ለንግድ ክንውኖች ተስማሚ የሆነ አውታረ መረቃ ያለው ዘመናዊ የገበያ ቦታዎችን ይገልጻል። ፕሮጀክቱ ተግባራዊ የገበያ አካባቢ ለመፍጠር ጠቃሚ የጣቢያ እድገት እና የህንጻ ግንባታን ያካትታል። ቡድናችን ይህንን ፕሮጀክት በንግዳዊ ተግባራዊነት እና ቆይታ ትኩረት በመስጠት በተሳካ ሁኔታ አደረሰው፣ ገበያው ሁሉንም የክንውን ማሟያዎችን እንደሚያሟላ አረጋግጟል።'
  },
  'portfolio.misrakGionSchool.title': {
    en: 'Misrak Gion Pre Primary school',
    am: 'ምስራቅ ግዮን የቀድሞ የመጀመሪያ ትምህርት ቤት'
  },
  'portfolio.misrakGionSchool.description': {
    en: 'Pre-primary school construction project designed to provide early childhood education facilities. The building features child-friendly design elements and modern educational infrastructure suitable for young learners. Our construction team implemented safety features and age-appropriate facilities throughout the project. The school was completed with attention to early childhood education requirements, providing a safe and nurturing environment for young students.',
    am: 'ለመጀመሪያዎቹ የልጅነት ትምህርት አገልግሎቶች ለመስጠት የተዘጋጀ የቀድሞ የመጀመሪያ ትምህርት ቤት ግንባታ ፕሮጀክት። ህንጻው ለልጆች የሚስማማ ዲዛይን አካላቶች እና ለትንሹ ተማማኪዎች ተስማሚ የሆኑ ዘመናዊ የትምህርት አውታረ መረቃን ይገልጻል። የግንባታ ቡድናችን በፕሮጀክቱ ሙሉ የደህንነት ገጽቶችን እና በእድሜ ተስማሚ አቅርቦቶችን ተግባራዊ አድርጓል። ትምህርቱ ቤቱ በመጀመሪያዎቹ የልጅነት ትምህርት ማሟያዎች ትኩረት በመስጠት ተጠናቅቆ ለትንሹ ተማማኪዎች ደህና እና የሚያሳድግ አካባቢን ይሰጣል።'
  },
  'portfolio.misrakBelesa.title': {
    en: 'Misrak Belesa Guhala Highschool',
    am: 'ምስራቅ በለሳ ጉሃላ የሁለተኛ ደረጃ ትምህርት ቤት'
  },
  'portfolio.misrakBelesa.description': {
    en: 'Comprehensive high school construction project featuring modern educational facilities and infrastructure. This project involved large-scale construction including classroom buildings, science laboratories, library facilities, and sports areas. Our team executed this complex project with advanced construction techniques and quality materials. The facility was designed to meet high school education standards and provide a complete learning environment for secondary education.',
    am: 'ዘመናዊ የትምህርት አቅርቦቶችን እና አውታረ መረቃን የሚያሳይ ጠቃሚ የሁለተኛ ደረጃ ትምህርት ቤት ግንባታ ፕሮጀክት። ይህ ፕሮጀክት ክፍሎች ቤቶች፣ የሳይንስ ላቦራቶሪዎች፣ የመጽሐፍ ቤት አገልግሎቶች እና የስፖርት ቦታዎችን ጨምሮ ትልቅ የሆነ ግንባታን ያካትታል። ቡድናችን ይህን ውስጥ ያለውን ፕሮጀክት በላቀ የግንባታ ቴክኒኮች እና በጥራት ያለው ቁሳቁሶች አከናውነዋል። ተቋሙ ለሁለተኛ ደረጃ ትምህርት መደብኖችን ለማሟላት እና ለሁለተኛ ደረጃ ትምህርት ሙሉ የመማር አካባቢን ለመስጠት ተዘጋጅቷል።'
  },
  'portfolio.finoteselam.title': {
    en: 'Finoteselam Model Secondary School Aluminium and Steel work',
    am: 'ፊኖተሰላም ንዑስ ሁለተኛ ደረጃ ትምህርት ቤት አሉሚኒየም እና ብረት ስራ'
  },
  'portfolio.finoteselam.description': {
    en: 'Specialized aluminium and steel work project for the Finoteselam Model Secondary School, involving fabrication and installation of metal structures and components. This project required precision metalwork and specialized construction techniques for educational facility enhancement. Our team implemented advanced metal fabrication processes and ensured proper installation of all aluminium and steel components. The project was completed with focus on durability and functionality, providing modern infrastructure for the educational facility.',
    am: 'ለፊኖተሰላም ንዑስ ሁለተኛ ደረጃ ትምህርት ቤት የተለየ አሉሚኒየም እና ብረት ስራ ፕሮጀክት፣ የብረት አካላቶችን እና ክፍሎችን ፋብሪኬሽን እና ጭነትን ያካትታል። ይህ ፕሮጀክት ለትምህርታዊ ተቋም ማሻሻል የተለየ የብረት ስራ እና የተለየ የግንባታ ቴክኒኮችን ይፈልጋል። ቡድናችን የላቀ የብረት ፋብሪኬሽን ሂደቶችን ተግባራዊ አድርጓል እና ሁሉንም የአሉሚኒየም እና የብረት ክፍሎችን በትክክል መጭነትን አረጋግጟል። ፕሮጀክቱ በቆይታ እና በተግባራዊነት ትኩረት በመስጠት ተጠናቅቋል፣ ለትምህርታዊ ተቋም ዘመናዊ አውታረ መረቃን ይሰጣል።'
  },
  'portfolio.almacoOffice.title': {
    en: 'ALMACON Main Office',
    am: 'አልማኮን ዋና ቢሮ'
  },
  'portfolio.almacoOffice.description': {
    en: 'Main office building construction for ALMACON, featuring modern corporate design and functional office spaces. This project represents our commitment to quality construction and architectural excellence. The building includes administrative offices, meeting spaces, and supporting facilities designed for efficient corporate operations. Our team executed this project with attention to detail and modern construction standards, creating a professional environment that reflects our company\'s values and capabilities.',
    am: 'ለአልማኮን ዋና የቢሮ ህንጻ ግንባታ፣ ዘመናዊ የኩባንያ ዲዛይን እና ተግባራዊ የቢሮ ቦታዎችን የሚያሳይ። ይህ ፕሮጀክት ለጥራታማ ግንባታ እና ለአርክቴክቸራል እኩልነት ተስፋችንን ይወክላል። ህንጻው ለውጤታማ የኩባንያ ክንውኖች የተዘጋጁ የአስተዳዳሪ ቢሮዎች፣ የስብሰባ ቦታዎች እና የመርዛብ አቅርቦቶችን ያካትታል። ቡድናችን ይህንን ፕሮጀክት በዝርዝር ትኩረት እና በዘመናዊ የግንባታ መደብኖች አከናውነዋል፣ የኩባንያችንን እሴቶችን እና እውቀቶችን የሚያንጸባርቅ ሙያዊ አካባቢን ይፍጠራል።'
  },
  'portfolio.misrakGionOffice.title': {
    en: 'Misrak Gion G+2 Office Building',
    am: 'ምስራቅ ግዮን ጂ+2 የቢሮ ህንጻ'
  },
  'portfolio.misrakGionOffice.description': {
    en: 'Modern G+2 office building construction for Misrak Gion Amhara Development Association, featuring contemporary design and functional office spaces. This project involved comprehensive construction including office spaces, meeting rooms, and supporting facilities. The building was designed to accommodate administrative operations with modern infrastructure and safety features.',
    am: 'ለምስራቅ ግዮን አማራ ዕውቀት ማህበር ዘመናዊ ጂ+2 የቢሮ ህንጻ ግንባታ፣ የዛሬውን ዲዛይን እና ተግባራዊ የቢሮ ቦታዎችን የሚያሳይ። ይህ ፕሮጀክት የቢሮ ቦታዎች፣ የስብሰባ ክፍሎች እና የመርዛብ አቅርቦቶችን ጨምሮ ጠቃሚ ግንባታን ያካትታል። ህንጻው ለአስተዳዳሪ ክንውኖች በዘመናዊ አውታረ መረቃ እና በደህንነት ገጽቶች ለመቀበድ ተዘጋጅቷል።'
  },
  'portfolio.estieHospital.title': {
    en: 'Estie General Hospital',
    am: 'ኤስቲ የአጠቃላይ ሆስፒታል'
  },
  'portfolio.estieHospital.description': {
    en: 'Comprehensive general hospital construction project featuring modern medical facilities and healthcare infrastructure. This project involved construction of hospital buildings with patient wards, treatment rooms, surgical facilities, and administrative spaces. The hospital was designed to provide quality healthcare services with modern medical equipment and patient care facilities.',
    am: 'ዘመናዊ የሕክምና አቅርቦቶችን እና የጤና አውታረ መረቃን የሚያሳይ ጠቃሚ የአጠቃላይ ሆስፒታል ግንባታ ፕሮጀክት። ይህ ፕሮጀክት የሰውነት መጋቢያ ክፍሎች፣ የህመም ክፍሎች፣ የቆዳዮሽ አቅርቦቶች እና የአስተዳዳሪ ቦታዎችን ያሉትን የሆስፒታል ህንጻዎችን ግንባታን ያካትታል። ሆስፒታሉ በዘመናዊ የሕክምና አቅርቦቶች እና በሰውነት እንክይታ አቅርቦቶች ጥራታማ የጤና አገልግሎቶችን ለመስጠት ተዘጋጅቷል።'
  },
  'portfolio.hamusit.title': {
    en: 'Hamusit Primary School',
    am: 'ሃሙሲት የመጀመሪያ ትምህርት ቤት'
  },
  'portfolio.hamusit.description': {
    en: 'Primary school construction project featuring modern educational facilities and infrastructure. This project involved comprehensive construction including classrooms, administrative offices, and supporting educational facilities. The school was designed to provide quality primary education with proper learning environments and safety features for students.',
    am: 'ዘመናዊ የትምህርት አቅርቦቶችን እና አውታረ መረቃን የሚያሳይ የመጀመሪያ ትምህርት ቤት ግንባታ ፕሮጀክት። ይህ ፕሮጀክት ክፍሎች፣ አስተዳዳሪ ቢሮዎች እና የተደጋጋሚ የትምህርት አቅርቦቶችን ጨምሮ ጠቃሚ ግንባታን ያካትታል። ትምህርቱ ቤቱ ለተማማኪዎች ትክክለኛውን የመማር አካባቢ እና የደህንነት ገጽቶችን በመስጠት ጥራታማ የመጀመሪያ ትምህርትን ለመስጠት ተዘጋጅቷል።'
  },
  'portfolio.agrita1.title': {
    en: 'Agrita Primary School',
    am: 'አግሪታ የመጀመሪያ ትምህርት ቤት'
  },
  'portfolio.agrita1.description': {
    en: 'Primary school construction project featuring modern educational facilities designed to serve the local community. This project involved comprehensive construction including classroom buildings, administrative offices, and supporting educational infrastructure. The school was built to provide quality primary education with proper learning environments and safety features.',
    am: 'ለአካባቢው ማህበረሰብ ለመስጠት የተዘጋጀ ዘመናዊ የትምህርት አቅርቦቶችን የሚያሳይ የመጀመሪያ ትምህርት ቤት ግንባታ ፕሮጀክት። ይህ ፕሮጀክት የክፍሎች ህንጻዎች፣ የአስተዳዳሪ ቢሮዎች እና የተደጋጋሚ የትምህርት አውታረ መረቃን ጨምሮ ጠቃሚ ግንባታን ያካትታል። ትምህርቱ ቤቱ ትክክለኛውን የመማር አካባቢ እና የደህንነት ገጽቶችን በመስጠት ጥራታማ የመጀመሪያ ትምህርትን ለመስጠት ተሰርቶል።'
  },
  'portfolio.agrita2.title': {
    en: 'Agrita Primary School',
    am: 'አግሪታ የመጀመሪያ ትምህርት ቤት'
  },
  'portfolio.agrita2.description': {
    en: 'Second phase of Agrita Primary School construction project expanding educational facilities to accommodate growing student population. This project involved additional classroom construction, facility upgrades, and infrastructure improvements to enhance the learning environment.',
    am: 'የአግሪታ የመጀመሪያ ትምህርት ቤት ግንባታ ፕሮጀክት ሁለተኛ ደረጃ የትምህርት አቅርቦቶችን ለሚያድገው ተማማኪ ብዛት ለመቀበድ በማራዘም። ይህ ፕሮጀክት ተጨማሪ የክፍሎች ግንባታ፣ የተቋም ማሻሻልና የመማር አካባቢን ለማሻሻል የአውታረ መረቃ ማሻሻልን ያካትታል።'
  },
  'portfolio.gashena1.title': {
    en: 'Gashena Primary School',
    am: 'ጋሸና የመጀመሪያ ትምህርት ቤት'
  },
  'portfolio.gashena1.description': {
    en: 'Primary school construction project featuring modern educational facilities for the Gashena community. This project involved comprehensive construction including classroom buildings, administrative offices, and supporting educational infrastructure designed to provide quality primary education.',
    am: 'ለጋሸና ማህበረሰብ ዘመናዊ የትምህርት አቅርቦቶችን የሚያሳይ የመጀመሪያ ትምህርት ቤት ግንባታ ፕሮጀክት። ይህ ፕሮጀክት የክፍሎች ህንጻዎች፣ የአስተዳዳሪ ቢሮዎች እና ጥራታማ የመጀመሪያ ትምህርትን ለመስጠት የተዘጋጁ የተደጋጋሚ የትምህርት አውታረ መረቃን ጨምሮ ጠቃሚ ግንባታን ያካትታል።'
  },
  'portfolio.gashena2.title': {
    en: 'Gashena Primary School',
    am: 'ጋሸና የመጀመሪያ ትምህርት ቤት'
  },
  'portfolio.gashena2.description': {
    en: 'Second phase of Gashena Primary School construction project expanding educational facilities to better serve the local community. This project involved additional construction work and facility improvements to enhance the educational infrastructure and learning environment.',
    am: 'የጋሸና የመጀመሪያ ትምህርት ቤት ግንባታ ፕሮጀክት ሁለተኛ ደረጃ የትምህርት አቅርቦቶችን ለአካባቢው ማህበረሰብ ደግሞ የተሻለ አገልግሎት ለመስጠት በማራዘም። ይህ ፕሮጀክት ተጨማሪ የግንባታ ስራ እና የተቋም ማሻሻልን ያካትታል።'
  },
  'portfolio.lalibela1.title': {
    en: 'Lalibela G+2 Primary School',
    am: 'ላሊበላ ጂ+2 የመጀመሪያ ትምህርት ቤት'
  },
  'portfolio.lalibela1.description': {
    en: 'G+2 primary school construction project in the historic town of Lalibela, featuring modern educational facilities with two-story classroom buildings. This project involved comprehensive construction including classrooms, administrative offices, and supporting infrastructure designed to serve the local community.',
    am: 'በታሪካዊ ከተማዋ ላሊበላ ውስጥ ጂ+2 የመጀመሪያ ትምህርት ቤት ግንባታ ፕሮጀክት፣ በሁለት አርእስት የክፍሎች ህንጻዎች ያለው ዘመናዊ የትምህርት አቅርቦቶችን የሚያሳይ። ይህ ፕሮጀክት ክፍሎች፣ የአስተዳዳሪ ቢሮዎች እና ለአካባቢው ማህበረሰብ ለመስጠት የተዘጋጁ የተደጋጋሚ አውታረ መረቃን ጨምሮ ጠቃሚ ግንባታን ያካትታል።'
  },
  'portfolio.lalibela2.title': {
    en: 'Lalibela G+2 Primary School',
    am: 'ላሊበላ ጂ+2 የመጀመሪያ ትምህርት ቤት'
  },
  'portfolio.lalibela2.description': {
    en: 'Second phase of Lalibela G+2 Primary School construction project expanding educational facilities in this historic town. This project involved additional construction work and facility improvements to enhance the learning environment and accommodate more students.',
    am: 'በዚህ ታሪካዊ ከተማ ውስጥ የላሊበላ ጂ+2 የመጀመሪያ ትምህርት ቤት ግንባታ ፕሮጀክት ሁለተኛ ደረጃ የትምህርት አቅርቦቶችን በማራዘም። ይህ ፕሮጀክት የመማር አካባቢን ለማሻሻል እና ተጨማሪ ተማማኪዎችን ለመቀበድ ተጨማሪ የግንባታ ስራ እና የተቋም ማሻሻልን ያካትታል።'
  },
  'portfolio.kulmesk.title': {
    en: 'Kulmesk Primary School',
    am: 'ኩልሜስክ የመጀመሪያ ትምህርት ቤት'
  },
  'portfolio.kulmesk.description': {
    en: 'Primary school construction project in Kulmesk featuring modern educational facilities and infrastructure. This project involved comprehensive construction including classroom buildings, administrative offices, and supporting facilities designed to provide quality primary education to the local community.',
    am: 'በኩልሜስክ ዘመናዊ የትምህርት አቅርቦቶችን እና አውታረ መረቃን የሚያሳይ የመጀመሪያ ትምህርት ቤት ግንባታ ፕሮጀክት። ይህ ፕሮጀክት የክፍሎች ህንጻዎች፣ የአስተዳዳሪ ቢሮዎች እና ለአካባቢው ማህበረሰብ ጥራታማ የመጀመሪያ ትምህርትን ለመስጠት የተዘጋጁ የመርዛብ አቅርቦቶችን ጨምሮ ጠቃሚ ግንባታን ያካትታል።'
  },

  // Service Details - Full Amharic translations with feature bullets
  'services.blockProduction.features': {
    en: '• High-strength concrete blocks\n• Precision manufacturing\n• Consistent quality control\n• Custom sizes available',
    am: '• ከፍተኛ ጥንካሬ ያለው ኮንክሪት ብሎኮች\n• ትክክለኛ ማምረቻ\n• የሚዛመድ ጥራት ቁጥጥር\n• ብጁ መጠኖች ይገኛሉ'
  },
  'services.buildingConstruction.features': {
    en: '• Complete project management\n• Modern building techniques\n• Sustainable construction\n• On-time delivery guarantee',
    am: '• ሙሉ የፕሮጀክት አስተዳደር\n• ዘመናዊ የህንጻ ቴክኒኮች\n• የሚታወስ ግንባታ\n• በዚያን ጊዜ የመድረስ ዋስትና'
  },
  'services.realEstateSupply.features': {
    en: '• Property development expertise\n• Construction materials supply\n• Project consulting services\n• Market analysis support',
    am: '• የንብረት እድገት ብልህት\n• የግንባታ ቁሳቁሶች እቅድ\n• የፕሮጀክት አማካሪ አገልግሎቶች\n• የገበያ ትንታኔ ድጋፍ'
  },
  'services.aluminiumIron.features': {
    en: '• Custom metal fabrication\n• Architectural metalwork\n• Industrial solutions\n• Quality craftsmanship',
    am: '• ብጁ የብረት ፋብሪኬሽን\n• የአርክቴክቸራል የብረት ስራ\n• የኢንዱስትሪያል መፍትሄዎች\n• ጥራታማ የስራ እሩራኝነት'
  },

  // UI Extras
  'ui.backToPortfolio': {
    en: 'Back to Portfolio',
    am: 'ወደ ፖርትፎሊዮ ተመለስ'
  },
  'ui.readMore': {
    en: 'Read More',
    am: 'ተጨማሪ ያንብቡ'
  },
  'ui.sendMessage': {
    en: 'Send Message',
    am: 'መ massages ይላኩ'
  },
  'ui.viewDetails': {
    en: 'View Details',
    am: 'ዝርዝሮችን ይመልከቱ'
  },
  'ui.projectDetails': {
    en: 'Project Details',
    am: 'የፕሮጀክት ዝርዝሮች'
  },
  'ui.client': {
    en: 'Client',
    am: 'ደንበኛ'
  },
  'ui.contractValue': {
    en: 'Contract Value',
    am: 'የስምህርተ ዋጋ'
  },
  'ui.contractPeriod': {
    en: 'Contract Period',
    am: 'የስምህርተ ጊዜ'
  },
  'ui.completionYear': {
    en: 'Completion Year',
    am: 'የመጨረሻ ዓመት'
  },
  'ui.location': {
    en: 'Location',
    am: 'አካባቢ'
  },
  'ui.whyChooseAlmacon': {
    en: 'Why Choose Almacon?',
    am: 'አልማኮንን ለምን ይምረጡ?'
  },
  'ui.yearsExperience': {
    en: 'Years Experience',
    am: 'የሥልጣን ዓመታት'
  },
  'ui.projectsCompleted': {
    en: 'Projects Completed',
    am: 'የተጠናቀቁ ፕሮጀክቶች'
  },
  'ui.clientSatisfaction': {
    en: 'Client Satisfaction',
    am: 'የደንበኛ ደስታ'
  },
  'ui.getInTouch': {
    en: 'Get in Touch',
    am: 'እውቂያ ይዙ'
  },
  'ui.sendUsMessage': {
    en: 'Send us a Message',
    am: 'ለእኛ መ massages ይላኩ'
  },
  'ui.ourServices': {
    en: 'Our Services',
    am: 'አገልግሎቶቻችን'
  },
  'ui.businessHours': {
    en: 'Business Hours',
    am: 'የንግድ ሰዓቶች'
  },
  'ui.address': {
    en: 'Address',
    am: 'አድራሻ'
  },
  'ui.phone': {
    en: 'Phone',
    am: 'ስልክ'
  },
  'ui.email': {
    en: 'Email',
    am: 'ኢሜይል'
  },

  // Testimonials
  'testimonials.title': {
    en: 'Voices of Trust',
    am: 'የእምነት ድምፆች'
  },
  'testimonials.viewAll': {
    en: 'View All Testimonials',
    am: 'ሁሉንም አስተያየቶች ይመልከቱ'
  },
  'testimonials.client1.name': {
    en: 'Ato Tsedalu Alemu',
    am: 'አቶ ጸዳሉ አለሙ'
  },
  'testimonials.client1.role': {
    en: 'Manager, Bahir Dar Addis Alem Hospital',
    am: 'አስተዳዳሪ፣ ባህር ዳር አዲስ አለም ሆስፒታል'
  },
  'testimonials.client1.text': {
    en: 'Almacon quickly started work before we even made an advanced payment. They are a company that completes projects on time and does not compromise on quality.',
    am: 'አልማኮን ከየኛው የመጀመሪያ ክፍያ እንዳደረገው በፍጹም ፈጣን ተነስቶ ስራውን ጀመረ። በጊዜ ፕሮጀክቶችን የሚያጠናቅቅ እና በጥራት የሚያሳልፍ ያለመሆን ኩባንያ ነው።'
  },
  'testimonials.client2.name': {
    en: 'Ato Melkamu Terefe',
    am: 'አቶ መልካሙ ተረፈ'
  },
  'testimonials.client2.role': {
    en: 'Coordinator, Excellence Design & Supervision Corp.',
    am: 'አማካሪ፣ ኤክስለንስ ዲዛይን እና ስርፖርቲሽን ኩባንያ'
  },
  'testimonials.client2.text': {
    en: 'From a quality, time, and budget perspective, Almacon was highly effective in delivering the Bahir Dar Market Center.',
    am: 'ከጥራት፣ ጊዜ እና በጀት አንጻፍ ጥናቓን በባህር ዳር ገበያ ማእከል ማስተላለፍ ላይ አልማኮን በጣም ውጤታማ ነበረ።'
  },
  'testimonials.client3.name': {
    en: 'Ato Nega Yihune',
    am: 'አቶ ነጋ ይሁነ'
  },
  'testimonials.client3.role': {
    en: 'Deputy Manager, Abay Printing & Paper Factory',
    am: 'የአባይ ህትመት እና ወረቀት ፋብሪካ ምክትል አስተዳዳሪ'
  },
  'testimonials.client3.text': {
    en: 'It has been over 10 years since our factory shed was completed... it has been serving properly without needing any repairs. Reliable quality.',
    am: 'የፋብሪካችን መተላለፊያ ከተጠናቀቀ በኋላ 10 ዓመታት ተሞል...ምንም የማስተካከያ እርማቶች ሳይፈልግ በአግባቡ ይሰራል። የሚታመን ጥራት።'
  },
  'testimonials.client4.name': {
    en: 'Ato Astewale Abera',
    am: 'አቶ አስተዋለ አበራ'
  },
  'testimonials.client4.role': {
    en: 'Foreman, Amhara Rural Roads Construction Agency',
    am: 'ፎርማን፣ የአማራ የገጠራ መንገድ ግንባታ ኤጀንሲ'
  },
  'testimonials.client4.text': {
    en: 'Almacon is a symbol of integrity. Their block products are not just construction materials; they maintain their curing time properly and are made with quality inputs. Almacon is a symbol of quality extending from cities to rural villages.',
    am: 'አልማኮን የታማኝነት ምልክት ነው። የብሎክ ምርቶቻቸው ብቻ የግንባታ ቁሳቁሶች አይደሉም፡ የማየድ ጊዜን በእዩልነት ይጠብቃሉ እና በጥራት ያለው ቁሳቁስ ይሰራሉ። አልማኮን ከከተማዎች ወደ ገጠራ አካባቢዎች የሚዘልቅ የጥራት ምልክት ነው።'
  },

  // Service Detail Page
  'serviceDetail.notFound': {
    en: 'Service Not Found',
    am: 'አገልግሎቱ አልተገኘችም'
  },
  'serviceDetail.backToServices': {
    en: 'Back to Services',
    am: 'ወደ አገልግሎቶች ተመለስ'
  },
  'serviceDetail.awachGuzo': {
    en: 'Awach Guzo',
    am: 'አዋች ጉዞ'
  },
  'serviceDetail.lorem1': {
    en: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    am: 'ሎረም ኢፕሰም ዶሎር ሲት አሜት፣ ኮንሴክተቱር አዲፒሲሲንግ ኤሊት። ሴድ ዶ ኢዩስሞድ ቴምፖር ኢንዲዱንቱት ዩት ላቦሬ ኤት ዶሎሬ ማግና አሊኩዋ። ዩት ኢኒም አድ ሚኒም ቬኒያም፣ ኩይስ ኖስትሩድ ኤክሰርሲታቲዮን ኡላም ላቦሮር ኒሲ ኡት አሊኩፕ ኤክ ኮምሞዶ ኮንሴኩዋት።'
  },
  'serviceDetail.lorem2': {
    en: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    am: 'ዱዊስ አውቴ ኢሩሬ ዶሎር ኢን ረፕረህንደሪት ኢን ቮሉፕታቴ ቬሊት ኤሴ ሲለም ዶሎሬ ኤው ፉጊያት ኑላ ፓሪያቱር። ኤክስፕቱር ሲንት ኦካይካት ኩፒዳታት ኖን ፕሮዲደንት፣ ሰንት ኢን ኩልፓ ኩይ ኦፊሲያ ደሰሩንት ሞሊሊት አኒም ኢድ ኤስት ላቦሩም።'
  },
  'serviceDetail.lorem3': {
    en: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
    am: 'ሴድ ዩት ፔርስፒቲያቲስ ኡንዴ ኦምኒስ ኢስተ ናቱስ ኤሮር ሲት ቮሉፕታቴም አኩሳቲያንት ዶሎረምኩው ላውዲንቲየም፣ ቶታም ረም አፐሪያም፣ ኢኩውን ኢፕሳ ኩዬ አብ ኢሎ ኢንቬንቶሬ ቬሪታቲስ ኤት ኩዋሲ አርኪቴክቶ ቤያታቪ ቪታዲ ዲክታ ሰንት ኤክስፕሊካቦ።'
  },

  // Portfolio Pages
  'portfolio.title': {
    en: 'Portfolio',
    am: 'ፖርትፎሊዮ'
  },
  'portfolio.description': {
    en: 'Explore our completed projects showcasing our expertise in construction, educational facilities, and commercial developments across Ethiopia.',
    am: 'የተጠናቁንን ፕሮጀክቶቻችንን ይመለኩ፣ በግንባታ፣ በትምህርት ትምህርቶች እና በንግድዊ እድገቶች ውስጥ በኢትዮጵያ ያለውን የእኛንን እውቀትን የሚያሳዩ።'
  },
  'portfolio.viewDetails': {
    en: 'View Details',
    am: 'ዝርዝሮችን ይመልከቱ'
  },
  'portfolio.client': {
    en: 'Client',
    am: 'ደንበኛ'
  },
  'portfolio.value': {
    en: 'Value',
    am: 'ዋጋ'
  },
  'portfolio.noProjects': {
    en: 'No projects available at the moment.',
    am: 'በአሁኑኑ ጊዜ ምንጣኔ የለለ ፕሮጀክቶች የሉሉ።'
  },

  // Projects Page
  'projects.title': {
    en: 'Projects',
    am: 'ፕሮጀክቶች'
  },
  'projects.description': {
    en: 'Explore our portfolio of completed projects and see the quality and craftsmanship we bring to every construction and real estate development.',
    am: 'የተጠናቁንን ፕሮጀክቶቻችንን ይመለኩ፣ ለእያኛው ግንባታ እና የንብረት እድገት የምንጣኔንን ጥራትንና እሩራኝነትን ይዩሉ።'
  },
  'projects.projectAlpha': {
    en: 'Project Alpha',
    am: 'ፕሮጀክት አልፋ'
  },
  'projects.projectAlphaDesc': {
    en: 'Commercial complex development',
    am: 'የንግድዊ ውስጥ ልማሻ'
  },
  'projects.projectBeta': {
    en: 'Project Beta',
    am: 'ፕሮጀክት ቤታ'
  },
  'projects.projectBetaDesc': {
    en: 'Residential construction',
    am: 'የመኖር ግንባታ'
  },
  'projects.projectGamma': {
    en: 'Project Gamma',
    am: 'ፕሮጀክት ጋማ'
  },
  'projects.projectGammaDesc': {
    en: 'Industrial facility',
    am: 'የኢንዱስትሪያል ተቋማራ'
  },

  // Portfolio Detail Page
  'portfolioDetail.notFound': {
    en: 'Project Not Found',
    am: 'ፕሮጀክቱ አልተገኘም'
  },
  'portfolioDetail.notFoundText': {
    en: 'The project you\'re looking for doesn\'t exist.',
    am: 'የምትፈልጉት ፕሮጀክት አይኖርም።'
  },
  'portfolioDetail.backToPortfolio': {
    en: 'Back to Portfolio',
    am: 'ወደ ፖርትፎሊዮ ተመለስ'
  },
  'portfolioDetail.projectDetails': {
    en: 'Project Details',
    am: 'የፕሮጀክት ዝርዝሮች'
  },
  'portfolioDetail.client': {
    en: 'Client',
    am: 'ደንበኛ'
  },
  'portfolioDetail.contractValue': {
    en: 'Contract Value',
    am: 'የስምህርተ ዋጋ'
  },
  'portfolioDetail.contractPeriod': {
    en: 'Contract Period',
    am: 'የስምህርተ ጊዜ'
  },
  'portfolioDetail.completionYear': {
    en: 'Completion Year',
    am: 'የመጨረሻ ዓመት'
  },
  'portfolioDetail.projectDescription': {
    en: 'Project Description',
    am: 'የፕሮጀክት መግለጫ'
  },
  'portfolioDetail.commitmentText': {
    en: 'This project demonstrates our commitment to quality construction and excellence in project delivery.',
    am: 'ይህ ፕሮጀክት የእኛን በጥራት የሚገኘ ግንባታ እና በፕሮጀክት አስረካቢ ውስጥ ያለውን የአስደናቂ እውቀትን ያሳያል።'
  },
  'portfolioDetail.viewMoreProjects': {
    en: 'View More Projects',
    am: 'ተጨማሪ ፕሮጀክቶችን ይመልከቱ'
  },
  'portfolioDetail.location': {
    en: 'Location',
    am: 'አካባቢ'
  },

  // About Page
  'about.title': {
    en: 'About Almacon',
    am: 'ስለ አልማኮን'
  },
  'about.description': {
    en: 'ALMACON was established by the Amhara Development Association (ALMA) as a revenue-generating entity. We operate as a Grade-1 level contractor focusing on construction, real estate development, and the production and supply of construction materials. Our profits directly contribute to ALMA\'s social development programs in education, health, and job creation.',
    am: 'አልማኮን በአማራ ዕውቀት ማህበር (ኤልማ) የገቢ የማምረት አካል ተብሎ ተመሰረተ። እኛ በግንባታ፣ በሪል እስቴት እድገት እና በግንባታ ቁሳቁሶች ምርትና እቅድ ላይ የምንሰራ የመጀመሪያ ደረጃ ኮንትራክተር ነን። የእኛ ትርፍ በቀጥታ ለኤልማ በትምህርት፣ በጤና እና በስራ ፍጥረት ማህበራዊ ፕሮግራሞችን ይደግፋል።'
  },
  'about.ourMission': {
    en: 'Our Mission',
    am: 'ተልዕኮችን'
  },
  'about.missionText': {
    en: 'Provide quality, affordable, and timely construction, real estate, and material supply services.',
    am: 'ጥራት ያለው ፣ ደረጃውን የጠበቀ እና አቅምን ያገናዘበ ግንባታ፣ ሪል እሥቴት፣ የግንባታ መገልገያዎችን ጨምሮ በሰአቱ ለደንበኞቻችን ማስረከብ።'
  },
  'about.ourVision': {
    en: 'Our Vision',
    am: 'ራዕይ'
  },
  'about.visionText': {
    en: 'We build and serve to see smiles of satisfaction through our quality services.',
    am: 'ጥራት ባለዉ ግንባታችን እና አገልግሎታችን የደንበኞቻችንን በዕርካታ የተሞላ ፈገግታን ማየት፡፡'
  },
  'about.established': {
    en: 'Established: 2005 E.C. (2012/2013 G.C.)',
    am: 'የተመሰረተው፡ 2005 ዓ.ም. (2012/2013 ዓ.ለ.ም.)'
  },
  'about.slogan': {
    en: 'Building Quality, Impacting Thousands!',
    am: 'በጥራት ለሺህዎች!'
  },
  'about.coreValues': {
    en: 'Core Values',
    am: 'እሴቶች'
  },
  'about.coreValues.list': {
    en: 'Integrity • Innovation • Quality • Customer-Centricity • Sustainability • Team Collaboration',
    am: 'ታማኝነት • ፈጠራ • ጥራት • ደንበኛ ተኮር መሆን • ዘላቂነት • የቡድን ስራ'
  },

  // Expanded About Us Content
  'about.ourStory': {
    en: 'Our Journey of Resilience and Reform',
    am: 'የተቃላንና የማሻሻል ጉዞቻችን'
  },
  'about.ourStory.content': {
    en: 'Established in late 2005 E.C., ALMACON quickly built a reputation for delivering quality construction projects. Though we faced operational and financial challenges between 2009 and 2015 E.C., we embraced a massive reform starting in 2016 E.C. Today, driven by a new 5-year strategic plan, ALMACON has emerged stronger than ever—a modernized, highly profitable, and competitive force in industry.',
    am: 'በ2005 ዓ.ም. መጨረሻ ላይ የተመሰረተው አልማኮን በፍጥነት የጥራታማ የግንባታ ፕሮጀክቶችን በማቅረብ ስም አገኘ። በ2009 እና 2015 ዓ.ም. መካከል የክንውን እና የፋይናንሲ ውድቀቶችን ቢኖረንም፣ ከ2016 ዓ.ም. ጀምሮ ትልቅ ማሻሻልን ተቀበልን። ዛሬ፣ በአዲስ 5-ዓመታዊ የስልትና እቅድ የተነዳደረ፣ አልማኮን ከዚህ በፊት ከሁሉ በላይ በማደግፍ ተገነባ፣ዘመናዊ፣ በጣም የሚሰራ እና በኢንዱስትሪው ውስጥ የሚዎጋ ኃይል ሆነ።'
  },
  'about.ultimatePurpose': {
    en: 'More Than Just Construction: Our Social Impact',
    am: 'ከግንባታ በላይ፡ የማህበራዊ ተፅእኖችን'
  },
  'about.ultimatePurpose.content': {
    en: 'Our ultimate goal is to build sustainable buildings and communities through innovation, quality, and unwavering social responsibility. We are revenue-generating arm of Amhara Development Association (ALMA). Our profits directly fund vital social programs in education, health, and job creation across region. Every brick we lay is an investment in Ethiopia\'s future.',
    am: 'የእኛ መጨረሻ ዓላማ በፈጠራ፣ በጥራት፣ በማይናወጥ ማህበራዊ ኃላፊነት ዘላቂ ህንጻዎችንና ማህበረሰቦችን መገንባት ነው። እኛ የአማራ ዕውቀት ማህበር (ኤልማ) የገቢ የማምረት ክኛው ነን። የእኛ ትርፍ በቀጥታ በክልል የትምህርት፣ የጤና እና የስራ ፍጥረት ማህበራዊ ፕሮግራሞችን ይደግፋል። የምንሰርወው እያንዳንዱ ድንጋይ የኢትዮጵያ ወደፊት ንግድ ነው።'
  },
  'about.brandIdentity': {
    en: 'The Creator Archetype',
    am: 'የፈጣሪው አርኬታይፕ'
  },
  'about.brandIdentity.content': {
    en: 'We embody \'Creator\' brand archetype. This means we are driven by customer-centric values, innovative problem-solving, and a visionary approach that aims to lead construction industry.',
    am: 'የፈጣሪውን አርኬታይፕ የምንወክለው ነን። ይህ ማለት በደንበኛ ተኮር እሴቶች፣ በፈጠራዊ የችግር መፍታት፣ እና የግንባታ ኢንዱስትሪን ለመሪነት የሚያስተምልን በርካታ እይታ ያለው ነው።'
  },
  'about.businessSectors': {
    en: 'Our Business Sectors',
    am: 'የንግድ ክፍሎቻችን'
  },
  'about.sectors.construction': {
    en: 'Construction',
    am: 'ግንባታ'
  },
  'about.sectors.construction.desc': {
    en: 'Delivering advanced, sustainable buildings with a commitment to quality and safety.',
    am: 'በጥራት እና በደህንነት ተስፋ፣ የላቀ የሆኑ ዘላቂ ህንጻዎችን መስጠት።'
  },
  'about.sectors.realEstate': {
    en: 'Real Estate Development',
    am: 'የሪል እስቴት እድገት'
  },
  'about.sectors.realEstate.desc': {
    en: 'Designing innovative, durable, and comfortable living spaces that elevate standard of living.',
    am: 'የኑሮ ደረጃን የሚያሳድግ ፈጠራዊ፣ ዘላቂ እና ደማቢ የኑሮ ቦታዎችን መውሰድ።'
  },
  'about.sectors.materialSupply': {
    en: 'Material Supply',
    am: 'የቁሳቁስ እቅድ'
  },
  'about.sectors.materialSupply.desc': {
    en: 'Manufacturing and supplying highly durable, standard-compliant construction inputs.',
    am: 'በጣም የሚታዘዙ እና በመደብኖቹ የሚሞሉ የግንባታ ግብዓቶችን ማምረትና መስጠት።'
  },
  'about.employeeVoices': {
    en: 'Employee Voices',
    am: 'የሰራተኞች ድምፅ'
  },
  'about.employee.solomon': {
    en: 'Ato Solomon Leulseged',
    am: 'አቶ ሶሎሞን ሉልሰገድ'
  },
  'about.employee.solomon.role': {
    en: 'Director, Road & Building Construction',
    am: 'የመንገድና የህንጻ ግንባታ ዳይሬክተር'
  },
  'about.employee.solomon.quote': {
    en: 'Almacon is different because our profit goes to ALMA to bring fundamental change in education, health, and job creation. Our motto \'Quality for Thousands!\' is seen in practice on our projects.',
    am: 'አልማኮን የተለየ ነው ምክንያቱም የእኛ ትርፍ ወደ ኤልማ በትምህርት፣ በጤና እና በስራ ፍጥረት መሰረታዊ ለውጥን ለማምጣት ይሄዳል። የእኛ ሞቶ "ለሺህዎች ጥራት!" በፕሮጀክቶቻችን ላይ በተግባር ይታያል።'
  },
  'about.employee.ayalnesh': {
    en: 'W/ro Ayalnesh Shimelis',
    am: 'ወሮ አያልነሽ ስምልስ'
  },
  'about.employee.ayalnesh.role': {
    en: 'Senior Finance Officer',
    am: 'ሴኔይር ፋይናንስ አማካሪ'
  },
  'about.employee.ayalnesh.quote': {
    en: 'Almacon is a living development institution that has transformed yesterday\'s memories into today\'s success, prepared to welcome tomorrow with excellence.',
    am: 'አልማኮን የሕይወት ዕውቀት አካል ነው፣ የትረካ ጊዜ የተረፈበትን ዕለት በአሁኑ ጊዜ የሚገኘውን ስኬት በማስቀየር እንደገና ከባህር ዳር ጋር በማደግፍ በጥራት ለማደረግ ዝግጁ ነው።'
  },
  'about.employee.yigrem': {
    en: 'Ato Yigrem Yeneante',
    am: 'አቶ ይግረም ይነንጠ'
  },
  'about.employee.yigrem.role': {
    en: 'Director, Material Production & Supply',
    am: 'ዳይሬክተር፣ የቁሳቁስ ምርትና እቅድ'
  },
  'about.employee.yigrem.quote': {
    en: 'ALMACON was born from a vision of development. ALMA identifies the community\'s needs, and ALMACON transforms those needs into tangible construction and progress.',
    am: 'አልማኮን የአማራ ዕውቀት ማህበር ከተቋቋመበት ጊዜ አንስቶ በአማራ ክልል የተለያዩ የግንባታ ፕሮጀክቶችን አከናወኗል። አልማኮን በአማራ ክልል የተለያዩ የግንባታ ፕሮጀክቶችን አከናወኗል።'
  },
  'footer.address': {
    en: 'Bahir Dar, Ethiopia',
    am: 'ባህር ዳር፣ ኢትዮጵያ'
  },
  'footer.phone': {
    en: '+251 123 456 789',
    am: '+251 123 456 789'
  },
  'footer.email': {
    en: 'info@almacon.com',
    am: 'info@almacon.com'
  },

  // Footer - Additional missing keys
  'footer.companyMission': {
    en: 'Building Quality, Impacting Thousands! We are a Grade-1 construction company committed to excellence in every project.',
    am: 'በጥራት ለሺህዎች! ደረጃ 1 የሆነን የግንባታ ኩባንያ በእያኛው ፕሮጀክት ውስጥ እኩልነትን ለመውጣት ተስፋ።'
  },
  'footer.slogan': {
    en: 'Building Quality, Impacting Thousands!',
    am: 'በጥራት ለሺህዎች!'
  },
  'footer.quickLinks': {
    en: 'Quick Links',
    am: 'ፈጣን አገናኞች'
  },
  'footer.home': {
    en: 'Home',
    am: 'ቤት'
  },
  'footer.servicesPage': {
    en: 'Services',
    am: 'አገልግሎቶች'
  },
  'footer.portfolioPage': {
    en: 'Portfolio',
    am: 'ፖርትፎሊዮ'
  },
  'footer.aboutPage': {
    en: 'About',
    am: 'ስለ እኛ'
  },
  'footer.teamPage': {
    en: 'Team',
    am: 'ቡድን'
  },
  'footer.testimonialsPage': {
    en: 'Testimonials',
    am: 'ምስክርናዎች'
  },
  'footer.contactPage': {
    en: 'Contact',
    am: 'እውቂያ'
  },
  'footer.ourServices': {
    en: 'Our Services',
    am: 'አገልግሎቶቻችን'
  },
  'footer.blockProduction': {
    en: 'Block Production',
    am: 'ብሎክ ምርት'
  },
  'footer.buildingConstruction': {
    en: 'Building Construction',
    am: 'ህንጻ እና ግንባታ'
  },
  'footer.realEstateSupply': {
    en: 'Real Estate Supply',
    am: 'ሪል እስቴት እቅድ'
  },
  'footer.aluminiumIronWork': {
    en: 'Aluminium & Iron Work',
    am: 'አሉሚኒየም እና ብረት ስራ'
  },
  'footer.contactInfo': {
    en: 'Contact Information',
    am: 'የእውቂያ መረጃ'
  },
  'footer.businessHours': {
    en: 'Monday - Friday: 8:00 AM - 6:00 PM\nSaturday: 9:00 AM - 4:00 PM\nSunday: Closed',
    am: 'ሰኞ - አርብ: 8:00 ጠዋት - 6:00 ምሽት\nቅዳሜ: 9:00 ጠዋት - 4:00 ምሽት\nእሁድ: ይዘጋል'
  },
  'footer.copyright': {
    en: ' 2024 ALMACON. All rights reserved.',
    am: ' 2024 አልማኮን. መብቱ በሙሉ የተጠበቀ።'
  },
  'footer.builtForImpact': {
    en: 'Built for Impact',
    am: 'ለተጽእኖ የተሰራ'
  },
  'footer.memberOfAlmaGroup': {
    en: 'Member of ALMA Group',
    am: 'አባል የኤልማ ቡድን'
  },

  // Team Section - Professional Updates
  'team.title': {
    en: 'Our Leadership Team',
    am: 'የአለማውእቅድ ቡድናችን'
  },
  'team.subtitle': {
    en: 'Meet the experienced professionals driving ALMACON\'s success through excellence in construction and sustainable development.',
    am: 'በግንባታ እኩልነት እና በሚታወስ ልማት የአልማኮንን ስኬት የሚያሳዱ ተልዕኮ ያለው የሙያ ቡድናችንን ይወቁ።'
  },
  'team.executiveLeadership': {
    en: 'Executive Leadership',
    am: 'የላውእቅድ አለማውእቅድ'
  },
  'team.melaku.name': {
    en: 'Ato Melaku Fenta',
    am: 'አቶ መላኩ ፈንጣ'
  },
  'team.melaku.role': {
    en: 'Board Chairman & ALMA CEO',
    am: 'የዳይሬክተሮች ቦርድ ሰብሳቢ እና የአልማ ዋና ስራ አስፈፃሚ'
  },
  'team.melaku.desc': {
    en: 'A visionary leader providing strategic oversight and governance at the board level while driving the overall mission of ALMA. He focuses on long-term sustainability and high-level corporate partnerships.',
    am: 'በዲሪክተሮች ደረጃ ስትራቴጂክ እይታ እና አስተዳደር የሚያሟላ እንዲህ የሚታይ አመራር፣ የአልማ ዋና ተልዕኮን በማስተኛት ላይ ይሰራል። ለዘለለል ማሻሻልና ለከፍተኛ የኮርፖሬሽን አጋሮች ይተራራል።'
  },
  'team.setual.name': {
    en: 'Ato Setual Desalegn',
    am: 'አቶ ሰቷል ደሳለኝ'
  },
  'team.setual.role': {
    en: 'Chief Executive Officer',
    am: 'ዋና ስራ አስፈፃሚ'
  },
  'team.setual.desc': {
    en: 'Responsible for the day-to-day operational excellence and execution of ALMACONs core business strategies. He leads the modernization reform and ensures the company remains a competitive Grade-1 contractor.',
    am: 'የእኛ የቀን ቀን ክንውን አስተዳደር እኩልነት እና የአልማኮን ዋና የንግድ ስትራቴጂዎች እንቅስትና ሃላፊ። የመሰረታዊ ማሻሻልን ይመራል እና ኩባንያው የግብር-1 ኮንትራክተር እንደሚሆን ያረጋጋል።'
  },
  'team.strategicManagement': {
    en: 'Strategic Management',
    am: 'የስትራቴጂክ አስተዳደር'
  },
  'team.asrat.name': {
    en: 'Ato Asrat Belay',
    am: 'አቶ አስራት በላይ'
  },
  'team.asrat.role': {
    en: 'Deputy CEO, Construction & Contract Administration',
    am: 'የኮንስትራክሽንና ኮንትራት አስተዳደር ዘርፍ ምክትል ዋና ስራ አስፈፃሚ'
  },
  'team.gete.name': {
    en: 'Ato Gete Gutema',
    am: 'አቶ ጌቴ ጉተማ'
  },
  'team.gete.role': {
    en: 'Deputy CEO, Real Estate & Material Production',
    am: 'የሪል እስቴት ልማት እና የኮንስትራክሽን ግብዓቶች ዘርፍ ምክትል ዋና ስራ አስፈፃሚ'
  },
  'team.alehegn.name': {
    en: 'Ato Alehegn Tadesse',
    am: 'አቶ አለህኝን ታደሰ'
  },
  'team.alehegn.role': {
    en: 'Deputy CEO, Resource Management',
    am: 'የሃብት ስራ አመራር ዘርፍ ምክትል ዋና ስራ አስፈፃሚ'
  },
  'team.directorsOperations': {
    en: 'Directors of Operations',
    am: 'የክንውኖች ዳይሬክተሮች'
  },
  'team.solomon.name': {
    en: 'Ato Solomon Leulseged',
    am: 'አቶ ሶሎሞን ሉልሰገድ'
  },
  'team.yigrem.name': {
    en: 'Ato Yigrem Yeneante',
    am: 'አቶ ይግረም ይነንጠ'
  },
  'team.yigrem.role': {
    en: 'Director, Material Production & Supply',
    am: 'የቁሳቁስ ምርትና እቅድ ዳይሬክተር'
  },
  'team.hailemariam.name': {
    en: 'Ato Hailemariam Muche',
    am: 'አቶ ሃይለማርያም ሙቸ'
  },
  'team.hailemariam.role': {
    en: 'Project Management Director',
    am: 'የፕሮጀክት አስተዳደር ዳይሬክተር'
  },
  'team.abebe.name': {
    en: 'Ato Abebe Ejigu',
    am: 'አቶ አበበ እጅጉ'
  },
  'team.abebe.role': {
    en: 'Quality Assurance Director',
    am: 'የጥራት ማረጋገጫ ዳይሬክተር'
  },
  'team.boardOfDirectors': {
    en: 'Board of Directors',
    am: 'የዳይሬክተሮች ምክትል'
  },
  'team.mezgebe.name': {
    en: 'Ato Mezgebe Andualem',
    am: 'አቶ መዝገበ አንዱአለም'
  },
  'team.mezgebe.role': {
    en: 'Board Member',
    am: 'የቦርድ አባል'
  },
  'team.tsedeke.name': {
    en: 'Engineer Tsedeke Yihune',
    am: 'ኢንጂነር ጸደቀ ይሁነ'
  },
  'team.tsedeke.role': {
    en: 'Board Member',
    am: 'የምክትል አባል'
  },
  'team.melakuAzezew.name': {
    en: 'Engineer Melaku Azezew',
    am: 'ኢንጂነር መላኩ አዜዜው'
  },
  'team.melakuAzezew.role': {
    en: 'Board Member',
    am: 'የምክትል አባል'
  },
  'team.brhanu.name': {
    en: 'Doctor Brhanu Rodas',
    am: 'ዶክተር ብርሃኑ ሮዳስ'
  },
  'team.brhanu.role': {
    en: 'Board Member',
    am: 'የምክትል አባል'
  },
  'team.yohannes.name': {
    en: 'Ato Yohannes Tarekegn',
    am: 'አቶ ዮሃንስ ታረቨክኝ'
  },
  'team.yohannes.role': {
    en: 'Board Member',
    am: 'የምክትል አባል'
  },
  'team.yaregal.name': {
    en: 'Ato Yaregal Wubalem',
    am: 'አቶ ያረጋል ዉባለም'
  },
  'team.yaregal.role': {
    en: 'Board Member',
    am: 'የምክትል አባል'
  },

  // Additional missing keys from components
  'hero.title': {
    en: 'Building Excellence, Creating Impact',
    am: 'የእኩልነት ግንባታ፣ ተጽእኖ መፍጠሪያ'
  },
  'hero.subtitle': {
    en: 'Your trusted partner in construction, real estate, and building solutions',
    am: 'በግንባታ፣ በሪል እስቴት እና በህንጻ መፍትሄዎች የሚታመኑ አጋርዎ'
  },
  'services.blockProduction.extendedDesc': {
    en: 'Our state-of-the-art manufacturing facility produces high-strength concrete blocks designed for maximum durability. We utilize precision vibration technology to ensure uniform density and structural integrity for every project.',
    am: 'የፍልተማዊ ቴክኖሎጂዎች የምርት ቤታችን ከፍተኛ ጥንካሬ ያለው ኮንክሪት ብሎኮችን ለከፍተኛ ዘላቂነት የተዘጋጁን ያመርታል። ለእያንዳንዱ ፕሮጀክት የግል ጥራት እና የመሰረታዊ አግባባ ጥሩ መጠን በማረጋገጥ የትክክለኛ ንዝር ቴክኖሎጂን እንጠቀማለን።'
  },
  'services.buildingConstruction.extendedDesc': {
    en: 'We provide end-to-end building construction services. From initial groundwork and foundation laying to structural framing and final interior finishes, we build with a commitment to quality and safety.',
    am: 'ከመጀመሪያ እርምምርት እስከ የመሰረቻ እና የህንጻ ክፍሎች እስከ የመጨረሻ የውስጥ ድህሰ-ስራ፣ የተሟላ የኮንስትራክሽን አገልግሎቶችን እናደርሳለን። በጥራት እና በደህንነት ተስፋ በመስጠት እንገነታለን።'
  },
  'services.realEstateSupply.extendedDesc': {
    en: 'Integrated Real Estate and construction material supply. Access a curated portfolio of properties and a reliable supply of top-tier building materials, all managed by our expert team.',
    am: 'የተዋሃደ የሪል እስቴት እና የግንባታ ቁሳቁስ እቅድ። የተመረጡ ንብረቶችን እና የሚታመን የከፍተኛ ደረጃ የግንባታ ቁሳቁሶችን ዝምድና ያለውን እቅድ፣ ሁሉም በሙያተኛ ቡድናችን የሚተዳደር።'
  },
  'services.aluminiumIron.extendedDesc': {
    en: 'Custom-fabricated metalwork solutions. Specializing in ornamental iron designs, secure gates, and modern aluminum framing systems, combining aesthetic appeal with long-lasting strength.',
    am: 'የብጁ የብረት ስራ መፍትሄዎች። በዘዛኛው የብረት ዲዛይን፣ በደህና አዞራዎች እና በዘመናዊ የአሉሚኒየም ክፈፍር ስርዮቶች ውስጥ ብልህትን በማሳየት፣ የሚያምር ውብርን እና የሚታወስ ጥንካሬን በማያያዝ።'
  },

  // HomePage - LandingPage Component
  'landing.mainHeadline': {
    en: 'Building Quality, Impacting Thousands',
    am: 'ጥራት ያለው ግንባታ ለሺህዎች ተፅእኖ'
  },
  'landing.brandText': {
    en: 'Grade-1 Construction & Real Estate Development.',
    am: 'ደረጃ-1 ኮንስትራክሽን እና የሪል እስቴት ልማት'
  },

  // HomePage - HeroBanner Component
  'heroBanner.welcome': {
    en: 'Welcome to ALMACON',
    am: 'እንኳን ደህና መጡ ወደ አልማኮን'
  },

  // HomePage - Core Sectors Section
  'coreSectors.title': {
    en: 'Our Core Sectors',
    am: 'ዋና ዋና የሥራ ዘርፎቻችን'
  },
  'coreSectors.subtitle': {
    en: 'Excellence in construction, real estate development, and material production.',
    am: 'በኮንስትራክሽን፣ በሪል እስቴት ልማት እና በግንባታ ግብዓቶች ምርት የላቀ ውጤት።'
  },
  'coreSectors.construction.title': {
    en: 'Construction Services',
    am: 'የግንባታ አገልግሎቶች'
  },
  'coreSectors.construction.keyFact': {
    en: 'Certified Grade-1 General Contractor',
    am: 'የተረጋጋ ደረጃ-1 አጠቃላይ ኮንትራክተር'
  },
  'coreSectors.construction.description': {
    en: 'Delivering high-standard building and infrastructure projects using modern engineering. Our goal is to be a national leader in exemplary contracting by 2021 E.C.',
    am: 'በዘመናዊ ምህንድስና የፍተና መደብኖች ያለውን ህንጻ እና የመሰረተማ ፕሮጀክቶች በማስተላለፍ። ዓላማችን በ2021 ዓ.ም. በምሳሌታዊ ኮንትራክትነት ብሔራዊ መሪ መሆን ነው።'
  },
  'coreSectors.realEstate.title': {
    en: 'Real Estate Development',
    am: 'የሪል እስቴት ልማት'
  },
  'coreSectors.realEstate.keyFact': {
    en: 'Targeted delivery of 5,000 homes by 2021 E.C.',
    am: 'በ2021 ዓ.ም. 5,000 ቤቶችን ማስተላለፍ ዓላማችን'
  },
  'coreSectors.realEstate.description': {
    en: 'Creating modern residential villages that integrate contemporary urban living with Ethiopian lifestyles for domestic and diaspora clients.',
    am: 'ለዜግና እና ዲያስፖራ ደንበኞች የዘመናዊ ከተማ ኑሮን ከኢትዮጵያዊው መንገደ ኑሮ ጋር የሚያዋህዱ የዘመናዊ ነዋሪ ከተሞችን በመፍጠሪያ።'
  },
  'coreSectors.materials.title': {
    en: 'Construction Material Production',
    am: 'የግንባታ ግብዓቶች ምርት'
  },
  'coreSectors.materials.keyFact': {
    en: 'Standard-compliant manufacturing',
    am: 'የመደብን የሚያሟላ አምራች'
  },
  'coreSectors.materials.description': {
    en: 'Manufacturing high-durability blocks and construction inputs that provide a firm guarantee for project sustainability and structural integrity.',
    am: 'ለፕሮጀክት ዘላቂነት እና የመሰረታዊ አግባባ ጥሩ መጠን በማረጋገጥ የፍተና የሚገባ ብሎኮች እና የግንባታ ግብዓቶችን በማምረት።'
  },
  'coreSectors.learnMore': {
    en: 'Learn More',
    am: 'ተጨማማሪ ይዩ'
  },

  // Services Section - Missing Keys Added
  'services.title': {
    en: 'Our Services',
    am: 'አገልግሎቶቻችን'
  },
  'services.subtitle': {
    en: 'Excellence in construction, real estate development, and material production.',
    am: 'በኮንስትራክሽን፣ በሪል እስቴት ልማት እና በግንባታ ግብዓቶች ምርት የላቀ ውጤት።'
  },
  'services.integrated.title': {
    en: 'Integrated Solutions',
    am: 'የተቀናጁ መፍትሄዎች'
  },
  'services.integrated.description': {
    en: 'End-to-end construction services from planning to completion',
    am: 'ከንድፍ እስከ ግንባታ የተቀናጀ መፍትሄ እንሰጣለን።'
  },
  'services.technological.title': {
    en: 'Technological Excellence',
    am: 'ቴክኖሎጂያዊ ብቃት'
  },
  'services.technological.description': {
    en: 'Advanced technology and modern construction methods',
    am: 'የላቁ ቴክኖሎጂዎችን በመጠቀም ዘመናዊ ግንባታዎችን እናከናውናለን።'
  },
  'services.socialImpact.title': {
    en: 'Social Impact',
    am: 'ማህበራዊ ተፅእኖ'
  },
  'services.socialImpact.description': {
    en: 'Creating sustainable communities and regional development',
    am: 'ማህበረሰቡን ተጠቃሚ የሚያደርጉ መሰረተ ልማቶችን እንገነባለን።'
  },
  'services.learnMore': {
    en: 'Learn More',
    am: 'ተጨማሪ ያንብቡ'
  },

  // About & Core Values Section - Fixed Keys
  'about.companyOverview': {
    en: 'About Our Company Overview',
    am: 'ስለ ድርጅታችን አጠቃላይ መረጃ'
  },
  'about.heroTitle': {
    en: 'Building Quality, Impacting Thousands!',
    am: 'ጥራት ያለው ግንባታ ለሺዎች ተፅእኖ!'
  },
  'about.historyShort': {
    en: 'ALMACON (አልማኮን) was established in 2005 E.C. by the Amhara Development Association (ALMA). It is a revenue-generating arm for ALMA, operating in construction, real estate development, and the production and supply of construction materials.',
    am: 'አልማኮን በ2005 ዓ.ም በአማራ ልማት ማህበር (አልማ) ተመሠረተ። አልማኮን በኮንስትራክሽን፣ በሪል እስቴት ልማት እና በግንባታ ግብዓቶች ምርት እና አቅርቦት ላይ በመሰማራት ለአልማ የገቢ ምንጭ ሆኖ ያገለግላል።'
  },
  'about.vision.title': {
    en: 'Vision (ራዕይ)',
    am: 'ራዕይ'
  },
  'about.vision.text': {
    en: 'To be the leading construction company in Ethiopia, recognized for quality, innovation, and sustainable development.',
    am: 'በግንባታው ዘርፍ ቀዳሚ እና ተመራጭ መሆን።'
  },
  'about.mission.title': {
    en: 'Mission (ተልዕኮ)',
    am: 'ተልዕኮ'
  },
  'about.mission.text': {
    en: 'Provide quality, affordable, and timely construction, real estate, and material supply services.',
    am: 'ጥራቱን የጠበቀ አገልግሎት በማቅረብ የደንበኞችን ፍላጎት ማርካት።'
  },
  'about.coreValues.title': {
    en: 'Core Values',
    am: 'ዋና እሴቶቻችን'
  },
  // Nested structure for core values
  'about.coreValues.integrity': {
    en: 'Integrity',
    am: 'ታማኝነት'
  },
  'about.coreValues.integrity.am': {
    en: 'Integrity',
    am: 'ታማኝነት'
  },
  'about.coreValues.innovation': {
    en: 'Innovation',
    am: 'ፈጠራ'
  },
  'about.coreValues.innovation.am': {
    en: 'Innovation',
    am: 'ፈጠራ'
  },
  'about.coreValues.teamwork': {
    en: 'Teamwork',
    am: 'የቡድን ስራ'
  },
  'about.coreValues.teamwork.am': {
    en: 'Teamwork',
    am: 'የቡድን ስራ'
  },
  'about.coreValues.sustainability': {
    en: 'Sustainability',
    am: 'ዘላቂነት'
  },
  'about.coreValues.sustainability.am': {
    en: 'Sustainability',
    am: 'ዘላቂነት'
  },
  'about.coreValues.quality': {
    en: 'Quality',
    am: 'ጥራት'
  },
  'about.coreValues.quality.am': {
    en: 'Quality',
    am: 'ጥራት'
  },
  'about.coreValues.customer': {
    en: 'Customer Focus',
    am: 'ደንበኛ ተኮር መሆን'
  },
  'about.coreValues.customer.am': {
    en: 'Customer Focus',
    am: 'ደንበኛ ተኮር መሆን'
  },
  'about.readMore': {
    en: 'Read More About Us',
    am: 'ስለ እኛ ይበልጡ'
  },

  // Contact Section Restoration
  'contact.title': {
    en: 'Contact Us',
    am: 'ያግኙን'
  },
  'contact.connect': {
    en: "Let's Connect",
    am: 'እንገናኝ'
  },
  'contact.officialEmail': {
    en: 'info@almacon.com.et',
    am: 'info@almacon.com.et'
  },
  'contact.phone1': {
    en: '+251 58 220 1787',
    am: '+251 58 220 1787'
  },
  'contact.phone2': {
    en: '+251 58 222 1479',
    am: '+251 58 222 1479'
  },
  'contact.headOffice': {
    en: 'Head Office: Bahir Dar, Ethiopia (Near ALMA Building)',
    am: 'ዋና መስሪያ ቤት: ባህር ዳር፣ ኢትዮጵያ (ከአልማ ህንጻ አጠገብ)'
  },
  'contact.workingHours': {
    en: 'Mon - Sat: 8:00 AM - 5:30 PM',
    am: 'ከሰኞ - ቅዳሜ: 2:00 - 11:30'
  },
  'contact.form.title': {
    en: 'Send us a Message',
    am: 'መልእክት ይላኩልን'
  },
  'contact.form.name': {
    en: 'Your Name',
    am: 'ስምዎ'
  },
  'contact.form.email': {
    en: 'Your Email',
    am: 'ኢሜልዎ'
  },
  'contact.form.subjectPlaceholder': {
    en: 'Subject',
    am: 'የመልዕክቱ ርዕስ'
  },
  'contact.form.messagePlaceholder': {
    en: 'Your Message',
    am: 'መልዕክትዎን እዚህ ይፃፉ'
  },
  'contact.form.submit': {
    en: 'Send Message',
    am: 'መልዕክት ላክ'
  },
  'contact.form.subject': {
    en: 'Subject',
    am: 'ጉዳዩ'
  },
  'contact.form.message': {
    en: 'Your Message',
    am: 'መልእክትዎ'
  },
  'contact.findUs': {
    en: 'Find Us',
    am: 'ያግኙንን'
  },
  'contact.followUs': {
    en: 'Follow Us',
    am: 'ተከተሉን'
  },

  // Form Success/Error Messages - Interactive Elements
  'contact.form.success': {
    en: 'Message sent successfully! We will get back to you soon.',
    am: 'መልዕክትዎ ስህተት አልተፈጸመበትም! በቅርቡ እንመለስለን።'
  },
  'contact.form.error': {
    en: 'Failed to send message. Please try again later.',
    am: 'መልዕክትዎ ስህተት ፈጸመ። እባክዎ ከቅርቡ ይሞክሩ።'
  },
  'contact.form.validation.name': {
    en: 'Please enter your name',
    am: 'ስምዎን እባክዎ ያስገቡ'
  },
  'contact.form.validation.email': {
    en: 'Please enter a valid email address',
    am: 'እባክዎ ትክክለኛ ኢሜል አድራሻ ያስገቡ'
  },
  'contact.form.validation.message': {
    en: 'Please enter your message',
    am: 'መልዕክትዎን እባክዎ ያስገቡ'
  },
  'contact.form.sending': {
    en: 'Sending...',
    am: 'ማላኪያ ይጠበቅል።'
  },

  // Loading States and Interactive Feedback
  'ui.loading': {
    en: 'Loading...',
    am: 'ማስተንበር ይጠበቅል።'
  },
  'ui.error.generic': {
    en: 'An error occurred. Please try again.',
    am: 'ስህተት ፈጸመ። እባክዎ ከቅርቡ ይሞክሩ።'
  },
  'ui.success.saved': {
    en: 'Saved successfully!',
    am: 'ስህተት አልተፈጸመበትም!'
  },
  'ui.button.loading': {
    en: 'Loading...',
    am: 'ማስተንበር ይጠበቅል።'
  },

  // Accessibility and Tooltips
  'aria.navigation': {
    en: 'Main navigation menu',
    am: 'ዋና አስተኪት ምንጮ'
  },
  'aria.language': {
    en: 'Language selector',
    am: 'ቋንቋ ምረጫ'
  },
  'aria.contact': {
    en: 'Contact form',
    am: 'ማስተባበያ ቅጽ'
  },
  'tooltip.social.facebook': {
    en: 'Follow us on Facebook',
    am: 'ተከተሉን በፌስቡክ'
  },
  'tooltip.social.telegram': {
    en: 'Follow us on Telegram',
    am: 'ተከተሉን በቴሌግራም'
  },
  'tooltip.social.linkedin': {
    en: 'Follow us on LinkedIn',
    am: 'ተከተሉን በሊንክዲን'
  },
  'tooltip.social.youtube': {
    en: 'Subscribe to our YouTube channel',
    am: 'የዩቲዩብ ቻናልን ይመዝገቡ'
  },

  // Image Alt Texts
  'alt.hero.banner': {
    en: 'ALMACON construction cityscape banner',
    am: 'አልማኮን ግንባታ ከተማ አይነት ባነር'
  },
  'alt.testimonial.client1': {
    en: 'Ato Tsedalu Alemu - Client testimonial photo',
    am: 'አቶ ጽዳሉ አለሙ - የአገልግሎት አስተያየት ፎቶ'
  },
  'alt.testimonial.client2': {
    en: 'Ato Melkamu Terefe - Client testimonial photo',
    am: 'አቶ መልካሙ ተረፈ - የአገልግሎት አስተያየት ፎቶ'
  },
  'alt.testimonial.client3': {
    en: 'Ato Nega Yihune - Client testimonial photo',
    am: 'አቶ ነጋ ይሁነ - የአገልግሎት አስተያየት ፎቶ'
  },

};

export const getTranslation = (key: string, language: Language): string => {
  const translation = translations[key];
  if (!translation) {
    console.warn(`Translation key "${key}" not found`);
    return key;
  }
  return translation[language] || translation.en || key;
};

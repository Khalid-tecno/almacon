export interface PortfolioProject {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  client?: string;
  contractValue?: string;
  contractPeriod?: string;
  completionYear?: string;
  location?: string;
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: 'felegeabay-primary-school',
    title: 'Felegeabay G+2 Primary School',
    category: 'Educational Construction',
    description: 'Construction of a modern G+2 primary school facility serving the educational needs of the local community. This project involved comprehensive building construction including classrooms, administrative offices, and supporting facilities. The school was designed to accommodate a large number of students with modern educational infrastructure and safety features. Our team executed the project with attention to quality standards and timely delivery, ensuring the facility meets all educational requirements and provides a conducive learning environment for students.',
    imageUrl: '/images/photo_2026-04-27_02-29-30.jpg',
    client: 'ADA Bahir Dar City Development Office',
    contractValue: '7,400,000.00 ETB',
    contractPeriod: '180 calendar days',
    completionYear: '2010 E.C',
    location: 'Bahir Dar, Ethiopia'
  },
  {
    id: 'azezo-secondary-school',
    title: 'Azezo General Secondary & Preparatory School',
    category: 'Educational Construction',
    description: 'A comprehensive secondary and preparatory school project designed to provide quality education for students preparing for higher education. The facility includes modern classrooms, science laboratories, library facilities, and administrative spaces. Our construction team implemented advanced building techniques to ensure durability and functionality. The project was completed within the specified timeframe while maintaining high standards of construction quality and meeting all educational infrastructure requirements.',
    imageUrl: '/images/photo_2026-04-27_02-30-32.jpg',
    client: 'ADA Gondar Development Office',
    contractValue: '5.2 Million ETB',
    contractPeriod: '150 calendar days',
    completionYear: '2016 E.C',
    location: 'Gondar, Ethiopia'
  },
  {
    id: 'ayer-tena-primary-school',
    title: 'Ayer Tena Primary School',
    category: 'Educational Construction',
    description: 'Modern primary school construction project featuring multiple classroom buildings and supporting educational facilities. This project involved comprehensive site development and building construction to create a proper learning environment for primary education. The facility includes spacious classrooms, administrative offices, and recreational areas. Our team successfully delivered this project with focus on quality construction and timely completion, ensuring the school meets all educational standards and provides a safe environment for students.',
    imageUrl: '/images/photo_2026-04-27_02-30-40.jpg',
    client: 'ADA Gondar Development Office',
    contractValue: '13.5 Million ETB',
    contractPeriod: '150 calendar days',
    completionYear: '2013 E.C',
    location: 'Gondar, Ethiopia'
  },
  {
    id: 'fasiledes-secondary-school',
    title: 'Fasiledes General Secondary School',
    category: 'Educational Construction',
    description: 'General secondary school construction project designed to accommodate the growing educational needs of the region. The facility features modern classroom spaces, science laboratories, and administrative facilities. Our construction team implemented quality building practices and ensured proper infrastructure for educational activities. The project was completed with attention to detail and adherence to educational building standards, providing a conducive environment for secondary education.',
    imageUrl: '/images/photo_2026-04-27_02-30-46.jpg',
    client: 'ADA Gondar Development Office',
    contractValue: '5.1 Million ETB',
    contractPeriod: '150 calendar days',
    completionYear: '2016 E.C',
    location: 'Gondar, Ethiopia'
  },
  {
    id: 'debre-birhan-office-building',
    title: 'Debre Birhan ADA G+4 Office Building',
    category: 'Commercial Construction',
    description: 'Modern G+4 office building construction for the Amhara Development Association, featuring contemporary design and functional office spaces. This project involved multi-story construction with advanced structural systems and modern building amenities. The building includes office spaces, meeting rooms, and supporting facilities designed for efficient administrative operations. Our team executed this complex project with precision, ensuring structural integrity and modern building standards.',
    imageUrl: '/images/photo_2026-04-27_02-30-54.jpg',
    client: 'Amhara Development Association',
    contractValue: '42,889,237.34 ETB',
    contractPeriod: '365 calendar days',
    completionYear: '2014 E.C',
    location: 'Debre Birhan, Ethiopia'
  },
  {
    id: 'primary-market-center',
    title: 'Primary Market Center',
    category: 'Commercial Construction',
    description: 'Large-scale market center construction project designed to facilitate commercial activities and trade in the region. This facility features modern market spaces with proper infrastructure for commercial operations. The project included comprehensive site development and building construction to create a functional market environment. Our team successfully delivered this project with focus on commercial functionality and durability, ensuring the market meets all operational requirements.',
    imageUrl: '/images/photo_2026-04-27_02-31-01.jpg',
    client: 'Debretabor Trade & Market Development office',
    contractValue: '90,100,000.00 ETB',
    contractPeriod: '120 calendar days',
    completionYear: 'At the end of 2017 E.C',
    location: 'Debre Tabor, Ethiopia'
  },
  {
    id: 'misrak-gion-school',
    title: 'Misrak Gion Pre Primary school',
    category: 'Educational Construction',
    description: 'Pre-primary school construction project designed to provide early childhood education facilities. The building features child-friendly design elements and modern educational infrastructure suitable for young learners. Our construction team implemented safety features and age-appropriate facilities throughout the project. The school was completed with attention to early childhood education requirements, providing a safe and nurturing environment for young students.',
    imageUrl: '/images/photo_2026-04-27_02-31-06.jpg',
    client: 'ANRS Education Bureau',
    contractValue: '12,488,057.66 ETB',
    contractPeriod: '104 calendar days',
    completionYear: 'At the end of 2017 E.C',
    location: 'Bahir Dar, Ethiopia'
  },
  {
    id: 'misrak-belesa-school',
    title: 'Misrak Belesa Guhala Highschool',
    category: 'Educational Construction',
    description: 'Comprehensive high school construction project featuring modern educational facilities and infrastructure. This project involved large-scale construction including classroom buildings, science laboratories, library facilities, and sports areas. Our team executed this complex project with advanced construction techniques and quality materials. The facility was designed to meet high school education standards and provide a complete learning environment for secondary education.',
    imageUrl: '/images/photo_2026-04-27_02-31-11.jpg',
    client: 'ANRS Education Bureau',
    contractValue: '42,455,930.97 ETB',
    contractPeriod: '150 calendar days',
    completionYear: '2018 E.C',
    location: 'Bahir Dar, Ethiopia'
  },
  {
    id: 'finoteselam-school-work',
    title: 'Finoteselam Model Secondary School Aluminium and Steel work',
    category: 'Specialized Construction',
    description: 'Specialized aluminium and steel work project for the Finoteselam Model Secondary School, involving fabrication and installation of metal structures and components. This project required precision metalwork and specialized construction techniques for educational facility enhancement. Our team implemented advanced metal fabrication processes and ensured proper installation of all aluminium and steel components. The project was completed with focus on durability and functionality, providing modern infrastructure for the educational facility.',
    imageUrl: '/images/photo_2026-04-27_02-31-17.jpg',
    client: 'FDRE Ministry of Education',
    location: 'Finoteselam, Ethiopia'
  },
  {
    id: 'almaco-main-office',
    title: 'ALMACON Main Office',
    category: 'Commercial Construction',
    description: 'Main office building construction for ALMACON, featuring modern corporate design and functional office spaces. This project represents our commitment to quality construction and architectural excellence. The building includes administrative offices, meeting spaces, and supporting facilities designed for efficient corporate operations. Our team executed this project with attention to detail and modern construction standards, creating a professional environment that reflects our company\'s values and capabilities.',
    imageUrl: '/images/photo_2026-04-27_02-31-22.jpg',
    location: 'Bahir Dar, Ethiopia'
  },
  {
    id: 'misrak-gion-office-building',
    title: 'Misrak Gion G+2 Office Building',
    category: 'Commercial Construction',
    description: 'Modern G+2 office building construction for Misrak Gion Amhara Development Association, featuring contemporary design and functional office spaces. This project involved comprehensive construction including office spaces, meeting rooms, and supporting facilities. The building was designed to accommodate administrative operations with modern infrastructure and safety features.',
    imageUrl: '/images/photo_2026-04-27_02-31-31.jpg',
    client: 'Misrak Gion Amhara Development Association',
    contractValue: '24,000,000.00 ETB',
    contractPeriod: '365 calendar days',
    completionYear: '2014 E.C',
    location: 'Bahir Dar, Ethiopia'
  },
  {
    id: 'estie-general-hospital',
    title: 'Estie General Hospital',
    category: 'Healthcare Construction',
    description: 'Comprehensive general hospital construction project featuring modern medical facilities and healthcare infrastructure. This project involved construction of hospital buildings with patient wards, treatment rooms, surgical facilities, and administrative spaces. The hospital was designed to provide quality healthcare services with modern medical equipment and patient care facilities.',
    imageUrl: '/images/photo_2026-04-27_02-31-36.jpg',
    client: 'ADA South Gondar Office',
    contractValue: '104 Million ETB',
    contractPeriod: '365 calendar days',
    completionYear: '2010 E.C',
    location: 'Estie, Ethiopia'
  },
  {
    id: 'hamusit-primary-school',
    title: 'Hamusit Primary School',
    category: 'Educational Construction',
    description: 'Primary school construction project featuring modern educational facilities and infrastructure. This project involved comprehensive construction including classrooms, administrative offices, and supporting educational facilities. The school was designed to provide quality primary education with proper learning environments and safety features for students.',
    imageUrl: '/images/photo_2026-04-27_02-31-45.jpg',
    client: 'ADA South Gondar Office',
    contractValue: '1.5 Million ETB',
    contractPeriod: '90 calendar days',
    completionYear: '2010 E.C',
    location: 'Hamusit, Ethiopia'
  },
  {
    id: 'agrita-primary-school-1',
    title: 'Agrita Primary School',
    category: 'Educational Construction',
    description: 'Primary school construction project featuring modern educational facilities designed to serve the local community. This project involved comprehensive construction including classroom buildings, administrative offices, and supporting educational infrastructure. The school was built to provide quality primary education with proper learning environments and safety features.',
    imageUrl: '/images/photo_2026-04-27_02-31-51.jpg',
    client: 'ADA South Gondar Office',
    contractValue: '4,500,000.00 ETB',
    contractPeriod: '180 calendar days',
    completionYear: '2010 E.C',
    location: 'Agrita, Ethiopia'
  },
  {
    id: 'agrita-primary-school-2',
    title: 'Agrita Primary School',
    category: 'Educational Construction',
    description: 'Second phase of Agrita Primary School construction project expanding educational facilities to accommodate growing student population. This project involved additional classroom construction, facility upgrades, and infrastructure improvements to enhance the learning environment.',
    imageUrl: '/images/photo_2026-04-27_02-31-58.jpg',
    client: 'ADA South Gondar Office',
    contractValue: '4,500,000.00 ETB',
    contractPeriod: '180 calendar days',
    completionYear: '2010 E.C',
    location: 'Agrita, Ethiopia'
  },
  {
    id: 'gashena-primary-school-1',
    title: 'Gashena Primary School',
    category: 'Educational Construction',
    description: 'Primary school construction project featuring modern educational facilities for the Gashena community. This project involved comprehensive construction including classroom buildings, administrative offices, and supporting educational infrastructure designed to provide quality primary education.',
    imageUrl: '/images/photo_2026-04-27_02-32-03.jpg',
    client: 'ADA Wadla Woreda Office',
    contractValue: '1.5 Million ETB',
    contractPeriod: '90 calendar days',
    completionYear: '2010 E.C',
    location: 'Gashena, Ethiopia'
  },
  {
    id: 'gashena-primary-school-2',
    title: 'Gashena Primary School',
    category: 'Educational Construction',
    description: 'Second phase of Gashena Primary School construction project expanding educational facilities to better serve the local community. This project involved additional construction work and facility improvements to enhance the educational infrastructure and learning environment.',
    imageUrl: '/images/photo_2026-04-27_02-32-08.jpg',
    client: 'ADA Wadla Woreda Office',
    contractValue: '1.5 Million ETB',
    contractPeriod: '90 calendar days',
    completionYear: '2010 E.C',
    location: 'Gashena, Ethiopia'
  },
  {
    id: 'lalibela-primary-school-1',
    title: 'Lalibela G+2 Primary School',
    category: 'Educational Construction',
    description: 'G+2 primary school construction project in the historic town of Lalibela, featuring modern educational facilities with two-story classroom buildings. This project involved comprehensive construction including classrooms, administrative offices, and supporting infrastructure designed to serve the local community.',
    imageUrl: '/images/photo_2026-04-27_02-32-15.jpg',
    client: 'ADA Lalibela Town Office',
    contractValue: '8,400,000.00 ETB',
    contractPeriod: '180 calendar days',
    completionYear: '2010 E.C',
    location: 'Lalibela, Ethiopia'
  },
  {
    id: 'lalibela-primary-school-2',
    title: 'Lalibela G+2 Primary School',
    category: 'Educational Construction',
    description: 'Second phase of Lalibela G+2 Primary School construction project expanding educational facilities in this historic town. This project involved additional construction work and facility improvements to enhance the learning environment and accommodate more students.',
    imageUrl: '/images/photo_2026-04-27_02-32-20.jpg',
    client: 'ADA Lalibela Town Office',
    contractValue: '8,400,000.00 ETB',
    contractPeriod: '180 calendar days',
    completionYear: '2010 E.C',
    location: 'Lalibela, Ethiopia'
  },
  {
    id: 'kulmesk-primary-school',
    title: 'Kulmesk Primary School',
    category: 'Educational Construction',
    description: 'Primary school construction project in Kulmesk featuring modern educational facilities and infrastructure. This project involved comprehensive construction including classroom buildings, administrative offices, and supporting facilities designed to provide quality primary education to the local community.',
    imageUrl: '/images/photo_2026-04-27_02-32-26.jpg',
    client: 'ADA Fogera Woreda Office',
    contractValue: '1.5 Million ETB',
    contractPeriod: '90 calendar days',
    completionYear: '2010 E.C',
    location: 'Kulmesk, Ethiopia'
  }
];

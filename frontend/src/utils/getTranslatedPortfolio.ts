import type { Language } from '../contexts/LanguageContext';
import type { PortfolioProject } from '../data/portfolio';
import { getTranslation } from '../translations/dictionary';

export const getTranslatedPortfolio = (language: Language): PortfolioProject[] => {
  const getProjectTranslation = (projectId: string, field: 'title' | 'description'): string => {
    const key = `portfolio.${projectId}.${field}`;
    return getTranslation(key, language);
  };

  const portfolioProjects: PortfolioProject[] = [
    {
      id: 'felegeabay',
      title: getProjectTranslation('felegeabay', 'title'),
      category: getTranslation('category.educationalConstruction', language),
      description: getProjectTranslation('felegeabay', 'description'),
      imageUrl: '/images/photo_2026-04-27_02-29-30.jpg',
      client: 'ADA Bahir Dar City Development Office',
      contractValue: '7,400,000.00 ETB',
      contractPeriod: '180 calendar days',
      completionYear: '2010 E.C',
      location: 'Bahir Dar, Ethiopia'
    },
    {
      id: 'azezo',
      title: getProjectTranslation('azezo', 'title'),
      category: getTranslation('category.educationalConstruction', language),
      description: getProjectTranslation('azezo', 'description'),
      imageUrl: '/images/photo_2026-04-27_02-30-32.jpg',
      client: 'ADA Gondar Development Office',
      contractValue: '5.2 Million ETB',
      contractPeriod: '150 calendar days',
      completionYear: '2016 E.C',
      location: 'Gondar, Ethiopia'
    },
    {
      id: 'ayerTena',
      title: getProjectTranslation('ayerTena', 'title'),
      category: getTranslation('category.educationalConstruction', language),
      description: getProjectTranslation('ayerTena', 'description'),
      imageUrl: '/images/photo_2026-04-27_02-30-40.jpg',
      client: 'ADA Gondar Development Office',
      contractValue: '13.5 Million ETB',
      contractPeriod: '150 calendar days',
      completionYear: '2013 E.C',
      location: 'Gondar, Ethiopia'
    },
    {
      id: 'fasiledes',
      title: getProjectTranslation('fasiledes', 'title'),
      category: getTranslation('category.educationalConstruction', language),
      description: getProjectTranslation('fasiledes', 'description'),
      imageUrl: '/images/photo_2026-04-27_02-30-46.jpg',
      client: 'ADA Gondar Development Office',
      contractValue: '5.1 Million ETB',
      contractPeriod: '150 calendar days',
      completionYear: '2016 E.C',
      location: 'Gondar, Ethiopia'
    },
    {
      id: 'debreBirhan',
      title: getProjectTranslation('debreBirhan', 'title'),
      category: getTranslation('category.commercialConstruction', language),
      description: getProjectTranslation('debreBirhan', 'description'),
      imageUrl: '/images/photo_2026-04-27_02-30-54.jpg',
      client: 'Amhara Development Association',
      contractValue: '42,889,237.34 ETB',
      contractPeriod: '365 calendar days',
      completionYear: '2014 E.C',
      location: 'Debre Birhan, Ethiopia'
    },
    {
      id: 'primaryMarket',
      title: getProjectTranslation('primaryMarket', 'title'),
      category: getTranslation('category.commercialConstruction', language),
      description: getProjectTranslation('primaryMarket', 'description'),
      imageUrl: '/images/photo_2026-04-27_02-31-01.jpg',
      client: 'Debretabor Trade & Market Development office',
      contractValue: '90,100,000.00 ETB',
      contractPeriod: '120 calendar days',
      completionYear: 'At the end of 2017 E.C',
      location: 'Debre Tabor, Ethiopia'
    },
    {
      id: 'misrakGionSchool',
      title: getProjectTranslation('misrakGionSchool', 'title'),
      category: getTranslation('category.educationalConstruction', language),
      description: getProjectTranslation('misrakGionSchool', 'description'),
      imageUrl: '/images/photo_2026-04-27_02-31-06.jpg',
      client: 'ANRS Education Bureau',
      contractValue: '12,488,057.66 ETB',
      contractPeriod: '104 calendar days',
      completionYear: 'At the end of 2017 E.C',
      location: 'Bahir Dar, Ethiopia'
    },
    {
      id: 'misrakBelesa',
      title: getProjectTranslation('misrakBelesa', 'title'),
      category: getTranslation('category.educationalConstruction', language),
      description: getProjectTranslation('misrakBelesa', 'description'),
      imageUrl: '/images/photo_2026-04-27_02-31-11.jpg',
      client: 'ANRS Education Bureau',
      contractValue: '42,455,930.97 ETB',
      contractPeriod: '150 calendar days',
      completionYear: '2018 E.C',
      location: 'Bahir Dar, Ethiopia'
    },
    {
      id: 'finoteselam',
      title: getProjectTranslation('finoteselam', 'title'),
      category: getTranslation('category.specializedConstruction', language),
      description: getProjectTranslation('finoteselam', 'description'),
      imageUrl: '/images/photo_2026-04-27_02-31-17.jpg',
      client: 'FDRE Ministry of Education',
      location: 'Finoteselam, Ethiopia'
    },
    {
      id: 'almacoOffice',
      title: getProjectTranslation('almacoOffice', 'title'),
      category: getTranslation('category.commercialConstruction', language),
      description: getProjectTranslation('almacoOffice', 'description'),
      imageUrl: '/images/photo_2026-04-27_02-31-22.jpg',
      location: 'Bahir Dar, Ethiopia'
    },
    {
      id: 'misrakGionOffice',
      title: getProjectTranslation('misrakGionOffice', 'title'),
      category: getTranslation('category.commercialConstruction', language),
      description: getProjectTranslation('misrakGionOffice', 'description'),
      imageUrl: '/images/photo_2026-04-27_02-31-31.jpg',
      client: 'Misrak Gion Amhara Development Association',
      contractValue: '24,000,000.00 ETB',
      contractPeriod: '365 calendar days',
      completionYear: '2014 E.C',
      location: 'Bahir Dar, Ethiopia'
    },
    {
      id: 'estieHospital',
      title: getProjectTranslation('estieHospital', 'title'),
      category: getTranslation('category.healthcareConstruction', language),
      description: getProjectTranslation('estieHospital', 'description'),
      imageUrl: '/images/photo_2026-04-27_02-31-36.jpg',
      client: 'ADA South Gondar Office',
      contractValue: '104 Million ETB',
      contractPeriod: '365 calendar days',
      completionYear: '2010 E.C',
      location: 'Estie, Ethiopia'
    },
    {
      id: 'hamusit',
      title: getProjectTranslation('hamusit', 'title'),
      category: getTranslation('category.educationalConstruction', language),
      description: getProjectTranslation('hamusit', 'description'),
      imageUrl: '/images/photo_2026-04-27_02-31-45.jpg',
      client: 'ADA South Gondar Office',
      contractValue: '1.5 Million ETB',
      contractPeriod: '90 calendar days',
      completionYear: '2010 E.C',
      location: 'Hamusit, Ethiopia'
    },
    {
      id: 'agrita1',
      title: getProjectTranslation('agrita1', 'title'),
      category: getTranslation('category.educationalConstruction', language),
      description: getProjectTranslation('agrita1', 'description'),
      imageUrl: '/images/photo_2026-04-27_02-31-51.jpg',
      client: 'ADA South Gondar Office',
      contractValue: '4,500,000.00 ETB',
      contractPeriod: '180 calendar days',
      completionYear: '2010 E.C',
      location: 'Agrita, Ethiopia'
    },
    {
      id: 'agrita2',
      title: getProjectTranslation('agrita2', 'title'),
      category: getTranslation('category.educationalConstruction', language),
      description: getProjectTranslation('agrita2', 'description'),
      imageUrl: '/images/photo_2026-04-27_02-31-58.jpg',
      client: 'ADA South Gondar Office',
      contractValue: '4,500,000.00 ETB',
      contractPeriod: '180 calendar days',
      completionYear: '2010 E.C',
      location: 'Agrita, Ethiopia'
    },
    {
      id: 'gashena1',
      title: getProjectTranslation('gashena1', 'title'),
      category: getTranslation('category.educationalConstruction', language),
      description: getProjectTranslation('gashena1', 'description'),
      imageUrl: '/images/photo_2026-04-27_02-32-03.jpg',
      client: 'ADA Wadla Woreda Office',
      contractValue: '1.5 Million ETB',
      contractPeriod: '90 calendar days',
      completionYear: '2010 E.C',
      location: 'Gashena, Ethiopia'
    },
    {
      id: 'gashena2',
      title: getProjectTranslation('gashena2', 'title'),
      category: getTranslation('category.educationalConstruction', language),
      description: getProjectTranslation('gashena2', 'description'),
      imageUrl: '/images/photo_2026-04-27_02-32-08.jpg',
      client: 'ADA Wadla Woreda Office',
      contractValue: '1.5 Million ETB',
      contractPeriod: '90 calendar days',
      completionYear: '2010 E.C',
      location: 'Gashena, Ethiopia'
    },
    {
      id: 'lalibela1',
      title: getProjectTranslation('lalibela1', 'title'),
      category: getTranslation('category.educationalConstruction', language),
      description: getProjectTranslation('lalibela1', 'description'),
      imageUrl: '/images/photo_2026-04-27_02-32-15.jpg',
      client: 'ADA Lalibela Town Office',
      contractValue: '8,400,000.00 ETB',
      contractPeriod: '180 calendar days',
      completionYear: '2010 E.C',
      location: 'Lalibela, Ethiopia'
    },
    {
      id: 'lalibela2',
      title: getProjectTranslation('lalibela2', 'title'),
      category: getTranslation('category.educationalConstruction', language),
      description: getProjectTranslation('lalibela2', 'description'),
      imageUrl: '/images/photo_2026-04-27_02-32-20.jpg',
      client: 'ADA Lalibela Town Office',
      contractValue: '8,400,000.00 ETB',
      contractPeriod: '180 calendar days',
      completionYear: '2010 E.C',
      location: 'Lalibela, Ethiopia'
    },
    {
      id: 'kulmesk',
      title: getProjectTranslation('kulmesk', 'title'),
      category: getTranslation('category.educationalConstruction', language),
      description: getProjectTranslation('kulmesk', 'description'),
      imageUrl: '/images/photo_2026-04-27_02-32-26.jpg',
      client: 'ADA Fogera Woreda Office',
      contractValue: '1.5 Million ETB',
      contractPeriod: '90 calendar days',
      completionYear: '2010 E.C',
      location: 'Kulmesk, Ethiopia'
    }
  ];

  return portfolioProjects;
};

import React from 'react';
import { useTranslation } from '../hooks/useTranslation';

interface TeamMember {
  nameKey: string;
  roleKey: string;
  descriptionKey?: string;
  image: string;
}

interface TeamSection {
  titleKey: string;
  members: TeamMember[];
  gridClass: string;
  cardSize: 'large' | 'medium' | 'compact' | 'board';
}

const TeamPage: React.FC = () => {
  const { t } = useTranslation();

  const teamSections: TeamSection[] = [
    {
      titleKey: 'team.executiveLeadership',
      members: [
        {
          nameKey: 'team.melaku.name',
          roleKey: 'team.melaku.role',
          descriptionKey: 'team.melaku.desc',
          image: '/Ato_Melaku_Fenta.png'
        },
        {
          nameKey: 'team.setual.name',
          roleKey: 'team.setual.role',
          descriptionKey: 'team.setual.desc',
          image: '/Ato_Setual_Desalegn.png'
        }
      ],
      gridClass: 'grid-cols-1 md:grid-cols-2',
      cardSize: 'large'
    },
    {
      titleKey: 'team.strategicManagement',
      members: [
        {
          nameKey: 'team.asrat.name',
          roleKey: 'team.asrat.role',
          image: '/Ato_Asrat.png'
        },
        {
          nameKey: 'team.gete.name',
          roleKey: 'team.gete.role',
          image: '/Ato_Gete.png'
        },
        {
          nameKey: 'team.alehegn.name',
          roleKey: 'team.alehegn.role',
          image: '/Ato_Alehegn.png'
        }
      ],
      gridClass: 'grid-cols-1 md:grid-cols-3',
      cardSize: 'medium'
    },
    {
      titleKey: 'team.directorsOperations',
      members: [
        {
          nameKey: 'team.solomon.name',
          roleKey: 'team.solomon.role',
          image: '/Ato_Solomon_Leulseged.png'
        },
        {
          nameKey: 'team.yigrem.name',
          roleKey: 'team.yigrem.role',
          image: '/Ato_Yigrem_Yeneante.png'
        },
        {
          nameKey: 'team.hailemariam.name',
          roleKey: 'team.hailemariam.role',
          image: '/Ato_Hailemariam_Muche.png'
        },
        {
          nameKey: 'team.abebe.name',
          roleKey: 'team.abebe.role',
          image: '/Ato_Abebe_Ejigu.png'
        }
      ],
      gridClass: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
      cardSize: 'compact'
    },
    {
      titleKey: 'team.boardOfDirectors',
      members: [
        {
          nameKey: 'team.mezgebe.name',
          roleKey: 'team.mezgebe.role',
          image: '/Ato_mezgebe_andualem.png'
        },
        {
          nameKey: 'team.tsedeke.name',
          roleKey: 'team.tsedeke.role',
          image: '/engineer_tsedeke_yihune.png'
        },
        {
          nameKey: 'team.melakuAzezew.name',
          roleKey: 'team.melakuAzezew.role',
          image: '/engineer_melaku_azezew.png'
        },
        {
          nameKey: 'team.brhanu.name',
          roleKey: 'team.brhanu.role',
          image: '/doctor_brhanu_rodas.png'
        },
        {
          nameKey: 'team.yohannes.name',
          roleKey: 'team.yohannes.role',
          image: '/Ato_yohannes_tarekegn.png'
        },
        {
          nameKey: 'team.yaregal.name',
          roleKey: 'team.yaregal.role',
          image: '/Ato_yaregal_wubalem.png'
        }
      ],
      gridClass: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
      cardSize: 'board'
    }
  ];

  const getCardSizeClasses = (size: 'large' | 'medium' | 'compact' | 'board') => {
    switch (size) {
      case 'large':
        return 'max-w-md';
      case 'medium':
        return 'max-w-sm';
      case 'compact':
        return 'max-w-xs';
      case 'board':
        return 'max-w-sm';
      default:
        return 'max-w-sm';
    }
  };

  const getImageHeightClasses = (size: 'large' | 'medium' | 'compact' | 'board') => {
    switch (size) {
      case 'large':
        return 'h-64 md:h-80';
      case 'medium':
        return 'h-56 md:h-64';
      case 'compact':
        return 'h-48 md:h-56';
      case 'board':
        return 'h-56 md:h-64';
      default:
        return 'h-56 md:h-64';
    }
  };

  const TeamCard: React.FC<{ member: TeamMember; size: 'large' | 'medium' | 'compact' | 'board' }> = ({ member, size }) => {
    const cardSizeClass = getCardSizeClasses(size);
    const imageHeightClass = getImageHeightClasses(size);
    const isBoardCard = size === 'board';

    return (
      <div className={`${cardSizeClass} mx-auto card-base hover:scale-105 hover:shadow-2xl transition-all duration-300 min-h-[48px] touch-manipulation`}>
        {/* Image Section */}
        <div className={`relative ${imageHeightClass} bg-gray-100 rounded-t-2xl`}>
          <img
            src={member.image}
            alt={t(member.nameKey)}
            className="w-full h-full object-cover object-top rounded-t-2xl"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              const fallback = target.nextElementSibling as HTMLElement;
              if (fallback) fallback.style.display = 'flex';
            }}
          />
          {/* Fallback placeholder */}
          <div className="hidden w-full h-full items-center justify-center bg-gray-200 rounded-t-2xl">
            <svg className="w-16 h-16 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            </svg>
          </div>
        </div>
        
        {/* Golden divider - thicker for board cards */}
        <div className={`${isBoardCard ? 'h-1 border-b-4 border-secondary-400' : 'h-1 bg-secondary-400'}`}></div>
        
        {/* Text Section */}
        <div className="p-6 text-center">
          <h3 className="font-bold text-primary-800 text-lg mb-2" style={{ fontFamily: "'Noto Sans', 'Noto Sans Ethiopic', sans-serif" }}>
            {t(member.nameKey)}
          </h3>
          <p className={`${isBoardCard ? 'text-gray-700' : 'text-secondary-400'} text-sm font-semibold mb-3`}>
            {t(member.roleKey)}
          </p>
          {member.descriptionKey && (
            <p className="text-gray-700 text-sm leading-relaxed" style={{ fontFamily: "'Noto Sans', 'Noto Sans Ethiopic', sans-serif" }}>
              {t(member.descriptionKey)}
            </p>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-primary">
      {/* Hero Header Section */}
      <div className="relative bg-gradient-to-br from-primary via-primary-700 to-primary-900 text-white py-24 px-6 overflow-hidden">
        {/* Decorative background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-secondary rounded-full -translate-x-32 -translate-y-32"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full translate-x-48 translate-y-48"></div>
          <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-secondary rounded-full opacity-50"></div>
        </div>
        {/* Golden top accent bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary-600 via-secondary to-secondary-600"></div>
        <div className="relative max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-secondary bg-opacity-20 border border-secondary border-opacity-40 rounded-full px-5 py-2 mb-6">
            <span className="w-2 h-2 bg-secondary rounded-full"></span>
            <span className="text-secondary text-sm font-semibold tracking-widest uppercase">ALMACON Team</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white" style={{ fontFamily: "'Noto Sans', 'Noto Sans Ethiopic', sans-serif" }}>
            {t('team.title')}
          </h1>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto leading-relaxed font-medium" style={{ fontFamily: "'Noto Sans', 'Noto Sans Ethiopic', sans-serif" }}>
            {t('team.subtitle')}
          </p>
        </div>
        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 40L60 33.3C120 26.7 240 13.3 360 10C480 6.7 600 13.3 720 18.3C840 23.3 960 26.7 1080 23.3C1200 20 1320 10 1380 5L1440 0V40H0Z" fill="#143d4d"/>
          </svg>
        </div>
      </div>

      {/* Team Sections */}
      <div className="py-16 px-6 bg-primary">
        <div className="max-w-7xl mx-auto space-y-24">
          {teamSections.map((section, index) => (
            <section key={index} className="space-y-12">
              {/* Section Header */}
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Noto Sans', 'Noto Sans Ethiopic', sans-serif" }}>
                  {t(section.titleKey)}
                </h2>
                <div className="w-32 h-1 bg-gradient-to-r from-secondary-600 via-secondary to-secondary-600 mx-auto mb-8 rounded-full"></div>
              </div>

              {/* Golden Yellow divider between sections */}
              {index > 0 && (
                <div className="w-full h-px bg-gradient-to-r from-transparent via-secondary to-transparent opacity-40"></div>
              )}

              {/* Team Members Grid */}
              <div className={`grid ${section.gridClass} gap-8 justify-items-center`}>
                {section.members.map((member, memberIndex) => (
                  <TeamCard
                    key={memberIndex}
                    member={member}
                    size={section.cardSize}
                  />
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>

      {/* Bottom CTA Banner */}
      <div className="bg-gradient-to-r from-secondary-700 via-secondary to-secondary-600 py-10 px-6 text-center">
        <p className="text-primary-900 font-bold text-lg">Built on trust. Driven by excellence.</p>
      </div>
    </div>
  );
};

export default TeamPage;

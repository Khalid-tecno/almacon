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
      <div className={`${cardSizeClass} mx-auto bg-white rounded-2xl shadow-xl overflow-hidden hover:scale-105 hover:shadow-2xl transition-all duration-300 border border-gray-100 min-h-[48px] touch-manipulation`}>
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
        <div className={`${isBoardCard ? 'h-1 border-b-4 border-[#FFD700]' : 'h-1 bg-[#FFD700]'}`}></div>
        
        {/* Text Section */}
        <div className="p-6 text-center">
          <h3 className="font-bold text-[#004d4d] text-lg mb-2" style={{ fontFamily: "'Noto Sans', 'Noto Sans Ethiopic', sans-serif" }}>
            {t(member.nameKey)}
          </h3>
          <p className={`${isBoardCard ? 'text-gray-700' : 'text-[#FFD700]'} text-sm font-semibold mb-3`}>
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
    <div className="min-h-screen bg-[#004d4d]">
      {/* Header Section */}
      <div className="bg-[#004d4d] text-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white" style={{ fontFamily: "'Noto Sans', 'Noto Sans Ethiopic', sans-serif" }}>
            {t('team.title')}
          </h1>
          <p className="text-xl text-[#FFD700] max-w-3xl mx-auto leading-relaxed font-medium" style={{ fontFamily: "'Noto Sans', 'Noto Sans Ethiopic', sans-serif" }}>
            {t('team.subtitle')}
          </p>
        </div>
      </div>

      {/* Team Sections */}
      <div className="py-16 px-6 bg-[#004d4d]">
        <div className="max-w-7xl mx-auto space-y-24">
          {teamSections.map((section, index) => (
            <section key={index} className="space-y-12">
              {/* Section Header */}
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Noto Sans', 'Noto Sans Ethiopic', sans-serif" }}>
                  {t(section.titleKey)}
                </h2>
                <div className="w-32 h-1 bg-[#FFD700] mx-auto mb-8"></div>
              </div>

              {/* Golden Yellow divider between sections */}
              {index > 0 && (
                <div className="w-full h-px bg-gradient-to-r from-transparent via-[#FFD700] to-transparent opacity-50"></div>
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
    </div>
  );
};

export default TeamPage;

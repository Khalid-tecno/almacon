import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

const MobileNavigation = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { path: '/', label: t('nav.home') },
    { path: '/services', label: t('nav.services') },
    { path: '/portfolio', label: t('nav.portfolio') },
    { path: '/about', label: t('nav.about') },
    { path: '/team', label: t('nav.team') },
    { path: '/testimonials', label: t('nav.testimonials') },
    { path: '/contact', label: t('nav.contact') },
  ];

  const NavLink = ({ item }: { item: { path: string; label: string } }) => (
    <Link
      to={item.path}
      onClick={() => setIsOpen(false)}
      className={`block w-full text-left px-4 py-3 rounded-lg transition-all duration-300 min-h-[44px] flex items-center ${
        location.pathname === item.path
          ? 'bg-golden-yellow text-deep-teal font-bold'
          : 'text-white hover:bg-white hover:bg-opacity-20'
      }`}
    >
      {item.label}
    </Link>
  );

  return (
    <>
      {/* Mobile menu button */}
      <div className="md:hidden fixed top-4 right-4 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-golden-yellow text-deep-teal p-3 rounded-lg shadow-lg hover:bg-opacity-90 transition-all duration-300 min-w-[44px] min-h-[44px] flex items-center justify-center"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile navigation overlay */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-deep-teal bg-opacity-95">
          <div className="flex flex-col h-full pt-20 px-4">
            <nav className="flex-1">
              <div className="space-y-2">
                {navItems.map((item) => (
                  <NavLink key={item.path} item={item} />
                ))}
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileNavigation;

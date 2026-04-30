import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from '../hooks/useTranslation';

interface MobileNavigationProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const MobileNavigation = ({ isOpen, setIsOpen }: MobileNavigationProps) => {
  const { t } = useTranslation();
  const location = useLocation();

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
          ? 'bg-secondary text-primary font-bold'
          : 'text-white hover:bg-white hover:bg-opacity-20'
      }`}
    >
      {item.label}
    </Link>
  );

  return (
    <>
      {/* Mobile navigation overlay */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-primary bg-opacity-95">
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

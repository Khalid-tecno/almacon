import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from '../hooks/useTranslation';

const Navigation = () => {
  const { t } = useTranslation();
  const location = useLocation();

  const leftNavItems = [
    { path: '/', label: t('nav.home') },
    { path: '/services', label: t('nav.services') },
    { path: '/portfolio', label: t('nav.portfolio') },
  ];

  const rightNavItems = [
    { path: '/about', label: t('nav.about') },
    { path: '/team', label: t('nav.team') },
    { path: '/testimonials', label: t('nav.testimonials') },
    { path: '/contact', label: t('nav.contact') },
  ];

  const NavLink = ({ item }: { item: { path: string; label: string } }) => (
    <Link
      to={item.path}
      className={`px-4 py-2 rounded-lg transition-all duration-300 ${
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
      {/* Left side navigation - hidden on mobile */}
      <nav className="hidden md:flex fixed left-0 top-1/2 transform -translate-y-1/2 z-40 p-6">
        <div className="flex flex-col space-y-4">
          {leftNavItems.map((item) => (
            <NavLink key={item.path} item={item} />
          ))}
        </div>
      </nav>

      {/* Right side navigation - hidden on mobile */}
      <nav className="hidden md:flex fixed right-0 top-1/2 transform -translate-y-1/2 z-40 p-6">
        <div className="flex flex-col space-y-4">
          {rightNavItems.map((item) => (
            <NavLink key={item.path} item={item} />
          ))}
        </div>
      </nav>
    </>
  );
};

export default Navigation;

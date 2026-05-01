import { useTranslation } from '../hooks/useTranslation';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-primary text-white">
      {/* Golden top accent bar */}
      <div className="h-1 bg-gradient-to-r from-secondary-600 via-secondary to-secondary-600" />

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 pt-12 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Column 1: Company Brand */}
          <div className="space-y-5">
            <div className="flex items-center space-x-3">
              <img
                src="/logo_yellow.png"
                alt="ALMACON Logo"
                className="w-14 h-auto object-contain"
              />
              <div>
                <h3 className="text-xl font-bold text-secondary">ALMACON</h3>
                <p className="text-xs text-primary-200 tracking-widest uppercase">Prime</p>
              </div>
            </div>
            <p className="text-sm text-primary-100 leading-relaxed">
              {t('footer.companyMission')}
            </p>
            <p className="text-base font-semibold text-secondary italic">
              "{t('footer.slogan')}"
            </p>
            {/* Decorative divider */}
            <div className="w-16 h-0.5 bg-secondary rounded-full" />
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <div>
              <h3 className="text-base font-bold text-secondary uppercase tracking-wider mb-1">
                {t('footer.quickLinks')}
              </h3>
              <div className="w-8 h-0.5 bg-secondary rounded-full mb-4" />
            </div>
            <ul className="space-y-2.5">
              {[
                { to: '/', label: t('footer.home') },
                { to: '/services', label: t('footer.servicesPage') },
                { to: '/portfolio', label: t('footer.portfolioPage') },
                { to: '/about', label: t('footer.aboutPage') },
                { to: '/team', label: t('footer.teamPage') },
                { to: '/testimonials', label: t('footer.testimonialsPage') },
                { to: '/contact', label: t('footer.contactPage') },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-sm text-primary-100 hover:text-secondary transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-secondary rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Services */}
          <div className="space-y-4">
            <div>
              <h3 className="text-base font-bold text-secondary uppercase tracking-wider mb-1">
                {t('footer.ourServices')}
              </h3>
              <div className="w-8 h-0.5 bg-secondary rounded-full mb-4" />
            </div>
            <ul className="space-y-2.5">
              {[
                { to: '/services/block-production', label: t('footer.blockProduction') },
                { to: '/services/building-construction', label: t('footer.buildingConstruction') },
                { to: '/services/real-estate-supply', label: t('footer.realEstateSupply') },
                { to: '/services/aluminium-iron', label: t('footer.aluminiumIronWork') },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-sm text-primary-100 hover:text-secondary transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-secondary rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="space-y-4">
            <div>
              <h3 className="text-base font-bold text-secondary uppercase tracking-wider mb-1">
                {t('footer.contactInfo')}
              </h3>
              <div className="w-8 h-0.5 bg-secondary rounded-full mb-4" />
            </div>
            <div className="space-y-3.5">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-secondary bg-opacity-20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin size={14} className="text-secondary" />
                </div>
                <span className="text-sm text-primary-100 leading-relaxed">{t('footer.address')}</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-secondary bg-opacity-20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone size={14} className="text-secondary" />
                </div>
                <span className="text-sm text-primary-100">+251 911 234 567</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-secondary bg-opacity-20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail size={14} className="text-secondary" />
                </div>
                <span className="text-sm text-primary-100">info@almacon.com.et</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-secondary bg-opacity-20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Clock size={14} className="text-secondary" />
                </div>
                <span className="text-sm text-primary-100 leading-relaxed">{t('footer.businessHours')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="border-t border-secondary border-opacity-20 bg-primary-900">
        <div className="container mx-auto px-4 py-5">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">

            {/* Copyright + Badge */}
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <p className="text-sm text-primary-200 text-center sm:text-left">
                {t('footer.copyright')}
                <span className="text-secondary ml-1">{t('footer.builtForImpact')}</span>
              </p>
              <span className="text-xs bg-secondary text-primary-900 px-3 py-1 rounded-full font-bold">
                {t('footer.memberOfAlmaGroup')}
              </span>
            </div>

            {/* Social Media Icons */}
            <div className="flex items-center space-x-3">
              {/* Instagram */}
              <a href="https://www.instagram.com/my_tommorows_world?igsh=b3k0MWI4dXZpM2dk&utm_source=qr"
                target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 bg-secondary bg-opacity-10 border border-secondary border-opacity-30 rounded-lg flex items-center justify-center hover:bg-secondary hover:border-secondary transition-all duration-200 group">
                <svg width={16} height={16} viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="#EAAB21" strokeWidth="2"/>
                  <circle cx="12" cy="12" r="4" fill="none" stroke="#EAAB21" strokeWidth="2"/>
                  <circle cx="17.5" cy="6.5" r="1" fill="#EAAB21"/>
                </svg>
              </a>
              {/* X (Twitter) */}
              <a href="https://x.com/AlmaconReal"
                target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 bg-secondary bg-opacity-10 border border-secondary border-opacity-30 rounded-lg flex items-center justify-center hover:bg-secondary hover:border-secondary transition-all duration-200 group">
                <svg width={14} height={14} viewBox="0 0 24 24" fill="#EAAB21">
                  <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
                </svg>
              </a>
              {/* Facebook */}
              <a href="https://www.facebook.com/share/1KJc6W1BXX/?mibextid=wwXIfr"
                target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 bg-secondary bg-opacity-10 border border-secondary border-opacity-30 rounded-lg flex items-center justify-center hover:bg-secondary hover:border-secondary transition-all duration-200 group">
                <svg width={16} height={16} viewBox="0 0 24 24" fill="#EAAB21">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              {/* TikTok */}
              <a href="https://www.tiktok.com/@almacon.construct?_r=1&_t=ZS-95w45kkdekb"
                target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 bg-secondary bg-opacity-10 border border-secondary border-opacity-30 rounded-lg flex items-center justify-center hover:bg-secondary hover:border-secondary transition-all duration-200 group">
                <svg width={14} height={14} viewBox="0 0 24 24" fill="#EAAB21">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.84.01 5.68-.02 8.52-.03 1.4-.31 2.84-1.04 4.02-.75 1.23-1.96 2.13-3.34 2.47-1.39.36-2.9.32-4.23-.26-1.15-.49-2.13-1.35-2.74-2.42-.7-1.23-.89-2.71-.73-4.11.16-1.29.73-2.54 1.64-3.45 1.11-1.09 2.63-1.7 4.18-1.78.05 1.48-.02 2.96-.04 4.44-.68-.03-1.39.12-1.96.53-.57.4-.96 1.05-1.04 1.75-.08.71.16 1.44.66 1.94.5.5 1.23.74 1.94.66.71-.08 1.36-.47 1.75-1.04.4-.57.53-1.28.45-1.96-.08-.68-.33-1.33-.73-1.87-.4-.54-.93-.97-1.51-1.28-.58-.31-1.22-.48-1.87-.53-.02-3.36.01-6.72-.03-10.08z"/>
                </svg>
              </a>
              {/* YouTube */}
              <a href="https://www.youtube.com/@conofficia"
                target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 bg-secondary bg-opacity-10 border border-secondary border-opacity-30 rounded-lg flex items-center justify-center hover:bg-secondary hover:border-secondary transition-all duration-200 group">
                <svg width={16} height={16} viewBox="0 0 24 24" fill="#EAAB21">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.4 19.62C5.12 20 12 20 12 20s6.88 0 8.6-.38a2.78 2.78 0 0 0 1.94-2A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/>
                </svg>
              </a>
              {/* Telegram */}
              <a href="https://t.me/almacoo"
                target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 bg-secondary bg-opacity-10 border border-secondary border-opacity-30 rounded-lg flex items-center justify-center hover:bg-secondary hover:border-secondary transition-all duration-200 group">
                <svg width={16} height={16} viewBox="0 0 24 24" fill="#EAAB21">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.56c-.21 2.27-1.13 7.75-1.6 10.29-.2 1.08-.59 1.44-.97 1.47-.82.07-1.45-.54-2.23-1.06-1.24-.81-1.94-1.32-3.14-2.11-1.39-.91-.49-1.41.3-2.23.21-.21 3.77-3.46 3.83-3.74.01-.04.01-.18-.07-.26s-.21-.03-.3-.02c-.13.02-2.13 1.35-6.01 3.96-.57.39-1.08.58-1.54.57-.51-.01-1.49-.29-2.21-.52-.89-.29-1.59-.44-1.53-.93.03-.25.38-.51 1.05-.78 4.11-1.79 6.84-2.97 8.18-3.54 3.92-1.63 4.73-1.92 5.26-1.93.12 0 .37.03.54.17.14.12.18.28.2.44-.01.06 0 .12-.01.18z"/>
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="https://www.linkedin.com/in/የ-ነገየ-አለም-8aa780406"
                target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 bg-secondary bg-opacity-10 border border-secondary border-opacity-30 rounded-lg flex items-center justify-center hover:bg-secondary hover:border-secondary transition-all duration-200 group">
                <svg width={16} height={16} viewBox="0 0 24 24" fill="#EAAB21">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

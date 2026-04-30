import { useTranslation } from '../hooks/useTranslation';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-[#004d4d] text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Column 1: Company Mission */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/logo_yellow.png" 
                alt="ALMACON Logo"
                className="w-12 h-auto object-contain"
              />
              <h3 className="text-xl font-bold text-[#FFD700]">ALMACON</h3>
            </div>
            <div className="space-y-3">
              <p className="text-sm leading-relaxed">
                {t('footer.companyMission')}
              </p>
              <p className="text-lg font-semibold text-[#FFD700]">
                {t('footer.slogan')}
              </p>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-[#FFD700]">
              {t('footer.quickLinks')}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm hover:text-[#FFD700] transition-colors">
                  {t('footer.home')}
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm hover:text-[#FFD700] transition-colors">
                  {t('footer.servicesPage')}
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-sm hover:text-[#FFD700] transition-colors">
                  {t('footer.portfolioPage')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm hover:text-[#FFD700] transition-colors">
                  {t('footer.aboutPage')}
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-sm hover:text-[#FFD700] transition-colors">
                  {t('footer.teamPage')}
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-sm hover:text-[#FFD700] transition-colors">
                  {t('footer.testimonialsPage')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm hover:text-[#FFD700] transition-colors">
                  {t('footer.contactPage')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Our Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-[#FFD700]">
              {t('footer.ourServices')}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/block-production" className="text-sm hover:text-[#FFD700] transition-colors">
                  {t('footer.blockProduction')}
                </Link>
              </li>
              <li>
                <Link to="/services/building-construction" className="text-sm hover:text-[#FFD700] transition-colors">
                  {t('footer.buildingConstruction')}
                </Link>
              </li>
              <li>
                <Link to="/services/real-estate-supply" className="text-sm hover:text-[#FFD700] transition-colors">
                  {t('footer.realEstateSupply')}
                </Link>
              </li>
              <li>
                <Link to="/services/aluminium-iron" className="text-sm hover:text-[#FFD700] transition-colors">
                  {t('footer.aluminiumIronWork')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-[#FFD700]">
              {t('footer.contactInfo')}
            </h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={16} className="text-[#FFD700] mt-1 flex-shrink-0" />
                <span className="text-sm">
                  {t('footer.address')}
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-[#FFD700] flex-shrink-0" />
                <span className="text-sm">+251 911 234 567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-[#FFD700] flex-shrink-0" />
                <span className="text-sm">info@almacon.com.et</span>
              </div>
              <div className="flex items-start space-x-3">
                <Clock size={16} className="text-[#FFD700] mt-1 flex-shrink-0" />
                <span className="text-sm">
                  {t('footer.businessHours')}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="border-t border-[#FFD700] border-opacity-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            {/* Copyright and ALMA Group Badge */}
            <div className="flex flex-col items-center sm:items-start space-y-2">
              <p className="text-sm text-center sm:text-left">
                {t('footer.copyright')}
                <span className="text-[#FFD700] ml-2">
                  {t('footer.builtForImpact')}
                </span>
              </p>
              <span className="text-xs bg-[#FFD700] text-[#004d4d] px-3 py-1 rounded-full font-semibold">
                {t('footer.memberOfAlmaGroup')}
              </span>
            </div>

            {/* Social Media Icons */}
            <div className="flex items-center space-x-4">
              {/* Instagram */}
              <a 
                href="https://www.instagram.com/my_tommorows_world?igsh=b3k0MWI4dXZpM2dk&utm_source=qr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-80 hover:scale-110 transition-all duration-200"
              >
                <svg width={20} height={20} viewBox="0 0 24 24" fill="#FFD700">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="#FFD700"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" fill="#004d4d"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="#004d4d" strokeWidth="2"/>
                </svg>
              </a>
              
              {/* X (Twitter) */}
              <a 
                href="https://x.com/AlmaconReal" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-80 hover:scale-110 transition-all duration-200"
              >
                <svg width={20} height={20} viewBox="0 0 24 24" fill="#FFD700">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" fill="#FFD700"/>
                </svg>
              </a>
              
              {/* Facebook */}
              <a 
                href="https://www.facebook.com/share/1KJc6W1BXX/?mibextid=wwXIfr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-80 hover:scale-110 transition-all duration-200"
              >
                <svg width={20} height={20} viewBox="0 0 24 24" fill="#FFD700">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" fill="#FFD700"/>
                </svg>
              </a>
              
              {/* TikTok */}
              <a 
                href="https://www.tiktok.com/@almacon.construct?_r=1&_t=ZS-95w45kkdekb" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-80 hover:scale-110 transition-all duration-200"
              >
                <svg width={20} height={20} viewBox="0 0 24 24" fill="#FFD700">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.84.01 5.68-.02 8.52-.03 1.4-.31 2.84-1.04 4.02-.75 1.23-1.96 2.13-3.34 2.47-1.39.36-2.9.32-4.23-.26-1.15-.49-2.13-1.35-2.74-2.42-.7-1.23-.89-2.71-.73-4.11.16-1.29.73-2.54 1.64-3.45 1.11-1.09 2.63-1.7 4.18-1.78.05 1.48-.02 2.96-.04 4.44-.68-.03-1.39.12-1.96.53-.57.4-.96 1.05-1.04 1.75-.08.71.16 1.44.66 1.94.5.5 1.23.74 1.94.66.71-.08 1.36-.47 1.75-1.04.4-.57.53-1.28.45-1.96-.08-.68-.33-1.33-.73-1.87-.4-.54-.93-.97-1.51-1.28-.58-.31-1.22-.48-1.87-.53-.02-3.36.01-6.72-.03-10.08z" fill="#FFD700"/>
                </svg>
              </a>
              
              {/* YouTube */}
              <a 
                href="https://www.youtube.com/@conofficia" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-80 hover:scale-110 transition-all duration-200"
              >
                <svg width={20} height={20} viewBox="0 0 24 24" fill="#FFD700">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.4 19.62C5.12 20 12 20 12 20s6.88 0 8.6-.38a2.78 2.78 0 0 0 1.94-2A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" fill="#FFD700"/>
                </svg>
              </a>
              
              {/* Telegram */}
              <a 
                href="https://t.me/almacoo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-80 hover:scale-110 transition-all duration-200"
              >
                <svg width={20} height={20} viewBox="0 0 24 24" fill="#FFD700">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.56c-.21 2.27-1.13 7.75-1.6 10.29-.2 1.08-.59 1.44-.97 1.47-.82.07-1.45-.54-2.23-1.06-1.24-.81-1.94-1.32-3.14-2.11-1.39-.91-.49-1.41.3-2.23.21-.21 3.77-3.46 3.83-3.74.01-.04.01-.18-.07-.26s-.21-.03-.3-.02c-.13.02-2.13 1.35-6.01 3.96-.57.39-1.08.58-1.54.57-.51-.01-1.49-.29-2.21-.52-.89-.29-1.59-.44-1.53-.93.03-.25.38-.51 1.05-.78 4.11-1.79 6.84-2.97 8.18-3.54 3.92-1.63 4.73-1.92 5.26-1.93.12 0 .37.03.54.17.14.12.18.28.2.44-.01.06 0 .12-.01.18z" fill="#FFD700"/>
                </svg>
              </a>
              
              {/* LinkedIn */}
              <a 
                href="https://www.linkedin.com/in/የ-ነገየ-አለም-8aa780406" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-80 hover:scale-110 transition-all duration-200"
              >
                <svg width={20} height={20} viewBox="0 0 24 24" fill="#FFD700">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" fill="#FFD700"/>
                  <rect x="2" y="9" width="4" height="12" fill="#FFD700"/>
                  <circle cx="4" cy="4" r="2" fill="#FFD700"/>
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

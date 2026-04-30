
import { Globe, ChevronDown, Search, Menu } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';
import { useLanguage } from '../contexts/LanguageContext';
import { useState, useEffect, useRef } from 'react';

const Header = () => {
  const { language } = useTranslation();
  const { setLanguage } = useLanguage();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  return (
    <header className="md:absolute md:top-0 md:left-0 md:right-0 md:z-30 md:p-4 md:sm:p-6">
      {/* Mobile Layout - Professional Tiered Design */}
      <div className="md:hidden bg-[#1A434E] border-b border-slate-700 relative z-30">
        <div className="flex flex-col items-center gap-y-4 p-4">
          {/* Row 1: Language Selector (left) and Hamburger Menu (right) */}
          <div className="w-full flex justify-between items-center">
            {/* Language Dropdown */}
            <div className="relative z-[100]" ref={dropdownRef}>
              <button
                onTouchStart={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setIsDropdownOpen(!isDropdownOpen);
                }}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setIsDropdownOpen(!isDropdownOpen);
                }}
                className="flex items-center space-x-2 text-white text-sm hover:text-golden-yellow transition-colors bg-white bg-opacity-10 px-3 py-2 rounded-lg min-h-[44px] active:scale-95 active:bg-opacity-30 cursor-pointer"
              >
                <Globe size={16} />
                <span className="hidden xs:inline">{language === 'en' ? 'Change Languages' : 'ቋንቋዎችን ይቀይሩ'}</span>
                <span className="xs:hidden">{language === 'en' ? 'Lang' : 'ቋን'}</span>
                <ChevronDown size={14} className={`transform transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Dropdown Menu - Absolute Position */}
              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg overflow-hidden z-[100]">
                  <button
                    onTouchStart={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setLanguage('en');
                      setIsDropdownOpen(false);
                    }}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setLanguage('en');
                      setIsDropdownOpen(false);
                    }}
                    className={`w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-gray-100 transition-colors cursor-pointer ${
                    language === 'en' ? 'bg-gray-100 text-golden-yellow' : 'text-gray-700'
                  }`}
                  >
                    <span className="text-lg flex items-center">🇬🇧</span>
                    <div className="flex items-center">
                      <div>
                        <div className="font-medium">English</div>
                        <div className="text-xs text-gray-500">English</div>
                      </div>
                    </div>
                  </button>
                  <button
                    onTouchStart={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setLanguage('am');
                      setIsDropdownOpen(false);
                    }}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setLanguage('am');
                      setIsDropdownOpen(false);
                    }}
                    className={`w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-gray-100 transition-colors cursor-pointer ${
                    language === 'am' ? 'bg-gray-100 text-golden-yellow' : 'text-gray-700'
                  }`}
                  >
                    <span className="text-lg flex items-center">🇪🇹</span>
                    <div className="flex items-center">
                      <div>
                        <div className="font-medium">አማርኛ</div>
                        <div className="text-xs text-gray-500">Amharic</div>
                      </div>
                    </div>
                  </button>
                </div>
              )}
            </div>

            {/* Hamburger Menu (placeholder for navigation) */}
            <button className="flex items-center justify-center text-white hover:text-golden-yellow transition-colors bg-white bg-opacity-10 px-3 py-2 rounded-lg min-h-[44px] min-w-[44px] active:scale-95 active:bg-opacity-30 cursor-pointer">
              <Menu size={20} />
            </button>
          </div>

          {/* Row 2: Centered Logo with significant padding */}
          <div className="py-4">
            <div className="mx-auto">
              <img 
                src="/logo_yellow.png" 
                alt="ALMACON Logo"
                className="w-32 h-auto object-contain"
              />
            </div>
          </div>

          {/* Row 3: Social Icons and Search Bar */}
          <div className="w-full flex flex-col items-center gap-y-4">
            {/* Social Media Icons - Centered Horizontal Row */}
            <div className="flex justify-center space-x-3">
              {/* Instagram */}
              <a 
                href="https://www.instagram.com/my_tommorows_world?igsh=b3k0MWI4dXZpM2dk&utm_source=qr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity cursor-pointer min-h-[44px] min-w-[44px] p-2 flex items-center justify-center"
              >
                <svg width={20} height={20} viewBox="0 0 24 24" fill="#F5A623">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="#F5A623"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" fill="white"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="white" strokeWidth="2"/>
                </svg>
              </a>
              
              {/* X (Twitter) */}
              <a 
                href="https://x.com/AlmaconReal" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity cursor-pointer min-h-[44px] min-w-[44px] p-2 flex items-center justify-center"
              >
                <svg width={20} height={20} viewBox="0 0 24 24" fill="#F5A623">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" fill="#F5A623"/>
                </svg>
              </a>
              
              {/* Facebook */}
              <a 
                href="https://www.facebook.com/share/1KJc6W1BXX/?mibextid=wwXIfr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity cursor-pointer min-h-[44px] min-w-[44px] p-2 flex items-center justify-center"
              >
                <svg width={20} height={20} viewBox="0 0 24 24" fill="#F5A623">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" fill="#F5A623"/>
                </svg>
              </a>
              
              {/* TikTok */}
              <a 
                href="https://www.tiktok.com/@almacon.construct?_r=1&_t=ZS-95w45kkdekb" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity cursor-pointer min-h-[44px] min-w-[44px] p-2 flex items-center justify-center"
              >
                <svg width={20} height={20} viewBox="0 0 24 24" fill="#F5A623">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.84.01 5.68-.02 8.52-.03 1.4-.31 2.84-1.04 4.02-.75 1.23-1.96 2.13-3.34 2.47-1.39.36-2.9.32-4.23-.26-1.15-.49-2.13-1.35-2.74-2.42-.7-1.23-.89-2.71-.73-4.11.16-1.29.73-2.54 1.64-3.45 1.11-1.09 2.63-1.7 4.18-1.78.05 1.48-.02 2.96-.04 4.44-.68-.03-1.39.12-1.96.53-.57.4-.96 1.05-1.04 1.75-.08.71.16 1.44.66 1.94.5.5 1.23.74 1.94.66.71-.08 1.36-.47 1.75-1.04.4-.57.53-1.28.45-1.96-.08-.68-.33-1.33-.73-1.87-.4-.54-.93-.97-1.51-1.28-.58-.31-1.22-.48-1.87-.53-.02-3.36.01-6.72-.03-10.08z" fill="#F5A623"/>
                </svg>
              </a>
              
              {/* YouTube */}
              <a 
                href="https://www.youtube.com/@conofficia" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity cursor-pointer min-h-[44px] min-w-[44px] p-2 flex items-center justify-center"
              >
                <svg width={20} height={20} viewBox="0 0 24 24" fill="#F5A623">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.4 19.62C5.12 20 12 20 12 20s6.88 0 8.6-.38a2.78 2.78 0 0 0 1.94-2A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" fill="#F5A623"/>
                </svg>
              </a>
              
              {/* Telegram */}
              <a 
                href="https://t.me/almacoo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity cursor-pointer min-h-[44px] min-w-[44px] p-2 flex items-center justify-center"
              >
                <svg width={20} height={20} viewBox="0 0 24 24" fill="#F5A623">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.56c-.21 2.27-1.13 7.75-1.6 10.29-.2 1.08-.59 1.44-.97 1.47-.82.07-1.45-.54-2.23-1.06-1.24-.81-1.94-1.32-3.14-2.11-1.39-.91-.49-1.41.3-2.23.21-.21 3.77-3.46 3.83-3.74.01-.04.01-.18-.07-.26s-.21-.03-.3-.02c-.13.02-2.13 1.35-6.01 3.96-.57.39-1.08.58-1.54.57-.51-.01-1.49-.29-2.21-.52-.89-.29-1.59-.44-1.53-.93.03-.25.38-.51 1.05-.78 4.11-1.79 6.84-2.97 8.18-3.54 3.92-1.63 4.73-1.92 5.26-1.93.12 0 .37.03.54.17.14.12.18.28.2.44-.01.06 0 .12-.01.18z" fill="#F5A623"/>
                </svg>
              </a>
              
              {/* LinkedIn */}
              <a 
                href="https://www.linkedin.com/in/የ-ነገየ-አለም-8aa780406" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity cursor-pointer min-h-[44px] min-w-[44px] p-2 flex items-center justify-center"
              >
                <svg width={20} height={20} viewBox="0 0 24 24" fill="#F5A623">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" fill="#F5A623"/>
                  <rect x="2" y="9" width="4" height="12" fill="#F5A623"/>
                  <circle cx="4" cy="4" r="2" fill="#F5A623"/>
                </svg>
              </a>
            </div>

            {/* Search Bar - 90% width with margin-bottom */}
            <div className="relative w-[90%] mb-4">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="www.almaconprime.org"
                  className="w-full bg-white bg-opacity-10 backdrop-blur-md border border-white border-opacity-30 rounded-lg pl-10 pr-12 py-3 text-white placeholder-gray-300 focus:outline-none focus:border-golden-yellow transition-colors min-h-[48px]"
                />
                {/* Search icon inside the bar on the left */}
                <Search 
                  size={16} 
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                />
                {/* Golden yellow triangular accent on the right */}
                <div 
                  className="absolute right-0 top-0 w-8 h-full bg-golden-yellow rounded-r-lg"
                  style={{
                    clipPath: 'polygon(100% 0, 0 0, 100% 100%)'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Layout - Horizontal */}
      <div className="hidden md:flex justify-between items-start">
        {/* Left side: Language selector and Logo */}
        <div className="flex flex-col items-start space-y-6">
          {/* Language Dropdown */}
          <div className="relative z-50" ref={dropdownRef}>
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setIsDropdownOpen(!isDropdownOpen);
              }}
              className="flex items-center space-x-2 text-white text-sm hover:text-golden-yellow transition-colors bg-white bg-opacity-10 px-3 py-2 rounded-lg backdrop-blur-sm min-h-[44px] active:scale-95 active:bg-opacity-30 cursor-pointer"
            >
              <Globe size={16} />
              <span>{language === 'en' ? 'Change Languages' : 'ቋንቋዎችን ይቀይሩ'}</span>
              <ChevronDown size={14} className={`transform transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl overflow-hidden z-[60]">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setLanguage('en');
                    setIsDropdownOpen(false);
                  }}
                  className={`w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-gray-100 transition-colors cursor-pointer ${
                    language === 'en' ? 'bg-gray-100 text-golden-yellow' : 'text-gray-700'
                  }`}
                >
                  <span className="text-lg">🇬🇧</span>
                  <div>
                    <div className="font-medium">English</div>
                    <div className="text-xs text-gray-500">English</div>
                  </div>
                </button>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setLanguage('am');
                    setIsDropdownOpen(false);
                  }}
                  className={`w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-gray-100 transition-colors cursor-pointer ${
                    language === 'am' ? 'bg-gray-100 text-golden-yellow' : 'text-gray-700'
                  }`}
                >
                  <span className="text-lg">🇪🇹</span>
                  <div>
                    <div className="font-medium">አማርኛ</div>
                    <div className="text-xs text-gray-500">Amharic</div>
                  </div>
                </button>
              </div>
            )}
          </div>
          
          {/* Logo - large brand size on desktop */}
          <div className="flex items-start justify-start">
            <img 
              src="/logo_yellow.png" 
              alt="ALMACON Logo"
              className="w-64 h-auto object-contain"
            />
          </div>
        </div>

        {/* Right side: Social media icons and Search */}
        <div className="flex flex-col items-end space-y-4">
          {/* Social Media Icons - horizontal row */}
          <div className="flex items-center space-x-3">
            {/* Instagram */}
            <a 
              href="https://www.instagram.com/my_tommorows_world?igsh=b3k0MWI4dXZpM2dk&utm_source=qr" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity cursor-pointer min-w-[44px] min-h-[44px] p-2"
            >
              <svg width={18} height={18} className="sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="#F5A623">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="#F5A623"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" fill="white"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="white" strokeWidth="2"/>
              </svg>
            </a>
            
            {/* X (Twitter) */}
            <a 
              href="https://x.com/AlmaconReal" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity cursor-pointer min-w-[44px] min-h-[44px] p-2"
            >
              <svg width={18} height={18} className="sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="#F5A623">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" fill="#F5A623"/>
              </svg>
            </a>
            
            {/* Facebook */}
            <a 
              href="https://www.facebook.com/share/1KJc6W1BXX/?mibextid=wwXIfr" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity cursor-pointer min-w-[44px] min-h-[44px] p-2"
            >
              <svg width={18} height={18} className="sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="#F5A623">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" fill="#F5A623"/>
              </svg>
            </a>
            
            {/* TikTok */}
            <a 
              href="https://www.tiktok.com/@almacon.construct?_r=1&_t=ZS-95w45kkdekb" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity cursor-pointer min-w-[44px] min-h-[44px] p-2"
            >
              <svg width={18} height={18} className="sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="#F5A623">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.84.01 5.68-.02 8.52-.03 1.4-.31 2.84-1.04 4.02-.75 1.23-1.96 2.13-3.34 2.47-1.39.36-2.9.32-4.23-.26-1.15-.49-2.13-1.35-2.74-2.42-.7-1.23-.89-2.71-.73-4.11.16-1.29.73-2.54 1.64-3.45 1.11-1.09 2.63-1.7 4.18-1.78.05 1.48-.02 2.96-.04 4.44-.68-.03-1.39.12-1.96.53-.57.4-.96 1.05-1.04 1.75-.08.71.16 1.44.66 1.94.5.5 1.23.74 1.94.66.71-.08 1.36-.47 1.75-1.04.4-.57.53-1.28.45-1.96-.08-.68-.33-1.33-.73-1.87-.4-.54-.93-.97-1.51-1.28-.58-.31-1.22-.48-1.87-.53-.02-3.36.01-6.72-.03-10.08z" fill="#F5A623"/>
              </svg>
            </a>
            
            {/* YouTube */}
            <a 
              href="https://www.youtube.com/@conofficia" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity cursor-pointer min-w-[44px] min-h-[44px] p-2"
            >
              <svg width={18} height={18} className="sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="#F5A623">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.4 19.62C5.12 20 12 20 12 20s6.88 0 8.6-.38a2.78 2.78 0 0 0 1.94-2A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" fill="#F5A623"/>
              </svg>
            </a>
            
            {/* Telegram */}
            <a 
              href="https://t.me/almacoo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity cursor-pointer min-w-[44px] min-h-[44px] p-2"
            >
              <svg width={18} height={18} className="sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="#F5A623">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.56c-.21 2.27-1.13 7.75-1.6 10.29-.2 1.08-.59 1.44-.97 1.47-.82.07-1.45-.54-2.23-1.06-1.24-.81-1.94-1.32-3.14-2.11-1.39-.91-.49-1.41.3-2.23.21-.21 3.77-3.46 3.83-3.74.01-.04.01-.18-.07-.26s-.21-.03-.3-.02c-.13.02-2.13 1.35-6.01 3.96-.57.39-1.08.58-1.54.57-.51-.01-1.49-.29-2.21-.52-.89-.29-1.59-.44-1.53-.93.03-.25.38-.51 1.05-.78 4.11-1.79 6.84-2.97 8.18-3.54 3.92-1.63 4.73-1.92 5.26-1.93.12 0 .37.03.54.17.14.12.18.28.2.44-.01.06 0 .12-.01.18z" fill="#F5A623"/>
              </svg>
            </a>
            
            {/* LinkedIn */}
            <a 
              href="https://www.linkedin.com/in/የ-ነገየ-አለም-8aa780406" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity cursor-pointer min-w-[44px] min-h-[44px] p-2"
            >
              <svg width={18} height={18} className="sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="#F5A623">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" fill="#F5A623"/>
                <rect x="2" y="9" width="4" height="12" fill="#F5A623"/>
                <circle cx="4" cy="4" r="2" fill="#F5A623"/>
              </svg>
            </a>
          </div>
          
          {/* Search Bar with glassmorphism effect and triangular accent */}
          <div className="relative">
            <div className="relative">
              <input 
                type="text" 
                placeholder="www.almaconprime.org"
                className="bg-white bg-opacity-20 backdrop-blur-md border border-white border-opacity-30 rounded-lg pl-10 pr-12 py-3 text-white placeholder-gray-300 focus:outline-none focus:border-golden-yellow transition-colors min-h-[48px] h-12 w-64"
              />
              {/* Search icon inside the bar on the left */}
              <Search 
                size={16} 
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-300"
              />
              {/* Golden yellow triangular accent on the right */}
              <div 
                className="absolute right-0 top-0 w-8 h-full bg-golden-yellow rounded-r-lg"
                style={{
                  clipPath: 'polygon(100% 0, 0 0, 100% 100%)'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

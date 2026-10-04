import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

interface NavbarProps {
  onOpenBooking: () => void;
  onExploreFleet: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking, onExploreFleet }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { lang, toggleLang, t, isRTL } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t.navHome, href: '#hero' },
    { label: t.navFleet, href: '#fleet' },
    { label: t.navServices, href: '#services' },
    { label: t.navHowItWorks, href: '#how-it-works' },
    { label: t.navLocations, href: '#locations' },
    { label: t.navContact, href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 md:px-6 pointer-events-none"
      >
        <div
          className={`pointer-events-auto w-full max-w-[1400px] h-[72px] md:h-[78px] rounded-full px-4 sm:px-6 md:px-8 flex items-center justify-between transition-all duration-300 ${
            isScrolled
              ? 'glass-tint-dark'
              : 'bg-[#070707]/90 backdrop-blur-md border border-white/10 shadow-[0_16px_45px_rgba(0,0,0,0.2)]'
          }`}
        >
          {/* Brand Zone */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#hero');
            }}
            className={`flex items-baseline gap-2 group cursor-pointer ${isRTL ? 'text-right' : 'text-left'}`}
          >
            <span className="text-xl md:text-2xl font-semibold tracking-tight text-white transition-opacity group-hover:opacity-90">
              {t.brandShort}
            </span>
            <span className="text-xs text-[#F87171] font-normal hidden sm:inline-block">
              {t.brandSubtitle}
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-white/80">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="hover:text-white transition-colors py-1 relative group"
              >
                {link.label}
                <span className={`absolute bottom-0 left-0 right-0 h-[2px] bg-[#DC2626] scale-x-0 group-hover:scale-x-100 transition-transform ${isRTL ? 'origin-right' : 'origin-left'} duration-200`} />
              </a>
            ))}
          </nav>

          {/* Right Action CTAs & Language Switcher */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            {/* Language Switch Button */}
            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
              onClick={toggleLang}
              type="button"
              aria-label={lang === 'ar' ? 'Switch to English' : 'التحويل إلى العربية'}
              className="h-[38px] md:h-[42px] px-3 md:px-4 rounded-full text-xs font-semibold text-white/90 bg-white/[0.08] hover:bg-white/[0.18] border border-white/15 transition-all flex items-center gap-1.5 cursor-pointer shadow-2xs whitespace-nowrap"
            >
              <Globe size={14} className="text-[#F87171]" />
              <span className="tracking-wide">{lang === 'ar' ? 'EN' : 'عربي'}</span>
            </motion.button>

            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
              onClick={onExploreFleet}
              type="button"
              className="hidden sm:inline-flex items-center justify-center px-4 md:px-5 py-2.5 text-xs md:text-sm font-medium text-[#070707] bg-white hover:bg-neutral-100 rounded-full transition-all duration-200 whitespace-nowrap cursor-pointer shadow-xs"
            >
              {t.ctaBrowseFleet}
            </motion.button>

            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
              onClick={onOpenBooking}
              type="button"
              className="inline-flex items-center justify-center px-4 md:px-6 py-2.5 text-xs md:text-sm font-semibold text-white bg-[#DC2626] hover:bg-[#B91C1C] rounded-full transition-all duration-200 shadow-[0_4px_18px_rgba(220,38,38,0.35)] whitespace-nowrap cursor-pointer"
            >
              {t.ctaBookNow}
            </motion.button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              aria-label={t.menuTitle}
              className="lg:hidden p-2 text-white/90 hover:text-white rounded-full hover:bg-white/10 transition-colors"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/75 backdrop-blur-md lg:hidden flex flex-col justify-end"
          >
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className={`bg-[#070707] border-t border-white/10 rounded-t-[32px] p-6 pb-10 space-y-6 ${isRTL ? 'text-right' : 'text-left'}`}
            >
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <span className="text-lg font-semibold text-white">{t.menuTitle}</span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-white/60 hover:text-white p-1"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Language Switcher in Mobile Drawer */}
              <div className="flex items-center justify-between py-2 border-b border-white/10">
                <span className="text-xs text-white/60">
                  {lang === 'ar' ? 'اللغة / Language' : 'Language / اللغة'}
                </span>
                <button
                  onClick={() => {
                    toggleLang();
                  }}
                  className="px-4 py-1.5 rounded-full text-xs font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/15 flex items-center gap-2 cursor-pointer transition-colors"
                >
                  <Globe size={13} className="text-[#F87171]" />
                  <span>{lang === 'ar' ? 'English' : 'العربية'}</span>
                </button>
              </div>

              <div className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className={`text-base text-white/80 hover:text-white py-2 flex items-center justify-between ${isRTL ? 'text-right' : 'text-left'}`}
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight size={16} className="text-[#F87171]" />
                  </button>
                ))}
              </div>

              <div className="pt-4 grid grid-cols-2 gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onExploreFleet();
                  }}
                  className="w-full py-3 text-sm font-medium bg-white text-[#070707] rounded-full text-center"
                >
                  {t.ctaBrowseFleet}
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full py-3 text-sm font-semibold bg-[#DC2626] text-white rounded-full text-center"
                >
                  {t.ctaBookNow}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

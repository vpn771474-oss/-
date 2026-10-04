import React from 'react';
import { rentalData } from '../data/rentalData';
import { Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Footer: React.FC = () => {
  const { t, isRTL, lang, toggleLang } = useLanguage();

  const navLinks = [
    { label: t.navHome, href: '#hero' },
    { label: t.navFleet, href: '#fleet' },
    { label: t.navServices, href: '#services' },
    { label: t.navHowItWorks, href: '#how-it-works' },
    { label: t.navLocations, href: '#locations' },
    { label: t.navContact, href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#070707] text-white pt-20 pb-12 border-t border-white/10">
      <div className={`max-w-[1450px] mx-auto px-5 md:px-8 lg:px-12 ${isRTL ? 'text-right' : 'text-left'}`}>
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14 pb-16 border-b border-white/10">
          
          {/* Brand Info (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-semibold tracking-tight text-white">
                {t.brandShort}
              </span>
              <span className="text-sm text-[#F87171] font-normal">
                {t.brandSubtitle}
              </span>
            </div>

            <p className="text-sm text-white/60 max-w-sm leading-relaxed font-normal">
              {t.footerDesc}
            </p>

            <div className="pt-2 text-xs text-white/50 space-y-1">
              <p>{t.brandCity} – {t.brandCountry}</p>
              {rentalData.phone && <p>Tel: {rentalData.phone}</p>}
              {rentalData.email && <p>Email: {rentalData.email}</p>}
            </div>

            {/* Quick Language Toggle in Footer */}
            <div className="pt-2">
              <button
                onClick={toggleLang}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.08] hover:bg-white/[0.15] border border-white/15 text-xs text-white/90 cursor-pointer transition-colors"
              >
                <Globe size={13} className="text-[#F87171]" />
                <span>{lang === 'ar' ? 'English Version' : 'النسخة العربية'}</span>
              </button>
            </div>
          </div>

          {/* Quick Links (4 cols) */}
          <div className="md:col-span-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#F87171] block mb-5">
              {t.footerQuickLinks}
            </span>
            <ul className="grid grid-cols-2 gap-3 text-sm text-white/70">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="hover:text-[#DC2626] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Disclaimer & Positioning (3 cols) */}
          <div className="md:col-span-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#F87171] block mb-5">
              {t.footerDisclaimerTitle}
            </span>
            <p className="text-xs text-white/50 leading-relaxed font-light">
              {t.footerDisclaimerText}
            </p>

            {/* Configurable Social Links */}
            {(rentalData.socialLinks.instagram ||
              rentalData.socialLinks.facebook ||
              rentalData.socialLinks.x) && (
              <div className="flex items-center gap-4 mt-6 text-xs text-white/60">
                {rentalData.socialLinks.instagram && (
                  <a href={rentalData.socialLinks.instagram} target="_blank" rel="noreferrer" className="hover:text-white">
                    Instagram
                  </a>
                )}
                {rentalData.socialLinks.facebook && (
                  <a href={rentalData.socialLinks.facebook} target="_blank" rel="noreferrer" className="hover:text-white">
                    Facebook
                  </a>
                )}
                {rentalData.socialLinks.x && (
                  <a href={rentalData.socialLinks.x} target="_blank" rel="noreferrer" className="hover:text-white">
                    X
                  </a>
                )}
              </div>
            )}
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>{t.footerCopyright}</p>
          <p className="font-light">{t.footerTagline}</p>
        </div>

      </div>
    </footer>
  );
};

import React from 'react';
import { rentalData } from '../data/rentalData';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

interface HeroProps {
  onOpenBooking: () => void;
  onExploreFleet: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onExploreFleet }) => {
  const { t, isRTL } = useLanguage();

  return (
    <section id="hero" className="relative bg-[#FFFFFF] pt-[150px] md:pt-[180px] lg:pt-[190px] pb-12 md:pb-16 overflow-hidden">
      <div className="max-w-[1450px] mx-auto px-5 md:px-8 lg:px-12 flex flex-col items-center text-center">
        
        {/* Eyebrow Label */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center justify-center text-xs md:text-sm font-semibold tracking-wide text-[#DC2626] mb-5 sm:mb-6"
        >
          <span>{t.heroEyebrow}</span>
        </motion.div>

        {/* Huge Centered Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-[1050px] text-[42px] sm:text-[56px] md:text-[72px] lg:text-[88px] leading-[1.08] font-medium tracking-tight text-[#070707] mb-6 sm:mb-7"
        >
          {t.heroHeadline1}
          <br className="hidden sm:inline" />
          {' '}{t.heroHeadline2}
        </motion.h1>

        {/* Short Centered Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-[700px] text-base md:text-lg lg:text-xl text-[#646A70] leading-relaxed mb-8 md:mb-10 font-normal"
        >
          {t.heroDescription}
        </motion.p>

        {/* Two Rounded CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full sm:w-auto mb-16 md:mb-20"
        >
          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ y: 0 }}
            onClick={onOpenBooking}
            type="button"
            className="w-full sm:w-auto h-[54px] md:h-[58px] px-8 md:px-10 rounded-full bg-[#DC2626] hover:bg-[#B91C1C] text-white text-base font-semibold shadow-[0_8px_25px_rgba(220,38,38,0.3)] transition-all duration-300 flex items-center justify-center cursor-pointer"
          >
            {t.ctaBookNow}
          </motion.button>

          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ y: 0 }}
            onClick={onExploreFleet}
            type="button"
            className="w-full sm:w-auto h-[54px] md:h-[58px] px-8 md:px-10 rounded-full bg-[#F1F3F5] hover:bg-[#E7EAEF] text-[#111111] text-base font-medium transition-all duration-300 flex items-center justify-center cursor-pointer"
          >
            {t.ctaBrowseFleet}
          </motion.button>
        </motion.div>

        {/* Large Rounded Vehicle Visuals (Editorial Layout) */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="w-full grid grid-cols-1 lg:grid-cols-12 gap-5 md:gap-7 items-stretch"
        >
          
          {/* Large Dominant Vehicle Card (8 cols on desktop) */}
          <div className={`lg:col-span-8 group relative rounded-[28px] md:rounded-[34px] overflow-hidden min-h-[380px] sm:min-h-[460px] md:min-h-[520px] bg-neutral-900 border border-black/5 shadow-[0_20px_45px_rgba(0,0,0,0.06)] ${isRTL ? 'text-right' : 'text-left'}`}>
            <img
              src={rentalData.assets.heroSedan}
              alt="Executive Sedan"
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
            {/* Subtle dark glass gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 transition-opacity duration-300 pointer-events-none" />

            {/* Content overlay */}
            <div className="relative z-10 h-full p-6 sm:p-8 md:p-10 flex flex-col justify-end">
              <span className="text-xs md:text-sm text-[#F87171] font-semibold tracking-wider mb-2">
                {t.heroLargeCardEyebrow}
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-white max-w-lg leading-snug">
                {t.heroLargeCardTitle1}
                <br />
                {t.heroLargeCardTitle2}
              </h2>
            </div>
          </div>

          {/* Small Supporting Vehicle Card (4 cols on desktop) */}
          <div className={`lg:col-span-4 group relative rounded-[28px] md:rounded-[34px] overflow-hidden min-h-[320px] sm:min-h-[380px] lg:min-h-[520px] bg-neutral-900 border border-black/5 shadow-[0_20px_45px_rgba(0,0,0,0.06)] ${isRTL ? 'text-right' : 'text-left'}`}>
            <img
              src={rentalData.assets.heroSuv}
              alt="Luxury SUV"
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
            {/* Subtle dark overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/10 transition-opacity duration-300 pointer-events-none" />

            {/* Content overlay */}
            <div className="relative z-10 h-full p-6 sm:p-8 md:p-10 flex flex-col justify-end">
              <span className="text-xs md:text-sm text-[#C6A46A] font-semibold tracking-wider mb-2">
                {t.heroSmallCardCategory}
              </span>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-medium text-white max-w-xs leading-snug">
                {t.heroSmallCardTitle1}
                <br />
                {t.heroSmallCardTitle2}
              </h3>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
};

import React from 'react';
import { rentalData } from '../data/rentalData';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

export const AboutSection: React.FC = () => {
  const { t, isRTL } = useLanguage();

  return (
    <section className="py-20 md:py-28 bg-[#FFFFFF]">
      <div className="max-w-[1450px] mx-auto px-5 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-14 items-center">
          
          {/* Visual Side (6 cols) */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative aspect-[16/11] rounded-[28px] md:rounded-[36px] overflow-hidden bg-neutral-900 border border-[#E2E6E9] shadow-[0_16px_40px_rgba(0,0,0,0.04)] group"
          >
            <img
              src={rentalData.assets.heroSedan}
              alt="Architectural Mobility Environment"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            <div className={`absolute bottom-6 ${isRTL ? 'right-6' : 'left-6'}`}>
              <span className="text-xs text-white/90 bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10 font-light">
                {t.brandCity} • {t.brandCountry}
              </span>
            </div>
          </motion.div>

          {/* Editorial Text (6 cols) */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className={`lg:col-span-6 flex flex-col justify-center ${isRTL ? 'text-right' : 'text-left'}`}
          >
            <span className="text-xs md:text-sm font-semibold tracking-wide text-[#DC2626] mb-3 block">
              {t.aboutEyebrow}
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#070707] leading-tight mb-6">
              {t.aboutTitle1}
              <br />
              {t.aboutTitle2}
            </h2>

            <p className="text-base md:text-lg text-[#646A70] leading-relaxed mb-6 font-normal">
              {t.aboutP1}
            </p>

            <p className="text-sm md:text-base text-[#646A70]/90 leading-relaxed font-normal mb-8">
              {t.aboutP2}
            </p>

            <div className="pt-6 border-t border-[#E2E6E9] flex items-center justify-between text-xs text-[#646A70]">
              <span>{t.identityLabel} {t.identityValue}</span>
              <span>{t.headquartersLabel} {t.brandCity}</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { rentalData } from '../data/rentalData';
import { ArrowLeft, ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

interface EditorialAutomotiveProps {
  onExploreFleet: () => void;
}

export const EditorialAutomotive: React.FC<EditorialAutomotiveProps> = ({ onExploreFleet }) => {
  const { t, isRTL } = useLanguage();

  return (
    <section className="relative overflow-hidden py-24 md:py-32 bg-[#050507]">
      {/* Background ambient automotive reflections */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-900/60 via-[#050507] to-black pointer-events-none" />
      <div className="absolute top-1/4 -right-40 w-96 h-96 bg-[#DC2626]/10 rounded-full blur-[120px] pointer-events-none" />

      {/* The Extended Rectangle with Dark Glass Tint ("أسود زجاجي مثل التضليل") */}
      <div className="max-w-[1450px] mx-auto px-5 md:px-8 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-[32px] md:rounded-[44px] overflow-hidden glass-tint-dark p-8 sm:p-12 lg:p-16 border border-white/15 shadow-[0_32px_80px_rgba(0,0,0,0.7)]"
        >
          {/* Glass sheen highlight on top edge */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Text Content (6 cols) */}
            <div className={`lg:col-span-6 flex flex-col items-start ${isRTL ? 'text-right' : 'text-left'}`}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/10 backdrop-blur-md mb-5">
                <Sparkles size={13} className="text-[#DC2626]" />
                <span className="text-xs font-semibold tracking-wider text-[#F87171]">
                  {t.editorialEyebrow}
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.16] text-white mb-6">
                {t.editorialTitle1}
                <br />
                {t.editorialTitle2}
              </h2>

              <p className="text-base md:text-lg text-white/70 max-w-lg leading-relaxed mb-8 font-normal">
                {t.editorialDesc}
              </p>

              <motion.button
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ y: 0, scale: 0.98 }}
                onClick={onExploreFleet}
                type="button"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#DC2626] hover:bg-[#B91C1C] text-white text-base font-semibold transition-all duration-300 cursor-pointer shadow-[0_12px_32px_rgba(220,38,38,0.45)]"
              >
                <span>{t.editorialCta}</span>
                {isRTL ? <ArrowLeft size={18} /> : <ArrowRight size={18} />}
              </motion.button>
            </div>

            {/* Visual Asset (6 cols) */}
            <div className="lg:col-span-6 relative aspect-[16/10] rounded-[24px] md:rounded-[32px] overflow-hidden border border-white/15 shadow-[0_24px_50px_rgba(0,0,0,0.6)] group">
              <img
                src={rentalData.assets.editorialNight}
                alt="Editorial Night Drive"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center group-hover:scale-[1.04] transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent pointer-events-none" />
              <div className={`absolute bottom-5 ${isRTL ? 'right-5' : 'left-5'}`}>
                <span className="text-xs text-white/90 bg-black/70 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15 font-light">
                  {t.editorialTag}
                </span>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

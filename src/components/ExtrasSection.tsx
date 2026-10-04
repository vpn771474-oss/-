import React from 'react';
import { rentalData, RentalExtra } from '../data/rentalData';
import { Check } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

interface ExtrasSectionProps {
  selectedExtras: string[];
  onToggleExtra: (extraId: string) => void;
  onContinueToBooking: () => void;
}

export const ExtrasSection: React.FC<ExtrasSectionProps> = ({
  selectedExtras,
  onToggleExtra,
  onContinueToBooking
}) => {
  const { t, isRTL, lang } = useLanguage();

  const extrasList = rentalData.extras.map((extra) => {
    let title = extra.title;
    let desc = extra.description;
    if (lang === 'en') {
      const map: Record<string, { title: string; desc: string }> = {
        'extra-driver': {
          title: 'Additional Driver',
          desc: 'Authorize an approved additional driver to share driving duties on longer journeys.'
        },
        'child-seat': {
          title: 'Child Safety Seat',
          desc: 'Certified, safe child seat meeting international standards for various age groups.'
        },
        'navigation': {
          title: 'GPS Navigation System',
          desc: 'Dedicated precision guidance unit for routes and major landmarks across Riyadh.'
        },
        'protection-plus': {
          title: 'Extra Protection Coverage',
          desc: 'Enhanced protection package providing peace of mind during everyday city driving.'
        }
      };
      const loc = map[extra.id];
      if (loc) {
        title = loc.title;
        desc = loc.desc;
      }
    }
    return { ...extra, title, description: desc };
  });

  return (
    <section className="py-16 md:py-20 bg-[#F4F5F6]">
      <div className={`max-w-[1450px] mx-auto px-5 md:px-8 lg:px-12 ${isRTL ? 'text-right' : 'text-left'}`}>
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-[#E2E6E9]">
          <div>
            <span className="text-xs md:text-sm font-semibold tracking-wide text-[#DC2626] mb-2 block">
              {t.extrasEyebrow}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-[#070707]">
              {t.extrasTitle}
            </h2>
            <p className="text-sm text-[#646A70] mt-2 max-w-xl">
              {t.extrasSubtitle}
            </p>
          </div>

          {selectedExtras.length > 0 && (
            <motion.button
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              whileHover={{ y: -2 }}
              onClick={onContinueToBooking}
              type="button"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#DC2626] hover:bg-[#B91C1C] text-white text-xs sm:text-sm font-semibold transition-all shadow-[0_6px_20px_rgba(220,38,38,0.3)] cursor-pointer self-start md:self-auto"
            >
              <span>{t.continueWithExtrasBtn} ({selectedExtras.length})</span>
            </motion.button>
          )}
        </div>

        {/* Extras Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {extrasList.map((extra: RentalExtra, idx) => {
            const isSelected = selectedExtras.includes(extra.id);

            return (
              <motion.div
                key={extra.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                whileHover={{ y: -3 }}
                onClick={() => onToggleExtra(extra.id)}
                className={`p-6 rounded-[24px] md:rounded-[28px] border transition-all duration-200 cursor-pointer flex flex-col justify-between select-none ${
                  isSelected
                    ? 'bg-white border-[#DC2626] shadow-[0_12px_28px_rgba(220,38,38,0.12)]'
                    : 'bg-white/80 border-[#E2E6E9] hover:bg-white hover:border-[#CBD5E1]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-medium text-[#070707]">
                      {extra.title}
                    </h3>
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center border transition-colors ${
                        isSelected
                          ? 'bg-[#DC2626] border-[#DC2626] text-white'
                          : 'border-[#CBD5E1] bg-white text-transparent'
                      }`}
                    >
                      <Check size={14} strokeWidth={2.5} />
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-[#646A70] leading-relaxed font-normal">
                    {extra.description}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-[#E2E6E9]/60 flex items-center justify-between text-xs">
                  <span className="text-[#646A70]">Status</span>
                  <span className={`font-medium ${isSelected ? 'text-[#DC2626]' : 'text-[#646A70]'}`}>
                    {isSelected ? t.statusAdded : t.statusClickToAdd}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

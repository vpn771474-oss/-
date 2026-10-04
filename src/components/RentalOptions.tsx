import React from 'react';
import { rentalData } from '../data/rentalData';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

interface RentalOptionsProps {
  onSelectOption: (optionTitle: string) => void;
}

export const RentalOptions: React.FC<RentalOptionsProps> = ({ onSelectOption }) => {
  const { t, isRTL, lang } = useLanguage();

  const servicesList = rentalData.rentalServices.map((service) => {
    let title = service.title;
    let label = service.durationLabel;
    let desc = service.description;

    if (lang === 'en') {
      const map: Record<string, { title: string; label: string; desc: string }> = {
        daily: {
          title: "Daily Rental",
          label: "Flexible Short Term",
          desc: "A flexible choice for quick trips and short-duration drives, designed to cater to your daily plans with ease."
        },
        weekly: {
          title: "Weekly Rental",
          label: "Extended Balance",
          desc: "Ideal for longer travels with a more stable, comfortable experience throughout the entire week."
        },
        monthly: {
          title: "Monthly Rental",
          label: "Long-term Practicality",
          desc: "A hassle-free, practical solution for extended needs without the burdens of vehicle ownership."
        }
      };
      const loc = map[service.id];
      if (loc) {
        title = loc.title;
        label = loc.label;
        desc = loc.desc;
      }
    }

    return { ...service, title, durationLabel: label, description: desc };
  });

  return (
    <section id="services" className="py-16 md:py-24 bg-[#FFFFFF]">
      <div className={`max-w-[1450px] mx-auto px-5 md:px-8 lg:px-12 ${isRTL ? 'text-right' : 'text-left'}`}>
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs md:text-sm font-semibold tracking-wide text-[#DC2626] mb-3"
          >
            {t.rentalOptionsEyebrow}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#070707] mb-4"
          >
            {t.rentalOptionsTitle}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-xl text-base text-[#646A70]"
          >
            {t.rentalOptionsSubtitle}
          </motion.p>
        </div>

        {/* 3 Editorial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {servicesList.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              whileHover={{ y: -4 }}
              className="group flex flex-col justify-between p-8 sm:p-10 rounded-[28px] md:rounded-[34px] bg-[#FFFFFF] border border-[#E2E6E9] hover:border-[#DC2626]/40 hover:shadow-[0_20px_45px_rgba(220,38,38,0.06)] transition-all duration-300"
            >
              <div>
                {/* Clean Editorial Numbering */}
                <span className="text-3xl sm:text-4xl font-light text-[#F87171] block mb-6 font-mono">
                  {`0${index + 1}`}
                </span>

                <span className="text-xs text-[#DC2626] font-semibold tracking-wide block mb-2">
                  {service.durationLabel}
                </span>

                <h3 className="text-2xl font-medium text-[#070707] mb-4">
                  {service.title}
                </h3>

                <p className="text-sm text-[#646A70] leading-relaxed font-normal mb-8">
                  {service.description}
                </p>
              </div>

              <div className="pt-6 border-t border-[#E2E6E9]">
                <button
                  onClick={() => onSelectOption(service.title)}
                  type="button"
                  className="w-full py-3 px-4 rounded-full text-xs sm:text-sm font-medium text-[#070707] bg-[#F4F5F6] group-hover:bg-[#DC2626] group-hover:text-white transition-all duration-200 cursor-pointer text-center"
                >
                  {t.inquireOptionBtn}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

interface UseCasesSectionProps {
  onSelectCategory: (categoryKeyword: string) => void;
}

export const UseCasesSection: React.FC<UseCasesSectionProps> = ({ onSelectCategory }) => {
  const { t, isRTL, lang } = useLanguage();

  const useCases = [
    {
      title: lang === 'en' ? 'In the City' : 'داخل المدينة',
      descriptor: lang === 'en'
        ? 'Quick commutes, effortless parallel parking, and nimble agility in daily urban traffic.'
        : 'تنقلات سريعة وسهولة اصطفاف وانسيابية تامة في المسارات اليومية.',
      targetCategory: 'economy'
    },
    {
      title: lang === 'en' ? 'Weekend Getaways' : 'رحلات نهاية الأسبوع',
      descriptor: lang === 'en'
        ? 'Solid highway poise and ample cargo versatility for open road explorations.'
        : 'ثبات وتحكم على الطرق السريعة مع مساحة كافية لتجهيزات العطلة.',
      targetCategory: 'suv'
    },
    {
      title: lang === 'en' ? 'Family Journeys' : 'رحلات العائلة',
      descriptor: lang === 'en'
        ? 'A peaceful cabin with generous legroom, advanced safety, and roomy luggage stowage.'
        : 'مقصورة مريحة تتسع للجميع مع تجهيزات أمان ومساحة وافرة للأمتعة.',
      targetCategory: 'family'
    },
    {
      title: lang === 'en' ? 'Executive Commutes' : 'تنقلات الأعمال',
      descriptor: lang === 'en'
        ? 'Quiet acoustic isolation and restrained refinement suitable for formal meetings.'
        : 'حضور هادئ وتشطيبات راقية تناسب الاجتماعات الرسمية والمشاوير التنفيذية.',
      targetCategory: 'sedan'
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-[#FFFFFF]">
      <div className={`max-w-[1450px] mx-auto px-5 md:px-8 lg:px-12 ${isRTL ? 'text-right' : 'text-left'}`}>
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs md:text-sm font-semibold tracking-wide text-[#DC2626] mb-3"
          >
            {t.useCasesEyebrow}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#070707] mb-4"
          >
            {t.useCasesTitle}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-xl text-base text-[#646A70]"
          >
            {t.useCasesSubtitle}
          </motion.p>
        </div>

        {/* 4 Clean Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {useCases.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.1 }}
              whileHover={{ y: -4 }}
              onClick={() => onSelectCategory(item.targetCategory)}
              className="p-8 rounded-[28px] md:rounded-[32px] bg-[#F4F5F6] border border-[#E2E6E9] hover:border-[#DC2626]/40 hover:bg-white hover:shadow-[0_16px_35px_rgba(220,38,38,0.06)] transition-all duration-300 cursor-pointer flex flex-col justify-between group"
            >
              <div>
                <span className="text-xs font-mono text-[#F87171] block mb-4">
                  0{idx + 1}
                </span>
                <h3 className="text-xl font-medium text-[#070707] group-hover:text-[#DC2626] transition-colors mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-[#646A70] leading-relaxed font-normal">
                  {item.descriptor}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#E2E6E9]/60 flex items-center justify-between text-xs text-[#DC2626] font-semibold">
                <span>{t.exploreCategoryBtn}</span>
                <span aria-hidden="true" className={`transition-transform duration-200 ${isRTL ? 'group-hover:-translate-x-1.5' : 'group-hover:translate-x-1.5'}`}>
                  {isRTL ? '←' : '→'}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

export const WhyMasar: React.FC = () => {
  const { t, isRTL, lang } = useLanguage();

  const principles = [
    {
      title: lang === 'en' ? 'Clear Details' : 'تفاصيل واضحة',
      description: lang === 'en'
        ? 'Precise vehicle specifications and unambiguous guidelines without hidden complexities.'
        : 'مواصفات دقيقة لكل سيارة دون إخفاء أي معلومة أو تعقيد في الشروط.'
    },
    {
      title: lang === 'en' ? 'Simpler Choice' : 'اختيار أسهل',
      description: lang === 'en'
        ? 'Streamlined categorization helping you locate the ideal car for your trip with no confusion.'
        : 'تصنيف مرتب يساعدك على تحديد السيارة المطابقة لاحتياجك دون حيرة.'
    },
    {
      title: lang === 'en' ? 'Organized Flow' : 'حجز مرتب',
      description: lang === 'en'
        ? 'Intuitive chronological steps from schedule and branch choice to complete inquiry review.'
        : 'تسلسل خطوات بديهي من اختيار الموقع والتاريخ حتى تأكيد تفاصيل الطلب.'
    },
    {
      title: lang === 'en' ? 'Modern Digital Experience' : 'تجربة رقمية حديثة',
      description: lang === 'en'
        ? 'Fast, distraction-free interface devoid of antiquated paperwork barriers.'
        : 'واجهة سريعة وخالية من التعقيدات التقليدية لمكاتب التأجير القديمة.'
    },
    {
      title: lang === 'en' ? 'Transparent Fleets' : 'سيارات ضمن فئات واضحة',
      description: lang === 'en'
        ? 'A thoughtful lineup calibrated to provide comfortable, dependable vehicles across all tiers.'
        : 'أسطول مدروس بعناية لتوفير سيارات مريحة وعملية تلبي مختلف الأغراض.'
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-[#F4F5F6]">
      <div className={`max-w-[1450px] mx-auto px-5 md:px-8 lg:px-12 ${isRTL ? 'text-right' : 'text-left'}`}>
        
        {/* Header */}
        <div className="max-w-2xl mb-14 md:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs md:text-sm font-semibold tracking-wide text-[#DC2626] mb-2 block"
          >
            {t.whyMasarEyebrow}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#070707] mb-4"
          >
            {t.whyMasarTitle}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base text-[#646A70] leading-relaxed"
          >
            {t.whyMasarSubtitle}
          </motion.p>
        </div>

        {/* Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {principles.map((principle, index) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              whileHover={{ y: -4 }}
              className="bg-[#FFFFFF] border border-[#E2E6E9] rounded-[28px] p-8 flex flex-col justify-between hover:border-[#DC2626]/40 hover:shadow-[0_16px_36px_rgba(220,38,38,0.06)] transition-all duration-300"
            >
              <div>
                <span className="text-xs font-mono text-[#F87171] block mb-4">
                  {t.principleLabel} 0{index + 1}
                </span>
                <h3 className="text-xl font-medium text-[#070707] mb-3">
                  {principle.title}
                </h3>
                <p className="text-sm text-[#646A70] leading-relaxed font-normal">
                  {principle.description}
                </p>
              </div>
            </motion.div>
          ))}

          {/* Sixth Architectural Statement Card */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.45 }}
            whileHover={{ y: -4 }}
            className="bg-gradient-to-br from-[#1c0808] to-[#070707] border border-[#DC2626]/30 text-white rounded-[28px] p-8 flex flex-col justify-between shadow-[0_16px_40px_rgba(220,38,38,0.15)]"
          >
            <span className="text-xs font-semibold tracking-widest text-[#F87171] uppercase">
              {t.brandName}
            </span>
            <p className="text-lg md:text-xl font-medium leading-snug my-4 text-white">
              {t.whyMasarCardStatement}
            </p>
            <span className="text-xs text-white/60">
              {t.brandCity} • {t.brandCountry}
            </span>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

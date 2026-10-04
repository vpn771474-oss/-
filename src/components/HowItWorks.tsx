import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

export const HowItWorks: React.FC = () => {
  const { t, isRTL, lang } = useLanguage();

  const steps = [
    {
      number: '01',
      title: lang === 'en' ? 'Choose Location & Dates' : 'اختر المكان والموعد',
      description: lang === 'en'
        ? 'Select your convenient pickup and dropoff points and the ideal schedule for your drive.'
        : 'حدد نقطة الاستلام والتسليم المناسبة والتوقيت المفضل لبدء رحلتك بسهولة.'
    },
    {
      number: '02',
      title: lang === 'en' ? 'Select Your Car' : 'اختر السيارة',
      description: lang === 'en'
        ? 'Browse distinct categories and choose the vehicle that aligns with your commute needs.'
        : 'استعرض الفئات المتنوعة واختر المواصفات التي تلائم طبيعة تنقلك وحجم أمتعتك.'
    },
    {
      number: '03',
      title: lang === 'en' ? 'Add What You Need' : 'أضف ما تحتاجه',
      description: lang === 'en'
        ? 'Customize your booking with child seats, additional drivers, or navigation units.'
        : 'خصّص حجزك بإضافات عملية كطلب مقعد أطفال أو تفويض سائق إضافي.'
    },
    {
      number: '04',
      title: lang === 'en' ? 'Pick Up & Drive' : 'استلم وانطلق',
      description: lang === 'en'
        ? 'Submit your inquiry, review the details, and begin a quiet and relaxed drive on the road.'
        : 'أكمل إرسال طلبك واستعرض التفاصيل لبدء قيادة هادئة ومريحة على الطريق.'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-[#FFFFFF]">
      <div className={`max-w-[1450px] mx-auto px-5 md:px-8 lg:px-12 ${isRTL ? 'text-right' : 'text-left'}`}>
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs md:text-sm font-semibold tracking-wide text-[#DC2626] mb-3"
          >
            {t.howItWorksEyebrow}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#070707] mb-4"
          >
            {t.howItWorksTitle}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-md text-base text-[#646A70]"
          >
            {t.howItWorksSubtitle}
          </motion.p>
        </div>

        {/* 4 Large Numbered Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {steps.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col border-t-2 border-[#E2E6E9] pt-8 group hover:border-[#DC2626] transition-colors duration-300"
            >
              {/* Giant Number */}
              <span className="text-5xl sm:text-6xl font-light text-[#DC2626]/50 group-hover:text-[#DC2626] transition-colors mb-6 tabular-nums font-mono">
                {step.number}
              </span>

              <h3 className="text-xl font-medium text-[#070707] mb-3">
                {step.title}
              </h3>

              <p className="text-sm text-[#646A70] leading-relaxed font-normal">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

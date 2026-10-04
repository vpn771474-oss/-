import React, { useState } from 'react';
import { rentalData } from '../data/rentalData';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

export const FaqSection: React.FC = () => {
  const { t, isRTL, lang } = useLanguage();
  const [openId, setOpenId] = useState<string | null>(rentalData.faqs[0]?.id || null);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const faqList = rentalData.faqs.map((f) => {
    let question = f.question;
    let answer = f.answer;
    if (lang === 'en') {
      const map: Record<string, { q: string; a: string }> = {
        'faq-1': {
          q: "How do I start a car reservation inquiry?",
          a: "Specify your pickup destination and dates using the search panel, select your desired vehicle category, and submit your inquiry through our streamlined digital process."
        },
        'faq-2': {
          q: "Can I return the vehicle to a different location?",
          a: "Yes, our system accommodates dropping off the car at an alternative designated location, which can be selected during your search."
        },
        'faq-3': {
          q: "How do I review the vehicle specifications?",
          a: "Each car card presents the essential specifications including passenger seating, transmission type, and luggage room, with an option to inspect comprehensive details."
        },
        'faq-4': {
          q: "Can I add optional equipment to my inquiry?",
          a: "You can easily bundle optional extras such as child safety seats, additional authorized drivers, or navigation units to fit your itinerary."
        },
        'faq-5': {
          q: "How are inquiries processed?",
          a: "Once submitted, your inquiry reference is generated and our guest relations team prepares vehicle availability and handoff details accordingly."
        }
      };
      const loc = map[f.id];
      if (loc) {
        question = loc.q;
        answer = loc.a;
      }
    }
    return { ...f, question, answer };
  });

  return (
    <section className="py-20 md:py-28 bg-[#FFFFFF]">
      <div className={`max-w-[1000px] mx-auto px-5 md:px-8 ${isRTL ? 'text-right' : 'text-left'}`}>
        
        {/* Header */}
        <div className="text-center mb-14 md:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs md:text-sm font-semibold tracking-wide text-[#DC2626] mb-2 block"
          >
            {t.faqEyebrow}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-medium tracking-tight text-[#070707] mb-3"
          >
            {t.faqTitle}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm md:text-base text-[#646A70]"
          >
            {t.faqSubtitle}
          </motion.p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqList.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className="border border-[#E2E6E9] rounded-[22px] overflow-hidden transition-all duration-200 bg-[#FFFFFF]"
              >
                <button
                  type="button"
                  onClick={() => toggle(faq.id)}
                  className={`w-full p-6 flex items-center justify-between gap-4 cursor-pointer hover:bg-[#F4F5F6]/50 transition-colors ${isRTL ? 'text-right' : 'text-left'}`}
                >
                  <span className="text-base sm:text-lg font-medium text-[#070707]">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-200 ${
                      isOpen ? 'rotate-180 bg-[#DC2626] text-white' : 'bg-[#F4F5F6] text-[#DC2626]'
                    }`}
                  >
                    <ChevronDown size={18} />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-1 text-sm text-[#646A70] leading-relaxed border-t border-[#E2E6E9]/40">
                        <p>{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

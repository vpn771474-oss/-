import React from 'react';
import { UserCheck, CreditCard, FileText, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

export const RentalRequirements: React.FC = () => {
  const { t, isRTL, lang } = useLanguage();

  const requirements = [
    {
      title: lang === 'en' ? 'Driver Details' : 'بيانات السائق',
      desc: lang === 'en'
        ? 'Valid government-issued national ID or passport for the registered primary renter.'
        : 'إثبات الهوية الشخصية المعتمد للسائق المسجل في طلب الحجز.',
      icon: UserCheck
    },
    {
      title: lang === 'en' ? 'Driving License' : 'رخصة القيادة',
      desc: lang === 'en'
        ? 'An active and valid driver’s license complying with authorized regulatory frameworks.'
        : 'رخصة قيادة سارية المفعول ومتوافقة مع المعايير والأنظمة المعتمدة.',
      icon: FileText
    },
    {
      title: lang === 'en' ? 'Payment Method' : 'طريقة الدفع',
      desc: lang === 'en'
        ? 'Accepted electronic payment credential registered under the primary renter’s name.'
        : 'وسيلة دفع معتمدة باسم المستأجر الأساسي لاستكمال إجراءات الحجز.',
      icon: CreditCard
    },
    {
      title: lang === 'en' ? 'Booking Details' : 'تفاصيل الحجز',
      desc: lang === 'en'
        ? 'Verification of schedule, branch handover destination, and selected vehicle options.'
        : 'تأكيد موعد وموقع الاستلام ومراجعة الإضافات المختارة مسبقًا.',
      icon: CheckCircle2
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-[#FFFFFF]">
      <div className={`max-w-[1450px] mx-auto px-5 md:px-8 lg:px-12 ${isRTL ? 'text-right' : 'text-left'}`}>
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-[#E2E6E9]">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs md:text-sm font-semibold tracking-wide text-[#DC2626] mb-2 block"
            >
              {t.requirementsEyebrow}
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#070707]"
            >
              {t.requirementsTitle}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-base text-[#646A70] mt-2 max-w-xl"
            >
              {t.requirementsSubtitle}
            </motion.p>
          </div>

          <div className="text-xs text-[#646A70] bg-[#F4F5F6] border border-[#E2E6E9] px-4 py-2.5 rounded-full self-start md:self-auto font-medium">
            {t.requirementsNotice}
          </div>
        </div>

        {/* 4 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {requirements.map((req, idx) => {
            const IconComponent = req.icon;
            return (
              <motion.div
                key={req.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                whileHover={{ y: -4 }}
                className="bg-[#FFFFFF] border border-[#E2E6E9] rounded-[24px] md:rounded-[28px] p-7 flex flex-col justify-between hover:border-[#DC2626]/40 hover:shadow-[0_14px_30px_rgba(220,38,38,0.05)] transition-all duration-200"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-[#F4F5F6] text-[#DC2626] flex items-center justify-center mb-5">
                    <IconComponent size={20} />
                  </div>
                  <h3 className="text-lg font-medium text-[#070707] mb-2">
                    {req.title}
                  </h3>
                  <p className="text-sm text-[#646A70] leading-relaxed font-normal">
                    {req.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

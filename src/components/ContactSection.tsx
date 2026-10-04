import React, { useState } from 'react';
import { rentalData, bookingConfig } from '../data/rentalData';
import { Send, CheckCircle2, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

interface ContactSectionProps {
  onOpenBooking: () => void;
  preselectedCar?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenBooking, preselectedCar }) => {
  const { t, isRTL, lang } = useLanguage();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    carType: preselectedCar || (lang === 'en' ? 'Contemporary Executive Sedan' : 'سيدان تنفيذية معاصرة'),
    pickupDate: '',
    dropoffDate: '',
    pickupLocation: lang === 'en' ? 'Central Riyadh (Demo)' : (bookingConfig.pickupLocations[0] || 'وسط الرياض'),
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSubmitted(true);
  };

  const locOptions = lang === 'en' ? [
    "Central Riyadh (Demo)",
    "North Riyadh (Demo)",
    "King Khalid Airport (Default)",
    "West Riyadh (Demo)"
  ] : bookingConfig.pickupLocations;

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#F4F5F6]">
      <div className={`max-w-[1450px] mx-auto px-5 md:px-8 lg:px-12 ${isRTL ? 'text-right' : 'text-left'}`}>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto bg-[#FFFFFF] border border-[#E2E6E9] rounded-[28px] md:rounded-[36px] p-8 sm:p-12 md:p-16 shadow-[0_16px_40px_rgba(0,0,0,0.03)]"
        >
          
          {/* Header */}
          <div className="text-center mb-10 md:mb-12">
            <span className="text-xs md:text-sm font-semibold tracking-wide text-[#DC2626] mb-2 block">
              {t.contactEyebrow}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#070707] mb-3">
              {t.contactTitle}
            </h2>
            <p className="text-base text-[#646A70] max-w-lg mx-auto">
              {t.contactSubtitle}
            </p>
          </div>

          {submitted ? (
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="py-12 px-6 text-center space-y-4 rounded-[24px] bg-[#F4F5F6] border border-[#E2E6E9]"
            >
              <div className="w-14 h-14 mx-auto rounded-full bg-[#DC2626]/10 text-[#DC2626] flex items-center justify-center">
                <CheckCircle2 size={32} />
              </div>
              <h3 className="text-xl font-medium text-[#070707]">
                {t.contactSuccessTitle}
              </h3>
              <p className="text-sm text-[#646A70] max-w-md mx-auto">
                {t.contactSuccessMsg}
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-4 px-6 py-2.5 rounded-full text-xs font-semibold bg-[#070707] text-white hover:bg-[#DC2626] transition-colors cursor-pointer"
              >
                {t.contactAnotherBtn}
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Name */}
                <div>
                  <label className="text-xs font-semibold text-[#646A70] block mb-2">
                    {t.contactNameLabel}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={t.contactNamePlaceholder}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full h-[52px] px-4 rounded-[18px] bg-[#F4F5F6] border border-[#E2E6E9] text-sm text-[#090909] font-medium focus:outline-none focus:border-[#DC2626] transition-all"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="text-xs font-semibold text-[#646A70] block mb-2">
                    {t.contactPhoneLabel}
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder={t.contactPhonePlaceholder}
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full h-[52px] px-4 rounded-[18px] bg-[#F4F5F6] border border-[#E2E6E9] text-sm text-[#090909] font-medium focus:outline-none focus:border-[#DC2626] transition-all"
                  />
                </div>

                {/* Car Type */}
                <div>
                  <label className="text-xs font-semibold text-[#646A70] block mb-2">
                    {t.contactCarLabel}
                  </label>
                  <select
                    value={formData.carType}
                    onChange={(e) => setFormData({ ...formData, carType: e.target.value })}
                    className="w-full h-[52px] px-4 rounded-[18px] bg-[#F4F5F6] border border-[#E2E6E9] text-sm text-[#090909] font-medium focus:outline-none focus:border-[#DC2626] transition-all cursor-pointer"
                  >
                    {rentalData.fleet.map((car) => {
                      const displayTitle = lang === 'en'
                        ? (car.id === 'masar-exec-sedan' ? 'Contemporary Executive Sedan' : (car.id === 'masar-luxury-suv' ? 'Full-Size Luxury SUV' : car.title))
                        : car.title;
                      return (
                        <option key={car.id} value={displayTitle}>
                          {displayTitle}
                        </option>
                      );
                    })}
                  </select>
                </div>

                {/* Pickup Location */}
                <div>
                  <label className="text-xs font-semibold text-[#646A70] block mb-2">
                    {t.contactPickupLocLabel}
                  </label>
                  <select
                    value={formData.pickupLocation}
                    onChange={(e) => setFormData({ ...formData, pickupLocation: e.target.value })}
                    className="w-full h-[52px] px-4 rounded-[18px] bg-[#F4F5F6] border border-[#E2E6E9] text-sm text-[#090909] font-medium focus:outline-none focus:border-[#DC2626] transition-all cursor-pointer"
                  >
                    {locOptions.map((loc) => (
                      <option key={loc} value={loc}>
                        {loc}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Dates */}
                <div>
                  <label className="text-xs font-semibold text-[#646A70] block mb-2">
                    {t.contactPickupDateLabel}
                  </label>
                  <input
                    type="date"
                    value={formData.pickupDate}
                    onChange={(e) => setFormData({ ...formData, pickupDate: e.target.value })}
                    className="w-full h-[52px] px-4 rounded-[18px] bg-[#F4F5F6] border border-[#E2E6E9] text-sm text-[#090909] font-medium focus:outline-none focus:border-[#DC2626] transition-all"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-[#646A70] block mb-2">
                    {t.contactDropoffDateLabel}
                  </label>
                  <input
                    type="date"
                    value={formData.dropoffDate}
                    onChange={(e) => setFormData({ ...formData, dropoffDate: e.target.value })}
                    className="w-full h-[52px] px-4 rounded-[18px] bg-[#F4F5F6] border border-[#E2E6E9] text-sm text-[#090909] font-medium focus:outline-none focus:border-[#DC2626] transition-all"
                  />
                </div>

              </div>

              {/* Message */}
              <div>
                <label className="text-xs font-semibold text-[#646A70] block mb-2">
                  {t.contactMessageLabel}
                </label>
                <textarea
                  rows={3}
                  placeholder={t.contactMessagePlaceholder}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full p-4 rounded-[18px] bg-[#F4F5F6] border border-[#E2E6E9] text-sm text-[#090909] font-medium focus:outline-none focus:border-[#DC2626] transition-all resize-none"
                />
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row items-center gap-3">
                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                  type="submit"
                  className="w-full sm:flex-1 h-[54px] rounded-full bg-[#DC2626] hover:bg-[#B91C1C] text-white text-base font-semibold transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-[0_8px_20px_rgba(220,38,38,0.3)]"
                >
                  <Send size={16} />
                  <span>{t.contactSubmitBtn}</span>
                </motion.button>

                <button
                  type="button"
                  onClick={onOpenBooking}
                  className="w-full sm:w-auto h-[54px] px-8 rounded-full bg-[#F4F5F6] hover:bg-[#E2E6E9] text-[#090909] text-sm font-medium transition-all duration-300 flex items-center justify-center cursor-pointer"
                >
                  {t.ctaBookNow}
                </button>

                {/* WhatsApp action: only when number exists */}
                {rentalData.whatsapp && (
                  <a
                    href={`https://wa.me/${rentalData.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto h-[54px] px-6 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white text-sm font-semibold transition-all flex items-center justify-center gap-2"
                  >
                    <MessageCircle size={18} />
                    <span>{t.whatsappBtn}</span>
                  </a>
                )}
              </div>
            </form>
          )}

        </motion.div>

      </div>
    </section>
  );
};

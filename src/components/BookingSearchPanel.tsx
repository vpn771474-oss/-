import React, { useState } from 'react';
import { bookingConfig } from '../data/rentalData';
import { Calendar, Clock, MapPin, ArrowLeft, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

interface BookingSearchPanelProps {
  onSearch: (criteria: {
    pickupLocation: string;
    dropoffLocation: string;
    pickupDate: string;
    pickupTime: string;
    dropoffDate: string;
    dropoffTime: string;
  }) => void;
}

export const BookingSearchPanel: React.FC<BookingSearchPanelProps> = ({ onSearch }) => {
  const { t, isRTL, lang } = useLanguage();
  const [differentDropoff, setDifferentDropoff] = useState(false);

  const locOptions = lang === 'ar' ? bookingConfig.pickupLocations : [
    "Central Riyadh (Demo)",
    "North Riyadh (Demo)",
    "King Khalid Airport (Default)",
    "West Riyadh (Demo)"
  ];

  const [pickupLocation, setPickupLocation] = useState(locOptions[0] || '');
  const [dropoffLocation, setDropoffLocation] = useState(locOptions[0] || '');
  
  // Default dates: tomorrow and +3 days
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const returnDate = new Date(tomorrow);
  returnDate.setDate(returnDate.getDate() + 3);

  const [pickupDate, setPickupDate] = useState(tomorrow.toISOString().split('T')[0]);
  const [pickupTime, setPickupTime] = useState('10:00');
  const [dropoffDate, setDropoffDate] = useState(returnDate.toISOString().split('T')[0]);
  const [dropoffTime, setDropoffTime] = useState('10:00');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch({
      pickupLocation,
      dropoffLocation: differentDropoff ? dropoffLocation : pickupLocation,
      pickupDate,
      pickupTime,
      dropoffDate,
      dropoffTime,
    });
  };

  return (
    <section id="booking-panel" className="relative py-10 md:py-16 bg-[#FFFFFF]">
      <div className="max-w-[1450px] mx-auto px-5 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className={`bg-[#F4F5F6] border border-[#E2E6E9] rounded-[28px] md:rounded-[34px] p-6 sm:p-8 md:p-12 shadow-[0_12px_32px_rgba(0,0,0,0.03)] ${isRTL ? 'text-right' : 'text-left'}`}
        >
          
          {/* Header Row */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-[#E2E6E9]/80">
            <div>
              <h2 className="text-2xl sm:text-3xl font-medium text-[#070707] tracking-tight">
                {t.searchTitle}
              </h2>
              <p className="text-sm text-[#646A70] mt-1">
                {t.searchSubtitle}
              </p>
            </div>

            {/* Toggle: Return to different location */}
            {bookingConfig.allowDifferentDropoff && (
              <label className="inline-flex items-center gap-3 cursor-pointer self-start md:self-auto select-none group">
                <input
                  type="checkbox"
                  checked={differentDropoff}
                  onChange={(e) => setDifferentDropoff(e.target.checked)}
                  className="w-5 h-5 rounded-[6px] border-[#CBD5E1] text-[#DC2626] focus:ring-0 cursor-pointer accent-[#DC2626]"
                />
                <span className="text-sm font-medium text-[#090909] group-hover:text-[#DC2626] transition-colors">
                  {t.differentDropoffToggle}
                </span>
              </label>
            )}
          </div>

          {/* Booking Inputs Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
              
              {/* Pickup Location */}
              <div className="flex flex-col space-y-2">
                <label className="text-xs font-semibold text-[#646A70] flex items-center gap-1.5">
                  <MapPin size={14} className="text-[#DC2626]" />
                  <span>{t.pickupLocationLabel}</span>
                </label>
                <div className="relative">
                  <select
                    value={pickupLocation}
                    onChange={(e) => setPickupLocation(e.target.value)}
                    className="w-full h-[54px] md:h-[58px] px-4 rounded-[18px] md:rounded-[22px] bg-white border border-[#E2E6E9] text-sm text-[#090909] font-medium focus:outline-none focus:border-[#DC2626] transition-all appearance-none cursor-pointer"
                  >
                    {locOptions.map((loc) => (
                      <option key={loc} value={loc}>
                        {loc}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Dropoff Location (if different) */}
              {differentDropoff ? (
                <div className="flex flex-col space-y-2">
                  <label className="text-xs font-semibold text-[#646A70] flex items-center gap-1.5">
                    <MapPin size={14} className="text-[#F87171]" />
                    <span>{t.dropoffLocationLabel}</span>
                  </label>
                  <div className="relative">
                    <select
                      value={dropoffLocation}
                      onChange={(e) => setDropoffLocation(e.target.value)}
                      className="w-full h-[54px] md:h-[58px] px-4 rounded-[18px] md:rounded-[22px] bg-white border border-[#E2E6E9] text-sm text-[#090909] font-medium focus:outline-none focus:border-[#DC2626] transition-all appearance-none cursor-pointer"
                    >
                      {locOptions.map((loc) => (
                        <option key={loc} value={loc}>
                          {loc}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              ) : null}

              {/* Pickup Date & Time */}
              <div className="flex flex-col space-y-2">
                <label className="text-xs font-semibold text-[#646A70] flex items-center gap-1.5">
                  <Calendar size={14} className="text-[#DC2626]" />
                  <span>{t.pickupDateTimeLabel}</span>
                </label>
                <div className="grid grid-cols-5 gap-2">
                  <input
                    type="date"
                    value={pickupDate}
                    onChange={(e) => setPickupDate(e.target.value)}
                    className="col-span-3 h-[54px] md:h-[58px] px-3.5 rounded-[18px] md:rounded-[22px] bg-white border border-[#E2E6E9] text-sm text-[#090909] font-medium focus:outline-none focus:border-[#DC2626] transition-all"
                  />
                  <div className="col-span-2 relative">
                    <input
                      type="time"
                      value={pickupTime}
                      onChange={(e) => setPickupTime(e.target.value)}
                      className="w-full h-[54px] md:h-[58px] px-2.5 rounded-[18px] md:rounded-[22px] bg-white border border-[#E2E6E9] text-xs sm:text-sm text-[#090909] font-medium focus:outline-none focus:border-[#DC2626] transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Dropoff Date & Time */}
              <div className="flex flex-col space-y-2">
                <label className="text-xs font-semibold text-[#646A70] flex items-center gap-1.5">
                  <Clock size={14} className="text-[#DC2626]" />
                  <span>{t.dropoffDateTimeLabel}</span>
                </label>
                <div className="grid grid-cols-5 gap-2">
                  <input
                    type="date"
                    value={dropoffDate}
                    onChange={(e) => setDropoffDate(e.target.value)}
                    className="col-span-3 h-[54px] md:h-[58px] px-3.5 rounded-[18px] md:rounded-[22px] bg-white border border-[#E2E6E9] text-sm text-[#090909] font-medium focus:outline-none focus:border-[#DC2626] transition-all"
                  />
                  <div className="col-span-2 relative">
                    <input
                      type="time"
                      value={dropoffTime}
                      onChange={(e) => setDropoffTime(e.target.value)}
                      className="w-full h-[54px] md:h-[58px] px-2.5 rounded-[18px] md:rounded-[22px] bg-white border border-[#E2E6E9] text-xs sm:text-sm text-[#090909] font-medium focus:outline-none focus:border-[#DC2626] transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Submit CTA */}
              <div className="flex flex-col justify-end">
                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                  type="submit"
                  className="w-full h-[54px] md:h-[58px] px-6 rounded-full bg-[#DC2626] hover:bg-[#B91C1C] text-white text-base font-semibold transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-[0_8px_20px_rgba(220,38,38,0.25)]"
                >
                  <span>{t.searchButton}</span>
                  {isRTL ? <ArrowLeft size={18} /> : <ArrowRight size={18} />}
                </motion.button>
              </div>

            </div>
          </form>

        </motion.div>
      </div>
    </section>
  );
};

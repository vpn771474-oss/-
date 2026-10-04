import React from 'react';
import { rentalData } from '../data/rentalData';
import { MapPin, Navigation } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

interface LocationsSectionProps {
  onSelectLocation: (locationTitle: string) => void;
}

export const LocationsSection: React.FC<LocationsSectionProps> = ({ onSelectLocation }) => {
  const { t, isRTL, lang } = useLanguage();

  const locationsList = rentalData.locations.map((loc) => {
    let title = loc.title;
    let address = loc.address;
    if (lang === 'en') {
      const map: Record<string, { title: string; address: string }> = {
        'loc-central': {
          title: "Central Riyadh Branch",
          address: "King Fahd Road corridor — Configurable demo location"
        },
        'loc-north': {
          title: "North Riyadh Branch",
          address: "KAFD & Northern Ring corridor — Configurable demo location"
        },
        'loc-airport': {
          title: "Airport Pickup Point (Virtual)",
          address: "King Khalid International Airport terminal area (Virtual Demo)"
        }
      };
      const l = map[loc.id];
      if (l) {
        title = l.title;
        address = l.address;
      }
    }
    return { ...loc, title, address };
  });

  return (
    <section id="locations" className="py-16 md:py-24 bg-[#F4F5F6]">
      <div className={`max-w-[1450px] mx-auto px-5 md:px-8 lg:px-12 ${isRTL ? 'text-right' : 'text-left'}`}>
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-[#E2E6E9]">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs md:text-sm font-semibold tracking-wide text-[#DC2626] mb-2 block"
            >
              {t.locationsEyebrow}
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#070707]"
            >
              {t.locationsTitle}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-base text-[#646A70] mt-2 max-w-xl"
            >
              {t.locationsSubtitle}
            </motion.p>
          </div>

          <div className="text-xs text-[#646A70] bg-white/70 backdrop-blur-sm border border-[#E2E6E9] px-4 py-2 rounded-full self-start md:self-auto font-medium">
            {t.locationsDemoBadge}
          </div>
        </div>

        {/* Location Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {locationsList.map((loc, idx) => (
            <motion.div
              key={loc.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -4 }}
              className="bg-[#FFFFFF] border border-[#E2E6E9] rounded-[28px] md:rounded-[32px] p-7 sm:p-8 flex flex-col justify-between hover:border-[#DC2626]/40 hover:shadow-[0_20px_45px_rgba(220,38,38,0.06)] transition-all duration-300 group"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#F4F5F6] flex items-center justify-center text-[#DC2626] mb-6 group-hover:bg-[#DC2626] group-hover:text-white transition-colors duration-200">
                  <MapPin size={22} />
                </div>

                <h3 className="text-xl font-medium text-[#070707] mb-2">
                  {loc.title}
                </h3>

                <p className="text-sm text-[#646A70] font-normal mb-6">
                  {loc.address}
                </p>

                <div className="space-y-2 py-4 border-t border-[#E2E6E9] text-xs text-[#646A70]">
                  <div className="flex justify-between items-center">
                    <span>{t.locationAvailableServices}</span>
                    <span className="font-medium text-[#090909]">{t.locationPickupDropoff}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>{t.locationStatusLabel}</span>
                    <span className="font-semibold text-[#DC2626]">{t.locationStatusDemo}</span>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <button
                  onClick={() => onSelectLocation(loc.title)}
                  type="button"
                  className="w-full py-3 px-4 rounded-full text-xs sm:text-sm font-medium text-[#070707] bg-[#F4F5F6] hover:bg-[#DC2626] hover:text-white transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-2xs"
                >
                  <Navigation size={14} />
                  <span>{t.locationSelectBtn}</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

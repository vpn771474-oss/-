import React from 'react';
import { rentalData, Vehicle } from '../data/rentalData';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

interface FeaturedVehicleProps {
  onViewDetails: (vehicle: Vehicle) => void;
}

export const FeaturedVehicle: React.FC<FeaturedVehicleProps> = ({ onViewDetails }) => {
  const { t, isRTL, lang } = useLanguage();
  const featured = rentalData.fleet.find((v) => v.id === 'masar-exec-sedan') || rentalData.fleet[0];

  if (!featured) return null;

  const title = lang === 'en' ? 'Contemporary Executive Sedan' : featured.title;
  const category = lang === 'en' ? 'Sedan' : featured.category;
  const desc = lang === 'en' 
    ? 'Refined ergonomics and comfort tailored for daily commutes and executive city transport.'
    : featured.description;
  const seats = lang === 'en' ? '5 Seats' : featured.seats;
  const transmission = lang === 'en' ? 'Automatic' : featured.transmission;
  const doors = lang === 'en' ? '4 Doors' : featured.doors;
  const luggage = lang === 'en' ? '2 Large Bags' : featured.luggage;

  return (
    <section className="py-12 md:py-20 bg-[#F4F5F6]">
      <div className="max-w-[1450px] mx-auto px-5 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="bg-[#FFFFFF] border border-[#E2E6E9] rounded-[28px] md:rounded-[36px] overflow-hidden grid grid-cols-1 lg:grid-cols-12 shadow-[0_16px_40px_rgba(0,0,0,0.03)]"
        >
          
          {/* Visual Showcase (7 cols) */}
          <div className="lg:col-span-7 relative aspect-[16/10] lg:aspect-auto min-h-[320px] lg:min-h-[480px] bg-neutral-900 overflow-hidden group">
            <img
              src={featured.image}
              alt={title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-700 ease-out"
            />
          </div>

          {/* Editorial Content (5 cols) */}
          <div className={`lg:col-span-5 p-7 sm:p-10 md:p-14 flex flex-col justify-center ${isRTL ? 'text-right' : 'text-left'}`}>
            <span className="text-xs md:text-sm font-semibold tracking-wide text-[#DC2626] mb-2.5">
              {t.featuredBadge} • {category}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-[#070707] mb-4">
              {title}
            </h2>
            <p className="text-sm md:text-base text-[#646A70] leading-relaxed mb-8 font-normal">
              {desc}
            </p>

            {/* Spec Highlights */}
            <div className="grid grid-cols-2 gap-4 py-6 border-y border-[#E2E6E9] mb-8 text-xs sm:text-sm text-[#090909]">
              <div>
                <span className="text-[#646A70] block mb-1">{t.seatsLabel}</span>
                <span className="font-medium">{seats}</span>
              </div>
              <div>
                <span className="text-[#646A70] block mb-1">{t.transmissionLabel}</span>
                <span className="font-medium">{transmission}</span>
              </div>
              <div>
                <span className="text-[#646A70] block mb-1">{t.doorsLabel}</span>
                <span className="font-medium">{doors}</span>
              </div>
              <div>
                <span className="text-[#646A70] block mb-1">{t.luggageLabel}</span>
                <span className="font-medium">{luggage}</span>
              </div>
            </div>

            <div>
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
                onClick={() => onViewDetails(featured)}
                type="button"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#070707] hover:bg-[#DC2626] text-white text-sm font-medium transition-all duration-300 cursor-pointer shadow-xs"
              >
                <span>{t.featuredCarDetailsBtn}</span>
                {isRTL ? <ArrowLeft size={16} /> : <ArrowRight size={16} />}
              </motion.button>
            </div>

          </div>

        </motion.div>
      </div>
    </section>
  );
};

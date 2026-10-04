import React, { useState } from 'react';
import { rentalData, Vehicle } from '../data/rentalData';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

interface FleetSectionProps {
  onSelectVehicle: (vehicle: Vehicle) => void;
  onViewDetails: (vehicle: Vehicle) => void;
}

export const FleetSection: React.FC<FleetSectionProps> = ({ onSelectVehicle, onViewDetails }) => {
  const { t, isRTL, lang } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>('all');

  // Localized category titles
  const categoriesList = rentalData.categories.map((cat) => {
    let title = cat.title;
    if (lang === 'en') {
      const map: Record<string, string> = {
        all: "All",
        sedan: "Sedan",
        suv: "SUV & 4x4",
        economy: "Economy",
        family: "Family",
        luxury: "Luxury",
        crossover: "Multi-utility"
      };
      title = map[cat.id] || cat.title;
    }
    return { ...cat, localizedTitle: title };
  });

  const filteredFleet = rentalData.fleet.filter((car) => {
    if (!car.enabled) return false;
    if (activeCategory === 'all') return true;
    const catObj = rentalData.categories.find((c) => c.id === activeCategory);
    return catObj ? car.category === catObj.title : true;
  });

  // Localized vehicle details helper
  const getVehicleDisplay = (vehicle: Vehicle) => {
    if (lang === 'en') {
      const map: Record<string, { title: string; brand: string; desc: string; category: string; seats: string; doors: string; trans: string; luggage: string }> = {
        'masar-exec-sedan': {
          title: 'Contemporary Executive Sedan',
          brand: 'Executive Class',
          desc: 'Refined ergonomics and comfort tailored for daily commutes and executive city transport.',
          category: 'Sedan',
          seats: '5 Seats',
          doors: '4 Doors',
          trans: 'Automatic',
          luggage: '2 Large Bags'
        },
        'masar-luxury-suv': {
          title: 'Full-Size Luxury SUV',
          brand: 'Grand Tier',
          desc: 'Expansive cabin space with flexible cargo volume designed for extended road trips and highway stability.',
          category: 'SUV & 4x4',
          seats: '7 Seats',
          doors: '5 Doors',
          trans: 'Automatic',
          luggage: '4 Luggage Cases'
        },
        'masar-city-compact': {
          title: 'Modern City Compact',
          brand: 'Compact Tier',
          desc: 'Effortless parking and superior fuel efficiency, ideal for nimble mobility across the capital.',
          category: 'Economy',
          seats: '5 Seats',
          doors: '4 Doors',
          trans: 'Automatic',
          luggage: 'Medium Bag'
        },
        'masar-family-crossover': {
          title: 'Family Multi-Utility Crossover',
          brand: 'Family Tier',
          desc: 'Cabin configured for maximum passenger comfort with expansive, practical luggage versatility.',
          category: 'Family',
          seats: '7 Seats',
          doors: '5 Doors',
          trans: 'Automatic',
          luggage: '3 Large Bags'
        },
        'masar-prestige-sedan': {
          title: 'Prestige Occasion Saloon',
          brand: 'Elite Class',
          desc: 'Superb sound insulation, artisanal trims, and architectural presence for formal summits.',
          category: 'Luxury',
          seats: '5 Seats',
          doors: '4 Doors',
          trans: 'Advanced Auto',
          luggage: '2 Large Bags'
        },
        'masar-urban-crossover': {
          title: 'Practical Urban Crossover',
          brand: 'Urban Class',
          desc: 'Balanced ground clearance of an SUV with the agility of a sedan in dynamic city traffic.',
          category: 'Multi-utility',
          seats: '5 Seats',
          doors: '5 Doors',
          trans: 'Automatic',
          luggage: '2 Medium Bags'
        }
      };

      const loc = map[vehicle.id];
      if (loc) {
        return {
          title: loc.title,
          brand: loc.brand,
          desc: loc.desc,
          category: loc.category,
          seats: loc.seats,
          doors: loc.doors,
          trans: loc.trans,
          luggage: loc.luggage
        };
      }
    }

    return {
      title: vehicle.title,
      brand: vehicle.brand,
      desc: vehicle.description,
      category: vehicle.category,
      seats: vehicle.seats,
      doors: vehicle.doors,
      trans: vehicle.transmission,
      luggage: vehicle.luggage
    };
  };

  return (
    <section id="fleet" className="relative py-16 md:py-24 bg-[#FFFFFF]">
      <div className="max-w-[1450px] mx-auto px-5 md:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs md:text-sm font-semibold tracking-wide text-[#DC2626] mb-3"
          >
            {t.fleetEyebrow}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#070707] mb-4"
          >
            {t.fleetTitle}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-xl text-base text-[#646A70]"
          >
            {t.fleetSubtitle}
          </motion.p>

          {/* Category Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-2 p-1.5 bg-[#F4F5F6] rounded-full border border-[#E2E6E9]"
          >
            {categoriesList.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  type="button"
                  className={`relative px-5 py-2 text-xs md:text-sm font-medium rounded-full transition-all duration-200 cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'bg-[#070707] text-white shadow-sm'
                      : 'text-[#646A70] hover:text-[#090909]'
                  }`}
                >
                  {cat.localizedTitle}
                </button>
              );
            })}
          </motion.div>
        </div>

        {/* Fleet Grid */}
        {filteredFleet.length === 0 ? (
          <div className="w-full py-20 text-center rounded-[28px] bg-[#F4F5F6] border border-[#E2E6E9]">
            <p className="text-lg text-[#646A70] font-normal">
              {t.emptyFleet}
            </p>
          </div>
        ) : (
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            <AnimatePresence>
              {filteredFleet.map((vehicle, idx) => {
                const info = getVehicleDisplay(vehicle);

                return (
                  <motion.div
                    layout
                    key={vehicle.id}
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.45, delay: idx * 0.06 }}
                    whileHover={{ y: -4 }}
                    className={`group flex flex-col bg-[#FFFFFF] border border-[#E2E6E9] rounded-[28px] md:rounded-[32px] overflow-hidden hover:border-[#DC2626]/40 hover:shadow-[0_20px_45px_rgba(220,38,38,0.08)] transition-all duration-300 ${isRTL ? 'text-right' : 'text-left'}`}
                  >
                    {/* Vehicle Image Container */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-[#F4F5F6]">
                      <img
                        src={vehicle.image}
                        alt={info.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover object-center group-hover:scale-[1.04] transition-transform duration-700 ease-out"
                      />
                      <div className={`absolute top-4 ${isRTL ? 'right-4' : 'left-4'}`}>
                        <span className="text-xs font-semibold text-[#090909] bg-white/90 backdrop-blur-md px-3.5 py-1 rounded-full border border-black/5 shadow-xs">
                          {info.category}
                        </span>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-6 sm:p-7 flex flex-col flex-1">
                      {/* Title & Brand */}
                      <div className="mb-2">
                        <span className="text-xs text-[#DC2626] font-semibold tracking-wide block mb-1">
                          {info.brand}
                        </span>
                        <h3 className="text-xl font-medium text-[#070707] group-hover:text-[#DC2626] transition-colors">
                          {info.title}
                        </h3>
                      </div>

                      {/* Short Descriptor */}
                      <p className="text-sm text-[#646A70] line-clamp-2 mb-6 font-normal leading-relaxed">
                        {info.desc}
                      </p>

                      {/* Compact Specification Row */}
                      <div className="pt-4 border-t border-[#E2E6E9] mb-6 mt-auto">
                        <div className="flex items-center justify-between text-xs text-[#646A70]">
                          <span>{info.seats}</span>
                          <span aria-hidden="true" className="text-[#E2E6E9]">·</span>
                          <span>{info.trans}</span>
                          <span aria-hidden="true" className="text-[#E2E6E9]">·</span>
                          <span>{info.doors}</span>
                          <span aria-hidden="true" className="text-[#E2E6E9]">·</span>
                          <span>{info.luggage}</span>
                        </div>
                      </div>

                      {/* Card Action Buttons */}
                      <div className="grid grid-cols-2 gap-2.5">
                        <button
                          onClick={() => onViewDetails(vehicle)}
                          type="button"
                          className="w-full py-2.5 px-3 rounded-full text-xs font-medium text-[#090909] bg-[#F4F5F6] hover:bg-[#E2E6E9] transition-all cursor-pointer text-center"
                        >
                          {t.detailsBtn}
                        </button>
                        <button
                          onClick={() => onSelectVehicle(vehicle)}
                          type="button"
                          className="w-full py-2.5 px-3 rounded-full text-xs font-semibold text-white bg-[#DC2626] hover:bg-[#B91C1C] transition-all cursor-pointer text-center shadow-[0_4px_14px_rgba(220,38,38,0.25)]"
                        >
                          {t.bookCarBtn}
                        </button>
                      </div>

                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        )}

      </div>
    </section>
  );
};

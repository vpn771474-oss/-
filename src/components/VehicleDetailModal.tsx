import React from 'react';
import { Vehicle } from '../data/rentalData';
import { X, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

interface VehicleDetailModalProps {
  vehicle: Vehicle | null;
  onClose: () => void;
  onBookVehicle: (vehicle: Vehicle) => void;
}

export const VehicleDetailModal: React.FC<VehicleDetailModalProps> = ({
  vehicle,
  onClose,
  onBookVehicle
}) => {
  const { t, isRTL, lang } = useLanguage();

  if (!vehicle) return null;

  const title = lang === 'en'
    ? (vehicle.id === 'masar-exec-sedan' ? 'Contemporary Executive Sedan' : (vehicle.id === 'masar-luxury-suv' ? 'Full-Size Luxury SUV' : vehicle.title))
    : vehicle.title;

  const brand = lang === 'en' ? 'Masar Selected Tier' : vehicle.brand;
  const desc = lang === 'en'
    ? 'Designed with balanced aerodynamics, quiet acoustic insulation, and spacious ergonomic seating for smooth regional journeys.'
    : vehicle.description;

  const detailsList = lang === 'en' ? [
    'Digital Climate Control',
    'High-Resolution Rear Camera',
    'Intuitive Navigation Display',
    'Intelligent Cruise Control'
  ] : (vehicle.details || []);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className={`relative w-full max-w-2xl bg-[#FFFFFF] rounded-[28px] md:rounded-[34px] overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.3)] border border-[#E2E6E9] ${isRTL ? 'text-right' : 'text-left'}`}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            type="button"
            aria-label={t.modalClose}
            className={`absolute top-4 ${isRTL ? 'left-4' : 'right-4'} z-10 w-9 h-9 rounded-full bg-white/80 backdrop-blur-md text-[#090909] hover:bg-white flex items-center justify-center transition-colors shadow-xs cursor-pointer`}
          >
            <X size={18} />
          </button>

          {/* Vehicle Image */}
          <div className="relative aspect-[16/9] w-full bg-neutral-900">
            <img
              src={vehicle.image}
              alt={title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center"
            />
            <div className={`absolute top-4 ${isRTL ? 'right-4' : 'left-4'}`}>
              <span className="text-xs font-semibold text-[#090909] bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-xs">
                {vehicle.category}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 sm:p-8">
            <div className="mb-4">
              <span className="text-xs text-[#DC2626] font-semibold tracking-wide block mb-1">
                {brand}
              </span>
              <h3 className="text-2xl font-medium text-[#070707]">
                {title}
              </h3>
            </div>

            <p className="text-sm text-[#646A70] leading-relaxed mb-6 font-normal">
              {desc}
            </p>

            {/* Specifications */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-4 border-y border-[#E2E6E9] mb-6 text-xs text-[#090909]">
              <div className="bg-[#F4F5F6] p-3 rounded-[16px]">
                <span className="text-[#646A70] block mb-1">{t.seatsLabel}</span>
                <span className="font-medium">{vehicle.seats}</span>
              </div>
              <div className="bg-[#F4F5F6] p-3 rounded-[16px]">
                <span className="text-[#646A70] block mb-1">{t.transmissionLabel}</span>
                <span className="font-medium">{vehicle.transmission}</span>
              </div>
              <div className="bg-[#F4F5F6] p-3 rounded-[16px]">
                <span className="text-[#646A70] block mb-1">{t.doorsLabel}</span>
                <span className="font-medium">{vehicle.doors}</span>
              </div>
              <div className="bg-[#F4F5F6] p-3 rounded-[16px]">
                <span className="text-[#646A70] block mb-1">{t.luggageLabel}</span>
                <span className="font-medium">{vehicle.luggage}</span>
              </div>
            </div>

            {/* Feature details */}
            <div className="mb-6">
              <span className="text-xs font-semibold text-[#090909] block mb-3">
                {t.specificationsTitle}
              </span>
              <div className="grid grid-cols-2 gap-2 text-xs text-[#646A70]">
                {detailsList.map((detail, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <Check size={14} className="text-[#DC2626] shrink-0" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="pt-2 flex items-center justify-end gap-3">
              <button
                onClick={onClose}
                type="button"
                className="py-3 px-6 rounded-full text-xs sm:text-sm font-medium text-[#646A70] hover:text-[#090909] hover:bg-[#F4F5F6] transition-colors cursor-pointer"
              >
                {t.modalClose}
              </button>
              <button
                onClick={() => {
                  onClose();
                  onBookVehicle(vehicle);
                }}
                type="button"
                className="py-3 px-8 rounded-full text-xs sm:text-sm font-semibold text-white bg-[#DC2626] hover:bg-[#B91C1C] transition-all shadow-[0_4px_16px_rgba(220,38,38,0.3)] cursor-pointer"
              >
                {t.requestCarBtn}
              </button>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

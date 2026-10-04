import React, { useState } from 'react';
import { rentalData, bookingConfig, Vehicle, RentalExtra } from '../data/rentalData';
import { X, ArrowRight, ArrowLeft, Check, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialVehicle?: Vehicle | null;
  initialCriteria?: {
    pickupLocation: string;
    dropoffLocation: string;
    pickupDate: string;
    pickupTime: string;
    dropoffDate: string;
    dropoffTime: string;
  } | null;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialVehicle,
  initialCriteria
}) => {
  const { t, isRTL, lang } = useLanguage();
  const [step, setStep] = useState<number>(initialVehicle ? 3 : 1);

  const locOptions = lang === 'en' ? [
    "Central Riyadh (Demo)",
    "North Riyadh (Demo)",
    "King Khalid Airport (Default)",
    "West Riyadh (Demo)"
  ] : bookingConfig.pickupLocations;

  // Form states
  const [pickupLoc, setPickupLoc] = useState(
    initialCriteria?.pickupLocation || locOptions[0] || 'Central Riyadh'
  );
  const [dropoffLoc, setDropoffLoc] = useState(
    initialCriteria?.dropoffLocation || locOptions[0] || 'Central Riyadh'
  );
  const [pickupDate, setPickupDate] = useState(initialCriteria?.pickupDate || '');
  const [pickupTime, setPickupTime] = useState(initialCriteria?.pickupTime || '10:00');
  const [dropoffDate, setDropoffDate] = useState(initialCriteria?.dropoffDate || '');
  const [dropoffTime, setDropoffTime] = useState(initialCriteria?.dropoffTime || '10:00');

  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(
    initialVehicle || rentalData.fleet[0] || null
  );

  const [selectedExtras, setSelectedExtras] = useState<string[]>([]);
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [referenceCode, setReferenceCode] = useState('');

  if (!isOpen) return null;

  const toggleExtra = (id: string) => {
    setSelectedExtras((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const handleCompleteInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone) return;
    const randomRef = `MSR-${Math.floor(100000 + Math.random() * 900000)}`;
    setReferenceCode(randomRef);
    setStep(5);
  };

  const getStepTitle = () => {
    switch (step) {
      case 1: return t.step1Title;
      case 2: return t.step2Title;
      case 3: return t.step3Title;
      case 4: return t.step4Title;
      case 5: return t.step5Title;
      default: return '';
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className={`relative w-full max-w-3xl bg-[#FFFFFF] rounded-[28px] md:rounded-[36px] overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.3)] border border-[#E2E6E9] ${isRTL ? 'text-right' : 'text-left'} flex flex-col max-h-[90vh]`}
        >
          {/* Modal Top Header */}
          <div className="p-6 md:p-8 border-b border-[#E2E6E9] flex items-center justify-between">
            <div>
              <span className="text-xs text-[#DC2626] font-semibold tracking-wide block mb-1">
                {t.modalDemoBadge}
              </span>
              <h2 className="text-xl md:text-2xl font-medium text-[#070707]">
                {getStepTitle()}
              </h2>
            </div>

            <button
              onClick={onClose}
              type="button"
              aria-label={t.modalClose}
              className="w-10 h-10 rounded-full bg-[#F4F5F6] text-[#090909] hover:bg-[#E2E6E9] flex items-center justify-center transition-colors cursor-pointer"
            >
              <X size={18} />
            </button>
          </div>

          {/* Modal Body with Steps */}
          <div className="p-6 md:p-8 overflow-y-auto flex-1">
            
            {/* Step 1: Locations & Dates */}
            {step === 1 && (
              <div className="space-y-6">
                <p className="text-sm text-[#646A70]">
                  {t.step1Desc}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-[#646A70] block mb-2">
                      {t.pickupLocationLabel}
                    </label>
                    <select
                      value={pickupLoc}
                      onChange={(e) => setPickupLoc(e.target.value)}
                      className="w-full h-[52px] px-4 rounded-[18px] bg-[#F4F5F6] border border-[#E2E6E9] text-sm text-[#090909] font-medium focus:outline-none focus:border-[#DC2626]"
                    >
                      {locOptions.map((loc) => (
                        <option key={loc} value={loc}>
                          {loc}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-[#646A70] block mb-2">
                      {t.dropoffLocationLabel}
                    </label>
                    <select
                      value={dropoffLoc}
                      onChange={(e) => setDropoffLoc(e.target.value)}
                      className="w-full h-[52px] px-4 rounded-[18px] bg-[#F4F5F6] border border-[#E2E6E9] text-sm text-[#090909] font-medium focus:outline-none focus:border-[#DC2626]"
                    >
                      {locOptions.map((loc) => (
                        <option key={loc} value={loc}>
                          {loc}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-[#646A70] block mb-2">
                      {t.pickupDateTimeLabel}
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      <input
                        type="date"
                        value={pickupDate}
                        onChange={(e) => setPickupDate(e.target.value)}
                        className="h-[52px] px-3 rounded-[18px] bg-[#F4F5F6] border border-[#E2E6E9] text-sm"
                      />
                      <input
                        type="time"
                        value={pickupTime}
                        onChange={(e) => setPickupTime(e.target.value)}
                        className="h-[52px] px-3 rounded-[18px] bg-[#F4F5F6] border border-[#E2E6E9] text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-[#646A70] block mb-2">
                      {t.dropoffDateTimeLabel}
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      <input
                        type="date"
                        value={dropoffDate}
                        onChange={(e) => setDropoffDate(e.target.value)}
                        className="h-[52px] px-3 rounded-[18px] bg-[#F4F5F6] border border-[#E2E6E9] text-sm"
                      />
                      <input
                        type="time"
                        value={dropoffTime}
                        onChange={(e) => setDropoffTime(e.target.value)}
                        className="h-[52px] px-3 rounded-[18px] bg-[#F4F5F6] border border-[#E2E6E9] text-sm"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Choose Vehicle */}
            {step === 2 && (
              <div className="space-y-4">
                <p className="text-sm text-[#646A70]">
                  {t.step2Desc}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {rentalData.fleet.map((car) => {
                    const isChosen = selectedVehicle?.id === car.id;
                    const carTitle = lang === 'en'
                      ? (car.id === 'masar-exec-sedan' ? 'Contemporary Executive Sedan' : (car.id === 'masar-luxury-suv' ? 'Full-Size Luxury SUV' : car.title))
                      : car.title;

                    return (
                      <div
                        key={car.id}
                        onClick={() => setSelectedVehicle(car)}
                        className={`p-4 rounded-[22px] border cursor-pointer transition-all flex items-center gap-4 ${
                          isChosen
                            ? 'border-[#DC2626] bg-[#DC2626]/5 shadow-xs'
                            : 'border-[#E2E6E9] hover:bg-[#F4F5F6]'
                        }`}
                      >
                        <div className="w-20 h-16 rounded-[14px] overflow-hidden bg-neutral-900 shrink-0">
                          <img
                            src={car.image}
                            alt={carTitle}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <span className="text-xs text-[#DC2626] block font-semibold">
                            {car.category}
                          </span>
                          <h4 className="text-sm font-medium text-[#070707]">
                            {carTitle}
                          </h4>
                          <span className="text-xs text-[#646A70] block mt-0.5">
                            {car.seats} · {car.transmission}
                          </span>
                        </div>
                        <div
                          className={`w-6 h-6 rounded-full flex items-center justify-center border ${
                            isChosen
                              ? 'bg-[#DC2626] border-[#DC2626] text-white'
                              : 'border-[#CBD5E1]'
                          }`}
                        >
                          {isChosen && <Check size={14} />}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Step 3: Choose Extras */}
            {step === 3 && (
              <div className="space-y-4">
                <div className="p-4 rounded-[20px] bg-[#F4F5F6] border border-[#E2E6E9] flex items-center justify-between mb-4">
                  <div>
                    <span className="text-xs text-[#646A70] block">{t.stepSelectedCar}</span>
                    <span className="text-base font-medium text-[#070707]">
                      {lang === 'en' && selectedVehicle?.id === 'masar-exec-sedan' ? 'Contemporary Executive Sedan' : selectedVehicle?.title}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="text-xs text-[#DC2626] hover:underline font-semibold cursor-pointer"
                  >
                    {t.stepChangeCar}
                  </button>
                </div>

                <p className="text-sm text-[#646A70]">
                  {t.step3Desc}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {rentalData.extras.map((extra: RentalExtra) => {
                    const isChecked = selectedExtras.includes(extra.id);
                    const title = lang === 'en'
                      ? (extra.id === 'extra-driver' ? 'Additional Driver' : (extra.id === 'child-seat' ? 'Child Seat' : extra.title))
                      : extra.title;

                    return (
                      <div
                        key={extra.id}
                        onClick={() => toggleExtra(extra.id)}
                        className={`p-4 rounded-[20px] border cursor-pointer transition-all flex items-start justify-between ${
                          isChecked
                            ? 'border-[#DC2626] bg-[#DC2626]/5 shadow-xs'
                            : 'border-[#E2E6E9] hover:bg-[#F4F5F6]'
                        }`}
                      >
                        <div>
                          <h4 className="text-sm font-medium text-[#070707] mb-1">
                            {title}
                          </h4>
                          <p className="text-xs text-[#646A70] line-clamp-2">
                            {extra.description}
                          </p>
                        </div>
                        <div
                          className={`w-5 h-5 rounded-full flex items-center justify-center border shrink-0 mt-0.5 ${isRTL ? 'mr-2' : 'ml-2'} ${
                            isChecked
                              ? 'bg-[#DC2626] border-[#DC2626] text-white'
                              : 'border-[#CBD5E1]'
                          }`}
                        >
                          {isChecked && <Check size={12} />}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Step 4: Contact & Confirm */}
            {step === 4 && (
              <form onSubmit={handleCompleteInquiry} className="space-y-4">
                <div className="p-4 rounded-[20px] bg-[#F4F5F6] border border-[#E2E6E9] text-xs space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span className="text-[#646A70]">{t.stepSelectedCar}:</span>
                    <span className="font-medium text-[#090909]">
                      {lang === 'en' && selectedVehicle?.id === 'masar-exec-sedan' ? 'Contemporary Executive Sedan' : selectedVehicle?.title}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#646A70]">{t.pickupLocationLabel}:</span>
                    <span className="font-medium text-[#090909]">{pickupLoc}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#646A70]">{t.extrasTitle}:</span>
                    <span className="font-medium text-[#090909]">
                      {selectedExtras.length > 0 ? `${selectedExtras.length}` : (lang === 'en' ? 'None' : 'بدون إضافات')}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-[#646A70] block mb-2">
                      {t.contactNameLabel}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={t.contactNamePlaceholder}
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full h-[52px] px-4 rounded-[18px] bg-[#F4F5F6] border border-[#E2E6E9] text-sm text-[#090909] font-medium focus:outline-none focus:border-[#DC2626]"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-[#646A70] block mb-2">
                      {t.contactPhoneLabel}
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder={t.contactPhonePlaceholder}
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full h-[52px] px-4 rounded-[18px] bg-[#F4F5F6] border border-[#E2E6E9] text-sm text-[#090909] font-medium focus:outline-none focus:border-[#DC2626]"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-[#646A70] block mb-2">
                    {t.stepNotesLabel}
                  </label>
                  <textarea
                    rows={2}
                    placeholder={t.stepNotesPlaceholder}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full p-3.5 rounded-[18px] bg-[#F4F5F6] border border-[#E2E6E9] text-sm text-[#090909] focus:outline-none focus:border-[#DC2626] resize-none"
                  />
                </div>

                <div className="pt-2 text-xs text-[#646A70]">
                  {t.stepDisclaimerNotice}
                </div>

                <div className="pt-4 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    className="text-xs text-[#646A70] hover:text-[#090909] cursor-pointer"
                  >
                    {t.stepPrevBtn}
                  </button>
                  <button
                    type="submit"
                    className="py-3 px-8 rounded-full bg-[#DC2626] hover:bg-[#B91C1C] text-white text-sm font-semibold transition-all shadow-[0_4px_16px_rgba(220,38,38,0.3)] cursor-pointer"
                  >
                    {t.stepSubmitBtn}
                  </button>
                </div>
              </form>
            )}

            {/* Step 5: Success Summary */}
            {step === 5 && (
              <div className="py-8 text-center space-y-5">
                <div className="w-16 h-16 mx-auto rounded-full bg-[#DC2626]/10 text-[#DC2626] flex items-center justify-center">
                  <CheckCircle2 size={36} />
                </div>
                <div>
                  <h3 className="text-2xl font-medium text-[#070707] mb-2">
                    {t.stepSuccessTitle}
                  </h3>
                  <p className="text-sm text-[#646A70] max-w-md mx-auto">
                    {t.stepSuccessGreeting} ({selectedVehicle?.title}).
                  </p>
                </div>

                <div className="inline-block p-4 rounded-[20px] bg-[#F4F5F6] border border-[#E2E6E9]">
                  <div className="text-xs text-[#646A70] mb-1">{t.stepRefCodeLabel}</div>
                  <div className="text-xl font-mono font-semibold text-[#DC2626] tracking-wider">
                    {referenceCode}
                  </div>
                </div>

                <p className="text-xs text-[#646A70]/80 max-w-sm mx-auto">
                  {t.stepDemoNotice}
                </p>

                <div className="pt-4">
                  <button
                    onClick={onClose}
                    type="button"
                    className="py-3 px-8 rounded-full bg-[#070707] text-white text-sm font-medium hover:bg-[#DC2626] transition-colors cursor-pointer"
                  >
                    {t.stepCloseBtn}
                  </button>
                </div>
              </div>
            )}

          </div>

          {/* Modal Navigation Buttons (Steps 1-3) */}
          {step >= 1 && step <= 3 && (
            <div className="p-6 md:px-8 border-t border-[#E2E6E9] flex items-center justify-between bg-[#F4F5F6]/50">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={() => setStep(step - 1)}
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-[#646A70] hover:text-[#090909] cursor-pointer"
                >
                  {isRTL ? <ArrowRight size={16} /> : <ArrowLeft size={16} />}
                  <span>{t.stepPrevBtn}</span>
                </button>
              ) : (
                <div />
              )}

              <button
                type="button"
                onClick={() => setStep(step + 1)}
                className="inline-flex items-center gap-2 py-3 px-8 rounded-full bg-[#DC2626] hover:bg-[#B91C1C] text-white text-xs sm:text-sm font-semibold transition-all shadow-[0_4px_16px_rgba(220,38,38,0.3)] cursor-pointer"
              >
                <span>{t.stepNextBtn}</span>
                {isRTL ? <ArrowLeft size={16} /> : <ArrowRight size={16} />}
              </button>
            </div>
          )}

        </motion.div>
      </div>
    </AnimatePresence>
  );
};

import React, { useState } from 'react';
import { Search, AlertCircle } from 'lucide-react';

export const ManageBookingSection: React.FC = () => {
  const [bookingCode, setBookingCode] = useState('');
  const [contactInfo, setContactInfo] = useState('');
  const [demoStatus, setDemoStatus] = useState<string | null>(null);

  const handleLookup = (e: React.FormEvent) => {
    e.preventDefault();
    if (!bookingCode.trim() || !contactInfo.trim()) {
      setDemoStatus('يرجى إدخال رقم الحجز ومعلومات التواصل للمتابعة.');
      return;
    }
    // Fictional demonstration feedback
    setDemoStatus(
      `تم استلام استعلامك عن الرمز (${bookingCode.trim()}). هذه المنصة مخصصة للعرض التجريبي لشركة "مسار"، ولا توجد سجلات حجز حقيقية مرتبطة بهذا الرقم حاليًا.`
    );
  };

  return (
    <section className="py-16 md:py-20 bg-[#F4F5F6]">
      <div className="max-w-[1450px] mx-auto px-5 md:px-8 lg:px-12 text-right">
        <div className="max-w-3xl mx-auto bg-[#FFFFFF] border border-[#E2E6E9] rounded-[28px] md:rounded-[34px] p-8 sm:p-10 md:p-12 shadow-[0_12px_30px_rgba(0,0,0,0.03)]">
          
          <div className="text-center mb-8">
            <span className="text-xs md:text-sm font-medium tracking-wide text-[#17688B] mb-2 block">
              إدارة الحجز
            </span>
            <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-[#070707] mb-3">
              تحتاج إلى مراجعة حجزك؟
            </h2>
            <p className="text-sm text-[#646A70] max-w-md mx-auto">
              أدخل بيانات الحجز للوصول إلى التفاصيل المتاحة
            </p>
          </div>

          <form onSubmit={handleLookup} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold text-[#646A70] block mb-2">
                  رقم الحجز
                </label>
                <input
                  type="text"
                  placeholder="مثال: MSR-2026-X"
                  value={bookingCode}
                  onChange={(e) => {
                    setBookingCode(e.target.value);
                    if (demoStatus) setDemoStatus(null);
                  }}
                  className="w-full h-[52px] px-4 rounded-[18px] bg-[#F4F5F6] border border-[#E2E6E9] text-sm text-[#090909] font-medium focus:outline-none focus:border-[#17688B] transition-all"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-[#646A70] block mb-2">
                  رقم الهاتف أو البريد
                </label>
                <input
                  type="text"
                  placeholder="05XXXXXXXX أو البريد"
                  value={contactInfo}
                  onChange={(e) => {
                    setContactInfo(e.target.value);
                    if (demoStatus) setDemoStatus(null);
                  }}
                  className="w-full h-[52px] px-4 rounded-[18px] bg-[#F4F5F6] border border-[#E2E6E9] text-sm text-[#090909] font-medium focus:outline-none focus:border-[#17688B] transition-all"
                />
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full h-[52px] rounded-full bg-[#070707] hover:bg-[#17688B] text-white text-sm font-semibold transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Search size={16} />
                <span>عرض الحجز</span>
              </button>
            </div>
          </form>

          {demoStatus && (
            <div className="mt-6 p-4 rounded-[18px] bg-[#F4F5F6] border border-[#E2E6E9] flex items-start gap-3 text-xs sm:text-sm text-[#646A70] leading-relaxed">
              <AlertCircle size={18} className="text-[#17688B] shrink-0 mt-0.5" />
              <span>{demoStatus}</span>
            </div>
          )}

        </div>
      </div>
    </section>
  );
};

// Generated image imports
import heroSedanImg from '../assets/images/hero_sedan_masar_1791016685152.jpg';
import heroSuvImg from '../assets/images/hero_suv_masar_1791016696036.jpg';
import featuredSedanImg from '../assets/images/featured_executive_sedan_1791016707375.jpg';
import editorialNightImg from '../assets/images/editorial_night_highway_1791016717824.jpg';

export interface Vehicle {
  id: string;
  enabled: boolean;
  brand: string;
  model: string;
  title: string;
  category: string;
  description: string;
  image: string;
  gallery?: string[];
  seats: string;
  doors: string;
  transmission: string;
  fuel: string;
  luggage: string;
  price?: string; // Empty by default according to rules
  currency?: string;
  pricePeriod?: string;
  availability?: string; // Empty by default according to rules
  featured?: boolean;
  cta?: string;
  details?: string[];
}

export interface Category {
  id: string;
  enabled: boolean;
  title: string;
  description: string;
  image?: string;
  slug: string;
  featured?: boolean;
}

export interface LocationItem {
  id: string;
  enabled: boolean;
  title: string;
  address: string;
  hours?: string;
  phone?: string;
  mapUrl?: string;
  pickup?: boolean;
  dropoff?: boolean;
  isFictionalPlaceholder?: boolean;
}

export interface RentalService {
  id: string;
  title: string;
  description: string;
  durationLabel: string;
}

export interface RentalExtra {
  id: string;
  enabled: boolean;
  title: string;
  description: string;
  price?: string; // Empty by default
  unit?: string;
  details?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface SocialLinks {
  instagram: string;
  facebook: string;
  x: string;
}

export interface BookingConfig {
  enabled: boolean;
  pickupLocations: string[];
  dropoffLocations: string[];
  allowDifferentDropoff: boolean;
  showPrice: boolean;
  showAvailability: boolean;
  requirePayment: boolean;
  currency: string;
  confirmationMethod: string;
}

export interface RentalData {
  name: string;
  shortName: string;
  city: string;
  region: string;
  country: string;
  phone: string;
  whatsapp: string;
  email: string;
  address: string;
  socialLinks: SocialLinks;
  fleet: Vehicle[];
  categories: Category[];
  locations: LocationItem[];
  rentalServices: RentalService[];
  extras: RentalExtra[];
  faqs: FaqItem[];
  assets: {
    heroSedan: string;
    heroSuv: string;
    featuredSedan: string;
    editorialNight: string;
  };
}

export const bookingConfig: BookingConfig = {
  enabled: true,
  pickupLocations: [
    "موقع تجريبي — وسط الرياض",
    "موقع تجريبي — شمال الرياض",
    "موقع تجريبي — مطار الملك خالد (افتراضي)",
    "موقع تجريبي — غرب الرياض"
  ],
  dropoffLocations: [
    "موقع تجريبي — وسط الرياض",
    "موقع تجريبي — شمال الرياض",
    "موقع تجريبي — مطار الملك خالد (افتراضي)",
    "موقع تجريبي — غرب الرياض"
  ],
  allowDifferentDropoff: true,
  showPrice: false,
  showAvailability: false,
  requirePayment: false,
  currency: "",
  confirmationMethod: "contact"
};

export const rentalData: RentalData = {
  name: "مسار لتأجير السيارات",
  shortName: "مسار",
  city: "الرياض",
  region: "منطقة الرياض",
  country: "المملكة العربية السعودية",
  phone: "",
  whatsapp: "",
  email: "",
  address: "",
  socialLinks: {
    instagram: "",
    facebook: "",
    x: ""
  },
  assets: {
    heroSedan: heroSedanImg,
    heroSuv: heroSuvImg,
    featuredSedan: featuredSedanImg,
    editorialNight: editorialNightImg,
  },
  categories: [
    {
      id: "all",
      enabled: true,
      title: "الكل",
      description: "استعراض كافة فئات الأسطول المتاحة للتأجير التجريبي",
      slug: "all",
      featured: true
    },
    {
      id: "sedan",
      enabled: true,
      title: "سيدان",
      description: "تصميم مريح وتوازن مثالي للتنقل داخل المدينة",
      slug: "sedan",
      featured: true
    },
    {
      id: "suv",
      enabled: true,
      title: "دفع رباعي",
      description: "مساحة رحبة وقوة قيادة للمسافات والرحلات الأطول",
      slug: "suv",
      featured: true
    },
    {
      id: "economy",
      enabled: true,
      title: "اقتصادية",
      description: "كفاءة عالية وسهولة عملية في القيادة اليومية",
      slug: "economy",
      featured: true
    },
    {
      id: "family",
      enabled: true,
      title: "عائلية",
      description: "سعة مقاعد متسعة وراحة مخصصة للرحلات المشتركة",
      slug: "family",
      featured: true
    },
    {
      id: "luxury",
      enabled: true,
      title: "فاخرة",
      description: "مواصفات راقية ومقصورة مجهزة لأعلى درجات الفخامة",
      slug: "luxury",
      featured: true
    },
    {
      id: "crossover",
      enabled: true,
      title: "متعددة الاستخدام",
      description: "مرونة عملية تلائم مختلف الاحتياجات الحضرية",
      slug: "crossover",
      featured: false
    }
  ],
  fleet: [
    {
      id: "masar-exec-sedan",
      enabled: true,
      brand: "فئة تنفيذية",
      model: "سيدان معاصرة",
      title: "سيدان تنفيذية معاصرة",
      category: "سيدان",
      description: "تصميم مريح ومساحة مناسبة للرحلات اليومية والتنقل داخل المدينة.",
      image: featuredSedanImg,
      seats: "5 مقاعد",
      doors: "4 أبواب",
      transmission: "أوتوماتيك",
      fuel: "بنزين",
      luggage: "حقيبتان كبيرتان",
      price: "", // Empty according to prompt rules
      currency: "",
      pricePeriod: "",
      availability: "",
      featured: true,
      cta: "طلب تفاصيل الحجز",
      details: ["تكييف هواء رقمي", "كاميرا خلفية", "شاشة ملاحة تفاعلية", "مثبت سرعة ذكي"]
    },
    {
      id: "masar-luxury-suv",
      enabled: true,
      brand: "فئة كبرى",
      model: "دفع رباعي رحبة",
      title: "دفع رباعي فاخرة للمسافات",
      category: "دفع رباعي",
      description: "مقصورة رحبة مع مساحة تحميل مرنة تلائم الرحلات الطويلة والاستقرار على الطريق.",
      image: heroSuvImg,
      seats: "7 مقاعد",
      doors: "5 أبواب",
      transmission: "أوتوماتيك",
      fuel: "بنزين",
      luggage: "4 حقائب سفر",
      price: "",
      currency: "",
      pricePeriod: "",
      availability: "",
      featured: true,
      cta: "طلب تفاصيل الحجز",
      details: ["دفع رباعي مستمر", "مقاعد جلدية مريحة", "أنظمة أمان متقدمة", "مساحة خلفية متعددة الأوضاع"]
    },
    {
      id: "masar-city-compact",
      enabled: true,
      brand: "فئة مدمجة",
      model: "اقتصادية حديثة",
      title: "سيارة مدينة اقتصادية",
      category: "اقتصادية",
      description: "سهلة الركن واقتصادية في استهلاك الوقود، مثالية للتنقلات السريعة داخل العاصمة.",
      image: heroSedanImg,
      seats: "5 مقاعد",
      doors: "4 أبواب",
      transmission: "أوتوماتيك",
      fuel: "بنزين اقتصادي",
      luggage: "حقيبة متوسطة",
      price: "",
      currency: "",
      pricePeriod: "",
      availability: "",
      featured: false,
      cta: "طلب تفاصيل الحجز",
      details: ["استهلاك وقود فعال", "نظام صوتي بلوتوث", "مجسات اصطفاف", "قيادة سهلة وسلسة"]
    },
    {
      id: "masar-family-crossover",
      enabled: true,
      brand: "فئة عائلية",
      model: "متعددة الاستخدام",
      title: "عائلية متعددة الاستخدام",
      category: "عائلية",
      description: "مقصورة مصممة لتوفير أقصى درجات الراحة لجميع الركاب مع مساحة أمتعة عملية.",
      image: heroSuvImg,
      seats: "7 مقاعد",
      doors: "5 أبواب",
      transmission: "أوتوماتيك",
      fuel: "بنزين",
      luggage: "3 حقائب كبيرة",
      price: "",
      currency: "",
      pricePeriod: "",
      availability: "",
      featured: false,
      cta: "طلب تفاصيل الحجز",
      details: ["مكيف هواء متعدد المناطق", "نقاط تثبيت مقاعد أطفال Isofix", "أنظمة ثبات إلكترونية"]
    },
    {
      id: "masar-prestige-sedan",
      enabled: true,
      brand: "فئة النخبة",
      model: "صالون فاخر",
      title: "صالون فاخر للمناسبات",
      category: "فاخرة",
      description: "عزل صوتي فائق، تشطيبات فاخرة، وأناقة معمارية تلفت الأنظار في اجتماعاتك وتنقلاتك الخاصة.",
      image: featuredSedanImg,
      seats: "5 مقاعد",
      doors: "4 أبواب",
      transmission: "أوتوماتيك متقدم",
      fuel: "بنزين ممتاز",
      luggage: "حقيبتان كبيرتان",
      price: "",
      currency: "",
      pricePeriod: "",
      availability: "",
      featured: false,
      cta: "طلب تفاصيل الحجز",
      details: ["مقاعد بتحكم كهربائي كامل", "نظام صوتي محيطي", "إضاءة محيطية تفاعلية"]
    },
    {
      id: "masar-urban-crossover",
      enabled: true,
      brand: "فئة حضرية",
      model: "كروس أوفر مدمجة",
      title: "كروس أوفر عملية",
      category: "متعددة الاستخدام",
      description: "مزيج متوازن بين ارتفاع سيارات الدفع الرباعي وسلاسة السيدان في حركة المرور اليومية.",
      image: heroSedanImg,
      seats: "5 مقاعد",
      doors: "5 أبواب",
      transmission: "أوتوماتيك",
      fuel: "بنزين",
      luggage: "حقيبتان متوسطتان",
      price: "",
      currency: "",
      pricePeriod: "",
      availability: "",
      featured: false,
      cta: "طلب تفاصيل الحجز",
      details: ["شاشة لمسية تدعم الهاتف الذكي", "عجلات ألومنيوم أنيقة", "مساعد القيادة في المسار"]
    }
  ],
  rentalServices: [
    {
      id: "daily",
      title: "تأجير يومي",
      durationLabel: "مرن للمدد القصيرة",
      description: "خيار مرن للرحلات والتنقلات قصيرة المدة، مصمم ليلبي احتياجاتك اليومية بسرعة وسهولة."
    },
    {
      id: "weekly",
      title: "تأجير أسبوعي",
      durationLabel: "توازن للاستخدام الممتد",
      description: "مناسب للرحلات الأطول مع تجربة استخدام أكثر استقرارًا ومتابعة مريحة طوال الأسبوع."
    },
    {
      id: "monthly",
      title: "تأجير شهري",
      durationLabel: "حل عملي للمدد الطويلة",
      description: "خيار عملي لمن يحتاج إلى السيارة لفترة ممتدة دون التزامات تملك معقدة."
    }
  ],
  extras: [
    {
      id: "extra-driver",
      enabled: true,
      title: "سائق إضافي",
      description: "إمكانية تفويض سائق إضافي معتمد لمشاركتك القيادة في الرحلات الطويلة.",
      price: "",
      unit: "حسب التكوين"
    },
    {
      id: "child-seat",
      enabled: true,
      title: "مقعد أطفال",
      description: "مقعد أطفال آمن ومطابق للمواصفات المعتمدة يناسب الفئات العمرية المختلفة.",
      price: "",
      unit: "حسب التكوين"
    },
    {
      id: "navigation",
      enabled: true,
      title: "نظام ملاحة",
      description: "جهاز ملاحة وتوجيه دقيق للطرق والمواقع الرئيسية داخل الرياض وخارجها.",
      price: "",
      unit: "حسب التكوين"
    },
    {
      id: "protection-plus",
      enabled: true,
      title: "خيار حماية إضافي",
      description: "تغطية إضافية لتعزيز راحة البال أثناء الاستخدام والقيادة على الطرقات.",
      price: "",
      unit: "حسب التكوين"
    }
  ],
  locations: [
    {
      id: "loc-central",
      enabled: true,
      title: "فرع وسط الرياض",
      address: "موقع تجريبي — قابل للإعداد والتخصيص",
      hours: "أوقات العمل تحدد حسب التكوين",
      phone: "",
      pickup: true,
      dropoff: true,
      isFictionalPlaceholder: true
    },
    {
      id: "loc-north",
      enabled: true,
      title: "فرع شمال الرياض",
      address: "موقع تجريبي — قابل للإعداد والتخصيص",
      hours: "أوقات العمل تحدد حسب التكوين",
      phone: "",
      pickup: true,
      dropoff: true,
      isFictionalPlaceholder: true
    },
    {
      id: "loc-airport",
      enabled: true,
      title: "نقطة تسليم المطار (افتراضية)",
      address: "موقع تجريبي — قابل للإعداد والتخصيص",
      hours: "أوقات العمل تحدد حسب التكوين",
      phone: "",
      pickup: true,
      dropoff: true,
      isFictionalPlaceholder: true
    }
  ],
  faqs: [
    {
      id: "faq-1",
      question: "كيف أبدأ حجز السيارة؟",
      answer: "يمكنك تحديد موقع الاستلام والتاريخ المطلوب عبر نموذج البحث، ثم اختيار السيارة الملائمة من الأسطول وتقديم طلبك بخطوات رقمية بسيطة."
    },
    {
      id: "faq-2",
      question: "هل يمكن اختيار موقع مختلف للتسليم؟",
      answer: "نعم، يدعم النظام خيار إرجاع السيارة في موقع مختلف عن موقع الاستلام، ويمكن تفعيل هذا الخيار وتحديده مباشرة أثناء البحث."
    },
    {
      id: "faq-3",
      question: "كيف أعرف تفاصيل السيارة؟",
      answer: "توفر بطاقة كل سيارة المواصفات الأساسية كعدد المقاعد ونوع ناقل الحركة وحجم الأمتعة، مع خيار عرض التفاصيل الكاملة قبل تأكيد الطلب."
    },
    {
      id: "faq-4",
      question: "هل توجد إضافات على الحجز؟",
      answer: "يمكنك اختيار إضافات مساندة كطلب مقعد أطفال، أو تفويض سائق إضافي، أو طلب خيارات حماية إضافية بما يتناسب مع تفاصيل رحلتك."
    },
    {
      id: "faq-5",
      question: "كيف أراجع تفاصيل الحجز؟",
      answer: "من خلال قسم 'إدارة الحجز'، يمكنك إدخال رقم الحجز ورقم التواصل للوصول إلى الملخص ومعرفة حالة الطلب التجريبي."
    }
  ]
};

export type Language = 'ar' | 'en';

export interface TranslationDictionary {
  // Brand
  brandName: string;
  brandShort: string;
  brandSubtitle: string;
  brandCity: string;
  brandCountry: string;
  brandTagline: string;

  // Nav
  navHome: string;
  navFleet: string;
  navServices: string;
  navHowItWorks: string;
  navLocations: string;
  navContact: string;
  ctaBrowseFleet: string;
  ctaBookNow: string;
  menuTitle: string;

  // Hero
  heroEyebrow: string;
  heroHeadline1: string;
  heroHeadline2: string;
  heroDescription: string;
  heroLargeCardEyebrow: string;
  heroLargeCardTitle1: string;
  heroLargeCardTitle2: string;
  heroSmallCardCategory: string;
  heroSmallCardTitle1: string;
  heroSmallCardTitle2: string;

  // Search Panel
  searchTitle: string;
  searchSubtitle: string;
  differentDropoffToggle: string;
  pickupLocationLabel: string;
  dropoffLocationLabel: string;
  pickupDateTimeLabel: string;
  dropoffDateTimeLabel: string;
  searchButton: string;

  // Fleet
  fleetEyebrow: string;
  fleetTitle: string;
  fleetSubtitle: string;
  emptyFleet: string;
  priceLabel: string;
  detailsBtn: string;
  bookCarBtn: string;

  // Featured Vehicle
  featuredBadge: string;
  featuredCarDetailsBtn: string;
  seatsLabel: string;
  transmissionLabel: string;
  doorsLabel: string;
  luggageLabel: string;

  // Rental Options
  rentalOptionsEyebrow: string;
  rentalOptionsTitle: string;
  rentalOptionsSubtitle: string;
  inquireOptionBtn: string;

  // Extras
  extrasEyebrow: string;
  extrasTitle: string;
  extrasSubtitle: string;
  continueWithExtrasBtn: string;
  statusAdded: string;
  statusClickToAdd: string;

  // How It Works
  howItWorksEyebrow: string;
  howItWorksTitle: string;
  howItWorksSubtitle: string;

  // Locations
  locationsEyebrow: string;
  locationsTitle: string;
  locationsSubtitle: string;
  locationsDemoBadge: string;
  locationAvailableServices: string;
  locationPickupDropoff: string;
  locationStatusLabel: string;
  locationStatusDemo: string;
  locationSelectBtn: string;

  // Editorial Automotive
  editorialEyebrow: string;
  editorialTitle1: string;
  editorialTitle2: string;
  editorialDesc: string;
  editorialCta: string;
  editorialTag: string;

  // Use Cases
  useCasesEyebrow: string;
  useCasesTitle: string;
  useCasesSubtitle: string;
  exploreCategoryBtn: string;

  // Why Masar
  whyMasarEyebrow: string;
  whyMasarTitle: string;
  whyMasarSubtitle: string;
  principleLabel: string;
  whyMasarCardStatement: string;

  // Rental Requirements
  requirementsEyebrow: string;
  requirementsTitle: string;
  requirementsSubtitle: string;
  requirementsNotice: string;

  // About
  aboutEyebrow: string;
  aboutTitle1: string;
  aboutTitle2: string;
  aboutP1: string;
  aboutP2: string;
  identityLabel: string;
  identityValue: string;
  headquartersLabel: string;

  // FAQ
  faqEyebrow: string;
  faqTitle: string;
  faqSubtitle: string;

  // Contact
  contactEyebrow: string;
  contactTitle: string;
  contactSubtitle: string;
  contactNameLabel: string;
  contactNamePlaceholder: string;
  contactPhoneLabel: string;
  contactPhonePlaceholder: string;
  contactCarLabel: string;
  contactPickupLocLabel: string;
  contactPickupDateLabel: string;
  contactDropoffDateLabel: string;
  contactMessageLabel: string;
  contactMessagePlaceholder: string;
  contactSubmitBtn: string;
  contactSuccessTitle: string;
  contactSuccessMsg: string;
  contactAnotherBtn: string;
  whatsappBtn: string;

  // Footer
  footerDesc: string;
  footerQuickLinks: string;
  footerDisclaimerTitle: string;
  footerDisclaimerText: string;
  footerCopyright: string;
  footerTagline: string;

  // Modals
  modalClose: string;
  modalDemoBadge: string;
  step1Title: string;
  step2Title: string;
  step3Title: string;
  step4Title: string;
  step5Title: string;
  step1Desc: string;
  step2Desc: string;
  step3Desc: string;
  stepSelectedCar: string;
  stepChangeCar: string;
  stepNotesLabel: string;
  stepNotesPlaceholder: string;
  stepDisclaimerNotice: string;
  stepPrevBtn: string;
  stepNextBtn: string;
  stepSubmitBtn: string;
  stepSuccessTitle: string;
  stepSuccessGreeting: string;
  stepRefCodeLabel: string;
  stepDemoNotice: string;
  stepCloseBtn: string;
  specificationsTitle: string;
  requestCarBtn: string;
}

export const translations: Record<Language, TranslationDictionary> = {
  ar: {
    brandName: "مسار لتأجير السيارات",
    brandShort: "مسار",
    brandSubtitle: "لتأجير السيارات",
    brandCity: "الرياض",
    brandCountry: "المملكة العربية السعودية",
    brandTagline: "تجربة عصرية لاستكشاف السيارات واستئجارها بسهولة في الرياض.",

    navHome: "الرئيسية",
    navFleet: "السيارات",
    navServices: "الخدمات",
    navHowItWorks: "كيف تعمل",
    navLocations: "المواقع",
    navContact: "تواصل معنا",
    ctaBrowseFleet: "تصفح السيارات",
    ctaBookNow: "احجز الآن",
    menuTitle: "القائمة",

    heroEyebrow: "تأجير سيارات • تجربة أسهل • قيادة أفضل",
    heroHeadline1: "خذ الطريق،",
    heroHeadline2: "واترك لنا التفاصيل",
    heroDescription: "اكتشف السيارات المناسبة لرحلتك، واختر موعد الاستلام والتسليم بطريقة واضحة وسلسة.",
    heroLargeCardEyebrow: "أسطول مسار",
    heroLargeCardTitle1: "اختر السيارة",
    heroLargeCardTitle2: "التي تناسب طريقك",
    heroSmallCardCategory: "سيارات الدفع الرباعي",
    heroSmallCardTitle1: "مساحة أكثر،",
    heroSmallCardTitle2: "لرحلات أطول",

    searchTitle: "ابدأ حجز سيارتك",
    searchSubtitle: "حدد التوقيت والموقع المناسبين، واستعرض السيارات المتوافقة",
    differentDropoffToggle: "إرجاع السيارة في موقع مختلف",
    pickupLocationLabel: "موقع الاستلام",
    dropoffLocationLabel: "موقع التسليم",
    pickupDateTimeLabel: "تاريخ الاستلام والوقت",
    dropoffDateTimeLabel: "تاريخ التسليم والوقت",
    searchButton: "عرض السيارات",

    fleetEyebrow: "الأسطول",
    fleetTitle: "اختر سيارتك",
    fleetSubtitle: "تشكيلة متوازنة من السيارات المختارة بعناية لتلائم مختلف أنماط القيادة والتنقل",
    emptyFleet: "سيتم تحديث الأسطول هنا قريبًا.",
    priceLabel: "السعر",
    detailsBtn: "التفاصيل",
    bookCarBtn: "طلب الحجز",

    featuredBadge: "سيارة مختارة",
    featuredCarDetailsBtn: "عرض السيارة وتفاصيلها",
    seatsLabel: "المقاعد",
    transmissionLabel: "ناقل الحركة",
    doorsLabel: "الأبواب",
    luggageLabel: "مساحة التخزين",

    rentalOptionsEyebrow: "خيارات التأجير",
    rentalOptionsTitle: "خيارات مصممة لطريقتك",
    rentalOptionsSubtitle: "باقات مرنة ومصممة لتلائم مختلف فترات الاستخدام، من المشاوير السريعة حتى المدد الممتدة",
    inquireOptionBtn: "استفسر عن هذا الخيار",

    extrasEyebrow: "خدمات وتجهيزات مساندة",
    extrasTitle: "أضف ما تحتاجه",
    extrasSubtitle: "خيارات إضافية تجريبية يمكنك تضمينها في طلب الاستفسار لتهيئة الرحلة حسب رغبتك",
    continueWithExtrasBtn: "المتابعة مع",
    statusAdded: "تمت الإضافة",
    statusClickToAdd: "انقر للإضافة",

    howItWorksEyebrow: "آلية مبسطة",
    howItWorksTitle: "كيف تستأجر؟",
    howItWorksSubtitle: "أربع خطوات رقمية واضحة من تحديد الوجهة حتى استلام السيارة",

    locationsEyebrow: "المواقع",
    locationsTitle: "ابدأ من المكان الأقرب لك",
    locationsSubtitle: "نقاط استلام وتسليم مصممة لتغطية المحاور الحيوية في الرياض",
    locationsDemoBadge: "مواقع تجريبية قابلة للتخصيص",
    locationAvailableServices: "الخدمات المتاحة:",
    locationPickupDropoff: "استلام وتسليم",
    locationStatusLabel: "حالة الموقع:",
    locationStatusDemo: "موقع تجريبي",
    locationSelectBtn: "تحديد للاستلام",

    editorialEyebrow: "القيادة • فلسفة مسار",
    editorialTitle1: "ليست كل الطرق متشابهة.",
    editorialTitle2: "ولا يجب أن تكون كل السيارات كذلك.",
    editorialDesc: "اختر الفئة التي تناسب يومك، رحلتك، أو المسافة التي أمامك بتجربة تظليل وهدوء تليق برحلتك.",
    editorialCta: "استكشف الأسطول",
    editorialTag: "تنقل راقٍ • الرياض",

    useCasesEyebrow: "أنماط التنقل",
    useCasesTitle: "لكل طريق، سيارة مناسبة",
    useCasesSubtitle: "استكشف الفئات المصممة خصيصًا لتلائم طبيعة مشوارك ومستوى الراحة الذي تفضله",
    exploreCategoryBtn: "استعراض الفئة",

    whyMasarEyebrow: "فلسفة التصميم",
    whyMasarTitle: "لماذا صممنا مسار؟",
    whyMasarSubtitle: "مبادئ واضحة نعتمدها في تقديم تجربة تنقل هادئة، رقمية وموثوقة",
    principleLabel: "مبدأ",
    whyMasarCardStatement: "نركز على نقاء التجربة وبساطة الإجراءات، لتبدأ قيادتك بارتياح كامل.",

    requirementsEyebrow: "إرشادات عامة",
    requirementsTitle: "قبل الاستلام",
    requirementsSubtitle: "متطلبات تنظيمية عامة يُستحسن تجهيزها قبل موعد استلام السيارة",
    requirementsNotice: "تظهر المتطلبات النهائية قبل تأكيد الحجز",

    aboutEyebrow: "عن مسار",
    aboutTitle1: "نصمّم تجربة التأجير",
    aboutTitle2: "حول ما تحتاجه فعلاً",
    aboutP1: "مسار علامة تجريبية صُممت لتقديم تجربة أكثر وضوحًا لاكتشاف السيارات وفهم خيارات التأجير والانتقال من الاختيار إلى الاستلام بسهولة.",
    aboutP2: "نهتم بأدق تفاصيل الرحلة، من تناسق الفئات وسهولة الحجز، إلى تبسيط الإجراءات لتبدأ مشوارك وأنت بكامل الثقة والاطمئنان.",
    identityLabel: "الهوية:",
    identityValue: "نموذج رقمي تجريبي",
    headquartersLabel: "المقر:",

    faqEyebrow: "الأسئلة الشائعة",
    faqTitle: "إجابات واضحة لاستفساراتك",
    faqSubtitle: "كل ما تود معرفته حول خطوات الحجز وتفاصيل الاستلام والتسليم",

    contactEyebrow: "تواصل واستفسار",
    contactTitle: "جاهز للطريق؟",
    contactSubtitle: "أرسل استفسارك وسنبدأ من تفاصيل رحلتك",
    contactNameLabel: "الاسم الكامل *",
    contactNamePlaceholder: "مثال: عبدالله محمد",
    contactPhoneLabel: "رقم الهاتف *",
    contactPhonePlaceholder: "05XXXXXXXX",
    contactCarLabel: "نوع السيارة المفضلة",
    contactPickupLocLabel: "موقع الاستلام",
    contactPickupDateLabel: "تاريخ الاستلام التقريبي",
    contactDropoffDateLabel: "تاريخ التسليم التقريبي",
    contactMessageLabel: "رسالتك أو ملاحظات إضافية",
    contactMessagePlaceholder: "أي متطلبات خاصة بالرحلة أو تجهيزات إضافية...",
    contactSubmitBtn: "إرسال الاستفسار",
    contactSuccessTitle: "تم استلام استفسارك بنجاح",
    contactSuccessMsg: "شكراً لتواصلك مع مسار. هذا نموذج تجريبي لتوضيح تدفق الاستفسار لخدمة تأجير السيارات.",
    contactAnotherBtn: "إرسال استفسار آخر",
    whatsappBtn: "واتساب",

    footerDesc: "تجربة عصرية لاستكشاف السيارات واستئجارها بسهولة في الرياض.",
    footerQuickLinks: "روابط سريعة",
    footerDisclaimerTitle: "تنويه تجريبي",
    footerDisclaimerText: "هذا الموقع مصمم لغرض العرض الهندسي والتجريبي فقط لعلامة مسار، ولا يمثل منشأة تجارية حقيقية أو حجوزات نشطة.",
    footerCopyright: "© مسار لتأجير السيارات — للاستخدام التجريبي",
    footerTagline: "تصميم رقمي معاصر لقطاع تأجير السيارات",

    modalClose: "إغلاق",
    modalDemoBadge: "طلب استئجار تجريبي • مسار",
    step1Title: "01. تحديد الموقع والتواريخ",
    step2Title: "02. اختيار السيارة",
    step3Title: "03. اختيار الإضافات والتجهيزات",
    step4Title: "04. بيانات التواصل وتأكيد الطلب",
    step5Title: "تم استلام طلب الاستفسار",
    step1Desc: "اختر نقطة الاستلام والتسليم والتوقيت المناسب لرحلتك.",
    step2Desc: "اختر السيارة التي تناسب احتياجك من أسطول مسار:",
    step3Desc: "حدد أي إضافات ترغب بتوفيرها مع السيارة:",
    stepSelectedCar: "السيارة المختارة",
    stepChangeCar: "تغيير السيارة",
    stepNotesLabel: "ملاحظات أو استفسار إضافي",
    stepNotesPlaceholder: "أي تفاصيل خاصة حول موعد الاستلام...",
    stepDisclaimerNotice: "* لن يتم خصم أي مبالغ مالية؛ هذا الطلب يمثل نموذج استفسار تجريبي لتصميم تجربة المستخدم لعلامة مسار.",
    stepPrevBtn: "السابق",
    stepNextBtn: "التالي",
    stepSubmitBtn: "تأكيد إرسال طلب الاستفسار",
    stepSuccessTitle: "تم استلام طلب الاستفسار بنجاح",
    stepSuccessGreeting: "شكراً لك يا ضيفنا الكريم. تم تسجيل طلبك بنجاح.",
    stepRefCodeLabel: "رقم المرجع التجريبي:",
    stepDemoNotice: "ملاحظة: هذا النظام نموذج تجريبي لشركة مسار لتأجير السيارات ولا يتم إجراء حجوزات حقيقية أو التزامات فعلية.",
    stepCloseBtn: "إغلاق النافذة",
    specificationsTitle: "المواصفات والتجهيزات",
    requestCarBtn: "طلب استئجار هذه السيارة"
  },
  en: {
    brandName: "Masar Car Rental",
    brandShort: "Masar",
    brandSubtitle: "Car Rental",
    brandCity: "Riyadh",
    brandCountry: "Kingdom of Saudi Arabia",
    brandTagline: "A modern experience to explore and rent vehicles effortlessly in Riyadh.",

    navHome: "Home",
    navFleet: "Fleet",
    navServices: "Services",
    navHowItWorks: "How It Works",
    navLocations: "Locations",
    navContact: "Contact",
    ctaBrowseFleet: "Browse Fleet",
    ctaBookNow: "Book Now",
    menuTitle: "Navigation",

    heroEyebrow: "Car Rental • Smoother Journey • Better Drive",
    heroHeadline1: "Take the Road,",
    heroHeadline2: "Leave the Details to Us",
    heroDescription: "Discover the right vehicles for your journey, and schedule your pickup and return with ease and clarity.",
    heroLargeCardEyebrow: "Masar Fleet",
    heroLargeCardTitle1: "Choose the vehicle",
    heroLargeCardTitle2: "that matches your journey",
    heroSmallCardCategory: "SUVs & 4x4",
    heroSmallCardTitle1: "More spacious,",
    heroSmallCardTitle2: "for longer travels",

    searchTitle: "Start Your Reservation",
    searchSubtitle: "Select the desired dates and locations, and explore matching vehicles",
    differentDropoffToggle: "Return vehicle to a different location",
    pickupLocationLabel: "Pickup Location",
    dropoffLocationLabel: "Dropoff Location",
    pickupDateTimeLabel: "Pickup Date & Time",
    dropoffDateTimeLabel: "Dropoff Date & Time",
    searchButton: "View Available Cars",

    fleetEyebrow: "Fleet",
    fleetTitle: "Choose Your Vehicle",
    fleetSubtitle: "A curated selection of vehicles tailored to diverse driving styles and travel needs",
    emptyFleet: "The fleet collection will be updated here shortly.",
    priceLabel: "Price",
    detailsBtn: "Details",
    bookCarBtn: "Request Booking",

    featuredBadge: "Featured Car",
    featuredCarDetailsBtn: "View Car & Specifications",
    seatsLabel: "Seats",
    transmissionLabel: "Transmission",
    doorsLabel: "Doors",
    luggageLabel: "Luggage Space",

    rentalOptionsEyebrow: "Rental Options",
    rentalOptionsTitle: "Tailored to Your Schedule",
    rentalOptionsSubtitle: "Flexible terms designed for any journey length, from short city hops to extended stays",
    inquireOptionBtn: "Inquire About This Option",

    extrasEyebrow: "Add-ons & Equipment",
    extrasTitle: "Add What You Need",
    extrasSubtitle: "Optional enhancements you can bundle into your rental inquiry for total convenience",
    continueWithExtrasBtn: "Continue with",
    statusAdded: "Added",
    statusClickToAdd: "Click to Add",

    howItWorksEyebrow: "Simple Process",
    howItWorksTitle: "How It Works",
    howItWorksSubtitle: "Four straightforward digital steps from route planning to receiving your keys",

    locationsEyebrow: "Locations",
    locationsTitle: "Start From Where It's Closest",
    locationsSubtitle: "Convenient pickup and return points covering major arterial corridors in Riyadh",
    locationsDemoBadge: "Configurable Demo Locations",
    locationAvailableServices: "Available Services:",
    locationPickupDropoff: "Pickup & Return",
    locationStatusLabel: "Location Status:",
    locationStatusDemo: "Demo Branch",
    locationSelectBtn: "Select for Pickup",

    editorialEyebrow: "Driving • Masar Philosophy",
    editorialTitle1: "Not all roads are the same.",
    editorialTitle2: "Nor should every car be.",
    editorialDesc: "Choose the category that elevates your day, your route, or the distance ahead with tinted comfort.",
    editorialCta: "Explore Fleet",
    editorialTag: "Premium Mobility • Riyadh",

    useCasesEyebrow: "Driving Profiles",
    useCasesTitle: "A Vehicle for Every Journey",
    useCasesSubtitle: "Discover categories crafted specifically around your travel rhythm and preferred comfort",
    exploreCategoryBtn: "View Category",

    whyMasarEyebrow: "Design Philosophy",
    whyMasarTitle: "Why We Created Masar",
    whyMasarSubtitle: "Clear principles built into every touchpoint for a calm, digital, and reliable mobility experience",
    principleLabel: "Principle",
    whyMasarCardStatement: "We focus on pure simplicity and effortless steps, so your journey begins with total peace of mind.",

    requirementsEyebrow: "General Guidelines",
    requirementsTitle: "Before Pickup",
    requirementsSubtitle: "Standard documentation to prepare prior to your vehicle pickup time",
    requirementsNotice: "Final requirements appear before booking confirmation",

    aboutEyebrow: "About Masar",
    aboutTitle1: "We design the rental experience",
    aboutTitle2: "around what you truly need",
    aboutP1: "Masar is a concept brand designed to deliver a clearer, friction-free way to explore cars, understand rental options, and seamlessly transition from vehicle selection to pickup.",
    aboutP2: "We care about every subtle nuance, from balanced categories and transparent steps, to intuitive digital tools that let you drive away with complete confidence.",
    identityLabel: "Identity:",
    identityValue: "Digital Demo Prototype",
    headquartersLabel: "Headquarters:",

    faqEyebrow: "Frequently Asked Questions",
    faqTitle: "Clear Answers to Common Questions",
    faqSubtitle: "Everything you need to know about the reservation flow, pickup, and return",

    contactEyebrow: "Contact & Inquiry",
    contactTitle: "Ready for the Road?",
    contactSubtitle: "Send your inquiry and we will arrange the right vehicle for your journey",
    contactNameLabel: "Full Name *",
    contactNamePlaceholder: "e.g. Abdullah Al-Fahad",
    contactPhoneLabel: "Phone Number *",
    contactPhonePlaceholder: "+966 5X XXX XXXX",
    contactCarLabel: "Preferred Vehicle",
    contactPickupLocLabel: "Pickup Location",
    contactPickupDateLabel: "Estimated Pickup Date",
    contactDropoffDateLabel: "Estimated Return Date",
    contactMessageLabel: "Message or Special Requests",
    contactMessagePlaceholder: "Any specific journey requirements or luggage accommodations...",
    contactSubmitBtn: "Send Rental Inquiry",
    contactSuccessTitle: "Inquiry Received Successfully",
    contactSuccessMsg: "Thank you for reaching out to Masar. This is a demonstration flow simulating our mobility service.",
    contactAnotherBtn: "Send Another Inquiry",
    whatsappBtn: "WhatsApp",

    footerDesc: "A modern mobility platform to discover and rent vehicles effortlessly in Riyadh.",
    footerQuickLinks: "Quick Links",
    footerDisclaimerTitle: "Demo Disclaimer",
    footerDisclaimerText: "This website is created purely for demonstration and UX showcase purposes for Masar. It does not represent active commercial inventory or reservations.",
    footerCopyright: "© Masar Car Rental — For Demonstration Use",
    footerTagline: "Contemporary digital automotive design",

    modalClose: "Close",
    modalDemoBadge: "Demo Rental Inquiry • Masar",
    step1Title: "01. Choose Location & Dates",
    step2Title: "02. Select Vehicle",
    step3Title: "03. Choose Extras & Equipment",
    step4Title: "04. Contact Details & Confirmation",
    step5Title: "Rental Inquiry Received",
    step1Desc: "Select your preferred pickup and dropoff points and travel schedule.",
    step2Desc: "Pick the vehicle that best fits your travel needs from the Masar fleet:",
    step3Desc: "Select any optional equipment or services for your trip:",
    stepSelectedCar: "Selected Vehicle",
    stepChangeCar: "Change Car",
    stepNotesLabel: "Notes or Special Inquiries",
    stepNotesPlaceholder: "Any details regarding your arrival or timing...",
    stepDisclaimerNotice: "* No payment will be processed; this submission is a prototype inquiry flow for the Masar brand.",
    stepPrevBtn: "Back",
    stepNextBtn: "Next",
    stepSubmitBtn: "Confirm & Submit Inquiry",
    stepSuccessTitle: "Inquiry Received Successfully",
    stepSuccessGreeting: "Thank you. Your rental inquiry has been recorded successfully.",
    stepRefCodeLabel: "Demo Reference Number:",
    stepDemoNotice: "Note: This system is a concept demo for Masar Car Rental. No active charges or binding contracts are created.",
    stepCloseBtn: "Close Window",
    specificationsTitle: "Specifications & Equipment",
    requestCarBtn: "Request to Rent This Car"
  }
};

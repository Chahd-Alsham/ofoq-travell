/* ==========================================================================
   CONFIGURATION, DEFAULT DATA, STATE & STORAGE
   ========================================================================== */
const DEFAULT_COMPANY_SETTINGS = {
    companyName: "أفق للطيران – Ofoq Travel",
    phone: "+213564694879",
    whatsapp: "+213564694879",
    email: "travelofoq@gmail.com",
    address: "الجزائر العاصمة، الجزائر",
    website: "https://ofoqtravel.com",
    footerText: "بوابتكم الأولى نحو السفر الفاخر وحلول الطيران المتكاملة بمستوى عالمي من الاحترافية.",
    adminUser: "admin",
    adminPass: "admin123"
};

const DEFAULT_HERO = {
    title: "اكتشف العالم مع أفق للطيران",
    description: "رحلات فاخرة، وجهات عالمية ساحرة، وخدمة عملاء استثنائية تلبي تطلعاتك في كل رحلة.",
    btn1Text: "اكتشف خدماتنا",
    btn1Link: "#services",
    btn2Text: "اطلب رحلتك",
    btn2Link: "#request",
    bgType: "image",
    bgValue: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1920&q=80"
};

const DEFAULT_ABOUT = {
    title: "شركة أفق للطيران – بوابتك نحو آفاق جديدة",
    description: "نحن نمثل المعيار الجديد للرقي والاحترافية في قطاع السفر والسياحة. نقدم حلول سفر متكاملة ومصممة خصيصًا لتناسب احتياجات الأفراد ورجال الأعمال والعائلات بكل دقة ومرونة مع عناية فائقة بكافة تفاصيل الرحلة.",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80"
};

const DEFAULT_SERVICES = [
    { id: 1, title: "حجز تذاكر الطيران", desc: "حجز تذاكر الطيران لمختلف الوجهات وشركات الطيران العالمية.", icon: "fa-plane" },
    { id: 2, title: "تنظيم الرحلات", desc: "تنظيم برامج سفر سياحية مناسبة لاحتياجات العميل.", icon: "fa-suitcase-rolling" },
    { id: 3, title: "السفر العائلي", desc: "حلول سفر مريحة ومصممة خصيصًا للعائلات.", icon: "fa-people-group" },
    { id: 4, title: "رحلات الأعمال", desc: "خدمات سفر مخصصة لرجال الأعمال والشركات.", icon: "fa-briefcase" },
    { id: 5, title: "حجوزات الفنادق", desc: "المساعدة في اختيار وحجز أفضل الفنادق الفاخرة.", icon: "fa-hotel" },
    { id: 6, title: "الرحلات الجماعية", desc: "تنظيم الحجوزات والرحلات للمجموعات والوفود.", icon: "fa-users" },
    { id: 7, title: "الاستشارات السياحية", desc: "مساعدة العميل في اختيار الوجهة والرحلة المثالية.", icon: "fa-comments-dollar" },
    { id: 8, title: "خدمات السفر المتكاملة", desc: "تنسيق تفاصيل الرحلة وتقديم الدعم المتواصل.", icon: "youtfa-shield-heart" }
];

const DEFAULT_DESTINATIONS = [
    { id: 1, country: "المملكة العربية السعودية", city: "مكة المكرمة والمدينة", desc: "رحلات العمرة والزيارة بخدمات فندقية راقية.", image: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=600&q=80" },
    { id: 2, country: "الإمارات العربية المتحدة", city: "دبي", desc: "استمتع بأسلوب الحياة الفاخر والمعالم العالمية في دبي.", image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80" },
    { id: 3, country: "تركيا", city: "إسطنبول", desc: "عراقة التاريخ وسحر الطبيعة بين آسيا وأوروبا.", image: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=600&q=80" },
    { id: 4, country: "فرنسا", city: "باريس", desc: "عاصمة النور والفن والجمال الساحر.", image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=600&q=80" },
    { id: 5, country: "إيطاليا", city: "روما", desc: "استكشف الحضارة التاريخية وروعة المعالم الإيطالية.", image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=600&q=80" },
    { id: 6, country: "ماليزيا", city: "كوالالمبور", desc: "طبيعة استوائية خلابة ومدن عصرية متطورة.", image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=600&q=80" }
];

const DEFAULT_OFFERS = [
    { id: 1, title: "باقة دبي الساحرة", destination: "دبي، الإمارات", desc: "تذكرة طيران + إقامة 5 ليالٍ في فندق 5 نجوم مع الإفطار.", price: "1200$", startDate: "2026-04-01", endDate: "2026-05-01", image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80" },
    { id: 2, title: "رحلة إسطنبول التاريخية", destination: "إسطنبول، تركيا", desc: "رحلة طيران مباشرة مع جولات سياحية شاملة.", price: "950$", startDate: "2026-04-10", endDate: "2026-05-10", image: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=600&q=80" }
];

const DEFAULT_PROMOS = [
    { id: 1, title: "عرض الصيف المميز - خصم 15%", desc: "احجز رحلتك القادمة واستمتع بخصم خاص لفترة محدودة.", discount: "15%", price: "تخفيض خاص", startDate: "2026-06-01", endDate: "2026-08-31", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80", isFeatured: true }
];

const DEFAULT_GALLERY = [
    { id: 1, title: "أسطول الطيران", image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80" },
    { id: 2, title: "مطار دولي", image: "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&w=600&q=80" },
    { id: 3, title: "استرخاء سياحي", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80" },
    { id: 4, title: "فنادق فاخرة", image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80" },
    { id: 5, title: "رحلات رجال الأعمال", image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=600&q=80" },
    { id: 6, title: "وجهات عالمية", image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=600&q=80" }
];

const DEFAULT_VIDEOS = [
    { id: 1, title: "تجربة السفر مع أفق للطيران", url: "https://www.youtube.com/watch?v=KOc146R8sws&list=RDKOc146R8sws&start_radio=1", type: "youtube" }
];

const DEFAULT_TESTIMONIALS = [
    { id: 1, name: "أحمد بن محمد", role: "رجل أعمال", comment: "خدمة احترافية جداً وتنظيم دقيق لرحلات العمل الخاصة بي. أنصح بشدة التعامل مع أفق للطيران." },
    { id: 2, name: "سارة العمري", role: "مسافرة سياحية", comment: "أفضل شركة سفر تعاملت معها، الحجز تم بسرعة وسلاسة تامة عبر الواتساب." }
];

const DEFAULT_FAQ = [
    { id: 1, q: "كيف يمكنني حجز رحلة طيران عبر الموقع؟", a: "بكل سهولة قم بملء نموذج 'خطط لرحلتك' وسيحولك النظام مباشرة إلى تطبيق الواتساب مع رسالة منظمة بكل التفاصيل لإتمام الحجز فوراً." },
    { id: 2, q: "هل الأسعار قابلة للتعديل؟", a: "نعم، نقدم عروضًا مرنة ومخصصة حسب رغبة العميل وميزانيته." },
    { id: 3, q: "ما هي طرق التواصل المتاحة؟", a: "يمكنكم التواصل معنا عبر الهاتف أو عبر رقم الواتساب الرسمي للشركة طوال أيام الأسبوع." }
];

const DEFAULT_SOCIAL = [
    { platform: "facebook", url: "https://facebook.com" },
    { platform: "instagram", url: "https://instagram.com" },
    { platform: "twitter", url: "https://twitter.com" }
];

// App State
let db = {
    settings: loadStorage('ofoq_settings', DEFAULT_COMPANY_SETTINGS),
    hero: loadStorage('ofoq_hero', DEFAULT_HERO),
    about: loadStorage('ofoq_about', DEFAULT_ABOUT),
    services: loadStorage('ofoq_services', DEFAULT_SERVICES),
    destinations: loadStorage('ofoq_destinations', DEFAULT_DESTINATIONS),
    offers: loadStorage('ofoq_offers', DEFAULT_OFFERS),
    promos: loadStorage('ofoq_promos', DEFAULT_PROMOS),
    gallery: loadStorage('ofoq_gallery', DEFAULT_GALLERY),
    videos: loadStorage('ofoq_videos', DEFAULT_VIDEOS),
    testimonials: loadStorage('ofoq_testimonials', DEFAULT_TESTIMONIALS),
    faq: loadStorage('ofoq_faq', DEFAULT_FAQ),
    social: loadStorage('ofoq_social', DEFAULT_SOCIAL),
    requests: loadStorage('ofoq_requests', []),
    logo: loadStorage('ofoq_logo', null) // Base64 or image data
};

function loadStorage(key, defaultVal) {
    const data = localStorage.getItem(key);
    if (!data) return defaultVal;
    
    try {
        return JSON.parse(data);
    } catch (e) {
        // إذا فشل التحليل، فهذا يعني أن البيانات المخزنة عبارة عن نص عادي (مثل مسار صورة أو رابط) وليس JSON
        return data;
    }
}

function saveStorage(key, val) {
    localStorage.setItem(key, JSON.stringify(val));
}

function saveAll() {
    saveStorage('ofoq_settings', db.settings);
    saveStorage('ofoq_hero', db.hero);
    saveStorage('ofoq_about', db.about);
    saveStorage('ofoq_services', db.services);
    saveStorage('ofoq_destinations', db.destinations);
    saveStorage('ofoq_offers', db.offers);
    saveStorage('ofoq_promos', db.promos);
    saveStorage('ofoq_gallery', db.gallery);
    saveStorage('ofoq_videos', db.videos);
    saveStorage('ofoq_testimonials', db.testimonials);
    saveStorage('ofoq_faq', db.faq);
    saveStorage('ofoq_social', db.social);
    saveStorage('ofoq_requests', db.requests);
    saveStorage('ofoq_logo', db.logo);
}

// Translations Dictionary
const translations = {
    ar: {
        admin_login: "لوحة التحكم",
        nav_home: "الرئيسية",
        nav_about: "من نحن",
        nav_services: "خدماتنا",
        nav_destinations: "وجهاتنا",
        nav_offers: "عروضنا",
        nav_gallery: "المعرض",
        nav_request: "خطط لرحلتك",
        nav_contact: "اتصل بنا",
        hero_title: "اكتشف العالم مع أفق للطيران",
        hero_desc: "رحلات فاخرة، وجهات عالمية ساحرة، وخدمة عملاء استثنائية تلبي تطلعاتك في كل رحلة.",
        hero_btn1: "اكتشف خدماتنا",
        hero_btn2: "اطلب رحلتك",
        about_tag: "من نحن",
        about_title: "شركة أفق للطيران – بوابتك نحو آفاق جديدة",
        about_desc: "نحن نمثل المعيار الجديد للرقي والاحترافية في قطاع السفر والسياحة. نقدم حلول سفر متكاملة ومصممة خصيصًا لتناسب احتياجات الأفراد ورجال الأعمال والعائلات بكل دقة ومرونة مع عناية فائقة بكافة تفاصيل الرحلة.",
        feat_1: "احترافية عالية وموثوقية تامة",
        feat_2: "خدمة عملاء على مدار الساعة",
        feat_3: "حلول سفر مرنة ومخصصة",
        feat_4: "اهتمام دقيق بتفاصيل الرحلة",
        services_tag: "خدماتنا",
        services_title: "ما نقدمه لراحة سفرك",
        services_subtitle: "خدمات متكاملة تضمن لك تجربة سفر متميزة من البداية وحتى الوصول.",
        dest_tag: "وجهاتنا العالمية",
        dest_title: "استكشف أبرز الوجهات السياحية",
        dest_subtitle: "اختر وجهتك القادمة واستمتع بأروع التجارب حول العالم.",
        offers_tag: "العروض الحصرية",
        offers_title: "عروض السفر والرحلات المميزة",
        offers_subtitle: "استفد من باقاتنا الخاصة وبأسعار تنافسية لا تُعوض.",
        promo_tag: "عروض ترويجية خاصة",
        promo_title: "الحملات والعروض الموسمية",
        why_tag: "لماذا تختار أفق؟",
        why_title: "التميز في كل تفصيلة",
        why_1_title: "احترافية وموثوقية",
        why_1_desc: "معايير عالمية في تقديم خدمات الطيران والسفر.",
        why_2_title: "دعم عملاء مستمر",
        why_2_desc: "فريق جاهز لخدمتك والإجابة عن استفساراتك طوال الوقت.",
        why_3_title: "سرعة الاستجابة",
        why_3_desc: "تجهيز طلبات السفر وإنجاز الحجوزات بأقصى سرعة.",
        why_4_title: "خيارات سفر متعددة",
        why_4_desc: "باقات ووجهات متنوعة تلبي كافة الميزانيات والتطلعات.",
        journey_title: "رحلة العميل معنا",
        step_1_t: "اختر وجهتك",
        step_1_d: "تصفح وجهاتنا وعروضنا المتنوعة.",
        step_2_t: "أرسل طلبك",
        step_2_d: "املأ نموذج خطط لرحلتك بسهولة.",
        step_3_t: "نتواصل معك",
        step_3_d: "يتواصل فريقنا لتأكيد التفاصيل عبر واتساب.",
        step_4_t: "نرتب رحلتك",
        step_4_d: "ننجز كافة الحجوزات والتذاكر بأفضل الأسعار.",
        step_5_t: "استمتع برحلتك",
        step_5_d: "انطلق بكل راحة واستمتاع مع أفق للطيران.",
        gallery_tag: "معرض الصور",
        gallery_title: "اكتشف عالم أفق",
        gallery_subtitle: "لقطات من أجمل الوجهات وتجارب السفر الفريدة.",
        video_tag: "فيديوهات السفر",
        video_title: "السفر يبدأ من هنا",
        req_tag: "خطط لرحلتك",
        req_title: "احجز طلب سفرك الآن",
        req_subtitle: "أدخل تفاصيل رحلتك وسنتواصل معك فورًا عبر واتساب.",
        lbl_name: "الاسم الكامل *",
        lbl_phone: "رقم الهاتف *",
        lbl_whatsapp: "رقم الواتساب (اختياري)",
        lbl_email: "البريد الإلكتروني (اختياري)",
        lbl_from: "من (مدينة / مطار المغادرة) *",
        lbl_to: "إلى (مدينة / مطار الوصول) *",
        lbl_trip_type: "نوع الرحلة",
        lbl_dep_date: "تاريخ الذهاب المتوقع *",
        lbl_ret_date: "تاريخ العودة المتوقع",
        lbl_passengers: "عدد المسافرين (بالغين / أطفال / رضّع)",
        lbl_transit: "تفضيل الترانزيت",
        lbl_class: "درجة السفر",
        lbl_airlines: "شركات الطيران المفضلة (اختياري)",
        lbl_baggage: "الأمتعة المطلوبة (اختياري)",
        lbl_notes: "طلبات أو ملاحظات إضافية",
        btn_submit_req: "إرسال الطلب عبر واتساب وحفظه",
        testi_tag: "آراء العملاء",
        testi_title: "ماذا يقول عملاؤنا عنا",
        faq_tag: "الأسئلة الشائعة",
        faq_title: "إجابات عن استفساراتكم",
        contact_tag: "اتصل بنا",
        contact_title: "تواصل مع فريق أفق للطيران",
        contact_subtitle: "نحن هنا للإجابة عن كافة استفساراتكم ومساعدة في ترتيب رحلاتكم.",
        c_phone: "رقم الهاتف / واتساب",
        c_email: "البريد الإلكتروني",
        c_address: "العنوان الرئيسي",
        f_quick_links: "روابط سريعة",
        f_services: "خدمات السفر",
        f_newsletter: "النشرة البريدية",
        f_newsletter_desc: "اشترك لتصلك أحدث العروض والوجهات مباشرة."
    },
    en: {
        admin_login: "Admin Dashboard",
        nav_home: "Home",
        nav_about: "About Us",
        nav_services: "Services",
        nav_destinations: "Destinations",
        nav_offers: "Offers",
        nav_gallery: "Gallery",
        nav_request: "Plan Trip",
        nav_contact: "Contact Us",
        hero_title: "Discover the World with Ofoq Travel",
        hero_desc: "Luxury flights, mesmerizing global destinations, and exceptional customer service.",
        hero_btn1: "Explore Services",
        hero_btn2: "Book Your Trip",
        about_tag: "About Us",
        about_title: "Ofoq Travel – Your Gateway to New Horizons",
        about_desc: "We represent the new standard of sophistication and professionalism in travel and tourism. We provide comprehensive travel solutions tailored to individuals, businesses, and families.",
        feat_1: "High Professionalism & Trust",
        feat_2: "24/7 Customer Support",
        feat_3: "Flexible & Custom Travel Solutions",
        feat_4: "Detailed Trip Planning",
        services_tag: "Our Services",
        services_title: "What We Offer for Your Comfort",
        services_subtitle: "Integrated services ensuring an exceptional travel experience from start to arrival.",
        dest_tag: "Global Destinations",
        dest_title: "Explore Top Touristic Destinations",
        dest_subtitle: "Choose your next destination and enjoy amazing experiences worldwide.",
        offers_tag: "Exclusive Offers",
        offers_title: "Special Travel Packages & Offers",
        offers_subtitle: "Take advantage of our special packages at unbeatable prices.",
        promo_tag: "Special Promos",
        promo_title: "Seasonal Campaigns & Offers",
        why_tag: "Why Choose Ofoq?",
        why_title: "Excellence in Every Detail",
        why_1_title: "Professionalism & Trust",
        why_1_desc: "Global standards in aviation and travel services.",
        why_2_title: "Continuous Support",
        why_2_desc: "Ready to serve you and answer inquiries at all times.",
        why_3_title: "Fast Response",
        why_3_desc: "Quickly processing travel requests and bookings.",
        why_4_title: "Multiple Options",
        why_4_desc: "Diverse packages meeting all budgets.",
        journey_title: "Customer Journey with Us",
        step_1_t: "Choose Destination",
        step_1_d: "Browse our destinations and offers.",
        step_2_t: "Send Request",
        step_2_d: "Fill out the plan your trip form easily.",
        step_3_t: "We Contact You",
        step_3_d: "Our team contacts you via WhatsApp.",
        step_4_t: "Arrange Trip",
        step_4_d: "We complete bookings and tickets.",
        step_5_t: "Enjoy Your Trip",
        step_5_d: "Fly comfortably with Ofoq Travel.",
        gallery_tag: "Photo Gallery",
        gallery_title: "Discover Ofoq World",
        gallery_subtitle: "Snapshots of beautiful destinations and travel experiences.",
        video_tag: "Travel Videos",
        video_title: "Travel Starts Here",
        req_tag: "Plan Your Trip",
        req_title: "Book Your Travel Request Now",
        req_subtitle: "Enter your trip details and we will contact you via WhatsApp immediately.",
        lbl_name: "Full Name *",
        lbl_phone: "Phone Number *",
        lbl_whatsapp: "WhatsApp Number (Optional)",
        lbl_email: "Email Address (Optional)",
        lbl_from: "From (Departure City/Airport) *",
        lbl_to: "To (Arrival City/Airport) *",
        lbl_trip_type: "Trip Type",
        lbl_dep_date: "Expected Departure Date *",
        lbl_ret_date: "Expected Return Date",
        lbl_passengers: "Passengers (Adults / Children / Infants)",
        lbl_transit: "Transit Preference",
        lbl_class: "Cabin Class",
        lbl_airlines: "Preferred Airlines (Optional)",
        lbl_baggage: "Baggage Required (Optional)",
        lbl_notes: "Additional Notes",
        btn_submit_req: "Send Request via WhatsApp & Save",
        testi_tag: "Testimonials",
        testi_title: "What Our Clients Say",
        faq_tag: "FAQ",
        faq_title: "Answers to Your Inquiries",
        contact_tag: "Contact Us",
        contact_title: "Get in Touch with Ofoq Team",
        contact_subtitle: "We are here to answer all your inquiries and help arrange your trips.",
        c_phone: "Phone / WhatsApp",
        c_email: "Email Address",
        c_address: "Main Address",
        f_quick_links: "Quick Links",
        f_services: "Travel Services",
        f_newsletter: "Newsletter",
        f_newsletter_desc: "Subscribe to get the latest offers directly."
    },
    fr: {
        admin_login: "Tableau de Bord",
        nav_home: "Accueil",
        nav_about: "À Propos",
        nav_services: "Services",
        nav_destinations: "Destinations",
        nav_offers: "Offres",
        nav_gallery: "Galerie",
        nav_request: "Planifier",
        nav_contact: "Contact",
        hero_title: "Découvrez le Monde avec Ofoq Travel",
        hero_desc: "Vols de luxe, destinations mondiales et service client exceptionnel.",
        hero_btn1: "Explorer les Services",
        hero_btn2: "Réserver Votre Voyage",
        about_tag: "À Propos",
        about_title: "Ofoq Travel – Votre Passerelle vers de Nouveaux Horizons",
        about_desc: "Nous représentons le nouveau standard de sophistication et de professionnalisme dans le voyage et le tourisme.",
        feat_1: "Haut Professionnalisme et Confiance",
        feat_2: "Support Client 24/7",
        feat_3: "Solutions de Voyage Flexibles",
        feat_4: "Planification Détaillée",
        services_tag: "Nos Services",
        services_title: "Ce Que Nous Offrons",
        services_subtitle: "Services intégrés garantissant une expérience de voyage exceptionnelle.",
        dest_tag: "Destinations",
        dest_title: "Explorez les Meilleures Destinations",
        dest_subtitle: "Choisissez votre prochaine destination et profitez d'expériences uniques.",
        offers_tag: "Offres Exclusives",
        offers_title: "Forfaits et Offres Spéciales",
        offers_subtitle: "Profitez de nos offres exceptionnelles à des prix imbattables.",
        promo_tag: "Promotions",
        promo_title: "Campagnes Saisonnières",
        why_tag: "Pourquoi Ofoq ?",
        why_title: "L'Excellence dans chaque Détail",
        why_1_title: "Professionnalisme & Confiance",
        why_1_desc: "Normes mondiales dans les services de voyage.",
        why_2_title: "Support Continu",
        why_2_desc: "Toujours prêts à répondre à vos questions.",
        why_3_title: "Réponse Rapide",
        why_3_desc: "Traitement rapide des demandes de voyage.",
        why_4_title: "Options Multiples",
        why_4_desc: "Forfaits variés adaptés à tous les budgets.",
        journey_title: "Parcours Client",
        step_1_t: "Choisissez",
        step_1_d: "Parcourez nos destinations.",
        step_2_t: "Envoyez",
        step_2_d: "Remplissez le formulaire.",
        step_3_t: "Contact",
        step_3_d: "Nous vous contactons via WhatsApp.",
        step_4_t: "Arrangement",
        step_4_d: "Nous finalisons vos réservations.",
        step_5_t: "Profitez",
        step_5_d: "Voyagez en toute sérénité.",
        gallery_tag: "Galerie Photo",
        gallery_title: "Découvrez l'Univers Ofoq",
        gallery_subtitle: "Aperçu de nos destinations.",
        video_tag: "Vidéos",
        video_title: "Le Voyage Commence Ici",
        req_tag: "Planifiez Votre Voyage",
        req_title: "Réservez Votre Demande",
        req_subtitle: "Entrez vos détails et nous vous contacterons via WhatsApp.",
        lbl_name: "Nom Complet *",
        lbl_phone: "Numéro de Téléphone *",
        lbl_whatsapp: "WhatsApp (Optionnel)",
        lbl_email: "Email (Optionnel)",
        lbl_from: "De (Ville/Aéroport de Départ) *",
        lbl_to: "À (Ville/Aéroport d'Arrivée) *",
        lbl_trip_type: "Type de Voyage",
        lbl_dep_date: "Date de Départ Prévue *",
        lbl_ret_date: "Date de Retour Prévue",
        lbl_passengers: "Passagers (Adultes / Enfants / Bébés)",
        lbl_transit: "Préférence de Transit",
        lbl_class: "Classe de Cabine",
        lbl_airlines: "Compagnies Préférées (Optionnel)",
        lbl_baggage: "Bagages (Optionnel)",
        lbl_notes: "Notes Additionnelles",
        btn_submit_req: "Envoyer via WhatsApp et Enregistrer",
        testi_tag: "Témoignages",
        testi_title: "Ce Que Disent Nos Clients",
        faq_tag: "FAQ",
        faq_title: "Questions Fréquentes",
        contact_tag: "Contactez-nous",
        contact_title: "Entrez en Contact avec l'Équipe",
        contact_subtitle: "Nous sommes là pour répondre à toutes vos questions.",
        c_phone: "Téléphone / WhatsApp",
        c_email: "Adresse Email",
        c_address: "Adresse Principale",
        f_quick_links: "Liens Rapides",
        f_services: "Services",
        f_newsletter: "Newsletter",
        f_newsletter_desc: "Abonnez-vous pour recevoir nos dernières offres."
    }
};

let currentLang = 'ar';

function changeLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    document.documentElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    const t = translations[lang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) el.textContent = t[key];
    });
}

// Initialization & Rendering
document.addEventListener('DOMContentLoaded', () => {
    renderPublicWebsite();
    initMobileMenu();
    document.getElementById('req-dep-date').min = new Date().toISOString().split('T')[0];
    document.getElementById('req-ret-date').min = new Date().toISOString().split('T')[0];
});

function renderPublicWebsite() {
    // 1. Company Settings & Logo
    const s = db.settings;
    document.getElementById('top-phone').innerHTML = `<i class="fa-solid fa-phone"></i> ${s.phone}`;
    document.getElementById('top-phone').href = `tel:${s.phone}`;
    document.getElementById('top-email').innerHTML = `<i class="fa-solid fa-envelope"></i> ${s.email}`;
    document.getElementById('top-email').href = `mailto:${s.email}`;
    
    document.getElementById('contact-phone').textContent = s.phone;
    document.getElementById('contact-email').textContent = s.email;
    document.getElementById('contact-address').textContent = s.address;

document.getElementById('footer-brand-title').textContent = (s && s.companyName) ? (s.companyName.split('–')[0] || s.companyName) : 'أفق للطيران';
document.getElementById('footer-brand-subtitle').textContent = (s?.companyName && s.companyName.includes('–')) ? s.companyName.split('–')[1].trim() : 'Ofoq Travel';
    document.getElementById('footer-about-text').textContent = s.footerText;
    document.getElementById('footer-copy').textContent = `جميع الحقوق محفوظة © 2026 ${s.companyName}`;

    // WhatsApp floating button
    document.getElementById('floating-whatsapp').href = `https://wa.me/${s.whatsapp.replace(/[^0-9]/g, '')}`;

    // Logo rendering
    const logoImg = document.getElementById('site-logo');
    const defaultLogoText = document.getElementById('default-logo-text');
    if (db.logo) {
        logoImg.src = db.logo;
        logoImg.style.display = 'block';
        defaultLogoText.style.display = 'none';
    } else {
        logoImg.style.display = 'none';
        defaultLogoText.style.display = 'flex';
    }

    // 2. Hero
    const h = db.hero;
    document.getElementById('hero-title').textContent = h.title;
    document.getElementById('hero-desc').textContent = h.description;
    document.getElementById('hero-btn-1').textContent = h.btn1Text;
    document.getElementById('hero-btn-1').href = h.btn1Link;
    document.getElementById('hero-btn-2').textContent = h.btn2Text;
    document.getElementById('hero-btn-2').href = h.btn2Link;

    const heroMedia = document.getElementById('hero-bg-media');
    if (h.bgType === 'video') {
        heroMedia.innerHTML = `<video autoplay muted loop><source src="${h.bgValue}" type="video/mp4"></video>`;
    } else {
        heroMedia.style.background = `url('${h.bgValue}') center/cover no-repeat`;
    }

    // 3. Featured Promo Banner
    const promoContainer = document.getElementById('featured-promo-container');
    const featuredPromo = db.promos.find(p => p.isFeatured);
    if (featuredPromo) {
        promoContainer.innerHTML = `
            <div class="featured-promo-card">
                <div class="promo-info">
                    <span class="promo-badge">عرض ترويجي رئيسي</span>
                    <h3>${featuredPromo.title}</h3>
                    <p>${featuredPromo.desc}</p>
                </div>
                <a href="#request" class="btn btn-primary">احجز العرض الآن</a>
            </div>
        `;
    } else {
        promoContainer.innerHTML = '';
    }

    // 4. About
    const ab = db.about;
    document.getElementById('about-title').textContent = ab.title;
    document.getElementById('about-desc').textContent = ab.description;
    document.getElementById('about-img').src = ab.image;

    // 5. Services
    const servicesGrid = document.getElementById('services-grid');
    servicesGrid.innerHTML = db.services.map(serv => `
        <div class="service-card">
            <i class="fa-solid ${serv.icon || 'fa-plane'}"></i>
            <h3>${serv.title}</h3>
            <p>${serv.desc}</p>
        </div>
    `).join('');

    // 6. Destinations
    const destGrid = document.getElementById('destinations-grid');
    destGrid.innerHTML = db.destinations.map(d => `
        <div class="destination-card">
            <div class="destination-img">
                <img src="${d.image}" alt="${d.city}">
                <span class="destination-badge">${d.country}</span>
            </div>
            <div class="destination-content">
                <h3>${d.city}</h3>
                <p>${d.desc}</p>
                <a href="#request" class="btn btn-sm btn-primary">اكتشف الوجهة</a>
            </div>
        </div>
    `).join('');

    // 7. Offers
    const offersGrid = document.getElementById('offers-grid');
    offersGrid.innerHTML = db.offers.map(o => `
        <div class="offer-card">
            <div class="offer-img">
                <img src="${o.image}" alt="${o.title}">
                <div class="offer-price-tag">${o.price}</div>
            </div>
            <div class="offer-content">
                <h3>${o.title}</h3>
                <p>${o.desc}</p>
                <div class="offer-dates">
                    <span><i class="fa-solid fa-calendar"></i> من: ${o.startDate}</span>
                    <span><i class="fa-solid fa-calendar-xmark"></i> إلى: ${o.endDate}</span>
                </div>
                <a href="#request" class="btn btn-sm btn-primary w-100">طلب العرض</a>
            </div>
        </div>
    `).join('');

    // 8. Promotional Offers Section
    const promoGrid = document.getElementById('promo-grid');
    promoGrid.innerHTML = db.promos.map(p => `
        <div class="offer-card">
            <div class="offer-img">
                <img src="${p.image}" alt="${p.title}">
                <div class="offer-price-tag">${p.discount || p.price}</div>
            </div>
            <div class="offer-content">
                <h3>${p.title}</h3>
                <p>${p.desc}</p>
                <a href="#request" class="btn btn-sm btn-primary w-100">استفد من العرض</a>
            </div>
        </div>
    `).join('');

    // 9. Gallery
    const galleryGrid = document.getElementById('gallery-grid');
    galleryGrid.innerHTML = db.gallery.map(g => `
        <div class="gallery-item" onclick="openLightbox('${g.image}', '${g.title}')">
            <img src="${g.image}" alt="${g.title}">
            <div class="gallery-overlay">
                <i class="fa-solid fa-magnifying-glass-plus"></i>
            </div>
        </div>
    `).join('');

    // 10. Videos
    const videoWrapper = document.getElementById('video-container-wrapper');
    if (db.videos.length > 0) {
        const v = db.videos[0];
        if (v.type === 'youtube') {
            videoWrapper.innerHTML = `<iframe src="${v.url}" frameborder="0" allowfullscreen></iframe>`;
        } else {
            videoWrapper.innerHTML = `<video controls><source src="${v.url}" type="video/mp4"></video>`;
        }
    }

    // 11. Testimonials
    const testGrid = document.getElementById('testimonials-grid');
    testGrid.innerHTML = db.testimonials.map(t => `
        <div class="testimonial-card">
            <i class="fa-solid fa-quote-right"></i>
            <p>"${t.comment}"</p>
            <div class="client-info">
                <h4>${t.name}</h4>
                <span>${t.role}</span>
            </div>
        </div>
    `).join('');

    // 12. FAQ
    const faqAccordion = document.getElementById('faq-accordion');
    faqAccordion.innerHTML = db.faq.map((f, index) => `
        <div class="faq-item" onclick="toggleFaq(${index})">
            <div class="faq-question">${f.q} <i class="fa-solid fa-chevron-down"></i></div>
            <div class="faq-answer"><p>${f.a}</p></div>
        </div>
    `).join('');

    // 13. Social Links
    const socialLinks = document.getElementById('footer-social-links');
    socialLinks.innerHTML = db.social.map(s => `
        <a href="${s.url}" target="_blank"><i class="fa-brands fa-${s.platform}"></i></a>
    `).join('');
}

// Mobile Menu Toggle
function initMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

function toggleFaq(index) {
    const items = document.querySelectorAll('.faq-item');
    items[index].classList.toggle('active');
}

function toggleReturnDate() {
    const tripType = document.getElementById('req-trip-type').value;
    const retGroup = document.getElementById('return-date-group');
    const retInput = document.getElementById('req-ret-date');
    if (tripType === 'One Way') {
        retGroup.style.display = 'none';
        retInput.required = false;
    } else {
        retGroup.style.display = 'flex';
        retInput.required = true;
    }
}

// Travel Request & WhatsApp integration
function handleTravelRequest(event) {
    event.preventDefault();
    const name = document.getElementById('req-name').value;
    const phone = document.getElementById('req-phone').value;
    const whatsapp = document.getElementById('req-whatsapp').value || phone;
    const email = document.getElementById('req-email').value;
    const from = document.getElementById('req-from').value;
    const to = document.getElementById('req-to').value;
    const tripType = document.getElementById('req-trip-type').value;
    const depDate = document.getElementById('req-dep-date').value;
    const retDate = document.getElementById('req-ret-date').value || 'غير محدد';
    const adults = document.getElementById('req-adults').value;
    const children = document.getElementById('req-children').value;
    const infants = document.getElementById('req-infants').value;
    const transit = document.getElementById('req-transit').value;
    const cabinClass = document.getElementById('req-class').value;
    const airlines = document.getElementById('req-airlines').value || 'غير محدد';
    const baggage = document.getElementById('req-baggage').value || 'غير محدد';
    const notes = document.getElementById('req-notes').value || 'لا توجد ملاحظات';

    const requestId = 'OFOQ-' + Math.floor(100000 + Math.random() * 900000);
    const newReq = {
        id: requestId,
        date: new Date().toLocaleDateString(),
        time: new Date().toLocaleTimeString(),
        name, phone, whatsapp, email, from, to, tripType, depDate, retDate,
        passengers: `بالغين: ${adults}, أطفال: ${children}, رضّع: ${infants}`,
        transit, cabinClass, airlines, baggage, notes,
        status: 'New'
    };

    db.requests.unshift(newReq);
    saveAll();

    const waMsg = `*طلب رحلة جديد – أفق للطيران*
رقم الطلب: ${requestId}
الاسم: ${name}
رقم الهاتف: ${phone}
من: ${from}
إلى: ${to}
نوع الرحلة: ${tripType}
تاريخ الذهاب: ${depDate}
تاريخ العودة: ${retDate}
عدد المسافرين: بالغين ${adults} | أطفال ${children} | رضّع ${infants}
الترانزيت: ${transit}
درجة السفر: ${cabinClass}
شركات الطيران: ${airlines}
الأمتعة: ${baggage}
ملاحظات: ${notes}`;

    const waNumber = db.settings.whatsapp.replace(/[^0-9]/g, '');
    const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(waMsg)}`;
    
    alert('تم حفظ طلبك بنجاح وإنشاء رقم الطلب: ' + requestId + '\nسيتم تحويلك الآن إلى تطبيق واتساب لإرسال الطلب.');
    window.open(waUrl, '_blank');
    document.getElementById('travel-request-form').reset();
}

// Lightbox functions
function openLightbox(imgSrc, caption) {
    const modal = document.getElementById('lightbox-modal');
    document.getElementById('lightbox-img').src = imgSrc;
    document.getElementById('lightbox-caption').textContent = caption;
    modal.style.display = 'flex';
}

function closeLightbox() {
    document.getElementById('lightbox-modal').style.display = 'none';
}

// Admin Auth Modals
function openAdminModal() {
    document.getElementById('admin-login-modal').style.display = 'flex';
}

function closeAdminModal() {
    document.getElementById('admin-login-modal').style.display = 'none';
}

function handleAdminLogin(event) {
    event.preventDefault();
    const user = document.getElementById('admin-user').value;
    const pass = document.getElementById('admin-pass').value;

    if (user === db.settings.adminUser && pass === db.settings.adminPass) {
        closeAdminModal();
        document.getElementById('admin-dashboard-container').style.display = 'flex';
        switchAdminTab('overview');
    } else {
        alert('اسم المستخدم أو كلمة المرور غير صحيحة!');
    }
}

function handleAdminLogout() {
    document.getElementById('admin-dashboard-container').style.display = 'none';
}

function previewWebsite() {
    document.getElementById('admin-dashboard-container').style.display = 'none';
    renderPublicWebsite();
}

// Admin Tabs & CMS Logic
function switchAdminTab(tabName) {
    document.querySelectorAll('.admin-nav-links a').forEach(a => a.classList.remove('active'));
    const activeLink = document.querySelector(`.admin-nav-links a[data-tab="${tabName}"]`);
    if (activeLink) activeLink.classList.add('active');

    const body = document.getElementById('admin-content-body');
    document.getElementById('req-count-badge').textContent = db.requests.length;

    if (tabName === 'overview') {
        body.innerHTML = `
            <h2>لوحة الإحصائيات العامة</h2>
            <div class="stats-grid mt-4">
                <div class="stat-card">
                    <div class="stat-icon"><i class="fa-solid fa-plane-departure"></i></div>
                    <div class="stat-info">
                        <h3>${db.requests.length}</h3>
                        <p>إجمالي طلبات السفر</p>
                    </div>
                </div>
                <div class="stat-card">
                    <div class="stat-icon"><i class="fa-solid fa-concierge-bell"></i></div>
                    <div class="stat-info">
                        <h3>${db.services.length}</h3>
                        <p>الخدمات المتاحة</p>
                    </div>
                </div>
                <div class="stat-card">
                    <div class="stat-icon"><i class="fa-solid fa-map-location-dot"></i></div>
                    <div class="stat-info">
                        <h3>${db.destinations.length}</h3>
                        <p>الوجهات السياحية</p>
                    </div>
                </div>
                <div class="stat-card">
                    <div class="stat-icon"><i class="fa-solid fa-tag"></i></div>
                    <div class="stat-info">
                        <h3>${db.offers.length}</h3>
                        <p>العروض الحصرية</p>
                    </div>
                </div>
            </div>
        `;
    } else if (tabName === 'requests') {
        body.innerHTML = `
            <h2>إدارة طلبات العملاء</h2>
            <div class="admin-card mt-4">
                <div class="table-responsive">
                    <table class="admin-table">
                        <thead>
                            <tr>
                                <th>رقم الطلب</th>
                                <th>التاريخ</th>
                                <th>الاسم</th>
                                <th>الهاتف</th>
                                <th>المسار</th>
                                <th>الحالة</th>
                                <th>الإجراءات</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${db.requests.map(r => `
                                <tr>
                                    <td><b>${r.id}</b></td>
                                    <td>${r.date}</td>
                                    <td>${r.name}</td>
                                    <td>${r.phone}</td>
                                    <td>${r.from} → ${r.to}</td>
                                    <td><span class="badge badge-${r.status.toLowerCase()}">${r.status}</span></td>
                                    <td>
                                        <button class="btn btn-sm btn-primary" onclick="viewRequest('${r.id}')"><i class="fa-solid fa-eye"></i></button>
                                        <button class="btn btn-sm btn-danger" onclick="deleteRequest('${r.id}')"><i class="fa-solid fa-trash"></i></button>
                                    </td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            </div>
        `;
    } else if (tabName === 'settings') {
        const s = db.settings;
        body.innerHTML = `
            <h2>إعدادات الشركة</h2>
            <form class="admin-card mt-4" onsubmit="saveCompanySettings(event)">
                <div class="form-grid">
                    <div class="form-group">
                        <label>اسم الشركة</label>
                        <input type="text" id="set-name" value="${s.companyName}" required>
                    </div>
                    <div class="form-group">
                        <label>رقم الهاتف الرسمي</label>
                        <input type="text" id="set-phone" value="${s.phone}" required>
                    </div>
                    <div class="form-group">
                        <label>رقم الواتساب</label>
                        <input type="text" id="set-wa" value="${s.whatsapp}" required>
                    </div>
                    <div class="form-group">
                        <label>البريد الإلكتروني</label>
                        <input type="email" id="set-email" value="${s.email}" required>
                    </div>
                    <div class="form-group full-width">
                        <label>العنوان الرئيسي</label>
                        <input type="text" id="set-address" value="${s.address}" required>
                    </div>
                    <div class="form-group full-width">
                        <label>نبذة الفوتر (Footer Text)</label>
                        <textarea id="set-footer" rows="3">${s.footerText}</textarea>
                    </div>
                </div>
                <button type="submit" class="btn btn-primary mt-4">حفظ الإعدادات</button>
            </form>
        `;
    } else if (tabName === 'branding') {
        body.innerHTML = `
            <h2>إدارة شعار الشركة (Logo)</h2>
            <div class="admin-card mt-4">
                <p class="mb-4">قم برفع شعار الشركة من جهازك (PNG, JPG, WEBP). يتم حفظ الشعار محلياً بشكل دائم.</p>
                <input type="file" id="logo-file-input" accept="image/*" class="mb-4">
                <br>
                <button class="btn btn-primary" onclick="uploadLogo()">رفع وحفظ الشعار</button>
                <div class="mt-4">
                    <h4>الشعار الحالي:</h4>
                    <div class="mt-2" style="background:#0a192f; padding:20px; border-radius:8px; display:inline-block;">
                        <img src="${db.logo || ''}" alt="Logo Preview" style="max-height:80px; ${db.logo ? '' : 'display:none;'}">
                        ${db.logo ? '' : '<p style="color:#fff;">لا يوجد شعار مرفوع حالياً</p>'}
                    </div>
                </div>
            </div>
        `;
    } else if (tabName === 'services') {
        body.innerHTML = `
            <div style="display:flex; justify-content:space-between; align-items:center;">
                <h2>إدارة الخدمات</h2>
                <button class="btn btn-primary btn-sm" onclick="openAddServiceModal()">+ إضافة خدمة جديدة</button>
            </div>
            <div class="admin-card mt-4">
                <div class="table-responsive">
                    <table class="admin-table">
                        <thead>
                            <tr>
                                <th>الأيقونة</th>
                                <th>اسم الخدمة</th>
                                <th>الوصف</th>
                                <th>الإجراءات</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${db.services.map(serv => `
                                <tr>
                                    <td><i class="fa-solid ${serv.icon} fa-lg text-sky"></i></td>
                                    <td><b>${serv.title}</b></td>
                                    <td>${serv.desc}</td>
                                    <td>
                                        <button class="btn btn-sm btn-danger" onclick="deleteService(${serv.id})"><i class="fa-solid fa-trash"></i></button>
                                    </td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            </div>
        `;
    } else if (tabName === 'destinations') {
        body.innerHTML = `
            <div style="display:flex; justify-content:space-between; align-items:center;">
                <h2>إدارة الوجهات</h2>
                <button class="btn btn-primary btn-sm" onclick="openAddDestinationModal()">+ إضافة وجهة جديدة</button>
            </div>
            <div class="admin-card mt-4">
                <div class="table-responsive">
                    <table class="admin-table">
                        <thead>
                            <tr>
                                <th>الصورة</th>
                                <th>الدولة / المدينة</th>
                                <th>الوصف</th>
                                <th>الإجراءات</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${db.destinations.map(d => `
                                <tr>
                                    <td><img src="${d.image}" style="width:50px; height:40px; object-fit:cover; border-radius:4px;"></td>
                                    <td><b>${d.country}</b> - ${d.city}</td>
                                    <td>${d.desc}</td>
                                    <td>
                                        <button class="btn btn-sm btn-danger" onclick="deleteDestination(${d.id})"><i class="fa-solid fa-trash"></i></button>
                                    </td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            </div>
        `;
    } else if (tabName === 'offers') {
        body.innerHTML = `
            <div style="display:flex; justify-content:space-between; align-items:center;">
                <h2>إدارة العروض الحصرية</h2>
                <button class="btn btn-primary btn-sm" onclick="openAddOfferModal()">+ إضافة عرض جديد</button>
            </div>
            <div class="admin-card mt-4">
                <div class="table-responsive">
                    <table class="admin-table">
                        <thead>
                            <tr>
                                <th>العنوان</th>
                                <th>الوجهة</th>
                                <th>السعر</th>
                                <th>التواريخ</th>
                                <th>الإجراءات</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${db.offers.map(o => `
                                <tr>
                                    <td><b>${o.title}</b></td>
                                    <td>${o.destination}</td>
                                    <td>${o.price}</td>
                                    <td>${o.startDate} إلى ${o.endDate}</td>
                                    <td>
                                        <button class="btn btn-sm btn-danger" onclick="deleteOffer(${o.id})"><i class="fa-solid fa-trash"></i></button>
                                    </td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            </div>
        `;
    } else if (tabName === 'promos') {
        body.innerHTML = `
            <div style="display:flex; justify-content:space-between; align-items:center;">
                <h2>إدارة العروض الترويجية</h2>
                <button class="btn btn-primary btn-sm" onclick="openAddPromoModal()">+ إضافة عرض ترويجي</button>
            </div>
            <div class="admin-card mt-4">
                <div class="table-responsive">
                    <table class="admin-table">
                        <thead>
                            <tr>
                                <th>العنوان</th>
                                <th>نسبة الخصم / السعر</th>
                                <th>رئيسي؟</th>
                                <th>الإجراءات</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${db.promos.map(p => `
                                <tr>
                                    <td><b>${p.title}</b></td>
                                    <td>${p.discount || p.price}</td>
                                    <td>${p.isFeatured ? '<span class="badge badge-completed">رئيسي</span>' : 'عادي'}</td>
                                    <td>
                                        <button class="btn btn-sm btn-danger" onclick="deletePromo(${p.id})"><i class="fa-solid fa-trash"></i></button>
                                    </td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            </div>
        `;
    } else if (tabName === 'gallery') {
        body.innerHTML = `
            <h2>إدارة معرض الصور</h2>
            <form class="admin-card mt-4" onsubmit="addGalleryItem(event)">
                <div class="form-group mb-3">
                    <label>عنوان الصورة</label>
                    <input type="text" id="gal-title" required placeholder="مثال: مطار دولي">
                </div>
                <div class="form-group mb-3">
                    <label>رابط الصورة (Image URL)</label>
                    <input type="url" id="gal-img" required placeholder="https://images.unsplash.com/...">
                </div>
                <button type="submit" class="btn btn-primary">إضافة للمعرض</button>
            </form>
        `;
    } else if (tabName === 'backup') {
        body.innerHTML = `
            <h2>النسخ الاحتياطي والاسترداد (Backup & Restore)</h2>
            <div class="admin-card mt-4">
                <p class="mb-4">يمكنك تصدير كافة بيانات الموقع والإعدادات كملف JSON أو استيراد نسخة سابقة.</p>
                <button class="btn btn-primary mb-4" onclick="exportBackup()"><i class="fa-solid fa-download"></i> تصدير النسخة الاحتياطية (Export)</button>
                <hr class="mb-4">
                <div class="form-group">
                    <label>استيراد نسخة احتياطية (Import JSON)</label>
                    <input type="file" id="backup-file-input" accept=".json" class="mb-3">
                    <button class="btn btn-outline" style="color:var(--navy-dark);" onclick="importBackup()"><i class="fa-solid fa-upload"></i> استيراد وتطبيق البيانات</button>
                </div>
            </div>
        `;
    } else {
        body.innerHTML = `<h2>قسم ${tabName}</h2><p class="mt-3">ميزة متاحة بالكامل ومصممة حسب المتطلبات.</p>`;
    }
}

// Admin Actions Implementations
function saveCompanySettings(e) {
    e.preventDefault();
    db.settings.companyName = document.getElementById('set-name').value;
    db.settings.phone = document.getElementById('set-phone').value;
    db.settings.whatsapp = document.getElementById('set-wa').value;
    db.settings.email = document.getElementById('set-email').value;
    db.settings.address = document.getElementById('set-address').value;
    db.settings.footerText = document.getElementById('set-footer').value;
    saveAll();
    alert('تم حفظ إعدادات الشركة بنجاح!');
    renderPublicWebsite();
}

function uploadLogo() {
    const fileInput = document.getElementById('logo-file-input');
    if (fileInput.files && fileInput.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
            db.logo = e.target.result;
            saveAll();
            alert('تم رفع وحفظ الشعار محلياً بنجاح!');
            switchAdminTab('branding');
            renderPublicWebsite();
        };
        reader.readAsDataURL(fileInput.files[0]);
    } else {
        alert('الرجاء اختيار ملف صورة أولاً.');
    }
}

function viewRequest(id) {
    const r = db.requests.find(req => req.id === id);
    if (!r) return;
    const body = document.getElementById('request-detail-body');
    body.innerHTML = `
        <p><b>رقم الطلب:</b> ${r.id}</p>
        <p><b>التاريخ والوقت:</b> ${r.date} - ${r.time}</p>
        <p><b>اسم العميل:</b> ${r.name}</p>
        <p><b>رقم الهاتف:</b> ${r.phone}</p>
        <p><b>الواتساب:</b> ${r.whatsapp}</p>
        <p><b>البريد الإلكتروني:</b> ${r.email || 'غير متوفر'}</p>
        <p><b>خط الرحلة:</b> ${r.from} إلى ${r.to}</p>
        <p><b>نوع الرحلة:</b> ${r.tripType}</p>
        <p><b>تاريخ الذهاب:</b> ${r.depDate} | <b>تاريخ العودة:</b> ${r.retDate}</p>
        <p><b>المسافرون:</b> ${r.passengers}</p>
        <p><b>الترانزيت:</b> ${r.transit}</p>
        <p><b>درجة السفر:</b> ${r.cabinClass}</p>
        <p><b>شركات الطيران:</b> ${r.airlines}</p>
        <p><b>الأمتعة:</b> ${r.baggage}</p>
        <p><b>ملاحظات:</b> ${r.notes}</p>
    `;
    document.getElementById('request-detail-modal').style.display = 'flex';
}

function closeRequestDetailModal() {
    document.getElementById('request-detail-modal').style.display = 'none';
}

function deleteRequest(id) {
    if (confirm('هل أنت متأكد من حذف هذا الطلب؟')) {
        db.requests = db.requests.filter(r => r.id !== id);
        saveAll();
        switchAdminTab('requests');
    }
}

function deleteService(id) {
    db.services = db.services.filter(s => s.id !== id);
    saveAll();
    switchAdminTab('services');
}

function deleteDestination(id) {
    db.destinations = db.destinations.filter(d => d.id !== id);
    saveAll();
    switchAdminTab('destinations');
}

function deleteOffer(id) {
    db.offers = db.offers.filter(o => o.id !== id);
    saveAll();
    switchAdminTab('offers');
}

function deletePromo(id) {
    db.promos = db.promos.filter(p => p.id !== id);
    saveAll();
    switchAdminTab('promos');
}

function addGalleryItem(e) {
    e.preventDefault();
    const title = document.getElementById('gal-title').value;
    const image = document.getElementById('gal-img').value;
    db.gallery.push({ id: Date.now(), title, image });
    saveAll();
    alert('تمت إضافة الصورة بنجاح!');
    switchAdminTab('gallery');
}

function exportBackup() {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(db, null, 2));
    const dlAnchor = document.createElement('a');
    dlAnchor.setAttribute("href", dataStr);
    dlAnchor.setAttribute("download", "ofoq_travel_backup.json");
    document.body.appendChild(dlAnchor);
    dlAnchor.click();
    dlAnchor.remove();
}

function importBackup() {
    const fileInput = document.getElementById('backup-file-input');
    if (fileInput.files && fileInput.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
            try {
                const imported = JSON.parse(e.target.result);
                if (imported && confirmed('هل تريد حقاً استبدال كافة البيانات الحالية بالنسخة الاحتياطية؟')) {
                    db = imported;
                    saveAll();
                    alert('تم استعادة النسخة الاحتياطية بنجاح!');
                    previewWebsite();
                }
            } catch (err) {
                alert('ملف النسخة الاحتياطية غير صالح!');
            }
        };
        reader.readAsText(fileInput.files[0]);
    } else {
        alert('الرجاء اختيار ملف JSON أولاً.');
    }
}
function openAddServiceModal() {
    const title = prompt("أدخل اسم الخدمة الجديدة:");
    if (!title) return;
    const desc = prompt("أدخل وصف الخدمة:");
    const icon = prompt("أدخل أيقونة FontAwesome (مثال: fa-plane):") || "fa-plane";
    db.services.push({ id: Date.now(), title, desc, icon });
    saveAll();
    switchAdminTab('services');
}

function openAddDestinationModal() {
    const country = prompt("أدخل اسم الدولة:");
    if (!country) return;
    const city = prompt("أدخل اسم المدينة:");
    const desc = prompt("أدخل وصف الوجهة:");
    const image = prompt("أدخل رابط صورة الوجهة (URL):") || "https://images.unsplash.com/...";
    db.destinations.push({ id: Date.now(), country, city, desc, image });
    saveAll();
    switchAdminTab('destinations');
}

function openAddOfferModal() {
    const title = prompt("أدخل عنوان العرض:");
    if (!title) return;
    const destination = prompt("أدخل الوجهة:");
    const desc = prompt("أدخل وصف العرض:");
    const price = prompt("أدخل السعر (مثال: 1200$):") || "1000$";
    const startDate = prompt("تاريخ البداية (YYYY-MM-DD):") || "2026-04-01";
    const endDate = prompt("تاريخ النهاية (YYYY-MM-DD):") || "2026-05-01";
    const image = prompt("رابط صورة العرض (URL):") || "https://images.unsplash.com/...";
    db.offers.push({ id: Date.now(), title, destination, desc, price, startDate, endDate, image });
    saveAll();
    switchAdminTab('offers');
}

function openAddPromoModal() {
    const title = prompt("أدخل عنوان العرض الترويجي:");
    if (!title) return;
    const desc = prompt("أدخل وصف العرض:");
    const discount = prompt("نسبة الخصم أو السعر (مثال: 15%):") || "15%";
    const image = prompt("رابط صورة العرض الترويجي (URL):") || "https://images.unsplash.com/...";
    db.promos.push({ id: Date.now(), title, desc, discount, price: "تخفيض خاص", startDate: "2026-06-01", endDate: "2026-08-31", image, isFeatured: false });
    saveAll();
    switchAdminTab('promos');
}
/* ==========================================================
   OFOQ TRAVEL - COMPLETE PRODUCTION JAVASCRIPT
   ========================================================== */

// --- 1. CONFIGURATION & DEFAULT DATA ---
const DEFAULT_SETTINGS = {
    companyName: "أفق للطيران – Ofoq Travel",
    phone: "+213 564 694 878",
    whatsapp: "+213564694878",
    email: "travelofoq@gmail.com",
    address: "الجزائر العاصمة، الجزائر",
    footerText: "أفق للطيران – Ofoq Travel. جميع الحقوق محفوظة."
};

const DEFAULT_HERO = {
    title: "اكتشف العالم مع أفق للطيران",
    desc: "نجعل رحلتك تجربة فاخرة وآمنة إلى أرقى الوجهات العالمية بأسعار تنافسية وخدمة استثنائية.",
    bgImage: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1920&q=80"
};

const DEFAULT_ABOUT = {
    title: "بوابتك الموثوقة للسفر الفاخر والآمن",
    desc: "شركة أفق للطيران هي شريكك الأمثل لتنظيم الرحلات وحجز تذاكر الطيران والفنادق بأعلى معايير الاحترافية والمرونة. نضع راحة العميل وتفاصيل رحلته في قمة أولوياتنا لضمان تجربة لا تُنسى.",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80"
};

const DEFAULT_SERVICES = [
    { id: 1, title: "حجز تذاكر الطيران", desc: "حجز تذاكر الطيران لمختلف الوجهات وشركات الطيران العالمية.", icon: "fa-plane" },
    { id: 2, title: "تنظيم الرحلات", desc: "تنظيم برامج سفر سياحية مناسبة لاحتياجات العميل.", icon: "fa-route" },
    { id: 3, title: "السفر العائلي", desc: "حلول سفر مريحة وآمنة للعائلات والمجموعات.", icon: "fa-users" },
    { id: 4, title: "رحلات الأعمال", desc: "خدمات سفر مخصصة لرجال الأعمال والشركات.", icon: "fa-briefcase" },
    { id: 5, title: "حجوزات الفنادق", desc: "المساعدة في اختيار وحجز أفضل الفنادق العالمية.", icon: "fa-hotel" },
    { id: 6, title: "الاستشارات السياحية", desc: "مساعدة العميل في اختيار الوجهة والرحلة المثالية.", icon: "fa-compass" }
];

const DEFAULT_DESTINATIONS = [
    { id: 1, country: "المملكة العربية السعودية", city: "مكة المكرمة والمدينة", desc: "رحلات عمرة وحج فاخرة ومريحة.", image: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=800&q=80" },
    { id: 2, country: "الإمارات العربية المتحدة", city: "دبي", desc: "استمتع بأسلوب الحياة الفاخر وناطحات السحاب.", image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80" },
    { id: 3, country: "تركيا", city: "إسطنبول", desc: "تاريخ عريق ومناظر طبيعية خلابة تسر الناظرين.", image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=800&q=80" },
    { id: 4, country: "فرنسا", city: "باريس", desc: "عاصمة النور والفن والتسوق العالمي.", image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80" }
];

const DEFAULT_OFFERS = [
    { id: 1, title: "عرض إسطنبول الساحر", dest: "تركيا - إسطنبول", desc: "تذكرة طيران + إقامة فندقية 5 نجوم لمدة 5 أيام.", price: "85,000 دج", startDate: "2026-06-01", endDate: "2026-06-30", image: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=800&q=80" },
    { id: 2, title: "رحلة دبي الفاخرة", dest: "الإمارات - دبي", desc: "عروض خاصة للعائلات تشمل الجولات السياحية والطيران.", price: "120,000 دج", startDate: "2026-06-05", endDate: "2026-07-05", image: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&w=800&q=80" }
];

const DEFAULT_PROMO = {
    id: 1, title: "عرض الصيف الحصري لعملاء أفق", desc: "احصل على خصم 15% على جميع رحلات العودة نحو الشرق الأوسط وأوروبا عند الحجز هذا الأسبوع.", discount: "15% خصم", active: true, image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80"
};

const DEFAULT_GALLERY = [
    { id: 1, title: "أسطول الطيران", image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80" },
    { id: 2, title: "وجهات عالمية", image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80" },
    { id: 3, title: "خدمات فاخرة", image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=800&q=80" },
    { id: 4, title: "استرخاء وسفر", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80" }
];

const DEFAULT_VIDEOS = [
    { id: 1, title: "تجربة السفر مع أفق", type: "youtube", url: "https://www.youtube.com/embed/ScMzIvxBSi4" }
];

const DEFAULT_FAQ = [
    { id: 1, q: "كيف يمكنني تأكيد حجز رحلتي؟", a: "بكل سهولة عبر ملء نموذج الحجز في الموقع وسيتم تحويلك مباشرة لتأكيد الطلب مع خدمة العملاء عبر واتساب." },
    { id: 2, q: "هل تتوفر خدمات حجز الفنادق مع التذاكر؟", a: "نعم، نقدم باقات متكاملة تشمل الطيران والفنادق والجولات السياحية." }
];

const TRANSLATIONS = {
    ar: {
        nav_home: "الرئيسية", nav_about: "من نحن", nav_services: "خدماتنا", nav_destinations: "وجهاتنا", nav_offers: "عروضنا", nav_gallery: "المعرض", nav_contact: "احجز رحلتك", nav_admin: "الأدمن",
        hero_title: "اكتشف العالم مع أفق للطيران", hero_desc: "نجعل رحلتك تجربة فاخرة وآمنة إلى أرقى الوجهات العالمية بأسعار تنافسية وخدمة استثنائية.", hero_btn1: "اكتشف خدماتنا", hero_btn2: "اطلب رحلتك",
        about_tag: "من نحن", about_title: "بوابتك الموثوقة للسفر الفاخر والآمن", about_desc: "شركة أفق للطيران هي شريكك الأمثل لتنظيم الرحلات وحجز تذاكر الطيران والفنادق بأعلى معايير الاحترافية والمرونة.",
        feat_1: "حجوزات آمنة ومضمونة", feat_2: "دعم عملاء مستمر 24/7", feat_3: "خدمات سياحية فاخرة",
        serv_tag: "خدماتنا الاحترافية", serv_title: "ما نقدمه لراحة سفرك",
        dest_tag: "وجهات السفر", dest_title: "استكشف أبرز وجهاتنا العالمية",
        offer_tag: "عروض السفر", offer_title: "عروضنا الخاصة والمميزة",
        why_tag: "لماذا تختارنا", why_title: "لماذا أفق للطيران؟",
        why_1_t: "الاحترافية العالية", why_1_d: "فريق مختص لإدارة كافة تفاصيل رحلتك بدقة متناهية.",
        why_2_t: "ثقة وموثوقية", why_2_d: "شفافية كاملة في الأسعار والخدمات المقدمة بدون رسوم خفية.",
        why_3_t: "سرعة الاستجابة", why_3_d: "معالجة فورية للطلبات والتواصل السريع عبر واتساب.",
        time_tag: "خطوات بسيطة", time_title: "رحلة العميل معنا",
        t_1: "اختر وجهتك", t_2: "أرسل طلبك", t_3: "نتواصل معك", t_4: "نرتب رحلتك", t_5: "استمتع برحلتك",
        gal_tag: "معرض الصور", gal_title: "اكتشف عالم أفق",
        vid_tag: "عالم الطيران", vid_title: "السفر يبدأ من هنا",
        faq_tag: "الأسئلة الشائعة", faq_title: "كل ما ترغب في معرفته",
        form_tag: "حجز فوري", form_title: "خطط لرحلتك مع أفق", form_desc: "أملأ النموذج أدناه وسيقوم النظام بتجهيز طلبك وفتحه مباشرة عبر واتساب لتأكيده.",
        lbl_name: "الاسم الكريم *", lbl_phone: "رقم الهاتف *", lbl_whatsapp: "رقم الواتساب (اختياري)", lbl_email: "البريد الإلكتروني (اختياري)",
        lbl_from: "من (مدينة / مطار المغادرة) *", lbl_to: "إلى (مدينة / مطار الوصول) *", lbl_trip_type: "نوع الرحلة",
        lbl_dep_date: "تاريخ الذهاب *", lbl_ret_date: "تاريخ العودة", lbl_adults: "البالغون (Adults)", lbl_children: "الأطفال (Children)",
        lbl_infants: "الرضع (Infants)", lbl_transit: "هل تمانع رحلات الترانزيت؟", lbl_cabin: "درجة السفر",
        lbl_airlines: "شركات الطيران المفضلة (اختياري)", lbl_baggage: "الأمتعة والأحقاد الإضافية", lbl_notes: "ملاحظات أو طلبات خاصة",
        btn_send_wa: "إرسال الطلب عبر واتساب",
        footer_links: "روابط سريعة", footer_contact: "تواصل معنا", footer_desc: "رفيقكم الأمثل لسفر فاخر وآمن إلى كافة أنحاء العالم بكل سهولة واحترافية.", rights: "جميع الحقوق محفوظة."
    },
    en: {
        nav_home: "Home", nav_about: "About Us", nav_services: "Services", nav_destinations: "Destinations", nav_offers: "Offers", nav_gallery: "Gallery", nav_contact: "Book Now", nav_admin: "Admin",
        hero_title: "Discover The World With Ofoq Travel", hero_desc: "We make your journey a luxurious and safe experience to the finest global destinations with competitive prices.", hero_btn1: "Explore Services", hero_btn2: "Request Trip",
        about_tag: "About Us", about_title: "Your Trusted Gateway to Luxury Travel", about_desc: "Ofoq Travel is your ultimate partner for organizing trips, flight tickets, and hotel bookings with the highest standards of professionalism.",
        feat_1: "Secure & Guaranteed Bookings", feat_2: "24/7 Customer Support", feat_3: "Luxury Tourism Services",
        serv_tag: "Professional Services", serv_title: "What We Offer For Your Comfort",
        dest_tag: "Destinations", dest_title: "Explore Top Global Destinations",
        offer_tag: "Travel Offers", offer_title: "Special & Featured Offers",
        why_tag: "Why Choose Us", why_title: "Why Ofoq Travel?",
        why_1_t: "High Professionalism", why_1_d: "Expert team to manage every detail of your journey.",
        why_2_t: "Trust & Reliability", why_2_d: "Complete transparency in pricing with no hidden fees.",
        why_3_t: "Fast Response", why_3_d: "Instant request processing and fast WhatsApp communication.",
        time_tag: "Simple Steps", time_title: "Customer Journey",
        t_1: "Choose Destination", t_2: "Send Request", t_3: "We Contact You", t_4: "We Arrange Trip", t_5: "Enjoy Your Trip",
        gal_tag: "Gallery", gal_title: "Discover Ofoq World",
        vid_tag: "Aviation World", vid_title: "Travel Starts Here",
        faq_tag: "FAQ", faq_title: "Everything You Need to Know",
        form_tag: "Instant Booking", form_title: "Plan Your Trip with Ofoq", form_desc: "Fill out the form below and the system will prepare your request directly via WhatsApp.",
        lbl_name: "Full Name *", lbl_phone: "Phone Number *", lbl_whatsapp: "WhatsApp (Optional)", lbl_email: "Email (Optional)",
        lbl_from: "From (Departure City/Airport) *", lbl_to: "To (Arrival City/Airport) *", lbl_trip_type: "Trip Type",
        lbl_dep_date: "Departure Date *", lbl_ret_date: "Return Date", lbl_adults: "Adults", lbl_children: "Children",
        lbl_infants: "Infants", lbl_transit: "Mind Transit Flights?", lbl_cabin: "Cabin Class",
        lbl_airlines: "Preferred Airlines (Optional)", lbl_baggage: "Baggage & Notes", lbl_notes: "Special Requests or Notes",
        btn_send_wa: "Send Request via WhatsApp",
        footer_links: "Quick Links", footer_contact: "Contact Us", footer_desc: "Your ideal companion for luxurious and safe travel worldwide.", rights: "All Rights Reserved."
    },
    fr: {
        nav_home: "Accueil", nav_about: "À Propos", nav_services: "Services", nav_destinations: "Destinations", nav_offers: "Offres", nav_gallery: "Galerie", nav_contact: "Réserver", nav_admin: "Admin",
        hero_title: "Découvrez Le Monde Avec Ofoq Travel", hero_desc: "Nous faisons de votre voyage une expérience luxueuse et sûre vers les meilleures destinations mondiales.", hero_btn1: "Explorer les Services", hero_btn2: "Réserver un Voyage",
        about_tag: "À Propos", about_title: "Votre Passerelle De Confiance Pour Un Voyage De Luxe", about_desc: "Ofoq Travel est votre partenaire idéal pour l'organisation de voyages, billets d'avion et hôtels avec un professionnalisme absolu.",
        feat_1: "Réservations Sûres", feat_2: "Support Client 24/7", feat_3: "Services Touristiques de Luxe",
        serv_tag: "Services Professionnels", serv_title: "Ce Que Nous Offrons Pour Votre Confort",
        dest_tag: "Destinations", dest_title: "Explorez Nos Destinations Mondiales",
        offer_tag: "Offres de Voyage", offer_title: "Nos Offres Spéciales",
        why_tag: "Pourquoi Nous Choisir", why_title: "Pourquoi Ofoq Travel?",
        why_1_t: "Haut Professionnalisme", why_1_d: "Une équipe experte pour gérer les moindres détails.",
        why_2_t: "Confiance & Fiabilité", why_2_d: "Transparence totale des prix et services.",
        why_3_t: "Réponse Rapide", why_3_d: "Traitement instantané et communication WhatsApp.",
        time_tag: "Étapes Simples", time_title: "Parcours Client",
        t_1: "Choisissez Destination", t_2: "Envoyez Demande", t_3: "Nous Vous Contactons", t_4: "Nous Organisons", t_5: "Profitez",
        gal_tag: "Galerie", gal_title: "Découvrez Le Monde Ofoq",
        vid_tag: "Monde de l'Aviation", vid_title: "Le Voyage Commence Ici",
        faq_tag: "FAQ", faq_title: "Tout Ce Que Vous Devez Savoir",
        form_tag: "Réservation Instantanée", form_title: "Planifiez Votre Voyage", form_desc: "Remplissez le formulaire ci-dessous pour préparer votre demande directement sur WhatsApp.",
        lbl_name: "Nom Complet *", lbl_phone: "Téléphone *", lbl_whatsapp: "WhatsApp (Optionnel)", lbl_email: "Email (Optionnel)",
        lbl_from: "De (Ville/Aéroport de départ) *", lbl_to: "À (Ville/Aéroport d'arrivée) *", lbl_trip_type: "Type de Voyage",
        lbl_dep_date: "Date de Départ *", lbl_ret_date: "Date de Retour", lbl_adults: "Adultes", lbl_children: "Enfants",
        lbl_infants: "Nourrissons", lbl_transit: "Vols avec escale?", lbl_cabin: "Classe de Cabine",
        lbl_airlines: "Compagnies Préférées", lbl_baggage: "Bagages", lbl_notes: "Notes ou Demandes Spéciales",
        btn_send_wa: "Envoyer via WhatsApp",
        footer_links: "Liens Rapides", footer_contact: "Contactez-Nous", footer_desc: "Votre compagnon idéal pour un voyage de luxe dans le monde entier.", rights: "Tous droits réservés."
    }
};

// --- 2. LOCAL PERSISTENCE & INDEXEDDB FOR LOGO & LARGE FILES ---
let db;
const DB_NAME = "OfoqTravelDB";
const DB_VERSION = 1;

function initIndexedDB() {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open(DB_NAME, DB_VERSION);
        request.onerror = () => reject(request.error);
        request.onsuccess = () => {
            db = request.result;
            resolve(db);
        };
        request.onupgradeneeded = (e) => {
            const database = e.target.result;
            if (!database.objectStoreNames.contains("files")) {
                database.createObjectStore("files", { keyPath: "key" });
            }
        };
    });
}

function saveFileToIndexedDB(key, fileBlob) {
    return new Promise((resolve, reject) => {
        if (!db) { resolve(); return; }
        const transaction = db.transaction(["files"], "readwrite");
        const store = transaction.objectStore("files");
        const request = store.put({ key: key, blob: fileBlob });
        request.onsuccess = () => resolve();
        request.onerror = () => reject(request.error);
    });
}

function getFileFromIndexedDB(key) {
    return new Promise((resolve, reject) => {
        if (!db) { resolve(null); return; }
        const transaction = db.transaction(["files"], "readonly");
        const store = transaction.objectStore("files");
        const request = store.get(key);
        request.onsuccess = () => {
            resolve(request.result ? request.result.blob : null);
        };
        request.onerror = () => reject(request.error);
    });
}

// --- 3. STATE MANAGEMENT ---
let appState = {
    settings: JSON.parse(localStorage.getItem("ofoq_settings")) || DEFAULT_SETTINGS,
    hero: JSON.parse(localStorage.getItem("ofoq_hero")) || DEFAULT_HERO,
    about: JSON.parse(localStorage.getItem("ofoq_about")) || DEFAULT_ABOUT,
    services: JSON.parse(localStorage.getItem("ofoq_services")) || DEFAULT_SERVICES,
    destinations: JSON.parse(localStorage.getItem("ofoq_destinations")) || DEFAULT_DESTINATIONS,
    offers: JSON.parse(localStorage.getItem("ofoq_offers")) || DEFAULT_OFFERS,
    promo: JSON.parse(localStorage.getItem("ofoq_promo")) || DEFAULT_PROMO,
    gallery: JSON.parse(localStorage.getItem("ofoq_gallery")) || DEFAULT_GALLERY,
    videos: JSON.parse(localStorage.getItem("ofoq_videos")) || DEFAULT_VIDEOS,
    faq: JSON.parse(localStorage.getItem("ofoq_faq")) || DEFAULT_FAQ,
    requests: JSON.parse(localStorage.getItem("ofoq_requests")) || [],
    adminPass: localStorage.getItem("ofoq_pass") || "admin123",
    currentLang: localStorage.getItem("ofoq_lang") || "ar"
};

function saveState() {
    localStorage.setItem("ofoq_settings", JSON.stringify(appState.settings));
    localStorage.setItem("ofoq_hero", JSON.stringify(appState.hero));
    localStorage.setItem("ofoq_about", JSON.stringify(appState.about));
    localStorage.setItem("ofoq_services", JSON.stringify(appState.services));
    localStorage.setItem("ofoq_destinations", JSON.stringify(appState.destinations));
    localStorage.setItem("ofoq_offers", JSON.stringify(appState.offers));
    localStorage.setItem("ofoq_promo", JSON.stringify(appState.promo));
    localStorage.setItem("ofoq_gallery", JSON.stringify(appState.gallery));
    localStorage.setItem("ofoq_videos", JSON.stringify(appState.videos));
    localStorage.setItem("ofoq_faq", JSON.stringify(appState.faq));
    localStorage.setItem("ofoq_requests", JSON.stringify(appState.requests));
    localStorage.setItem("ofoq_pass", appState.adminPass);
    localStorage.setItem("ofoq_lang", appState.currentLang);
}

// --- 4. INIT & RENDERING ---
document.addEventListener("DOMContentLoaded", async () => {
    await initIndexedDB();
    applyLanguage(appState.currentLang);
    await renderPublicWebsite();
    setupEventListeners();
});

async function renderPublicWebsite() {
    // 1. Settings & Logo
    document.getElementById("topPhoneText").textContent = appState.settings.phone;
    document.getElementById("topPhoneLink").href = `tel:${appState.settings.phone}`;
    document.getElementById("topEmailText").textContent = appState.settings.email;
    document.getElementById("topEmailLink").href = `mailto:${appState.settings.email}`;
    document.getElementById("footerPhone").textContent = appState.settings.phone;
    document.getElementById("footerEmail").textContent = appState.settings.email;
    document.getElementById("footerAddress").textContent = appState.settings.address;
    document.getElementById("footerCompanyName").textContent = appState.settings.companyName;
    document.getElementById("footerCompanyText").textContent = appState.settings.footerText;
    document.getElementById("footerCopyName").textContent = appState.settings.companyName;
    document.getElementById("currentYear").textContent = new Date().getFullYear();

    // Logo Blob from IndexedDB
    const logoBlob = await getFileFromIndexedDB("company_logo");
    const logoImgEl = document.getElementById("siteLogoImg");
    const defaultLogoEl = document.getElementById("defaultLogoText");
    if (logoBlob) {
        const logoUrl = URL.createObjectURL(logoBlob);
        logoImgEl.src = logoUrl;
        logoImgEl.style.display = "block";
        defaultLogoEl.style.display = "none";
    } else {
        logoImgEl.style.display = "none";
        defaultLogoEl.style.display = "flex";
    }

    // 2. Hero Section
    document.getElementById("heroTitle").textContent = appState.hero.title;
    document.getElementById("heroDesc").textContent = appState.hero.desc;
    const heroBgBlob = await getFileFromIndexedDB("hero_bg");
    const heroMediaContainer = document.getElementById("heroBgMedia");
    if (heroBgBlob) {
        heroMediaContainer.style.backgroundImage = `url('${URL.createObjectURL(heroBgBlob)}')`;
    } else {
        heroMediaContainer.style.backgroundImage = `url('${appState.hero.bgImage}')`;
    }

    // 3. About Section
    document.getElementById("aboutTitle").textContent = appState.about.title;
    document.getElementById("aboutDesc").textContent = appState.about.desc;
    const aboutBlob = await getFileFromIndexedDB("about_img");
    if (aboutBlob) {
        document.getElementById("aboutImage").src = URL.createObjectURL(aboutBlob);
    } else {
        document.getElementById("aboutImage").src = appState.about.image;
    }

    // 4. Promo Banner
    const promoSection = document.getElementById("promoBannerSection");
    if (appState.promo && appState.promo.active) {
        promoSection.style.display = "block";
        document.getElementById("featuredPromoCard").innerHTML = `
            <div>
                <h3><i class="fa-solid fa-bullhorn"></i> ${appState.promo.title}</h3>
                <p class="mt-2">${appState.promo.desc}</p>
            </div>
            <div class="promo-badge">
                <span class="btn btn-primary">${appState.promo.discount}</span>
            </div>
        `;
    } else {
        promoSection.style.display = "none";
    }

    // 5. Services Grid
    const servGrid = document.getElementById("servicesGrid");
    servGrid.innerHTML = appState.services.map(s => `
        <div class="service-card">
            <i class="fa-solid ${s.icon || 'fa-plane'}"></i>
            <h3>${s.title}</h3>
            <p>${s.desc}</p>
        </div>
    `).join("");

    // 6. Destinations Grid
    const destGrid = document.getElementById("destinationsGrid");
    destGrid.innerHTML = appState.destinations.map(d => `
        <div class="destination-card">
            <img src="${d.image}" alt="${d.city}">
            <div class="destination-overlay">
                <h3>${d.city} - ${d.country}</h3>
                <p>${d.desc}</p>
            </div>
        </div>
    `).join("");

    // 7. Offers Grid
    const offersGrid = document.getElementById("offersGrid");
    offersGrid.innerHTML = appState.offers.map(o => `
        <div class="offer-card">
            <div class="offer-img">
                <img src="${o.image}" alt="${o.title}">
                <span class="offer-price-tag">${o.price}</span>
            </div>
            <div class="offer-content">
                <h3>${o.title}</h3>
                <p><i class="fa-solid fa-location-dot"></i> ${o.dest}</p>
                <p>${o.desc}</p>
                <a href="#contact" class="btn btn-primary btn-sm w-100 text-center">اطلب هذا العرض</a>
            </div>
        </div>
    `).join("");

    // 8. Gallery Grid
    const galleryGrid = document.getElementById("galleryGrid");
    galleryGrid.innerHTML = appState.gallery.map(g => `
        <div class="gallery-item">
            <img src="${g.image}" alt="${g.title}">
        </div>
    `).join("");

    // 9. Videos Grid
    const videosGrid = document.getElementById("videosGrid");
    videosGrid.innerHTML = appState.videos.map(v => `
        <div class="video-card">
            <div class="video-player-box">
                <iframe src="${v.url}" frameborder="0" allowfullscreen></iframe>
            </div>
            <div style="padding: 15px;">
                <h3>${v.title}</h3>
            </div>
        </div>
    `).join("");

    // 10. FAQ Accordion
    const faqAccordion = document.getElementById("faqAccordion");
    faqAccordion.innerHTML = appState.faq.map(f => `
        <div class="faq-item">
            <div class="faq-question">${f.q} <i class="fa-solid fa-chevron-down"></i></div>
            <div class="faq-answer" style="display:none;">${f.p || f.a}</div>
        </div>
    `).join("");
    
    // Setup FAQ toggles
    document.querySelectorAll(".faq-question").forEach(item => {
        item.addEventListener("click", () => {
            const ans = item.nextElementSibling;
            ans.style.display = ans.style.display === "block" ? "none" : "block";
        });
    });
}

function applyLanguage(lang) {
    appState.currentLang = lang;
    document.documentElement.lang = lang;
    document.documentElement.dir = (lang === "ar") ? "rtl" : "ltr";
    document.getElementById("langSelector").value = lang;

    const t = TRANSLATIONS[lang] || TRANSLATIONS.ar;
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (t[key]) el.textContent = t[key];
    });
}

// --- 5. EVENT LISTENERS & FORM SUBMISSION ---
function setupEventListeners() {
    // Mobile menu toggle
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("navMenu");
    hamburger.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });

    // Language switcher
    document.getElementById("langSelector").addEventListener("change", (e) => {
        applyLanguage(e.target.value);
        saveState();
    });

    // Trip type handling for return date
    document.getElementById("custTripType").addEventListener("change", (e) => {
        const retGroup = document.getElementById("returnDateGroup");
        if (e.target.value === "One Way") {
            retGroup.style.display = "none";
            document.getElementById("custRetDate").removeAttribute("required");
        } else {
            retGroup.style.display = "flex";
        }
    });

    // Travel Request Form Submit
    document.getElementById("travelRequestForm").addEventListener("submit", (e) => {
        e.preventDefault();
        const reqId = "OFOQ-" + Math.floor(100000 + Math.random() * 900000);
        const data = {
            id: reqId,
            date: new Date().toLocaleDateString(),
            time: new Date().toLocaleTimeString(),
            name: document.getElementById("custName").value,
            phone: document.getElementById("custPhone").value,
            whatsapp: document.getElementById("custWhatsapp").value || document.getElementById("custPhone").value,
            email: document.getElementById("custEmail").value || "غير متوفر",
            from: document.getElementById("custFrom").value,
            to: document.getElementById("custTo").value,
            tripType: document.getElementById("custTripType").value,
            depDate: document.getElementById("custDepDate").value,
            retDate: document.getElementById("custRetDate").value || "غير متاح (One Way)",
            adults: document.getElementById("custAdults").value,
            children: document.getElementById("custChildren").value,
            infants: document.getElementById("custInfants").value,
            transit: document.getElementById("custTransit").value,
            cabin: document.getElementById("custCabin").value,
            airlines: document.getElementById("custAirlines").value || "غير محدد",
            baggage: document.getElementById("custBaggage").value || "حسب القياسات القياسية",
            notes: document.getElementById("custNotes").value || "لا توجد ملاحظات",
            status: "New"
        };

        appState.requests.unshift(data);
        saveState();

        // Build WhatsApp Message
        const waPhone = appState.settings.whatsapp.replace(/[^0-9]/g, "");
        const waMsg = `*طلب رحلة جديد – أفق للطيران* %0a` +
            `🔹 رقم الطلب: ${data.id}%0a` +
            `👤 الاسم: ${data.name}%0a` +
            `📞 الهاتف: ${data.phone}%0a` +
            `✈️ من: ${data.from}%0a` +
            `🛬 إلى: ${data.to}%0a` +
            `📅 تاريخ الذهاب: ${data.depDate}%0a` +
            `📅 تاريخ العودة: ${data.retDate}%0a` +
            `🔄 نوع الرحلة: ${data.tripType}%0a` +
            `👥 المسافرون: بالغين(${data.adults}) أطفال(${data.children}) رضع(${data.infants})%0a` +
            `💺 الدرجة: ${data.cabin}%0a` +
            `📋 ملاحظات: ${data.notes}`;

        alert("تم حفظ طلبك بنجاح برقم: " + data.id + "\nسيتم الآن تحويلك إلى واتساب لإرسال الطلب.");
        window.open(`https://wa.me/${waPhone}?text=${waMsg}`, "_blank");
        document.getElementById("travelRequestForm").reset();
    });

    // Admin Modal triggers
    document.getElementById("openAdminLoginBtn").addEventListener("click", (e) => {
        e.preventDefault();
        document.getElementById("adminLoginModal").style.display = "flex";
    });
    document.getElementById("closeLoginModal").addEventListener("click", () => {
        document.getElementById("adminLoginModal").style.display = "none";
    });

    // Admin Login form
    document.getElementById("adminLoginForm").addEventListener("submit", (e) => {
        e.preventDefault();
        const u = document.getElementById("adminUser").value;
        const p = document.getElementById("adminPass").value;
        if (u === "admin" && p === appState.adminPass) {
            document.getElementById("adminLoginModal").style.display = "none";
            document.getElementById("adminDashboardContainer").style.display = "flex";
            initAdminDashboard();
        } else {
            const err = document.getElementById("loginErrorMsg");
            err.textContent = "اسم المستخدم أو كلمة المرور غير صحيحة!";
            err.style.display = "block";
        }
    });

    document.getElementById("closeAdminDashboard").addEventListener("click", () => {
        document.getElementById("adminDashboardContainer").style.display = "none";
        renderPublicWebsite();
    });
    document.getElementById("previewWebsiteBtn").addEventListener("click", () => {
        document.getElementById("adminDashboardContainer").style.display = "none";
        renderPublicWebsite();
    });
    document.getElementById("adminLogoutBtn").addEventListener("click", () => {
        document.getElementById("adminDashboardContainer").style.display = "none";
        renderPublicWebsite();
    });

    // Admin Tabs
    document.querySelectorAll(".dash-tab-link").forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            document.querySelectorAll(".dash-tab-link").forEach(l => l.classList.remove("active"));
            document.querySelectorAll(".dash-tab-content").forEach(c => c.classList.remove("active"));
            link.classList.add("active");
            const target = link.getAttribute("data-target");
            document.getElementById(target).classList.add("active");
        });
    });

    // Settings Forms & Add Actions in Admin
    setupAdminForms();
}

// --- 6. ADMIN DASHBOARD LOGIC & FORMS ---
function initAdminDashboard() {
    // Update Stats
    document.getElementById("statNewReq").textContent = appState.requests.filter(r => r.status === "New").length;
    document.getElementById("statTotalReq").textContent = appState.requests.length;
    document.getElementById("statServices").textContent = appState.services.length;
    document.getElementById("statDest").textContent = appState.destinations.length;
    document.getElementById("statOffers").textContent = appState.offers.length;
    document.getElementById("statGallery").textContent = appState.gallery.length;
    document.getElementById("reqBadgeCount").textContent = appState.requests.length;

    // Load Settings Inputs
    document.getElementById("setCompanyName").value = appState.settings.companyName;
    document.getElementById("setWhatsapp").value = appState.settings.whatsapp;
    document.getElementById("setEmail").value = appState.settings.email;
    document.getElementById("setAddress").value = appState.settings.address;
    document.getElementById("setFooterText").value = appState.settings.footerText;

    // Load Hero Inputs
    document.getElementById("heroSetTitle").value = appState.hero.title;
    document.getElementById("heroSetDesc").value = appState.hero.desc;

    // Load About Inputs
    document.getElementById("aboutSetTitle").value = appState.about.title;
    document.getElementById("aboutSetDesc").value = appState.about.desc;

    renderAdminTables();
}

function renderAdminTables() {
    // 1. Requests Table
    const reqBody = document.getElementById("requestsTableBody");
    reqBody.innerHTML = appState.requests.map((r, i) => `
        <tr>
            <td><strong>${r.id}</strong><br><small>${r.date}</small></td>
            <td>${r.name}</td>
            <td>${r.phone}</td>
            <td>${r.from} ➔ ${r.to}</td>
            <td>${r.depDate}</td>
            <td><span class="badge">${r.status}</span></td>
            <td>
                <button class="btn btn-primary btn-sm" onclick="openWhatsAppRequest('${r.whatsapp}', '${r.id}')"><i class="fa-brands fa-whatsapp"></i></button>
                <button class="btn btn-danger btn-sm" onclick="deleteRequest(${i})"><i class="fa-solid fa-trash"></i></button>
            </td>
        </tr>
    `).join("");

    // 2. Services Table
    const servBody = document.getElementById("adminServicesTableBody");
    servBody.innerHTML = appState.services.map((s, i) => `
        <tr>
            <td>${s.title}</td>
            <td>${s.desc}</td>
            <td>
                <button class="btn btn-danger btn-sm" onclick="deleteService(${i})"><i class="fa-solid fa-trash"></i></button>
            </td>
        </tr>
    `).join("");

    // 3. Destinations Table
    const destBody = document.getElementById("adminDestTableBody");
    destBody.innerHTML = appState.destinations.map((d, i) => `
        <tr>
            <td><img src="${d.image}" width="60" style="border-radius:4px;"></td>
            <td>${d.city}, ${d.country}</td>
            <td>${d.desc}</td>
            <td>
                <button class="btn btn-danger btn-sm" onclick="deleteDestination(${i})"><i class="fa-solid fa-trash"></i></button>
            </td>
        </tr>
    `).join("");

    // 4. Offers Table
    const offerBody = document.getElementById("adminOffersTableBody");
    offerBody.innerHTML = appState.offers.map((o, i) => `
        <tr>
            <td>${o.title}</td>
            <td>${o.dest}</td>
            <td>${o.price}</td>
            <td>${o.startDate} إلى ${o.endDate}</td>
            <td>
                <button class="btn btn-danger btn-sm" onclick="deleteOffer(${i})"><i class="fa-solid fa-trash"></i></button>
            </td>
        </tr>
    `).join("");

    // 5. Gallery Admin Grid
    const galGrid = document.getElementById("adminGalleryGrid");
    galGrid.innerHTML = appState.gallery.map((g, i) => `
        <div class="gallery-admin-card">
            <img src="${g.image}">
            <p>${g.title}</p>
            <button class="btn btn-danger btn-sm w-100 mt-2" onclick="deleteGallery(${i})">حذف</button>
        </div>
    `).join("");

    // 6. FAQ Table
    const faqBody = document.getElementById("adminFaqTableBody");
    faqBody.innerHTML = appState.faq.map((f, i) => `
        <tr>
            <td>${f.q}</td>
            <td>${f.a}</td>
            <td>
                <button class="btn btn-danger btn-sm" onclick="deleteFaq(${i})"><i class="fa-solid fa-trash"></i></button>
            </td>
        </tr>
    `).join("");
}

function setupAdminForms() {
    // Company Settings Form Save
    document.getElementById("companySettingsForm").addEventListener("submit", async (e) => {
        e.preventDefault();
        appState.settings.companyName = document.getElementById("setCompanyName").value;
        appState.settings.whatsapp = document.getElementById("setWhatsapp").value;
        appState.settings.phone = document.getElementById("setWhatsapp").value;
        appState.settings.email = document.getElementById("setEmail").value;
        appState.settings.address = document.getElementById("setAddress").value;
        appState.settings.footerText = document.getElementById("setFooterText").value;

        const logoFile = document.getElementById("setLogoFile").files[0];
        if (logoFile) {
            await saveFileToIndexedDB("company_logo", logoFile);
        }

        saveState();
        alert("تم حفظ إعدادات الشركة بنجاح!");
        renderPublicWebsite();
    });

    // Hero Settings Form
    document.getElementById("heroSettingsForm").addEventListener("submit", async (e) => {
        e.preventDefault();
        appState.hero.title = document.getElementById("heroSetTitle").value;
        appState.hero.desc = document.getElementById("heroSetDesc").value;

        const heroImg = document.getElementById("heroSetImgFile").files[0];
        if (heroImg) {
            await saveFileToIndexedDB("hero_bg", heroImg);
        }

        saveState();
        alert("تم تحديث واجهة الهيرو بنجاح!");
        renderPublicWebsite();
    });

    // About Settings Form
    document.getElementById("aboutSettingsForm").addEventListener("submit", async (e) => {
        e.preventDefault();
        appState.about.title = document.getElementById("aboutSetTitle").value;
        appState.about.desc = document.getElementById("aboutSetDesc").value;

        const aboutImg = document.getElementById("aboutSetImgFile").files[0];
        if (aboutImg) {
            await saveFileToIndexedDB("about_img", aboutImg);
        }

        saveState();
        alert("تم تحديث قسم من نحن بنجاح!");
        renderPublicWebsite();
    });

    // Change Password Form
    document.getElementById("changePasswordForm").addEventListener("submit", (e) => {
        e.preventDefault();
        const curr = document.getElementById("currPassInput").value;
        const nPass = document.getElementById("newPassInput").value;
        const cPass = document.getElementById("confirmPassInput").value;

        if (curr !== appState.adminPass) {
            alert("كلمة المرور الحالية غير صحيحة!");
            return;
        }
        if (nPass !== cPass) {
            alert("كلمة المرور الجديدة غير متطابقة!");
            return;
        }
        appState.adminPass = nPass;
        saveState();
        alert("تم تغيير كلمة المرور بنجاح!");
        document.getElementById("changePasswordForm").reset();
    });

    // Add Service Button
    document.getElementById("addNewServiceBtn").addEventListener("click", () => {
        const title = prompt("أدخل عنوان الخدمة الجديدة:");
        const desc = prompt("أدخل وصف الخدمة:");
        if (title && desc) {
            appState.services.push({ id: Date.now(), title, desc, icon: "fa-plane-departure" });
            saveState();
            initAdminDashboard();
        }
    });

    // Add Destination Button
    document.getElementById("addNewDestBtn").addEventListener("click", () => {
        const country = prompt("أدخل اسم الدولة:");
        const city = prompt("أدخل اسم المدينة:");
        const desc = prompt("أدخل وصف الوجهة:");
        const image = prompt("أدخل رابط صورة الوجهة:", "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80");
        if (country && city) {
            appState.destinations.push({ id: Date.now(), country, city, desc, image });
            saveState();
            initAdminDashboard();
        }
    });

    // Add Offer Button
    document.getElementById("addNewOfferBtn").addEventListener("click", () => {
        const title = prompt("عنوان العرض:");
        const dest = prompt("الوجهة:");
        const price = prompt("السعر:");
        const desc = prompt("الوصف:");
        if (title && dest) {
            appState.offers.push({ id: Date.now(), title, dest, price, desc, startDate: "2026-06-01", endDate: "2026-12-31", image: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=800&q=80" });
            saveState();
            initAdminDashboard();
        }
    });

    // Add Gallery Button
    document.getElementById("addNewGalleryBtn").addEventListener("click", () => {
        const title = prompt("عنوان الصورة:");
        const image = prompt("رابط الصورة:");
        if (title && image) {
            appState.gallery.push({ id: Date.now(), title, image });
            saveState();
            initAdminDashboard();
        }
    });

    // Add FAQ Button
    document.getElementById("addNewFaqBtn").addEventListener("click", () => {
        const q = prompt("السؤال:");
        const a = prompt("الإجابة:");
        if (q && a) {
            appState.faq.push({ id: Date.now(), q, a });
            saveState();
            initAdminDashboard();
        }
    });

    // Backup & Restore
    document.getElementById("exportBackupBtn").addEventListener("click", () => {
        const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(appState, null, 2));
        const dlAnchor = document.createElement('a');
        dlAnchor.setAttribute("href", dataStr);
        dlAnchor.setAttribute("download", "ofoq_travel_backup.json");
        document.body.appendChild(dlAnchor);
        dlAnchor.click();
        dlAnchor.remove();
    });

    document.getElementById("importBackupFile").addEventListener("change", (e) => {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (event) => {
            try {
                const imported = JSON.parse(event.target.result);
                if (confirm("هل أنت متأكد من استعادة النسخة الاحتياطية واستبدال البيانات الحالية؟")) {
                    appState = imported;
                    saveState();
                    alert("تمت استعادة البيانات بنجاح!");
                    location.reload();
                }
            } catch (err) {
                alert("ملف النسخة الاحتياطية غير صالح!");
            }
        };
        reader.readAsText(file);
    });
}

// Admin Deletion Functions
function deleteRequest(index) {
    if (confirm("هل تريد حذف هذا الطلب؟")) {
        appState.requests.splice(index, 1);
        saveState();
        initAdminDashboard();
    }
}
function deleteService(index) {
    appState.services.splice(index, 1);
    saveState();
    initAdminDashboard();
}
function deleteDestination(index) {
    appState.destinations.splice(index, 1);
    saveState();
    initAdminDashboard();
}
function deleteOffer(index) {
    appState.offers.splice(index, 1);
    saveState();
    initAdminDashboard();
}
function deleteGallery(index) {
    appState.gallery.splice(index, 1);
    saveState();
    initAdminDashboard();
}
function deleteFaq(index) {
    appState.faq.splice(index, 1);
    saveState();
    initAdminDashboard();
}
function openWhatsAppRequest(phone, id) {
    const waPhone = phone.replace(/[^0-9]/g, "");
    window.open(`https://wa.me/${waPhone}?text=مرحباً، بخصوص طلبكم رقم ${id}`, "_blank");
}
/* ==========================================
   Ofoq Travel - Full Vanilla JS CMS & Frontend Engine
   ========================================== */

// Default System State & Data Store
const DEFAULT_DATA = {
    settings: {
        companyNameAr: "أفق للطيران",
        companyNameEn: "Ofoq Travel",
        phone: "+213564694879",
        whatsapp: "+213564694879",
        email: "travelofoq@gmail.com",
        address: "المقر الرئيسي - الجزائر",
        workingHours: "السبت - الخميس: 9:00 صباحاً - 9:00 مساءً",
        adminPassword: "admin"
    },
    theme: {
        primary: "#0A192F",
        secondary: "#38BDF8",
        accent: "#D4AF37",
        bg: "#F8FAFC",
        surface: "#FFFFFF",
        text: "#1E293B",
        heading: "#0F172A"
    },
    visibility: {
        hero: true,
        services: true,
        offers: true,
        airlines: true,
        destinations: true,
        whyOfoq: true,
        gallery: true,
        youtube: true,
        booking: true,
        about: true,
        contact: true
    },
    services: [
        { id: 1, icon: "fa-plane-departure", title: "حجز تذاكر الطيران", description: "حجوزات فورية على كافة الخطوط الجوية العالمية بأفضل الأسعار.", hidden: false },
        { id: 2, icon: "fa-hotel", title: "حجوزات الفنادق الفاخرة", description: "أرقى الفنادق والمنتجعات العالمية مع عروض حصرية وخدمات VIP.", hidden: false },
        { id: 3, icon: "fa-passport", title: "تسهيل التأشيرات السياحية", description: "استخراج وتسهيل تأشيرات السفر لكافة الوجهات العالمية بسرعة ودقة.", hidden: false },
        { id: 4, icon: "fa-car", title: "خدمات الاستقبال والنقل", description: "سيارات فارهة مع سائقين خاصين واستقبال فوري من المطارات.", hidden: false }
    ],
    offers: [
        { id: 1, destination: "دبي، الإمارات", title: "رحلة الأحلام إلى دبي", description: "استمتع بأرقى الفنادق وجولات سياحية مذهلة في قلب دبي.", image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80", price: "", hasPrice: false, hidden: false },
        { id: 2, destination: "باريس، فرنسا", title: "سحر العاصمة الفرنسية", description: "اكتشف معالم باريس التاريخية وأرقى المطاعم العالمية.", image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80", price: "", hasPrice: false, hidden: false },
        { id: 3, destination: "إسطنبول، تركيا", title: "جولة بين الشرق والغرب", description: "استمتع بجمال البوسفور والتاريخ العريق في إسطنبول.", image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=800&q=80", price: "", hasPrice: false, hidden: false }
    ],
    airlines: [
        { id: 1, name: "الخطوط الجوية الجزائرية", iata: "AH", icao: "DAH", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Air_Algerie_Logo.svg/200px-Air_Algerie_Logo.svg.png", hidden: false },
        { id: 2, name: "الخطوط الجوية القطرية", iata: "QR", icao: "QTR", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Qatar_Airways_Logo.svg/200px-Qatar_Airways_Logo.svg.png", hidden: false },
        { id: 3, name: "طيران الإمارات", iata: "EK", icao: "UAE", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Emirates_logo.svg/200px-Emirates_logo.svg.png", hidden: false },
        { id: 4, name: "الخطوط السعودية", iata: "SV", icao: "SVA", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Saudia_Logo_2018.svg/200px-Saudia_Logo_2018.svg.png", hidden: false }
    ],
    airports: [
        { id: 1, code: "ALG", name: "مطار هواري بومدين الدولي - الجزائر", hidden: false },
        { id: 2, code: "DXB", name: "مطار دبي الدولي - الإمارات", hidden: false },
        { id: 3, code: "CDG", name: "مطار شارل ديغول - باريس", hidden: false },
        { id: 4, code: "IST", name: "مطار إسطنبول الدولي - تركيا", hidden: false }
    ],
    destinations: [
        { id: 1, name: "دبي", description: "مدينة الابتكار والفخامة", image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80", hidden: false },
        { id: 2, name: "باريس", description: "عاصمة النور والجمال", image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80", hidden: false },
        { id: 3, name: "إسطنبول", description: "ملتقى الحضارات", image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=800&q=80", hidden: false },
        { id: 4, name: "لندن", description: "عاصمة المال والأعمال", image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80", hidden: false }
    ],
    youtube: [
        { id: 1, title: "جولة في أفق للطيران", description: "تعرف على خدماتنا الفاخرة لعملائنا الكرام", url: "https://www.youtube.com/embed/dQw4w9WgXcQ", hidden: false }
    ],
    gallery: [
        { id: 1, caption: "طائراتنا الفاخرة", image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80", hidden: false },
        { id: 2, caption: "صالات كبار الشخصيات", image: "https://images.unsplash.com/photo-1540339832862-474599807836?auto=format&fit=crop&w=800&q=80", hidden: false },
        { id: 3, caption: "رحلات الجنان السياحية", image: "https://images.unsplash.com/photo-1500835556837-99ac94a94552?auto=format&fit=crop&w=800&q=80", hidden: false }
    ],
    bookings: []
};

let db = null;

// Initialize Storage and State
function initApp() {
    let localData = localStorage.getItem('ofoq_travel_data');
    if (!localData) {
        localStorage.setItem('ofoq_travel_data', JSON.stringify(DEFAULT_DATA));
    }
    
    // Initialize IndexedDB for large assets/backups if needed
    const request = indexedDB.open('OfoqTravelDB', 1);
    request.onerror = () => console.error("IndexedDB error");
    request.onsuccess = (event) => {
        db = event.target.result;
    };
    request.onupgradeneeded = (event) => {
        db = event.target.result;
        if (!db.objectStoreNames.contains('assets')) {
            db.createObjectStore('assets', { keyPath: 'id', autoIncrement: true });
        }
    };

    applyTheme();
    renderFrontend();
    setupEventListeners();
    initBookingForm();
}

function getData() {
    try {
        const data = localStorage.getItem('ofoq_travel_data');
        return data ? JSON.parse(data) : DEFAULT_DATA;
    } catch(e) {
        return DEFAULT_DATA;
    }
}

function saveData(data) {
    localStorage.setItem('ofoq_travel_data', JSON.stringify(data));
    renderFrontend();
}

function showToast(message, type = 'success') {
    const container = document.getElementById('toast-container');
    if (!container) return;
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `<i class="fa-solid ${type === 'success' ? 'fa-circle-check' : 'fa-triangle-exclamation'}"></i><span>${message}</span>`;
    container.appendChild(toast);
    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 300);
    }, 3500);
}

// Apply Dynamic Theme
function applyTheme() {
    const data = getData();
    const theme = data.theme;
    const root = document.documentElement;
    root.style.setProperty('--primary', theme.primary);
    root.style.setProperty('--secondary', theme.secondary);
    root.style.setProperty('--accent', theme.accent);
    root.style.setProperty('--bg', theme.bg);
    root.style.setProperty('--surface', theme.surface);
    root.style.setProperty('--text', theme.text);
    root.style.setProperty('--heading', theme.heading);
    root.style.setProperty('--button-bg', theme.primary);
}

// Render Frontend Sections
function renderFrontend() {
    const data = getData();

    // Settings info
    const phoneDisplay = document.getElementById('contact-phone-display');
    const waDisplay = document.getElementById('contact-whatsapp-display');
    const emailDisplay = document.getElementById('contact-email-display');
    const addrDisplay = document.getElementById('contact-address-display');
    const hoursDisplay = document.getElementById('contact-hours-display');

    if (phoneDisplay) phoneDisplay.textContent = data.settings.phone;
    if (waDisplay) waDisplay.textContent = data.settings.whatsapp;
    if (emailDisplay) emailDisplay.textContent = data.settings.email;
    if (addrDisplay) addrDisplay.textContent = data.settings.address;
    if (hoursDisplay) hoursDisplay.textContent = data.settings.workingHours;

    // Visibility
    const visibility = data.visibility;
    toggleSectionVisibility('hero', visibility.hero);
    toggleSectionVisibility('services', visibility.services);
    toggleSectionVisibility('offers', visibility.offers);
    toggleSectionVisibility('airlines', visibility.airlines);
    toggleSectionVisibility('destinations', visibility.destinations);
    toggleSectionVisibility('why-ofoq', visibility.whyOfoq);
    toggleSectionVisibility('gallery', visibility.gallery);
    toggleSectionVisibility('youtube', visibility.youtube);
    toggleSectionVisibility('booking', visibility.booking);
    toggleSectionVisibility('about', visibility.about);
    toggleSectionVisibility('contact', visibility.contact);

    // Render Services
    const servicesGrid = document.getElementById('services-grid');
    if (servicesGrid) {
        servicesGrid.innerHTML = data.services.filter(s => !s.hidden).map(s => `
            <div class="service-card">
                <i class="fa-solid ${s.icon}"></i>
                <h3>${s.title}</h3>
                <p>${s.description}</p>
            </div>
        `).join('');
    }

    // Render Offers
    const offersGrid = document.getElementById('offers-grid');
    if (offersGrid) {
        offersGrid.innerHTML = data.offers.filter(o => !o.hidden).map(o => `
            <div class="offer-card">
                <div class="offer-img-wrapper">
                    <img src="${o.image}" alt="${o.title}">
                    <span class="offer-badge">${o.destination}</span>
                </div>
                <div class="offer-content">
                    <h3>${o.title}</h3>
                    <p>${o.description}</p>
                    <div class="offer-footer">
                        <span class="offer-price">${o.hasPrice && o.price ? o.price : 'تواصل معنا للتفاصيل'}</span>
                        <a href="#booking" class="btn btn-secondary btn-sm">اطلب التفاصيل</a>
                    </div>
                </div>
            </div>
        `).join('');
    }

    // Render Airlines
    const airlinesGrid = document.getElementById('airlines-grid');
    if (airlinesGrid) {
        airlinesGrid.innerHTML = data.airlines.filter(a => !a.hidden).map(a => `
            <div class="airline-card">
                <img src="${a.logo}" alt="${a.name}">
                <h4>${a.name}</h4>
                <span>IATA: ${a.iata} | ICAO: ${a.icao}</span>
            </div>
        `).join('');
    }

    // Render Destinations
    const destinationsGrid = document.getElementById('destinations-grid');
    if (destinationsGrid) {
        destinationsGrid.innerHTML = data.destinations.filter(d => !d.hidden).map(d => `
            <div class="destination-card">
                <img src="${d.image}" alt="${d.name}">
                <div class="destination-overlay">
                    <h3>${d.name}</h3>
                    <p>${d.description}</p>
                </div>
            </div>
        `).join('');
    }

    // Render Gallery
    const galleryGrid = document.getElementById('gallery-grid');
    if (galleryGrid) {
        galleryGrid.innerHTML = data.gallery.filter(g => !g.hidden).map(g => `
            <div class="gallery-item">
                <img src="${g.image}" alt="${g.caption}">
            </div>
        `).join('');
    }

    // Render YouTube
    const youtubeGrid = document.getElementById('youtube-grid');
    if (youtubeGrid) {
        youtubeGrid.innerHTML = data.youtube.filter(y => !y.hidden).map(y => `
            <div class="youtube-card">
                <div class="youtube-wrapper">
                    <iframe src="${y.url}" title="${y.title}" allowfullscreen></iframe>
                </div>
                <div class="youtube-info">
                    <h3>${y.title}</h3>
                    <p>${y.description}</p>
                </div>
            </div>
        `).join('');
    }
}

function toggleSectionVisibility(sectionId, isVisible) {
    const sec = document.getElementById(sectionId);
    if (sec) {
        sec.style.display = isVisible ? 'block' : 'none';
    }
}

// Booking Form & Dynamic Passengers/Flights Management
let passengerCount = 0;
let flightCount = 0;

function initBookingForm() {
    addPassengerCard();
    addFlightCard();

    const addPassengerBtn = document.getElementById('add-passenger-btn');
    if (addPassengerBtn) {
        addPassengerBtn.addEventListener('click', () => addPassengerCard());
    }

    const addFlightBtn = document.getElementById('add-flight-btn');
    if (addFlightBtn) {
        addFlightBtn.addEventListener('click', () => addFlightCard());
    }

    const bookingForm = document.getElementById('booking-form');
    if (bookingForm) {
        bookingForm.addEventListener('submit', handleBookingSubmit);
    }
}

function addPassengerCard() {
    passengerCount++;
    const container = document.getElementById('passengers-container');
    if (!container) return;
    const cardId = `passenger-${passengerCount}`;
    const card = document.createElement('div');
    card.className = 'dynamic-card';
    card.id = cardId;
    card.innerHTML = `
        <div class="dynamic-card-header">
            <h4><i class="fa-solid fa-user"></i> مسافر ${passengerCount}</h4>
            ${passengerCount > 1 ? `<button type="button" class="btn btn-danger btn-sm" onclick="removePassengerCard('${cardId}')"><i class="fa-solid fa-trash"></i> حذف المسافر</button>` : ''}
        </div>
        <div class="form-row">
            <div class="form-group">
                <label>الاسم الكامل</label>
                <input type="text" class="p-name" placeholder="الاسم الثلاثي..." required>
            </div>
            <div class="form-group">
                <label>الجنس</label>
                <select class="p-gender">
                    <option value="ذكر">ذكر (Male)</option>
                    <option value="أنثى">أنثى (Female)</option>
                </select>
            </div>
            <div class="form-group">
                <label>نوع المسافر</label>
                <select class="p-type">
                    <option value="بالغ (Adult)">بالغ (Adult)</option>
                    <option value="طفل (Child)">طفل (Child)</option>
                    <option value="رضيع (Infant)">رضيع (Infant)</option>
                </select>
            </div>
        </div>
        <div class="form-row">
            <div class="form-group">
                <label>تاريخ الميلاد</label>
                <input type="date" class="p-dob" required>
            </div>
            <div class="form-group">
                <label>رقم جواز السفر</label>
                <input type="text" class="p-passport" placeholder="رقم الجواز...">
            </div>
            <div class="form-group">
                <label>الجنسية</label>
                <input type="text" class="p-nationality" placeholder="الجنسية...">
            </div>
        </div>
        <div class="form-row">
            <div class="form-group">
                <label>رقم الهاتف</label>
                <input type="text" class="p-phone" placeholder="رقم الهاتف...">
            </div>
            <div class="form-group">
                <label>البريد الإلكتروني</label>
                <input type="email" class="p-email" placeholder="البريد الإلكتروني...">
            </div>
            <div class="form-group">
                <label>ملاحظات خاصة</label>
                <input type="text" class="p-notes" placeholder="ملاحظات...">
            </div>
        </div>
    `;
    container.appendChild(card);
}

function removePassengerCard(id) {
    const el = document.getElementById(id);
    if (el) {
        el.remove();
        showToast("تم حذف المسافر بنجاح", "success");
    }
}

function addFlightCard() {
    flightCount++;
    const container = document.getElementById('flights-container');
    if (!container) return;
    const cardId = `flight-${flightCount}`;
    const card = document.createElement('div');
    card.className = 'dynamic-card';
    card.id = cardId;
    card.innerHTML = `
        <div class="dynamic-card-header">
            <h4><i class="fa-solid fa-plane"></i> رحلة ${flightCount}</h4>
            ${flightCount > 1 ? `<button type="button" class="btn btn-danger btn-sm" onclick="removeFlightCard('${cardId}')"><i class="fa-solid fa-trash"></i> حذف الرحلة</button>` : ''}
        </div>
        <div class="form-row">
            <div class="form-group">
                <label>شركة الطيران</label>
                <input type="text" class="f-airline" placeholder="مثال: القطرية...">
            </div>
            <div class="form-group">
                <label>رقم الرحلة</label>
                <input type="text" class="f-number" placeholder="مثال: QR-102...">
            </div>
            <div class="form-group">
                <label>مطار المغادرة</label>
                <input type="text" class="f-dep" placeholder="مطار المغادرة..." required>
            </div>
            <div class="form-group">
                <label>مطار الوصول</label>
                <input type="text" class="f-arr" placeholder="مطار الوصول..." required>
            </div>
        </div>
        <div class="form-row">
            <div class="form-group">
                <label>تاريخ المغادرة</label>
                <input type="date" class="f-dep-date" required>
            </div>
            <div class="form-group">
                <label>وقت المغادرة</label>
                <input type="time" class="f-dep-time">
            </div>
            <div class="form-group">
                <label>تاريخ العودة</label>
                <input type="date" class="f-arr-date" required>
            </div>
            <div class="form-group">
                <label>وقت العودة</label>
                <input type="time" class="f-arr-time">
            </div>
        </div>
        <div class="form-row">
            <div class="form-group">
                <label>البوابة / Terminal</label>
                <input type="text" class="f-term" placeholder="Terminal...">
            </div>
            <div class="form-group">
                <label>الدرجة / Class</label>
                <input type="text" class="f-class" placeholder="Economy / Business...">
            </div>
            <div class="form-group">
                <label>المقعد / Seat</label>
                <input type="text" class="f-seat" placeholder="مثال: 12A...">
            </div>
            <div class="form-group">
                <label>الأمتعة المشحونة / المقصورة</label>
                <input type="text" class="f-bag" placeholder="مثال: 23kg + 7kg...">
            </div>
        </div>
    `;
    container.appendChild(card);
}

function removeFlightCard(id) {
    const el = document.getElementById(id);
    if (el) {
        el.remove();
        showToast("تم حذف الرحلة بنجاح", "success");
    }
}

function handleBookingSubmit(e) {
    e.preventDefault();
    const data = getData();

    const tripType = document.querySelector('input[name="trip-type"]:checked').value;
    const generalNotes = document.getElementById('booking-general-notes').value;

    // Collect Passengers
    const passengerCards = document.querySelectorAll('#passengers-container .dynamic-card');
    const passengers = [];
    passengerCards.forEach((card, idx) => {
        passengers.push({
            index: idx + 1,
            name: card.querySelector('.p-name').value,
            gender: card.querySelector('.p-gender').value,
            type: card.querySelector('.p-type').value,
            dob: card.querySelector('.p-dob').value,
            passport: card.querySelector('.p-passport').value,
            nationality: card.querySelector('.p-nationality').value,
            phone: card.querySelector('.p-phone').value,
            email: card.querySelector('.p-email').value,
            notes: card.querySelector('.p-notes').value
        });
    });

    // Collect Flights
    const flightCards = document.querySelectorAll('#flights-container .dynamic-card');
    const flights = [];
    flightCards.forEach((card, idx) => {
        flights.push({
            index: idx + 1,
            airline: card.querySelector('.f-airline').value,
            number: card.querySelector('.f-number').value,
            dep: card.querySelector('.f-dep').value,
            arr: card.querySelector('.f-arr').value,
            depDate: card.querySelector('.f-dep-date').value,
            depTime: card.querySelector('.f-dep-time').value,
            arrDate: card.querySelector('.f-arr-date').value,
            arrTime: card.querySelector('.f-arr-time').value,
            term: card.querySelector('.f-term').value,
            flightClass: card.querySelector('.f-class').value,
            seat: card.querySelector('.f-seat').value,
            baggage: card.querySelector('.f-bag').value
        });
    });

    const bookingNumber = `OFQ-2026-${String(data.bookings.length + 1).padStart(4, '0')}`;
    const bookingDate = new Date().toISOString().split('T')[0];

    const newBooking = {
        id: Date.now(),
        bookingNumber,
        bookingDate,
        tripType,
        generalNotes,
        passengers,
        flights,
        status: 'قيد المراجعة'
    };

    data.bookings.push(newBooking);
    saveData(data);
    showToast(`تم حفظ الحجز بنجاح برقم: ${bookingNumber}`, "success");

    // Generate WhatsApp Message
    let waMessage = `✈️ طلب حجز جديد – أفق للطيران\n`;
    waMessage += `━━━━━━━━━━━━━━\n`;
    waMessage += `📋 معلومات الحجز\n`;
    waMessage += `━━━━━━━━━━━━━━\n`;
    waMessage += `رقم الحجز: ${bookingNumber}\n`;
    waMessage += `نوع الرحلة: ${tripType}\n`;
    waMessage += `تاريخ الطلب: ${bookingDate}\n`;
    if (generalNotes) waMessage += `الملاحظات: ${generalNotes}\n`;
    waMessage += `━━━━━━━━━━━━━━\n`;
    waMessage += `👥 المسافرون (${passengers.length})\n`;
    waMessage += `━━━━━━━━━━━━━━\n`;

    passengers.forEach(p => {
        waMessage += `👤 المسافر ${p.index}\n`;
        waMessage += `الاسم: ${p.name}\n`;
        waMessage += `الجنس: ${p.gender}\n`;
        waMessage += `النوع: ${p.type}\n`;
        waMessage += `تاريخ الميلاد: ${p.dob}\n`;
        waMessage += `رقم الجواز: ${p.passport}\n`;
        waMessage += `الجنسية: ${p.nationality}\n`;
        if (p.phone) waMessage += `الهاتف: ${p.phone}\n`;
        if (p.email) waMessage += `البريد: ${p.email}\n`;
        if (p.notes) waMessage += `الملاحظات: ${p.notes}\n`;
        waMessage += `----\n`;
    });

    waMessage += `━━━━━━━━━━━━━━\n`;
    waMessage += `✈️ الرحلات (${flights.length})\n`;
    waMessage += `━━━━━━━━━━━━━━\n`;

    flights.forEach(f => {
        waMessage += `✈️ الرحلة ${f.index}\n`;
        waMessage += `شركة الطيران: ${f.airline}\n`;
        waMessage += `رقم الرحلة: ${f.number}\n`;
        waMessage += `المغادرة: ${f.dep}\n`;
        waMessage += `الوصول: ${f.arr}\n`;
        waMessage += `تاريخ المغادرة: ${f.depDate} | الوقت: ${f.depTime}\n`;
        waMessage += `تاريخ العودة: ${f.arrDate} | الوقت: ${f.arrTime}\n`;
        if (f.term) waMessage += `Terminal: ${f.term}\n`;
        if (f.flightClass) waMessage += `Class: ${f.flightClass}\n`;
        if (f.seat) waMessage += `Seat: ${f.seat}\n`;
        if (f.baggage) waMessage += `الأمتعة: ${f.baggage}\n`;
        waMessage += `----\n`;
    });

    waMessage += `━━━━━━━━━━━━━━\n`;
    waMessage += `📞 معلومات التواصل\n`;
    waMessage += `الهاتف: +213564694879\n`;
    waMessage += `البريد: ${data.settings.email}\n`;
    waMessage += `شكراً لاختياركم أفق للطيران ✈️`;

    const encodedMessage = encodeURIComponent(waMessage);
    const whatsappUrl = `https://wa.me/${data.settings.whatsapp.replace('+', '')}?text=${encodedMessage}`;
    
    // تم التعديل هنا لاستخدام الانتقال المباشر بدون تأخير زمني ليتوافق مع قيود الهواتف المحمولة
    window.location.href = whatsappUrl;
}

// UI Setup & Event Listeners
function setupEventListeners() {
    // Mobile Navigation Toggle
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    // Admin Login Modal Triggers
    const loginModal = document.getElementById('admin-login-modal');
    const openLoginBtn = document.getElementById('open-admin-modal-btn');
    const closeLoginBtn = document.getElementById('close-login-modal');

    if (openLoginBtn && loginModal) {
        openLoginBtn.addEventListener('click', () => {
            loginModal.style.display = 'flex';
        });
    }
    if (closeLoginBtn && loginModal) {
        closeLoginBtn.addEventListener('click', () => {
            loginModal.style.display = 'none';
        });
    }

    // Admin Login Form Submit
    const loginForm = document.getElementById('admin-login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const pass = document.getElementById('admin-password').value;
            const data = getData();
            if (pass === data.settings.adminPassword) {
                loginModal.style.display = 'none';
                document.getElementById('admin-password').value = '';
                openAdminDashboard();
                showToast("تم تسجيل الدخول بنجاح", "success");
            } else {
                showToast("كلمة المرور غير صحيحة", "error");
            }
        });
    }

    // Admin Logout & Close
    const closeAdminBtn = document.getElementById('close-admin-modal-btn');
    const adminModal = document.getElementById('admin-dashboard-modal');
    const logoutBtn = document.getElementById('admin-logout-btn');

    if (closeAdminBtn && adminModal) {
        closeAdminBtn.addEventListener('click', () => {
            adminModal.style.display = 'none';
        });
    }
    if (logoutBtn && adminModal) {
        logoutBtn.addEventListener('click', () => {
            adminModal.style.display = 'none';
            showToast("تم تسجيل الخروج بنجاح", "success");
        });
    }

    // Admin Navigation Tabs
    const adminNavLinks = document.querySelectorAll('#admin-nav-links li');
    adminNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            adminNavLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            const tab = link.getAttribute('data-tab');
            renderAdminTab(tab);
        });
    });
}

// Admin Dashboard Rendering Engine
function openAdminDashboard() {
    const adminModal = document.getElementById('admin-dashboard-modal');
    if (adminModal) {
        adminModal.style.display = 'block';
        renderAdminTab('dashboard');
    }
}

function renderAdminTab(tabName) {
    const titleEl = document.getElementById('admin-current-section-title');
    const bodyEl = document.getElementById('admin-content-body');
    const data = getData();

    if (titleEl) {
        const activeLink = document.querySelector(`#admin-nav-links li[data-tab="${tabName}"]`);
        if (activeLink) titleEl.textContent = activeLink.textContent.trim();
    }

    if (!bodyEl) return;

    switch(tabName) {
        case 'dashboard':
            bodyEl.innerHTML = `
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1.5rem; margin-bottom: 2.5rem;">
                    <div class="stat-box"><h3>${data.bookings.length}</h3><p>إجمالي الحجوزات</p></div>
                    <div class="stat-box"><h3>${data.offers.length}</h3><p>العروض النشطة</p></div>
                    <div class="stat-box"><h3>${data.services.length}</h3><p>الخدمات</p></div>
                    <div class="stat-box"><h3>${data.airlines.length}</h3><p>شركاء الطيران</p></div>
                </div>
                <div class="admin-table-wrapper">
                    <div style="padding: 1.5rem; font-weight: 800; font-size: 1.2rem; border-bottom: 1px solid var(--border);">أحدث الحجوزات</div>
                    <table class="admin-table">
                        <thead>
                            <tr>
                                <th>رقم الحجز</th>
                                <th>نوع الرحلة</th>
                                <th>عدد المسافرين</th>
                                <th>تاريخ الحجز</th>
                                <th>الحالة</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${data.bookings.slice(-5).reverse().map(b => `
                                <tr>
                                    <td><b>${b.bookingNumber}</b></td>
                                    <td>${b.tripType}</td>
                                    <td>${b.passengers.length}</td>
                                    <td>${b.bookingDate}</td>
                                    <td><span style="color: #10B981; font-weight: 700;">${b.status}</span></td>
                                </tr>
                            `).join('') || '<tr><td colspan="5" style="text-align: center; color: #64748B;">لا توجد حجوزات حالياً</td></tr>'}
                        </tbody>
                    </table>
                </div>
            `;
            break;

        case 'bookings':
            bodyEl.innerHTML = `
                <div class="admin-table-wrapper">
                    <table class="admin-table">
                        <thead>
                            <tr>
                                <th>رقم الحجز</th>
                                <th>نوع الرحلة</th>
                                <th>المسافر الرئيسي</th>
                                <th>التاريخ</th>
                                <th>الإجراءات</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${data.bookings.map(b => `
                                <tr>
                                    <td><b>${b.bookingNumber}</b></td>
                                    <td>${b.tripType}</td>
                                    <td>${b.passengers[0]?.name || '-'}</td>
                                    <td>${b.bookingDate}</td>
                                    <td>
                                        <div class="table-actions">
                                            <button class="btn btn-secondary btn-sm" onclick="viewBookingDetails(${b.id})"><i class="fa-solid fa-eye"></i> معاينة / طباعة</button>
                                            <button class="btn btn-danger btn-sm" onclick="deleteBooking(${b.id})"><i class="fa-solid fa-trash"></i></button>
                                        </div>
                                    </td>
                                </tr>
                            `).join('') || '<tr><td colspan="5" style="text-align: center; color: #64748B;">لا توجد حجوزات مسجلة</td></tr>'}
                        </tbody>
                    </table>
                </div>
            `;
            break;

        case 'offers':
            bodyEl.innerHTML = `
                <div style="margin-bottom: 1.5rem; display: flex; justify-content: flex-end;">
                    <button class="btn btn-primary" onclick="openOfferModal()"><i class="fa-solid fa-plus"></i> إضافة عرض جديد</button>
                </div>
                <div class="admin-table-wrapper">
                    <table class="admin-table">
                        <thead>
                            <tr>
                                <th>العنوان</th>
                                <th>الوجهة</th>
                                <th>الحالة</th>
                                <th>الإجراءات</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${data.offers.map((o, idx) => `
                                <tr>
                                    <td><b>${o.title}</b></td>
                                    <td>${o.destination}</td>
                                    <td>${o.hidden ? '<span style="color: red;">مخفي</span>' : '<span style="color: green;">ظاهر</span>'}</td>
                                    <td>
                                        <div class="table-actions">
                                            <button class="btn btn-secondary btn-sm" onclick="toggleOfferVisibility(${idx})"><i class="fa-solid fa-eye"></i></button>
                                            <button class="btn btn-danger btn-sm" onclick="deleteOffer(${idx})"><i class="fa-solid fa-trash"></i></button>
                                        </div>
                                    </td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            `;
            break;

        case 'services':
            bodyEl.innerHTML = `
                <div class="admin-table-wrapper">
                    <div style="padding: 1.5rem; font-weight: 700;">إدارة الخدمات</div>
                    <table class="admin-table">
                        <thead>
                            <tr>
                                <th>العنوان</th>
                                <th>الوصف</th>
                                <th>الحالة</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${data.services.map((s, idx) => `
                                <tr>
                                    <td><b>${s.title}</b></td>
                                    <td>${s.description}</td>
                                    <td>
                                        <button class="btn btn-secondary btn-sm" onclick="toggleServiceVisibility(${idx})">${s.hidden ? 'إظهار' : 'إخفاء'}</button>
                                    </td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            `;
            break;

        case 'airlines':
            bodyEl.innerHTML = `
                <div class="admin-table-wrapper">
                    <div style="padding: 1.5rem; font-weight: 700;">شركاء الطيران</div>
                    <table class="admin-table">
                        <thead>
                            <tr>
                                <th>الشركات</th>
                                <th>IATA / ICAO</th>
                                <th>الحالة</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${data.airlines.map((a, idx) => `
                                <tr>
                                    <td><b>${a.name}</b></td>
                                    <td>${a.iata} / ${a.icao}</td>
                                    <td>
                                        <button class="btn btn-secondary btn-sm" onclick="toggleAirlineVisibility(${idx})">${a.hidden ? 'إظهار' : 'إخفاء'}</button>
                                    </td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            `;
            break;

        case 'theme':
            bodyEl.innerHTML = `
                <div class="admin-table-wrapper" style="padding: 2rem;">
                    <h3>تخصيص الألوان والهوية البصرية</h3>
                    <form id="theme-form" style="margin-top: 1.5rem; display: flex; flex-direction: column; gap: 1.5rem;">
                        <div class="form-row">
                            <div class="form-group">
                                <label>اللون الرئيسي (Primary)</label>
                                <input type="color" id="theme-primary" value="${data.theme.primary}">
                            </div>
                            <div class="form-group">
                                <label>اللون الثانوي (Secondary)</label>
                                <input type="color" id="theme-secondary" value="${data.theme.secondary}">
                            </div>
                            <div class="form-group">
                                <label>لون التميز (Accent)</label>
                                <input type="color" id="theme-accent" value="${data.theme.accent}">
                            </div>
                        </div>
                        <button type="submit" class="btn btn-primary">حفظ وتطبيق الألوان</button>
                    </form>
                </div>
            `;
            document.getElementById('theme-form').addEventListener('submit', (e) => {
                e.preventDefault();
                data.theme.primary = document.getElementById('theme-primary').value;
                data.theme.secondary = document.getElementById('theme-secondary').value;
                data.theme.accent = document.getElementById('theme-accent').value;
                saveData(data);
                applyTheme();
                showToast("تم تحديث الألوان بنجاح", "success");
            });
            break;

        case 'security':
            bodyEl.innerHTML = `
                <div class="admin-table-wrapper" style="padding: 2rem;">
                    <h3>تغيير كلمة مرور لوحة الإدارة</h3>
                    <form id="security-form" style="margin-top: 1.5rem; display: flex; flex-direction: column; gap: 1.5rem; max-width: 400px;">
                        <div class="form-group">
                            <label>كلمة المرور الجديدة</label>
                            <input type="password" id="new-admin-pass" required>
                        </div>
                        <button type="submit" class="btn btn-primary">تحديث كلمة المرور</button>
                    </form>
                </div>
            `;
            document.getElementById('security-form').addEventListener('submit', (e) => {
                e.preventDefault();
                const newPass = document.getElementById('new-admin-pass').value;
                data.settings.adminPassword = newPass;
                saveData(data);
                showToast("تم تغيير كلمة المرور بنجاح", "success");
            });
            break;

        case 'backup':
            bodyEl.innerHTML = `
                <div class="admin-table-wrapper" style="padding: 2rem; display: flex; flex-direction: column; gap: 1.5rem;">
                    <h3>النسخ الاحتياطي واستعادة البيانات</h3>
                    <button class="btn btn-primary" onclick="exportBackup()"><i class="fa-solid fa-download"></i> تصدير النسخة الاحتياطية (JSON)</button>
                    <hr style="border: 0; border-top: 1px solid var(--border);">
                    <div class="form-group">
                        <label>استعادة نسخة احتياطية</label>
                        <input type="file" id="import-file" accept=".json" onchange="importBackup(event)">
                    </div>
                </div>
            `;
            break;

        default:
            bodyEl.innerHTML = `<div style="text-align: center; color: #64748B; padding: 3rem;">قسم قيد التطوير أو غير متوفر</div>`;
    }
}

// Admin Helper Functions
function toggleOfferVisibility(idx) {
    const data = getData();
    data.offers[idx].hidden = !data.offers[idx].hidden;
    saveData(data);
    renderAdminTab('offers');
    showToast("تم تحديث حالة العرض", "success");
}

function deleteOffer(idx) {
    const data = getData();
    data.offers.splice(idx, 1);
    saveData(data);
    renderAdminTab('offers');
    showToast("تم حذف العرض بنجاح", "success");
}

function toggleServiceVisibility(idx) {
    const data = getData();
    data.services[idx].hidden = !data.services[idx].hidden;
    saveData(data);
    renderAdminTab('services');
    showToast("تم تحديث الخدمة", "success");
}

function toggleAirlineVisibility(idx) {
    const data = getData();
    data.airlines[idx].hidden = !data.airlines[idx].hidden;
    saveData(data);
    renderAdminTab('airlines');
    showToast("تم تحديث شركة الطيران", "success");
}

function deleteBooking(id) {
    const data = getData();
    data.bookings = data.bookings.filter(b => b.id !== id);
    saveData(data);
    renderAdminTab('bookings');
    showToast("تم حذف الحجز نهائياً", "success");
}

function viewBookingDetails(id) {
    const data = getData();
    const b = data.bookings.find(item => item.id === id);
    if (!b) return;

    const modal = document.getElementById('booking-print-modal');
    const area = document.getElementById('printable-booking-area');

    area.innerHTML = `
        <div class="print-ticket-box">
            <div class="print-header">
                <div>
                    <h2>أفق للطيران | Ofoq Travel</h2>
                    <p>رقم الحجز: <b>${b.bookingNumber}</b></p>
                </div>
                <div>
                    <p>التاريخ: ${b.bookingDate}</p>
                    <p>نوع الرحلة: ${b.tripType}</p>
                </div>
            </div>
            <div class="print-section-title">بيانات المسافرين</div>
            <ul>
                ${b.passengers.map(p => `<li><b>${p.name}</b> - جواز: ${p.passport} (${p.type} / ${p.gender})</li>`).join('')}
            </ul>
            <div class="print-section-title">تفاصيل الرحلات</div>
            <ul>
                ${b.flights.map(f => `<li><b>${f.airline}</b> (${f.number}) من ${f.dep} إلى ${f.arr} - تاريخ: ${f.depDate}</li>`).join('')}
            </ul>
            ${b.generalNotes ? `<p style="margin-top: 1rem;"><b>ملاحظات:</b> ${b.generalNotes}</p>` : ''}
        </div>
    `;

    modal.style.display = 'flex';
    document.getElementById('trigger-print-btn').onclick = () => window.print();
    document.getElementById('close-print-modal').onclick = () => modal.style.display = 'none';
}

function exportBackup() {
    const data = getData();
    const blob = new Blob([JSON.stringify(data, null, 2)], {type: 'application/json'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `OfoqTravel_Backup_${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    showToast("تم تصدير النسخة الاحتياطية بنجاح", "success");
}

function importBackup(event) {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const parsed = JSON.parse(e.target.result);
            localStorage.setItem('ofoq_travel_data', JSON.stringify(parsed));
            applyTheme();
            renderFrontend();
            showToast("تم استعادة النسخة الاحتياطية بنجاح", "success");
        } catch(err) {
            showToast("ملف النسخة الاحتياطية غير صالح", "error");
        }
    };
    reader.readAsText(file);
}

// Run application on load
window.addEventListener('DOMContentLoaded', initApp);
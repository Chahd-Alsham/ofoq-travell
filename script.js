// ==========================================
// Ofoq Travel - Main Application Script
// ==========================================

// Default Initial Data
const DEFAULT_SETTINGS = {
    companyName: "أفق للطيران",
    companySub: "Ofoq Travel",
    phone: "+213564694878",
    whatsapp: "+213564694879",
    email: "travelofoq@gmail.com",
    heroTitle: "رحلتك تبدأ من هنا",
    heroDesc: "نرافقك في رحلتك بخدمات سفر وحجوزات مصممة لتجعل تجربتك أسهل وأكثر راحة.",
    aboutTitle: "شركة أفق للطيران - بوابتك نحو آفاق جديدة",
    aboutDesc: "نحن نقدم خدمات سياحية وحجوزات طيران متكاملة تلبي تطلعات المسافر العصري والباحث عن الفخامة والراحة التامة في كل خطوة.",
    aboutImage: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80",
    adminPass: "admin123" // Default password
};

const DEFAULT_SERVICES = [
    { id: 's1', title: "حجز تذاكر الطيران", desc: "احجز مقعدك مع أفضل شركات الطيران العالمية بكل سهولة ويسر.", icon: "fa-plane-departure" },
    { id: 's2', title: "حجز الفنادق الفاخرة", desc: "أرقى الفنادق والمنتجعات العالمية بأسعار تنافسية وخدمة استثنائية.", icon: "fa-hotel" },
    { id: 's3', title: "تنظيم الرحلات السياحية", desc: "برامج سياحية متكاملة ومصممة خصيصاً لتناسب تطلعات عائلتك.", icon: "fa-earth-americas" },
    { id: 's4', title: "خدمات رجال الأعمال", desc: "حلول سفر سريعة ومخصصة لرجال الأعمال والشركات الكبرى.", icon: "fa-briefcase" }
];

const DEFAULT_OFFERS = [
    { id: 'o1', title: "رحلة دبي الفاخرة", destination: "دبي، الإمارات", desc: "استمتع بسحر دبي ومعالمها السياحية العالمية.", image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80" },
    { id: 'o2', title: "سحر اسطنبول التاريخية", destination: "اسطنبول، تركيا", desc: "اكتشف جمال التاريخ والطبيعة الساحرة على بوسفور.", image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=600&q=80" },
    { id: 'o3', title: "جولة الدوحة العصرية", destination: "الدوحة، قطر", desc: "تجربة سفر فريدة تجمع بين الاصالة والحداثة.", image: "https://images.unsplash.com/photo-1583089898916-d820f171050a?auto=format&fit=crop&w=600&q=80" }
];

const DEFAULT_AIRLINES = [
    { id: 'al1', name: "الخطوط الجوية القطرية", iata: "QR", icao: "QTR", logo: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=150&q=80" },
    { id: 'al2', name: "طيران الإمارات", iata: "EK", icao: "UAE", logo: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=150&q=80" },
    { id: 'al3', name: "الخطوط السعودية", iata: "SV", icao: "SVA", logo: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=150&q=80" }
];

const DEFAULT_AIRPORTS = [
    { id: 'ap1', name: "مطار هواري بومدين الدولي", code: "ALG", city: "الجزائر" },
    { id: 'ap2', name: "مطار دبي الدولي", code: "DXB", city: "دبي" },
    { id: 'ap3', name: "مطار حمد الدولي", code: "DOH", city: "الدوحة" }
];

const DEFAULT_DESTINATIONS = [
    { id: 'd1', name: "اسطنبول", country: "تركيا", image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=600&q=80" },
    { id: 'd2', name: "دبي", country: "الإمارات", image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80" },
    { id: 'd3', name: "باريس", country: "فرنسا", image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=600&q=80" },
    { id: 'd4', name: "كوالالمبور", country: "ماليزيا", image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=600&q=80" }
];

const DEFAULT_YOUTUBE = [
    { id: 'y1', title: "تجربة درجة رجال الأعمال مع أفق", desc: "شاهد كيف تبدو رحلتك معنا", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" }
];

const DEFAULT_GALLERY = [
    { id: 'g1', title: "طائراتنا الفاخرة", image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80" },
    { id: 'g2', title: "استرخاء في السحاب", image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=600&q=80" },
    { id: 'g3', title: "خدمة استثنائية", image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=600&q=80" }
];

const DEFAULT_WHY = [
    { id: 'w1', title: "خبرة واسعة", desc: "سنوات طويلة من التميز في قطاع الطيران والسفر.", icon: "fa-award" },
    { id: 'w2', title: "دعم على مدار الساعة", desc: "فريق دعم فني متواجد دائماً لخدمتك ومساعدتك.", icon: "fa-headset" },
    { id: 'w3', title: "أسعار تنافسية", desc: "أفضل العروض والأسعار التي تناسب ميزانيتك.", icon: "fa-tags" }
];

// LocalStorage Initialization Check
function initLocalStorage() {
    if (!localStorage.getItem('ofoq_initialized')) {
        localStorage.setItem('ofoq_settings', JSON.stringify(DEFAULT_SETTINGS));
        localStorage.setItem('ofoq_services', JSON.stringify(DEFAULT_SERVICES));
        localStorage.setItem('ofoq_offers', JSON.stringify(DEFAULT_OFFERS));
        localStorage.setItem('ofoq_airlines', JSON.stringify(DEFAULT_AIRLINES));
        localStorage.setItem('ofoq_airports', JSON.stringify(DEFAULT_AIRPORTS));
        localStorage.setItem('ofoq_destinations', JSON.stringify(DEFAULT_DESTINATIONS));
        localStorage.setItem('ofoq_youtube', JSON.stringify(DEFAULT_YOUTUBE));
        localStorage.setItem('ofoq_gallery', JSON.stringify(DEFAULT_GALLERY));
        localStorage.setItem('ofoq_why', JSON.stringify(DEFAULT_WHY));
        localStorage.setItem('ofoq_bookings', JSON.stringify([]));
        localStorage.setItem('ofoq_initialized', 'true');
    }
}

// Helpers to get/set data
function getData(key) {
    try {
        return JSON.parse(localStorage.getItem('ofoq_' + key)) || [];
    } catch(e) {
        return [];
    }
}

function saveData(key, data) {
    localStorage.setItem('ofoq_' + key, JSON.stringify(data));
}

function getSettings() {
    try {
        return JSON.parse(localStorage.getItem('ofoq_settings')) || DEFAULT_SETTINGS;
    } catch(e) {
        return DEFAULT_SETTINGS;
    }
}

function saveSettings(settings) {
    localStorage.setItem('ofoq_settings', JSON.stringify(settings));
}

// Toast Notifications
function showToast(message) {
    let container = document.getElementById('toastContainer');
    if (!container) return;
    let toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<i class="fa-solid fa-circle-check" style="color:var(--accent)"></i> <span>${message}</span>`;
    container.appendChild(toast);
    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// Render Frontend Website Content
function renderFrontend() {
    let settings = getSettings();
    
    // Update Header & Footer
    document.querySelectorAll('.company-name').forEach(el => el.textContent = settings.companyName);
    document.querySelectorAll('.company-sub').forEach(el => el.textContent = settings.companySub);
    
    let heroTitle = document.getElementById('heroTitleDisplay');
    if (heroTitle) heroTitle.textContent = settings.heroTitle;
    let heroDesc = document.getElementById('heroDescDisplay');
    if (heroDesc) heroDesc.textContent = settings.heroDesc;
    
    let heroWaBtn = document.getElementById('heroWhatsAppBtn');
    if (heroWaBtn) heroWaBtn.href = `https://wa.me/${settings.whatsapp.replace(/[^0-9]/g, '')}`;
    
    let aboutTitle = document.getElementById('aboutTitleDisplay');
    if (aboutTitle) aboutTitle.textContent = settings.aboutTitle;
    let aboutDesc = document.getElementById('aboutDescDisplay');
    if (aboutDesc) aboutDesc.textContent = settings.aboutDesc;
    let aboutImg = document.getElementById('aboutImageDisplay');
    if (aboutImg) aboutImg.src = settings.aboutImage;
    
    let phoneDisp = document.getElementById('contactPhoneDisplay');
    if (phoneDisp) phoneDisp.textContent = settings.phone;
    let waDisp = document.getElementById('contactWaDisplay');
    if (waDisp) waDisp.textContent = settings.whatsapp;
    let emailDisp = document.getElementById('contactEmailDisplay');
    if (emailDisp) emailDisp.textContent = settings.email;

    // Render Services
    let servicesGrid = document.getElementById('servicesGrid');
    if (servicesGrid) {
        let services = getData('services');
        servicesGrid.innerHTML = services.map(s => `
            <div class="card-item">
                <div class="card-icon-box"><i class="fa-solid ${s.icon || 'fa-plane'}"></i></div>
                <div class="card-body">
                    <h3>${s.title}</h3>
                    <p>${s.desc}</p>
                </div>
            </div>
        `).join('');
    }

    // Render Offers
    let offersGrid = document.getElementById('offersGrid');
    if (offersGrid) {
        let offers = getData('offers');
        offersGrid.innerHTML = offers.map(o => `
            <div class="card-item">
                <div class="card-img-box">
                    <img src="${o.image}" alt="${o.title}">
                </div>
                <div class="card-body">
                    <span class="sub-tag">${o.destination}</span>
                    <h3>${o.title}</h3>
                    <p>${o.desc}</p>
                    <a href="#booking" class="btn btn-primary mt-2">تواصل معنا للتفاصيل</a>
                </div>
            </div>
        `).join('');
    }

    // Render Airlines
    let airlinesGrid = document.getElementById('airlinesGrid');
    if (airlinesGrid) {
        let airlines = getData('airlines');
        airlinesGrid.innerHTML = airlines.map(al => `
            <div class="airline-card">
                <img src="${al.logo}" alt="${al.name}">
                <h4>${al.name}</h4>
                <p>IATA: ${al.iata} | ICAO: ${al.icao}</p>
            </div>
        `).join('');
    }

    // Render Destinations
    let destGrid = document.getElementById('destinationsGrid');
    if (destGrid) {
        let dests = getData('destinations');
        destGrid.innerHTML = dests.map(d => `
            <div class="card-item">
                <div class="card-img-box">
                    <img src="${d.image}" alt="${d.name}">
                </div>
                <div class="card-body">
                    <h3>${d.name}، ${d.country}</h3>
                    <p>استكشف أجمل الوجهات السياحية معنا.</p>
                </div>
            </div>
        `).join('');
    }

    // Render Why Ofoq
    let whyGrid = document.getElementById('whyGrid');
    if (whyGrid) {
        let why = getData('why');
        whyGrid.innerHTML = why.map(w => `
            <div class="card-item">
                <div class="card-icon-box"><i class="fa-solid ${w.icon || 'fa-check'}"></i></div>
                <div class="card-body">
                    <h3>${w.title}</h3>
                    <p>${w.desc}</p>
                </div>
            </div>
        `).join('');
    }

    // Render YouTube
    let ytGrid = document.getElementById('youtubeGrid');
    if (ytGrid) {
        let yts = getData('youtube');
        ytGrid.innerHTML = yts.map(y => `
            <div class="youtube-card">
                <div class="youtube-frame">
                    <iframe src="${y.url}" allowfullscreen></iframe>
                </div>
                <div class="card-body">
                    <h3>${y.title}</h3>
                    <p>${y.desc}</p>
                </div>
            </div>
        `).join('');
    }

    // Render Gallery
    let galGrid = document.getElementById('galleryGrid');
    if (galGrid) {
        let gals = getData('gallery');
        galGrid.innerHTML = gals.map(g => `
            <div class="gallery-item" onclick="openLightbox('${g.image}', '${g.title}')">
                <img src="${g.image}" alt="${g.title}">
                <div class="gallery-caption">${g.title}</div>
            </div>
        `).join('');
    }
}

// Lightbox Handler
function openLightbox(imgSrc, captionText) {
    let modal = document.getElementById('lightboxModal');
    let img = document.getElementById('lightboxImg');
    let caption = document.getElementById('lightboxCaption');
    if (modal && img && caption) {
        modal.style.display = "block";
        img.src = imgSrc;
        caption.textContent = captionText;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    let closeLb = document.querySelector('.lightbox-close');
    if (closeLb) {
        closeLb.onclick = () => {
            document.getElementById('lightboxModal').style.display = "none";
        };
    }
});

// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', () => {
    initLocalStorage();
    renderFrontend();

    const mobileBtn = document.getElementById('mobileMenuBtn');
    const mainNav = document.getElementById('mainNav');
    const mobileOverlay = document.getElementById('mobileOverlay');

    if (mobileBtn && mainNav && mobileOverlay) {
        mobileBtn.addEventListener('click', () => {
            mainNav.classList.toggle('active');
            mobileOverlay.classList.toggle('active');
        });
        mobileOverlay.addEventListener('click', () => {
            mainNav.classList.remove('active');
            mobileOverlay.classList.remove('active');
        });
    }

    // Passenger dynamic adder
    const addPassBtn = document.getElementById('addPassengerBtn');
    const passContainer = document.getElementById('passengersContainer');
    if (addPassBtn && passContainer) {
        addPassBtn.addEventListener('click', () => {
            let row = document.createElement('div');
            row.className = 'passenger-row-card mt-2';
            row.innerHTML = `
                <div class="form-grid-3">
                    <div class="form-group">
                        <label>اسم المسافر الكامل</label>
                        <input type="text" class="form-control pass-name" placeholder="اسم المسافر">
                    </div>
                    <div class="form-group">
                        <label>رقم جواز السفر</label>
                        <input type="text" class="form-control pass-passport" placeholder="رقم الجواز">
                    </div>
                    <div class="form-group">
                        <label>الجنسية</label>
                        <input type="text" class="form-control pass-nationality" placeholder="الجنسية">
                    </div>
                </div>
            `;
            passContainer.appendChild(row);
        });
    }

    // Booking Form Submission & WhatsApp Generation
    const bookingForm = document.getElementById('bookingForm');
    if (bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            let tripType = document.getElementById('tripType').value;
            let custName = document.getElementById('custName').value;
            let custPhone = document.getElementById('custPhone').value;
            let custEmail = document.getElementById('custEmail').value;
            let airline = document.getElementById('flightAirline').value;
            let flightNum = document.getElementById('flightNumber').value;
            let flightClass = document.getElementById('flightClass').value;
            let depAirport = document.getElementById('depAirport').value;
            let arrAirport = document.getElementById('arrAirport').value;
            let depDateTime = document.getElementById('depDateTime').value;
            let notes = document.getElementById('bookingNotes').value;

            // Passengers collection
            let passengers = [];
            document.querySelectorAll('.passenger-row-card').forEach(card => {
                let pName = card.querySelector('.pass-name').value;
                let pPass = card.querySelector('.pass-passport').value;
                let pNat = card.querySelector('.pass-nationality').value;
                if(pName) {
                    passengers.push({ name: pName, passport: pPass, nationality: pNat });
                }
            });

            // Generate Booking Number
            let bookings = getData('bookings');
            let seq = bookings.length + 1;
            let bookingNum = `OFQ-2026-${String(seq).padStart(4, '0')}`;

            let newBooking = {
                id: bookingNum,
                tripType, custName, custPhone, custEmail,
                airline, flightNum, flightClass, depAirport, arrAirport, depDateTime,
                passengers, notes, status: 'جديد', date: new Date().toLocaleDateString()
            };

            bookings.push(newBooking);
            saveData('bookings', bookings);
            showToast(`تم حفظ طلب الحجز برقم ${bookingNum} بنجاح!`);

            // WhatsApp Message Construction
            let settings = getSettings();
            let waNumber = settings.whatsapp.replace(/[^0-9]/g, '');
            
            let msg = `*طلب حجز جديد عبر موقع أفق للطيران*%0A`;
            msg += `-----------------------------------%0A`;
            msg += `*رقم الحجز:* ${bookingNum}%0A`;
            msg += `*نوع الرحلة:* ${tripType}%0A`;
            msg += `*اسم العميل:* ${custName}%0A`;
            msg += `*الهاتف:* ${custPhone}%0A`;
            msg += `*البريد:* ${custEmail || 'غير متوفر'}%0A`;
            msg += `*شركة الطيران:* ${airline || 'غير محدد'}%0A`;
            msg += `*رقم الرحلة:* ${flightNum || 'غير محدد'}%0A`;
            msg += `*الدرجة:* ${flightClass || 'غير محدد'}%0A`;
            msg += `*المغادرة:* ${depAirport}%0A`;
            msg += `*الوصول:* ${arrAirport}%0A`;
            msg += `*التاريخ والوقت:* ${depDateTime || 'غير محدد'}%0A`;
            msg += `*عدد المسافرين:* ${passengers.length}%0A`;
            if(notes) msg += `*الملاحظات:* ${notes}%0A`;
            msg += `-----------------------------------%0A`;
            msg += `يرجى تأكيد الحجز ومتابعة التفاصيل.`;

            setTimeout(() => {
                window.open(`https://wa.me/${waNumber}?text=${msg}`, '_blank');
            }, 1000);
        });
    }

    // Admin Login Modal Management
    const loginModal = document.getElementById('loginModal');
    const openLoginBtn = document.getElementById('openLoginModalBtn');
    const closeLoginBtn = document.getElementById('closeLoginModalBtn');
    const adminLoginForm = document.getElementById('adminLoginForm');
    const adminDashboardView = document.getElementById('adminDashboardView');
    const backToSiteBtn = document.getElementById('backToSiteBtn');
    const adminLogoutBtn = document.getElementById('adminLogoutBtn');

    if (openLoginBtn && loginModal) {
        openLoginBtn.addEventListener('click', () => {
            loginModal.classList.add('active');
        });
    }
    if (closeLoginBtn && loginModal) {
        closeLoginBtn.addEventListener('click', () => {
            loginModal.classList.remove('active');
        });
    }

    if (adminLoginForm) {
        adminLoginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            let passInput = document.getElementById('adminPasswordInput').value;
            let settings = getSettings();
            if (passInput === settings.adminPass) {
                loginModal.classList.remove('active');
                adminDashboardView.style.display = 'grid';
                loadAdminTab('dash-home');
                showToast('تم تسجيل الدخول بنجاح إلى لوحة التحكم');
            } else {
                showToast('كلمة المرور غير صحيحة!');
            }
        });
    }

    if (backToSiteBtn && adminDashboardView) {
        backToSiteBtn.addEventListener('click', () => {
            adminDashboardView.style.display = 'none';
            renderFrontend();
        });
    }

    if (adminLogoutBtn && adminDashboardView) {
        adminLogoutBtn.addEventListener('click', () => {
            adminDashboardView.style.display = 'none';
            showToast('تم تسجيل الخروج بنجاح');
            renderFrontend();
        });
    }

    // Admin Sidebar Tabs Navigation
    document.querySelectorAll('.admin-nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelectorAll('.admin-nav-link').forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            let tab = link.getAttribute('data-tab');
            loadAdminTab(tab);
        });
    });
});

// Admin CMS Tab Render Function
function loadAdminTab(tabName) {
    let body = document.getElementById('adminContentBody');
    if (!body) return;

    if (tabName === 'dash-home') {
        let bookings = getData('bookings');
        let offers = getData('offers');
        let services = getData('services');
        body.innerHTML = `
            <div class="stats-grid-4">
                <div class="stat-card-box">
                    <div class="stat-card-icon"><i class="fa-solid fa-ticket"></i></div>
                    <div class="stat-card-info">
                        <h4>إجمالي الحجوزات</h4>
                        <h2>${bookings.length}</h2>
                    </div>
                </div>
                <div class="stat-card-box">
                    <div class="stat-card-icon"><i class="fa-solid fa-gift"></i></div>
                    <div class="stat-card-info">
                        <h4>العروض النشطة</h4>
                        <h2>${offers.length}</h2>
                    </div>
                </div>
                <div class="stat-card-box">
                    <div class="stat-card-icon"><i class="fa-solid fa-concierge-bell"></i></div>
                    <div class="stat-card-info">
                        <h4>الخدمات</h4>
                        <h2>${services.length}</h2>
                    </div>
                </div>
            </div>
            <div class="card-item p-4">
                <h3 class="mb-2">مرحباً بك في لوحة تحكم أفق للطيران</h3>
                <p>يمكنك من هنا إدارة كافة محتويات الموقع، العروض، الخدمات، شركات الطيران، ومتابعة حجوزات العملاء بكل سهولة.</p>
            </div>
        `;
    } 
    else if (tabName === 'dash-bookings') {
        let bookings = getData('bookings');
        body.innerHTML = `
            <div class="d-flex justify-between align-center mb-3">
                <h3>إدارة حجوزات العملاء</h3>
            </div>
            <table class="admin-table">
                <thead>
                    <tr>
                        <th>رقم الحجز</th>
                        <th>العميل</th>
                        <th>الهاتف</th>
                        <th>المسار</th>
                        <th>التاريخ</th>
                        <th>الإجراءات</th>
                    </tr>
                </thead>
                <tbody>
                    ${bookings.length === 0 ? `<tr><td colspan="6" class="text-center">لا توجد حجوزات حالياً</td></tr>` : 
                    bookings.map((b, idx) => `
                        <tr>
                            <td><b>${b.id}</b></td>
                            <td>${b.custName}</td>
                            <td>${b.custPhone}</td>
                            <td>${b.depAirport} ➔ ${b.arrAirport}</td>
                            <td>${b.date}</td>
                            <td>
                                <button class="btn btn-danger" style="padding:5px 10px; font-size:0.8rem;" onclick="deleteBooking(${idx})"><i class="fa-solid fa-trash"></i></button>
                            </td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        `;
    }
    else if (tabName === 'dash-offers') {
        let offers = getData('offers');
        body.innerHTML = `
            <div class="d-flex justify-between align-center mb-3">
                <h3>إدارة العروض السياحية</h3>
                <button class="btn btn-primary" onclick="openAddOfferModal()"><i class="fa-solid fa-plus"></i> إضافة عرض جديد</button>
            </div>
            <table class="admin-table">
                <thead>
                    <tr>
                        <th>الصورة</th>
                        <th>العنوان</th>
                        <th>الوجهة</th>
                        <th>الوصف</th>
                        <th>الإجراءات</th>
                    </tr>
                </thead>
                <tbody>
                    ${offers.map((o, idx) => `
                        <tr>
                            <td><img src="${o.image}" width="50" height="40" style="object-fit:cover; border-radius:4px;"></td>
                            <td><b>${o.title}</b></td>
                            <td>${o.destination}</td>
                            <td>${o.desc}</td>
                            <td>
                                <button class="btn btn-danger" style="padding:5px 10px; font-size:0.8rem;" onclick="deleteItem('offers', ${idx})"><i class="fa-solid fa-trash"></i></button>
                            </td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        `;
    }
    else if (tabName === 'dash-services') {
        let services = getData('services');
        body.innerHTML = `
            <div class="d-flex justify-between align-center mb-3">
                <h3>إدارة الخدمات</h3>
                <button class="btn btn-primary" onclick="openAddServiceModal()"><i class="fa-solid fa-plus"></i> إضافة خدمة</button>
            </div>
            <table class="admin-table">
                <thead>
                    <tr>
                        <th>الأيقونة</th>
                        <th>العنوان</th>
                        <th>الوصف</th>
                        <th>الإجراءات</th>
                    </tr>
                </thead>
                <tbody>
                    ${services.map((s, idx) => `
                        <tr>
                            <td><i class="fa-solid ${s.icon}" style="font-size:1.5rem; color:var(--accent)"></i></td>
                            <td><b>${s.title}</b></td>
                            <td>${s.desc}</td>
                            <td>
                                <button class="btn btn-danger" style="padding:5px 10px; font-size:0.8rem;" onclick="deleteItem('services', ${idx})"><i class="fa-solid fa-trash"></i></button>
                            </td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        `;
    }
    else if (tabName === 'dash-airlines') {
        let airlines = getData('airlines');
        body.innerHTML = `
            <div class="d-flex justify-between align-center mb-3">
                <h3>شركات الطيران</h3>
                <button class="btn btn-primary" onclick="openAddAirlineModal()"><i class="fa-solid fa-plus"></i> إضافة شركة طيران</button>
            </div>
            <table class="admin-table">
                <thead>
                    <tr>
                        <th>الشعار</th>
                        <th>الاسم</th>
                        <th>IATA / ICAO</th>
                        <th>الإجراءات</th>
                    </tr>
                </thead>
                <tbody>
                    ${airlines.map((al, idx) => `
                        <tr>
                            <td><img src="${al.logo}" width="40" height="40" style="object-fit:contain;"></td>
                            <td><b>${al.name}</b></td>
                            <td>${al.iata} / ${al.icao}</td>
                            <td>
                                <button class="btn btn-danger" style="padding:5px 10px; font-size:0.8rem;" onclick="deleteItem('airlines', ${idx})"><i class="fa-solid fa-trash"></i></button>
                            </td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        `;
    }
    else if (tabName === 'dash-airports') {
        let airports = getData('airports');
        body.innerHTML = `
            <div class="d-flex justify-between align-center mb-3">
                <h3>المطارات</h3>
                <button class="btn btn-primary" onclick="openAddAirportModal()"><i class="fa-solid fa-plus"></i> إضافة مطار</button>
            </div>
            <table class="admin-table">
                <thead>
                    <tr>
                        <th>اسم المطار</th>
                        <th>الرمز (Code)</th>
                        <th>المدينة</th>
                        <th>الإجراءات</th>
                    </tr>
                </thead>
                <tbody>
                    ${airports.map((ap, idx) => `
                        <tr>
                            <td><b>${ap.name}</b></td>
                            <td>${ap.code}</td>
                            <td>${ap.city}</td>
                            <td>
                                <button class="btn btn-danger" style="padding:5px 10px; font-size:0.8rem;" onclick="deleteItem('airports', ${idx})"><i class="fa-solid fa-trash"></i></button>
                            </td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        `;
    }
    else if (tabName === 'dash-destinations') {
        let dests = getData('destinations');
        body.innerHTML = `
            <div class="d-flex justify-between align-center mb-3">
                <h3>الوجهات السياحية</h3>
                <button class="btn btn-primary" onclick="openAddDestModal()"><i class="fa-solid fa-plus"></i> إضافة وجهة</button>
            </div>
            <table class="admin-table">
                <thead>
                    <tr>
                        <th>الصورة</th>
                        <th>المدينة</th>
                        <th>الدولة</th>
                        <th>الإجراءات</th>
                    </tr>
                </thead>
                <tbody>
                    ${dests.map((d, idx) => `
                        <tr>
                            <td><img src="${d.image}" width="50" height="40" style="object-fit:cover; border-radius:4px;"></td>
                            <td><b>${d.name}</b></td>
                            <td>${d.country}</td>
                            <td>
                                <button class="btn btn-danger" style="padding:5px 10px; font-size:0.8rem;" onclick="deleteItem('destinations', ${idx})"><i class="fa-solid fa-trash"></i></button>
                            </td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        `;
    }
    else if (tabName === 'dash-youtube') {
        let yts = getData('youtube');
        body.innerHTML = `
            <div class="d-flex justify-between align-center mb-3">
                <h3>فيديوهات اليوتيوب</h3>
                <button class="btn btn-primary" onclick="openAddYoutubeModal()"><i class="fa-solid fa-plus"></i> إضافة فيديو</button>
            </div>
            <table class="admin-table">
                <thead>
                    <tr>
                        <th>العنوان</th>
                        <th>الوصف</th>
                        <th>الرابط</th>
                        <th>الإجراءات</th>
                    </tr>
                </thead>
                <tbody>
                    ${yts.map((y, idx) => `
                        <tr>
                            <td><b>${y.title}</b></td>
                            <td>${y.desc}</td>
                            <td>${y.url}</td>
                            <td>
                                <button class="btn btn-danger" style="padding:5px 10px; font-size:0.8rem;" onclick="deleteItem('youtube', ${idx})"><i class="fa-solid fa-trash"></i></button>
                            </td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        `;
    }
    else if (tabName === 'dash-gallery') {
        let gals = getData('gallery');
        body.innerHTML = `
            <div class="d-flex justify-between align-center mb-3">
                <h3>معرض الصور</h3>
                <button class="btn btn-primary" onclick="openAddGalleryModal()"><i class="fa-solid fa-plus"></i> إضافة صورة</button>
            </div>
            <table class="admin-table">
                <thead>
                    <tr>
                        <th>الصورة</th>
                        <th>العنوان</th>
                        <th>الإجراءات</th>
                    </tr>
                </thead>
                <tbody>
                    ${gals.map((g, idx) => `
                        <tr>
                            <td><img src="${g.image}" width="60" height="40" style="object-fit:cover; border-radius:4px;"></td>
                            <td><b>${g.title}</b></td>
                            <td>
                                <button class="btn btn-danger" style="padding:5px 10px; font-size:0.8rem;" onclick="deleteItem('gallery', ${idx})"><i class="fa-solid fa-trash"></i></button>
                            </td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        `;
    }
    else if (tabName === 'dash-settings') {
        let s = getSettings();
        body.innerHTML = `
            <div class="card-item p-4">
                <h3 class="mb-3">إعدادات الموقع العامة</h3>
                <form id="settingsForm">
                    <div class="form-grid-3">
                        <div class="form-group">
                            <label>اسم الشركة (عربي)</label>
                            <input type="text" id="stCompanyName" class="form-control" value="${s.companyName}">
                        </div>
                        <div class="form-group">
                            <label>اسم الشركة (إنجليزي)</label>
                            <input type="text" id="stCompanySub" class="form-control" value="${s.companySub}">
                        </div>
                        <div class="form-group">
                            <label>رقم الهاتف</label>
                            <input type="text" id="stPhone" class="form-control" value="${s.phone}">
                        </div>
                        <div class="form-group">
                            <label>رقم الواتساب</label>
                            <input type="text" id="stWhatsapp" class="form-control" value="${s.whatsapp}">
                        </div>
                        <div class="form-group">
                            <label>البريد الإلكتروني</label>
                            <input type="text" id="stEmail" class="form-control" value="${s.email}">
                        </div>
                    </div>
                    <div class="form-group mt-3">
                        <label>عنوان Hero الرئيسي</label>
                        <input type="text" id="stHeroTitle" class="form-control" value="${s.heroTitle}">
                    </div>
                    <div class="form-group mt-3">
                        <label>وصف Hero</label>
                        <textarea id="stHeroDesc" class="form-control" rows="2">${s.heroDesc}</textarea>
                    </div>
                    <div class="form-submit-box mt-4">
                        <button type="button" class="btn btn-primary" onclick="saveGeneralSettings()">حفظ الإعدادات</button>
                    </div>
                </form>
            </div>
        `;
    }
    else if (tabName === 'dash-security') {
        body.innerHTML = `
            <div class="card-item p-4" style="max-width:500px;">
                <h3 class="mb-3">تغيير كلمة مرور لوحة التحكم</h3>
                <form id="securityForm">
                    <div class="form-group">
                        <label>كلمة المرور الحالية</label>
                        <input type="password" id="currPass" class="form-control" required>
                    </div>
                    <div class="form-group mt-2">
                        <label>كلمة المرور الجديدة</label>
                        <input type="password" id="newPass" class="form-control" required>
                    </div>
                    <div class="form-submit-box mt-3">
                        <button type="button" class="btn btn-primary" onclick="updateAdminPassword()">تغيير كلمة المرور</button>
                    </div>
                </form>
            </div>
        `;
    }
    else if (tabName === 'dash-backup') {
        body.innerHTML = `
            <div class="card-item p-4">
                <h3 class="mb-3">النسخ الاحتياطي واستعادة البيانات</h3>
                <p class="mb-3">يمكنك تصدير نسخة احتياطية كاملة لبيانات الموقع أو استعادتها عند الحاجة.</p>
                <div class="d-flex gap-3">
                    <button class="btn btn-primary" onclick="exportBackup()"><i class="fa-solid fa-download"></i> تصدير النسخة الاحتياطية (JSON)</button>
                    <button class="btn btn-danger" onclick="resetWebsite()"><i class="fa-solid fa-rotate-right"></i> استعادة إعدادات المصنع</button>
                </div>
            </div>
        `;
    }
}

// Admin CMS CRUD Operations
function deleteItem(key, index) {
    let list = getData(key);
    list.splice(index, 1);
    saveData(key, list);
    showToast('تم الحذف بنجاح');
    let activeTab = document.querySelector('.admin-nav-link.active').getAttribute('data-tab');
    loadAdminTab(activeTab);
}

function deleteBooking(index) {
    let list = getData('bookings');
    list.splice(index, 1);
    saveData('bookings', list);
    showToast('تم حذف الحجز بنجاح');
    loadAdminTab('dash-bookings');
}

function saveGeneralSettings() {
    let s = getSettings();
    s.companyName = document.getElementById('stCompanyName').value;
    s.companySub = document.getElementById('stCompanySub').value;
    s.phone = document.getElementById('stPhone').value;
    s.whatsapp = document.getElementById('stWhatsapp').value;
    s.email = document.getElementById('stEmail').value;
    s.heroTitle = document.getElementById('stHeroTitle').value;
    s.heroDesc = document.getElementById('stHeroDesc').value;
    saveSettings(s);
    showToast('تم حفظ الإعدادات بنجاح!');
}

function updateAdminPassword() {
    let curr = document.getElementById('currPass').value;
    let neu = document.getElementById('newPass').value;
    let s = getSettings();
    if(curr === s.adminPass) {
        s.adminPass = neu;
        saveSettings(s);
        showToast('تم تغيير كلمة المرور بنجاح!');
        document.getElementById('securityForm').reset();
    } else {
        showToast('كلمة المرور الحالية غير صحيحة!');
    }
}

function exportBackup() {
    let backupObj = {
        settings: getSettings(),
        services: getData('services'),
        offers: getData('offers'),
        airlines: getData('airlines'),
        airports: getData('airports'),
        destinations: getData('destinations'),
        youtube: getData('youtube'),
        gallery: getData('gallery'),
        why: getData('why'),
        bookings: getData('bookings')
    };
    let dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(backupObj, null, 2));
    let downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", "ofoq_travel_backup.json");
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    showToast('تم تصدير النسخة الاحتياطية بنجاح!');
}

function resetWebsite() {
    if(confirm('تحذير: سيتم استعادة الإعدادات الافتراضية وحذف التعديلات والبيانات الحالية. هل أنت متأكد؟')) {
        localStorage.clear();
        initLocalStorage();
        showToast('تمت استعادة إعدادات المصنع بنجاح!');
        location.reload();
    }
}

// Quick Add Prompts for Admin CMS
function openAddOfferModal() {
    let title = prompt("عنوان العرض:");
    if(!title) return;
    let destination = prompt("الوجهة (مثال: دبي):");
    let desc = prompt("وصف العرض:");
    let image = prompt("رابط الصورة:", "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80");
    let offers = getData('offers');
    offers.push({ id: 'o_' + Date.now(), title, destination: destination || "تواصل معنا للتفاصيل", desc: desc || "تواصل معنا للتفاصيل", image: image || "" });
    saveData('offers', offers);
    showToast('تمت إضافة العرض بنجاح');
    loadAdminTab('dash-offers');
}

function openAddServiceModal() {
    let title = prompt("عنوان الخدمة:");
    if(!title) return;
    let desc = prompt("وصف الخدمة:");
    let icon = prompt("أيقونة FontAwesome (مثال: fa-plane):", "fa-plane");
    let services = getData('services');
    services.push({ id: 's_' + Date.now(), title, desc, icon });
    saveData('services', services);
    showToast('تمت إضافة الخدمة بنجاح');
    loadAdminTab('dash-services');
}

function openAddAirlineModal() {
    let name = prompt("اسم شركة الطيران:");
    if(!name) return;
    let iata = prompt("رمز IATA:");
    let icao = prompt("رمز ICAO:");
    let logo = prompt("رابط الشعار (Logo URL):", "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=150&q=80");
    let airlines = getData('airlines');
    airlines.push({ id: 'al_' + Date.now(), name, iata, icao, logo });
    saveData('airlines', airlines);
    showToast('تمت إضافة شركة الطيران بنجاح');
    loadAdminTab('dash-airlines');
}

function openAddAirportModal() {
    let name = prompt("اسم المطار:");
    if(!name) return;
    let code = prompt("رمز المطار (مثل ALG):");
    let city = prompt("المدينة:");
    let airports = getData('airports');
    airports.push({ id: 'ap_' + Date.now(), name, code, city });
    saveData('airports', airports);
    showToast('تمت إضافة المطار بنجاح');
    loadAdminTab('dash-airports');
}

function openAddDestModal() {
    let name = prompt("اسم المدينة:");
    if(!name) return;
    let country = prompt("الدولة:");
    let image = prompt("رابط الصورة:", "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=600&q=80");
    let dests = getData('destinations');
    dests.push({ id: 'd_' + Date.now(), name, country, image });
    saveData('destinations', dests);
    showToast('تمت إضافة الوجهة بنجاح');
    loadAdminTab('dash-destinations');
}

function openAddYoutubeModal() {
    let title = prompt("عنوان الفيديو:");
    if(!title) return;
    let desc = prompt("وصف الفيديو:");
    let url = prompt("رابط Embed يوتيوب:", "https://www.youtube.com/embed/dQw4w9WgXcQ");
    let yts = getData('youtube');
    yts.push({ id: 'y_' + Date.now(), title, desc, url });
    saveData('youtube', yts);
    showToast('تمت إضافة الفيديو بنجاح');
    loadAdminTab('dash-youtube');
}

function openAddGalleryModal() {
    let title = prompt("عنوان أو وصف الصورة:");
    if(!title) return;
    let image = prompt("رابط الصورة:", "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80");
    let gals = getData('gallery');
    gals.push({ id: 'g_' + Date.now(), title, image });
    saveData('gallery', gals);
    showToast('تمت إضافة الصورة بنجاح');
    loadAdminTab('dash-gallery');
}
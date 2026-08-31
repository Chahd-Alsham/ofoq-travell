/* ==========================================
   Ofoq Travel - Complete Local Vanilla JS Engine
   ========================================== */

const DEFAULT_DATA = {
    settings: {
        companyAr: "أفق للطيران",
        companyEn: "Ofoq Travel",
        phone: "+213564694878",
        email: "travelofoq@gmail.com",
        whatsapp: "+213564694879",
        address: "الجزائر العاصمة، الجزائر",
        adminPass: "ofoq2026admin",
        isDefaultPass: true
    },
    offers: [
        {
            id: "offer-1",
            title: "رحلة ساحرة إلى إسطنبول",
            destination: "إسطنبول، تركيا",
            description: "شمل التذاكر ذهاب وعودة مع الإقامة الفندقية لمدة 5 أيام ووجبة الإفطار.",
            price: "اتصل بنا للتفاصيل",
            currency: "",
            image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=600&q=80",
            hidden: false
        },
        {
            id: "offer-2",
            title: "عطلة دبي الفاخرة",
            destination: "دبي، الإمارات",
            description: "استمتع بأجمل المعالم السياحية مع تذاكر الطيران المباشر والإقامة لـ 4 ليالٍ.",
            price: "أتصل بنا للتفاصيل",
            currency: "",
            image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80",
            hidden: false
        },
        {
            id: "offer-3",
            title: "استكشاف باريس مدينة الأنوار",
            destination: "باريس، فرنسا",
            description: "رحلة مباشرة مع أرقى الخطوط الجوية وتذاكر زيارة الأماكن السياحية الشهيرة.",
            price: "أتصل بنا للتفاصيل",
            currency: "",
            image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=600&q=80",
            hidden: false
        }
    ],
    services: [
        {
            id: "serv-1",
            title: "حجز تذاكر الطيران",
            description: "حجز فوري لجميع الخطوط الجوية المحلية والدولية بأفضل الأسعار.",
            icon: "fa-plane-departure",
            image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80",
            hidden: false
        },
        {
            id: "serv-2",
            title: "حجز الفنادق والمنتجعات",
            description: "شراكات مع آلاف الفنادق حول العالم لتوفير إقامة مريحة ومميزة.",
            icon: "fa-hotel",
            image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80",
            hidden: false
        },
        {
            id: "serv-3",
            title: "الجولات السياحية",
            description: "برامج سياحية متكاملة مع مرشدين سياحيين محترفين لاكتشاف أجمل المدن.",
            icon: "fa-map-location-dot",
            image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=600&q=80",
            hidden: false
        }
    ],
    airlines: [
        { id: "air-1", name: "الخطوط الجوية الجزائرية", logo: "https://cdn-icons-png.flaticon.com/512/3125/3125807.png", hidden: false },
        { id: "air-2", name: "الخطوط الجوية التركية", logo: "https://cdn-icons-png.flaticon.com/512/3125/3125807.png", hidden: false },
        { id: "air-3", name: "الخطوط الجوية القطرية", logo: "https://cdn-icons-png.flaticon.com/512/3125/3125807.png", hidden: false },
        { id: "air-4", name: "طيران الإمارات", logo: "https://cdn-icons-png.flaticon.com/512/3125/3125807.png", hidden: false }
    ],
    airports: [
        { id: "apt-1", code: "ALG", name: "مطار هواري بومدين الدولي (الجزائر)" },
        { id: "apt-2", code: "IST", name: "مطار إسطنبول الدولي (تركيا)" },
        { id: "apt-3", code: "DXB", name: "مطار دبي الدولي (الإمارات)" },
        { id: "apt-4", code: "CDG", name: "مطار شارل ديغول (باريس)" }
    ],
    youtube: [
        { id: "yt-1", title: "جولة في أسطول أفق للطيران", description: "تعرف على خدماتنا ودرجات السفر المختلفة.", url: "https://www.youtube.com/embed/dQw4w9WgXcQ", hidden: false },
        { id: "yt-2", title: "أفضل الوجهات السياحية لعام 2026", description: "اكتشف معنا أبرز الأماكن التي تستحق الزيارة.", url: "https://www.youtube.com/embed/dQw4w9WgXcQ", hidden: false }
    ],
    gallery: [
        { id: "gal-1", caption: "طائراتنا العصرية الحديثة", url: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80", hidden: false },
        { id: "gal-2", caption: "خدمة مقصورات رجال الأعمال", url: "https://images.unsplash.com/photo-1540339832862-474599807836?auto=format&fit=crop&w=600&q=80", hidden: false },
        { id: "gal-3", caption: "وجهات سياحية عالمية ساحرة", url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80", hidden: false }
    ],
    bookings: []
};

let currentTripType = 'one-way';
let isAdminLoggedIn = false;

document.addEventListener("DOMContentLoaded", () => {
    try {
        initDatabase();
        setupEventListeners();
        renderAllFrontend();
    } catch (err) {
        console.error("Initialization Error:", err);
        showToast("حدث خطأ أثناء تحميل التطبيق", "error");
    }
});

function initDatabase() {
    try {
        if (!localStorage.getItem("ofoq_initialized")) {
            localStorage.setItem("ofoq_data", JSON.stringify(DEFAULT_DATA));
            localStorage.setItem("ofoq_initialized", "true");
        }
    } catch (err) {
        console.error("DB Init Error:", err);
    }
}

function getAppData() {
    try {
        const dataStr = localStorage.getItem("ofoq_data");
        return dataStr ? JSON.parse(dataStr) : DEFAULT_DATA;
    } catch (err) {
        console.error("Get Data Error:", err);
        return DEFAULT_DATA;
    }
}

function saveAppData(data) {
    try {
        localStorage.setItem("ofoq_data", JSON.stringify(data));
    } catch (err) {
        console.error("Save Data Error:", err);
        showToast("فشل الحفظ في التخزين المحلي", "error");
    }
}

function showToast(message, type = "success") {
    const container = document.getElementById("toast-container");
    if (!container) return;
    const toast = document.createElement("div");
    toast.className = `toast ${type}`;
    toast.innerHTML = `<i class="fa-solid ${type === 'success' ? 'fa-circle-check' : 'fa-triangle-exclamation'}"></i> ${message}`;
    container.appendChild(toast);
    setTimeout(() => {
        toast.remove();
    }, 3000);
}

function setupEventListeners() {
    const hamburger = document.getElementById("hamburger-btn");
    const drawer = document.getElementById("mobile-drawer");
    const overlay = document.getElementById("drawer-overlay");
    const closeDrawerBtn = document.getElementById("close-drawer");

    if (hamburger && drawer && overlay) {
        hamburger.addEventListener("click", () => {
            drawer.classList.add("open");
            overlay.classList.add("open");
        });
        overlay.addEventListener("click", () => {
            drawer.classList.remove("open");
            overlay.classList.remove("open");
        });
        if (closeDrawerBtn) {
            closeDrawerBtn.addEventListener("click", () => {
                drawer.classList.remove("open");
                overlay.classList.remove("open");
            });
        }
    }
}

function closeMobileMenu() {
    const drawer = document.getElementById("mobile-drawer");
    const overlay = document.getElementById("drawer-overlay");
    if (drawer) drawer.classList.remove("open");
    if (overlay) overlay.classList.remove("open");
}

function scrollToBooking() {
    const bookingSec = document.getElementById("booking");
    if (bookingSec) {
        bookingSec.scrollIntoView({ behavior: 'smooth' });
    }
}

function setTripType(type) {
    currentTripType = type;
    document.querySelectorAll('.trip-type-tabs .tab-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    const returnGroup = document.getElementById("return-date-group");
    if (returnGroup) {
        if (type === 'one-way') {
            returnGroup.style.display = 'none';
            document.getElementById('b-ret-date').removeAttribute('required');
        } else {
            returnGroup.style.display = 'flex';
            document.getElementById('b-ret-date').setAttribute('required', 'true');
        }
    }
}

function renderAllFrontend() {
    const data = getAppData();
    
    // Settings / Brand
    document.getElementById("brand-name").innerText = data.settings.companyAr;
    document.getElementById("hero-title").innerText = `رحلتك القادمة مع ${data.settings.companyAr}`;
    document.getElementById("contact-phone-display").innerText = data.settings.phone;
    document.getElementById("contact-email-display").innerText = data.settings.email;
    document.getElementById("contact-wa-display").innerText = data.settings.whatsapp;
    document.getElementById("contact-address-display").innerText = data.settings.address;
    document.getElementById("footer-brand-title").innerText = data.settings.companyAr;
    document.getElementById("hero-whatsapp-btn").href = `https://wa.me/${data.settings.whatsapp.replace(/[^0-9]/g, '')}`;

    // Services
    const servGrid = document.getElementById("services-grid");
    if (servGrid) {
        servGrid.innerHTML = data.services.filter(s => !s.hidden).map(s => `
            <div class="card">
                <img src="${s.image}" alt="${s.title}" loading="lazy">
                <div class="card-body">
                    <h3><i class="fa-solid ${s.icon}"></i> ${s.title}</h3>
                    <p>${s.description}</p>
                </div>
            </div>
        `).join('');
    }

    // Offers
    const offGrid = document.getElementById("offers-grid");
    if (offGrid) {
        offGrid.innerHTML = data.offers.filter(o => !o.hidden).map(o => `
            <div class="card">
                <img src="${o.image}" alt="${o.title}" loading="lazy">
                <div class="card-body">
                    <h3>${o.title}</h3>
                    <p><i class="fa-solid fa-location-dot"></i> ${o.destination}</p>
                    <p>${o.description}</p>
                    <div class="card-footer">
                        <span class="price">${o.price} ${o.currency}</span>
                        <button class="btn btn-primary btn-sm" onclick="scrollToBooking()">احجز العرض</button>
                    </div>
                </div>
            </div>
        `).join('');
    }

    // Airlines
    const airGrid = document.getElementById("airlines-grid");
    if (airGrid) {
        airGrid.innerHTML = data.airlines.filter(a => !a.hidden).map(a => `
            <div class="airline-card">
                <img src="${a.logo}" alt="${a.name}" loading="lazy">
                <h4>${a.name}</h4>
            </div>
        `).join('');
    }

    // Gallery
    const galGrid = document.getElementById("gallery-grid");
    if (galGrid) {
        galGrid.innerHTML = data.gallery.filter(g => !g.hidden).map(g => `
            <div class="gallery-item">
                <img src="${g.url}" alt="${g.caption}" loading="lazy">
                <div class="gallery-caption">${g.caption}</div>
            </div>
        `).join('');
    }

    // YouTube
    const ytGrid = document.getElementById("youtube-grid");
    if (ytGrid) {
        ytGrid.innerHTML = data.youtube.filter(y => !y.hidden).map(y => `
            <div class="card">
                <div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;">
                    <iframe src="${y.url}" style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;" allowfullscreen></iframe>
                </div>
                <div class="card-body">
                    <h3>${y.title}</h3>
                    <p>${y.description}</p>
                </div>
            </div>
        `).join('');
    }
}

/* Booking Submission */
function handleBookingSubmit(event) {
    event.preventDefault();
    try {
        const data = getAppData();
        const bookingNum = `OFQ-2026-${String(data.bookings.length + 1).padStart(4, '0')}`;
        
        const newBooking = {
            id: bookingNum,
            type: currentTripType,
            fullName: document.getElementById("b-fullname").value.trim(),
            phone: document.getElementById("b-phone").value.trim(),
            email: document.getElementById("b-email").value.trim(),
            departure: document.getElementById("b-departure").value.trim(),
            arrival: document.getElementById("b-arrival").value.trim(),
            airline: document.getElementById("b-airline").value.trim() || "غير محدد",
            flightNum: document.getElementById("b-flight-num").value.trim() || "غير محدد",
            depDate: document.getElementById("b-dep-date").value,
            retDate: document.getElementById("b-ret-date").value || "بدون",
            passport: document.getElementById("b-passport").value.trim() || "غير محدد",
            nationality: document.getElementById("b-nationality").value.trim() || "غير محدد",
            classType: document.getElementById("b-class").value.trim() || "سياحية",
            adults: document.getElementById("b-adults").value,
            children: document.getElementById("b-children").value,
            infants: document.getElementById("b-infants").value,
            notes: document.getElementById("b-notes").value.trim() || "لا توجد ملاحظات",
            status: "جديد",
            createdAt: new Date().toISOString()
        };

        data.bookings.push(newBooking);
        saveAppData(data);
        showToast(`تم حفظ الحجز بنجاح برقم: ${bookingNum}`, "success");

        // Construct WhatsApp Message
        const waNumber = data.settings.whatsapp.replace(/[^0-9]/g, '');
        const waMsg = encodeURIComponent(
            `✈️ *طلب حجز جديد عبر الموقع* \n\n` +
            `🔢 رقم الحجز: ${bookingNum}\n` +
            `👤 الاسم: ${newBooking.fullName}\n` +
            `📞 الهاتف: ${newBooking.phone}\n` +
            `📧 البريد: ${newBooking.email}\n` +
            `🧭 نوع الرحلة: ${newBooking.type}\n` +
            `🛫 المغادرة: ${newBooking.departure}\n` +
            `🛬 الوصول: ${newBooking.arrival}\n` +
            `✈️ شركة الطيران: ${newBooking.airline}\n` +
            `🔢 رقم الرحلة: ${newBooking.flightNum}\n` +
            `📅 تاريخ الذهاب: ${newBooking.depDate}\n` +
            `📅 تاريخ العودة: ${newBooking.retDate}\n` +
            `👥 البالغين: ${newBooking.adults} | الأطفال: ${newBooking.children} | الرضع: ${newBooking.infants}\n` +
            `🆔 رقم الجواز: ${newBooking.passport}\n` +
            `🌍 الجنسية: ${newBooking.nationality}\n` +
            `📝 ملاحظات: ${newBooking.notes}`
        );

        setTimeout(() => {
            window.open(`https://wa.me/${waNumber}?text=${waMsg}`, '_blank');
        }, 1000);

        document.getElementById("booking-form").reset();
    } catch (err) {
        console.error("Booking Error:", err);
        showToast("حدث خطأ أثناء معالجة الحجز", "error");
    }
}

/* Admin Modals & Flow */
function openAdminModal() {
    const data = getAppData();
    if (isAdminLoggedIn) {
        openAdminPanel();
    } else if (data.settings.isDefaultPass) {
        document.getElementById("admin-pass-change-modal").style.display = "flex";
    } else {
        document.getElementById("admin-login-modal").style.display = "flex";
    }
}

function closeAdminModal() {
    document.getElementById("admin-login-modal").style.display = "none";
    document.getElementById("admin-pass-change-modal").style.display = "none";
}

function handleFirstPassChange(event) {
    event.preventDefault();
    const p1 = document.getElementById("new-p-1").value;
    const p2 = document.getElementById("new-p-2").value;
    if (p1 !== p2) {
        showToast("كلمتا المرور غير متطابقتين", "error");
        return;
    }
    const data = getAppData();
    data.settings.adminPass = p1;
    data.settings.isDefaultPass = false;
    saveAppData(data);
    closeAdminModal();
    showToast("تم تحديث كلمة المرور بنجاح. يرجى تسجيل الدخول بها.", "success");
    document.getElementById("admin-login-modal").style.display = "flex";
}

function handleAdminLogin(event) {
    event.preventDefault();
    const pass = document.getElementById("admin-pass-input").value;
    const data = getAppData();
    if (pass === data.settings.adminPass) {
        isAdminLoggedIn = true;
        closeAdminModal();
        document.getElementById("admin-pass-input").value = "";
        openAdminPanel();
        showToast("تم تسجيل الدخول بنجاح", "success");
    } else {
        showToast("كلمة المرور غير صحيحة", "error");
    }
}

function openAdminPanel() {
    document.getElementById("admin-panel").style.display = "flex";
    renderAdminDashboard();
}

function closeAdminPanel() {
    document.getElementById("admin-panel").style.display = "none";
}

function adminLogout() {
    isAdminLoggedIn = false;
    closeAdminPanel();
    showToast("تم تسجيل الخروج بنجاح", "success");
}

function switchAdminTab(tabId) {
    document.querySelectorAll('.admin-nav-link').forEach(l => l.classList.remove('active'));
    document.querySelectorAll('.admin-tab-content').forEach(c => c.classList.remove('active'));
    const targetLink = document.querySelector(`.admin-nav-link[data-target="${tabId}"]`);
    if (targetLink) targetLink.classList.add('active');
    const targetTab = document.getElementById(tabId);
    if (targetTab) targetTab.classList.add('active');

    if (tabId === 'dash-home') renderAdminDashboard();
    if (tabId === 'dash-bookings') renderAdminBookings();
    if (tabId === 'dash-offers') renderAdminOffers();
    if (tabId === 'dash-services') renderAdminServices();
    if (tabId === 'dash-airlines') renderAdminAirlines();
    if (tabId === 'dash-airports') renderAdminAirports();
    if (tabId === 'dash-youtube') renderAdminYoutube();
    if (tabId === 'dash-gallery') renderAdminGallery();
    if (tabId === 'dash-settings') loadAdminSettings();
}

function renderAdminDashboard() {
    const data = getAppData();
    const grid = document.getElementById("admin-stats-grid");
    if (!grid) return;
    
    const totalB = data.bookings.length;
    const newB = data.bookings.filter(b => b.status === 'جديد').length;
    
    grid.innerHTML = `
        <div class="stat-card"><h4>إجمالي الحجوزات</h4><div class="number">${totalB}</div></div>
        <div class="stat-card"><h4>الحجوزات الجديدة</h4><div class="number">${newB}</div></div>
        <div class="stat-card"><h4>العروض النشطة</h4><div class="number">${data.offers.length}</div></div>
        <div class="stat-card"><h4>الخدمات المتاحة</h4><div class="number">${data.services.length}</div></div>
        <div class="stat-card"><h4>شركات الطيران</h4><div class="number">${data.airlines.length}</div></div>
        <div class="stat-card"><h4>المطارات المسجلة</h4><div class="number">${data.airports.length}</div></div>
        <div class="stat-card"><h4>الفيديوهات</h4><div class="number">${data.youtube.length}</div></div>
        <div class="stat-card"><h4>صور المعرض</h4><div class="number">${data.gallery.length}</div></div>
    `;
}

function renderAdminBookings() {
    const data = getAppData();
    const tbody = document.getElementById("bookings-tbody");
    if (!tbody) return;
    if (data.bookings.length === 0) {
        tbody.innerHTML = `<tr><td colspan="8" style="text-align:center;">لا توجد حجوزات مسجلة بعد</td></tr>`;
        return;
    }
    tbody.innerHTML = data.bookings.map(b => `
        <tr>
            <td><strong>${b.id}</strong></td>
            <td>${b.fullName}</td>
            <td>${b.phone}</td>
            <td>${b.departure}</td>
            <td>${b.arrival}</td>
            <td>${b.depDate}</td>
            <td><span style="color: ${b.status==='جديد'?'var(--sky-blue)':'var(--success)'}">${b.status}</span></td>
            <td>
                <button class="btn btn-danger btn-sm" onclick="deleteBooking('${b.id}')"><i class="fa-solid fa-trash"></i></button>
            </td>
        </tr>
    `).join('');
}

function deleteBooking(id) {
    if (!confirm("هل أنت متأكد من حذف هذا الحجز؟")) return;
    const data = getAppData();
    data.bookings = data.bookings.filter(b => b.id !== id);
    saveAppData(data);
    renderAdminBookings();
    showToast("تم حذف الحجز بنجاح", "success");
}

function exportBookingsCSV() {
    const data = getAppData();
    if (data.bookings.length === 0) {
        showToast("لا توجد حجوزات للتصدير", "error");
        return;
    }
    let csv = "ID,Name,Phone,Email,Departure,Arrival,Airline,FlightNum,DepDate,ReturnDate,Status\n";
    data.bookings.forEach(b => {
        csv += `"${b.id}","${b.fullName}","${b.phone}","${b.email}","${b.departure}","${b.arrival}","${b.airline}","${b.flightNum}","${b.depDate}","${b.retDate}","${b.status}"\n`;
    });
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'ofoq_bookings.csv';
    a.click();
    showToast("تم تصدير ملف الحجوزات بنجاح", "success");
}

/* Admin CRUD: Offers */
function renderAdminOffers() {
    const data = getAppData();
    const list = document.getElementById("admin-offers-list");
    if (!list) return;
    list.innerHTML = data.offers.map(o => `
        <div class="admin-list-row">
            <img src="${o.image}" alt="">
            <div class="admin-list-info">
                <h4>${o.title} (${o.destination})</h4>
                <p>السعر: ${o.price} ${o.currency} | الحالة: ${o.hidden ? 'مخفي' : 'ظاهر'}</p>
            </div>
            <div class="admin-list-actions">
                <button class="btn btn-secondary btn-sm" onclick="openOfferModal('${o.id}')">تعديل</button>
                <button class="btn btn-secondary btn-sm" onclick="toggleOfferHide('${o.id}')">${o.hidden ? 'إظهار' : 'إخفاء'}</button>
                <button class="btn btn-danger btn-sm" onclick="deleteOffer('${o.id}')">حذف</button>
            </div>
        </div>
    `).join('');
}

function openOfferModal(id = null) {
    const data = getAppData();
    let offer = { title: '', destination: '', description: '', price: '', currency: 'USD', image: '', hidden: false };
    if (id) {
        offer = data.offers.find(o => o.id === id) || offer;
    }
    document.getElementById("generic-modal-title").innerText = id ? "تعديل العرض" : "إضافة عرض جديد";
    document.getElementById("generic-modal-body").innerHTML = `
        <form onsubmit="saveOfferSubmit(event, '${id || ''}')">
            <div class="form-group"><label>عنوان العرض</label><input type="text" id="off-title" value="${offer.title}" required></div>
            <div class="form-group"><label>الوجهة</label><input type="text" id="off-dest" value="${offer.destination}" required></div>
            <div class="form-group"><label>الوصف</label><textarea id="off-desc" rows="3" required>${offer.description}</textarea></div>
            <div class="form-row">
                <div class="form-group"><label>السعر</label><input type="number" id="off-price" value="${offer.price}" required></div>
                <div class="form-group"><label>العملة</label><input type="text" id="off-curr" value="${offer.currency}" required></div>
            </div>
            <div class="form-group"><label>رابط الصورة</label><input type="text" id="off-img" value="${offer.image}" required></div>
            <div class="form-submit-container"><button type="submit" class="btn btn-primary">حفظ</button></div>
        </form>
    `;
    document.getElementById("generic-item-modal").style.display = "flex";
}

function saveOfferSubmit(event, id) {
    event.preventDefault();
    const data = getAppData();
    const item = {
        id: id || `offer-${Date.now()}`,
        title: document.getElementById("off-title").value,
        destination: document.getElementById("off-dest").value,
        description: document.getElementById("off-desc").value,
        price: document.getElementById("off-price").value,
        currency: document.getElementById("off-curr").value,
        image: document.getElementById("off-img").value,
        hidden: false
    };
    if (id) {
        const idx = data.offers.findIndex(o => o.id === id);
        if (idx !== -1) data.offers[idx] = item;
    } else {
        data.offers.push(item);
    }
    saveAppData(data);
    closeGenericModal();
    renderAdminOffers();
    renderAllFrontend();
    showToast("تم الحفظ بنجاح", "success");
}

function toggleOfferHide(id) {
    const data = getAppData();
    const o = data.offers.find(x => x.id === id);
    if (o) {
        o.hidden = !o.hidden;
        saveAppData(data);
        renderAdminOffers();
        renderAllFrontend();
        showToast("تم تغيير حالة الظهور", "success");
    }
}

function deleteOffer(id) {
    if (!confirm("هل أنت متأكد من الحذف؟")) return;
    const data = getAppData();
    data.offers = data.offers.filter(o => o.id !== id);
    saveAppData(data);
    renderAdminOffers();
    renderAllFrontend();
    showToast("تم الحذف بنجاح", "success");
}

/* Admin CRUD: Services */
function renderAdminServices() {
    const data = getAppData();
    const list = document.getElementById("admin-services-list");
    if (!list) return;
    list.innerHTML = data.services.map(s => `
        <div class="admin-list-row">
            <img src="${s.image}" alt="">
            <div class="admin-list-info">
                <h4><i class="fa-solid ${s.icon}"></i> ${s.title}</h4>
                <p>${s.description} | الحالة: ${s.hidden ? 'مخفي' : 'ظاهر'}</p>
            </div>
            <div class="admin-list-actions">
                <button class="btn btn-secondary btn-sm" onclick="openServiceModal('${s.id}')">تعديل</button>
                <button class="btn btn-secondary btn-sm" onclick="toggleServiceHide('${s.id}')">${s.hidden ? 'إظهار' : 'إخفاء'}</button>
                <button class="btn btn-danger btn-sm" onclick="deleteService('${s.id}')">حذف</button>
            </div>
        </div>
    `).join('');
}

function openServiceModal(id = null) {
    const data = getAppData();
    let s = { title: '', description: '', icon: 'fa-plane', image: '', hidden: false };
    if (id) s = data.services.find(x => x.id === id) || s;
    document.getElementById("generic-modal-title").innerText = id ? "تعديل الخدمة" : "إضافة خدمة جديدة";
    document.getElementById("generic-modal-body").innerHTML = `
        <form onsubmit="saveServiceSubmit(event, '${id || ''}')">
            <div class="form-group"><label>عنوان الخدمة</label><input type="text" id="srv-title" value="${s.title}" required></div>
            <div class="form-group"><label>الوصف</label><textarea id="srv-desc" rows="3" required>${s.description}</textarea></div>
            <div class="form-group"><label>أيقونة FontAwesome (مثال: fa-hotel)</label><input type="text" id="srv-icon" value="${s.icon}" required></div>
            <div class="form-group"><label>رابط الصورة</label><input type="text" id="srv-img" value="${s.image}" required></div>
            <div class="form-submit-container"><button type="submit" class="btn btn-primary">حفظ</button></div>
        </form>
    `;
    document.getElementById("generic-item-modal").style.display = "flex";
}

function saveServiceSubmit(event, id) {
    event.preventDefault();
    const data = getAppData();
    const item = {
        id: id || `serv-${Date.now()}`,
        title: document.getElementById("srv-title").value,
        description: document.getElementById("srv-desc").value,
        icon: document.getElementById("srv-icon").value,
        image: document.getElementById("srv-img").value,
        hidden: false
    };
    if (id) {
        const idx = data.services.findIndex(x => x.id === id);
        if (idx !== -1) data.services[idx] = item;
    } else {
        data.services.push(item);
    }
    saveAppData(data);
    closeGenericModal();
    renderAdminServices();
    renderAllFrontend();
    showToast("تم الحفظ بنجاح", "success");
}

function toggleServiceHide(id) {
    const data = getAppData();
    const s = data.services.find(x => x.id === id);
    if (s) { s.hidden = !s.hidden; saveAppData(data); renderAdminServices(); renderAllFrontend(); showToast("تم التحديث", "success"); }
}

function deleteService(id) {
    if (!confirm("هل أنت متأكد من الحذف؟")) return;
    const data = getAppData();
    data.services = data.services.filter(x => x.id !== id);
    saveAppData(data);
    renderAdminServices();
    renderAllFrontend();
    showToast("تم الحذف", "success");
}

/* Admin CRUD: Airlines */
function renderAdminAirlines() {
    const data = getAppData();
    const list = document.getElementById("admin-airlines-list");
    if (!list) return;
    list.innerHTML = data.airlines.map(a => `
        <div class="admin-list-row">
            <img src="${a.logo}" alt="">
            <div class="admin-list-info">
                <h4>${a.name}</h4>
                <p>الحالة: ${a.hidden ? 'مخفي' : 'ظاهر'}</p>
            </div>
            <div class="admin-list-actions">
                <button class="btn btn-secondary btn-sm" onclick="openAirlineModal('${a.id}')">تعديل</button>
                <button class="btn btn-secondary btn-sm" onclick="toggleAirlineHide('${a.id}')">${a.hidden ? 'إظهار' : 'إخفاء'}</button>
                <button class="btn btn-danger btn-sm" onclick="deleteAirline('${a.id}')">حذف</button>
            </div>
        </div>
    `).join('');
}

function openAirlineModal(id = null) {
    const data = getAppData();
    let a = { name: '', logo: '', hidden: false };
    if (id) a = data.airlines.find(x => x.id === id) || a;
    document.getElementById("generic-modal-title").innerText = id ? "تعديل شركة الطيران" : "إضافة شركة طيران";
    document.getElementById("generic-modal-body").innerHTML = `
        <form onsubmit="saveAirlineSubmit(event, '${id || ''}')">
            <div class="form-group"><label>اسم الشركة</label><input type="text" id="air-name" value="${a.name}" required></div>
            <div class="form-group"><label>رابط الشعار (Logo)</label><input type="text" id="air-logo" value="${a.logo}" required></div>
            <div class="form-submit-container"><button type="submit" class="btn btn-primary">حفظ</button></div>
        </form>
    `;
    document.getElementById("generic-item-modal").style.display = "flex";
}

function saveAirlineSubmit(event, id) {
    event.preventDefault();
    const data = getAppData();
    const item = {
        id: id || `air-${Date.now()}`,
        name: document.getElementById("air-name").value,
        logo: document.getElementById("air-logo").value,
        hidden: false
    };
    if (id) {
        const idx = data.airlines.findIndex(x => x.id === id);
        if (idx !== -1) data.airlines[idx] = item;
    } else {
        data.airlines.push(item);
    }
    saveAppData(data);
    closeGenericModal();
    renderAdminAirlines();
    renderAllFrontend();
    showToast("تم الحفظ بنجاح", "success");
}

function toggleAirlineHide(id) {
    const data = getAppData();
    const a = data.airlines.find(x => x.id === id);
    if (a) { a.hidden = !a.hidden; saveAppData(data); renderAdminAirlines(); renderAllFrontend(); showToast("تم التحديث", "success"); }
}

function deleteAirline(id) {
    if (!confirm("هل أنت متأكد من الحذف؟")) return;
    const data = getAppData();
    data.airlines = data.airlines.filter(x => x.id !== id);
    saveAppData(data);
    renderAdminAirlines();
    renderAllFrontend();
    showToast("تم الحذف", "success");
}

/* Admin CRUD: Airports */
function renderAdminAirports() {
    const data = getAppData();
    const list = document.getElementById("admin-airports-list");
    if (!list) return;
    list.innerHTML = data.airports.map(apt => `
        <div class="admin-list-row">
            <div class="admin-list-info">
                <h4>${apt.code} - ${apt.name}</h4>
            </div>
            <div class="admin-list-actions">
                <button class="btn btn-secondary btn-sm" onclick="openAirportModal('${apt.id}')">تعديل</button>
                <button class="btn btn-danger btn-sm" onclick="deleteAirport('${apt.id}')">حذف</button>
            </div>
        </div>
    `).join('');
}

function openAirportModal(id = null) {
    const data = getAppData();
    let apt = { code: '', name: '' };
    if (id) apt = data.airports.find(x => x.id === id) || apt;
    document.getElementById("generic-modal-title").innerText = id ? "تعديل المطار" : "إضافة مطار جديد";
    document.getElementById("generic-modal-body").innerHTML = `
        <form onsubmit="saveAirportSubmit(event, '${id || ''}')">
            <div class="form-group"><label>رمز المطار (مثال: ALG)</label><input type="text" id="apt-code" value="${apt.code}" required></div>
            <div class="form-group"><label>اسم المطار الكامل</label><input type="text" id="apt-name" value="${apt.name}" required></div>
            <div class="form-submit-container"><button type="submit" class="btn btn-primary">حفظ</button></div>
        </form>
    `;
    document.getElementById("generic-item-modal").style.display = "flex";
}

function saveAirportSubmit(event, id) {
    event.preventDefault();
    const data = getAppData();
    const item = {
        id: id || `apt-${Date.now()}`,
        code: document.getElementById("apt-code").value,
        name: document.getElementById("apt-name").value
    };
    if (id) {
        const idx = data.airports.findIndex(x => x.id === id);
        if (idx !== -1) data.airports[idx] = item;
    } else {
        data.airports.push(item);
    }
    saveAppData(data);
    closeGenericModal();
    renderAdminAirports();
    showToast("تم الحفظ بنجاح", "success");
}

function deleteAirport(id) {
    if (!confirm("هل أنت متأكد من الحذف؟")) return;
    const data = getAppData();
    data.airports = data.airports.filter(x => x.id !== id);
    saveAppData(data);
    renderAdminAirports();
    showToast("تم الحذف", "success");
}

/* Admin CRUD: YouTube */
function renderAdminYoutube() {
    const data = getAppData();
    const list = document.getElementById("admin-youtube-list");
    if (!list) return;
    list.innerHTML = data.youtube.map(y => `
        <div class="admin-list-row">
            <div class="admin-list-info">
                <h4>${y.title}</h4>
                <p>${y.description} | الحالة: ${y.hidden ? 'مخفي' : 'ظاهر'}</p>
            </div>
            <div class="admin-list-actions">
                <button class="btn btn-secondary btn-sm" onclick="openYoutubeModal('${y.id}')">تعديل</button>
                <button class="btn btn-secondary btn-sm" onclick="toggleYoutubeHide('${y.id}')">${y.hidden ? 'إظهار' : 'إخفاء'}</button>
                <button class="btn btn-danger btn-sm" onclick="deleteYoutube('${y.id}')">حذف</button>
            </div>
        </div>
    `).join('');
}

function openYoutubeModal(id = null) {
    const data = getAppData();
    let y = { title: '', description: '', url: '', hidden: false };
    if (id) y = data.youtube.find(x => x.id === id) || y;
    document.getElementById("generic-modal-title").innerText = id ? "تعديل الفيديو" : "إضافة فيديو جديد";
    document.getElementById("generic-modal-body").innerHTML = `
        <form onsubmit="saveYoutubeSubmit(event, '${id || ''}')">
            <div class="form-group"><label>عنوان الفيديو</label><input type="text" id="yt-title" value="${y.title}" required></div>
            <div class="form-group"><label>الوصف</label><textarea id="yt-desc" rows="2" required>${y.description}</textarea></div>
            <div class="form-group"><label>رابط التضمين Embed URL</label><input type="text" id="yt-url" value="${y.url}" required></div>
            <div class="form-submit-container"><button type="submit" class="btn btn-primary">حفظ</button></div>
        </form>
    `;
    document.getElementById("generic-item-modal").style.display = "flex";
}

function saveYoutubeSubmit(event, id) {
    event.preventDefault();
    const data = getAppData();
    const item = {
        id: id || `yt-${Date.now()}`,
        title: document.getElementById("yt-title").value,
        description: document.getElementById("yt-desc").value,
        url: document.getElementById("yt-url").value,
        hidden: false
    };
    if (id) {
        const idx = data.youtube.findIndex(x => x.id === id);
        if (idx !== -1) data.youtube[idx] = item;
    } else {
        data.youtube.push(item);
    }
    saveAppData(data);
    closeGenericModal();
    renderAdminYoutube();
    renderAllFrontend();
    showToast("تم الحفظ بنجاح", "success");
}

function toggleYoutubeHide(id) {
    const data = getAppData();
    const y = data.youtube.find(x => x.id === id);
    if (y) { y.hidden = !y.hidden; saveAppData(data); renderAdminYoutube(); renderAllFrontend(); showToast("تم التحديث", "success"); }
}

function deleteYoutube(id) {
    if (!confirm("هل أنت متأكد من الحذف؟")) return;
    const data = getAppData();
    data.youtube = data.youtube.filter(x => x.id !== id);
    saveAppData(data);
    renderAdminYoutube();
    renderAllFrontend();
    showToast("تم الحذف", "success");
}

/* Admin CRUD: Gallery */
function renderAdminGallery() {
    const data = getAppData();
    const list = document.getElementById("admin-gallery-list");
    if (!list) return;
    list.innerHTML = data.gallery.map(g => `
        <div class="admin-list-row">
            <img src="${g.url}" alt="">
            <div class="admin-list-info">
                <h4>${g.caption}</h4>
                <p>الحالة: ${g.hidden ? 'مخفي' : 'ظاهر'}</p>
            </div>
            <div class="admin-list-actions">
                <button class="btn btn-secondary btn-sm" onclick="openGalleryModal('${g.id}')">تعديل</button>
                <button class="btn btn-secondary btn-sm" onclick="toggleGalleryHide('${g.id}')">${g.hidden ? 'إظهار' : 'إخفاء'}</button>
                <button class="btn btn-danger btn-sm" onclick="deleteGallery('${g.id}')">حذف</button>
            </div>
        </div>
    `).join('');
}

function openGalleryModal(id = null) {
    const data = getAppData();
    let g = { caption: '', url: '', hidden: false };
    if (id) g = data.gallery.find(x => x.id === id) || g;
    document.getElementById("generic-modal-title").innerText = id ? "تعديل الصورة" : "إضافة صورة جديدة";
    document.getElementById("generic-modal-body").innerHTML = `
        <form onsubmit="saveGallerySubmit(event, '${id || ''}')">
            <div class="form-group"><label>وصف الصورة (Caption)</label><input type="text" id="gal-cap" value="${g.caption}" required></div>
            <div class="form-group"><label>رابط الصورة</label><input type="text" id="gal-url" value="${g.url}" required></div>
            <div class="form-submit-container"><button type="submit" class="btn btn-primary">حفظ</button></div>
        </form>
    `;
    document.getElementById("generic-item-modal").style.display = "flex";
}

function saveGallerySubmit(event, id) {
    event.preventDefault();
    const data = getAppData();
    const item = {
        id: id || `gal-${Date.now()}`,
        caption: document.getElementById("gal-cap").value,
        url: document.getElementById("gal-url").value,
        hidden: false
    };
    if (id) {
        const idx = data.gallery.findIndex(x => x.id === id);
        if (idx !== -1) data.gallery[idx] = item;
    } else {
        data.gallery.push(item);
    }
    saveAppData(data);
    closeGenericModal();
    renderAdminGallery();
    renderAllFrontend();
    showToast("تم الحفظ بنجاح", "success");
}

function toggleGalleryHide(id) {
    const data = getAppData();
    const g = data.gallery.find(x => x.id === id);
    if (g) { g.hidden = !g.hidden; saveAppData(data); renderAdminGallery(); renderAllFrontend(); showToast("تم التحديث", "success"); }
}

function deleteGallery(id) {
    if (!confirm("هل أنت متأكد من الحذف؟")) return;
    const data = getAppData();
    data.gallery = data.gallery.filter(x => x.id !== id);
    saveAppData(data);
    renderAdminGallery();
    renderAllFrontend();
    showToast("تم الحذف", "success");
}

function closeGenericModal() {
    document.getElementById("generic-item-modal").style.display = "none";
}

/* Admin Settings */
function loadAdminSettings() {
    const data = getAppData();
    document.getElementById("set-company-ar").value = data.settings.companyAr;
    document.getElementById("set-company-en").value = data.settings.companyEn;
    document.getElementById("set-phone").value = data.settings.phone;
    document.getElementById("set-email").value = data.settings.email;
    document.getElementById("set-whatsapp").value = data.settings.whatsapp;
    document.getElementById("set-address").value = data.settings.address;
}

function saveSettings(event) {
    event.preventDefault();
    const data = getAppData();
    data.settings.companyAr = document.getElementById("set-company-ar").value;
    data.settings.companyEn = document.getElementById("set-company-en").value;
    data.settings.phone = document.getElementById("set-phone").value;
    data.settings.email = document.getElementById("set-email").value;
    data.settings.whatsapp = document.getElementById("set-whatsapp").value;
    data.settings.address = document.getElementById("set-address").value;

    const currP = document.getElementById("set-curr-pass").value;
    const newP = document.getElementById("set-new-pass").value;
    const confP = document.getElementById("set-confirm-pass").value;

    if (newP || currP || confP) {
        if (currP !== data.settings.adminPass) {
            showToast("كلمة المرور الحالية غير صحيحة", "error");
            return;
        }
        if (newP !== confP) {
            showToast("كلمتا المرور الجديدتان غير متطابقتين", "error");
            return;
        }
        data.settings.adminPass = newP;
        data.settings.isDefaultPass = false;
        showToast("تم تحديث كلمة المرور بنجاح", "success");
    }

    saveAppData(data);
    renderAllFrontend();
    showToast("تم حفظ الإعدادات بنجاح", "success");
}

function exportBackupFile() {
    const data = getAppData();
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'ofoq_travel_backup.json';
    a.click();
    showToast("تم تصدير النسخة الاحتياطية بنجاح", "success");
}

function importBackupFile(event) {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const imported = JSON.parse(e.target.result);
            if (imported && imported.settings) {
                saveAppData(imported);
                renderAllFrontend();
                loadAdminSettings();
                renderAdminDashboard();
                showToast("تم استعادة النسخة الاحتياطية بنجاح", "success");
            } else {
                showToast("ملف النسخة الاحتياطية غير صالح", "error");
            }
        } catch (err) {
            console.error(err);
            showToast("خطأ في قراءة ملف JSON", "error");
        }
    };
    reader.readAsText(file);
}

function resetWebsiteData() {
    if (!confirm("تحذير: سيتم إعادة ضبط كافة بيانات الموقع والإعدادات والحجوزات إلى القيم الافتراضية. هل أنت متأكد؟")) return;
    localStorage.removeItem("ofoq_data");
    localStorage.removeItem("ofoq_initialized");
    initDatabase();
    renderAllFrontend();
    loadAdminSettings();
    renderAdminDashboard();
    showToast("تم إعادة ضبط المصنع بنجاح", "success");
}
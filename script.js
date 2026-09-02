/* Ofoq Travel Local SPA & Admin Core Engine */

const DEFAULT_SETTINGS = {
    companyAr: "أفق للطيران",
    companyEn: "Ofoq Travel",
    phone: "+213564694879",
    email: "travelofoq@gmail.com",
    whatsapp: "+213564694879",
    address: "الجزائر العاصمة، الجزائر",
    hours: "السبت - الخميس: 9:00 صباحاً - 9:00 مساءً",
    adminPass: "ofoq2026admin",
    passChanged: false
};

const DEFAULT_OFFERS = [
    { id: "off-1", title: "رحلة اسطنبول الساحرة", desc: "استمتع بجمال البوسفور وأبرز معالم اسطنبول التاريخية.", price: "450", currency: "$", img: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=600&q=80", destination: "اسطنبول، تركيا" },
    { id: "off-2", title: "عطلة دبي الفاخرة", desc: "تسوق واستمتع بأروع المغامرات في دانة العالم دبي.", price: "680", currency: "$", img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80", destination: "دبي، الإمارات" },
    { id: "off-3", title: "استكشاف باريس المدينة الساحرة", desc: "زور برج إيفل واستمتع بالثقافة الفرنسية الراقية.", price: "790", currency: "$", img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=600&q=80", destination: "باريس، فرنسا" }
];

const DEFAULT_SERVICES = [
    { id: "srv-1", title: "حجز تذاكر الطيران", desc: "حجوزات فورية ومؤكدة على جميع الخطوط الجوية العالمية والمحلية.", icon: "fa-plane" },
    { id: "srv-2", title: "حجز الفنادق الفاخرة", desc: "أفضل المنتجعات والفنادق حول العالم بأسعار تنافسية وحصرية.", icon: "fa-hotel" },
    { id: "srv-3", title: "الجولات السياحية", desc: "برامج سياحية متكاملة مع مرشدين سياحيين محترفين وخدمة ممتازة.", icon: "fa-map-marked-alt" }
];

const DEFAULT_AIRLINES = [
    { id: "air-1", name: "الخطوط الجوية الجزائرية", code: "AH", logo: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=150&q=80" },
    { id: "air-2", name: "الخطوط التركية", code: "TK", logo: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=150&q=80" },
    { id: "air-3", name: "الخطوط القطرية", code: "QR", logo: "https://images.unsplash.com/photo-1500835556837-99ac94a94552?auto=format&fit=crop&w=150&q=80" },
    { id: "air-4", name: "طيران الامارات", code: "EK", logo: "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&w=150&q=80" }
];

const DEFAULT_AIRPORTS = [
    { id: "apt-1", name: "مطار هواري بومدين الدولي (ALG)", city: "الجزائر العاصمة" },
    { id: "apt-2", name: "مطار اسطنبول الدولي (IST)", city: "اسطنبول" },
    { id: "apt-3", name: "مطار دبي الدولي (DXB)", city: "دبي" },
    { id: "apt-4", name: "مطار حمد الدولي (DOH)", city: "الدوحة" }
];

const DEFAULT_YOUTUBE = [
    { id: "yt-1", title: "تجربة سفر متميزة مع أفق للطيران", url: "https://www.youtube.com/embed/dQw4w9WgXcQ", desc: "جولة مصورة تظهر خدماتنا الفاخرة على متن الطائرة." },
    { id: "yt-2", title: "أجمل الوجهات السياحية لعام 2026", url: "https://www.youtube.com/embed/dQw4w9WgXcQ", desc: "استكشف أبرز الأماكن التي ننصح بزيارتها هذا العام." }
];

const DEFAULT_GALLERY = [
    { id: "gal-1", title: "اسطنبول", img: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=600&q=80" },
    { id: "gal-2", title: "دبي", img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80" },
    { id: "gal-3", title: "باريس", img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=600&q=80" },
    { id: "gal-4", title: "طائرة أفق", img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80" }
];

function initAppStorage() {
    try {
        if (!localStorage.getItem('ofoq_settings')) localStorage.setItem('ofoq_settings', JSON.stringify(DEFAULT_SETTINGS));
        if (!localStorage.getItem('ofoq_offers')) localStorage.setItem('ofoq_offers', JSON.stringify(DEFAULT_OFFERS));
        if (!localStorage.getItem('ofoq_services')) localStorage.setItem('ofoq_services', JSON.stringify(DEFAULT_SERVICES));
        if (!localStorage.getItem('ofoq_airlines')) localStorage.setItem('ofoq_airlines', JSON.stringify(DEFAULT_AIRLINES));
        if (!localStorage.getItem('ofoq_airports')) localStorage.setItem('ofoq_airports', JSON.stringify(DEFAULT_AIRPORTS));
        if (!localStorage.getItem('ofoq_youtube')) localStorage.setItem('ofoq_youtube', JSON.stringify(DEFAULT_YOUTUBE));
        if (!localStorage.getItem('ofoq_gallery')) localStorage.setItem('ofoq_gallery', JSON.stringify(DEFAULT_GALLERY));
        if (!localStorage.getItem('ofoq_bookings')) localStorage.setItem('ofoq_bookings', JSON.stringify([]));
    } catch (e) {
        showToast("خطأ في تهيئة التخزين المحلي", "error");
    }
}

function showToast(message, type = 'success') {
    const container = document.getElementById('toast-container');
    if (!container) return;
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `<i class="fa-solid ${type === 'success' ? 'fa-circle-check' : 'fa-triangle-exclamation'}"></i> <span>${message}</span>`;
    container.appendChild(toast);
    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 300);
    }, 3500);
}

function setupSPARouting() {
    const links = document.querySelectorAll('[data-section]');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetSec = link.getAttribute('data-section');
            if (!targetSec) return;
            e.preventDefault();
            
            document.getElementById('mobile-sidebar').classList.remove('active');
            document.getElementById('mobile-overlay').classList.remove('active');

            document.querySelectorAll('.section').forEach(sec => {
                sec.classList.remove('active-section');
            });
            const targetEl = document.getElementById(targetSec);
            if (targetEl) {
                targetEl.classList.add('active-section');
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }

            document.querySelectorAll('.nav-link').forEach(nl => {
                if(!nl.classList.contains('booking-highlight')) nl.classList.remove('active');
            });
            if (link.classList.contains('nav-link')) {
                link.classList.add('active');
            }
        });
    });
}

function renderFrontend() {
    try {
        const settings = JSON.parse(localStorage.getItem('ofoq_settings'));
        if (settings) {
            document.getElementById('brand-title').innerText = settings.companyAr;
            document.getElementById('footer-brand').innerText = settings.companyAr;
            document.getElementById('hero-whatsapp-btn').href = `https://wa.me/${settings.whatsapp.replace(/\D/g,'')}`;
            document.getElementById('c-phone').innerText = settings.phone;
            document.getElementById('c-email').innerText = settings.email;
            document.getElementById('c-whatsapp').innerText = settings.whatsapp;
            document.getElementById('c-address').innerText = settings.address;
            document.getElementById('c-hours').innerText = settings.hours;
            document.getElementById('footer-phone-text').innerText = `الهاتف: ${settings.phone}`;
        }

        const offers = JSON.parse(localStorage.getItem('ofoq_offers')) || [];
        const offersGrid = document.getElementById('offers-grid');
        if (offersGrid) {
            offersGrid.innerHTML = offers.map(o => `
                <div class="card">
                    <img src="${o.img}" alt="${o.title}">
                    <div class="card-body">
                        <h3 class="card-title">${o.title}</h3>
                        <p class="card-desc">${o.desc}</p>
                        <div class="card-footer">
                            <span class="price-tag">${o.price} ${o.currency}</span>
                            <button class="btn btn-primary" onclick="quickBookOffer('${o.title}')">احجز الآن</button>
                        </div>
                    </div>
                </div>
            `).join('');
        }

        const services = JSON.parse(localStorage.getItem('ofoq_services')) || [];
        const servicesGrid = document.getElementById('services-grid');
        if (servicesGrid) {
            servicesGrid.innerHTML = services.map(s => `
                <div class="card">
                    <div class="card-body" style="text-align: center; padding: 30px;">
                        <i class="fa-solid ${s.icon || 'fa-plane'}" style="font-size: 36px; color: var(--accent-sky); margin-bottom: 15px;"></i>
                        <h3 class="card-title">${s.title}</h3>
                        <p class="card-desc">${s.desc}</p>
                    </div>
                </div>
            `).join('');
        }

        const airlines = JSON.parse(localStorage.getItem('ofoq_airlines')) || [];
        const airlinesGrid = document.getElementById('airlines-grid');
        if (airlinesGrid) {
            airlinesGrid.innerHTML = airlines.map(a => `
                <div class="airline-card">
                    <img src="${a.logo}" alt="${a.name}">
                    <h4>${a.name}</h4>
                    <span style="font-size:12px; color:var(--text-muted);">رمز: ${a.code}</span>
                </div>
            `).join('');
        }
        const airlineDatalist = document.getElementById('airlines-datalist');
        if (airlineDatalist) {
            airlineDatalist.innerHTML = airlines.map(a => `<option value="${a.name} (${a.code})">`).join('');
        }

        const airports = JSON.parse(localStorage.getItem('ofoq_airports')) || [];
        const airportDatalist = document.getElementById('airports-datalist');
        if (airportDatalist) {
            airportDatalist.innerHTML = airports.map(ap => `<option value="${ap.name} - ${ap.city}">`).join('');
        }

        const gallery = JSON.parse(localStorage.getItem('ofoq_gallery')) || [];
        const galleryGrid = document.getElementById('gallery-grid');
        if (galleryGrid) {
            galleryGrid.innerHTML = gallery.map(g => `
                <div class="gallery-item">
                    <img src="${g.img}" alt="${g.title}">
                </div>
            `).join('');
        }

        const youtube = JSON.parse(localStorage.getItem('ofoq_youtube')) || [];
        const youtubeGrid = document.getElementById('youtube-grid');
        if (youtubeGrid) {
            youtubeGrid.innerHTML = youtube.map(y => `
                <div class="card">
                    <div style="position:relative; padding-bottom:56.25%; height:0; overflow:hidden;">
                        <iframe src="${y.url}" style="position:absolute; top:0; left:0; width:100%; height:100%; border:0;" allowfullscreen></iframe>
                    </div>
                    <div class="card-body">
                        <h3 class="card-title">${y.title}</h3>
                        <p class="card-desc">${y.desc}</p>
                    </div>
                </div>
            `).join('');
        }
    } catch (e) {
        showToast("خطأ في تحديث واجهة المستخدم", "error");
    }
}

function quickBookOffer(title) {
    document.querySelectorAll('.section').forEach(sec => sec.classList.remove('active-section'));
    document.getElementById('booking').classList.add('active-section');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const notesInput = document.getElementById('b-notes');
    if (notesInput) {
        notesInput.value = `حجز خاص عرض: ${title}`;
    }
}

function setupMobileMenu() {
    const hamburger = document.getElementById('hamburger-btn');
    const sidebar = document.getElementById('mobile-sidebar');
    const overlay = document.getElementById('mobile-overlay');
    const closeBtn = document.getElementById('sidebar-close');

    if (hamburger && sidebar && overlay) {
        hamburger.addEventListener('click', () => {
            sidebar.classList.add('active');
            overlay.classList.add('active');
        });
        closeBtn.addEventListener('click', () => {
            sidebar.classList.remove('active');
            overlay.classList.remove('active');
        });
        overlay.addEventListener('click', () => {
            sidebar.classList.remove('active');
            overlay.classList.remove('active');
        });
    }
}

function setupDynamicBookingForm() {
    const addFlightBtn = document.getElementById('add-flight-btn');
    const flightsContainer = document.getElementById('flights-container');
    
    if (addFlightBtn && flightsContainer) {
        addFlightBtn.addEventListener('click', () => {
            const flightCount = flightsContainer.querySelectorAll('.flight-item-box').length + 1;
            const div = document.createElement('div');
            div.className = 'flight-item-box';
            div.style.cssText = "background: rgba(0,0,0,0.15); padding: 15px; border-radius: 8px; margin-bottom: 15px; border: 1px solid var(--border-color);";
            div.innerHTML = `
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                    <span style="font-weight: 700; color: var(--accent-gold);">الرحلة رقم ${flightCount}</span>
                    <button type="button" class="btn btn-danger remove-flight-btn" style="padding: 2px 8px; font-size: 12px;"><i class="fa-solid fa-trash"></i> حذف</button>
                </div>
                <div class="form-grid">
                    <div class="form-group">
                        <label>شركة الطيران</label>
                        <input type="text" class="form-control f-airline" list="airlines-datalist" placeholder="مثال: Turkish Airlines, TK" required>
                    </div>
                    <div class="form-group">
                        <label>رقم الرحلة</label>
                        <input type="text" class="form-control f-flight-num" placeholder="مثال: TK651" required>
                    </div>
                    <div class="form-group">
                        <label>مطار / مدينة المغادرة</label>
                        <input type="text" class="form-control f-dep-airport" list="airports-datalist" placeholder="مثال: الجزائر (ALG)" required>
                    </div>
                    <div class="form-group">
                        <label>مطار / مدينة الوصول</label>
                        <input type="text" class="form-control f-arr-airport" list="airports-datalist" placeholder="مثال: اسطنبول (IST)" required>
                    </div>
                    <div class="form-group">
                        <label>تاريخ المغادرة</label>
                        <input type="date" class="form-control f-dep-date" required>
                    </div>
                    <div class="form-group">
                        <label>تاريخ العودة (إن وجد)</label>
                        <input type="date" class="form-control f-arr-date">
                    </div>
                    <div class="form-group">
                        <label>الدرجة</label>
                        <input type="text" class="form-control f-class" placeholder="مثال: Economy / Business" value="Economy">
                    </div>
                    <div class="form-group">
                        <label>المقعد المفضل (اختياري)</label>
                        <input type="text" class="form-control f-seat" placeholder="مثال: 12A">
                    </div>
                </div>
            `;
            div.querySelector('.remove-flight-btn').addEventListener('click', () => {
                div.remove();
            });
            flightsContainer.appendChild(div);
        });
    }

    const addPassengerBtn = document.getElementById('add-passenger-btn');
    const passengersContainer = document.getElementById('passengers-container');

    if (addPassengerBtn && passengersContainer) {
        addPassengerBtn.addEventListener('click', () => {
            const passCount = passengersContainer.querySelectorAll('.passenger-item-box').length + 1;
            const div = document.createElement('div');
            div.className = 'passenger-item-box';
            div.style.cssText = "background: rgba(0,0,0,0.15); padding: 15px; border-radius: 8px; margin-bottom: 15px; border: 1px solid var(--border-color);";
            div.innerHTML = `
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                    <span style="font-weight: 700; color: var(--accent-gold);">المسافر رقم ${passCount}</span>
                    <button type="button" class="btn btn-danger remove-pass-btn" style="padding: 2px 8px; font-size: 12px;"><i class="fa-solid fa-trash"></i> حذف</button>
                </div>
                <div class="form-grid">
                    <div class="form-group">
                        <label>اسم العميل الكامل</label>
                        <input type="text" class="form-control p-cust-name" placeholder="الاسم الثلاثي" required>
                    </div>
                    <div class="form-group">
                        <label>رقم الهاتف</label>
                        <input type="text" class="form-control p-phone" placeholder="+213..." required>
                    </div>
                    <div class="form-group">
                        <label>البريد الإلكتروني</label>
                        <input type="email" class="form-control p-email" placeholder="example@gmail.com" required>
                    </div>
                    <div class="form-group">
                        <label>رقم جواز السفر</label>
                        <input type="text" class="form-control p-passport" placeholder="رقم الجواز" required>
                    </div>
                    <div class="form-group">
                        <label>الجنسية</label>
                        <input type="text" class="form-control p-nationality" placeholder="مثال: جزائري" required>
                    </div>
                    <div class="form-group">
                        <label>نوع المسافر/label>
                        <input type="text" class="form-control p-pass-count" value="بالغ">
                    </div>
                </div>
            `;
            div.querySelector('.remove-pass-btn').addEventListener('click', () => {
                div.remove();
            });
            passengersContainer.appendChild(div);
        });
    }

    const form = document.getElementById('booking-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        try {
            const bookings = JSON.parse(localStorage.getItem('ofoq_bookings')) || [];
            const nextIdNum = bookings.length + 1;
            const bookingId = `OFQ-2026-${String(nextIdNum).padStart(4, '0')}`;

            const tripType = document.querySelector('input[name="tripType"]:checked').value;
            
            // Collect all flights
            const flightBoxes = document.querySelectorAll('.flight-item-box');
            const flightsData = [];
            flightBoxes.forEach((box, idx) => {
                flightsData.push({
                    index: idx + 1,
                    airline: box.querySelector('.f-airline').value,
                    flightNum: box.querySelector('.f-flight-num').value,
                    depAirport: box.querySelector('.f-dep-airport').value,
                    arrAirport: box.querySelector('.f-arr-airport').value,
                    depDate: box.querySelector('.f-dep-date').value,
                    arrDate: box.querySelector('.f-arr-date').value,
                    ticketClass: box.querySelector('.f-class').value,
                    seat: box.querySelector('.f-seat').value
                });
            });

            // Collect all passengers
            const passBoxes = document.querySelectorAll('.passenger-item-box');
            const passengersData = [];
            passBoxes.forEach((box, idx) => {
                passengersData.push({
                    index: idx + 1,
                    custName: box.querySelector('.p-cust-name').value,
                    phone: box.querySelector('.p-phone').value,
                    email: box.querySelector('.p-email').value,
                    passport: box.querySelector('.p-passport').value,
                    nationality: box.querySelector('.p-nationality').value,
                    passCount: box.querySelector('.p-pass-count').value
                });
            });

            const notes = document.getElementById('b-notes').value;

            const primaryCust = passengersData[0] ? passengersData[0].custName : 'عميل';
            const primaryPhone = passengersData[0] ? passengersData[0].phone : '';
            const primaryEmail = passengersData[0] ? passengersData[0].email : '';
            const primaryAirline = flightsData[0] ? flightsData[0].airline : '';
            const primaryDep = flightsData[0] ? flightsData[0].depAirport : '';
            const primaryArr = flightsData[0] ? flightsData[0].arrAirport : '';
            const primaryDate = flightsData[0] ? flightsData[0].depDate : '';

            const newBooking = {
                id: bookingId,
                tripType,
                flights: flightsData,
                passengers: passengersData,
                custName: primaryCust,
                phone: primaryPhone,
                email: primaryEmail,
                airline: primaryAirline,
                flightNum: flightsData.map(f => f.flightNum).join(', '),
                depAirport: primaryDep,
                arrAirport: primaryArr,
                depDate: primaryDate,
                notes,
                status: 'جديد',
                dateCreated: new Date().toLocaleDateString()
            };

            bookings.push(newBooking);
            localStorage.setItem('ofoq_bookings', JSON.stringify(bookings));

            const settings = JSON.parse(localStorage.getItem('ofoq_settings'));
            const waNumber = settings ? settings.whatsapp.replace(/\D/g,'') : '213564694879';

let passengersText = passengersData.map(p => 
    `👤 *المسافر ${p.index}:* ${p.custName}\n` +
    `📞 *الهاتف:* ${p.phone}\n` +
    `📧 *البريد:* ${p.email}\n` +
    `🛂 *الجواز:* ${p.passport} (${p.nationality})\n` +
`🎫 *نوع المسافر:* ${
    p.passCount === 'adult_male' ? 'بالغ (ذكر)' :
    p.passCount === 'adult_female' ? 'بالغ (أنثى)' :
    p.passCount === 'child_male' ? 'طفل (ذكر)' :
    p.passCount === 'child_female' ? 'طفل (أنثى)' :
    p.passCount === 'infant_male' ? 'رضيع (ذكر)' :
    p.passCount === 'infant_female' ? 'رضيع (أنثى)' : 'بالغ (ذكر)'
}`
).join('\n\n');
let flightsText = flightsData.map(f => 
    `✈️ *الرحلة ${f.index}:* ${f.airline}\n` +
    `🛫 *مطار المغادرة:* ${f.depAirport}\n` +
    `📅 *تاريخ المغادرة:* ${f.depDate}\n` +
    `🛬 *مطار الوصول:* ${f.arrAirport}\n` +
    `📅 *تاريخ العودة:* ${f.arrDate || 'غير متوفر'}\n` +
    `💺 *الدرجة والمقعد:* ${f.ticketClass} / ${f.seat || 'عشوائي'}`
).join('\n\n');
            const waMessage = encodeURIComponent(
                `✈️ *طلب حجز جديد - أفق للطيران*\n\n` +
                `📌 *رقم الحجز:* ${bookingId}\n` +
                `🛫 *نوع الرحلة:* ${tripType}\n\n` +
                `--- *بيانات المسافرين* ---\n` +
                passengersText + `\n\n` +
                `--- *بيانات الرحلات* ---\n` +
                flightsText + `\n\n` +
                `📝 *ملاحظات:* ${notes || 'لا توجد'}`
            );

            showToast(`تم حفظ الحجز بنجاح برقم: ${bookingId}`);
            form.reset();

            window.open(`https://wa.me/${waNumber}?text=${waMessage}`, '_blank');
        } catch (err) {
            showToast("حدث خطأ أثناء معالجة الحجز", "error");
        }
    });
}

function setupAdminAuth() {
    const triggerBtn = document.getElementById('admin-trigger-btn');
    const loginModal = document.getElementById('admin-login-modal');
    const closeLogin = document.getElementById('close-login-modal');
    const loginForm = document.getElementById('admin-login-form');
    const passInput = document.getElementById('admin-pass-input');
    const adminPanel = document.getElementById('admin-panel');
    const closePanel = document.getElementById('admin-close-panel');
    const logoutBtn = document.getElementById('admin-logout-btn');
    const changePassModal = document.getElementById('admin-change-pass-modal');
    const firstPassForm = document.getElementById('admin-first-pass-form');

    if (triggerBtn) {
        triggerBtn.addEventListener('click', () => {
            if (sessionStorage.getItem('ofoq_admin_logged') === 'true') {
                adminPanel.classList.add('active');
                renderAdminDashboard();
            } else {
                loginModal.classList.add('active');
            }
        });
    }

    if (closeLogin) closeLogin.addEventListener('click', () => loginModal.classList.remove('active'));
    if (closePanel) closePanel.addEventListener('click', () => adminPanel.classList.remove('active'));

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const settings = JSON.parse(localStorage.getItem('ofoq_settings'));
            if (passInput.value === settings.adminPass) {
                loginModal.classList.remove('active');
                passInput.value = '';
                if (!settings.passChanged) {
                    changePassModal.classList.add('active');
                } else {
                    sessionStorage.setItem('ofoq_admin_logged', 'true');
                    adminPanel.classList.add('active');
                    renderAdminDashboard();
                    showToast("تم تسجيل الدخول بنجاح");
                }
            } else {
                showToast("كلمة المرور غير صحيحة", "error");
            }
        });
    }

    if (firstPassForm) {
        firstPassForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const p1 = document.getElementById('new-pass-1').value;
            const p2 = document.getElementById('new-pass-2').value;
            if (p1 !== p2) {
                showToast("كلمتا المرور غير متطابقتين", "error");
                return;
            }
            const settings = JSON.parse(localStorage.getItem('ofoq_settings'));
            settings.adminPass = p1;
            settings.passChanged = true;
            localStorage.setItem('ofoq_settings', JSON.stringify(settings));
            changePassModal.classList.remove('active');
            sessionStorage.setItem('ofoq_admin_logged', 'true');
            adminPanel.classList.add('active');
            renderAdminDashboard();
            showToast("تم تغيير كلمة المرور ودخول لوحة الإدارة بنجاح");
        });
    }

    if (logoutBtn) {
        logoutBtn.addEventListener('click', (e) => {
            e.preventDefault();
            sessionStorage.removeItem('ofoq_admin_logged');
            adminPanel.classList.remove('active');
            showToast("تم تسجيل الخروج بنجاح");
        });
    }

    const adminTabs = document.querySelectorAll('.admin-tab-link');
    adminTabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            e.preventDefault();
            const targetTab = tab.getAttribute('data-tab');
            document.querySelectorAll('.admin-tab-pane').forEach(p => p.classList.remove('active'));
            document.querySelectorAll('.admin-tab-link').forEach(l => l.classList.remove('active'));
            tab.classList.add('active');
            const pane = document.getElementById(`tab-${targetTab}`);
            if (pane) pane.classList.add('active');
            renderAdminTabContent(targetTab);
        });
    });
}

function renderAdminDashboard() {
    const bookings = JSON.parse(localStorage.getItem('ofoq_bookings')) || [];
    const offers = JSON.parse(localStorage.getItem('ofoq_offers')) || [];
    const services = JSON.parse(localStorage.getItem('ofoq_services')) || [];
    const airlines = JSON.parse(localStorage.getItem('ofoq_airlines')) || [];
    const airports = JSON.parse(localStorage.getItem('ofoq_airports')) || [];
    const youtube = JSON.parse(localStorage.getItem('ofoq_youtube')) || [];
    const gallery = JSON.parse(localStorage.getItem('ofoq_gallery')) || [];

    document.getElementById('badge-bookings').innerText = bookings.length;

    const statsContainer = document.getElementById('admin-stats-container');
    if (statsContainer) {
        statsContainer.innerHTML = `
            <div class="admin-stat-box"><h4>إجمالي الحجوزات</h4><span>${bookings.length}</span></div>
            <div class="admin-stat-box"><h4>العروض المتاحة</h4><span>${offers.length}</span></div>
            <div class="admin-stat-box"><h4>الخدمات</h4><span>${services.length}</span></div>
            <div class="admin-stat-box"><h4>شركاء الطيران</h4><span>${airlines.length}</span></div>
            <div class="admin-stat-box"><h4>المطارات</h4><span>${airports.length}</span></div>
            <div class="admin-stat-box"><h4>الفيديوهات</h4><span>${youtube.length}</span></div>
            <div class="admin-stat-box"><h4>صور المعرض</h4><span>${gallery.length}</span></div>
        `;
    }
    renderAdminTabContent('dashboard');
}

function renderAdminTabContent(tabName) {
    if (tabName === 'bookings') {
        renderAdminBookings();
    } else if (tabName === 'offers') {
        renderAdminCrudList('ofoq_offers', 'admin-offers-list');
    } else if (tabName === 'services') {
        renderAdminCrudList('ofoq_services', 'admin-services-list');
    } else if (tabName === 'airlines') {
        renderAdminCrudList('ofoq_airlines', 'admin-airlines-list');
    } else if (tabName === 'airports') {
        renderAdminCrudList('ofoq_airports', 'admin-airports-list');
    } else if (tabName === 'youtube') {
        renderAdminCrudList('ofoq_youtube', 'admin-youtube-list');
    } else if (tabName === 'gallery') {
        renderAdminCrudList('ofoq_gallery', 'admin-gallery-list');
    } else if (tabName === 'settings') {
        loadSettingsForm();
    }
}

function renderAdminBookings() {
    const bookings = JSON.parse(localStorage.getItem('ofoq_bookings')) || [];
    const tbody = document.getElementById('bookings-tbody');
    if (!tbody) return;

    tbody.innerHTML = bookings.map((b, idx) => `
        <tr>
            <td>${b.id}</td>
            <td>${b.custName}</td>
            <td>${b.phone}</td>
            <td>${b.airline}</td>
            <td>${b.depAirport} ➔ ${b.arrAirport}</td>
            <td>${b.depDate}</td>
            <td><span style="color:var(--accent-gold);">${b.status}</span></td>
            <td>
                <button class="btn btn-secondary" style="padding:5px 10px; font-size:12px;" onclick="deleteBooking(${idx})"><i class="fa-solid fa-trash"></i></button>
            </td>
        </tr>
    `).join('');
}

function deleteBooking(idx) {
    if (confirm("هل أنت متأكد من حذف هذا الحجز؟")) {
        let bookings = JSON.parse(localStorage.getItem('ofoq_bookings')) || [];
        bookings.splice(idx, 1);
        localStorage.setItem('ofoq_bookings', JSON.stringify(bookings));
        renderAdminBookings();
        showToast("تم حذف الحجز بنجاح");
    }
}

function renderAdminCrudList(storageKey, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    const items = JSON.parse(localStorage.getItem(storageKey)) || [];

    container.innerHTML = items.map((item, idx) => `
        <div class="admin-item-card">
            <h4 style="color:var(--accent-gold);">${item.title || item.name || 'عنصر'}</h4>
            <p style="font-size:13px; color:var(--text-muted);">${item.desc || item.city || item.destination || item.code || ''}</p>
            <div class="admin-item-actions">
                <button class="btn btn-secondary" style="padding:5px 10px; font-size:12px;" onclick="openEditModal('${storageKey}', ${idx})"><i class="fa-solid fa-pen"></i> تعديل</button>
                <button class="btn btn-danger" style="padding:5px 10px; font-size:12px;" onclick="deleteAdminItem('${storageKey}', ${idx})"><i class="fa-solid fa-trash"></i> حذف</button>
            </div>
        </div>
    `).join('');
}

function deleteAdminItem(key, idx) {
    if (confirm("هل تريد حذف هذا العنصر نهائياً؟")) {
        let items = JSON.parse(localStorage.getItem(key)) || [];
        items.splice(idx, 1);
        localStorage.setItem(key, JSON.stringify(items));
        renderAdminTabContent(key.replace('ofoq_', ''));
        renderFrontend();
        showToast("تم الحذف بنجاح");
    }
}

function setupGenericModal() {
    const modal = document.getElementById('generic-item-modal');
    const closeBtn = document.getElementById('close-generic-modal');
    if (closeBtn) closeBtn.addEventListener('click', () => modal.classList.remove('active'));

    document.getElementById('add-offer-btn')?.addEventListener('click', () => openAddModal('ofoq_offers', 'عرض'));
    document.getElementById('add-service-btn')?.addEventListener('click', () => openAddModal('ofoq_services', 'خدمة'));
    document.getElementById('add-airline-btn')?.addEventListener('click', () => openAddModal('ofoq_airlines', 'شركة طيران'));
    document.getElementById('add-airport-btn')?.addEventListener('click', () => openAddModal('ofoq_airports', 'مطار'));
    document.getElementById('add-youtube-btn')?.addEventListener('click', () => openAddModal('ofoq_youtube', 'فيديو'));
    document.getElementById('add-gallery-btn')?.addEventListener('click', () => openAddModal('ofoq_gallery', 'صورة'));
}

let activeModalContext = { key: '', index: -1 };

function openAddModal(key, name) {
    activeModalContext = { key, index: -1 };
    document.getElementById('generic-modal-title').innerText = `إضافة ${name} جديدة`;
    buildGenericForm(key, {});
    document.getElementById('generic-item-modal').classList.add('active');
}

function openEditModal(key, idx) {
    activeModalContext = { key, index: idx };
    const items = JSON.parse(localStorage.getItem(key)) || [];
    document.getElementById('generic-modal-title').innerText = `تعديل العنصر`;
    buildGenericForm(key, items[idx]);
    document.getElementById('generic-item-modal').classList.add('active');
}

function buildGenericForm(key, data) {
    const container = document.getElementById('generic-form-fields');
    let html = '';

    if (key === 'ofoq_offers') {
        html = `
            <div class="form-group"><label>العنوان</label><input type="text" id="m-title" class="form-control" value="${data.title || ''}" required></div>
            <div class="form-group"><label>الوجهة</label><input type="text" id="m-destination" class="form-control" value="${data.destination || ''}" required></div>
            <div class="form-group"><label>السعر</label><input type="text" id="m-price" class="form-control" value="${data.price || ''}" required></div>
            <div class="form-group"><label>العملة</label><input type="text" id="m-currency" class="form-control" value="${data.currency || '$'}" required></div>
            <div class="form-group"><label>رابط الصورة (URL)</label><input type="text" id="m-img" class="form-control" value="${data.img || ''}" required></div>
            <div class="form-group"><label>الوصف</label><textarea id="m-desc" class="form-control">${data.desc || ''}</textarea></div>
        `;
    } else if (key === 'ofoq_services') {
        html = `
            <div class="form-group"><label>عنوان الخدمة</label><input type="text" id="m-title" class="form-control" value="${data.title || ''}" required></div>
            <div class="form-group"><label>أيقونة FontAwesome</label><input type="text" id="m-icon" class="form-control" value="${data.icon || 'fa-plane'}" required></div>
            <div class="form-group"><label>الوصف</label><textarea id="m-desc" class="form-control">${data.desc || ''}</textarea></div>
        `;
    } else if (key === 'ofoq_airlines') {
        html = `
            <div class="form-group"><label>اسم الشركة</label><input type="text" id="m-name" class="form-control" value="${data.name || ''}" required></div>
            <div class="form-group"><label>رمز الشركة (Code)</label><input type="text" id="m-code" class="form-control" value="${data.code || ''}" required></div>
            <div class="form-group"><label>رابط الشعار (Logo URL)</label><input type="text" id="m-logo" class="form-control" value="${data.logo || ''}" required></div>
        `;
    } else if (key === 'ofoq_airports') {
        html = `
            <div class="form-group"><label>اسم المطار</label><input type="text" id="m-name" class="form-control" value="${data.name || ''}" required></div>
            <div class="form-group"><label>المدينة</label><input type="text" id="m-city" class="form-control" value="${data.city || ''}" required></div>
        `;
    } else if (key === 'ofoq_youtube') {
        html = `
            <div class="form-group"><label>عنوان الفيديو</label><input type="text" id="m-title" class="form-control" value="${data.title || ''}" required></div>
            <div class="form-group"><label>رابط تضمين يوتيوب (Embed URL)</label><input type="text" id="m-url" class="form-control" value="${data.url || ''}" required></div>
            <div class="form-group"><label>الوصف</label><textarea id="m-desc" class="form-control">${data.desc || ''}</textarea></div>
        `;
    } else if (key === 'ofoq_gallery') {
        html = `
            <div class="form-group"><label>عنوان الصورة</label><input type="text" id="m-title" class="form-control" value="${data.title || ''}" required></div>
            <div class="form-group"><label>رابط الصورة (URL)</label><input type="text" id="m-img" class="form-control" value="${data.img || ''}" required></div>
        `;
    }

    container.innerHTML = html;

    const form = document.getElementById('generic-item-form');
    form.onsubmit = (e) => {
        e.preventDefault();
        let items = JSON.parse(localStorage.getItem(key)) || [];
        let newItem = {};

        if (key === 'ofoq_offers') {
            newItem = {
                id: activeModalContext.index >= 0 ? items[activeModalContext.index].id : 'off-' + Date.now(),
                title: document.getElementById('m-title').value,
                destination: document.getElementById('m-destination').value,
                price: document.getElementById('m-price').value,
                currency: document.getElementById('m-currency').value,
                img: document.getElementById('m-img').value,
                desc: document.getElementById('m-desc').value
            };
        } else if (key === 'ofoq_services') {
            newItem = {
                id: activeModalContext.index >= 0 ? items[activeModalContext.index].id : 'srv-' + Date.now(),
                title: document.getElementById('m-title').value,
                icon: document.getElementById('m-icon').value,
                desc: document.getElementById('m-desc').value
            };
        } else if (key === 'ofoq_airlines') {
            newItem = {
                id: activeModalContext.index >= 0 ? items[activeModalContext.index].id : 'air-' + Date.now(),
                name: document.getElementById('m-name').value,
                code: document.getElementById('m-code').value,
                logo: document.getElementById('m-logo').value
            };
        } else if (key === 'ofoq_airports') {
            newItem = {
                id: activeModalContext.index >= 0 ? items[activeModalContext.index].id : 'apt-' + Date.now(),
                name: document.getElementById('m-name').value,
                city: document.getElementById('m-city').value
            };
        } else if (key === 'ofoq_youtube') {
            newItem = {
                id: activeModalContext.index >= 0 ? items[activeModalContext.index].id : 'yt-' + Date.now(),
                title: document.getElementById('m-title').value,
                url: document.getElementById('m-url').value,
                desc: document.getElementById('m-desc').value
            };
        } else if (key === 'ofoq_gallery') {
            newItem = {
                id: activeModalContext.index >= 0 ? items[activeModalContext.index].id : 'gal-' + Date.now(),
                title: document.getElementById('m-title').value,
                img: document.getElementById('m-img').value
            };
        }

        if (activeModalContext.index >= 0) {
            items[activeModalContext.index] = newItem;
        } else {
            items.push(newItem);
        }

        localStorage.setItem(key, JSON.stringify(items));
        document.getElementById('generic-item-modal').classList.remove('active');
        renderAdminTabContent(key.replace('ofoq_', ''));
        renderFrontend();
        showToast("تم الحفظ بنجاح");
    };
}

function loadSettingsForm() {
    const settings = JSON.parse(localStorage.getItem('ofoq_settings'));
    if (!settings) return;
    document.getElementById('set-company-ar').value = settings.companyAr;
    document.getElementById('set-company-en').value = settings.companyEn;
    document.getElementById('set-phone').value = settings.phone;
    document.getElementById('set-email').value = settings.email;
    document.getElementById('set-whatsapp').value = settings.whatsapp;
    document.getElementById('set-address').value = settings.address;
    document.getElementById('set-hours').value = settings.hours;

    const form = document.getElementById('settings-form');
    form.onsubmit = (e) => {
        e.preventDefault();
        const currPass = document.getElementById('set-curr-pass').value;
        const newPass = document.getElementById('set-new-pass').value;
        const confirmPass = document.getElementById('set-confirm-pass').value;

        if (newPass && newPass !== confirmPass) {
            showToast("كلمات المرور الجديدة غير متطابقة", "error");
            return;
        }

        if (currPass && currPass !== settings.adminPass) {
            showToast("كلمة المرور الحالية غير صحيحة", "error");
            return;
        }

        settings.companyAr = document.getElementById('set-company-ar').value;
        settings.companyEn = document.getElementById('set-company-en').value;
        settings.phone = document.getElementById('set-phone').value;
        settings.email = document.getElementById('set-email').value;
        settings.whatsapp = document.getElementById('set-whatsapp').value;
        settings.address = document.getElementById('set-address').value;
        settings.hours = document.getElementById('set-hours').value;

        if (newPass) {
            settings.adminPass = newPass;
        }

        localStorage.setItem('ofoq_settings', JSON.stringify(settings));
        renderFrontend();
        showToast("تم حفظ الإعدادات بنجاح");
    };
}

function setupBackupAndReset() {
    document.getElementById('export-backup-btn')?.addEventListener('click', () => {
        const backupData = {
            settings: JSON.parse(localStorage.getItem('ofoq_settings')),
            offers: JSON.parse(localStorage.getItem('ofoq_offers')),
            services: JSON.parse(localStorage.getItem('ofoq_services')),
            airlines: JSON.parse(localStorage.getItem('ofoq_airlines')),
            airports: JSON.parse(localStorage.getItem('ofoq_airports')),
            youtube: JSON.parse(localStorage.getItem('ofoq_youtube')),
            gallery: JSON.parse(localStorage.getItem('ofoq_gallery')),
            bookings: JSON.parse(localStorage.getItem('ofoq_bookings'))
        };
        const blob = new Blob([JSON.stringify(backupData, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `ofoq-travel-backup-${Date.now()}.json`;
        a.click();
        showToast("تم تصدير النسخة الاحتياطية بنجاح");
    });

    const importBtn = document.getElementById('import-backup-btn');
    const importFile = document.getElementById('import-backup-file');
    if (importBtn && importFile) {
        importBtn.addEventListener('click', () => importFile.click());
        importFile.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (!file) return;
            const reader = new FileReader();
            reader.onload = (event) => {
                try {
                    const data = JSON.parse(event.target.result);
                    if (data.settings) localStorage.setItem('ofoq_settings', JSON.stringify(data.settings));
                    if (data.offers) localStorage.setItem('ofoq_offers', JSON.stringify(data.offers));
                    if (data.services) localStorage.setItem('ofoq_services', JSON.stringify(data.services));
                    if (data.airlines) localStorage.setItem('ofoq_airlines', JSON.stringify(data.airlines));
                    if (data.airports) localStorage.setItem('ofoq_airports', JSON.stringify(data.airports));
                    if (data.youtube) localStorage.setItem('ofoq_youtube', JSON.stringify(data.youtube));
                    if (data.gallery) localStorage.setItem('ofoq_gallery', JSON.stringify(data.gallery));
                    if (data.bookings) localStorage.setItem('ofoq_bookings', JSON.stringify(data.bookings));

                    renderFrontend();
                    showToast("تمت استعادة النسخة الاحتياطية بنجاح");
                } catch (err) {
                    showToast("ملف النسخة الاحتياطية غير صالح", "error");
                }
            };
            reader.readAsText(file);
        });
    }

    document.getElementById('reset-defaults-btn')?.addEventListener('click', () => {
        if (confirm("تحذير: هل أنت متأكد تماماً من إعادة ضبط المصنع ومسح كافة تعديلاتك؟")) {
            localStorage.clear();
            initAppStorage();
            renderFrontend();
            renderAdminDashboard();
            showToast("تم إرجاع الموقع لحالته الافتراضية بنجاح");
        }
    });

    document.getElementById('export-csv-btn')?.addEventListener('click', () => {
        const bookings = JSON.parse(localStorage.getItem('ofoq_bookings')) || [];
        let csvContent = "data:text/csv;charset=utf-8,\uFEFF" + "BookingID,Customer,Phone,Airline,Flight,Departure,Arrival,Date\n";
        bookings.forEach(b => {
            csvContent += `${b.id},"${b.custName}",${b.phone},"${b.airline}",${b.flightNum},"${b.depAirport}","${b.arrAirport}",${b.depDate}\n`;
        });
        const encodedUri = encodeURI(csvContent);
        const link = document.createElement('a');
        link.setAttribute('href', encodedUri);
        link.setAttribute('download', `ofoq-bookings-${Date.now()}.csv`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        showToast("تم تصدير الحجوزات إلى ملف CSV بنجاح");
    });
}

document.addEventListener('DOMContentLoaded', () => {
    initAppStorage();
    setupSPARouting();
    setupMobileMenu();
    setupDynamicBookingForm();
    setupAdminAuth();
    setupGenericModal();
    setupBackupAndReset();
    renderFrontend();
});
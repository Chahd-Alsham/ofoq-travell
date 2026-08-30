/* ================= CONFIGURATION & STATE ================= */
const DEFAULT_STATE = {
    settings: {
        companyName: "أفق للطيران",
        whatsapp: "966500000000",
        logoUrl: "",
        adminPass: "admin123"
    },
    services: [
        { id: 1, title: "حجز تذاكر الطيران", desc: "حجز تذاكر لجميع الوجهات وشركات الطيران العالمية.", img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80" },
        { id: 2, title: "تنظيم الرحلات السياحية", desc: "برامج سياحية متكاملة ومصممة خصيصاً لراحتك.", img: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=600&q=80" },
        { id: 3, title: "حجوزات الفنادق", desc: "أفضل الفنادق العالمية بأسعار تنافسية وخيارات فاخرة.", img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80" },
        { id: 4, title: "رحلات رجال الأعمال", desc: "خدمات سفر مخصصة لتلبية احتياجات الشركات ورجال الأعمال.", img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=80" }
    ],
    destinations: [
        { id: 1, country: "المملكة العربية السعودية", city: "الرياض", desc: "استكشف العاصمة ومعالمها السياحية والتراثية.", img: "https://images.unsplash.com/photo-1586724237569-f3d0c11fd1ef?auto=format&fit=crop&w=600&q=80" },
        { id: 2, country: "الإمارات العربية المتحدة", city: "دبي", desc: "تجربة تسوق وترفيه لا تُنسى في درة الخليج.", img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80" },
        { id: 3, country: "تركيا", city: "إسطنبول", desc: "مزيج ساحر بين حضارات الشرق والغرب.", img: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=600&q=80" },
        { id: 4, country: "فرنسا", city: "باريس", desc: "عاصمة النور والجمال والفن الراقي.", img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=600&q=80" }
    ],
    offers: [
        { id: 1, title: "عرض الصيف المميز إلى إسطنبول", desc: "شامل تذاكر الطيران والإقامة الفندقية لمدة 5 ليالٍ.", price: "2500 ريال", img: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=600&q=80" },
        { id: 2, title: "رحلة رجال الأعمال الفاخرة", desc: "خدمة VIP كاملة مع استقبال ودعم خاص.", price: "4200 ريال", img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=80" }
    ],
    gallery: [
        "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1500835556837-99ac94a94552?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1506012787146-f92b2d7ed6d9?auto=format&fit=crop&w=600&q=80"
    ],
    faq: [
        { q: "كيف يمكنني حجز رحلتي عبر أفق للطيران؟", a: "يمكنك ملء نموذج خطط لرحلتك مباشرة وسيتواصل معك فريقنا أو يفتح واتساب بالبيانات بكل سهولة." },
        { q: "هل تتوفر عروض خاصة للعائلات؟", a: "نعم، نقدم باقات سفر عائلية مصممة خصيصاً لتوفير أقصى درجات الراحة والتوفير." }
    ],
    requests: []
};

let appState = JSON.parse(localStorage.getItem('ofoq_state')) || DEFAULT_STATE;

function saveState() {
    localStorage.setItem('ofoq_state', JSON.stringify(appState));
    showToast();
}

function showToast() {
    const toast = document.getElementById('toast');
    toast.style.display = 'block';
    setTimeout(() => { toast.style.display = 'none'; }, 3000);
}

/* ================= RENDERING PUBLIC WEBSITE ================= */
function renderPublicWebsite() {
    document.getElementById('company-name-text').innerText = appState.settings.companyName;
    document.title = `${appState.settings.companyName} | الموقع الرسمي`;
    const logoImg = document.getElementById('company-logo');
    if (appState.settings.logoUrl) {
        logoImg.src = appState.settings.logoUrl;
        logoImg.style.display = 'inline-block';
        document.getElementById('company-name-text').style.display = 'none';
    } else {
        logoImg.style.display = 'none';
        document.getElementById('company-name-text').style.display = 'block';
    }

    document.getElementById('floatingWhatsapp').href = `https://wa.me/${appState.settings.whatsapp}`;

    document.getElementById('services-grid').innerHTML = appState.services.map(s => `
        <div class="card">
            <img src="${s.img}" alt="${s.title}">
            <div class="card-body">
                <h4>${s.title}</h4>
                <p>${s.desc}</p>
                <a href="#booking-form" class="btn btn-sky btn-full">اطلب الخدمة</a>
            </div>
        </div>
    `).join('');

    document.getElementById('destinations-grid').innerHTML = appState.destinations.map(d => `
        <div class="card">
            <img src="${d.img}" alt="${d.city}">
            <div class="card-body">
                <h4>${d.city}, ${d.country}</h4>
                <p>${d.desc}</p>
                <a href="#booking-form" class="btn btn-gold btn-full">اكتشف الوجهة</a>
            </div>
        </div>
    `).join('');

    document.getElementById('offers-grid').innerHTML = appState.offers.map(o => `
        <div class="card">
            <img src="${o.img}" alt="${o.title}">
            <div class="card-body">
                <h4>${o.title}</h4>
                <p>${o.desc}</p>
                <p style="font-weight:bold; color:var(--sky-blue); margin-bottom:10px;">السعر يبدأ من: ${o.price}</p>
                <a href="#booking-form" class="btn btn-gold btn-full">احجز العرض</a>
            </div>
        </div>
    `).join('');

    document.getElementById('gallery-grid').innerHTML = appState.gallery.map(img => `
        <div class="card"><img src="${img}" style="height:250px;" alt="صورة المعرض"></div>
    `).join('');

    document.getElementById('faq-container').innerHTML = appState.faq.map((f, i) => `
        <div class="faq-item">
            <div class="faq-q" onclick="toggleFaq(${i})">${f.q} <i class="fas fa-chevron-down"></i></div>
            <div class="faq-a" id="faq-a-${i}">${f.a}</div>
        </div>
    `).join('');
}

function toggleFaq(index) {
    const ans = document.getElementById(`faq-a-${index}`);
    ans.style.display = ans.style.display === 'block' ? 'none' : 'block';
}

/* ================= TRAVEL REQUEST & WHATSAPP ================= */
document.getElementById('travelRequestForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const newReq = {
        id: 'REQ-' + Math.floor(1000 + Math.random() * 9000),
        date: new Date().toLocaleDateString(),
        name: document.getElementById('reqName').value,
        phone: document.getElementById('reqPhone').value,
        from: document.getElementById('reqFrom').value,
        to: document.getElementById('reqTo').value,
        tripType: document.getElementById('reqTripType').value,
        depDate: document.getElementById('reqDepDate').value,
        retDate: document.getElementById('reqRetDate').value || 'غير محدد (ذهاب فقط)',
        adults: document.getElementById('reqAdults').value,
        children: document.getElementById('reqChildren').value,
        infants: document.getElementById('reqInfants').value,
        transit: document.getElementById('reqTransit').value,
        cabin: document.getElementById('reqCabin').value,
        notes: document.getElementById('reqNotes').value || 'لا توجد ملاحظات',
        status: 'جديد'
    };

    appState.requests.unshift(newReq);
    localStorage.setItem('ofoq_state', JSON.stringify(appState));

    let msg = `طلب رحلة جديد – أفق للطيران%0A` +
              `الاسم: ${newReq.name}%0A` +
              `رقم الهاتف: ${newReq.phone}%0A` +
              `من: ${newReq.from}%0A` +
              `إلى: ${newReq.to}%0A` +
              `نوع الرحلة: ${newReq.tripType}%0A` +
              `تاريخ الذهاب: ${newReq.depDate}%0A`;
    if(newReq.retDate !== 'غير محدد (ذهاب فقط)') msg += `تاريخ العودة: ${newReq.retDate}%0A`;
    msg += `المسافرون (بالغين: ${newReq.adults}, أطفال: ${newReq.children}, رضع: ${newReq.infants})%0A` +
           `الترانزيت: ${newReq.transit}%0A` +
           `درجة السفر: ${newReq.cabin}%0A` +
           `ملاحظات: ${newReq.notes}`;

    window.open(`https://wa.me/${appState.settings.whatsapp}?text=${msg}`, '_blank');
    alert('تم إرسال الطلب وحفظه بنجاح وتوجيهك إلى واتساب!');
    this.reset();
});

/* ================= ADMIN DASHBOARD LOGIC ================= */
const adminModal = document.getElementById('adminLoginModal');
document.getElementById('openAdminLogin').addEventListener('click', (e) => {
    e.preventDefault();
    adminModal.style.display = 'flex';
});
document.getElementById('closeLoginModal').addEventListener('click', () => {
    adminModal.style.display = 'none';
});

document.getElementById('adminLoginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const user = document.getElementById('adminUser').value;
    const pass = document.getElementById('adminPass').value;

    if (user === 'admin' && pass === appState.settings.adminPass) {
        adminModal.style.display = 'none';
        document.getElementById('public-website').style.display = 'none';
        document.getElementById('admin-dashboard').style.display = 'flex';
        renderAdminDashboard();
    } else {
        alert('اسم المستخدم أو كلمة المرور غير صحيحة!');
    }
});

document.getElementById('adminLogoutBtn').addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('admin-dashboard').style.display = 'none';
    document.getElementById('public-website').style.display = 'block';
});

document.getElementById('backToWebsiteBtn').addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('admin-dashboard').style.display = 'none';
    document.getElementById('public-website').style.display = 'block';
    renderPublicWebsite();
});

// Admin Tabs Navigation
document.querySelectorAll('.admin-tab-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelectorAll('.admin-tab-link').forEach(l => l.classList.remove('active'));
        document.querySelectorAll('.admin-tab-content').forEach(c => c.classList.remove('active'));
        this.classList.add('active');
        document.getElementById(this.dataset.tab).classList.add('active');
    });
});

function renderAdminDashboard() {
    const reqTbody = document.querySelector('#adminRequestsTable tbody');
    if(appState.requests.length === 0) {
        reqTbody.innerHTML = `<tr><td colspan="7" class="text-center">لا توجد طلبات س申し込み حتى الآن</td></tr>`;
        return;
    }

    reqTbody.innerHTML = appState.requests.map((r, index) => `
        <tr>
            <td>${r.id}</td>
            <td>${r.date}</td>
            <td>${r.name}</td>
            <td>${r.phone}</td>
            <td>${r.from} -> ${r.to}</td>
            <td>
                <select onchange="updateRequestStatus(${index}, this.value)" style="padding:5px; border-radius:5px;">
                    <option value="جديد" ${r.status === 'جديد' ? 'selected' : ''}>جديد</option>
                    <option value="تم التواصل" ${r.status === 'تم التواصل' ? 'selected' : ''}>تم التواصل</option>
                    <option value="مكتمل" ${r.status === 'مكتمل' ? 'selected' : ''}>مكتمل</option>
                    <option value="ملغي" ${r.status === 'ملغي' ? 'selected' : ''}>ملغي</option>
                </select>
            </td>
            <td>
                <button class="btn btn-sky" onclick="viewRequestDetails(${index})" style="padding:5px 10px; font-size:0.8rem; margin-left:5px;">عرض التفاصيل</button>
                <button class="btn btn-gold" onclick="deleteRequest(${index})" style="padding:5px 10px; font-size:0.8rem; background:#dc3545; color:white;">حذف</button>
            </td>
        </tr>
    `).join('');

    document.getElementById('setCompanyName').value = appState.settings.companyName;
    document.getElementById('setWhatsapp').value = appState.settings.whatsapp;
    document.getElementById('setLogoUrl').value = appState.settings.logoUrl || '';
}

// Update Request Status
function updateRequestStatus(index, newStatus) {
    appState.requests[index].status = newStatus;
    localStorage.setItem('ofoq_state', JSON.stringify(appState));
    showToast();
}

// View Request Details Modal Functionality
const detailsModal = document.getElementById('requestDetailsModal');
document.getElementById('closeDetailsModal').addEventListener('click', () => { detailsModal.style.display = 'none'; });
document.getElementById('modalCloseBtn2').addEventListener('click', () => { detailsModal.style.display = 'none'; });

function viewRequestDetails(index) {
    const r = appState.requests[index];
    const contentBox = document.getElementById('requestDetailsContent');
    
    contentBox.innerHTML = `
        <p><strong>رقم الطلب:</strong> ${r.id}</p>
        <p><strong>تاريخ التقديم:</strong> ${r.date}</p>
        <hr style="margin: 10px 0; border:0; border-top:1px solid #eee;">
        <p><strong>اسم العميل:</strong> ${r.name}</p>
        <p><strong>رقم الهاتف / واتساب:</strong> ${r.phone}</p>
        <p><strong>مدينة المغادرة (من):</strong> ${r.from}</p>
        <p><strong>مدينة الوصول (إلى):</strong> ${r.to}</p>
        <p><strong>نوع الرحلة:</strong> ${r.tripType}</p>
        <p><strong>تاريخ الذهاب:</strong> ${r.depDate}</p>
        <p><strong>تاريخ العودة:</strong> ${r.retDate}</p>
        <p><strong>عدد المسافرين:</strong> بالغين (${r.adults}) | أطفال (${r.children}) | رضع (${r.infants})</p>
        <p><strong>تفضيل الترانزيت:</strong> ${r.transit}</p>
        <p><strong>درجة السفر:</strong> ${r.cabin}</p>
        <p><strong>ملاحظات العميل:</strong> ${r.notes}</p>
        <p><strong>حالة الطلب الحالية:</strong> <span style="color:var(--sky-blue); font-weight:bold;">${r.status}</span></p>
    `;

    // Configure WhatsApp button inside modal
    let msg = `مرحباً ${r.name}، بخصوص طلب سفرك رقم (${r.id}) من ${r.from} إلى ${r.to}...`;
    document.getElementById('modalOpenWhatsappBtn').onclick = function() {
        window.open(`https://wa.me/${r.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(msg)}`, '_blank');
    };

    detailsModal.style.display = 'flex';
}

function deleteRequest(index) {
    if(confirm('هل أنت متأكد من حذف هذا الطلب نهائياً؟')) {
        appState.requests.splice(index, 1);
        saveState();
        renderAdminDashboard();
    }
}

// Company Settings Form Save
document.getElementById('companySettingsForm').addEventListener('submit', function(e) {
    e.preventDefault();
    appState.settings.companyName = document.getElementById('setCompanyName').value;
    appState.settings.whatsapp = document.getElementById('setWhatsapp').value;
    appState.settings.logoUrl = document.getElementById('setLogoUrl').value;
    const newPass = document.getElementById('setNewPassword').value;
    if(newPass) appState.settings.adminPass = newPass;

    saveState();
    renderPublicWebsite();
});

// Quick Handlers
document.getElementById('addServiceBtn').addEventListener('click', () => {
    const title = prompt('عنوان الخدمة الجديدة:');
    if(!title) return;
    const desc = prompt('وصف الخدمة:');
    const img = prompt('رابط صورة الخدمة (URL):');
    appState.services.push({ id: Date.now(), title, desc, img });
    saveState();
});

document.getElementById('addDestinationBtn').addEventListener('click', () => {
    const country = prompt('الدولة:');
    if(!country) return;
    const city = prompt('المدينة:');
    const desc = prompt('الوصف:');
    const img = prompt('رابط الصورة (URL):');
    appState.destinations.push({ id: Date.now(), country, city, desc, img });
    saveState();
});

document.getElementById('uploadGalleryBtn').addEventListener('click', () => {
    const url = document.getElementById('newGalleryImgUrl').value;
    if(url) {
        appState.gallery.push(url);
        saveState();
        document.getElementById('newGalleryImgUrl').value = '';
    }
});

// Backup & Restore
document.getElementById('exportBackupBtn').addEventListener('click', () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(appState));
    const dlAnchor = document.createElement('a');
    dlAnchor.setAttribute("href", dataStr);
    dlAnchor.setAttribute("download", "ofoq_backup.json");
    document.body.appendChild(dlAnchor);
    dlAnchor.click();
    dlAnchor.remove();
});

document.getElementById('importBackupFile').addEventListener('change', function(e) {
    const file = e.target.files[0];
    if(!file) return;
    const reader = new FileReader();
    reader.onload = function(event) {
        try {
            appState = JSON.parse(event.target.result);
            saveState();
            renderPublicWebsite();
            alert('تم استيراد البيانات بنجاح!');
        } catch(err) {
            alert('ملف غير صالح!');
        }
    };
    reader.readAsText(file);
});

// Mobile Hamburger Menu
document.getElementById('hamburger').addEventListener('click', () => {
    document.getElementById('navMenu').classList.toggle('active');
});

// Initial Load
window.addEventListener('DOMContentLoaded', () => {
    renderPublicWebsite();
});
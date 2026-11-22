// بيانات الدكاترة الأساسيين وكتبهم
const doctorsList = [
{
    id: "doc_zainab",
    name: "د. زينب",
    role: "عضو هيئة تدريس - تكنولوجيا التعليم",
    initial: "ز",
    books: [
        {
            title: "المراجعة الأولى لمقرر د. زينب - شرح",
            file: "books/zainab-rev1-sharh.pdf"
        },
        {
            title: "المراجعة الأولى لمقرر د. زينب - أسئلة",
            file: "books/zainab-rev1-questions.pdf"
        },
        {
            title: "المراجعة الأولى لمقرر د. زينب - الإجابات",
            file: "books/zainab-rev1-answers.pdf"
        },
        {
            title: "محاضرة الدكتورة زينب - 25/10/2026",
            file: "books/zainab-lecture-2026-10-25.pdf"
        }
    ]
},
    {
    id: "doc_adham",
    name: "د. أدهم",
    role: "عضو هيئة تدريس - تكنولوجيا التعليم",
    initial: "أ",
    books: [
        {
            title: "محاضرة د. أدهم - 28/10/2026",
            file: "books/adham-lecture-2026-10-28.pdf"
        }
    ]
},
{
    id: "doc_aboulleil",
    name: "د. محمد أبو الليل",
    role: "عضو هيئة تدريس - تكنولوجيا التعليم",
    initial: "م",
    books: [
        {
            title: "المراجعة الاولى للدكتورة محمد ابو الليل ( شرح )",
            file: "books/aboulleil-sharh.pdf"
        },
        {
            title: "المراجعة الاولى للدكتورة محمد ابو الليل ( اسئلة واجابات )",
            file: "books/aboulleil-questions-assignments.pdf"
        }
    ]
},
{
    id: "doc_saoudi",
    name: "د. سعودي",
    role: "عضو هيئة تدريس - تكنولوجيا التعليم",
    initial: "س",
    books: [
        {
            title: "المراجعة الثانية مقرر د/ سعودي - شرح - الفصل الأول",
            file: "books/saoudi-sharh.pdf"
        },
        {
            title: "المراجعة الثانية مقرر د/ سعودي - أسئلة وواجبات",
            file: "books/saoudi-questions-assignments.pdf"
        },
        {
            title: "محاضرة دكتور سعودي - 25/10/2026",
            file: "books/saoudi-lecture-2026-10-25.pdf"
        }
    ]
},
 {
    id: "doc_amal",
    name: "د. أمل",
    role: "عضو هيئة تدريس - تكنولوجيا التعليم",
    initial: "أ",
    books: [
        {
            title: "المراجعة الأولى (شرح) - د. أمل",
            file: "books/amal-rev1-sharh.pdf"
        },
        {
            title: "المراجعة الأولى (أسئلة) - د. أمل",
            file: "books/amal-rev1-questions.pdf"
        },
        {
            title: "المراجعة الأولى (إجابات) - د. أمل",
            file: "books/amal-rev1-answers.pdf"
        },
        {
            title: "المراجعة الاولى مدخل إلى العلوم التربوية - شرح",
            file: "books/amal-oloom-sharh.pdf"
        },
        {
            title: " المراجعة الاولى مدخل إلى العلوم التربوية - أسئلة واجابات",
            file: "books/amal-oloom-questions-assignments.pdf"
        }
    ]
},
    {
        id: "doc_nisreen",
        name: "د. نسرين",
        role: "عضو هيئة تدريس - تكنولوجيا التعليم",
        initial: "ن",
        books: []
    },
{
    id: "doc_mamdouh",
    name: "د. ممدوح",
    role: "عضو هيئة تدريس - تكنولوجيا التعليم",
    initial: "م",
    books: [
        {
            title: "المراجعة الأولى د/ممدوح - شرح",
            file: "books/mamdouh-sharh.pdf"
        },
        {
            title: "المراجعة الأولى د/ممدوح - أسئلة وإجابات",
            file: "books/mamdouh-questions-answers.pdf"
        },
        {
            title: "المراجعة الثانية د/ممدوح - شرح حتى نهاية الفصل الأول",
            file: "books/mamdouh-rev2-sharh.pdf"
        },
        {
            title: "المراجعة الثانية د/ممدوح - أسئلة وإجابات حتى نهاية الفصل الأول",
            file: "books/mamdouh-rev2-questions-answers.pdf"
        },
        {
            title: "محاضرة د. ممدوح - 2026/11/4",
            file: "books/mamdouh-lecture-2026-11-04.pdf"
        },
        {
            title: "محاضرة د. ممدوح - الفصل السادس - الجزء الأول - 2026/12/18",
            file: "books/mamdouh-chapter-6-part-1-2026-12-18.pdf"
        }
    ]
},
];

// بيانات مقررات السكاشن وكتبها
const sectionsList = [
    {
        id: "sec_digital",
        title: "مصادر التعلم الرقمي",
        icon: "💻",
        desc: "تطبيقات عملية على تصميم وإنتاج مصادر التعلم الرقمية والتفاعلية.",
        books: []
    },
    {
        id: "sec_intro",
        title: "مدخل إلى تكنولوجيا التعليم",
        icon: "🎓",
        desc: "أساسيات ومفاهيم تكنولوجيا التعليم وتوظيف الوسائل التعليمية.",
        books: []
    },
    {
        id: "sec_camera",
        title: "أساسيات الكاميرا الرقمية",
        icon: "📷",
        desc: "التدريب العملي على إعدادات الكاميرا، الإضاءة، وزوايا التصوير.",
        books: []
    },
{
    id: "sec_comm",
    title: "مهارات التواصل",
    icon: "🗣️",
    desc: "تنمية مهارات العرض والتقديم والتواصل الفعال داخل البيئة التعليمية.",
    books: [
        {
            title: "شرح تحليل الجمهور - 2026/11/4",
            file: "books/communication-audience-analysis.jpg"
        },
        {
            title: "شرح قنوات الاتصال - 2026/11/11",
            file: "books/communication-communication-channels-2026-11-11.jpg"
        }
    ]
},
];

let currentSelectedItem = null;

// رسم كروت الدكاترة
const doctorsGrid = document.getElementById('doctorsGrid');
doctorsList.forEach(doc => {
    const card = document.createElement('div');
    card.className = 'doctor-card';
    card.onclick = () => requestPassword(doc, doc.name, `جميع الكتب والملفات الخاصة بـ ${doc.name}.`);
    card.innerHTML = `
        <div class="doc-avatar">${doc.initial}</div>
        <h3>${doc.name}</h3>
        <p>${doc.role}</p>
    `;
    doctorsGrid.appendChild(card);
});

// رسم كروت السكاشن
const sectionsGrid = document.getElementById('sectionsGrid');
sectionsList.forEach(sec => {
    const item = document.createElement('div');
    item.className = 'section-item';
    item.onclick = () => requestPassword(sec, `سكشن: ${sec.title}`, sec.desc);
    item.innerHTML = `
        <span class="icon">${sec.icon}</span>
        <h4>${sec.title}</h4>
    `;
    sectionsGrid.appendChild(item);
});

// فتح نافذة الباسورد
function requestPassword(itemData, title, desc) {
    currentSelectedItem = { itemData, title, desc };
    document.getElementById('passModalTitle').innerText = title;
    document.getElementById('passwordInput').value = '';
    document.getElementById('errorMsg').innerText = '';
    document.getElementById('passwordModal').style.display = 'flex';
    setTimeout(() => document.getElementById('passwordInput').focus(), 100);
}

// التحقق من كلمة السر من كائن PASSWORDS الموجود في password.js
function verifyPassword() {
    const enteredPass = document.getElementById('passwordInput').value.trim();
    const errorMsg = document.getElementById('errorMsg');

    if (!currentSelectedItem) return;

    const itemId = currentSelectedItem.itemData.id;
    const correctPass = typeof PASSWORDS !== "undefined" ? PASSWORDS[itemId] : null;

    if (correctPass && enteredPass === correctPass) {
        closeModal('passwordModal');
        openDetailsModal(currentSelectedItem.title, currentSelectedItem.desc, currentSelectedItem.itemData);
    } else {
        errorMsg.innerText = "كلمة المرور غير صحيحة! حاول مرة أخرى.";
        document.getElementById('passwordInput').value = '';
        document.getElementById('passwordInput').focus();
    }
}

function handleEnter(event) {
    if (event.key === "Enter") {
        verifyPassword();
    }
}

// فتح نافذة الكتب والملفات الموجودة في script.js
function openDetailsModal(title, desc, itemData) {
    document.getElementById('modalTitle').innerText = title;
    document.getElementById('modalDesc').innerText = desc;

    const fileListContainer = document.querySelector('#detailsModal .file-list');
    fileListContainer.innerHTML = '';

    const books = itemData.books || [];

    if (books.length > 0) {
        books.forEach(book => {
            const item = document.createElement('div');
            item.className = 'file-item';
            item.innerHTML = `
                <div class="file-info">
                    <h5>📘 ${book.title}</h5>
                    <span>كتاب PDF مباشر</span>
                </div>
                <div style="display: flex; gap: 8px;">
                    <a href="${book.file}" target="_blank" class="download-btn">قراءة 📖</a>
                    <a href="${book.file}" download class="download-btn">تحميل ⬇</a>
                </div>
            `;
            fileListContainer.appendChild(item);
        });
    } else {
        fileListContainer.innerHTML = `
            <div class="file-item">
                <div class="file-info">
                    <h5>لم يتم إضافة كتب بعد</h5>
                    <span>أضف الملفات داخل مصفوفة books في script.js</span>
                </div>
            </div>
        `;
    }

    document.getElementById('detailsModal').style.display = 'flex';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

function closeModalOnBg(e, modalId) {
    if (e.target.id === modalId) {
        closeModal(modalId);
    }
}

function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}
const translations = {
    en: {
        title: "Wesam Al-Tabbaa | AI Developer & Software Engineer",
        navHome: "Home", navAbout: "About", navExperience: "Experience", navSkills: "Skills",
        navProjects: "Projects", navAwards: "Awards", navCertificates: "Certificates", navContact: "Contact",
        greeting: "Hello,", myName: "Wesam Mohammed Al-Tabbaa",
        badgeRole: "AI Developer | Software Engineer", rolePrefix: "And I'm a", role: "AI Developer | Software Engineer",
        statHackathon: "GCC Hackathon Place", statCerts: "Certificates & Trainings", statProjects: "Shipped Projects",
        cv: "Download CV", aboutTitle: "About Me",
        aboutDesc: "A recent graduate from Arab Open University with a Bachelor of Computer Science, I completed a Software Development Internship at Emerging Business Technologies (EBTCO) in July 2026. During my time there, I contributed to cloud computing, full-stack prototyping, and product design, including leading the visitor UX design for a smart reception system and implementing bilingual interfaces and automated badge printing. My core competencies include user experience design, Microsoft Entra ID, dashboard development, and data visualization. I am motivated to apply my technical skills and academic foundation to develop innovative solutions, with a focus on creating intuitive and impactful digital experiences.",
        expTitle: "Professional Experience", exp1Role: "Software Development Intern — IT & Cybersecurity Dept.", viewCert: "View Certificate",
        exp1Desc: "Led visitor UX design for the Ain Smart Kiosk reception system (walk-in, pre-registered, VIP flows, RTL bilingual interface, and Zebra printer integration). Developed dynamic Help Desk Scorecard Dashboards and trained on Microsoft Azure (AZ-104) administration and LLM workflows.",
        viewRepo: "View Repository", skillsTitle: "Technical Skills", clickFlipHint: "Click / Tap to view details",
        projectsTitle: "Featured Projects", filterAll: "All", filterAI: "AI / ML", filterUX: "UI/UX & Kiosk", filterWeb: "Web App", filterData: "Data Science",
        viewProject: "View Project", tagAI: "AI Platform", tagData: "Data Science", tagDashboard: "Dashboard", tagKiosk: "UX / Kiosk", tagWeb: "Web App", tagFinTech: "AI & FinTech",
        proj1Desc: "Intelligent Career Guidance & Job Readiness platform connecting students with market needs using Python, Flask, and Google Gemini API, evaluated against CC2020 standards.",
        repoSoon: "Repository coming soon", projHassenTitle: "Hassen (حَصِين)",
        projHassenDesc: "AI-powered FinTech compliance and data privacy platform aligned with SAMA, ZATCA, and SDAIA PDPL regulations. Amd Hackathon Finalist at Tuwaiq Academy.",
        projDataTitle: "Literacy Rate Data Analysis", projDataDesc: "Exploratory data analysis of literacy rate trends across states, gender, and age groups using Python, Pandas, SQL (pandasql), and Seaborn.",
        projDashTitle: "Dynamic Help Desk Scorecard Dashboard", projDashDesc: "Interactive scorecard dashboard with real-time data visualization components, built during the EBTco internship for technical performance assessment.",
        projInvTitle: "InventoryAI — Supply Chain Strategy", projInvDesc: "An AI-assisted analytics tool that reviews stagnant inventory and suggests data-driven supply chain and marketing strategies.",
        projKioskTitle: "Ain Smart Kiosk", projKioskDesc: "Bilingual RTL reception kiosk covering walk-in, pre-registered, and VIP visitor flows, with Zebra printer integration.",
        proj3Title: "World Clock", proj3Desc: "An application that displays real-time clocks for multiple time zones.",
        proj4Title: "Weather App", proj4Desc: "A program that fetches and displays live weather data.",
        awardsTitle: "Awards & Honors", awardTitle: "1st Place Winner — Kuwait AI Hackathon", awardDesc: "Achieved 1st place across all participating teams from the Gulf Cooperation Council (GCC) countries (10/2025).",
        aouChampTitle: "Featured in AOU Champions 2026", aouChampDesc: "Featured in the 3rd Edition publication of Arab Open University Champions, celebrating leading achievements in AI & Innovation across KSA and GCC.",
        certsTitle: "Certificates & Training", certsSubtitle: "A record of continuous learning across AI, cloud, and applied data programs.",
        cert1Title: "Generative AI Workshop", cert1Issuer: "GDSC & AI Club — Feb 2024",
        cert2Title: "Artificial Intelligence Fundamentals", cert2Issuer: "AOU Computer Club — Nov 2025",
        cert3Title: "International Summit on AI Horizons", cert3Issuer: "Arab Open University, Kuwait — Nov 2025",
        cert4Title: "Huawei Introductory Program & Developer Certifications", cert4Issuer: "Arab Open University — May 2026",
        cert5Title: "\u201c180 Seconds of Impact\u201d Competition", cert5Issuer: "AOU Annual Scientific Research Forum — May 2026",
        cert6Title: "COOP Training — IT & Cybersecurity Dept.", cert6Issuer: "Emerging Business Technologies Co. — Jun–Aug 2026",
        cert7Title: "MiyahThon 3 Digital Bootcamp", cert7Issuer: "Saudi Water Innovation Center — Sep 2026",
        contactTitle: "Get In Touch", contactDesc: "Let’s build something extraordinary together. Have a project, job offer, or just want to say hi? Send me a message!",
        formName: "Full Name", formEmail: "Email Address", formSubject: "Subject", formMessage: "Your Message", formSend: "Send Message",
        connectDivider: "Or connect directly via", formSuccess: "Thank you! Your message has been sent successfully.", formError: "Oops! There was a problem sending your message. Please try again.",
        whatsapp: "WhatsApp", myNameFooter: "Wesam Mohammed Al-Tabbaa", copyright: "All rights reserved."
    },
    ar: {
        title: "وسام الطباع | مطور ذكاء اصطناعي ومهندس برمجيات",
        navHome: "الرئيسية", navAbout: "من أنا", navExperience: "الخبرات", navSkills: "المهارات",
        navProjects: "المشاريع", navAwards: "الجوائز", navCertificates: "الشهادات", navContact: "التواصل",
        greeting: "أهلاً،", myName: "وسام محمد الطباع",
        badgeRole: "مطور ذكاء اصطناعي | مهندس برمجيات", rolePrefix: "وأنا", role: "مطور ذكاء اصطناعي | مهندس برمجيات",
        statHackathon: "مركز أول بهاكاثون خليجي", statCerts: "شهادات ودورات تدريبية", statProjects: "مشاريع منجزة",
        cv: "تحميل السيرة الذاتية", aboutTitle: "من أنا",
        aboutDesc: "خريج حديث من الجامعة العربية المفتوحة بحاصل بكالوريوس علوم الحاسب، أكملت تدريباً تعاونياً في تطوير البرمجيات لدى شركة الأعمال المتجددة لتقنية المعلومات (EBTCO) في يوليو 2026. شاركت في مشاريع الحوسبة السحابية، النمذجة الأولية للتطبيقات المتكاملة، وتصميم تجربة المستخدم الذكية بما في ذلك قيادة تصميم تجربة المستخدم لنظام الاستقبال الذكي مع الواجهات ثنائية اللغة والطباعة التلقائية للأوسمة. تتلخص مهاراتي الأساسية في تصميم تجربة المستخدم، إدارة Microsoft Entra ID، وتطوير لوحات التحكم وتصور البيانات.",
        expTitle: "الخبرة المهنية", exp1Role: "متدرب تطوير برمجيات — قسم تقنية المعلومات والأمن السيبراني", viewCert: "عرض الشهادة",
        exp1Desc: "قدت تصميم تجربة الزوار لنظام استقبال Ain Smart Kiosk (مسارات الحضور المباشر، المسجلين مسبقاً، وكبار الزوار، بواجهة عربية-إنجليزية RTL، وربط مع طابعة Zebra). طورت لوحات Help Desk Scorecard التفاعلية، وتدربت على إدارة Microsoft Azure (AZ-104) وأنظمة عمل النماذج اللغوية الكبيرة.",
        viewRepo: "عرض الريبو", skillsTitle: "المهارات التقنية", clickFlipHint: "انقر لرؤية التفاصيل",
        projectsTitle: "أبرز المشاريع", filterAll: "الكل", filterAI: "الذكاء الاصطناعي", filterUX: "تجربة المستخدم والكشك", filterWeb: "تطبيقات الويب", filterData: "علوم البيانات",
        viewProject: "عرض المشروع", tagAI: "منصة ذكاء اصطناعي", tagData: "علم بيانات", tagDashboard: "لوحة تحكم", tagKiosk: "تجربة مستخدم / كشك", tagWeb: "تطبيق ويب", tagFinTech: "ذكاء اصطناعي وتقنية مالية",
        proj1Desc: "منصة ذكية للتوجيه المهني وتهيئة الطلاب لسوق العمل، تربط احتياجات السوق بالطلاب باستخدام Python وFlask وGoogle Gemini API، وتم تقييمها وفق معايير CC2020.",
        repoSoon: "الريبو قريباً", projHassenTitle: "مشروع حَصِين (Hassen)",
        projHassenDesc: "منصة امتثال تقنية مالية وحماية بيانات مدعومة بالذكاء الاصطناعي متوافقة مع تشريعات SAMA وZATCA وSDAIA (نظام حماية البيانات الشخصية). وصل للمرحلة النهائية في هاكاثون AMD بأكاديمية طويق.",
        projDataTitle: "تحليل بيانات معدلات معرفة القراءة والكتابة", projDataDesc: "تحليل استكشافي لبيانات معدلات معرفة القراءة والكتابة عبر الولايات والجنس والفئات العمرية باستخدام Python وPandas وSQL (pandasql) وSeaborn.",
        projDashTitle: "لوحة Help Desk Scorecard التفاعلية", projDashDesc: "لوحة تحكم تفاعلية بعناصر تصور بيانات لحظية، طُوّرت أثناء التدريب في EBTco لتقييم الأداء التقني.",
        projInvTitle: "InventoryAI — استراتيجية سلسلة التوريد", projInvDesc: "أداة تحليل مدعومة بالذكاء الاصطناعي تراجع المخزون الراكد وتقترح استراتيجيات تسويق وسلسلة توريد مبنية على البيانات.",
        projKioskTitle: "Ain Smart Kiosk", projKioskDesc: "كشك استقبال ثنائي اللغة (RTL) يغطي مسارات الحضور المباشر والمسجلين مسبقاً وكبار الزوار، مع ربط طابعة Zebra.",
        proj3Title: "ساعة عالمية", proj3Desc: "تطبيق يعرض الوقت الفعلي في مناطق زمنية متعددة.",
        proj4Title: "برنامج الطقس", proj4Desc: "برنامج يجلب ويعرض بيانات الطقس المباشرة.",
        awardsTitle: "الجوائز والتكريمات", awardTitle: "المركز الأول — هاكاثون الكويت للذكاء الاصطناعي", awardDesc: "حصلت على المركز الأول بين جميع الفرق المشاركة من دول مجلس التعاون الخليجي (10/2025).",
        aouChampTitle: "التكريم في كتاب أبطال الجامعة AOU Champions 2026", aouChampDesc: "تم تكريمي وتسليط الضوء على الإنجازات في الطبعة الثالثة من إصدار أبطال الجامعة العربية المفتوحة لعام 2026 لتميّز الابتكارات والذكاء الاصطناعي.",
        certsTitle: "الشهادات والتدريبات", certsSubtitle: "سجل تعلّم مستمر عبر برامج الذكاء الاصطناعي، الحوسبة السحابية، والبيانات التطبيقية.",
        cert1Title: "ورشة الذكاء الاصطناعي التوليدي", cert1Issuer: "GDSC ونادي الذكاء الاصطناعي — فبراير 2024",
        cert2Title: "أساسيات الذكاء الاصطناعي", cert2Issuer: "نادي الحاسب الآلي بالجامعة العربية المفتوحة — نوفمبر 2025",
        cert3Title: "القمة الدولية لآفاق الذكاء الاصطناعي", cert3Issuer: "الجامعة العربية المفتوحة، الكويت — نوفمبر 2025",
        cert4Title: "برنامج هواوي التعريفي وشهادات المطورين", cert4Issuer: "الجامعة العربية المفتوحة — مايو 2026",
        cert5Title: "مسابقة \u201c180 ثانية من الأثر\u201d", cert5Issuer: "المنتدى السنوي للبحث العلمي بالجامعة العربية المفتوحة — مايو 2026",
        cert6Title: "التدريب التعاوني — قسم تقنية المعلومات والأمن السيبراني", cert6Issuer: "شركة الأعمال المتجددة لتقنية المعلومات — يونيو–أغسطس 2026",
        cert7Title: "المعسكر الرقمي لمياهثون 3", cert7Issuer: "مركز الابتكار السعودي لتقنيات المياه — سبتمبر 2026",
        contactTitle: "تواصل معي", contactDesc: "لنصنع شيئاً استثنائياً معاً. هل لديك مشروع، فرصة عمل، أو ترغب في الاستفسار؟ أرسل لي رسالة!",
        formName: "الاسم الكامل", formEmail: "البريد الإلكتروني", formSubject: "الموضوع", formMessage: "رسالتك", formSend: "إرسال الرسالة",
        connectDivider: "أو تواصل معي مباشرة عبر", formSuccess: "شكراً لك! تم إرسال رسالتك بنجاح.", formError: "عذراً! حدثت مشكلة أثناء إرسال الرسالة، يرجى المحاولة مرة أخرى.",
        whatsapp: "واتساب", myNameFooter: "وسام محمد الطباع", copyright: "جميع الحقوق محفوظة."
    }
};

let currentLang = 'en';
let aboutTypeTimer = null;

function startAboutTypewriter() {
    const target = document.getElementById('about-typed-text');
    if (!target) return;
    clearTimeout(aboutTypeTimer);
    const fullText = translations[currentLang].aboutDesc;
    target.textContent = '';
    let idx = 0;

    function typeChar() {
        if (idx < fullText.length) {
            target.textContent += fullText.charAt(idx);
            idx++;
            aboutTypeTimer = setTimeout(typeChar, 22);
        }
    }
    typeChar();
}

function resetAboutTypewriter() {
    clearTimeout(aboutTypeTimer);
    const target = document.getElementById('about-typed-text');
    if (target) target.textContent = '';
}

function updateMagicLine(target) {
    const magicLine = document.getElementById('magic-line');
    if (!target || !magicLine) return;
    magicLine.style.width = target.offsetWidth + 'px';
    magicLine.style.left = target.offsetLeft + 'px';
}

function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'ar' : 'en';

    document.documentElement.dir = currentLang === 'en' ? 'ltr' : 'rtl';
    document.documentElement.lang = currentLang;

    document.getElementById('lang-text').innerText = currentLang === 'en' ? 'العربية' : 'English';

    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[currentLang][key]) {
            el.innerText = translations[currentLang][key];
        }
    });

    document.title = translations[currentLang].title;

    // Recalculate Magic Line and re-trigger About Typewriter in the new language
    const activeNav = document.querySelector('.nav-links a.active');
    if (activeNav) setTimeout(() => updateMagicLine(activeNav), 50);

    const aboutBox = document.getElementById('about-typewriter-box');
    if (aboutBox && aboutBox.classList.contains('reveal-active')) {
        startAboutTypewriter();
    }
}

document.addEventListener('DOMContentLoaded', () => {

    // 1. Dynamic Role Switcher Animation
    const roles = {
        en: ["AI Developer", "Software Engineer"],
        ar: ["مطور ذكاء اصطناعي", "مهندس برمجيات"]
    };

    let roleIndex = 0;
    const roleElem = document.getElementById('role-text');

    if (roleElem) {
        setInterval(() => {
            roleElem.classList.add('slide-out');
            setTimeout(() => {
                roleIndex = (roleIndex + 1) % roles[currentLang].length;
                roleElem.innerText = roles[currentLang][roleIndex];
                roleElem.classList.remove('slide-out');
                roleElem.classList.add('slide-in');
                void roleElem.offsetWidth;
                roleElem.classList.remove('slide-in');
            }, 500);
        }, 3200);
    }

    // 2. Top Progress Bar, Navbar Glass & Magic Line
    const topProgress = document.getElementById('scroll-progress');
    const mainNavbar = document.getElementById('main-navbar');
    const sections = document.querySelectorAll('section, header');
    const navLinks = document.querySelectorAll('.nav-links a');
    const heroBgText = document.querySelector('.hero-bg-text');

    const initialActive = document.querySelector('.nav-links a.active');
    if (initialActive) updateMagicLine(initialActive);
    window.addEventListener('resize', () => {
        const currentAct = document.querySelector('.nav-links a.active');
        if (currentAct) updateMagicLine(currentAct);
    });

    window.addEventListener('scroll', () => {
        const scrollY = window.pageYOffset;
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        if (topProgress && totalHeight > 0) {
            topProgress.style.width = ((scrollY / totalHeight) * 100) + '%';
        }

        if (mainNavbar) {
            if (scrollY > 50) mainNavbar.classList.add('scrolled');
            else mainNavbar.classList.remove('scrolled');
        }

        if (heroBgText && scrollY < window.innerHeight) {
            heroBgText.style.transform = `translate(-50%, calc(-50% + ${scrollY * 0.25}px))`;
        }

        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (scrollY >= (sectionTop - window.innerHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
                updateMagicLine(link);
            }
        });
    });

    // 3. Home Interactive Particle Constellation Canvas
    const homeCanvas = document.getElementById('home-constellation');
    const heroSection = document.getElementById('home');
    if (homeCanvas && heroSection) {
        const hCtx = homeCanvas.getContext('2d');
        let particles = [];
        let hMouse = { x: null, y: null };

        function resizeHomeCanvas() {
            homeCanvas.width = heroSection.offsetWidth;
            homeCanvas.height = heroSection.offsetHeight;
        }
        resizeHomeCanvas();
        window.addEventListener('resize', resizeHomeCanvas);

        heroSection.addEventListener('mousemove', (e) => {
            const rect = homeCanvas.getBoundingClientRect();
            hMouse.x = e.clientX - rect.left;
            hMouse.y = e.clientY - rect.top;
        });

        heroSection.addEventListener('mouseleave', () => {
            hMouse.x = null;
            hMouse.y = null;
        });

        for (let i = 0; i < 45; i++) {
            particles.push({
                x: Math.random() * homeCanvas.width,
                y: Math.random() * homeCanvas.height,
                vx: (Math.random() - 0.5) * 0.55,
                vy: (Math.random() - 0.5) * 0.55,
                r: Math.random() * 2 + 1
            });
        }

        function animateHomeParticles() {
            hCtx.clearRect(0, 0, homeCanvas.width, homeCanvas.height);
            particles.forEach((p, idx) => {
                p.x += p.vx;
                p.y += p.vy;
                if (p.x < 0 || p.x > homeCanvas.width) p.vx *= -1;
                if (p.y < 0 || p.y > homeCanvas.height) p.vy *= -1;

                hCtx.beginPath();
                hCtx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                hCtx.fillStyle = 'rgba(6, 182, 212, 0.45)';
                hCtx.fill();

                for (let j = idx + 1; j < particles.length; j++) {
                    const p2 = particles[j];
                    const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
                    if (dist < 135) {
                        hCtx.beginPath();
                        hCtx.moveTo(p.x, p.y);
                        hCtx.lineTo(p2.x, p2.y);
                        hCtx.strokeStyle = `rgba(6, 182, 212, ${0.14 * (1 - dist / 135)})`;
                        hCtx.stroke();
                    }
                }

                if (hMouse.x !== null && hMouse.y !== null) {
                    const mDist = Math.hypot(p.x - hMouse.x, p.y - hMouse.y);
                    if (mDist < 170) {
                        hCtx.beginPath();
                        hCtx.moveTo(p.x, p.y);
                        hCtx.lineTo(hMouse.x, hMouse.y);
                        hCtx.strokeStyle = `rgba(168, 85, 247, ${0.35 * (1 - mDist / 170)})`;
                        hCtx.stroke();
                    }
                }
            });
            requestAnimationFrame(animateHomeParticles);
        }
        animateHomeParticles();
    }

    // 4. Global Ambient Mouse Trail Canvas
    const canvas = document.getElementById('gridCanvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let width = 0, height = 0;
        let mouseX = -500, mouseY = -500;

        function resizeCanvas() {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        }

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        window.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        function drawGlow() {
            ctx.clearRect(0, 0, width, height);

            if (mouseX > 0 && mouseY > 0) {
                const mouseGlow = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, 260);
                mouseGlow.addColorStop(0, 'rgba(6, 182, 212, 0.1)');
                mouseGlow.addColorStop(0.5, 'rgba(168, 85, 247, 0.04)');
                mouseGlow.addColorStop(1, 'transparent');
                ctx.fillStyle = mouseGlow;
                ctx.fillRect(0, 0, width, height);
            }

            requestAnimationFrame(drawGlow);
        }
        drawGlow();
    }

    // 5. Non-Overlapping Scattered Skill Words in Skills Background
    const skillsBg = document.getElementById('skills-scattered-bg');
    if (skillsBg) {
        const scatteredLayout = [
            { word: 'Python',             top: '7%',  left: '6%',  size: '1.8rem' },
            { word: 'Microsoft Entra ID', top: '10%', left: '28%', size: '1.6rem' },
            { word: 'Generative AI',      top: '8%',  left: '58%', size: '1.8rem' },
            { word: 'JavaScript',         top: '11%', left: '80%', size: '1.7rem' },
            { word: 'C# · .NET',          top: '25%', left: '8%',  size: '1.6rem' },
            { word: 'Cloud Admin',        top: '24%', left: '76%', size: '1.7rem' },
            { word: 'Pandas & SQL',       top: '75%', left: '7%',  size: '1.6rem' },
            { word: 'UI/UX Design',       top: '77%', left: '35%', size: '1.8rem' },
            { word: 'Git & GitHub',       top: '74%', left: '68%', size: '1.7rem' },
            { word: 'Data Analysis',      top: '89%', left: '16%', size: '1.6rem' },
            { word: 'Dashboards',         top: '90%', left: '49%', size: '1.7rem' },
            { word: 'OOP',                top: '88%', left: '82%', size: '1.8rem' }
        ];

        scatteredLayout.forEach((item, idx) => {
            const span = document.createElement('span');
            span.className = 'floating-word';
            span.textContent = item.word;
            span.style.top = item.top;
            span.style.left = item.left;
            span.style.fontSize = item.size;
            span.style.animationDuration = (5 + (idx % 4) * 1.5) + 's';
            span.style.animationDelay = (idx * 0.25) + 's';
            skillsBg.appendChild(span);
        });
    }

    // 6. Projects Background: Infinite Scrolling Code + Live Code Typewriter
    const scrollingCol = document.getElementById('scrolling-code-loop');
    const liveCodeTarget = document.getElementById('live-code-typewriter');
    if (scrollingCol && liveCodeTarget) {
        const codeBlockSample = `
const aiEngine = new GeminiTutor({
  model: "gemini-1.5-flash",
  bilingual: ["ar", "en"],
  streaming: true
});

async function analyzeCompliance(payload) {
  const standards = ["SAMA", "ZATCA", "PDPL"];
  const report = await aiEngine.audit(payload, standards);
  return { status: "VERIFIED", score: report.accuracy };
}

class AinSmartKiosk {
  constructor(visitorType) {
    this.flow = visitorType; // walk-in | pre-registered | VIP
    this.printer = new ZebraBadgePrinter();
  }
}
`;
        scrollingCol.innerHTML = `<pre>${codeBlockSample}\n${codeBlockSample}</pre>`;

        const liveCodeText = `// Initializing Darbak.AI Career Engine...
import { CareerGraph, SkillMatcher } from '@wesam/core';

async function buildCareerRoadmap(studentProfile) {
  const skills = await SkillMatcher.extract(studentProfile);
  const roadmap = CareerGraph.generatePath({
    targetRole: 'AI Solutions Architect',
    standards: 'CC2020',
    region: 'GCC'
  });
  return roadmap.optimize();
}`;
        let codeCharIdx = 0;
        function loopCodeTypewriter() {
            if (codeCharIdx <= liveCodeText.length) {
                liveCodeTarget.textContent = liveCodeText.slice(0, codeCharIdx);
                codeCharIdx++;
                setTimeout(loopCodeTypewriter, 35);
            } else {
                setTimeout(() => {
                    codeCharIdx = 0;
                    loopCodeTypewriter();
                }, 2200);
            }
        }
        loopCodeTypewriter();
    }

    // 7. Awards Background: Rising Golden Stardust
    const awardsBg = document.getElementById('awards-particles-bg');
    if (awardsBg) {
        for (let i = 0; i < 18; i++) {
            const dot = document.createElement('div');
            dot.className = 'gold-particle';
            dot.style.left = (Math.random() * 95) + '%';
            dot.style.animationDuration = (5 + Math.random() * 6) + 's';
            dot.style.animationDelay = (Math.random() * 5) + 's';
            awardsBg.appendChild(dot);
        }
    }

    // 8. Scroll Observer + Viewport Fallback (ensures mobile/tablet/desktop elements always reveal)
    const animatedTargets = document.querySelectorAll(
        '.reveal-from-bottom, .reveal-from-right, .reveal-from-left, .ticker-track'
    );

    function revealVisibleElements() {
        const triggerBottom = window.innerHeight * 0.96;
        animatedTargets.forEach(el => {
            const rect = el.getBoundingClientRect();
            const isInView = rect.top < triggerBottom && rect.bottom > 20;
            if (isInView) {
                if (!el.classList.contains('reveal-active')) {
                    el.classList.add('reveal-active');
                    if (el.id === 'about-typewriter-box') {
                        startAboutTypewriter();
                    }
                }
            }
        });
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-active');
                if (entry.target.id === 'about-typewriter-box') {
                    startAboutTypewriter();
                }
            }
        });
    }, { threshold: 0.02, rootMargin: '0px 0px -20px 0px' });

    animatedTargets.forEach(el => observer.observe(el));
    window.addEventListener('scroll', revealVisibleElements, { passive: true });
    window.addEventListener('resize', revealVisibleElements, { passive: true });
    setTimeout(revealVisibleElements, 120);

    // 9. Contact Form Paper Plane Launch Animation + Formspree Handling
    const contactForm = document.getElementById('contact-form');
    const planeIcon = document.getElementById('paper-plane-icon');
    const formStatus = document.getElementById('form-status');

    if (contactForm && planeIcon) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            if (!planeIcon.classList.contains('plane-flying')) {
                planeIcon.classList.add('plane-flying');
                setTimeout(() => {
                    planeIcon.classList.remove('plane-flying');
                }, 1500);
            }

            try {
                const response = await fetch(contactForm.action, {
                    method: contactForm.method,
                    body: new FormData(contactForm),
                    headers: { 'Accept': 'application/json' }
                });
                if (response.ok) {
                    if (formStatus) {
                        formStatus.style.color = '#10b981';
                        formStatus.textContent = translations[currentLang].formSuccess;
                    }
                    contactForm.reset();
                } else {
                    if (formStatus) {
                        formStatus.style.color = '#f43f5e';
                        formStatus.textContent = translations[currentLang].formError;
                    }
                }
            } catch (err) {
                if (formStatus) {
                    formStatus.style.color = '#f43f5e';
                    formStatus.textContent = translations[currentLang].formError;
                }
            }
        });
    }

    // 10. Mobile Toggle & Auto-Close on Link Click
    const navToggle = document.getElementById('nav-toggle');
    const navRight = document.getElementById('nav-right');
    if (navToggle && navRight) {
        navToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            const isOpen = navRight.classList.toggle('open');
            navToggle.classList.toggle('open', isOpen);
            navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        });

        navRight.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navRight.classList.remove('open');
                navToggle.classList.remove('open');
                navToggle.setAttribute('aria-expanded', 'false');
            });
        });

        document.addEventListener('click', (e) => {
            if (!navRight.contains(e.target) && !navToggle.contains(e.target)) {
                navRight.classList.remove('open');
                navToggle.classList.remove('open');
                navToggle.setAttribute('aria-expanded', 'false');
            }
        });
    }

    // 11. Flip Cards Setup
    const expCard = document.getElementById('expCard');
    if (expCard) expCard.addEventListener('click', () => expCard.classList.toggle('flipped'));

    document.querySelectorAll('.clickable-proj-card').forEach(card => {
        card.addEventListener('click', () => card.classList.toggle('flipped'));
    });

    // 12. Project Filtering
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-flip-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const filter = btn.getAttribute('data-filter');

            projectCards.forEach(card => {
                const category = card.getAttribute('data-category') || '';
                if (filter === 'all' || category.includes(filter)) card.classList.remove('hide');
                else card.classList.add('hide');
            });
        });
    });

    // 13. Cert Lightbox
    const lightbox = document.getElementById('cert-lightbox');
    const lightboxImg = document.getElementById('cert-lightbox-img');
    const lightboxClose = document.querySelector('.cert-lightbox-close');

    document.querySelectorAll('.cert-card, .cert-trigger-btn').forEach(card => {
        card.addEventListener('click', (e) => {
            e.stopPropagation();
            const imgPath = card.getAttribute('data-img');
            if (imgPath && lightboxImg && lightbox) {
                lightboxImg.src = imgPath;
                lightbox.classList.add('open');
            }
        });
    });

    if (lightboxClose) lightboxClose.addEventListener('click', () => lightbox.classList.remove('open'));
    if (lightbox) {
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) lightbox.classList.remove('open');
        });
    }

    // 14. Carousel Setup
    function setupSlider(containerId, prevId, nextId) {
        const container = document.getElementById(containerId);
        if (!container) return;
        const slides = container.querySelectorAll('.slide');
        const dots = container.querySelectorAll('.dot');
        let current = 0;

        function showSlide(index) {
            slides.forEach((s, i) => s.classList.toggle('active', i === index));
            dots.forEach((d, i) => d.classList.toggle('active', i === index));
            current = index;
        }

        document.getElementById(nextId)?.addEventListener('click', (e) => { e.stopPropagation(); showSlide((current + 1) % slides.length); });
        document.getElementById(prevId)?.addEventListener('click', (e) => { e.stopPropagation(); showSlide((current - 1 + slides.length) % slides.length); });
        
        dots.forEach(dot => {
            dot.addEventListener('click', (e) => {
                e.stopPropagation();
                const idx = parseInt(dot.getAttribute('data-slide'));
                if (!isNaN(idx)) showSlide(idx);
            });
        });

        showSlide(0);
    }

    setupSlider('awardSlider', 'sliderPrev', 'sliderNext');
    setupSlider('aouSlider', 'aouPrev', 'aouNext');
});
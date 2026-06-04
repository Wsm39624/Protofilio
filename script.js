const translations = {
    en: {
        title: "Portfolio | Software Engineer",
        navHome: "Home",
        navAbout: "About",
        navSkills: "Skills",
        navProjects: "Projects",
        navContact: "Contact",
        greeting: "Hello,", 
        myName: "Wesam Mohammed", 
        rolePrefix: "And I'm a",
        role: "Computer Science Graduate",
        heroText: "I am a recent graduate with a Bachelor’s degree in Computer Science from Arab Open University. My background combines software engineering, full-stack web development, and smart solution architectural design, allowing me to approach computational challenges from both technical and intelligent perspectives. I have experience developing user-centered applications and AI-driven platforms, and I am highly passionate about technical innovation, continuous learning, and software optimization.",
        cv: "Download CV",
        aboutTitle: "About Me",
        aboutDesc: "I enjoy building professional solutions, writing clean system code, and expanding my horizons by designing minimal viable products (MVPs) that address industry gaps.",
        skillsTitle: "My Skills",
        skillCat1: "Programming Languages",
        skillCat2: "Technical Tools & Design",
        skillCat3: "Communication & Soft Skills",
        skillTool1: "Microsoft Word & PowerPoint",
        skillTool2: "Visual Studio",
        skillTool3: "AI tools for debugging, reporting, programming, and optimization",
        skillSoft1: "Presentation Skills",
        skillSoft2: "Problem Solving",
        skillSoft3: "Time Management",
        skillSoft4: "Teamwork & Leadership",
        projectsTitle: "My Top Projects",
        viewProject: "View Project",
        proj1Desc: "An AI-based platform to prepare students for the job market before graduation.",
        proj2Desc: "A smart analytics tool for e-commerce to analyze stagnant inventory and suggest marketing campaigns.",
        proj3Title: "World Clock",
        proj3Desc: "An application that displays real-time clocks for multiple time zones.",
        proj4Title: "Weather App",
        proj4Desc: "A program that fetches and displays live weather data.",
        contactTitle: "Contact Me",
        contactDesc: "I am always open to new opportunities and cooperative training.",
        whatsapp: "WhatsApp",
        myNameFooter: "Wesam Mohammed",
        copyright: "All rights reserved."
        
    },
    ar: {
        title: "معرض أعمال | مهندس برمجيات",
        navHome: "الرئيسية",
        navAbout: "من أنا",
        navSkills: "المهارات",
        navProjects: "المشاريع",
        navContact: "التواصل",
        greeting: "أهلاً،", 
        myName: "وسام محمد", 
        rolePrefix: "وأنا خريج",
        role: "علوم الحاسب الآلي",
        heroText: "أنا خريج حديث حاصل على درجة البكالوريوس في علوم الحاسب من الجامعة العربية المفتوحة. تجمع خلفيتي بين هندسة البرمجيات، وتطوير الويب المتكامل، وتصميم بنية الحلول الذكية، مما يتيح لي التعامل مع التحديات الحوسبية من منظور تقني وذكي معاً. لدي خبرة في تطوير التطبيقات التي تركز على المستخدم والمنصات المدعومة بالذكاء الاصطناعي، وشغوف جداً بالابتكار التقني، والتعلم المستمر، وتحسين أداء البرمجيات.",
        cv: "تحميل السيرة الذاتية",
        aboutTitle: "من أنا",
        aboutDesc: "أستمتع ببناء الحلول الاحترافية، وكتابة الأكواد البرمجية النظيفة، وتوسيع آفاقي البرمجية عبر تصميم المنتجات الأولية الفعالة (MVPs) التي تعالج الفجوات البرمجية في السوق الرياضي والتقني.",
        skillsTitle: "مهاراتي",
        skillCat1: "لغات البرمجة",
        skillCat2: "الأدوات التقنية والتصميم",
        skillCat3: "مهارات التواصل والمهارات الشخصية",
        skillTool1: "مايكروسوفت وورد وباوربوينت",
        skillTool2: "فيجوال ستوديو (Visual Studio)",
        skillTool3: "أدوات الذكاء الاصطناعي لتصحيح الأخطاء، وإعداد التقارير، والبرمجة، والتحسين",
        skillSoft1: "مهارات العرض والتقديم",
        skillSoft2: "حل المشكلات",
        skillSoft3: "إدارة الوقت",
        skillSoft4: "العمل الجماعي والقيادة",
        projectsTitle: "أبرز مشاريعي",
        viewProject: "عرض المشروع",
        proj1Desc: "منصة تعتمد على الذكاء الاصطناعي لتهيئة الطلاب لسوق العمل قبل التخرج.",
        proj2Desc: "أداة تحليل ذكية لمتاجر التجارة الإلكترونية لتحليل المخزون الراكد لاقتراح حملات تسويقية.",
        proj3Title: "ساعة عالمية",
        proj3Desc: "تطبيق يعرض الوقت الفعلي في مناطق زمنية متعددة.",
        proj4Title: "برنامج الطقس",
        proj4Desc: "برنامج يجلب ويعرض بيانات الطقس المباشرة.",
        contactTitle: "تواصل معي",
        contactDesc: "أنا مستعد دائماً للفرص الجديدة والتدريب التعاوني.",
        whatsapp: "واتساب",
        myNameFooter: "وسام محمد",
        copyright: "جميع الحقوق محفوظة."
    }
};

let currentLang = 'en';

function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'ar' : 'en';

    document.documentElement.dir = currentLang === 'en' ? 'ltr' : 'rtl';
    document.documentElement.lang = currentLang;

    const langBtnText = currentLang === 'en' ? 'العربية' : 'English';
    document.getElementById('lang-text').innerText = langBtnText;

    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[currentLang][key]) {
            el.innerText = translations[currentLang][key];
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section, header');
    const navLinks = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let current = ''; 

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= (sectionTop - window.innerHeight / 2)) {
                current = section.getAttribute('id');
            }
        });

        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 10) {
            current = 'contact'; 
        }

        navLinks.forEach(link => {
            link.classList.remove('active'); 
            
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });
});
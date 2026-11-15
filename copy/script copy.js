// دوال التحريك الذكي بناءً على الصف والأعمدة (Row & Col)
function navigateTo(row, col) {
    const gridMap = document.getElementById('grid-map');
    
    // تحريك الخريطة بالإحداثيات المعكوسة لنقل الكاميرا إلى الشاشة المطلوبة
    const moveX = -col * 100;
    const moveY = -row * 100;

    gridMap.style.transform = `translate(${moveX}vw, ${moveY}vh)`;
}

// إضافة إمكانية التحكم عن طريق عجلة الماوس (Wheel Navigation)
let isAnimating = false;

window.addEventListener('wheel', (e) => {
    if (isAnimating) return;
    
    // يتم هنا فحص اتجاه السكرول ورقم الشاشة الحالية
    // ومن ثم إرسال أمر التوجه إلى الشاشة التالية في الخريطة الـ 2D
    isAnimating = true;

    // مهلة لتجنب قفزات السكرول السريعة
    setTimeout(() => { isAnimating = false; }, 1000);
});
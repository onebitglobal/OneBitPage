const translations = {
    vi: {
        title: "Liên hệ với chúng tôi",
        subtitle: "Chúng tôi luôn sẵn sàng hỗ trợ bạn. Kết nối với chúng tôi qua các kênh liên lạc dưới đây.",
        fbTitle: "Hỗ trợ qua Facebook",
        fbText: "Quét mã QR để trò chuyện hoặc truy cập",
        zaloTitle: "Hỗ trợ qua Zalo",
        zaloText: "Quét mã QR để trò chuyện hoặc truy cập",
        telegramTitle: "Hỗ trợ qua Telegram",
        telegramText: "Nhấn để mở Telegram chat hoặc quét mã",
        email: "Liên hệ qua Email"
    },
    en: {
        title: "Contact Us",
        subtitle: "We’re always ready to support you. Connect with us through the contact channels below.",
        fbTitle: "Facebook Support",
        fbText: "Scan QR code to chat live or visit",
        zaloTitle: "Zalo Support",
        zaloText: "Scan QR code to chat live or visit",
        telegramTitle: "Telegram Support",
        telegramText: "Scan QR code to chat live or visit",
        email: "Contact via Email"
    }
};

function switchLang(lang) {
    localStorage.setItem('lang', lang);

    document.querySelector('h1').textContent = translations[lang].title;
    document.querySelector('.subtitle').textContent = translations[lang].subtitle;
    document.querySelectorAll('.support-title')[0].textContent = translations[lang].fbTitle;
    document.querySelectorAll('.support-text')[0].textContent = translations[lang].fbText;
    document.querySelectorAll('.support-title')[1].textContent = translations[lang].zaloTitle;
    document.querySelectorAll('.support-text')[1].textContent = translations[lang].zaloText;
    document.querySelectorAll('.support-title')[2].textContent = translations[lang].telegramTitle;
    document.querySelectorAll('.support-text')[2].textContent = translations[lang].telegramText;
    document.querySelector('.email-button').textContent = '✉️ ' + translations[lang].email;

    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelector(`.lang-btn[onclick="switchLang('${lang}')"]`).classList.add('active');
}

// Khi tải trang, kiểm tra ngôn ngữ đã lưu
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('lang') || 'vi';
    switchLang(savedLang);
});

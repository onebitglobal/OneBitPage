const translations = {
  vi: {
    introsection : "OneBit Solutions chuyên cung cấp các giải pháp phần mềm công nghệ và ứng dụng AI, giúp tối ưu quy trình và nâng cao hiệu quả hoạt động.",
    title: "Liên hệ với chúng tôi",
    subtitle:
      "Chúng tôi luôn sẵn sàng hỗ trợ bạn. Kết nối với chúng tôi qua các kênh liên lạc dưới đây.",
    fbTitle: "Hỗ trợ qua Facebook",
    fbText: "Quét mã QR để trò chuyện hoặc truy cập",
    fbLink: "Mở Facebook",
    zaloTitle: "Hỗ trợ qua Zalo",
    zaloText: "Quét mã QR để trò chuyện hoặc truy cập",
    zaloLink: "Mở Zalo",
    telegramTitle: "Hỗ trợ qua Telegram",
    telegramText: "Nhấn để mở Telegram chat hoặc quét mã",
    telegramLink: "Mở Telegram",
    email: "Liên hệ qua Email",
    emailCopied: "✓ Đã copy email!",
  },
  en: {
    title: "Contact Us",
    subtitle:
      "We're always ready to support you. Connect with us through the contact channels below.",
    fbTitle: "Facebook Support",
    fbText: "Scan QR code to chat live or visit",
    fbLink: "Open Facebook",
    zaloTitle: "Zalo Support",
    zaloText: "Scan QR code to chat live or visit",
    zaloLink: "Open Zalo",
    telegramTitle: "Telegram Support",
    telegramText: "Scan QR code to chat live or visit",
    telegramLink: "Open Telegram",
    email: "Contact via Email",
    emailCopied: "✓ Email copied!",
    introsection : "OneBit Solutions specializes in providing technology software solutions and AI applications, helping optimize processes and enhance operational efficiency.",
  },
};

function switchLang(lang) {
  window.currentLang = lang;

  document.querySelector("h1").textContent = translations[lang].title;
  document.querySelector(".subtitle").textContent = translations[lang].subtitle;
    document.querySelector(".introsection").textContent = translations[lang].introsection;
  const supportTitles = document.querySelectorAll(".support-title");
  const supportTexts = document.querySelectorAll(".support-text");
  const supportLinks = document.querySelectorAll(".support-link");
  
  // Facebook
  supportTitles[0].textContent = translations[lang].fbTitle;
  supportTexts[0].textContent = translations[lang].fbText;
  supportLinks[0].textContent = translations[lang].fbLink;
  
  // Zalo
  supportTitles[1].textContent = translations[lang].zaloTitle;
  supportTexts[1].textContent = translations[lang].zaloText;
  supportLinks[1].textContent = translations[lang].zaloLink;
  
  // Telegram
  supportTitles[2].textContent = translations[lang].telegramTitle;
  supportTexts[2].textContent = translations[lang].telegramText;
  supportLinks[2].textContent = translations[lang].telegramLink;
  
  const emailBtn = document.querySelector(".email-button");
  emailBtn.textContent = "✉️ " + translations[lang].email;
  emailBtn.dataset.originalText = "✉️ " + translations[lang].email;

  document
    .querySelectorAll(".lang-btn")
    .forEach((btn) => btn.classList.remove("active"));
  document
    .querySelector(`.lang-btn[onclick="switchLang('${lang}')"]`)
    .classList.add("active");
}

function copyEmail() {
  const email = "obitdevvn@gmail.com";
  const lang = window.currentLang || "vi";
  const emailBtn = document.querySelector(".email-button");

  navigator.clipboard.writeText(email).then(() => {
   
    const originalText = emailBtn.dataset.originalText;
    
   
    emailBtn.textContent = translations[lang].emailCopied;
    emailBtn.classList.add("copied");
    

    setTimeout(() => {
      emailBtn.textContent = originalText;
      emailBtn.classList.remove("copied");
    }, 1500);
  }).catch(err => {
    console.error("Không thể copy email:", err);
    alert(email);
  });
}
function openZalo() {
  const phone = "0794324203";
  const lang = window.currentLang || "vi";

  navigator.clipboard.writeText(phone).then(() => {
 
    const zaloCard = document.querySelectorAll(".support-card")[1];
    const zaloLink = zaloCard.querySelector(".support-link");
    const originalText = zaloLink.textContent;

    zaloLink.textContent = lang === "vi" ? "✓ Đã copy số Zalo!" : "✓ Zalo number copied!";
    zaloLink.classList.add("copied");

    setTimeout(() => {
      zaloLink.textContent = originalText;
      zaloLink.classList.remove("copied");
    }, 1500);
  }).catch(err => {
    console.error("Không thể copy số điện thoại:", err);
    alert(phone);
  });
}
function openZalo() {
  const phone = "0794324203";
  const lang = window.currentLang || "vi";

  navigator.clipboard.writeText(phone).then(() => {

    const zaloCard = document.querySelectorAll(".support-card")[1]; 
    const zaloLink = zaloCard.querySelector(".support-link");
    const originalText = zaloLink.textContent;


    zaloLink.textContent = lang === "vi" ? "✓ Đã copy số Zalo!" : "✓ Zalo number copied!";
    zaloLink.classList.add("copied");


    setTimeout(() => {
      zaloLink.textContent = originalText;
      zaloLink.classList.remove("copied");
    }, 1500);
  }).catch(err => {
    console.error("Không thể copy số điện thoại:", err);
    alert(phone);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const savedLang = window.currentLang || "vi";
  switchLang(savedLang);
  
  const emailBtn = document.querySelector(".email-button");
  const email = "obitdevvn@gmail.com";

  emailBtn.addEventListener("mouseenter", () => {
    if (!emailBtn.classList.contains("copied")) {
      emailBtn.textContent = "✉️ " + email;
    }
  });
  

  emailBtn.addEventListener("mouseleave", () => {
    if (!emailBtn.classList.contains("copied")) {
      const lang = window.currentLang || "vi";
      emailBtn.textContent = emailBtn.dataset.originalText || ("✉️ " + translations[lang].email);
    }
  });

  emailBtn.addEventListener("click", copyEmail);
});
// Language data
const translations = {
    en: {
        home: "Home",
        about: "About Us",
        services: "Services",
        contact: "Contact",
        welcome: "Welcome to HARB Consulting and Construction",
        homeDesc: "We provide exceptional construction and consultancy services to meet your needs.",
        aboutTitle: "About Us",
        aboutDesc: "At HARB Consulting and Construction, we specialize in innovative solutions for building projects.",
        servicesTitle: "Our Services",
        service1: "Construction Management",
        service2: "Architectural Design",
        service3: "Project Consultancy",
        contactTitle: "Contact Us",
        nameLabel: "Name",
        emailLabel: "Email",
        messageLabel: "Message",
        sendButton: "Send",
        placeholders: {
            name: "Enter your name",
            email: "Enter your email",
            message: "Enter your message"
        }
    },
    ar: {
        home: "الرئيسية",
        about: "معلومات عنا",
        services: "الخدمات",
        contact: "اتصل بنا",
        welcome: "مرحبًا بكم في هارب للاستشارات والبناء",
        homeDesc: "نقدم خدمات بناء واستشارات استثنائية لتلبية احتياجاتك.",
        aboutTitle: "معلومات عنا",
        aboutDesc: "في هارب للاستشارات والبناء، نتخصص في حلول مبتكرة لمشاريع البناء.",
        servicesTitle: "خدماتنا",
        service1: "إدارة البناء",
        service2: "التصميم المعماري",
        service3: "استشارات المشاريع",
        contactTitle: "اتصل بنا",
        nameLabel: "الاسم",
        emailLabel: "البريد الإلكتروني",
        messageLabel: "الرسالة",
        sendButton: "إرسال",
        placeholders: {
            name: "أدخل اسمك",
            email: "أدخل بريدك الإلكتروني",
            message: "أدخل رسالتك"
        }
    }
};

// Switch language function
function switchLanguage(lang) {
    // Change text content
    document.querySelectorAll("[data-lang-key]").forEach(element => {
        const key = element.getAttribute("data-lang-key");
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    // Update placeholders
    const placeholders = translations[lang].placeholders;
    if (placeholders) {
        document.getElementById("name")?.setAttribute("placeholder", placeholders.name);
        document.getElementById("email")?.setAttribute("placeholder", placeholders.email);
        document.getElementById("message")?.setAttribute("placeholder", placeholders.message);
    }

    // Adjust text direction and language attributes for RTL support
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
}

// Event listener for language switcher
document.getElementById("language-switcher")?.addEventListener("change", function () {
    switchLanguage(this.value);
});

// Set default language on page load
document.addEventListener("DOMContentLoaded", () => {
    // Load the language from localStorage (if set) or default to English
    const savedLanguage = localStorage.getItem("lang") || "en";
    switchLanguage(savedLanguage);

    // Set the language selection dropdown to the saved language
    document.getElementById("language-switcher").value = savedLanguage;
});

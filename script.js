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

// Initialize EmailJS
emailjs.init('HCCGROUP247');

// Switch language function
function switchLanguage(lang) {
    document.querySelectorAll("[data-lang-key]").forEach(element => {
        const key = element.getAttribute("data-lang-key");
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    const placeholders = translations[lang].placeholders;
    if (placeholders) {
        document.getElementById("name").setAttribute("placeholder", placeholders.name);
        document.getElementById("email").setAttribute("placeholder", placeholders.email);
        document.getElementById("message").setAttribute("placeholder", placeholders.message);
    }

    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
}

document.getElementById("language-switcher").addEventListener("change", function () {
    switchLanguage(this.value);
});

// Default language
document.addEventListener("DOMContentLoaded", () => {
    switchLanguage("en");

    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();

        emailjs.sendForm('HCCGROUP247', 'template_bcvj1l5', this)
            .then(response => {
                console.log('Success:', response);
                alert('Your message has been sent!');
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Oops! Something went wrong.');
            });
    });
});

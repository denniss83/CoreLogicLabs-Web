const translations = {
  en: {
    nav_home: "Home",
    nav_apps: "Apps",
    nav_about: "About",
    nav_contact: "Contact",
    lang_toggle: "🌐 TR",
    hero_title: "[PLACEHOLDER: Your Powerful Tagline Here]",
    hero_subtitle: "[PLACEHOLDER: A short description of what CoreLogicLabs does]",
    hero_tagline: "[PLACEHOLDER: Games · Lifestyle · Utilities]",
    hero_cta: "Explore Our Apps",
    about_title: "[PLACEHOLDER: About CoreLogicLabs]",
    about_desc: "[PLACEHOLDER: We are CoreLogicLabs, a passionate indie developer on Google Play. We create games, lifestyle apps, and useful tools for everyday life.]",
    feature_games_title: "[PLACEHOLDER: Games & Entertainment]",
    feature_games_desc: "[PLACEHOLDER: Fun and engaging games for all ages]",
    feature_lifestyle_title: "[PLACEHOLDER: Lifestyle Apps]",
    feature_lifestyle_desc: "[PLACEHOLDER: Apps that improve your daily life]",
    feature_utility_title: "[PLACEHOLDER: Utility Tools]",
    feature_utility_desc: "[PLACEHOLDER: Smart tools that make life easier]",
    apps_title: "[PLACEHOLDER: Our Apps]",
    apps_subtitle: "[PLACEHOLDER: Discover our collection of apps on Google Play]",
    app1_name: "[PLACEHOLDER: App Name 1]",
    app1_desc: "[PLACEHOLDER: Short description of app 1]",
    app1_category: "Game",
    app2_name: "[PLACEHOLDER: App Name 2]",
    app2_desc: "[PLACEHOLDER: Short description of app 2]",
    app2_category: "Lifestyle",
    app3_name: "[PLACEHOLDER: App Name 3]",
    app3_desc: "[PLACEHOLDER: Short description of app 3]",
    app3_category: "Utility",
    btn_google_play: "▶ Google Play",
    stats_apps: "Apps Published",
    stats_downloads: "Downloads",
    stats_users: "Happy Users",
    stats_countries: "Countries",
    contact_title: "[PLACEHOLDER: Get In Touch]",
    contact_desc: "[PLACEHOLDER: Have a question or feedback? We'd love to hear from you.]",
    contact_email_label: "Email",
    contact_play_label: "Google Play",
    form_name: "Your Name",
    form_email: "Your Email",
    form_message: "Your Message",
    form_submit: "Send Message",
    footer_rights: "© 2026 CoreLogicLabs. All rights reserved.",
    footer_privacy: "Privacy Policy",
  },
  tr: {
    nav_home: "Ana Sayfa",
    nav_apps: "Uygulamalar",
    nav_about: "Hakkımızda",
    nav_contact: "İletişim",
    lang_toggle: "🌐 EN",
    hero_title: "[YER TUTUCU: Güçlü Sloganınız Buraya]",
    hero_subtitle: "[YER TUTUCU: CoreLogicLabs'ın ne yaptığının kısa açıklaması]",
    hero_tagline: "[YER TUTUCU: Oyunlar · Yaşam Tarzı · Araçlar]",
    hero_cta: "Uygulamalarımızı Keşfet",
    about_title: "[YER TUTUCU: CoreLogicLabs Hakkında]",
    about_desc: "[YER TUTUCU: Biz CoreLogicLabs, Google Play'de tutkulu bir indie geliştiriciyiz. Oyunlar, yaşam tarzı uygulamaları ve günlük hayat için kullanışlı araçlar üretiyoruz.]",
    feature_games_title: "[YER TUTUCU: Oyunlar ve Eğlence]",
    feature_games_desc: "[YER TUTUCU: Her yaşa hitap eden eğlenceli oyunlar]",
    feature_lifestyle_title: "[YER TUTUCU: Yaşam Tarzı Uygulamaları]",
    feature_lifestyle_desc: "[YER TUTUCU: Günlük hayatınızı iyileştiren uygulamalar]",
    feature_utility_title: "[YER TUTUCU: Kullanışlı Araçlar]",
    feature_utility_desc: "[YER TUTUCU: Hayatı kolaylaştıran akıllı araçlar]",
    apps_title: "[YER TUTUCU: Uygulamalarımız]",
    apps_subtitle: "[YER TUTUCU: Google Play'deki uygulama koleksiyonumuzu keşfedin]",
    app1_name: "[YER TUTUCU: Uygulama Adı 1]",
    app1_desc: "[YER TUTUCU: Uygulama 1'in kısa açıklaması]",
    app1_category: "Oyun",
    app2_name: "[YER TUTUCU: Uygulama Adı 2]",
    app2_desc: "[YER TUTUCU: Uygulama 2'nin kısa açıklaması]",
    app2_category: "Yaşam Tarzı",
    app3_name: "[YER TUTUCU: Uygulama Adı 3]",
    app3_desc: "[YER TUTUCU: Uygulama 3'ün kısa açıklaması]",
    app3_category: "Araç",
    btn_google_play: "▶ Google Play",
    stats_apps: "Yayınlanan Uygulama",
    stats_downloads: "İndirme",
    stats_users: "Mutlu Kullanıcı",
    stats_countries: "Ülke",
    contact_title: "[YER TUTUCU: İletişime Geçin]",
    contact_desc: "[YER TUTUCU: Sorunuz veya geri bildiriminiz mi var? Sizi duymaktan memnuniyet duyarız.]",
    contact_email_label: "E-posta",
    contact_play_label: "Google Play",
    form_name: "Adınız",
    form_email: "E-posta Adresiniz",
    form_message: "Mesajınız",
    form_submit: "Mesaj Gönder",
    footer_rights: "© 2026 CoreLogicLabs. Tüm hakları saklıdır.",
    footer_privacy: "Gizlilik Politikası",
  }
};

let currentLang = localStorage.getItem('cll_lang') || 'en';

function applyTranslations(lang) {
  const t = translations[lang];
  if (!t) return;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.setAttribute('placeholder', t[key]);
      } else {
        el.textContent = t[key];
      }
    }
  });

  document.documentElement.lang = lang;
}

function setLanguage(lang) {
  if (!translations[lang]) return;
  currentLang = lang;
  localStorage.setItem('cll_lang', lang);
  applyTranslations(lang);
}

function toggleLanguage() {
  setLanguage(currentLang === 'en' ? 'tr' : 'en');
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  applyTranslations(currentLang);

  document.querySelectorAll('[data-lang-toggle]').forEach(btn => {
    btn.addEventListener('click', toggleLanguage);
  });
});

export { setLanguage, toggleLanguage, translations, currentLang };

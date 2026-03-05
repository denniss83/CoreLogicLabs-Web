const translations = {
  en: {
    nav_home: "Home",
    nav_apps: "Apps",
    nav_about: "About",
    nav_contact: "Contact",
    lang_toggle: "🌐 TR",
    hero_title: "Build Smarter. Live Better. Play More.",
    hero_subtitle: "AI-powered mobile apps. Modern design, reliable infrastructure, user-focused digital solutions.",
    hero_tagline: "Games · Lifestyle · Utilities",
    hero_cta: "Explore Our Apps",
    about_title: "About CoreLogicLabs",
    about_desc: "CoreLogicLabs is an indie mobile studio crafting AI-powered apps for the way you live, play, and think. We blend cutting-edge technology with thoughtful design to create experiences that are not just useful — but memorable. From mystical lifestyle tools to sharp utility apps, every product we ship is built with passion and purpose.",
    feature_games_title: "Games & Entertainment",
    feature_games_desc: "Immersive games and interactive experiences designed to entertain and engage players of all ages.",
    feature_lifestyle_title: "Lifestyle Apps",
    feature_lifestyle_desc: "Intuitive apps that enrich your daily life — from wellness and mindfulness to astrology and personal growth.",
    feature_utility_title: "Utility Tools",
    feature_utility_desc: "Smart, AI-assisted tools that simplify complex tasks and make your everyday workflow effortless.",
    apps_title: "Our Apps",
    apps_subtitle: "Discover our collection on Google Play",
    app1_name: "Tarot Akademi",
    app1_desc: "Embark on a mystical journey through the world of Tarot. Learn the meaning of every card, receive AI-powered daily readings, and unlock the wisdom hidden within the arcana. Your personal tarot guide, always in your pocket.",
    app1_category: "Lifestyle",
    btn_google_play: "▶ Google Play",
    stats_apps: "Apps Published",
    stats_downloads: "Downloads",
    stats_users: "Happy Users",
    stats_countries: "Countries",
    contact_title: "Get In Touch",
    contact_desc: "Have a question or want to collaborate? We'd love to hear from you. Reach out via email or find us on Google Play.",
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
    hero_title: "Daha Akıllı Üret. Daha İyi Yaşa. Daha Çok Oyna.",
    hero_subtitle: "Yapay zekâ destekli mobil uygulamalar. Modern tasarım, güvenilir altyapı, kullanıcı odaklı dijital çözümler.",
    hero_tagline: "Oyunlar · Yaşam Tarzı · Araçlar",
    hero_cta: "Uygulamalarımızı Keşfet",
    about_title: "CoreLogicLabs Hakkında",
    about_desc: "CoreLogicLabs, yaşayış biçiminize, oyun anlayışınıza ve düşünce tarzınıza uygun yapay zekâ destekli uygulamalar geliştiren bağımsız bir mobil stüdyodur. En yeni teknolojiyi özenli tasarımla harmanlayarak yalnızca faydalı değil — akılda kalıcı deneyimler yaratıyoruz. Mistik yaşam tarzı araçlarından keskin kullanışlı uygulamalara kadar her ürün tutku ve amaçla inşa edilir.",
    feature_games_title: "Oyunlar ve Eğlence",
    feature_games_desc: "Her yaştan oyuncuyu eğlendirmek ve bağlamak için tasarlanmış sürükleyici oyunlar ve etkileşimli deneyimler.",
    feature_lifestyle_title: "Yaşam Tarzı Uygulamaları",
    feature_lifestyle_desc: "Sağlıklı yaşamdan farkındalığa, astrolojiden kişisel gelişime kadar günlük hayatınızı zenginleştiren sezgisel uygulamalar.",
    feature_utility_title: "Kullanışlı Araçlar",
    feature_utility_desc: "Karmaşık görevleri basitleştiren ve günlük iş akışınızı zahmetsiz hale getiren akıllı, yapay zekâ destekli araçlar.",
    apps_title: "Uygulamalarımız",
    apps_subtitle: "Google Play'deki koleksiyonumuzu keşfedin",
    app1_name: "Tarot Akademi",
    app1_desc: "Tarot dünyasında mistik bir yolculuğa çıkın. Her kartın anlamını öğrenin, yapay zekâ destekli günlük falınıza bakın ve Arkana'nın içinde saklı bilgeliği keşfedin. Kişisel tarot rehberiniz her zaman cebinizde.",
    app1_category: "Yaşam Tarzı",
    btn_google_play: "▶ Google Play",
    stats_apps: "Yayınlanan Uygulama",
    stats_downloads: "İndirme",
    stats_users: "Mutlu Kullanıcı",
    stats_countries: "Ülke",
    contact_title: "İletişime Geçin",
    contact_desc: "Sorunuz mu var ya da iş birliği yapmak mı istiyorsunuz? Sizi duymaktan memnuniyet duyarız. E-posta ile ulaşın veya Google Play'de bizi bulun.",
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

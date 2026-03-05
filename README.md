# CoreLogicLabs Web

The official static website for **CoreLogicLabs** — a Google Play developer & publisher creating games, entertainment, lifestyle, and utility apps.

> **Live site**: deploy to GitHub Pages (see instructions below).

---

## 🇬🇧 English

### Project Description

CoreLogicLabs Web is a modern, dark-themed single-page website template built with pure HTML, CSS, and vanilla JavaScript. It features bilingual support (English / Turkish), smooth scroll animations, animated stat counters, a responsive layout, and a glassmorphism design system. No build tools are required — deploy directly to GitHub Pages.

### Tech Stack

| Layer | Technology |
|-------|-----------|
| Markup | HTML5 |
| Styles | CSS3 (custom properties, CSS animations, glassmorphism) |
| Scripts | Vanilla JavaScript (ES Modules) |
| Fonts | Google Fonts — Poppins (400, 600, 700, 800) |
| i18n | Custom pure-JS translation system (`js/i18n.js`) |
| Hosting | GitHub Pages |

---

### 📁 File Structure

```
index.html          ← Main HTML (all sections)
css/style.css       ← All styles
js/i18n.js          ← Translation system (EN / TR)
js/main.js          ← Scroll animations, mobile menu, counter, sticky nav
assets/             ← Place logo and app icon images here
README.md           ← This file
```

---

### 📋 Placeholder Items — What to Fill In

All `[PLACEHOLDER]` items in `index.html` and `js/i18n.js` must be replaced with real content before launch.

#### `js/i18n.js` — Translation strings

| Key | EN placeholder | TR placeholder | Description |
|-----|---------------|----------------|-------------|
| `hero_title` | `[PLACEHOLDER: Your Powerful Tagline Here]` | `[YER TUTUCU: Güçlü Sloganınız Buraya]` | Main hero headline |
| `hero_subtitle` | `[PLACEHOLDER: A short description …]` | `[YER TUTUCU: … kısa açıklaması]` | Hero sub-headline |
| `hero_tagline` | `[PLACEHOLDER: Games · Lifestyle · Utilities]` | `[YER TUTUCU: Oyunlar · Yaşam Tarzı · Araçlar]` | Small tagline under subtitle |
| `about_title` | `[PLACEHOLDER: About CoreLogicLabs]` | `[YER TUTUCU: … Hakkında]` | About section heading |
| `about_desc` | `[PLACEHOLDER: We are CoreLogicLabs …]` | `[YER TUTUCU: Biz CoreLogicLabs …]` | About paragraph |
| `feature_games_title` | `[PLACEHOLDER: Games & Entertainment]` | `[YER TUTUCU: Oyunlar ve Eğlence]` | Card heading |
| `feature_games_desc` | `[PLACEHOLDER: Fun and engaging games …]` | `[YER TUTUCU: Her yaşa …]` | Card description |
| `feature_lifestyle_title` | `[PLACEHOLDER: Lifestyle Apps]` | `[YER TUTUCU: Yaşam Tarzı …]` | Card heading |
| `feature_lifestyle_desc` | `[PLACEHOLDER: Apps that improve …]` | `[YER TUTUCU: Günlük hayatınızı …]` | Card description |
| `feature_utility_title` | `[PLACEHOLDER: Utility Tools]` | `[YER TUTUCU: Kullanışlı Araçlar]` | Card heading |
| `feature_utility_desc` | `[PLACEHOLDER: Smart tools …]` | `[YER TUTUCU: Hayatı kolaylaştıran …]` | Card description |
| `apps_title` | `[PLACEHOLDER: Our Apps]` | `[YER TUTUCU: Uygulamalarımız]` | Apps section heading |
| `apps_subtitle` | `[PLACEHOLDER: Discover our collection …]` | `[YER TUTUCU: … keşfedin]` | Apps section sub-heading |
| `app1_name` | `[PLACEHOLDER: App Name 1]` | `[YER TUTUCU: Uygulama Adı 1]` | First app name |
| `app1_desc` | `[PLACEHOLDER: Short description of app 1]` | `[YER TUTUCU: Uygulama 1'in …]` | First app description |
| `app2_name` | `[PLACEHOLDER: App Name 2]` | `[YER TUTUCU: Uygulama Adı 2]` | Second app name |
| `app2_desc` | `[PLACEHOLDER: Short description of app 2]` | `[YER TUTUCU: Uygulama 2'nin …]` | Second app description |
| `app3_name` | `[PLACEHOLDER: App Name 3]` | `[YER TUTUCU: Uygulama Adı 3]` | Third app name |
| `app3_desc` | `[PLACEHOLDER: Short description of app 3]` | `[YER TUTUCU: Uygulama 3'ün …]` | Third app description |
| `contact_title` | `[PLACEHOLDER: Get In Touch]` | `[YER TUTUCU: İletişime Geçin]` | Contact heading |
| `contact_desc` | `[PLACEHOLDER: Have a question …]` | `[YER TUTUCU: Sorunuz …]` | Contact sub-text |

#### `index.html` — Inline placeholders

| Location | Placeholder | What to put there |
|----------|-------------|-------------------|
| Contact section | `[PLACEHOLDER: contact@corelogiclabs.com]` | Real contact email address |
| Contact section | `[PLACEHOLDER: Google Play Store URL]` | Real Google Play developer page URL |
| App card 1 `<a href="#">` | `# (TODO comment)` | Real Google Play app URL |
| App card 2 `<a href="#">` | `# (TODO comment)` | Real Google Play app URL |
| App card 3 `<a href="#">` | `# (TODO comment)` | Real Google Play app URL |
| Social links (3×) | `href="#"` | Real GitHub / Twitter / LinkedIn URLs |
| Footer privacy link | `href="#"` | URL of privacy policy page |
| Stats section | `data-count` values | Real numbers |

---

### ➕ How to Add a New App Card

1. Open `index.html` and find the `apps-grid` div inside the `#apps` section.
2. Copy one of the existing `<div class="app-card reveal">` blocks.
3. Update the icon class (`game` / `lifestyle` / `utility`) and emoji.
4. Add new translation keys to **both** `en` and `tr` objects in `js/i18n.js`:
   ```js
   // In en: { ... }
   app4_name: "My New App",
   app4_desc: "Short description of my new app",
   app4_category: "Game",
   
   // In tr: { ... }
   app4_name: "Yeni Uygulamam",
   app4_desc: "Yeni uygulamanın kısa açıklaması",
   app4_category: "Oyun",
   ```
5. In the new card HTML, set `data-i18n="app4_name"`, `data-i18n="app4_desc"`, `data-i18n="app4_category"`.
6. Replace the `href="#"` on the Google Play button with the real store URL.

---

### 🚀 Deploy to GitHub Pages

1. Push all files to the `main` branch (or the branch you want to deploy).
2. Go to the repository on GitHub → **Settings** → **Pages** (in the left sidebar).
3. Under **Source**, select **Deploy from a branch**.
4. Choose the branch (`main`) and folder (`/ (root)`), then click **Save**.
5. After a minute your site will be live at `https://<your-username>.github.io/<repo-name>/`.

---

### 📬 Connect the Contact Form to Formspree

1. Create a free account at [https://formspree.io](https://formspree.io).
2. Create a new form and copy your unique form endpoint (e.g. `https://formspree.io/f/abcdefgh`).
3. In `index.html`, find the `<form id="contact-form"` tag and replace `action="#"` with your endpoint:
   ```html
   <form class="contact-form reveal" id="contact-form"
         action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
4. Formspree will forward submissions to your email — no backend required.

---

## 🇹🇷 Türkçe

### Proje Açıklaması

CoreLogicLabs Web; oyunlar, eğlence, yaşam tarzı ve kullanışlı uygulamalar üreten bir Google Play geliştiricisi olan **CoreLogicLabs** için modern, karanlık temalı tek sayfalık bir web sitesi şablonudur.

Saf HTML, CSS ve vanilla JavaScript ile oluşturulmuştur. İngilizce / Türkçe dil desteği, akıcı animasyonlar, animasyonlu istatistik sayaçları ve tam duyarlı (responsive) tasarım içerir. Herhangi bir derleme aracı gerektirmez; doğrudan GitHub Pages üzerinden yayınlanabilir.

### Kurulum Talimatları

Yukarıdaki İngilizce bölümde yer alan tüm adımlar Türkçe projede de aynı şekilde geçerlidir:

- **Yer tutucu içerikleri doldurmak için**: `js/i18n.js` dosyasındaki `tr: { … }` nesnesini gerçek içeriklerle güncelleyin ve `index.html` içindeki `[YER TUTUCU …]` metnini gerçek verilerle değiştirin.
- **Yeni uygulama kartı eklemek için**: yukarıdaki adımları takip edin ve Türkçe çeviri anahtarlarını da eklemeyi unutmayın.
- **GitHub Pages'e yayınlamak için**: yukarıdaki adımları takip edin.
- **İletişim formunu bağlamak için**: Formspree bölümündeki adımları takip edin.

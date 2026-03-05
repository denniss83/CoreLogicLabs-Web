# ⚡ CoreLogicLabs — Official Website

> Build Smarter. Live Better. Play More.

The official static website for [CoreLogicLabs](https://play.google.com/store/apps/dev?id=8711780632580992511) — an AI-powered indie mobile studio on Google Play.

## 🌐 Live Site
Once deployed: `https://denniss83.github.io/CoreLogicLabs-Web`

## 🛠️ Tech Stack
- Pure HTML5 + CSS3 + Vanilla JavaScript
- No frameworks, no build tools
- Google Fonts (Poppins)
- Deployable to GitHub Pages

## 📦 File Structure
- `index.html` — Main page
- `css/style.css` — All styles
- `js/i18n.js` — EN/TR language system
- `js/main.js` — Animations & interactions
- `assets/` — Images and icons (add your logo here)

## 🚀 Deploy to GitHub Pages
1. Go to repository **Settings → Pages**
2. Source: **Deploy from a branch**
3. Branch: **main** / **root**
4. Click **Save**
5. Site will be live at `https://denniss83.github.io/CoreLogicLabs-Web`

## ➕ Adding New App Cards
Copy this HTML block into the `.apps-grid` div in `index.html`:
```html
<div class="app-card reveal">
  <div class="app-icon" style="background: linear-gradient(135deg, #COLOR1, #COLOR2)">EMOJI</div>
  <div class="app-info">
    <span class="app-category" data-i18n="appN_category">Category</span>
    <h3 data-i18n="appN_name">App Name</h3>
    <p  data-i18n="appN_desc"></p>
    <a href="GOOGLE_PLAY_URL" target="_blank" class="btn-play" data-i18n="btn_google_play">▶ Google Play</a>
  </div>
</div>
```
Then add the translation keys `appN_name`, `appN_desc`, `appN_category` to both `en` and `tr` in `js/i18n.js`.

## 📬 Connect Contact Form
1. Go to [Formspree.io](https://formspree.io), create a free account
2. Create a new form, get your form ID
3. In `index.html`, update the form tag:
   ```html
   <form class="contact-form reveal" id="contact-form"
         action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

---

## 🇹🇷 Türkçe

### GitHub Pages'e Yayınlama
1. Repo **Settings → Pages** sayfasına git
2. Source: **Deploy from a branch**
3. Branch: **main** / **root** seç
4. **Save**'e tıkla

### Yeni Uygulama Kartı Ekleme
`index.html` içindeki `.apps-grid` div'ine yukarıdaki HTML bloğunu kopyala, ardından `js/i18n.js` içine `appN_name`, `appN_desc`, `appN_category` çeviri anahtarlarını hem `en` hem `tr` bölümlerine ekle.

# Precision Systems Website

A professional website for a local custom PC building and systems integration company. Built with vanilla HTML, CSS, and JavaScript — optimized for GitHub Pages hosting.

## 🚀 Quick Start

### Option 1: GitHub Pages (Recommended)

1. Fork or clone this repository
2. Go to repository **Settings** → **Pages**
3. Under "Source", select **main** branch and **/ (root)** folder
4. Click **Save**
5. Your site will be live at `https://yourusername.github.io/repository-name/`

### Option 2: Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/precision-systems.git
   cd precision-systems
   ```

2. Open `index.html` in your browser, or use a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve
   ```

3. Visit `http://localhost:8000`

## 📁 Project Structure

```
├── index.html          # Homepage
├── services.html       # Services overview
├── full-service.html   # Full-service deployment details
├── industries.html     # Industry-specific solutions
├── quote.html          # Quote request form
├── about.html          # About the company
├── contact.html        # Contact information & form
├── faq.html            # Frequently asked questions
├── privacy.html        # Privacy policy
├── terms.html          # Terms of service
├── 404.html            # Custom 404 error page
├── css/
│   └── styles.css      # Main stylesheet
├── js/
│   └── main.js         # JavaScript functionality
├── .nojekyll           # Disables Jekyll processing
└── README.md           # This file
```

## ✏️ Customization

### 1. Update Business Information

Search and replace the following placeholders throughout the HTML files:

| Placeholder | Replace With |
|-------------|--------------|
| `[Your City]` | Your actual city name |
| `[Nearby City]` | Neighboring cities you serve |
| `[Suburb]` | Suburbs in your service area |
| `(555) 123-4567` | Your actual phone number |
| `hello@precisionsystems.com` | Your actual email |
| `[Your Business Address]` | Your actual address |
| `Precision Systems` | Your company name (if different) |

### 2. Update Social Media Links

In the footer of each HTML file, update the social media links:

```html
<div class="footer-social">
  <a href="https://facebook.com/yourpage" aria-label="Facebook">f</a>
  <a href="https://instagram.com/yourhandle" aria-label="Instagram">ig</a>
  <a href="https://linkedin.com/company/yourcompany" aria-label="LinkedIn">in</a>
</div>
```

### 3. Add Your Logo

Replace the emoji favicon with your actual logo:

1. Add your logo file to the repository (e.g., `images/logo.png`)
2. Update the favicon link in each HTML file's `<head>`:
   ```html
   <link rel="icon" type="image/png" href="images/logo.png">
   ```

### 4. Connect Form Submissions

The quote and contact forms currently log to console. To receive submissions:

**Option A: Formspree (Easiest)**
1. Sign up at [formspree.io](https://formspree.io)
2. Create a form and get your endpoint
3. Update form actions:
   ```html
   <form action="https://formspree.io/f/yourformid" method="POST">
   ```

**Option B: Netlify Forms**
1. Deploy to Netlify instead of GitHub Pages
2. Add `netlify` attribute to forms:
   ```html
   <form name="quote" netlify>
   ```

**Option C: Custom Backend**
Modify `js/main.js` to send data to your own API endpoint.

### 5. Update Pricing

Edit `services.html` to reflect your actual starting prices:

```html
<p style="color: var(--accent-primary); font-weight: 600; margin-top: 16px;">Starting at $800</p>
```

### 6. Add Google Analytics (Optional)

Add before the closing `</head>` tag in each HTML file:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

## 🎨 Design Customization

### Colors

Edit CSS variables in `css/styles.css`:

```css
:root {
  --accent-primary: #00d4ff;    /* Main brand color */
  --accent-secondary: #7b5cff;  /* Secondary accent */
  --accent-tertiary: #ff6b35;   /* Tertiary accent */
  --bg-primary: #0a0a0f;        /* Main background */
  /* ... */
}
```

### Fonts

The site uses Google Fonts. To change fonts:

1. Choose fonts at [fonts.google.com](https://fonts.google.com)
2. Update the font link in each HTML `<head>`
3. Update font variables in `css/styles.css`

## 🔧 Technical Notes

- **No build process required** — pure HTML, CSS, and JavaScript
- **Mobile responsive** — works on all device sizes
- **Accessible** — semantic HTML and ARIA labels
- **Fast loading** — minimal dependencies, optimized CSS
- **SEO-friendly** — proper meta tags and semantic structure

## 📄 License

This template is provided for your use. Customize it freely for your business.

## 🤝 Support

For questions about customization or deployment, refer to:
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Formspree Documentation](https://formspree.io/docs)

---

Built with ⚡ for local PC builders and systems integrators.

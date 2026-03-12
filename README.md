# Madame La Joie 🎂

Artisan cake business website for **madamelajoie.com** — based in Ottawa, Ontario.

## Project Structure

```
madamelajoie/
├── index.html          # Main page
├── css/
│   └── style.css       # All styles
├── js/
│   └── main.js         # Interactivity
├── images/             # Add your cake photos here
├── package.json
└── README.md
```

## Local Development

Open the site locally with any of these methods:

**Option 1:** Just open `index.html` in your browser.

**Option 2:** Use a local server:
```bash
npx serve .
```
Then visit `http://localhost:3000`

## Deploy to Cloudflare Pages

Since you bought the domain on Cloudflare, here's how to deploy:

### Step 1: Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit - Madame La Joie website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/madamelajoie.git
git push -u origin main
```

### Step 2: Connect to Cloudflare Pages
1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Click **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**
3. Select your GitHub repository
4. Set build settings:
   - **Build command:** (leave empty — it's a static site)
   - **Build output directory:** `/` (root)
5. Click **Save and Deploy**

### Step 3: Add Custom Domain
1. In your Cloudflare Pages project → **Custom domains**
2. Add `madamelajoie.com`
3. Cloudflare will auto-configure DNS since the domain is already on Cloudflare

That's it! Every time you push to `main`, the site auto-deploys.

## Next Steps / Customization

- [ ] **Add real photos** — Replace placeholders in the gallery and about sections. Put images in an `images/` folder
- [ ] **Update contact info** — Replace placeholder phone number and email in `index.html`
- [ ] **Add social media links** — Update the Instagram/Facebook/TikTok links in the contact section
- [ ] **Set up a form backend** — Connect the order form to [Formspree](https://formspree.io) or use Cloudflare Workers for email
- [ ] **Add a favicon** — Create a small logo and add `<link rel="icon" href="favicon.ico">` to the HTML head
- [ ] **SEO** — Add Open Graph meta tags for social media sharing
- [ ] **Google Analytics** — Add tracking once the site is live

## Tech Stack

- Pure HTML, CSS, JavaScript (no frameworks needed)
- Google Fonts (Playfair Display + Lato)
- Cloudflare Pages for hosting
- Mobile-responsive design

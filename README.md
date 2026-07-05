# DT Engineering Solutions — Landing Page

A responsive, animated landing page for DT Engineering Solutions, built with **Bootstrap 5**, **vanilla JavaScript**, and custom CSS. Features a three-slide hero carousel where each slide pairs a distinct typographic animation with its own request form, plus a live image-preview popup on the Service Request form.

## ✨ Features

- **Responsive hero carousel** with three slides, each combining:
  - A unique headline animation (word-by-word rise, blurred focus-pull, drift & settle)
  - A matching **font style** per slide (Poppins bold, Playfair Display italic serif, Space Grotesk uppercase)
  - A themed request form (Contact Us / Service Request / Customer Request) with its own entrance animation
- **Live service preview popup** — selecting an option in the Service Request form's dropdown reveals a floating image card (250×150) for that service, with a spring-in animation and close button
- **Sticky, transparent-to-solid navbar** with embedded logo (graceful fallback if the logo file is missing)
- **Client-side form validation** with Bootstrap's validation states and success messages (no backend wired up yet — see [Connecting the forms](#connecting-the-forms))
- **Graceful image fallbacks** — logo, slide photos, and service preview images all degrade to a clean placeholder if the file isn't present, so the layout never breaks
- Fully responsive down to mobile, with reduced-motion support for accessibility

## 📁 Project structure

```
.
├── index.html          # Markup for navbar, hero carousel, forms, footer
├── styles.css           # All styling, animation keyframes, responsive rules
├── script.js             # Carousel logic, animation triggers, form validation, preview popup
├── images/               # Not included in the repo — add your own (see below)
│   ├── logo.png              # Site logo (navbar, footer, form headers)
│   ├── image1.jpg             # Slide 1 background photo
│   ├── image2.jpg             # Slide 2 background photo
│   ├── image3.jpg             # Slide 3 background photo
│   ├── service1.jpg           # Consulting preview (250×150)
│   ├── service2.jpg           # Support preview (250×150)
│   └── service3.jpg           # Development preview (250×150)
└── README.md
```

## 🖼️ Adding your images

Create an `images/` folder at the project root and drop in:

| File | Used for | Recommended size |
|---|---|---|
| `logo.png` | Navbar, footer, form card headers | Square, ~128×128px+ |
| `image1.jpg` / `image2.jpg` / `image3.jpg` | Hero slide backgrounds | Wide, ≥1600×900px |
| `service1.jpg` | Consulting preview popup | 250×150px |
| `service2.jpg` | Support preview popup | 250×150px |
| `service3.jpg` | Development preview popup | 250×150px |

Nothing breaks if a file is missing — placeholders take over automatically.

## 🚀 Getting started locally

No build step or dependencies to install — it's plain HTML/CSS/JS.

```bash
git clone https://github.com/<your-username>/<your-repo>.git
cd <your-repo>
```

Then just open `index.html` in a browser, or serve it locally:

```bash
python3 -m http.server 8000
# visit http://localhost:8000
```

## 🌐 Deploying with GitHub Pages

1. Push this project to a GitHub repository.
2. In the repo, go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to `Deploy from a branch`.
4. Choose the `main` branch and `/ (root)` folder, then **Save**.
5. Your site will be published at:
   ```
   https://<your-username>.github.io/<your-repo>/
   ```
   (GitHub Pages usually takes a minute or two to go live after the first deploy.)

## 🔌 Connecting the forms

The three forms (`Contact Us`, `Service Request`, `Customer Request`) currently validate on the client and show a success message, but don't send data anywhere. To wire them up:

- **Simplest**: point each `<form>` at a form backend (e.g. Formspree, Getform, Basin) by adding `action="https://your-endpoint"` and `method="POST"`.
- **Custom backend**: replace the `submit` handler in `script.js` with a `fetch()` call to your API, and show/hide `.form-success` based on the response.

## 🛠️ Tech stack

- [Bootstrap 5.3](https://getbootstrap.com/) (via CDN)
- [Font Awesome 6.4](https://fontawesome.com/) (via CDN)
- Google Fonts: Poppins, Inter, Playfair Display, Space Grotesk
- Vanilla JavaScript (no framework, no build tools)

## 📄 License
  MIT 

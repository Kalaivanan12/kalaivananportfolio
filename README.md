# Kalaivanan K - Premium Developer Portfolio

A modern, responsive personal portfolio website built with **React.js**, **Vite**, and **Tailwind CSS**.

## ✨ Features & Architecture

- **Brand Navigation**: Sticky navbar with blurred backdrop, active section indicator, and mobile drawer.
- **Hero Section**: Badges, dynamic code editor visual (`developerProfile.js`), glowing accents, primary/secondary CTAs, and direct resume download.
- **About Me**: Narrative overview with 3 core engineering pillars (Web Development, Problem Solving, Continuous Learning).
- **Technical Toolkit**: Categorized skills (Frontend Development, Programming & Databases, CMS & E-commerce, Tools & Software, Digital Marketing) with clean chips and hover interactions.
- **Professional Experience**: Modern vertical timeline showcasing roles at Cipher Mutex and Vivid Trans Tech Solutions (TASMAC E2E).
- **Selected Projects**: Showcase for the *E-Farming System* with interactive CSS dashboard mockup and comprehensive architecture details modal.
- **Academic Background**: Cards for M.Sc. Computer Science (Sri Krishna Arts and Science College) and B.Sc. Computer Science (National College).
- **Research & Publication**: Highlighting *"Achieving Efficient Secure Deduplication With User-Defined Access Control In Cloud"* with abstract points and research domains.
- **Certifications**: IBM Workshop, Business Analyst Assessment, and Java & Python credential cards.
- **Contact & Inquiries**: Form with input validation, mailto fallback, and direct channels (Email, Phone, Location, LinkedIn, GitHub).
- **Floating Controls**: Back-to-top button and accessibility-friendly layout.

---

## 🚀 Running the Project

### Development Server
```bash
npm run dev
```
Access the application at `http://localhost:5173`.

### Production Build
```bash
npm run build
```
Generates production-optimized static files in the `dist/` directory.

### Preview Build
```bash
npm run preview
```

---

## 📁 File Structure

```
kalaiportfolio/
├── public/
│   ├── favicon.svg          # Custom KK monogram favicon
│   └── resume.pdf           # Kalaivanan's Resume PDF
├── src/
│   ├── assets/              # Static assets
│   ├── components/
│   │   ├── About.jsx        # About me & 3 pillars
│   │   ├── BackToTop.jsx    # Floating smooth scroll button
│   │   ├── Certifications.jsx # Workshop & assessment credentials
│   │   ├── Contact.jsx      # Contact form & social cards
│   │   ├── Education.jsx    # M.Sc. and B.Sc. degree cards
│   │   ├── Experience.jsx   # Timeline of professional work
│   │   ├── Footer.jsx       # Brand, auto copyright & links
│   │   ├── Hero.jsx         # Hero banner & code editor mockup
│   │   ├── Navbar.jsx       # Sticky header & mobile menu
│   │   ├── Projects.jsx     # Selected projects & modal details
│   │   ├── Publication.jsx  # Academic paper presentation
│   │   ├── Skills.jsx       # Technical toolkit by category
│   │   └── SocialIcons.jsx  # Clean SVG icons (GitHub, LinkedIn)
│   ├── data/
│   │   └── portfolioData.js # Single source of truth for all data
│   ├── App.jsx              # Main layout assembler
│   ├── index.css            # Tailwind CSS & design variables
│   └── main.jsx             # React DOM entry point
├── index.html               # SEO metadata & OpenGraph tags
├── package.json
└── vite.config.js
```

---

## 🔑 Environment Configuration

Create a `.env` file in the project root:
```env
VITE_WEB3FORMS_ACCESS_KEY=your_web3forms_access_key_here
```
> [!NOTE]
> `.env` is automatically ignored in `.gitignore`. Obtain your free access key at [web3forms.com](https://web3forms.com).

---

## 🛠️ Customization

All personal details, experiences, skills, and projects are centralized in [`src/data/portfolioData.js`](file:///c:/Users/Kalai%20Karthi/Desktop/Program/Kalaiportfolio/src/data/portfolioData.js). To update any content, edit this file without needing to modify component code.

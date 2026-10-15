# Hemalatha Annaboina — Professional Developer Portfolio

> **Building Intelligent Applications, One Line of Code at a Time.**

A modern, high-performance developer portfolio website engineered with **React 19**, **Vite**, **Vanilla CSS Design System**, and **Canvas Animations**. Tailored for technical recruiters, engineering managers, and collaborators seeking a dedicated fresher software developer with strong computer science fundamentals, enterprise Java full-stack skills, and practical Generative AI project experience.

---

## 🚀 Live Demo & Repository
- **GitHub Repository**: [https://github.com/HemalathaAnnaboina](https://github.com/HemalathaAnnaboina)
- **LinkedIn**: [https://linkedin.com/in/hemalatha-annaboina-015947306](https://linkedin.com/in/hemalatha-annaboina-015947306)
- **LeetCode**: [https://leetcode.com/u/HemalathaAnnaboina/](https://leetcode.com/u/HemalathaAnnaboina/)

---

## 🛠️ Tech Stack & Architecture

- **Frontend Framework**: React.js 19 (Functional Components, Hooks)
- **Build Tooling**: Vite 8 (Ultra-fast HMR & production rollup bundling)
- **Styling**: Modern Vanilla CSS Design System with dark space theme, custom glassmorphism, responsive CSS grid/flexbox, and typography (Outfit & JetBrains Mono)
- **Visuals & Motion**: Interactive HTML5 Particle Canvas (`BackgroundCanvas.jsx`), CSS glowing gradients, accessible reduced-motion support
- **Icons**: Lucide Icons & Custom SVG Brand Icons (`SocialIcons.jsx`)
- **Centralized Data**: All content managed in `src/data/portfolioData.js`

---

## 📂 Project Structure

```text
profoilo/
├── public/
│   ├── avatar.png               # Developer avatar image
│   ├── resume.pdf               # Downloadable & viewable resume PDF
│   ├── awards/                  # Hackathon and trophy images
│   │   └── codestorm-2025.jpg
│   ├── certificates/            # Professional certificate badge images
│   │   └── aws-clf-c02.jpg
│   └── projects/                # Featured project screenshots & diagrams
│       ├── aws-cost.jpg
│       ├── email-assistant.jpg
│       ├── hospital-mgmt.jpg
│       └── voice-admission.jpg
├── src/
│   ├── assets/                  # Logos and internal assets
│   ├── components/
│   │   ├── About.jsx            # Academic background, strengths & highlight cards
│   │   ├── Achievements.jsx     # Hackathons (SYNC AI CODESTORM 2nd prize) & milestones
│   │   ├── BackgroundCanvas.jsx # Ambient HTML5 interactive particle canvas
│   │   ├── Certifications.jsx   # AWS Cloud Practitioner, Infosys & Future Interns credentials
│   │   ├── CodingProfiles.jsx   # LeetCode, GitHub, Codeforces & CodeChef handles
│   │   ├── Contact.jsx          # Validated contact form, direct email copy & integration guide
│   │   ├── Education.jsx        # Academic timeline (B.Tech 8.99 CGPA, Inter 96.6%, SSC 96%)
│   │   ├── Experience.jsx       # Practical internships (Future Interns & Infosys Springboard)
│   │   ├── FeaturedProjects.jsx # Full-stack & AI projects with architecture modals
│   │   ├── Footer.jsx           # Monogram branding, back-to-top & social links
│   │   ├── Hero.jsx             # Typewriter role titles, headline, CTAs & developer metrics
│   │   ├── Navbar.jsx           # Responsive sticky header with scroll-spy & mobile drawer
│   │   ├── ResumeModal.jsx      # In-browser full resume viewer and printable sheet
│   │   ├── ResumeSection.jsx    # Resume download card and recruiter overview
│   │   ├── SocialIcons.jsx      # Pixel-perfect SVG brand icons
│   │   └── TechnicalSkills.jsx  # Categorized skills (Java, Python, React, FastAPI, SQL, LLMs)
│   ├── data/
│   │   └── portfolioData.js     # Single source of truth for all content and links
│   ├── App.css
│   ├── App.jsx                  # Main application orchestrator
│   ├── index.css                # Global CSS variables, utility classes & animations
│   └── main.jsx                 # React root mounting
├── index.html                   # HTML template with SEO meta tags & font imports
├── package.json
└── vite.config.js
```

---

## 💻 Local Setup & Development

### 1. Prerequisites
- **Node.js** (v18.0.0 or higher recommended)
- **npm** (or yarn / pnpm)

### 2. Installation
Clone the repository and install dependencies:
```bash
# Navigate to the project directory
cd profoilo

# Install dependencies
npm install
```

### 3. Run Locally
Start the development server with Hot Module Replacement (HMR):
```bash
npm run dev
```
Open your browser and navigate to:
```text
http://localhost:5173/
```

### 4. Build for Production
To generate an optimized production bundle:
```bash
npm run build
```
Preview the production build locally:
```bash
npm run preview
```

---

## 📄 Managing Your Resume & Certificate Images

### Uploading a New Resume PDF
1. Save your latest resume file as:
   ```text
   public/resume.pdf
   ```
2. The portfolio will automatically serve this PDF whenever a recruiter clicks **Download Resume** or **View Resume**.
3. If you want to rename the file or use an external URL (such as Google Drive or cloud storage), simply update the `resumePath` key in `src/data/portfolioData.js`:
   ```javascript
   export const personalInfo = {
     // ...
     resumePath: "/resume.pdf", // or "https://your-cloud-url.pdf"
   };
   ```

### Adding Certificate & Hackathon Images
Place your image files in:
- Certificates: `public/certificates/your-cert-name.jpg`
- Awards: `public/awards/your-award-name.jpg`
- Projects: `public/projects/your-project-screenshot.jpg`

Reference these paths inside `src/data/portfolioData.js`.

---

## ✏️ How to Add or Update Content

All website data is centralized in `src/data/portfolioData.js`. You do **not** need to touch JSX or component logic to update your portfolio!

### Adding a New Project
Open `src/data/portfolioData.js` and add an entry to the `projects` array:
```javascript
{
  id: "your-project-id",
  title: "Your Project Title",
  subtitle: "One line summary of what it does",
  category: "AI & Generative AI", // or "Full Stack Java", "Cloud & AI Agents"
  github: "https://github.com/HemalathaAnnaboina/your-repo",
  demo: "https://your-demo-url.com", // or null
  image: "/projects/your-image.jpg",
  technologies: ["React", "FastAPI", "Python", "SQL"],
  featured: true,
  summary: "Comprehensive description of the application.",
  highlights: [
    "Feature 1 with technical detail",
    "Feature 2 with architecture detail"
  ],
  architecture: "Frontend -> API Gateway -> Database"
}
```

### Adding a New Certification
Add an entry to the `certifications` array in `src/data/portfolioData.js`:
```javascript
{
  id: "new-cert-id",
  name: "Certification Name",
  issuer: "Issuing Organization",
  issueDate: "Month Year",
  expiryDate: "Month Year", // or null
  score: "Score or Pass",
  credentialId: "CREDENTIAL-ID-1234",
  image: "/certificates/cert-image.jpg",
  verifyUrl: "https://verification-link.com",
  status: "Active & Verified",
  description: "What skills and domains this certificate covers."
}
```

### Adding Hackathon or Coding Achievements
Add an entry to the `achievements` array in `src/data/portfolioData.js`:
```javascript
{
  id: "achievement-id",
  title: "Award Title",
  organization: "Host / Organization",
  year: "2026",
  badge: "1st Prize / Winner",
  category: "Hackathon",
  image: "/awards/award.jpg",
  description: "Description of your contribution and project.",
  proofUrl: null
}
```

---

## 🌐 Deploying to Vercel

### Option A: Via GitHub (Recommended)
1. Push this project to your GitHub account:
   ```bash
   git init
   git add .
   git commit -m "Complete professional developer portfolio"
   git branch -M main
   git remote add origin https://github.com/HemalathaAnnaboina/portfolio.git
   git push -u origin main
   ```
2. Log in to [Vercel](https://vercel.com/) with your GitHub account.
3. Click **Add New Project** and select your `portfolio` repository.
4. Vercel automatically detects **Vite**:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click **Deploy**. Your portfolio will be live with free global CDN and automatic HTTPS!

### Option B: Via Vercel CLI
```bash
# Install Vercel CLI globally
npm i -g vercel

# Deploy directly from terminal
vercel
```

---

## 🛡️ Authenticity & Quality Assurance Checklist

- ✅ **No Fabricated Data**: Authentic academic records (B.Tech 8.99 CGPA, Inter 96.6%, SSC 96%), verified AWS CLF-C02 certification (Score 881), genuine hackathon wins (SYNC AI CODESTORM 2nd prize), and official handles for LeetCode, GitHub, Codeforces, and CodeChef.
- ✅ **Fully Responsive**: Optimized for 4K desktop, laptops, tablets, and smartphones.
- ✅ **Zero Build Errors**: Clean compilation under Vite 8 and React 19.
- ✅ **Recruiter Usability**: High-contrast dark theme, accessible CTA buttons, in-browser resume viewer, and direct contact options.

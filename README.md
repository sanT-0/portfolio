# Santhosh S - Developer Portfolio

A responsive single-page portfolio for Santhosh S, a Python Full-Stack Developer and Artificial Intelligence and Data Science graduate.

The portfolio presents professional experience, technical skills, GitHub projects, certifications, and contact information in a clean, responsive interface.

## Live Portfolio

View the hosted portfolio at:

https://sant-0.github.io/portfolio/

The main entry point is `index.html`.

## Live Profile Links

- GitHub: https://github.com/sanT-0
- LinkedIn: https://www.linkedin.com/in/santhosh-s599
- Email: santhoshsankar599@gmail.com
- LeetCode: https://leetcode.com/u/sanT-0/

## Features

- Responsive layout for desktop, tablet, and mobile screens
- Hero section with engineering focus and resume download links
- About section with education details and professional highlights
- Experience section covering current DGi WORX and previous PySpiders internships
- Technical skills grouped by backend, frontend, data and storage, delivery and operations, and ML and automation
- A “How I Work” section describing the development approach
- Project cards linked to GitHub repositories
- Project filtering by Python, ML / DS, and Data / BI
- Certification cards linked to Udemy and LinkedIn verification pages
- Scroll reveal animations
- Mobile navigation toggle
- Contact form with client-side validation
- Static contact workflow using a prefilled `mailto:` link
- GitHub, LinkedIn, LeetCode, and email contact links
- Reduced-motion support

## Portfolio Sections

### Hero

The hero section introduces Santhosh S and highlights software, API, and automation work, with links to projects, contact information, and the resume.

### About

The About section includes:

- B.Tech in Artificial Intelligence and Data Science
- Tagore Institute of Engineering and Technology
- CGPA: 7.61 / 10
- Graduation period: 2022 - 2026
- Current focus on backend engineering and Cloud / DevOps learning
- Professional highlights and working principles

### Experience

The experience section currently includes:

- **Full Stack Developer Intern, DGi WORX** — Chennai, India, October 2026 to present. Focus areas include backend services and REST APIs, frontend and database-driven application concepts, debugging, and Cloud / DevOps practices.
- **Python with Data Science Intern, PySpiders** — Bengaluru, India, January 2026 to June 2026.

PySpiders internship highlights include:

- Cleaning, preprocessing, transforming, and analyzing 15+ real-world datasets
- Creating four interactive dashboards and visualizations
- Writing and optimizing SQL queries
- Reducing manual data extraction effort by 40%
- Automating weekly data processing and reporting workflows

### Skills

The current skills section groups tools and technologies into:

- Backend engineering: Python, FastAPI, Django, Flask, REST APIs, Pydantic
- Frontend: React, JavaScript, HTML, CSS
- Data and storage: MySQL, SQL, SQLAlchemy, Pandas, NumPy, Matplotlib
- Delivery and operations: Git, GitHub, Docker, Linux, CI/CD learning
- ML and automation: Scikit-learn, XGBoost, n8n, EDA, SHAP (learning / project use)

### How I Work

The approach section describes four steps: understand the problem, build in small steps, test and document, and deploy and improve.

### Projects

The portfolio includes these project entries:

1. **Retail Sales Forecasting and Workflow Automation**
   - XGBoost and LSTM forecasting system
   - FastAPI backend
   - n8n workflow automation
   - Docker support
   - Repository: https://github.com/sanT-0/Retail-Forecasting-System-with-Gmail-Automation

2. **Python Banking Application**
   - Console-based banking simulator
   - Balance tracking and transaction validation
   - Python structural pattern matching
   - Repository: https://github.com/sanT-0/Python-Banking-Program

3. **E-Commerce Sales Performance Dashboard**
   - Three-page Power BI dashboard
   - 15+ DAX measures
   - Star schema data modeling
   - Analysis of 150+ transactions
   - Repository: https://github.com/sanT-0/shopindia-powerbi-dashboard

4. **Dataset Analysis and Reporting Workflows**
   - Python and SQL analysis across 15+ datasets
   - KPI dashboards and repeatable reporting workflows
   - Based on data science internship work

5. **Python Chatbot**
   - Intent classification and context handling
   - TensorFlow, Keras, and Flask
   - Repository: https://github.com/sanT-0/Python-Chatbot

6. **Global Development Analytics**
   - Exploratory analysis of Gapminder global development data
   - Trends across health, wealth, and population indicators
   - Repository: https://github.com/sanT-0/Global-Development-Analytics

7. **LeetCode Solutions**
   - Python and SQL solutions
   - Data structures, algorithms, database, and interview preparation
   - Repository: https://github.com/sanT-0/leetcode-solutions

8. **Python Quiz**
   - Command-line quiz for Python history and syntax fundamentals
   - Repository: https://github.com/sanT-0/Python-Quiz

9. **Developer Portfolio Website**
   - Responsive static portfolio for projects, skills, experience, and certifications
   - Built with HTML5, CSS3, and JavaScript
   - Hosted with GitHub Pages
   - Repository: https://github.com/sanT-0/portfolio
   - Live site: https://sant-0.github.io/portfolio/

### Certifications

The credentials section includes verified or linked certificates for:

- Python for Machine Learning - Udemy
- Python for Beginners - Udemy
- From Prompt Engineering to Agent Engineering - Udemy
- HTML and CSS for Beginners From Basic to Advance - Udemy
- Microsoft Excel: Beginner to Advanced - Udemy
- Data Science Fundamentals - IBM Cloud DigiLabs
- Python with Data Science Internship - PySpiders / LinkedIn
- Cybersecurity Exam Completion - RedTeam Leaders

## Project Structure

```text
Portfolio/
|-- index.html                Main portfolio page
|-- stylesheet.css            Site styles and responsive layout
|-- script.js                 Navigation, project filters, and scroll reveals
|-- ascets/
|   |-- img.png               Profile image
|   |-- logo.png              Favicon
|   |-- Santhosh_S_Developer_resume.pdf
|-- .github/workflows/
|   |-- static.yml            GitHub Pages deployment workflow
|-- README.md                 Project documentation
```

Project repository: https://github.com/sanT-0/portfolio

> The folder is named `ascets` in the current project and is referenced exactly that way by the HTML file.

## How to Run Locally

This is a static HTML, CSS, and JavaScript project. No package manager or build step is required.

### Option 1: Open the HTML file

Double-click `index.html` or open it in a browser.

### Option 2: Use VS Code Live Server

1. Open the project folder in VS Code.
2. Install the Live Server extension if it is not already installed.
3. Right-click `index.html`.
4. Select **Open with Live Server**.

### Option 3: Use a local Python server

From the project folder, run:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000/index.html
```

## Contact Form Behavior

The contact form is designed for a static website. It validates the required fields and prepares a `mailto:` draft addressed to `santhoshsankar599@gmail.com`. It does not send data to a server or store visitor information.

The interaction code is split between `script.js` and the inline script at the end of `index.html`:

1. `script.js` handles scroll reveals, mobile navigation, and project filters.
2. The inline script at the end of `index.html` validates the required contact fields.
3. The visitor's name, email, subject, and message are added to a `mailto:` URL.
4. The visitor's default email application opens with a prefilled draft.

For a server-side contact form, replace the `mailto:` workflow with a backend endpoint or a form service such as Formspree, FormSubmit, or Netlify Forms.

## Customization Guide

### Update personal information

Edit the hero, About, experience, and contact content in `index.html`.

### Add a project

Copy an existing `.proj-card` inside the `.proj-grid` and update:

- `data-cat`: use `python`, `ml`, or `data`
- Project name
- Description
- GitHub links
- Technology tags

If a new category is added, create a matching filter button with the same `data-filter` value.

### Add a certificate

Copy an existing `.cert-card` inside `.certs-grid`. For a clickable certificate, use the link pattern:

```html
<a href="CERTIFICATE_URL" target="_blank" rel="noopener" class="cert-card reveal cert-link">
  <div class="cert-icon">CERT</div>
  <div>
    <div class="cert-name">Certificate Name</div>
    <div class="cert-issuer">Issuing Organization</div>
    <div class="cert-year">2025 · View certificate</div>
  </div>
</a>
```

### Change the visual theme

Update the CSS variables at the top of `stylesheet.css`:

- `--bg`, `--bg2`, and `--bg3`: background colors
- `--accent`, `--accent2`, and `--accent3`: highlight colors
- `--text` and `--muted`: typography colors
- `--fh`: heading font
- `--fm`: monospace font

## Dependencies

The project has no npm or Python dependencies.

It loads two fonts from Google Fonts:

- DM Sans
- Instrument Serif

An internet connection is needed for those fonts. The page still works with fallback fonts if Google Fonts is unavailable.

## Browser Support

The portfolio uses standard HTML, CSS, and JavaScript APIs and is intended for current versions of:

- Google Chrome
- Microsoft Edge
- Mozilla Firefox
- Safari

## Deployment

Because this is a static project, it can be deployed using:

- GitHub Pages
- Netlify
- Vercel
- Cloudflare Pages
- Any web server that can serve HTML files

The portfolio is hosted on GitHub Pages at https://sant-0.github.io/portfolio/. The repository includes `.github/workflows/static.yml` for the GitHub Pages deployment workflow. GitHub Pages serves `index.html` as the default homepage.

## Resume Download

The navigation and hero download links point to `./ascets/Santhosh_S_Developer_resume.pdf`, which is the resume file included in the repository.

## Author

**Santhosh S**

Python Full-Stack Developer | AI and Data Science Graduate

- Email: santhoshsankar599@gmail.com
- GitHub: https://github.com/sanT-0
- LinkedIn: https://www.linkedin.com/in/santhosh-s599
- Location: Cuddalore, Tamil Nadu, India

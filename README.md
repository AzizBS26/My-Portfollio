# Mohamed Aziz Ben Slima - Portfolio

A modern, AI-focused portfolio website showcasing my expertise in Data Science, Machine Learning, and Full-Stack Development.

## 🌟 Features

- **Modern Next.js 15 Stack**: Built with React 19, TypeScript, and App Router
- **Dark/Light Theme**: Persistent theme toggle with smooth transitions
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Dynamic Content**: 
  - Projects (Academic, Internship, Personal)
  - Certifications (18+ professional credentials)
  - Activities & Events (6+ events)
  - Skills with proficiency levels
  - Contact form with email integration
- **Performance Optimized**: Image optimization, code splitting, fast load times
- **Fully Customizable**: Easy to modify data and styling

## 🚀 Tech Stack

- **Frontend**: Next.js 15.3.5, React 19, TypeScript 5
- **Styling**: Tailwind CSS 4, Custom CSS Variables
- **UI Components**: shadcn/ui, Lucide Icons, React Icons
- **Database**: PostgreSQL with Prisma ORM
- **Deployment**: Docker, Caddy Server
- **Package Manager**: Bun

## 📂 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── page.tsx           # Main portfolio page
│   ├── layout.tsx         # Root layout
│   ├── about/             # About page
│   ├── skills/            # Skills page
│   ├── experience/        # Experience page
│   ├── projects/          # All projects
│   ├── certifications/    # All certifications
│   ├── activities/        # All activities
│   ├── contact/           # Contact page
│   └── api/               # API routes
├── components/            # React components
│   ├── navbar.tsx        # Navigation component
│   └── ui/               # shadcn/ui components
├── lib/                  # Utility functions
└── hooks/                # React hooks

public/
├── icons/                # SVG/ICO icons
├── activities/           # Activity images
├── certifications/       # Certification images
└── profile.jpg           # Profile photo

prisma/
└── schema.prisma         # Database schema
```

## 🛠️ Installation

### Prerequisites
- Node.js 18+ or Bun
- PostgreSQL (optional, for database features)

### Setup

1. Clone the repository:
```bash
git clone https://github.com/AzizBS26/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
bun install
# or
npm install
```

3. Configure environment variables:
```bash
cp .env.example .env.local
# Edit .env.local with your settings
```

4. Run development server:
```bash
bun run dev
# or
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📝 Customization

### Edit Personal Information
Edit `src/app/page.tsx` - `PERSONAL_INFO` object:
```typescript
const PERSONAL_INFO = {
  name: 'Your Name',
  title: 'Your Title',
  email: 'your.email@example.com',
  github: 'https://github.com/yourusername',
  linkedin: 'https://linkedin.com/in/yourprofile',
  bio: 'Your bio...'
}
```

### Add/Modify Projects
Update `PROJECTS` object in `src/app/page.tsx`:
```typescript
const PROJECTS = {
  academic: [...],
  internship: [...],
  personal: [...]
}
```

### Add/Modify Certifications
Update `CERTIFICATIONS` array in `src/app/page.tsx`

### Add/Modify Activities
Update `ACTIVITIES` array in `src/app/page.tsx`

### Add/Modify Skills
Update `SKILLS` object in `src/app/page.tsx`

## 📸 Adding Images

- **Profile Photo**: Place in `/public/profile.jpg`
- **Activity Images**: Place in `/public/activities/` folder
- **Certification Images**: Place in `/public/certifications/` folder
- **Icon Assets**: Place in `/public/icons/` folder

## 🎨 Theme Customization

Edit color variables in CSS files:
- Primary color: `#1E2A38` (Navy)
- Accent color: `#00FFFF` (Cyan)
- Support for dark/light modes

## 🚢 Deployment

### Docker
```bash
docker build -t portfolio .
docker run -p 3000:3000 portfolio
```

### Vercel (Recommended)
```bash
vercel deploy
```

### Other Platforms
- Netlify
- GitHub Pages
- Traditional hosting (with Node.js support)

## 📄 Pages

- **Home** (`/`) - Main portfolio with highlights
- **About** (`/about`) - Personal background and education
- **Skills** (`/skills`) - Technical expertise and proficiency levels
- **Experience** (`/experience`) - Professional experience timeline
- **Projects** (`/projects`) - All academic, internship, and personal projects
- **Certifications** (`/certifications`) - Professional credentials
- **Activities** (`/activities`) - Events, competitions, and community involvement
- **Contact** (`/contact`) - Contact form and information

## 🔧 Build & Production

```bash
# Build for production
bun run build
# or
npm run build

# Start production server
bun run start
# or
npm start
```

## 📊 Performance

- Optimized images with Next.js Image component
- Code splitting and lazy loading
- CSS-in-JS optimization
- Responsive design for all devices

## 🤝 Contributing

Feel free to fork and adapt this template for your own portfolio!

## 📄 License

MIT License - Feel free to use this for your portfolio

## 🔗 Links

- **Live Portfolio**: [Your deployed URL]
- **GitHub**: https://github.com/AzizBS26
- **LinkedIn**: https://linkedin.com/in/mohamed-aziz-ben-slima
- **Email**: mohammedaziz.benslima@esprit.tn

## 📧 Contact

For any questions about the portfolio, feel free to reach out!

---

**Built with ❤️ using Next.js, React, and Tailwind CSS**

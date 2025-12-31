# Mohamed Aziz Ben Slima - Portfolio

A modern, AI-focused portfolio website showcasing my expertise in Data Science, Machine Learning, and Full-Stack Development. Features an intelligent AI-powered chat assistant for interactive visitor engagement.

## 🌟 Features

- **Modern Next.js 15 Stack**: Built with React 19, TypeScript, and App Router
- **Dark/Light Theme**: Persistent theme toggle with smooth transitions
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **🤖 AI-Powered Chat Assistant**: 
  - Floating chat bubble with logo branding
  - Real-time streaming responses from Groq API
  - Markdown rendering for formatted responses
  - Welcome screen with suggested questions
  - Follow-up questions for deeper conversations
  - Rate limiting for secure API usage
  - Responsive design (mobile & desktop)
  - Modern glassmorphism header with online status indicator
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
- **AI Integration**: Groq API (llama-3.3-70b-versatile), Vercel AI SDK
- **Database**: PostgreSQL with Prisma ORM
- **Deployment**: Docker, Caddy Server, Vercel
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
│       └── chat/          # Chat API endpoint (POST /api/chat)
├── components/            # React components
│   ├── chat-assistant.tsx # AI chat bubble component
│   ├── navbar.tsx         # Navigation component
│   └── ui/                # shadcn/ui components
├── lib/                   # Utility functions
│   ├── db.ts             # Database utilities
│   ├── cv-context.ts     # CV data & suggested questions for AI
│   └── utils.ts          # Helper functions
└── hooks/                 # React hooks

public/
├── icons/                # SVG/ICO icons
├── activities/           # Activity images
├── certifications/       # Certification images
├── logo-AB.svg          # Chat assistant logo
└── profile.jpg          # Profile photo

prisma/
└── schema.prisma         # Database schema
```

## 🛠️ Installation

### Prerequisites
- Node.js 18+ or Bun
- PostgreSQL (optional, for database features)
- Groq API Key (for AI chat assistant) - Get free at [console.groq.com](https://console.groq.com)

### Setup

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio.git
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
```

Edit `.env.local` and add your Groq API key:
```env
GROQ_API_KEY=your_groq_api_key_here
DATABASE_URL=your_database_url_optional
```

4. Run development server:
```bash
bun run dev
# or
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 💬 AI Chat Assistant Setup

The portfolio includes an intelligent AI chat assistant powered by Groq:

### Features
- **Streaming Responses**: Real-time response streaming for smooth UX
- **Markdown Support**: Formatted text with bold, italic, and lists
- **CV Context**: Automatically provides information about your background
- **Suggested Questions**: Guide visitors with pre-defined questions
- **Rate Limiting**: 10 requests per minute per IP to prevent abuse
- **Responsive UI**: Works seamlessly on mobile and desktop
- **Theme Support**: Works in both dark and light modes

### Configuration
1. Get your Groq API key from [console.groq.com](https://console.groq.com) (free tier available)
2. Add to `.env.local`:
```env
GROQ_API_KEY=your_key_here
```

### Customization
Edit `src/lib/cv-context.ts` to customize:
- CV information displayed in responses
- Suggested questions shown to visitors
- System prompt for the AI

Example:
```typescript
export const CV_CONTEXT = `Your CV content here...`
export const SUGGESTED_QUESTIONS = [
  "What is your experience with AI?",
  "Tell me about your projects...",
  // Add more questions
]
```

Edit `src/app/api/chat/route.ts` to change:
- AI model (currently: llama-3.3-70b-versatile)
- Temperature and response length
- Rate limiting parameters

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

### Chat Assistant Styling
The chat bubble is fully customizable:
- **Logo**: Edit the `<img>` in `src/components/chat-assistant.tsx` (currently using `/logo-AB.svg`)
- **Colors**: Modify Tailwind classes in the component
- **Position**: Change `bottom-4 right-4` to reposition the bubble
- **Animations**: Edit keyframes in the `<style>` block

## 🚢 Deployment

### Vercel (Recommended - Free & Easy)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

**Important**: Make sure to add environment variables in Vercel dashboard:
1. Go to Project Settings → Environment Variables
2. Add `GROQ_API_KEY` with your Groq API key
3. Redeploy

### Docker
```bash
docker build -t portfolio .
docker run -p 3000:3000 -e GROQ_API_KEY=your_key portfolio
```

### Other Platforms
- Netlify (with serverless functions)
- GitHub Pages (static only)
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

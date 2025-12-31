'use client'

import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from '@/components/navbar'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Separator } from '@/components/ui/separator'
import {
  Database,
  Brain,
  TrendingUp,
  Code,
  Mail,
  Github,
  Linkedin,
  ExternalLink,
  Moon,
  Sun,
  GraduationCap,
  Briefcase,
  Sparkles,
  ChevronRight,
  Award,
  Cpu,
  Zap,
  Mic,
  Activity,
  BarChart3,
  MessageSquare,
  Building2,
  PawPrint,
  Smartphone,
  Rocket,
  Folder,
  Calendar,
  MapPin,
  Users,
  RefreshCw,
  Lightbulb,
  Clock,
  FileText,
  Download
} from 'lucide-react'
import { 
  FaAws,
  FaGithub,
  FaPython,
  FaDatabase,
  FaRobot,
  FaCertificate,
  FaAward,
  FaBrain,
  FaJava,
  FaPhp
} from 'react-icons/fa'
import {
  SiTensorflow,
  SiPytorch,
  SiOpencv,
  SiNvidia,
  SiPython,
  SiCplusplus,
  SiDotnet,
  SiR,
  SiHtml5,
  SiCss3,
  SiReact,
  SiAngular,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiSpringboot,
  SiSymfony,
  SiScikitlearn,
  SiPandas,
  SiNumpy,
  SiMysql,
  SiMongodb,
  SiPostgresql,
  SiOracle,
  SiDocker,
  SiJenkins,
  SiIntellijidea,
  SiJupyter
} from 'react-icons/si'
import { TbLetterC } from 'react-icons/tb'
import { HiScale } from 'react-icons/hi'

// ============= CUSTOMIZABLE DATA =============
// Edit these sections to personalize your portfolio

const PERSONAL_INFO = {
  name: 'Mohamed Aziz Ben Slima',
  title: 'Data Science Student & AI/LLM Builder',
  tagline: 'Building AI Agents, Fine-Tuned LLMs & Modern Web Applications',
  email: 'mohammedaziz.benslima@esprit.tn',
  github: 'https://github.com/AzizBS26',
  linkedin: 'https://www.linkedin.com/in/mohamed-aziz-ben-slima',
  bio: `I am a Data Science and AI enthusiast passionate about building intelligent solutions using large language models, fine-tuning techniques, and advanced AI tools like Ollama. I have hands-on experience in training and customizing models, designing AI pipelines, and leveraging machine learning for practical applications. Driven by curiosity and innovation, I aim to create impactful AI-powered solutions while continuously expanding my expertise in multimodal AI, computer vision, and strategic data-driven projects.`
}

const SKILLS = {
  'Programming Languages': [
    { name: 'Python', icon: <SiPython className="w-5 h-5 text-yellow-400" /> },
    { name: 'C', icon: <TbLetterC className="w-5 h-5 text-blue-500" /> },
    { name: 'C++', icon: <SiCplusplus className="w-5 h-5 text-blue-500" /> },
    { name: 'Java', icon: <FaJava className="w-5 h-5 text-orange-500" /> },
    { name: 'PHP', icon: <FaPhp className="w-5 h-5 text-indigo-500" /> },
    { name: '.NET', icon: <SiDotnet className="w-5 h-5 text-purple-500" /> },
    { name: 'R', icon: <SiR className="w-5 h-5 text-sky-500" /> }
  ],
  'Artificial Intelligence & Machine Learning': [
    { name: 'TensorFlow', icon: <SiTensorflow className="w-5 h-5 text-orange-400" /> },
    { name: 'PyTorch', icon: <SiPytorch className="w-5 h-5 text-orange-500" /> },
    { name: 'Scikit-learn', icon: <SiScikitlearn className="w-5 h-5 text-amber-500" /> },
    { name: 'Pandas', icon: <SiPandas className="w-5 h-5 text-purple-600" /> },
    { name: 'NumPy', icon: <SiNumpy className="w-5 h-5 text-blue-500" /> },
    { name: 'OpenCV', icon: <SiOpencv className="w-5 h-5 text-green-500" /> },
    { name: 'NLP', icon: <FaBrain className="w-5 h-5 text-pink-500" /> },
    { name: 'RAG', icon: <FaRobot className="w-5 h-5 text-emerald-500" /> }
  ],
  'Databases & Data': [
    { name: 'SQL/MySQL', icon: <SiMysql className="w-5 h-5 text-blue-600" /> },
    { name: 'MongoDB', icon: <SiMongodb className="w-5 h-5 text-green-600" /> },
    { name: 'PostgreSQL', icon: <SiPostgresql className="w-5 h-5 text-sky-700" /> },
    { name: 'Oracle', icon: <SiOracle className="w-5 h-5 text-red-500" /> },
    { name: 'Power BI', icon: <BarChart3 className="w-5 h-5 text-yellow-500" /> }
  ],
  'Frontend Technologies': [
    { name: 'HTML5', icon: <SiHtml5 className="w-5 h-5 text-orange-500" /> },
    { name: 'CSS3', icon: <SiCss3 className="w-5 h-5 text-blue-500" /> },
    { name: 'React.js', icon: <SiReact className="w-5 h-5 text-cyan-400" /> },
    { name: 'Angular', icon: <SiAngular className="w-5 h-5 text-red-500" /> },
    { name: 'Next.js', icon: <SiNextdotjs className="w-5 h-5 text-foreground" /> }
  ],
  'Backend Frameworks': [
    { name: 'Node.js', icon: <SiNodedotjs className="w-5 h-5 text-green-500" /> },
    { name: 'Express.js', icon: <SiExpress className="w-5 h-5 text-foreground" /> },
    { name: 'Spring Boot', icon: <SiSpringboot className="w-5 h-5 text-green-600" /> },
    { name: 'Symfony', icon: <SiSymfony className="w-5 h-5 text-foreground" /> }
  ],
  'Cloud & DevOps': [
    { name: 'Docker', icon: <SiDocker className="w-5 h-5 text-blue-500" /> },
    { name: 'AWS', icon: <FaAws className="w-5 h-5 text-orange-500" /> },
    { name: 'Git/GitHub', icon: <FaGithub className="w-5 h-5" /> },
    { name: 'CI/CD', icon: <SiJenkins className="w-5 h-5 text-red-500" /> }
  ],
  'Development Tools': [
    { name: 'VS Code', icon: <Code className="w-5 h-5 text-blue-500" /> },
    { name: 'IntelliJ IDEA', icon: <SiIntellijidea className="w-5 h-5 text-purple-600" /> },
    { name: 'Teams', icon: <Users className="w-5 h-5 text-purple-500" /> },
    { name: 'Jupyter', icon: <SiJupyter className="w-5 h-5 text-orange-500" /> }
  ],
  'Soft Skills': [
    { name: 'Analytic Thinking', icon: <Brain className="w-5 h-5 text-accent" /> },
    { name: 'Team Work', icon: <Users className="w-5 h-5 text-accent" /> },
    { name: 'Communication', icon: <MessageSquare className="w-5 h-5 text-accent" /> },
    { name: 'Adaptability', icon: <RefreshCw className="w-5 h-5 text-accent" /> },
    { name: 'Problem Solving', icon: <Lightbulb className="w-5 h-5 text-accent" /> },
    { name: 'Time Management', icon: <Clock className="w-5 h-5 text-accent" /> }
  ]
}

const PROFESSIONAL_EXPERIENCE = [
  {
    title: 'Data Analytics Intern',
    company: 'Tunisie Telecom',
    location: 'Tunis, Tunisia',
    period: 'Jul 2025 - Sep 2025',
    summary: 'Optimized ETL pipelines for SOS credit transactions and built interactive Power BI dashboards accelerating operational decision-making.',
    highlights: [
      'Churn prediction models with 87% accuracy',
      'Reduced ETL processing time for SOS credit transactions'
    ],
    tech: ['ETL', 'Power BI', 'ML', 'Python', 'SQL'],
    icon: <BarChart3 className="w-8 h-8 text-accent" />
  },
  {
    title: 'AI Intern',
    company: 'Première Consulting',
    location: 'Tunis, Tunisia',
    period: 'Jul 2025 - Aug 2025',
    summary: 'Designed and deployed a multilingual legal chatbot using advanced NLP with dynamic database retrieval for accurate responses.',
    highlights: [
      'Improved legal query matching accuracy with NLP',
      'Integrated RAG-style retrieval for up-to-date answers'
    ],
    tech: ['NLP', 'RAG', 'Python', 'Chatbot'],
    icon: <HiScale className="w-8 h-8 text-accent" />
  },
  {
    title: 'Data Analytics Intern',
    company: 'Attijari Bank',
    location: 'Tunis, Tunisia',
    period: 'Jun 2024 - Aug 2024',
    summary: 'Built Talend ETL pipelines and Power BI dashboards to improve data quality, reduce errors, and speed up trend analysis.',
    highlights: [
      'Improved data quality via Talend ETL',
      'Delivered cross-team Power BI reports'
    ],
    tech: ['Talend', 'ETL', 'Power BI', 'SQL'],
    icon: <BarChart3 className="w-8 h-8 text-accent" />
  }
]

const PROJECTS = {
  academic: [
    {
      title: 'Deep Learning Model Development and Evaluation',
      description: 'Developed and trained deep learning models using Python and TensorFlow/PyTorch with data augmentation. Deployed models with integrated pipelines, providing actionable insights through visualizations.',
      tech: ['Python', 'TensorFlow', 'PyTorch', 'Data Augmentation'],
      link: 'https://github.com/AzizBS26/Local_AIAgent_NewsBotAI',
      icon: <Brain className="w-10 h-10" />,
      dates: 'Sep 2025 - Oct 2025'
    },
    {
      title: 'Emotional Speech Data Generation with VAE and Diffusion Models',
      description: 'Built a PyTorch pipeline to generate emotional speech using VAE and diffusion models. Validated synthetic data with a ResNet-50 classifier, achieving 98.3% accuracy on RAVDESS and EmoDB datasets.',
      tech: ['PyTorch', 'VAE', 'Diffusion Models', 'ResNet-50'],
      link: '#',
      icon: <Mic className="w-10 h-10" />,
      dates: 'May 2025'
    },
    {
      title: 'Cancer Detection Using Deep Learning',
      description: 'Developed a CNN for multi-class medical image classification with custom augmentation and optimization. Implemented training-validation pipelines to improve accuracy and generalization on real-world datasets.',
      tech: ['CNN', 'Python', 'Medical Imaging', 'Deep Learning'],
      link: '#',
      icon: <Activity className="w-10 h-10" />,
      dates: 'Feb 2025'
    },
    {
      title: 'Customer Loyalty & Business Insights',
      description: 'Analyzed customer behavior and built predictive models in Python to optimize loyalty programs. Developed a multimodal agent integrating dashboards, reports, and predictive insights for decision-making.',
      tech: ['Python', 'Power BI', 'ML', 'Multimodal AI'],
      link: 'https://github.com/AzizBS26/MarketMind-4DS3',
      icon: <BarChart3 className="w-10 h-10" />,
      dates: 'Nov 2024 - May 2025'
    }
  ],
  internship: [
    {
      title: 'Data Analytics Intern - Tunisie Telecom',
      description: 'Optimized ETL pipelines for SOS credit transactions, reducing processing time. Developed interactive Power BI dashboards that accelerated operational decision-making. Built churn prediction models with 87% accuracy.',
      tech: ['ETL', 'Power BI', 'ML', 'Churn Prediction'],
      link: '#',
      icon: <BarChart3 className="w-10 h-10" />,
      dates: 'Jul 2025 - Sep 2025',
      company: 'Tunisie Telecom'
    },
    {
      title: 'AI Intern - Première Consulting',
      description: 'Designed and deployed a multilingual legal chatbot, enhancing query resolution efficiency. Applied NLP techniques to improve legal query matching accuracy with dynamic database retrieval.',
      tech: ['NLP', 'Chatbot', 'Python', 'RAG'],
      link: 'https://github.com/AzizBS26/Chatbot-Juridique-Multilingue',
      icon: <HiScale className="w-10 h-10" />,
      dates: 'Jul 2025 - Aug 2025',
      company: 'Première Consulting'
    },
    {
      title: 'Data Analytics Intern - Attijari Bank',
      description: 'Built ETL pipelines using Talend, improving data quality and reducing errors. Created dashboards and reports in Power BI, enabling faster trend analysis and business insights.',
      tech: ['Talend', 'ETL', 'Power BI', 'SQL'],
      link: '#',
      icon: <BarChart3 className="w-10 h-10" />,
      dates: 'Jun 2024 - Aug 2024',
      company: 'Attijari Bank'
    }
  ],
  personal: [
    {
      title: 'Dog Breed Recommendation Chatbot',
      description: 'Intelligent web-based chatbot system that recommends dog breeds based on user preferences using NLP and machine learning. Features 195+ dog breeds, cosine similarity matching with 7 personality traits, real dog images from GitHub, ChatGPT-style interface, and full-screen image viewer.',
      tech: ['Python', 'Flask', 'NLP', 'Scikit-learn', 'pandas'],
      link: 'https://github.com/AzizBS26/Dog-Breed-Recommendation-Chatbot',
      icon: <PawPrint className="w-10 h-10" />,
      dates: '2025'
    }
  ]
}

const EDUCATION = [
  {
    degree: 'Computer Science Engineering - Data Science Major',
    institution: 'ESPRIT School of Engineering',
    year: '2021 - Present',
    description: 'Specializing in software engineering, advanced databases, ML & DL, and AI & LLMs'
  }
]

// ============= CERTIFICATIONS =============
// TO EDIT CERTIFICATE DESCRIPTIONS:
// 1. Find the certificate by name below
// 2. Edit the 'name' field for the certificate title
// 3. Edit the 'issuer' field for the organization name
// 4. Edit the 'date' field for the year
// 5. Optionally add a 'link' field with the credential URL
// Example: link: 'https://www.credential-url.com/verify/abc123'

const CERTIFICATIONS: Array<{ name: string; issuer: string; date: string; image?: string; link?: string; icon?: React.ReactNode }> = [
  {
    name: 'AI Model Deployment on AWS',
    issuer: '365 Data Science',
    date: '2025',
    image: '/certifications/AI model Deployment on AWS.png',
    icon: <img src="/icons/365%20data%20science.png" alt="365 Data Science" className="w-6 h-6 opacity-90" />
  },
  {
    name: 'AWS Cloud Foundations',
    issuer: 'Amazon Web Services',
    date: '2025',
    image: '/certifications/aws certificate.png',
    icon: <FaAws className="w-6 h-6 text-orange-500" />
  },
  {
    name: 'Building Transformer-Based NLP Applications',
    issuer: 'NVIDIA Deep Learning Institute',
    date: '2025',
    image: '/certifications/Building Transformer-Based Natural Language Processing Applications.png',
    icon: <SiNvidia className="w-6 h-6 text-green-500" />
  },
  {
    name: 'Data Literacy Essentials',
    issuer: 'DataCamp',
    date: '2024',
    image: '/certifications/data literacy.png',
    icon: <img src="/icons/datacamp-svgrepo-com.svg" alt="DataCamp" className="w-6 h-6 opacity-90" />
  },
  {
    name: 'Data Science Associate',
    issuer: 'DataCamp',
    date: '2025',
    image: '/certifications/datascience assoicate..png.jpg',
    icon: <img src="/icons/datacamp-svgrepo-com.svg" alt="DataCamp" className="w-6 h-6 opacity-90" />
  },
  {
    name: 'Developing LLM Applications with LangChain',
    issuer: 'DataCamp',
    date: '2025',
    image: '/certifications/developping llm application with langfchain.jpg',
    icon: <img src="/icons/datacamp-svgrepo-com.svg" alt="DataCamp" className="w-6 h-6 opacity-90" />
  },
  {
    name: 'Fully Automated MLOps',
    issuer: '365 Data Science',
    date: '2025',
    image: '/certifications/Fully Automated MLops.png',
    icon: <img src="/icons/365%20data%20science.ico" alt="365 Data Science" className="w-6 h-6 opacity-90" />
  },
  {
    name: 'Fundamentals of Deep Learning',
    issuer: 'NVIDIA Deep Learning Institute',
    date: '2023',
    image: '/certifications/Fundamentals of Deep Learning.jpg',
    icon: <SiNvidia className="w-6 h-6 text-green-500" />
  },
  {
    name: 'GitHub Foundations',
    issuer: 'DataCamp',
    date: '2025',
    image: '/certifications/githyb foundation.png',
    icon: <img src="/icons/datacamp-svgrepo-com.svg" alt="DataCamp" className="w-6 h-6 opacity-90" />
  },
  {
    name: 'Hedera Certification',
    issuer: 'Hedera',
    date: '2025',
    image: '/certifications/hedera.png',
    icon: <img src="/icons/hedera.ico" alt="Hedera" className="w-6 h-6 opacity-90" />
  },
  {
    name: 'Introduction to Modern AI',
    issuer: 'Cisco Networking Academy',
    date: '2025',
    image: '/certifications/introduction to modern IA.jpg',
    icon: <img src="/icons/cisco-svgrepo-com.svg" alt="Cisco" className="w-6 h-6 opacity-90" />
  },
  {
    name: 'OpenCV Computer Vision',
    issuer: 'OpenCV Academy',
    date: '2025',
    image: '/certifications/opencv.png',
    icon: <SiOpencv className="w-6 h-6 text-blue-600" />
  },
  {
    name: 'Understanding Artificial Intelligence',
    issuer: 'DataCamp',
    date: '2022',
    image: '/certifications/Understanding Artificial Intelligence certificate.png',
    icon: <img src="/icons/datacamp-svgrepo-com.svg" alt="DataCamp" className="w-6 h-6 opacity-90" />
  },
  {
    name: 'IEEE Mandate',
    issuer: 'IEEE',
    date: '2024',
    image: '/certifications/IEEE mondat.jpg',
    icon: <img src="/icons/ieee-icon.svg" alt="IDEA" className="w-6 h-6 opacity-90" />
  },
  {
    name: 'IEEE Membership',
    issuer: 'IEEE',
    date: '2025',
    image: '/certifications/IEEE Membership.jpg',
    icon: <img src="/icons/ieee-icon.svg" alt="IDEA" className="w-6 h-6 opacity-90" />
  },
  {
    name: 'Arduino Certification',
    issuer: 'Arduino',
    date: '2022',
    image: '/certifications/Arduino.jpg',
    icon: <img src="/icons/arduino-svgrepo-com.svg" alt="Arduino" className="w-6 h-6 opacity-90" />
  },
  {
    name: 'ICRA Attending',
    issuer: 'ICRA',
    date: '2025',
    image: '/certifications/ICRA ATTENDING.jpg',
    icon: <img src="/icons/ieee-icon.svg" alt="IDEA" className="w-6 h-6 opacity-90" />
  },
  {
    name: 'IDEA Certificate',
    issuer: 'IDEA',
    date: '2025',
    image: '/certifications/IDEA_Certificate.jpg',
    icon: <img src="/icons/ieee-icon.svg" alt="IDEA" className="w-6 h-6 opacity-90" />
  }
]

const LANGUAGES = [
  { name: 'Arabic', level: 'Native' },
  { name: 'French', level: 'Intermediate' },
  { name: 'English', level: 'Intermediate' }
]

// ============= ACTIVITIES & EVENTS =============
// Add your extra-curricular activities, events, hackathons, meetups here.
// Images should be placed under: /public/activities/
// Example image path: '/activities/ai-hackathon.jpg'
const ACTIVITIES: Array<{
  title: string
  org?: string
  role?: string
  date: string
  image?: string
  description?: string
  link?: string
  icon?: React.ReactNode
}> = [
  {
    title: 'Computer Society Tunisian Annual Meeting 1.0',
    org: 'Computer Society Tunisia',
    role: 'Sponsoring Manager',
    date: 'November 22-23, 2024',
    image: '/activities/Cstam.jpg',
    description: 'Served as Sponsoring Manager for the inaugural Computer Society Tunisian Annual Meeting, overseeing sponsorship partnerships and coordination for this major community event.'
  },
  {
    title: 'ESPRIT RAS ROBOTS 3.0',
    org: 'ESPRIT Robotics & Automation Society',
    role: 'Treasurer',
    date: 'May 1, 2025',
    image: '/activities/err.jpg',
    description: 'Managed financial operations and budgeting as Treasurer for ESPRIT RAS ROBOTS 3.0, a major robotic competition and event showcasing innovation in robotics and automation.'
  },
  {
    title: 'IEEE Robotics and Automation Society Chapter',
    org: 'IEEE RAS ESPRIT SB',
    role: 'Vice Chair',
    date: '2024-2025',
    image: '/activities/ras3.jpg',
    description: 'As Vice Chair of the IEEE Robotics and Automation Society Chapter, I supported coordination of chapter activities, led strategic planning, and organized technical workshops and competitions. I collaborated with the chair and executive team to engage members, foster collaboration, and ensure smooth execution of events promoting robotics education and innovation.'
  },
  {
    title: 'International Conference on Robotics and Automation (ICRA)',
    org: 'IEEE ICRA, Atlanta, GA',
    role: 'IDEAS Award Travel Grant Recipient',
    date: 'May 19-23, 2025',
    image: '/activities/icra.jpg',
    description: 'Selected as one of 6 recipients of the IDEAS award travel grant to participate in ICRA 2025 in Atlanta, Georgia. Engaged with the international robotics and automation community, presented research, and networked with leading experts in the field.'
  },
  {
    title: 'ESPRIT RAS ROBOTS 1.0',
    org: 'ESPRIT Robotics & Automation Society',
    role: 'Organizing Committee Member',
    date: 'March 2023',
    image: '/activities/rasrobots1.0.jpg',
    description: 'Served as an Organizing Committee member for the inaugural edition of ESPRIT RAS ROBOTS 1.0, helping launch this pioneering robotics competition and establishing the foundation for future editions of the event.'
  },
  {
    title: 'ESPRIT RAS ROBOTS 2.0',
    org: 'ESPRIT Robotics & Automation Society',
    role: 'Organizing Committee Member',
    date: 'February 2024',
    image: '/activities/rasrobots2.0.jpg',
    description: 'Continued as an Organizing Committee member for the second edition of ESPRIT RAS ROBOTS, overseeing logistics, participant coordination, and ensuring a successful event that further established the competition as a premier robotics showcase.'
  },
  {
    title: 'IAS Tunisian Annual Meeting 3.0',
    org: 'IEEE Industry Applications Society Tunisia',
    role: 'Tech Challenge Winner',
    date: 'October 2022',
    image: '/activities/IASTAM3.0.jpg',
    description: 'Participated in the IAS Tunisian Annual Meeting 3.0 and won 1st place in the tech challenge, demonstrating excellence in technical problem-solving and innovation.'
  }
]

// ============= THEME PROVIDER =============

function ThemeToggle() {
  const [theme, setTheme] = React.useState<'light' | 'dark'>('dark')

  React.useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
  }, [theme])

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className="fixed top-4 right-4 z-50 rounded-full backdrop-blur-sm bg-background/80"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <Sun className="h-5 w-5" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
    </Button>
  )
}

// ============= COMPONENTS =============

function SkillBadge({ name, icon }: { name: string; icon: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-secondary/50 hover:bg-secondary/80 border border-border hover:border-accent/50 transition-all cursor-default group">
      <span className="text-lg group-hover:scale-110 transition-transform flex items-center">{icon}</span>
      <span className="text-sm font-medium">{name}</span>
    </div>
  )
}

function ProjectCard({ project, index }: { project: any; index: number }) {
  return (
    <Card className="card-hover project-card-lift opacity-0 animate-fade-in-up h-full flex flex-col group" style={{ animationDelay: `${index * 0.1}s` }}>
      <CardHeader>
        <div className="mb-4 p-4 bg-gradient-to-br from-accent/10 to-primary/10 border border-accent/20 rounded-2xl w-fit animate-float transition-all group-hover:scale-110 group-hover:border-accent/50 group-hover:shadow-lg group-hover:shadow-accent/20" style={{ animationDelay: `${index * 0.2}s` }}>
          <div className="text-accent">
            {project.icon}
          </div>
        </div>
        <CardTitle className="text-xl font-bold group-hover:text-accent transition-colors">{project.title}</CardTitle>
        {project.dates && (
          <CardDescription className="text-xs font-semibold text-accent/80 mt-1">
            {project.dates}{project.company ? ` • ${project.company}` : ''}
          </CardDescription>
        )}
        <CardDescription className="line-clamp-3 mt-3 leading-relaxed">{project.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs font-medium hover:bg-accent hover:text-accent-foreground transition-colors border border-transparent hover:border-accent/30">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full gap-2 btn-glow group-hover:bg-accent group-hover:text-accent-foreground group-hover:border-accent transition-all font-semibold" asChild>
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            View Project <ExternalLink className="h-4 w-4" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  )
}

function SkillCategory({ title, skills }: {
  title: string
  skills: Array<{ name: string; icon: React.ReactNode }>
}) {
  return (
    <Card className="h-full card-hover">
      <CardHeader>
        <CardTitle className="text-lg font-semibold flex items-center gap-2">
          <Folder className="h-5 w-5 text-accent" />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <SkillBadge key={skill.name} name={skill.name} icon={skill.icon} />
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

// ============= MAIN PAGE =============

export default function PortfolioPage() {
  const [emailForm, setEmailForm] = React.useState({ name: '', email: '', message: '' })

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio Contact from ${emailForm.name}`)
    const body = encodeURIComponent(emailForm.message)
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center px-4 py-20 overflow-hidden bg-gradient-to-b from-background via-secondary/30 to-background">
        {/* Subtle background accent */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
          <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-gradient-to-br from-primary/10 to-accent/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-gradient-to-tl from-accent/5 to-primary/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text content */}
            <div className="space-y-8">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold opacity-0 animate-fade-in-up leading-tight">
                <span className="bg-gradient-to-r from-primary via-primary to-accent/80 dark:from-foreground dark:via-accent dark:to-foreground bg-clip-text text-transparent">
                  {PERSONAL_INFO.name}
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl opacity-0 animate-fade-in-up stagger-1 leading-relaxed">
                {PERSONAL_INFO.tagline}
              </p>

              <div className="flex flex-wrap gap-4 opacity-0 animate-fade-in-up stagger-2">
                <Button size="lg" className="gap-3 px-8 py-6 text-base btn-glow bg-gradient-to-r from-primary to-accent hover:shadow-2xl hover:scale-105 transition-all" asChild>
                  <a href="#projects">
                    Let's get started <ChevronRight className="h-5 w-5" />
                  </a>
                </Button>
              </div>

              {/* Tech icons showcase */}
              <div className="opacity-0 animate-fade-in-up stagger-3">
                <p className="text-sm text-muted-foreground mb-4 font-medium">Worked with</p>
                <div className="flex flex-wrap gap-6">
                  <div className="p-3 rounded-xl bg-card/50 backdrop-blur-sm border border-border hover:border-accent transition-all hover:scale-110">
                    <FaPython className="w-7 h-7 text-muted-foreground hover:text-accent transition-colors" />
                  </div>
                  <div className="p-3 rounded-xl bg-card/50 backdrop-blur-sm border border-border hover:border-accent transition-all hover:scale-110">
                    <SiTensorflow className="w-7 h-7 text-muted-foreground hover:text-accent transition-colors" />
                  </div>
                  <div className="p-3 rounded-xl bg-card/50 backdrop-blur-sm border border-border hover:border-accent transition-all hover:scale-110">
                    <SiPytorch className="w-7 h-7 text-muted-foreground hover:text-accent transition-colors" />
                  </div>
                  <div className="p-3 rounded-xl bg-card/50 backdrop-blur-sm border border-border hover:border-accent transition-all hover:scale-110">
                    <Brain className="w-7 h-7 text-muted-foreground hover:text-accent transition-colors" />
                  </div>
                  <div className="p-3 rounded-xl bg-card/50 backdrop-blur-sm border border-border hover:border-accent transition-all hover:scale-110">
                    <Database className="w-7 h-7 text-muted-foreground hover:text-accent transition-colors" />
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Profile photo */}
            <div className="flex justify-center lg:justify-end opacity-0 animate-fade-in-up stagger-2">
              <div className="relative w-88 h-88 md:w-[420px] md:h-[420px]">
                {/* Gradient ring around photo */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-accent to-primary opacity-20 blur-xl animate-pulse-glow"></div>
                
                {/* Photo container */}
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-accent/30 shadow-2xl">
                  <Image
                    src="/profile.jpg"
                    alt={PERSONAL_INFO.name}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <Badge variant="secondary" className="mb-6 px-6 py-2 text-sm font-semibold">About Me</Badge>
            <h2 className="text-5xl md:text-6xl font-extrabold mb-6">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Who I Am
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Bio */}
            <Card className="card-hover border-accent/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Brain className="h-6 w-6 text-accent" />
                  My Journey
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                  {PERSONAL_INFO.bio}
                </p>
              </CardContent>
            </Card>

            {/* Education */}
            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-primary" />
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {EDUCATION.map((edu, index) => (
                  <div key={index} className="border-l-2 border-primary pl-4">
                    <h3 className="font-semibold text-lg">{edu.degree}</h3>
                    <p className="text-muted-foreground">{edu.institution}</p>
                    <div className="flex gap-4 text-sm text-muted-foreground mt-1">
                      <span>{edu.year}</span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Separator className="max-w-6xl mx-auto" />

      {/* Skills Section */}
      <section id="skills" className="py-24 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <Badge variant="secondary" className="mb-4">Expertise</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills & Technologies</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Proficient in a wide range of programming languages, frameworks, and development tools
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(SKILLS).slice(0, 3).map(([category, skills]) => (
              <SkillCategory key={category} title={category} skills={skills} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button size="lg" variant="outline" className="gap-2 btn-glow" asChild>
              <a href="/skills">
                View All Skills <ChevronRight className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Separator className="max-w-6xl mx-auto" />

      {/* Professional Experience Section */}
      <section id="experience" className="py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <Badge variant="secondary" className="mb-4">Experience</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Professional Experience</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A snapshot of internships and roles focused on analytics, AI, and data-driven solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROFESSIONAL_EXPERIENCE.map((role, index) => (
              <Card key={role.title + role.company} className="card-hover h-full flex flex-col opacity-0 animate-fade-in-up" style={{ animationDelay: `${index * 0.08}s` }}>
                <CardHeader className="space-y-3">
                  <div className="w-fit p-3 rounded-2xl bg-accent/10 border border-accent/20 text-accent shadow-sm">
                    {role.icon}
                  </div>
                  <div>
                    <CardTitle className="text-xl leading-tight">{role.title}</CardTitle>
                    <CardDescription className="mt-1 flex items-center gap-2 text-sm">
                      <Briefcase className="h-4 w-4" />
                      <span className="font-semibold text-primary">{role.company}</span>
                    </CardDescription>
                    <CardDescription className="flex items-center gap-2 text-xs mt-1">
                      <MapPin className="h-3 w-3" /> {role.location}
                    </CardDescription>
                    <CardDescription className="flex items-center gap-2 text-xs mt-1">
                      <Calendar className="h-3 w-3" /> {role.period}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow space-y-3">
                  <p className="text-sm text-muted-foreground leading-relaxed">{role.summary}</p>
                  <ul className="space-y-2 text-sm text-foreground/90 list-disc list-inside">
                    {role.highlights.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="flex flex-wrap gap-2">
                  {role.tech.map((t) => (
                    <Badge key={t} variant="outline" className="text-xs py-1 px-2 border-accent/40">
                      {t}
                    </Badge>
                  ))}
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button size="lg" variant="outline" className="gap-2 btn-glow" asChild>
              <a href="/experience">
                View Full Timeline <ChevronRight className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <Badge variant="secondary" className="mb-4">Portfolio</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A collection of academic, internship, and personal projects showcasing AI, ML, and data science expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Show first academic project */}
            {PROJECTS.academic.slice(0, 1).map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
            {/* Show first internship project */}
            {PROJECTS.internship.slice(0, 1).map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index + 1} />
            ))}
            {/* Show first personal project */}
            {PROJECTS.personal.slice(0, 1).map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index + 2} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button size="lg" variant="outline" className="gap-2 btn-glow" asChild>
              <a href="/projects">
                View All Projects <ChevronRight className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Separator className="max-w-6xl mx-auto" />

      {/* Activities & Events */}
      <section id="activities" className="py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <Badge variant="secondary" className="mb-4">Community</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Activities & Events</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Extra-curricular initiatives, conferences, and events I took part in
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ACTIVITIES.slice(0, 3).map((act, index) => (
              <Card key={`${act.title}-${index}`} className="card-hover opacity-0 animate-fade-in-up overflow-hidden h-full flex flex-col group" style={{ animationDelay: `${index * 0.1}s` }}>
                {act.image && (
                  <div className="relative h-48 w-full bg-secondary overflow-hidden">
                    <Image
                      src={act.image}
                      alt={act.title}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 right-3 bg-background/90 backdrop-blur-sm p-2 rounded-full shadow-lg">
                      {act.icon || <Sparkles className="w-5 h-5 text-primary" />}
                    </div>
                  </div>
                )}
                <CardHeader className="flex-grow">
                  <div className="flex items-start gap-3">
                    {!act.image && (
                      <div className="flex-shrink-0 mt-1">
                        {act.icon || <Sparkles className="w-6 h-6 text-primary" />}
                      </div>
                    )}
                    <div className="flex-grow">
                      <CardTitle className="text-lg leading-tight">{act.title}</CardTitle>
                      <CardDescription className="mt-1 text-xs flex items-center gap-2">
                        {act.org && <span className="font-medium text-primary">{act.org}</span>}
                        {act.role && (
                          <span className="text-muted-foreground">• {act.role}</span>
                        )}
                      </CardDescription>
                      <CardDescription className="text-xs mt-1 flex items-center gap-1">
                        <Award className="h-3 w-3" />
                        {act.date}
                      </CardDescription>
                      {act.description && (
                        <CardDescription className="mt-3 leading-relaxed line-clamp-2">
                          {act.description}
                        </CardDescription>
                      )}
                    </div>
                  </div>
                </CardHeader>
                {act.link && (
                  <CardFooter className="pt-0">
                    <Button variant="outline" className="w-full gap-2 group-hover:bg-primary group-hover:text-primary-foreground transition-colors" asChild>
                      <a href={act.link} target="_blank" rel="noopener noreferrer">
                        View Details <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </CardFooter>
                )}
              </Card>
            ))}
          </div>
          {ACTIVITIES.length > 3 && (
            <div className="mt-12 text-center">
              <Button size="lg" variant="outline" className="gap-2 btn-glow" asChild>
                <a href="/activities">
                  View All Activities <ChevronRight className="h-5 w-5" />
                </a>
              </Button>
            </div>
          )}
        </div>
      </section>

      <Separator className="max-w-6xl mx-auto" />

      {/* Certifications Section */}
      {CERTIFICATIONS.length > 0 && (
        <section id="certifications" className="py-24 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <Badge variant="secondary" className="mb-4">Credentials</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Certifications & Awards</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Professional certifications and credentials in AI, ML, and Data Science
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {CERTIFICATIONS.slice(0, 3).map((cert, index) => (
                <Card key={cert.name} className="card-hover opacity-0 animate-fade-in-up overflow-hidden h-full flex flex-col group" style={{ animationDelay: `${index * 0.1}s` }}>
                  {cert.image && (
                    <div className="relative h-48 w-full bg-secondary overflow-hidden">
                      <Image
                        src={cert.image}
                        alt={cert.name}
                        width={400}
                        height={300}
                        className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-3 right-3 bg-background/90 backdrop-blur-sm p-2 rounded-full shadow-lg">
                        {cert.icon || <Award className="w-5 h-5 text-primary" />}
                      </div>
                    </div>
                  )}
                  <CardHeader className="flex-grow">
                    <div className="flex items-start gap-3">
                      {!cert.image && (
                        <div className="flex-shrink-0 mt-1">
                          {cert.icon || <Award className="w-6 h-6 text-primary" />}
                        </div>
                      )}
                      <div className="flex-grow">
                        <CardTitle className="text-lg leading-tight">{cert.name}</CardTitle>
                        <CardDescription className="flex items-center gap-2 mt-2">
                          <span className="font-medium text-primary">{cert.issuer}</span>
                        </CardDescription>
                        <CardDescription className="text-xs mt-1 flex items-center gap-1">
                          <Award className="h-3 w-3" />
                          {cert.date}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  {cert.link && (
                    <CardFooter className="pt-0">
                      <Button variant="outline" className="w-full gap-2 group-hover:bg-primary group-hover:text-primary-foreground transition-colors" asChild>
                        <a href={cert.link} target="_blank" rel="noopener noreferrer">
                          View Credential <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    </CardFooter>
                  )}
                </Card>
              ))}
            </div>
            {CERTIFICATIONS.length > 3 && (
              <div className="mt-12 text-center">
                <Button size="lg" variant="outline" className="gap-2 btn-glow" asChild>
                  <a href="/certifications">
                    View All Certifications <ChevronRight className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            )}
          </div>
        </section>
      )}

      <Separator className="max-w-6xl mx-auto" />

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <Badge variant="secondary" className="mb-4">Get In Touch</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Let's Connect</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Interested in collaborating or have a question? Feel free to reach out!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <Card className="card-hover">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>Reach out through any of these channels</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary/50 transition-colors"
                >
                  <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-sm text-muted-foreground">{PERSONAL_INFO.email}</p>
                  </div>
                </a>

                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary/50 transition-colors"
                >
                  <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <Github className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">GitHub</p>
                    <p className="text-sm text-muted-foreground">View my code</p>
                  </div>
                </a>

                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary/50 transition-colors"
                >
                  <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <Linkedin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">LinkedIn</p>
                    <p className="text-sm text-muted-foreground">Connect with me</p>
                  </div>
                </a>

                <Separator className="my-4" />

                {/* CV Download */}
                <a
                  href="/cv.pdf"
                  download
                  className="flex items-center gap-3 p-4 rounded-lg bg-gradient-to-r from-accent/10 to-primary/10 border border-accent/30 hover:border-accent hover:shadow-lg hover:shadow-accent/20 transition-all group relative overflow-hidden"
                >
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                  
                  <div className="h-10 w-10 bg-accent/20 rounded-full flex items-center justify-center group-hover:bg-accent/30 transition-colors relative z-10">
                    <FileText className="h-5 w-5 text-accent" />
                  </div>
                  <div className="flex-1 relative z-10">
                    <div className="flex items-center gap-2">
                      <p className="font-semibold">Download CV</p>
                      <Badge variant="outline" className="text-[10px] px-1.5 py-0 border-accent/40">PDF</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">Updated Dec 2025</p>
                  </div>
                  <Download className="h-4 w-4 text-accent group-hover:translate-y-0.5 transition-transform relative z-10" />
                </a>
              </CardContent>
            </Card>

            {/* Quick Message */}
            <Card className="card-hover">
              <CardHeader>
                <CardTitle>Send a Quick Message</CardTitle>
                <CardDescription>I'll get back to you as soon as possible</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleEmailSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      value={emailForm.name}
                      onChange={(e) => setEmailForm({ ...emailForm, name: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={emailForm.email}
                      onChange={(e) => setEmailForm({ ...emailForm, email: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Your message..."
                      rows={4}
                      value={emailForm.message}
                      onChange={(e) => setEmailForm({ ...emailForm, message: e.target.value })}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full gap-2">
                    <Mail className="h-4 w-4" /> Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-card py-12 px-4 mt-auto">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="font-bold text-xl mb-2">{PERSONAL_INFO.name}</h3>
              <p className="text-muted-foreground text-sm">
                Data Science Student | Transforming Data into Insights
              </p>
            </div>

            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" asChild>
                <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href={`mailto:${PERSONAL_INFO.email}`} aria-label="Email">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          <Separator className="my-6" />

          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

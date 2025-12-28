'use client'

import * as React from 'react'
import Link from 'next/link'
import Navbar from '@/components/navbar'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { 
  Brain, 
  Mic, 
  Activity, 
  BarChart3, 
  Smartphone, 
  Building2, 
  PawPrint, 
  GraduationCap, 
  Briefcase, 
  Sparkles,
  ExternalLink,
  Rocket
} from 'lucide-react'
import { HiScale } from 'react-icons/hi'

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
      icon: <Smartphone className="w-10 h-10" />,
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
      icon: <Building2 className="w-10 h-10" />,
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

function ProjectCard({ project, index }: { project: any; index: number }) {
  return (
    <Card className="card-hover project-card-lift opacity-0 animate-fade-in-up h-full flex flex-col group" style={{ animationDelay: `${index * 0.05}s` }}>
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

export default function ProjectsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-24 px-4 overflow-hidden bg-gradient-to-b from-background via-secondary/30 to-background data-grid-pattern">
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-60">
          <div className="absolute top-16 left-12 w-44 h-44 bg-primary/18 rounded-full blur-3xl" />
          <div className="absolute bottom-16 right-12 w-56 h-56 bg-accent/18 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] bg-gradient-radial from-primary/10 via-accent/5 to-transparent blur-3xl" />
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <Link href="/" className="inline-flex items-center gap-2 text-primary hover:underline mb-6">
            <ChevronRight className="h-4 w-4 rotate-180" />
            Back to Portfolio
          </Link>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary via-primary to-accent/80 dark:from-foreground dark:via-accent dark:to-foreground bg-clip-text text-transparent">
              Projects
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mb-8">
            A collection of my academic research, internship contributions, and personal projects
          </p>
        </div>
      </section>

      <Separator className="max-w-6xl mx-auto" />

      {/* Projects Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Academic Projects */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
              <GraduationCap className="h-7 w-7 text-primary" />
              Academic Projects
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {PROJECTS.academic.map((project, index) => (
                <ProjectCard key={project.title} project={project} index={index} />
              ))}
            </div>
          </div>

          {/* Internship Projects */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
              <Briefcase className="h-7 w-7 text-primary" />
              Internship Projects
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {PROJECTS.internship.map((project, index) => (
                <ProjectCard key={project.title} project={project} index={index + 4} />
              ))}
            </div>
          </div>

          {/* Personal Projects */}
          <div>
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
              <Sparkles className="h-7 w-7 text-primary" />
              Personal Projects
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {PROJECTS.personal.map((project, index) => (
                <ProjectCard key={project.title} project={project} index={index + 7} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-card py-8 px-4 mt-auto">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Mohamed Aziz Ben Slima. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

'use client'

import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from '@/components/navbar'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Brain, GraduationCap, Zap, ChevronRight, FileText, Download, Linkedin, Github, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'

const PERSONAL_INFO = {
  name: 'Mohamed Aziz Ben Slima',
  title: 'Data Science Student & AI/LLM Builder',
  tagline: 'Building AI Agents, Fine-Tuned LLMs & Modern Web Applications',
  email: 'mohammedaziz.benslima@esprit.tn',
  github: 'https://github.com/AzizBS26',
  linkedin: 'https://www.linkedin.com/in/mohamed-aziz-ben-slima',
  bio: `I am a Data Science and AI enthusiast passionate about building intelligent solutions using large language models, fine-tuning techniques, and advanced AI tools like Ollama. I have hands-on experience in training and customizing models, designing AI pipelines, and leveraging machine learning for practical applications. Driven by curiosity and innovation, I aim to create impactful AI-powered solutions while continuously expanding my expertise in multimodal AI, computer vision, and strategic data-driven projects.`
}

const EDUCATION = [
  {
    degree: 'Computer Science Engineering - Data Science Major',
    institution: 'ESPRIT School of Engineering',
    year: '2021 - Present',
    description: 'Specializing in software engineering, advanced databases, ML & DL, and AI & LLMs'
  }
]

const LANGUAGES = [
  { name: 'Arabic', level: 'Native' },
  { name: 'French', level: 'Intermediate' },
  { name: 'English', level: 'Intermediate' }
]

export default function AboutPage() {
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
          <div className="mb-8 opacity-0 animate-fade-in-up">
            <Link href="/" className="inline-flex items-center gap-2 text-primary hover:underline mb-6">
              <ChevronRight className="h-4 w-4 rotate-180" />
              Back to Portfolio
            </Link>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 opacity-0 animate-fade-in-up stagger-1">
            <span className="bg-gradient-to-r from-primary via-primary to-accent/80 dark:from-foreground dark:via-accent dark:to-foreground bg-clip-text text-transparent">
              About Me
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mb-8 opacity-0 animate-fade-in-up stagger-2 leading-relaxed">
            Learn more about my journey, expertise, and passion for Data Science and AI
          </p>
        </div>
      </section>

      <Separator className="max-w-6xl mx-auto" />

      {/* Profile and Bio Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left side - Profile photo */}
            <div className="flex justify-center lg:justify-start opacity-0 animate-fade-in-up">
              <div className="relative w-88 h-88 md:w-[380px] md:h-[380px]">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-accent to-primary opacity-20 blur-xl animate-pulse-glow"></div>
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

            {/* Right side - Bio */}
            <div className="space-y-4 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <h2 className="text-3xl font-bold mb-4">{PERSONAL_INFO.name}</h2>
              <p className="text-xl text-primary font-semibold">{PERSONAL_INFO.tagline}</p>
              <p className="text-base text-muted-foreground leading-relaxed">
                {PERSONAL_INFO.bio}
              </p>
              
              {/* CV Download & Social Links */}
              <div className="flex flex-wrap gap-3 mt-6">
                <Button 
                  className="gap-2 btn-glow bg-gradient-to-r from-accent to-primary hover:shadow-2xl hover:shadow-accent/50 transition-all font-semibold group relative overflow-hidden"
                  asChild
                >
                  <a href="/cv.pdf" download>
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                    <Download className="h-4 w-4 relative z-10" /> 
                    <span className="relative z-10 flex items-center gap-2">
                      Download CV
                      <Badge variant="secondary" className="text-[10px] px-1.5 py-0 bg-white/20">PDF</Badge>
                    </span>
                  </a>
                </Button>
                <Button variant="outline" className="gap-2 border-accent/40 hover:bg-accent/10 hover:border-accent" asChild>
                  <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-4 w-4" /> LinkedIn
                  </a>
                </Button>
                <Button variant="outline" className="gap-2 border-accent/40 hover:bg-accent/10 hover:border-accent" asChild>
                  <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" /> GitHub
                  </a>
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-3 italic">CV last updated: December 2025</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Education */}
            <Card className="card-hover border-accent/20 opacity-0 animate-fade-in-up">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <GraduationCap className="h-6 w-6 text-primary" />
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
                    {edu.description && (
                      <p className="text-sm text-muted-foreground mt-2 italic">{edu.description}</p>
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Languages */}
            <Card className="card-hover opacity-0 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Zap className="h-5 w-5 text-primary" />
                  Languages
                </CardTitle>
                <CardDescription>Proficiency in multiple languages</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-6">
                  {LANGUAGES.map((lang) => (
                    <div key={lang.name}>
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="font-semibold">{lang.name}</h3>
                        <Badge variant="secondary" className="text-xs">{lang.level}</Badge>
                      </div>
                      <div className="h-2 bg-secondary/50 rounded-full overflow-hidden border border-border">
                        <div
                          className={`skill-bar-gradient h-full ${
                            lang.level === 'Native' ? 'w-full' : 
                            lang.level === 'Intermediate' ? 'w-2/3' : 'w-1/3'
                          }`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Key Points */}
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="card-hover opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Brain className="h-5 w-5 text-accent" />
                  Focus Areas
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-2">
                <p>• AI & Machine Learning</p>
                <p>• Large Language Models</p>
                <p>• Deep Learning</p>
                <p>• NLP & Computer Vision</p>
              </CardContent>
            </Card>

            <Card className="card-hover opacity-0 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Zap className="h-5 w-5 text-accent" />
                  Specialties
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-2">
                <p>• Model Fine-tuning</p>
                <p>• AI Pipeline Design</p>
                <p>• Data Analysis</p>
                <p>• AI Engineering</p>
              </CardContent>
            </Card>

            <Card className="card-hover opacity-0 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-accent" />
                  Philosophy
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-2">
                <p>• Continuous Learning</p>
                <p>• Innovation-Driven</p>
                <p>• Collaborative Problem Solving</p>
                <p>• Practical Impact</p>
              </CardContent>
            </Card>
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

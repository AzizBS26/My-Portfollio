'use client'

import * as React from 'react'
import Link from 'next/link'
import Navbar from '@/components/navbar'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import {
  Briefcase,
  Calendar,
  MapPin,
  Award,
  ChevronRight,
  ExternalLink,
  BarChart3
} from 'lucide-react'
import { HiScale } from 'react-icons/hi'

const INTERNSHIPS = [
  {
    title: 'Data Analytics Intern',
    company: 'Tunisie Telecom',
    location: 'Tunis, Tunisia',
    period: 'Jul 2025 - Sep 2025',
    duration: '3 months',
    description: 'Optimized ETL pipelines for SOS credit transactions, reducing processing time significantly. Developed interactive Power BI dashboards that accelerated operational decision-making across multiple departments.',
    achievements: [
      'Built churn prediction models with 87% accuracy, supporting retention of high-risk clients',
      'Optimized ETL pipelines for SOS credit transactions, reducing processing time',
      'Developed interactive Power BI dashboards that accelerated operational decision-making'
    ],
    technologies: ['ETL', 'Power BI', 'Machine Learning', 'Python', 'SQL'],
    icon: <BarChart3 className="w-8 h-8 text-accent" />
  },
  {
    title: 'AI Intern',
    company: 'Première Consulting',
    location: 'Tunis, Tunisia',
    period: 'Jul 2025 - Aug 2025',
    duration: '2 months',
    description: 'Designed and deployed a multilingual legal chatbot system that enhanced query resolution efficiency. Applied advanced NLP techniques to improve legal query matching accuracy with dynamic database retrieval.',
    achievements: [
      'Designed and deployed a multilingual legal chatbot enhancing query resolution efficiency',
      'Applied NLP techniques to improve legal query matching accuracy',
      'Integrated dynamic database retrieval to ensure up-to-date and accurate responses'
    ],
    technologies: ['NLP', 'Python', 'RAG', 'Chatbot', 'Flask'],
    link: 'https://github.com/AzizBS26/Chatbot-Juridique-Multilingue',
    icon: <HiScale className="w-8 h-8 text-accent" />
  },
  {
    title: 'Data Analytics Intern',
    company: 'Attijari Bank',
    location: 'Tunis, Tunisia',
    period: 'Jun 2024 - Aug 2024',
    duration: '3 months',
    description: 'Built robust ETL pipelines using Talend, improving overall data quality and reducing errors across the organization. Created comprehensive dashboards and reports in Power BI for trend analysis and business insights.',
    achievements: [
      'Built ETL pipelines using Talend, improving data quality and reducing errors',
      'Created dashboards and reports in Power BI, enabling faster trend analysis',
      'Collaborated with cross-functional teams to optimize workflows and deliver actionable insights'
    ],
    technologies: ['Talend', 'ETL', 'Power BI', 'SQL', 'Data Analysis'],
    icon: <BarChart3 className="w-8 h-8 text-accent" />
  }
]

export default function ExperiencePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
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
              Professional Experience
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mb-8 opacity-0 animate-fade-in-up stagger-2 leading-relaxed">
            A comprehensive timeline of my internships and professional growth across leading organizations in Tunisia.
          </p>
        </div>
      </section>

      <Separator className="max-w-6xl mx-auto" />

      {/* Experience Timeline */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-12">
            {INTERNSHIPS.map((internship, index) => (
              <div
                key={internship.company}
                className="opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Card className="card-hover">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div className="text-5xl">{internship.icon}</div>
                      <Badge variant="secondary" className="whitespace-nowrap">
                        <Calendar className="h-3 w-3 mr-1" />
                        {internship.duration}
                      </Badge>
                    </div>

                    <CardTitle className="text-2xl">{internship.title}</CardTitle>
                    <CardDescription className="text-base mt-2">
                      <div className="flex items-center gap-2 text-primary font-semibold mb-1">
                        <Briefcase className="h-4 w-4" />
                        {internship.company}
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        {internship.location}
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground mt-1">
                        <Calendar className="h-4 w-4" />
                        {internship.period}
                      </div>
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {internship.description}
                    </p>

                    {/* Key Achievements */}
                    <div>
                      <h4 className="font-semibold text-sm flex items-center gap-2 mb-3">
                        <Award className="h-4 w-4 text-primary" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {internship.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-sm text-muted-foreground">
                            <ChevronRight className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="font-semibold text-sm mb-3">Technologies & Tools</h4>
                      <div className="flex flex-wrap gap-2">
                        {internship.technologies.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* GitHub Link if available */}
                    {internship.link && (
                      <div>
                        <Button variant="outline" className="gap-2" asChild>
                          <a href={internship.link} target="_blank" rel="noopener noreferrer">
                            View Project <ExternalLink className="h-4 w-4" />
                          </a>
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Summary Stats */}
          <div className="mt-24 pt-12 border-t">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">3</div>
                <p className="text-muted-foreground">Internships Completed</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">8+</div>
                <p className="text-muted-foreground">Months of Experience</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">15+</div>
                <p className="text-muted-foreground">Technologies Mastered</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-secondary/30 mt-auto">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Work Together?</h2>
          <p className="text-muted-foreground mb-8">
            I'm looking for new opportunities to apply my skills and grow as a professional.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">Get In Touch</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/projects">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

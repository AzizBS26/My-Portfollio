'use client'

import * as React from 'react'
import Link from 'next/link'
import Navbar from '@/components/navbar'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Separator } from '@/components/ui/separator'
import { Mail, Github, Linkedin, Zap, ChevronRight, FileText, Download } from 'lucide-react'

const PERSONAL_INFO = {
  name: 'Mohamed Aziz Ben Slima',
  email: 'mohammedaziz.benslima@esprit.tn',
  github: 'https://github.com/AzizBS26',
  linkedin: 'https://www.linkedin.com/in/mohamed-aziz-ben-slima'
}

export default function ContactPage() {
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
              Get In Touch
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mb-8">
            Let's connect and discuss opportunities in Data Science, AI, or collaborative projects
          </p>
        </div>
      </section>

      <Separator className="max-w-6xl mx-auto" />

      {/* Contact Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <Card className="card-hover opacity-0 animate-fade-in-up">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>Reach out through any of these channels</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary/50 transition-colors group"
                >
                  <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
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
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary/50 transition-colors group"
                >
                  <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
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
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary/50 transition-colors group"
                >
                  <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
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

            {/* Contact Form */}
            <Card className="card-hover opacity-0 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
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
                      className="border-accent/20 focus:border-accent"
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
                      className="border-accent/20 focus:border-accent"
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
                      className="border-accent/20 focus:border-accent"
                    />
                  </div>

                  <Button type="submit" className="w-full gap-2 btn-glow bg-gradient-to-r from-primary to-accent hover:shadow-2xl hover:shadow-accent/50 transition-all font-semibold">
                    <Zap className="h-4 w-4" /> Send Message
                  </Button>
                </form>
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

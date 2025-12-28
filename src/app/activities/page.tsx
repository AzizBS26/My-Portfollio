'use client'

import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from '@/components/navbar'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Award, ExternalLink, Sparkles, Calendar, ChevronRight } from 'lucide-react'

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
    org: 'IEEE ICRA',
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
  }
]

export default function ActivitiesPage() {
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
              Activities & Events
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mb-8">
            My involvement in robotics competitions, IEEE activities, and technical events
          </p>
        </div>
      </section>

      <Separator className="max-w-6xl mx-auto" />

      {/* Activities Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ACTIVITIES.map((act, index) => (
              <Card key={`${act.title}-${index}`} className="card-hover opacity-0 animate-fade-in-up overflow-hidden h-full flex flex-col group" style={{ animationDelay: `${index * 0.05}s` }}>
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
                        <Calendar className="h-3 w-3" />
                        {act.date}
                      </CardDescription>
                      {act.description && (
                        <CardDescription className="mt-3 leading-relaxed">
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

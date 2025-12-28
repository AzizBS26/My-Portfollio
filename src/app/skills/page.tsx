'use client'

import * as React from 'react'
import Link from 'next/link'
import Navbar from '@/components/navbar'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Badge } from '@/components/ui/badge'
import { ChevronRight } from 'lucide-react'
import { Code, Brain, Database, Zap } from 'lucide-react'

const SKILLS = {
  programming: [
    { name: 'Python', level: 90 },
    { name: 'SQL', level: 85 },
    { name: 'R', level: 50 },
    { name: 'C++', level: 70 },
    { name: 'C', level: 75 },
    { name: 'Java', level: 75 }
  ],
  ml_ai: [
    { name: 'Machine Learning', level: 85 },
    { name: 'Deep Learning', level: 70 },
    { name: 'NLP', level: 65 },
    { name: 'Computer Vision', level: 30 }
  ],
  tools: [
    { name: 'TensorFlow', level: 75 },
    { name: 'PyTorch', level: 70 },
    { name: 'Scikit-learn', level: 85 },
    { name: 'Pandas', level: 90 },
    { name: 'NumPy', level: 85 },
    { name: 'Matplotlib', level: 80 },
    { name: 'Power BI', level: 65 }
  ]
}

function SkillBar({ name, level }: { name: string; level: number }) {
  return (
    <div className="space-y-3">
      <div className="flex justify-between items-center">
        <span className="font-semibold text-sm">{name}</span>
        <span className="text-xs font-medium text-accent">{level}%</span>
      </div>
      <div className="h-3 bg-secondary/50 rounded-full overflow-hidden border border-border">
        <div
          className="skill-bar-gradient h-full transition-all duration-1000 ease-out shadow-lg"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  )
}

function SkillSection({ title, icon: Icon, skills }: {
  title: string
  icon: any
  skills: typeof SKILLS.programming
}) {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Icon className="h-5 w-5 text-primary" />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {skills.map((skill) => (
          <SkillBar key={skill.name} name={skill.name} level={skill.level} />
        ))}
      </CardContent>
    </Card>
  )
}

export default function SkillsPage() {
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
              Technical Skills
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mb-8">
            My expertise across programming languages, machine learning frameworks, and development tools
          </p>
        </div>
      </section>

      <Separator className="max-w-6xl mx-auto" />

      {/* Skills Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-6">
            <SkillSection title="Programming" icon={Code} skills={SKILLS.programming} />
            <SkillSection title="ML & AI" icon={Brain} skills={SKILLS.ml_ai} />
            <SkillSection title="Tools & Frameworks" icon={Database} skills={SKILLS.tools} />
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

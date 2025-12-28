"use client"

import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { 
  Code,
  Brain,
  Zap,
  ChevronDown,
  Menu,
  X,
  Moon,
  Sun,
  User,
  Briefcase,
  Rocket,
  Mail,
  Award,
  Calendar
} from 'lucide-react'
import { IoStatsChart } from 'react-icons/io5'

const getInitialTheme = (): 'light' | 'dark' => {
  if (typeof window === 'undefined') return 'dark'
  const stored = localStorage.getItem('theme')
  if (stored === 'light' || stored === 'dark') return stored
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  return prefersDark ? 'dark' : 'light'
}

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  const [theme, setTheme] = React.useState<'light' | 'dark'>('dark')
  const [mounted, setMounted] = React.useState(false)

  // Initialize theme on client to avoid SSR mismatch
  React.useEffect(() => {
    const initial = getInitialTheme()
    setTheme(initial)
    setMounted(true)
  }, [])

  React.useEffect(() => {
    const root = document.documentElement
    root.classList.toggle('dark', theme === 'dark')
    localStorage.setItem('theme', theme)
  }, [theme])

  const navLinks = [
    { label: 'About', href: '/about', icon: <User className="w-4 h-4" /> },
    { label: 'Skills', href: '/skills', icon: <Zap className="w-4 h-4" /> },
    { label: 'Experience', href: '/experience', icon: <Briefcase className="w-4 h-4" /> },
    { label: 'Projects', href: '/projects', icon: <Rocket className="w-4 h-4" /> },
    { label: 'Certifications', href: '/certifications', icon: <Award className="w-4 h-4" /> },
    { label: 'Activities', href: '/activities', icon: <Calendar className="w-4 h-4" /> },
    { label: 'Contact', href: '/contact', icon: <Mail className="w-4 h-4" /> }
  ]

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="sticky top-0 z-50 hidden md:block bg-background/80 backdrop-blur-2xl border-b border-accent/20 shadow-lg shadow-accent/5">
        {/* Gradient accent line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent" />

        <div className="container mx-auto max-w-7xl px-6 py-4">
          <div className="flex items-center justify-between gap-8">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative">
                {/* Glowing background */}
                <div className="absolute inset-0 bg-gradient-to-r from-accent/30 to-primary/30 rounded-xl blur-lg opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
                {/* Logo container */}
                <div className="relative bg-gradient-to-br from-accent/10 to-primary/10 border border-accent/40 rounded-full w-10 h-10 flex items-center justify-center group-hover:border-accent transition-all duration-300 group-hover:scale-105">
                  <Image 
                    src="/logo-pt.svg" 
                    alt="Portfolio Logo" 
                    width={24} 
                    height={24}
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-extrabold text-lg bg-gradient-to-r from-primary via-accent to-accent bg-clip-text text-transparent">
                  AzizBS26
                </span>
                <span className="text-xs text-muted-foreground font-semibold">AI & Data Science</span>
              </div>
            </Link>

            {/* Center Links */}
            <div className="flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="relative px-5 py-2.5 text-sm font-semibold text-muted-foreground hover:text-accent transition-all group rounded-lg"
                >
                  {/* Animated background */}
                  <span className="absolute inset-0 bg-gradient-to-r from-accent/10 to-primary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {/* Content */}
                  <span className="relative flex items-center gap-2">
                    {link.label}
                    <span className="group-hover:scale-125 transition-transform duration-300">{link.icon}</span>
                  </span>
                </a>
              ))}
            </div>

            {/* Right Side - CTA Button & Theme Toggle */}
            <div className="flex items-center gap-4">
              {/* Theme Toggle */}
              <Button
                variant="outline"
                size="icon"
                onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                className="rounded-full hover:bg-accent/10 border-accent/40 btn-glow"
                aria-label="Toggle theme"
              >
                {mounted ? (
                  theme === 'dark' ? (
                    <Sun className="h-5 w-5 text-accent" />
                  ) : (
                    <Moon className="h-5 w-5 text-accent" />
                  )
                ) : (
                  <span className="block h-5 w-5" aria-hidden="true" />
                )}
              </Button>
              {/* CTA Button */}
              <Button
                asChild
                size="sm"
                className="relative gap-2 px-6 bg-gradient-to-r from-accent to-primary hover:shadow-2xl hover:shadow-accent/50 transition-all duration-300 btn-glow hover:scale-105 font-semibold"
              >
                <a href="/#contact">
                  <Zap className="h-4 w-4" />
                  Let's Talk
                </a>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav className="sticky top-0 z-50 md:hidden bg-background/80 backdrop-blur-2xl border-b border-accent/20">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent" />

        <div className="px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="relative">
              <div className="bg-gradient-to-br from-accent/20 to-primary/20 border border-accent/30 rounded-full w-10 h-10 flex items-center justify-center">
                <Image 
                  src="/logo-pt.svg" 
                  alt="Portfolio Logo" 
                  width={24} 
                  height={24}
                />
              </div>
            </div>
            <span className="font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              AzizBS26
            </span>
          </Link>

          {/* Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            className="hover:bg-primary/10"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-primary/10 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="p-4 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-primary/10 rounded-lg transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="flex items-center gap-2">
                    {link.icon}
                    {link.label}
                  </span>
                </a>
              ))}
              <div className="flex gap-2 pt-2 border-t border-primary/10 mt-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                  className="flex-1 rounded-lg hover:bg-primary/10"
                >
                  {mounted ? (
                    theme === 'dark' ? (
                      <><Sun className="h-4 w-4 mr-1" /> Light</> 
                    ) : (
                      <><Moon className="h-4 w-4 mr-1" /> Dark</>
                    )
                  ) : (
                    <span className="block h-4 w-4" aria-hidden="true" />
                  )}
                </Button>
                <Button
                  asChild
                  className="flex-1 gap-2 bg-gradient-to-r from-primary to-accent"
                  size="sm"
                >
                  <a href="/#contact">
                    <Zap className="h-4 w-4" />
                    Let's Talk
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  )
}

export default Navbar

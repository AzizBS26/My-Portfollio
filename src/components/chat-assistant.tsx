'use client'

import * as React from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { MessageCircle, X, Send, Sparkles, Download, User, Bot, Copy, Check } from 'lucide-react'
import { SUGGESTED_QUESTIONS } from '@/lib/cv-context'

// Markdown rendering helper
const renderMarkdown = (text: string) => {
  let html = text
    // Bold
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    // Italic
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    // List items
    .replace(/^\* (.+)$/gm, '<li class="ml-4">$1</li>')
  
  // Wrap list items in ul
  html = html.replace(/(<li class="ml-4">.*<\/li>)/m, '<ul class="list-disc ml-4">$1</ul>')
  
  return html
}

interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
}

export function ChatAssistant() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [hasInteracted, setHasInteracted] = React.useState(false)
  const [messages, setMessages] = React.useState<Message[]>([])
  const [input, setInput] = React.useState('')
  const [isLoading, setIsLoading] = React.useState(false)
  const [error, setError] = React.useState<string | null>(null)
  const messagesEndRef = React.useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  React.useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    setError(null)
    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
    }

    setMessages((prev) => [...prev, userMessage])
    setInput('')
    setIsLoading(true)
    setHasInteracted(true)

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [...messages, userMessage],
        }),
      })

      if (!response.ok) {
        const errorText = await response.text()
        throw new Error(errorText || 'Failed to get response')
      }

      const reader = response.body?.getReader()
      const decoder = new TextDecoder()
      let assistantMessage = ''

      const assistantId = Date.now().toString()
      setMessages((prev) => [
        ...prev,
        { id: assistantId, role: 'assistant', content: '' },
      ])

      if (reader) {
        while (true) {
          const { done, value } = await reader.read()
          if (done) break

          const chunk = decoder.decode(value)
          assistantMessage += chunk
          setMessages((prev) =>
            prev.map((msg) =>
              msg.id === assistantId ? { ...msg, content: assistantMessage } : msg
            )
          )
        }
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong')
      setMessages((prev) =>
        prev.filter((msg) => msg.role !== 'assistant' || msg.content !== '')
      )
    } finally {
      setIsLoading(false)
    }
  }

  const handleSuggestedQuestion = (question: string) => {
    if (isLoading) return
    
    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: question,
    }
    
    setMessages((prev) => [...prev, userMessage])
    setError(null)
    setIsLoading(true)

    fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        messages: [...messages, userMessage],
      }),
    }).then(async (response) => {
      if (!response.ok) {
        const errorText = await response.text()
        throw new Error(errorText || 'Failed to get response')
      }

      const reader = response.body?.getReader()
      const decoder = new TextDecoder()
      let assistantMessage = ''

      const assistantId = Date.now().toString()
      setMessages((prev) => [
        ...prev,
        { id: assistantId, role: 'assistant', content: '' },
      ])

      if (reader) {
        while (true) {
          const { done, value } = await reader.read()
          if (done) break

          const chunk = decoder.decode(value)
          assistantMessage += chunk
          setMessages((prev) =>
            prev.map((msg) =>
              msg.id === assistantId ? { ...msg, content: assistantMessage } : msg
            )
          )
        }
      }
    }).catch((err) => {
      setError(err instanceof Error ? err.message : 'Something went wrong')
    }).finally(() => {
      setIsLoading(false)
    })
  }

  const toggleChat = () => {
    setIsOpen(!isOpen)
    if (!isOpen && !hasInteracted) {
      setHasInteracted(true)
    }
  }

  return (
    <>
      {/* Floating Chat Bubble */}
      {!isOpen && (
        <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50">
          <Button
            onClick={toggleChat}
            className="h-12 w-12 md:h-14 md:w-14 rounded-full shadow-2xl shadow-accent/50 hover:shadow-accent/70 hover:scale-110 transition-all duration-300 group p-0 overflow-hidden"
            size="icon"
            aria-label="Open chat assistant"
          >
            <img 
              src="/logo-AB.svg" 
              alt="Chat" 
              className="h-full w-full object-cover rounded-full group-hover:scale-110 transition-transform"
            />
          </Button>
          {!hasInteracted && (
            <span className="absolute -top-2 -right-2 h-4 w-4 bg-red-500 rounded-full animate-pulse ring-2 ring-white shadow-lg" />
          )}
        </div>
      )}

      {/* Chat Window - Optimized & Space Efficient */}
      {isOpen && (
        <Card className="fixed inset-4 md:bottom-6 md:right-6 md:left-auto md:top-auto md:w-[500px] md:h-[700px] shadow-2xl z-50 flex flex-col animate-in slide-in-from-bottom-5 fade-in duration-300 border-accent/30">
          {/* Header - Modern & Enhanced */}
          <CardHeader className="relative border-b bg-white/5 dark:bg-white/5 backdrop-blur-md px-3 py-1 flex-shrink-0 overflow-hidden">
            {/* Gradient accent border at bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-accent via-primary to-accent/50" />
            
            <div className="flex items-center justify-between gap-2 relative z-10">
              <div className="flex items-center gap-2.5 min-w-0 flex-1">
                {/* Logo with glow effect */}
                <div className="h-7 w-7 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center flex-shrink-0 shadow-lg shadow-accent/50 relative group">
                  <Sparkles className="h-3.5 w-3.5 text-white" />
                  {/* Glow animation */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent to-primary opacity-0 group-hover:opacity-20 blur-md transition-opacity" />
                </div>
                
                <div className="flex items-center gap-1.5 min-w-0 flex-1">
                  <span className="text-xs font-semibold tracking-wide text-foreground dark:text-white leading-tight">Portfolio Assistant</span>
                  {/* Online status indicator */}
                  <span className="flex items-center gap-1 text-[10px] text-emerald-600 dark:text-emerald-400 flex-shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 dark:bg-emerald-400 animate-pulse" />
                    Online
                  </span>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleChat}
                className="h-7 w-7 hover:bg-gray-300 dark:hover:bg-white/10 flex-shrink-0 p-0 transition-all">
                <X className="h-3.5 w-3.5" />
              </Button>
            </div>
          </CardHeader>

          {/* Messages Container - Optimized for Maximum Content Space */}
          <CardContent className="flex-1 overflow-y-auto p-3 md:p-4 space-y-3 md:space-y-4">
            {/* Welcome Message */}
            {messages.length === 0 && (
              <div className="space-y-3">
                <div className="flex gap-2 md:gap-2.5">
                  <div className="h-7 w-7 rounded-full bg-gradient-to-r from-accent to-primary flex items-center justify-center flex-shrink-0">
                    <Bot className="h-3.5 w-3.5 text-white" />
                  </div>
                  <div className="bg-secondary/50 rounded-2xl rounded-tl-none p-2.5 md:p-3 max-w-[90%]">
                    <p className="text-xs md:text-sm leading-relaxed">
                      👋 Hi! I'm here to help you learn about Mohamed Aziz's background, skills, and experience. 
                      Ask me anything or try one of these:
                    </p>
                  </div>
                </div>

                {/* Suggested Questions - Compact Grid */}
                <div className="grid gap-1.5 md:gap-2">
                  {SUGGESTED_QUESTIONS.slice(0, 4).map((question, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSuggestedQuestion(question)}
                      className="w-full text-left text-[11px] md:text-xs p-2 md:p-2.5 rounded-lg bg-accent/10 hover:bg-accent/20 border border-accent/20 hover:border-accent/40 transition-all text-foreground/80 hover:text-foreground font-medium"
                    >
                      {question}
                    </button>
                  ))}
                </div>

                {/* Quick Actions - Compact */}
                <div className="flex flex-wrap gap-1.5 md:gap-2">
                  <Badge variant="outline" className="text-[9px] md:text-[10px] cursor-pointer hover:bg-accent/10 px-2 py-0.5" asChild>
                    <a href="/cv.pdf" download>
                      <Download className="h-2.5 w-2.5 mr-0.5" />
                      Download CV
                    </a>
                  </Badge>
                  <Badge variant="outline" className="text-[9px] md:text-[10px] cursor-pointer hover:bg-accent/10 px-2 py-0.5" asChild>
                    <a href="/contact">
                      Contact Aziz
                    </a>
                  </Badge>
                </div>
              </div>
            )}

            {/* Chat Messages - Optimized Density */}
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-2 md:gap-2.5 ${message.role === 'user' ? 'justify-end' : ''}`}
              >
                {message.role === 'assistant' && (
                  <div className="h-7 w-7 rounded-full bg-gradient-to-r from-accent to-primary flex items-center justify-center flex-shrink-0">
                    <Bot className="h-3.5 w-3.5 text-white" />
                  </div>
                )}
                <div
                  className={`rounded-2xl p-3 md:p-4 max-w-[85%] ${
                    message.role === 'user'
                      ? 'bg-gradient-to-r from-accent to-primary text-white rounded-tr-none'
                      : 'bg-secondary/50 rounded-tl-none'
                  }`}
                >
                  <div 
                    className="text-xs md:text-sm leading-relaxed space-y-2 prose prose-invert max-w-none"
                    dangerouslySetInnerHTML={{
                      __html: message.role === 'assistant' 
                        ? renderMarkdown(message.content)
                        : message.content
                    }}
                  />
                </div>
                {message.role === 'user' && (
                  <div className="h-7 w-7 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                    <User className="h-3.5 w-3.5" />
                  </div>
                )}
              </div>
            ))}

            {/* Loading Indicator - Compact */}
            {isLoading && (
              <div className="flex gap-2 md:gap-2.5">
                <div className="h-7 w-7 rounded-full bg-gradient-to-r from-accent to-primary flex items-center justify-center flex-shrink-0">
                  <Bot className="h-3.5 w-3.5 text-white" />
                </div>
                <div className="bg-secondary/50 rounded-2xl rounded-tl-none p-2.5 md:p-3">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 bg-foreground/40 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-2 h-2 bg-foreground/40 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-2 h-2 bg-foreground/40 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              </div>
            )}

            {/* Error Message - Compact */}
            {error && (
              <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-2.5 md:p-3 text-xs md:text-sm text-red-600 dark:text-red-400">
                {error}
              </div>
            )}

            {/* Follow-up Questions - Compact */}
            {messages.length > 0 && messages[messages.length - 1]?.role === 'assistant' && (
              <div className="space-y-1.5 md:space-y-2 mt-3 md:mt-4 pt-3 md:pt-4 border-t border-secondary/50">
                <p className="text-[10px] md:text-xs font-medium text-muted-foreground">Related questions:</p>
                {SUGGESTED_QUESTIONS.slice(0, 3).map((question, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSuggestedQuestion(question)}
                    disabled={isLoading}
                    className="block w-full text-left text-[11px] md:text-xs p-2 md:p-2.5 rounded-lg bg-accent/10 hover:bg-accent/20 disabled:opacity-50 disabled:cursor-not-allowed border border-accent/20 hover:border-accent/40 transition-all text-foreground/80 hover:text-foreground font-medium"
                  >
                    {question}
                  </button>
                ))}
              </div>
            )}

            <div ref={messagesEndRef} />
          </CardContent>

          {/* Input Form - Minimized Footer for Space Efficiency */}
          <div className="border-t p-2.5 md:p-3 flex-shrink-0">
            {messages.length > 0 && (
              <div className="mb-2">
                <button
                  onClick={() => setMessages([])}
                  className="w-full text-[10px] md:text-xs px-2.5 py-1.5 md:py-2 rounded-lg bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 transition-colors font-semibold"
                >
                  New Chat
                </button>
              </div>
            )}
            <form onSubmit={handleSubmit} className="flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask me anything..."
                disabled={isLoading}
                className="flex-1 border-accent/20 focus:border-accent text-xs md:text-sm py-2 h-9"
                maxLength={200}
              />
              <Button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="bg-gradient-to-r from-accent to-primary hover:shadow-lg hover:shadow-accent/50 transition-all px-2.5 md:px-3 h-9 flex-shrink-0"
              >
                <Send className="h-3.5 w-3.5 md:h-4 md:w-4" />
              </Button>
            </form>
            <p className="text-[8px] md:text-[9px] text-muted-foreground/60 mt-1.5 text-center leading-tight">
              AI-powered · May not be 100% accurate
            </p>
          </div>
        </Card>
      )}

      <style jsx>{`
        @keyframes logoGlow {
          0%, 100% {
            box-shadow: 0 0 8px rgba(59, 130, 246, 0.5);
          }
          50% {
            box-shadow: 0 0 12px rgba(6, 182, 212, 0.8);
          }
        }
        :global(.logo-glow) {
          animation: logoGlow 2s ease-in-out infinite;
        }
        :global(.prose strong) {
          font-weight: 600;
          color: inherit;
        }
        :global(.prose em) {
          font-style: italic;
          color: inherit;
        }
        :global(.prose ul) {
          list-style: disc;
          margin-left: 1rem;
          margin-top: 0.5rem;
          margin-bottom: 0.5rem;
        }
        :global(.prose li) {
          margin-bottom: 0.25rem;
        }
        :global(.prose h2) {
          font-size: 1.1em;
          font-weight: 600;
          margin-top: 0.75rem;
          margin-bottom: 0.5rem;
        }
        :global(.prose h3) {
          font-size: 1em;
          font-weight: 600;
          margin-top: 0.5rem;
          margin-bottom: 0.25rem;
        }
      `}</style>
    </>
  )
}

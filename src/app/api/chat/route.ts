import { createOpenAI } from '@ai-sdk/openai'
import { streamText } from 'ai'
import { CV_CONTEXT } from '@/lib/cv-context';

// Simple rate limiting (in-memory, resets on deployment)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

const RATE_LIMIT = {
  maxRequests: 10,
  windowMs: 60000, // 1 minute
};

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT.windowMs });
    return true;
  }

  if (record.count >= RATE_LIMIT.maxRequests) {
    return false;
  }

  record.count++;
  return true;
}

export async function POST(req: Request) {
  try {
    // Get client IP for rate limiting
    const ip = req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || 'unknown';

    // Check rate limit
    if (!checkRateLimit(ip)) {
      return new Response('Rate limit exceeded. Please try again in a minute.', { 
        status: 429,
        headers: { 'Content-Type': 'text/plain' }
      });
    }

    const { messages } = await req.json();

    // Validate messages
    if (!Array.isArray(messages) || messages.length === 0) {
      return new Response('Invalid messages format', { status: 400 });
    }

    // Limit message history to last 10 messages to save tokens
    const recentMessages = messages.slice(-10);

    // Create system prompt with CV context
    const systemPrompt = `You are an AI assistant for Mohamed Aziz Ben Slima's portfolio website. Your role is to help visitors learn about Aziz's background, skills, experience, and projects.

IMPORTANT GUIDELINES:
- Be friendly, professional, and concise
- Answer questions based ONLY on the provided context below
- If asked about something not in the context, politely say you don't have that information
- Encourage visitors to download the CV or contact Aziz directly for detailed information
- Use bullet points and formatting for better readability
- Keep responses under 150 words unless specifically asked for details
- Never make up information not present in the context

CONTEXT ABOUT AZIZ:
${CV_CONTEXT}

Remember: You're here to provide helpful information about Aziz's professional background and guide visitors to take action (download CV, contact, view projects).`;

    const apiKey = process.env.GROQ_API_KEY || ''
    if (!apiKey) {
      return new Response('Missing GROQ_API_KEY', { status: 401 })
    }

    const groq = createOpenAI({
      apiKey,
      baseURL: 'https://api.groq.com/openai/v1',
    })

    const result = streamText({
      model: groq.chat('llama-3.3-70b-versatile'),
      messages: [
        { role: 'system', content: systemPrompt },
        ...recentMessages,
      ],
      temperature: 0.7,
      maxOutputTokens: 500,
    })

    return result.toTextStreamResponse()
  } catch (error) {
    console.error('Chat API Error:', error);
    return new Response('Internal server error. Please try again later.', { 
      status: 500,
      headers: { 'Content-Type': 'text/plain' }
    });
  }
}

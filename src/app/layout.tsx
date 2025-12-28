import type { Metadata } from "next";
import { Poppins, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mohamed Aziz Ben Slima - Data Science & AI Portfolio",
  description: "Data Science student specializing in AI, LLMs, and Machine Learning. Building intelligent solutions with deep learning and NLP.",
  keywords: ["Data Science", "AI", "Machine Learning", "LLM", "Deep Learning", "NLP", "Computer Vision", "Portfolio"],
  authors: [{ name: "Mohamed Aziz Ben Slima" }],
  icons: {
    icon: '/logo-pt.svg',
  },
  openGraph: {
    title: "Mohamed Aziz Ben Slima - Data Science & AI Portfolio",
    description: "Data Science student specializing in AI, LLMs, and Machine Learning",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.variable} ${inter.variable} ${jetbrainsMono.variable} font-sans antialiased bg-background text-foreground`}
        style={{ fontFamily: 'var(--font-inter), var(--font-poppins), system-ui, sans-serif' }}
      >
        <script
          dangerouslySetInnerHTML={{
            __html: `(() => {
              try {
                const stored = localStorage.getItem('theme');
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                const theme = stored === 'light' || stored === 'dark' ? stored : (prefersDark ? 'dark' : 'light');
                document.documentElement.classList.toggle('dark', theme === 'dark');
              } catch (e) {}
            })();`,
          }}
        />
        {children}
        <Toaster />
      </body>
    </html>
  );
}

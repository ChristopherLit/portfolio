import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import { Inter as FontSans } from "next/font/google";
import "./global.css";
import Video from "@/components/video";
import Contact from "@/components/contact";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <main className="max-w-2xl mx-auto py-12 sm:py-24 px-6">
            {children}
            <Analytics />
            <SpeedInsights />
          </main>
          <Video />

          <div className="max-w-2xl mx-auto py-12 sm:py-24 px-6">
            <Contact />
          </div>

        </ThemeProvider>
      </body>
    </html>
  );
}



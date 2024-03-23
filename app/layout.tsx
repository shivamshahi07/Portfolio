import type { Viewport } from 'next'
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/landing/navbar/navbar";
import { cn } from "@/lib/utils";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shivam Shahi • Full Stack Developer",
  description:
    "Explore the digital world created by Shivam, a seasoned full-stack web developer. Specializing in both front-end and back-end technologies, I bring ideas to life with a perfect blend of creativity and technical expertise",
  icons: [
    {
      url: "/images/shivam.jpg",
      href: "/images/shivam.jpg",
    },
  ],
};
 
export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'cyan' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={cn("", inter.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          // forcedTheme="dark"
        >
          <Navbar />
          
          <Toaster position="top-right"/>
          <main className="pt-36 pb-20">{children}</main>
          
        </ThemeProvider>
      </body>
    </html>
  );
}

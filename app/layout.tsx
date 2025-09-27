import type React from 'react';
import { FC } from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Footer from '@/components/ui/footer';
import Navbar from '@/components/ui/navbar';
import { ThemeProvider } from "@/components/ui/theme/theme-provider"

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'named after women',
  description: 'mapping out women\'s history in berlin',
};

const RootLayout: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
     <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
          integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
          crossOrigin=""
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
        >
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;

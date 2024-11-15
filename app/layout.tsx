import "@/styles/globals.css";
import "@/styles/custom.css";

import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import NextTopLoader from "nextjs-toploader";

import type { Metadata } from "next";

import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const ubuntu = Inter({
  weight: ["300", "400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("antialiased scroll-smooth", ubuntu.className)}>
        <NextTopLoader
          color="#ff0101"
          zIndex={1600}
          template='<div class="bar" role="bar" style="position: fixed; top: 0; left: 0; width: 100%; z-index: 1000;"><div class="peg"></div></div><div class="spinner-icon"></div>'
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}

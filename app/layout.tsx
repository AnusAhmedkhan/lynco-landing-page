import "./globals.css";

import type { Metadata } from "next";
import { Inter, Lato } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Suspense } from "react";

import I18nProvider from "@/components/I18nProvider";
import QueryProvider from "@/components/QueryProvider";
import { THEME } from "@/constants";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export const metadata: Metadata = {
  title: "Snaplegal",
  description: "Snaplegal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${inter.className} ${lato.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme={THEME.DARK}
          enableSystem={false}
          disableTransitionOnChange
        >
          <Suspense>
            <I18nProvider>
              <QueryProvider>{children}</QueryProvider>
            </I18nProvider>
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  );
}

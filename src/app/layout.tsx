import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Priva - AI-Powered Selective Face Blur",
  description:
    "Protect privacy in your videos with AI-powered selective face blurring. Enroll faces to keep visible, blur all others automatically.",
  keywords: [
    "face blur",
    "video privacy",
    "AI face detection",
    "selective blur",
    "video editing",
    "privacy protection",
  ],
  authors: [{ name: "Priva Team" }],
  openGraph: {
    title: "Priva - AI-Powered Selective Face Blur",
    description:
      "Protect privacy in your videos with AI-powered selective face blurring.",
    type: "website",
    locale: "en_US",
    siteName: "Priva",
  },
  twitter: {
    card: "summary_large_image",
    title: "Priva - AI-Powered Selective Face Blur",
    description:
      "Protect privacy in your videos with AI-powered selective face blurring.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

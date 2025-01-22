import type { Metadata } from "next";
import "./globals.css";
import { Montserrat, Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hexvon",
  description: "Your Digital Journey, Simplified With Hexvon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="scrollbar"
    >
      <body
        className={`${montserrat.variable} ${inter.variable} antialiased bg-black `}
      >
      <div>
      <ThemeProvider attribute="class" defaultTheme="dark">
          {children}
        </ThemeProvider>
      </div>
      </body>
    </html>
  );
}

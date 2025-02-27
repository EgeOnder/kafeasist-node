import { Toaster } from "@kafeasist/ui";

import "./globals.css";

import { DM_Sans, DM_Serif_Display } from "next/font/google";

const textFont = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const headingFont = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-serif",
});

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <html>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <title>kafeasist</title>
      </head>
      <body
        className={`${textFont.variable} ${headingFont.variable} bg-background font-sans`}
      >
        <main>{children}</main>
        <Toaster position="bottom-right" />
      </body>
    </html>
  );
}

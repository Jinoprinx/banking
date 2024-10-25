import type { Metadata } from "next";
import {Inter, IBM_Plex_Serif} from "next/font/google"
import "./globals.css";
import localFont from "next/font/local";

const inter = Inter({subsets: ['latin'], variable:"--font-inter"});
const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: "--font-ibm-plex-serif"
})

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "QwikBank",
  description: "QwikBank is a modern banking platform for lightening speed transactions for all.",
  icons: {
    icon: '/icons/logo.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className={`${inter.variable} ${ibmPlexSerif.variable}`}>
        {children}
      </body>
    </html>
  );
}

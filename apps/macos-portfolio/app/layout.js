import { Inter } from "next/font/google";

import Logo from "@/app/logo.png";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Akshat Garg | Portfolio",
  description: "Portfolio Website of Akshat Garg",
  applicationName: "Akshat Garg Portfolio",
  category: "technology",
  generator: "InitiateJS.dev",
  creator: "Pixel Venturers",
  publisher: "Pixel Venturers",
  metadataBase: new URL("https://akshat-garg.com"),
  authors: [{ name: "Pixel Venturers", url: "https://webdesignagencylab.com" }],
  other: { "google-adsense-account": "ca-pub-6878576258513373" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: new URL("https://akshat-garg.com"),
    title: "Akshat Garg | Portfolio",
    description: "Portfolio Website of Akshat Garg",
    siteName: "Akshat Garg",
    images: [
      {
        url: "https://www.akshat-garg.com/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Akshat Garg | Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Akshat Garg | Portfolio",
    description: "Portfolio Website of Akshat Garg",
    images: ["https://www.akshat-garg.com/opengraph-image.png"],
    creator: "@Pixel_Venturers",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-icon.png",
  },
  manifest: "https://www.akshat-garg.com/site.webmanifest",
  alternates: {
    canonical: "https://akshat-garg.com",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  keywords: [
    "Akshat",
    "Garg",
    "Akshat Garg",
    "Portfolio",
    "Next",
    "Frontend",
    "Full Stack",
    "Nextjs",
    "React",
    "JavaScript",
  ],
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Akshat Garg",
  url: "https://akshat-garg.com",
  jobTitle: "Full Stack Developer",
  description: "Portfolio Website of Akshat Garg",
  image: Logo,
  author: { "@type": "Organization", name: "Pixel Venturers" },
  sameAs: [
    "https://github.com/akshat-g-07",
    "https://www.linkedin.com/in/akshat-garg-580322241/",
    "https://twitter.com/akku_g__",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}

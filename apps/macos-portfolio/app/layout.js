import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Akshat Garg - Portfolio",
  description: "Portfolio Website of Akshat Garg",
  applicationName: "Akshat Garg Portfolio",
  creator: "Akshat Garg",
  publisher: "Akshat Garg",
  metadataBase: new URL("https://akshat-garg.com"),
  authors: [{ name: "Akshat Garg", url: "https://akshat-garg.com" }],
  openGraph: {
    images: "/opengraph-image.png",
  },
  alternates: {
    canonical: "https://akshat-garg.com",
    languages: {
      "en-US": "https://akshat-garg.com/en-US",
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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

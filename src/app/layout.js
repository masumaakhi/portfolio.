export const metadata = {
  metadataBase: new URL("https://masuma-portfolio-website.netlify.app"), // ✅ Replace with actual deployed domain
  title: {
    default: "Masuma Akter Akhi - Frontend Developer & Web Developer",
    template: "%s | Masuma Akter Akhi"
  },
  description: "Experienced Frontend Developer specializing in React, Next.js, and modern web technologies. Creating responsive, user-centric web applications with a focus on performance and accessibility.",
  keywords: [
    "Frontend Developer",
    "React Developer", 
    "Next.js Developer",
    "Web Developer",
    "JavaScript Developer",
    "UI/UX Developer",
    "MERN Stack Developer",
    "Portfolio",
    "Masuma Akter Akhi"
  ],
  authors: [{ name: "Masuma Akter Akhi" }],
  creator: "Masuma Akter Akhi",
  publisher: "Masuma Akter Akhi",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://your-domain.com',
    title: 'Masuma Akter Akhi - Frontend Developer & Web Developer',
    description: 'Experienced Frontend Developer specializing in React, Next.js, and modern web technologies. Creating responsive, user-centric web applications.',
    siteName: 'Masuma Akter Akhi Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Masuma Akter Akhi - Frontend Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Masuma Akter Akhi - Frontend Developer & Web Developer',
    description: 'Experienced Frontend Developer specializing in React, Next.js, and modern web technologies.',
    images: ['/og-image.jpg'],
    creator: '@Masumaakhi12',
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#38BDF8' },
    ],
  },
  manifest: '/site.webmanifest',
  verification: {
    google: 'your-google-verification-code',
  },
};

import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

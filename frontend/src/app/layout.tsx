import type { Metadata } from "next";
import "@styles/globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s | Storror",
    default: "STORROR® | Clothing & Technical sportswear",
  },
  description:
    "Discover STORROR®'s exclusive range of clothing, shoes, and accessories, designed by world-class parkour athletes. Shop now for premium gear!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          type="image/png"
          href="/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="apple-mobile-web-app-title" content="Storror" />
        <meta name="theme-color" content="#1B1B1B" />
        <meta name="background-color" content="#ffffff" />
      </head>
      <body>{children}</body>
    </html>
  );
}

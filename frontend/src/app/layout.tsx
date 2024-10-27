import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "STORROR® | Clothing & Technical sportswear",
  description: "Discover STORROR®'s exclusive range of clothing, shoes, and accessories, designed by world-class parkour athletes. Shop now for premium gear!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}

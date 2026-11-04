import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-display",
});

const body = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://iriscafe.in"),
  title: "Iris Café & Kitchen — JP Nagar, Bengaluru",
  description:
    "A garden of fine flavours in JP Nagar. Specialty coffee, small plates, pizza and pasta under warm light and greenery. Open daily 9 am – 11 pm.",
  openGraph: {
    title: "Iris Café & Kitchen",
    description: "A garden of fine flavours — JP Nagar, Bengaluru.",
    images: ["/images/patio-evening.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#0e0c09",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="grain">{children}</body>
    </html>
  );
}

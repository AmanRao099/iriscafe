import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { cafe } from "@/lib/data";
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
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Iris Café & Kitchen",
    locale: "en_IN",
    title: "Iris Café & Kitchen",
    description: "A garden of fine flavours — JP Nagar, Bengaluru.",
    images: [{ url: "/images/patio-evening.jpg", width: 1600, height: 1068, alt: "Iris terrace in the evening" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Iris Café & Kitchen",
    description: "A garden of fine flavours — JP Nagar, Bengaluru.",
    images: ["/images/patio-evening.jpg"],
  },
  formatDetection: { telephone: true, email: true, address: false },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0e0c09",
  colorScheme: "dark",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CafeOrCoffeeShop",
  name: cafe.name,
  url: cafe.website,
  image: `${cafe.website}/images/patio-evening.jpg`,
  telephone: cafe.phone,
  email: cafe.email,
  servesCuisine: ["Café", "Italian", "Continental"],
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress: "735, 16th Cross, 29th Main Rd, 6th Phase, J. P. Nagar",
    addressLocality: "Bengaluru",
    addressRegion: "Karnataka",
    postalCode: "560078",
    addressCountry: "IN",
  },
  geo: { "@type": "GeoCoordinates", latitude: 12.9056741, longitude: 77.5831866 },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "09:00",
      closes: "23:00",
    },
  ],
  sameAs: [cafe.instagram],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="grain">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
        {children}
      </body>
    </html>
  );
}

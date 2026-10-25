import type { Metadata } from "next";
import { IBM_Plex_Sans, Roboto_Slab } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoogleRatingBadge from "@/components/GoogleRatingBadge";
import { site } from "@/lib/site";
import "./globals.css";

const robotoSlab = Roboto_Slab({
  variable: "--font-roboto-slab",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const plex = IBM_Plex_Sans({
  variable: "--font-plex",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: "Los Angeles Employment & Injury Lawyers | Lighthouse Law APC",
  description:
    "Lighthouse Law fights for Los Angeles workers and accident victims: wrongful termination, harassment, wage claims and personal injury. Free consultation.",
  openGraph: { siteName: site.name, type: "website", locale: "en_US" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${robotoSlab.variable} ${plex.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <GoogleRatingBadge />
      </body>
    </html>
  );
}

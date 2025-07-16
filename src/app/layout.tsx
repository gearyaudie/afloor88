import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "efloor | Lantai SPC, Vinyl, Parket-Parquet | List Siku L, List Adaptasi, List Plint/Plank/Skirting",
  description:
    "Menyediakan beragam jenis flooring seperti Lantai SPC, Vinyl, Parket-Parquet. Aksesoris untuk flooring seperti List Siku L, List Adaptasi/Reduser strip, T molding, End Molding, List Skirting/Plint/Plank",
  keywords: [
    "lantai",
    "vinyl",
    "parket",
    "parquet",
    "lantai spc",
    "lantai vinyl",
    "lantai parket",
    "lantai parquet",
    "lem vinyl",
    "lem karpet",
    "lem kayu tahan air",
    "list siku L",
    "list skirting",
    "list plint",
    "list plank",
    "list t molding",
    "list adaptasi",
    "list end molding",
    "list reduser strip",
    "list PVC",
    "aksesoris lantai vinyl",
    "efloor",
    "tokopedia",
    "shopee",
  ],
  authors: [{ name: "efloor" }],
  creator: "efloor",
  metadataBase: new URL("https://www.efloor.id"), // 🔁 replace with your actual domain
  openGraph: {
    title:
      "Lantai SPC, Lantai Vinyl, Parket-Parquet, Flooring & Aksesoris | efloor",
    description: "Menjual berbagai jenis aksesoris lantai, pvc dan vinyl",
    url: "https://www.efloor.id", // 🔁 replace with your actual domain
    siteName: "efloor",
    locale: "id_ID",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.efloor.id",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

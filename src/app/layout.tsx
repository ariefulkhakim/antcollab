import type { Metadata } from "next";
import { Inter, Urbanist } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const urban = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Komunitas IT terbesar di indonesia",
  description:
    "Ant Collaboration adalah komunitas yang menyediakan ruang bagi individu berbakat untuk mengembangkan keterampilan di bidang IT untuk jalur karier profesional. Ruang kami difokuskan pada dua program utama, yaitu Antcode & Andcreative.",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/images/favicon.png",
        href: "/images/favicon.png",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/images/favicon.png",
        href: "/images/favicon.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>{children}</body>
    </html>
  );
}

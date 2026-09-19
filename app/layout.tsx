import type { Metadata } from "next";
import "./globals.css";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: {
    default: `${profile.name} | Educator, Trainer & Facilitator`,
    template: `%s | ${profile.name}`,
  },
  description: profile.introduction,
  keywords: ["educator", "trainer", "facilitator", "NGO trainer", "education consultant", "workshop facilitator", "teacher trainer", "capacity building", profile.location],
  alternates: { canonical: "/" },
  openGraph: { type: "website", title: `${profile.name} | Educator, Trainer & Facilitator`, description: profile.introduction, url: "/", siteName: `${profile.name} Portfolio` },
  twitter: { card: "summary", title: `${profile.name} | Educator, Trainer & Facilitator`, description: profile.introduction },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

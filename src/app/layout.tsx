import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Automation Technology | Open New Automation Mind",
  description:
    "Automation Technology - Pakistan's leading supplier of Industrial Automation, Pneumatic, Hydraulic, Filtration and Motion Control Equipment & Instrumentation. Authorized Festo distributor.",
  keywords: [
    "Automation Technology",
    "Festo distributor Pakistan",
    "industrial automation",
    "process automation",
    "pneumatic automation",
    "electric automation",
    "valve automation",
    "Festo products",
    "automation Lahore",
  ],
  authors: [{ name: "Automation Technology" }],
  icons: {
    icon: "/ati-logo.png",
  },
  openGraph: {
    title: "Automation Technology",
    description:
      "Pakistan's leading supplier of Industrial Automation, Pneumatic, Hydraulic, Filtration and Motion Control Equipment & Instrumentation.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${notoSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

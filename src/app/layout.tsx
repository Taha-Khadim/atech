import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "MS Automation Technology | Industrial Automation & Festo Distribution",
  description:
    "MS Automation Technology is an authorized Festo distributor in Pakistan, providing industrial automation solutions including pneumatic, electric, and process automation products.",
  keywords: [
    "MS Automation Technology",
    "Festo distributor Pakistan",
    "industrial automation",
    "process automation",
    "pneumatic automation",
    "electric automation",
    "valve automation",
    "Festo products",
    "automation Lahore",
  ],
  authors: [{ name: "MS Automation Technology" }],
  icons: {
    icon: "https://z-cdn.chatglm.cn/z-ai/static/logo.svg",
  },
  openGraph: {
    title: "MS Automation Technology",
    description:
      "Authorized Festo distributor in Pakistan. Industrial automation solutions for process and factory automation.",
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

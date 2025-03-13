import type { Metadata } from "next";
import { Space_Mono, Work_Sans } from "next/font/google";
import "./globals.css";
import Header from "./_component/layout/header";
import Footer from "./_component/layout/footer";

const workSans = Work_Sans({ subsets: ["latin"], variable: "--font-main" });
const spaceMono = Space_Mono({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-other" });

export const metadata: Metadata = {
  title: "Home",
  icons: "/assets/images/logo.png"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${workSans.variable} ${spaceMono.variable} ${'bg-background text-content font-work-sans box-border'}`}
      >
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}

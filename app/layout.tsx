import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Afripacific Cleaning Services | Nairobi",
  description:
    "Professional cleaning services in Nairobi — residential, office, carpet, sofa, car detailing, fumigation and more.",
  icons: {
    icon: [
      { url: "/icons/favicon.ico" }
    ],
    shortcut: ["/icons/favicon.ico"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
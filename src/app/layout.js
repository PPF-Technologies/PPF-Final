import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Providers } from "./providers";
import Footer from "@/components/Footer";
import { IoLogoWhatsapp } from "react-icons/io";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "CAMIO-PPF",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
        <Providers>
          <Navbar />
          {children}
          <a
            href="https://wa.me/728377971?text=awesome product"
            target="_blank"
            aria-label="Message us on WhatsApp about this awesome product"
          >
           <div className="bg-white p-2">
           <IoLogoWhatsapp className="text-[50px] p-1 fixed bottom-14 right-14 text-green-400" />
           </div>
          </a>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

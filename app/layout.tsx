import type { Metadata } from "next";
import "./globals.css";
import {Navbar} from "@/components/navbar";
import { Footer } from "@/components/global";
import { Providers } from "./providers";



export const metadata: Metadata = {
  title: "DayForecast",
  description: "Weather app to lock on your city's weather",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme='light'>
      <body
        className={` antialiased`}
      >
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

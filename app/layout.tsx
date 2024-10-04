import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Nav from "./components/Nav";

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

export const metadata: Metadata = {
  title: "Dog Finder",
  description: "Find your favorite furry pals with a simple select!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <div className="container mx-auto my-4">
          <Nav />
          <main className="grid items-center justify-center">
            <div className="bg-foreground p-8 rounded-lg m-4 max-w-4xl">
              {children}
            </div>
            ;
          </main>
        </div>
      </body>
    </html>
  );
}

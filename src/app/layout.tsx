import type { Metadata } from "next";
import "./globals.css";
import RootHeader from "@/app/components/RootHeader";
import {bellefair} from "./font"

export const metadata: Metadata = {
  title: "Space Tourism",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode,
}>) {
  return (
    <html lang="en">
      <body
        className={`flex flex-col h-screen w-screen ${bellefair.className}`}
      >
        <RootHeader />
        <main className="flex h-full w-full overflow-auto">
          {children}
        </main>
      </body>
    </html>
  );
}

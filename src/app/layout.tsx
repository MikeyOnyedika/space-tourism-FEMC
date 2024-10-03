import type { Metadata } from "next";
import "./globals.css";
import Body from "./components/Body";
import Navigation from "./components/Navigation";
import GlobalStateProvider from "./contexts/GlobalStateProvider";

export const metadata: Metadata = {
  title: "Space Tourism",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GlobalStateProvider>
        <Body>
          <Navigation />
          {children}
        </Body>
      </GlobalStateProvider>
    </html >
  );
}

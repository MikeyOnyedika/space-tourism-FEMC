"use client";
import { usePathname } from "next/navigation";
import RootHeader from "./RootHeader";
import { barlow } from "../font";
import { ReactNode } from "react";
import { getBasePage } from "../utils";

function getBackgroundImage(pathname: string): string {
  const page = getBasePage(pathname);
  if (!page) { return "" }

  switch (page.slug) {
    case "home":
      return "bg-home md:bg-home-tablet 2xl:bg-home-desktop";
    case "destination":
      return "bg-destination md:bg-destination-tablet 2xl:bg-destination-desktop";
    case "crew":
      return "bg-crew md:bg-crew-tablet 2xl:bg-crew-desktop";
    case "technology":
      return "bg-technology md:bg-technology-tablet 2xl:bg-technology-desktop";
    default:
      return ""
  }
}

export default function Body({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  return (
    <body
      className={`text-blue-300 flex flex-col h-screen w-screen bg-blue-300 bg-cover bg-no-repeat 
        ${barlow.className} ${getBackgroundImage(pathname)}`}
    >
      <RootHeader />
      <main className="flex h-full w-full overflow-auto">{children}</main>
    </body>
  );
}

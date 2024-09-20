"use client";
import { usePathname } from "next/navigation";
import RootHeader from "./RootHeader";
import { barlow } from "../font";
import { ReactNode } from "react";

function getBackgroundImage(pathname: string): string {
  if (pathname === "/") {
    return "bg-home md:bg-home-tablet 2xl:bg-home-desktop";
  }
  if (pathname.startsWith("/destination")) {
    return "bg-destination md:bg-destination-tablet 2xl:bg-destination-desktop";
  }
  if (pathname.startsWith("/crew")) {
    return "bg-crew md:bg-crew-tablet 2xl:bg-crew-desktop";
  }
  if (pathname.startsWith("/technology")) {
    return "bg-technology md:bg-technology-tablet 2xl:bg-technology-desktop";
  }
  // TODO: watchout in case this hides an error.
  return "";
}

export default function Body({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  console.log("pathname: ", pathname);
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

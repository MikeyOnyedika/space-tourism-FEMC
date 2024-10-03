"use client"
import { barlowCondensed } from "@/app/font"
import { getBasePage } from "@/app/utils";
import { redirect, usePathname } from "next/navigation"

export default function Header() {
  const pathname = usePathname();
  const page = getBasePage(pathname);
  if (!page) { redirect("/") }
  return (
    <header className={`pt-6 pr-6 pl-6 uppercase   md:tracking-normal text-blue-300 w-full flex justify-center  ${barlowCondensed.className}`}>
      <p className="flex items-center text-base uppercase tracking-[0.1em] md:tracking-normal gap-6">
        <span className="font-bold text-white/25">{page.id}</span>
        <span className="text-white">{page.title}</span>
      </p>
    </header>
  )
}

"use client"
import { barlowCondensed } from "@/app/font"
import { getBasePage } from "@/app/utils";
import { redirect, usePathname } from "next/navigation"

export default function Header() {
  const pathname = usePathname();
  const page = getBasePage(pathname);
  if (!page) { redirect("/") }
  return (
    <header className={`pt-6 md:pt-10 px-6 md:px-10 2xl:pt-12 md:justify-start uppercase md:tracking-normal text-blue-300 w-full flex justify-center  ${barlowCondensed.className}`}>
      <p className="flex items-center text-base md:text-xl 2xl:text-[1.75rem] 2xl:tracking-[4.72px] uppercase tracking-[0.1em] gap-6">
        <span className="font-bold text-white/25">{page.id}</span>
        <span className="text-white 2xl:tracking-[4px]">{page.title}</span>
      </p>
    </header>
  )
}

"use client"
import { barlowCondensed } from "@/app/font"
import { usePathname } from "next/navigation"

const titles = [
  {
    slug: "/destination",
    id: "01",
    title: "pick your destination"
  },
  {
    slug: "/crew",
    id: "02",
    title: "meet your crew"
  },
  {
    slug: "/technology",
    id: "03",
    title: "space launch 101"
  },
]

function getTitle(slug: string): typeof titles[0] {
  if (slug.startsWith("/destination")) {
    return titles[0];
  } else if (slug.startsWith("/crew")) {
    return titles[1];
  } else if (slug.startsWith("/technology")) {
    return titles[2];
  } else {
    throw new Error("no matching slug")
  }
}

export default function Header() {
  const pathname = usePathname();
  const title = getTitle(pathname);
  return (
    <header className={`uppercase   md:tracking-normal text-blue-300 w-full flex justify-center  ${barlowCondensed.className}`}>
      <p className="flex items-center text-base uppercase tracking-[0.1em] md:tracking-normal gap-6">
        <span className="font-bold text-white/25">{title.id}</span>
        <span className="text-white">{title.title}</span>
      </p>
    </header>
  )
}

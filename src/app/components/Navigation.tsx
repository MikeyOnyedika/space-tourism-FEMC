"use client"
import Image from "next/image";
import { navLinks } from "../data";
import Link from "next/link";
import { barlowCondensed } from "../font";
import { redirect, usePathname } from "next/navigation";
import { getBasePage } from "../utils";
import { useGlobalStateContext } from "../contexts/GlobalStateProvider";

export default function Navigation() {
  const pathname = usePathname();
  const currentPage = getBasePage(pathname);
  const globalState = useGlobalStateContext();
  if (!currentPage) {
    redirect("/")
  }
  return (
    <nav className={`z-10 fixed flex flex-col top-0 right-0 bottom-0 w-64 backdrop-blur-xl bg-blue-900/15  gap-12 items-end pt-8 ps-8 transition-transform duration-300  ${globalState?.isNavOpen === true ? "translate-x-0" : "translate-x-full"}`}>
      <button type="button" className="me-6" onClick={() => {
        globalState?.closeNav()
        console.log("button triggered");
      }}>
        <Image src="/assets/shared/icon-close.svg" alt="close icon" className="w-6 h-6" width={100} height={100} />
      </button>
      <ul className="flex flex-col gap-8 w-full">
        {navLinks.map(navItem => (
          <li key={navItem.slug} className="flex">
            <Link href={navItem.href} className={`w-full flex gap-3 text-base text-white border-e-[3px] hover:border-e-white/50  ${barlowCondensed.className} ${currentPage.slug === navItem.slug ? "border-e-white" : "border-e-[transparent]"}`}>
              <span className={`font-bold tracking-[0.17rem]`}>{navItem.id}</span>
              <span className="uppercase tracking-[0.125rem]">{navItem.slug}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

import Image from "next/image";
import Link from "next/link";
import { useGlobalStateContext } from "../contexts/GlobalStateProvider";
import { navLinks } from "../data";
import { barlowCondensed } from "../font";
import { getBasePage } from "../utils";
import { redirect, usePathname } from "next/navigation";

export default function RootHeader() {
  const globalState = useGlobalStateContext();
  const pathname = usePathname();
  const currentPage = getBasePage(pathname);
  if (!currentPage) {
    redirect("/")
  }
  return (
    <header className="flex justify-between items-center gap-2 p-6 md:p-0 md:gap-0 w-full">
      <div className="flex items-center md:px-10 md:py-6">
        <Image src="/assets/shared/logo.svg" alt="logo" width={40} height={40} className="w-10 h-10 md:min-w-12 md:w-12 md:h-12" />
      </div>
      <button className="md:hidden" type="button" onClick={() => {
        console.log("open?: ", globalState?.isNavOpen);
        globalState?.openNav()
      }}>
        <Image src="/assets/shared/icon-hamburger.svg" alt="hamburger-icon" width={24} height={24} className="w-6 aspect-auto" />
      </button>
      {/*Nav on Tablet and Laptop screens*/}
      <nav className={`hidden md:flex items-center  w-full backdrop-blur-xl bg-white/5   h-full`}>
        <ul className="flex gap-12 px-10 w-full justify-end  h-full">
          {navLinks.map(navItem => {
            if (navItem.slug === currentPage.slug) { console.log(navItem); }
            return (
              <li key={navItem.slug} className="flex">
                <Link href={navItem.href} className={`w-full  flex items-center gap-3 text-base text-white   border-b-[3px] transition-all hover:border-b-white/50 ${barlowCondensed.className} ${currentPage.slug === navItem.slug ? "border-b-white" : "border-b-white/0"} `}>
                  <span className={`font-bold tracking-[0.17rem]`}>{navItem.id}</span>
                  <span className="uppercase tracking-[0.125rem]">{navItem.slug}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}

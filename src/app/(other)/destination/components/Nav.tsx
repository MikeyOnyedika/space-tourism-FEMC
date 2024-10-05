import Link from "next/link";
import { destinations } from "@/app/data";
import { barlowCondensed } from "@/app/font";

export default function Nav({ selectedNavSlug }: {
  selectedNavSlug: string
}) {
  return (
    <nav className="w-full flex">
      <ul className={`w-full flex justify-center gap-8 text-sm md:text-base tracking-[0.1em] md:tracking-[2px] ${barlowCondensed.className}`}>
        {destinations.map((des) => (
          <li key={des.slug} className={``}>
            <Link href={des.href} className={`flex flex-col uppercase gap-2 border-b-[3px] pb-2 transition-all     hover:border-b-white/50 ${selectedNavSlug === des.slug ? "text-white border-b-white" : "text-blue-300 border-b-[transparent]"}`}>{des.slug}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

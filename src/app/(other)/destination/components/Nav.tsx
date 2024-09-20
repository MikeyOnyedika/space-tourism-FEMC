import Link from "next/link";
import { destinations } from "@/app/data";
import { barlowCondensed } from "@/app/font";

export default function Nav({ selectedNavSlug }: {
  selectedNavSlug: string
}) {
  return (
    <nav className="w-full flex">
      <ul className={`w-full flex justify-center gap-8 text-sm tracking-[0.1em] ${barlowCondensed.className}`}>
        {destinations.map((des) => (
          <li key={des.slug} className={`flex flex-col uppercase gap-2 after:w-full after:h-[3px] ${selectedNavSlug === des.slug ? "after:bg-white" : "after:hidden"}`}>
            <Link href={des.href} className={``}>{des.slug}</Link>
          </li>
        ))}
      </ul>
    </nav >
  );
}

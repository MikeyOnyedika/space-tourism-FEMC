import Link from "next/link";
import { technology as technologies } from "@/app/data";
import { bellefair } from "@/app/font";

export default function Nav({ selectedTechSlug }: { selectedTechSlug: string }) {
  return (
    <nav className="w-full flex 2xl:w-fit">
      <ul className="flex w-full justify-center gap-4 2xl:flex-col">
        {technologies.map((tech, index) => (
          <li key={tech.slug} className={`flex`}>
            <Link href={tech.href} className={`w-10 h-10 md:w-14 md:h-14 2xl:w-20 2xl:h-20 rounded-full border-[1px] hover:border-white transition-all  text-lg md:text-2xl 2xl:text-[2rem] ${bellefair.className} flex justify-center items-center ${selectedTechSlug === tech.slug ? "bg-white text-blue-900" : "border-white/25 bg-[transparent]"}`}>{index + 1}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

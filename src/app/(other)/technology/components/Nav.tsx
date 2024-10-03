import Link from "next/link";
import { technology as technologies } from "@/app/data";
import { bellefair } from "@/app/font";

export default function Nav({ selectedTechSlug }: { selectedTechSlug: string }) {
  return (
    <nav className="w-full flex">
      <ul className="flex w-full justify-center gap-4" >
        {technologies.map((tech, index) => (
          <li key={tech.slug} className={`w-10 h-10 rounded-full border-[1px]  text-lg ${bellefair.className} flex justify-center items-center ${selectedTechSlug === tech.slug ? "bg-white text-blue-900" : "border-white/25 bg-[transparent]"}`}>
            <Link href={tech.href}>{index + 1}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

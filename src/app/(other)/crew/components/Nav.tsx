import Link from "next/link";
import { crew } from "@/app/data";

export default function Nav({ selectedCrewSlug }: { selectedCrewSlug: string }) {
  return (
    <nav className="w-full flex justify-center 2xl:justify-start 2xl:pb-12">
      <ul className="flex items-center gap-4 2xl:gap-10">
        {crew.map((crewMember) => (
          <li key={crewMember.slug} className="flex">
            <Link href={crewMember.href} className={`w-[0.63rem] h-[0.63rem] 2xl:w-[0.95rem] 2xl:h-[0.95rem] transition-colors hover:bg-white/50 rounded-full ${selectedCrewSlug === crewMember.slug ? "bg-white" : "bg-white/20"}`}>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

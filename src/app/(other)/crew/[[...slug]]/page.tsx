import { crew } from "@/app/data";
import Image from "next/image";
import Nav from "../components/Nav";
import { redirect } from "next/navigation";
import { bellefair } from "@/app/font";

function findCrew(
  params: Record<string, string>
): (typeof crew)[0] | false {
  const slug = params.slug;

  if (!slug || slug[0] === "commander") {
    return crew.find((member) => member.slug === "commander")!;
  } else if (slug[0] === "mission-specialist") {
    return crew.find((member) => member.slug === "mission-specialist")!;
  } else if (slug[0] === "pilot") {
    return crew.find((des) => des.slug === "pilot")!;
  } else if (slug[0] === "flight-engineer") {
    return crew.find((des) => des.slug === "flight-engineer")!;
  } else {
    return false;
  }
}

export default function Crew({
  params,
}: {
  params: Record<string, string>;
}) {
  const crewMember = findCrew(params);
  if (crewMember === false) {
    redirect("/crew");
  }

  return (
    <section className="w-full h-full flex flex-col items-center gap-8 justify-between pb-6 md:pb-10 pr-6 md:pr-10 pl-6 md:pl-10 2xl:flex-row">
      <section className="w-full flex flex-col gap-6 pt-10 2xl:pt-0 max-w-[32rem] 2xl:max-w-[33.69rem] 2xl:gap-10 2xl:h-full">
        <section className="flex flex-col gap-6 2xl:h-full 2xl:items-center 2xl:justify-center">
          <div className="flex flex-col-reverse items-center gap-2 md:gap-4 uppercase 2xl:items-start 2xl:w-full">
            <h1 className={`text-2xl md:text-[2.5rem] text-white 2xl:w-full 2xl:text-[3.5rem] 2xl:leading-[1.5] ${bellefair.className}`}>{crewMember.name}</h1>
            <h2 className={`text-lg md:text-2xl 2xl:text-[2rem]  text-white/50 ${bellefair.className}`}>{crewMember.role}</h2>
          </div>
          <p className="text-center text-[0.94rem] leading-[180%] min-h-[10.8em] md:text-base   md:leading-[180%] md:min-h-[7.2em] 2xl:text-start 2xl:text-lg 2xl:leading-[180%]">{crewMember.bio}</p>
        </section>
        <Nav selectedCrewSlug={crewMember.slug} />
      </section>
      <section className="w-full flex justify-center items-center h-full p-1 ">
        <Image src={crewMember.image} width={1600} height={2400} alt="" className="w-[17rem] h-[17rem] md:w-[28.9rem] md:h-[35rem] 2xl:w-[33.8rem] 2xl:h-auto object-contain 2xl:ps-8" />
      </section>
    </section>
  );
}

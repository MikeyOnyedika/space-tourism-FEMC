import { destinations } from "@/app/data";
import Image from "next/image";
import Nav from "../components/Nav";
import { redirect } from "next/navigation";
import { barlowCondensed, bellefair } from "@/app/font";

function findDestination(
  params: Record<string, string>
): (typeof destinations)[0] | false {
  const slug = params.slug;

  if (!slug || slug[0] === "moon") {
    return destinations.find((des) => des.slug === "moon")!;
  } else if (slug[0] === "mars") {
    return destinations.find((des) => des.slug === "mars")!;
  } else if (slug[0] === "europa") {
    return destinations.find((des) => des.slug === "europa")!;
  } else if (slug[0] === "titan") {
    return destinations.find((des) => des.slug === "titan")!;
  } else {
    return false;
  }
}

export default function Destination({
  params,
}: {
  params: Record<string, string>;
}) {
  const destination = findDestination(params);
  if (destination === false) {
    redirect("/destination");
  }

  return (
    <section className="w-full h-full flex flex-col gap-8 pb-6 pr-6 pl-6">
      {/* destination image */}
      <div className="flex justify-center items-center w-full p-6">
        <Image src={destination.image} width={1000} height={1000} alt="" className="w-[9.38rem] aspect-square" />
      </div>
      <section className="flex flex-col items-center w-full gap-6">
        {/* destination navigation */}
        <Nav selectedNavSlug={destination.slug} />
        {/* explanation */}
        <div className="flex flex-col gap-4">
          <h1 className={`text-white text-[3.5rem] uppercase text-center ${bellefair.className}`}>{destination.title}</h1>
          <p className="text-[0.94rem] leading-[180%] text-center">{destination.description}</p>
        </div>
        <div className="h-[1px] w-full bg-white/25"></div>
        {/* statistics */}
        <div className="flex flex-col gap-6 uppercase">
          <div className="flex flex-col gap-3 text-center">
            <p className={`text-sm tracking-[2px] ${barlowCondensed.className}`}>avg. distance</p>
            <p className={`text-white text-[1.75rem] ${bellefair.className}`}>{destination.avgDistance}</p>
          </div>
          <div className="flex flex-col gap-3 text-center">
            <p className={`text-sm tracking-[2px] ${barlowCondensed.className}`}>est. travel time</p>
            <p className={`text-white text-[1.75rem] ${bellefair.className}`}>{destination.estTravelTime}</p>
          </div>
        </div>
      </section>
    </section >
  );
}

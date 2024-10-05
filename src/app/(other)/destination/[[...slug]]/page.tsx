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
    <section className="w-full h-full flex flex-col items-center gap-8 pb-6 pr-6 pl-6 md:pb-10 md:pr-10 md:pl-10 2xl:flex-row">
      {/* destination image */}
      <div className="flex justify-center items-center w-full p-6 2xl:p-7 md:h-full md:w-full">
        <Image src={destination.image} width={1000} height={1000} alt="" className="w-[9.38rem] md:w-[18.75rem] 2xl:w-[30rem] aspect-square" />
      </div>
      <div className="flex  items-center justify-center w-full 2xl:p-12">
        <section className="flex flex-col items-center w-full gap-6 2xl:gap-10 max-w-[32.13rem] 2xl:max-w-[27.85rem]">
          {/* destination navigation */}
          <Nav selectedNavSlug={destination.slug} />
          {/* explanation */}
          <div className="flex flex-col gap-4 2xl:items-start">
            <h1 className={`text-white text-[3.5rem] md:text-[5rem] uppercase text-center ${bellefair.className}`}>{destination.title}</h1>
            <p className="text-[0.94rem] md:text-base leading-[180%] md:leading-[180%] 2xl:text-lg 2xl:leading-[180%] text-center 2xl:text-start">{destination.description}</p>
          </div>
          <div className="h-[1px] w-full bg-white/25"></div>
          {/* statistics */}
          <div className="flex flex-col md:flex-row md:w-full gap-6 uppercase">
            <div className="flex flex-col gap-3 text-center md:w-full 2xl:items-start">
              <p className={`text-sm tracking-[2px] ${barlowCondensed.className}`}>avg. distance</p>
              <p className={`text-white text-[1.75rem] ${bellefair.className}`}>{destination.avgDistance}</p>
            </div>
            <div className="flex flex-col gap-3 text-center md:w-full 2xl:items-start">
              <p className={`text-sm tracking-[2px] ${barlowCondensed.className}`}>est. travel time</p>
              <p className={`text-white text-[1.75rem] ${bellefair.className}`}>{destination.estTravelTime}</p>
            </div>
          </div>
        </section>


      </div>
    </section>
  );
}

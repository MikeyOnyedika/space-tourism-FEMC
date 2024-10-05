import { technology } from "@/app/data";
import Image from "next/image";
import Nav from "../components/Nav";
import { redirect } from "next/navigation";
import { bellefair } from "@/app/font";

function findTechnologyAndStyle(
  params: Record<string, string>
): (typeof technology)[0] | false {
  const slug = params.slug;

  if (!slug || slug[0] === "launch-vehicle") {
    return technology.find((tech) => tech.slug === "launch-vehicle")!
  } else if (slug[0] === "spaceport") {
    return technology.find((tech) => tech.slug === "spaceport")!
  } else if (slug[0] === "space-capsule") {
    return technology.find((tech) => tech.slug === "space-capsule")!
  } else {
    return false;
  }
}

export default function Technology({
  params,
}: {
  params: Record<string, string>;
}) {
  const tech = findTechnologyAndStyle(params);
  if (tech === false) {
    redirect("/technology");
  }
  return (
    <section className="w-full h-fit flex flex-col items-center  gap-8 pb-6 md:pb-10">
      <section className="pt-16 h-full w-full">
        <div className="flex justify-center w-full h-[258px] md:h-[356px] md:max-w-[768px] md:m-auto relative overflow-hidden">
          <picture>
            {/* image3 is for desktop view */}
            <source srcSet={tech.image3} media="(min-width: 1440px)" />
            {/* image2 is for tablet view */}
            <source srcSet={tech.image2} media="(min-width: 768px)" />
            {/*use the mobile version as the default (fallback) image*/}
            <Image src={tech.image1} width={2000} height={2000} alt="" className={`w-full  h-full object-cover `} />
          </picture>
        </div>
      </section>
      <section className="flex justify-center w-full px-6 pb-6 md:px-10">
        <div className="flex flex-col gap-10 w-full max-w-[32rem]">
          <Nav selectedTechSlug={tech.slug} />
          <section className="flex flex-col gap-4">
            <div className="flex flex-col-reverse items-center gap-4 uppercase">
              <h1 className={`text-2xl md:text-[2.5rem] text-white ${bellefair.className}`}>{tech.name}</h1>
              <h2 className={`text-lg md:text-2xl text-white/50 ${bellefair.className}`}>The terminology...</h2>
            </div>
            <p className="text-[0.94rem] md:text-base md:leading-[180%] text-center leading-[180%]">{tech.description}</p>
          </section>
        </div>
      </section>
    </section>
  );
}

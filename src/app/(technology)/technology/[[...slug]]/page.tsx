import { technology } from "@/app/data";
import Image from "next/image";
import Nav from "../components/Nav";
import { redirect } from "next/navigation";
import { bellefair } from "@/app/font";
import Header from "@/app/(other)/components/Header";

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

    <section className="w-full h-full flex 2xl:justify-end 3xl:justify-center 2xl:items-center">
      <div className="w-full 2xl:w-fit h-full flex flex-col gap-6">
        <Header />

        <section className="w-full h-fit flex flex-col items-center  gap-8 pb-6 md:pb-10 2xl:flex-row-reverse 2xl:h-full">
          <section className="pt-16 h-full w-full">
            <div className="flex justify-center w-full h-[258px] md:h-[356px] md:max-w-[768px] md:m-auto relative overflow-hidden 2xl:w-[608px] 2xl:h-[600px]">
              <picture className="flex w-full h-full">
                {/* image3 is for desktop view */}
                <source srcSet={tech.image3} media="(min-width: 1440px)" />
                {/* image2 is for tablet view */}
                <source srcSet={tech.image2} media="(min-width: 768px)" />
                {/*use the mobile version as the default (fallback) image*/}
                <Image src={tech.image1} width={2000} height={2000} alt="" className={`w-full  h-full object-cover `} />
              </picture>
            </div>
          </section>

          <section className="flex justify-center w-full px-6 pb-6 md:px-10 2xl:p-0">
            <div className="flex flex-col gap-10 w-full max-w-[32rem] 2xl:min-w-[39.7rem] 2xl:flex-row 2xl:gap-16">
              <Nav selectedTechSlug={tech.slug} />
              <section className="flex flex-col gap-4 2xl:gap-6">
                <div className="flex flex-col-reverse items-center gap-4 uppercase 2xl:items-start">
                  <h1 className={`text-2xl md:text-[2.5rem] text-white 2xl:text-[3.5rem] 2xl:leading-[1.3] ${bellefair.className}`}>{tech.name}</h1>
                  <h2 className={`text-lg md:text-2xl text-white/50 2xl:text-[2rem]  ${bellefair.className}`}>The terminology...</h2>
                </div>
                <p className="text-[0.94rem] md:text-base md:leading-[180%] text-center leading-[180%] 2xl:text-lg 2xl:leading-[180%] 2xl:text-start">{tech.description}</p>
              </section>
            </div>
          </section>
        </section>
      </div>
    </section>


  );
}

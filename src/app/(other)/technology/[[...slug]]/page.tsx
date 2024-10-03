import { technology } from "@/app/data";
import Image from "next/image";
import Nav from "../components/Nav";
import { redirect } from "next/navigation";
import { bellefair } from "@/app/font";

function findTechnologyAndStyle(
  params: Record<string, string>
): [(typeof technology)[0], string] | false {
  const slug = params.slug;

  if (!slug || slug[0] === "launch-vehicle") {
    return [
      technology.find((tech) => tech.slug === "launch-vehicle")!,
      "object-cover -translate-x-[50%] -translate-y-[64%]"]
  } else if (slug[0] === "spaceport") {
    return [
      technology.find((tech) => tech.slug === "spaceport")!,
      "object-cover -translate-x-[50%] -translate-y-[55%] "
    ]
  } else if (slug[0] === "space-capsule") {
    return [
      technology.find((tech) => tech.slug === "space-capsule")!,
      "object-cover -translate-x-[50%] -translate-y-[55%]"
    ]
  } else {
    return false;
  }
}

export default function Technology({
  params,
}: {
  params: Record<string, string>;
}) {
  const item = findTechnologyAndStyle(params);
  if (item === false) {
    redirect("/technology");
  }
  const [tech, imageStyle] = item;
  return (
    <section className="w-full h-full flex flex-col gap-8 pb-6">
      <section className="h-full">
        <picture>
          <source srcSet={tech.image2} media="(max-width: 767.9px)" />
          <source srcSet={tech.image1} media="(min-width: 768px)" />
          <div className="w-full h-[16rem] relative overflow-hidden">
            <Image src={tech.image1} width={1000} height={1000} alt="" className={`w-full h-fit  absolute top-[50%] left-[50%] ${imageStyle}`} />
          </div>
        </picture>
      </section>
      <section className="flex flex-col gap-10 px-6 pb-6">
        <Nav selectedTechSlug={tech.slug} />
        <section className="flex flex-col gap-4">
          <div className="flex flex-col-reverse items-center gap-4 uppercase">
            <h1 className={`text-2xl text-white ${bellefair.className}`}>{tech.name}</h1>
            <h2 className={`text-lg text-white/50 ${bellefair.className}`}>The terminology...</h2>
          </div>
          <p className="text-[0.94rem] text-center leading-[180%]">{tech.description}</p>
        </section>
      </section>
    </section>
  );
}

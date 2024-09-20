import { technology } from "@/app/data";
import Image from "next/image";
import Nav from "../components/Nav";
import { redirect } from "next/navigation";

function findTechnology(
  params: Record<string, string>
): (typeof technology)[0] | false {
  const slug = params.slug;

  if (!slug || slug[0] === "launch-vehicle") {
    return technology.find((tech) => tech.slug === "launch-vehicle")!;
  } else if (slug[0] === "spaceport") {
    return technology.find((tech) => tech.slug === "spaceport")!;
  } else if (slug[0] === "space-capsule") {
    return technology.find((tech) => tech.slug === "space-capsule")!;
  } else {
    return false;
  }
}

export default function Crew({
  params,
}: {
  params: Record<string, string>;
}) {
  const tech = findTechnology(params);
  if (tech === false) {
    console.log("redirect called");
    redirect("/technology");
  }

  return (
    <section>
      <section>
        <Image src={tech.image} width={1000} height={1000} alt="" />
      </section>
      <section className="border-2">
        <Nav />
        <h1>{tech.name}</h1>
        <p>{tech.description}</p>
        {/* <hr />   probably use a <div> instead */}
        <div>
          <div>
            <p>avg. distance</p>
            <p>{tech.name}</p>
          </div>
          <div>
            <p></p>
            <p></p>
          </div>
        </div>
      </section>
    </section>
  );
}

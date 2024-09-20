import { crew } from "@/app/data";
import Image from "next/image";
import Nav from "../components/Nav";
import { redirect } from "next/navigation";

function findCrew(
  params: Record<string, string>
): (typeof crew)[0] | false {
  const slug = params.slug;

  if (!slug || slug[0] === "moon") {
    return crew.find((member) => member.slug === "commander")!;
  } else if (slug[0] === "mars") {
    return crew.find((member) => member.slug === "mission-specialist")!;
  } else if (slug[0] === "europa") {
    return crew.find((des) => des.slug === "europa")!;
  } else if (slug[0] === "titan") {
    return crew.find((des) => des.slug === "titan")!;
  } else {
    return false;
  }
}

export default function Crew({
  params,
}: {
  params: Record<string, string>;
}) {
  const crew = findCrew(params);
  if (crew === false) {
    console.log("redirect called");
    redirect("/crew");
  }

  return (
    <section>
      <section>
        <Image src={crew.image}  width={1000} height={1000} alt="" />
      </section>
      <section className="border-2">
        <Nav />
        <h1>{crew.name}</h1>
        <p>{crew.bio}</p>
        {/* <hr />   probably use a <div> instead */}
        <div>
          <div>
            <p>avg. distance</p>
            <p>{crew.role}</p>
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

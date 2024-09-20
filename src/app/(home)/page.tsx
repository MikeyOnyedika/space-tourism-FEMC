import Link from "next/link";
import { bellefair, barlowCondensed } from "../font";
export default function Home() {
  return (
    <section className="flex flex-col p-6">
      <section className="flex flex-col items-center gap-6">
        <h1 className="flex flex-col gap-6 items-center uppercase">
          <span className={`uppercase text-base tracking-[0.1em] md:tracking-normal text-blue-300  ${barlowCondensed.className}`}>So, you want to travel to</span>
          <span className={`text-[5rem] text-white ${bellefair.className}`}>Space</span>
        </h1>
        <p className="text-[0.94rem] leading-[180%] text-center text-blue-300">
          Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
        </p>
      </section>
      <section className="flex justify-center items-center h-full w-full">
        <Link href="/destination" className={`bg-white text-blue-900 w-36 h-36 rounded-full flex justify-center items-center uppercase text-lg  ${bellefair.className}`}>explore</Link>
      </section>
    </section>
  )
}

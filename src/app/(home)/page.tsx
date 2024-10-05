import Link from "next/link";
import { bellefair, barlowCondensed } from "../font";
export default function Home() {
  return (
    <section className="flex flex-col p-6  w-full h-full items-center md:py-32 md:justify-between">
      <section className="flex flex-col items-center gap-6  w-full max-w-[32rem]">
        <h1 className="flex flex-col gap-6 items-center   uppercase">
          <span className={`uppercase text-base md:text-[1.75rem] tracking-[0.1em] md:tracking-[0.25rem] text-blue-300  ${barlowCondensed.className}`}>So, you want to travel to</span>
          <span className={`text-[5rem] md:text-[9rem] md:leading-[110%]  text-white ${bellefair.className}`}>Space</span>
        </h1>
        <p className="text-[0.94rem] leading-[180%] md:text-base md:leading-[180%] text-center text-blue-300">
          Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
        </p>
      </section>
      <section className="flex justify-center items-center h-full w-full max-w-[32rem]">
        <Link href="/destination" className={`flex w-fit h-fit  border-[0px] transition-all duration-300 hover:border-clamped hover:border-white/10 rounded-full ${bellefair.className}`}>
          <span className="bg-white text-blue-900 w-36 h-36 md:w-[17rem] md:h-[17rem] rounded-full flex justify-center items-center uppercase text-lg md:text-[2rem] transition-all duration-300  hover:border-white/10 hover:text-blue-900/50">explore</span>
        </Link>
      </section>
    </section>
  )
}

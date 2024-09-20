import { Barlow_Condensed, Bellefair, Barlow } from "next/font/google";
const barlow = Barlow({ weight: ["400", "500", "700", "900"], subsets: ["latin"] });
const barlowCondensed = Barlow_Condensed({ weight: ["400", "500", "700", "900"], subsets: ["latin"] });
const bellefair = Bellefair({ weight: "400", subsets: ["latin"] });

export { barlow, bellefair, barlowCondensed };

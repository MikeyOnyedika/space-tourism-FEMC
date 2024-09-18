import { icons } from "@/app/assets"
import Image from "next/image";

export default function RootHeader() {
  return (
    <header>
      <Image src={icons.Logo} alt="logo" className="w-10 h-10" />
    </header>
  )
}

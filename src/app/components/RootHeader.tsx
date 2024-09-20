import Image from "next/image";

export default function RootHeader() {
  return (
    <header className="flex justify-between items-center gap-2 p-6 w-full">
      <Image src="/assets/shared/logo.svg" alt="logo" width={40} height={40} className="w-10 h-10" />
      <button type="button" className="">
        <Image src="/assets/shared/icon-hamburger.svg" alt="hamburger-icon" width={24} height={24} className="w-6 aspect-auto" />
      </button>
    </header>
  )
}

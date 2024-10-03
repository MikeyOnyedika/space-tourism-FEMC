import Image from "next/image";
import { useGlobalStateContext } from "../contexts/GlobalStateProvider";

export default function RootHeader() {
  const globalState = useGlobalStateContext();
  return (
    <header className="flex justify-between items-center gap-2 p-6 w-full">
      <Image src="/assets/shared/logo.svg" alt="logo" width={40} height={40} className="w-10 h-10" />
      <button type="button" onClick={() => {
        console.log("open?: ", globalState?.isNavOpen);
        globalState?.openNav()
      }}>
        <Image src="/assets/shared/icon-hamburger.svg" alt="hamburger-icon" width={24} height={24} className="w-6 aspect-auto" />
      </button>
    </header>
  )
}

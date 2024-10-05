import Header from "@/app/(other)/components/Header";
import { ReactNode } from "react";

export default function OtherPageLayout({ children }: { children: ReactNode }) {
  return (
    <section className="w-full h-full flex 2xl:justify-center 2xl:items-center">
      <div className="w-full 2xl:w-fit h-full flex flex-col gap-6">
        <Header />
        {children}
      </div>
    </section>
  )
}

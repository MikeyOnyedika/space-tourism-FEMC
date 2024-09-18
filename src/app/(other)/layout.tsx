import Header from "@/app/(other)/components/Header";
import { ReactNode } from "react";

export default function OtherPageLayout({ children }: { children: ReactNode }) {
  return (
    <section>
      <Header />
      <div>{children}</div>
    </section>
  )
}

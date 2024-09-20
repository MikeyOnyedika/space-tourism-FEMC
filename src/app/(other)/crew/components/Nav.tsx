import Link from "next/link";
import { destinations } from "@/app/data";

export default function Nav() {
  return (
    <nav>
      <ul>
        {destinations.map((des) => (
          <li key={des.slug}>
            <Link href={des.href}>{des.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

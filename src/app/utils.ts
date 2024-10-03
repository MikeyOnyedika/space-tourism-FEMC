import { navLinks } from "./data";

export function getBasePage(pathname: string): typeof navLinks[0] | false {
  if (pathname === "/") {
    return navLinks[0];
  }
  if (pathname.startsWith("/destination")) { return navLinks[1] }
  if (pathname.startsWith("/crew")) { return navLinks[2] }
  if (pathname.startsWith("/technology")) { return navLinks[3] }
  return false
}

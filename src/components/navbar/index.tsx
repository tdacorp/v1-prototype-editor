import { User } from "lucide-react"
import { Links } from "./links"
import { Logo } from "./logo"
import { Button } from "../ui/button"
import { Menu } from "./menu"

export const Navbar = () => {
  return (
    <header
      className={[
        "fixed top-0 w-full z-40 px-4 2xl:px-0",
        "bg-white dark:bg-black ",
        "backdrop-filter backdrop-blur-md bg-opacity-60 ",
        "dark:bg-opacity-60",
        "border-b dark:border-red-900/80",
      ].join(" ")}
    >
      <nav className="flex justify-between items-center h-12 mx-auto px-4">
        <Logo />
        <section className="flex items-center gap-8">
          <Links />
          <Menu />
        </section>
      </nav>
    </header>
  )
}

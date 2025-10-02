import Links from "./links";
import Logo from "./logo";
import MobileMenu from "./menu";
import User from "./user";

export default function Navbar() {
  return (
    <header className="fixed top-0 w-full z-40 px-4 2xl:px-0 bg-white border-b">
      <nav className="flex justify-between items-center h-12 max-w-screen-xl mx-auto">
        <section className="flex items-center gap-6">
          <Logo />
          <Links />
        </section>
        <section className="flex items-center gap-2">
          <User/>
          <MobileMenu />
        </section>
      </nav>
    </header>
  );
}

import Link from "next/link";

export default function Logo() {
  return (
    <Link className="text-2xl text-red-600 font-black" href="/">
      <span className="hidden md:block">TDACorp</span>
    </Link>
  );
}

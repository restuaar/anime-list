import Link from "next/link";
import SearchInput from "./SearchInput";

export default function Navbar() {
  return (
    <header className="bg-black">
      <nav className="flex md:flex-row flex-col gap-2 justify-between p-4 items-center">
        <Link href="/" className="font-bold text-white text-2xl">
          AnimeList
        </Link>
        <SearchInput/>
      </nav>
    </header>
  );
}

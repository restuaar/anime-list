import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-black">
      <nav className="flex md:flex-row flex-col gap-2 justify-between p-4">
        <Link href="/" className="font-bold text-white text-2xl">
          AnimeList
        </Link>
        <input
          type="text"
          name="searchbar"
          id="searchbar"
          placeholder="cari anime..."
        />
      </nav>
    </header>
  );
}

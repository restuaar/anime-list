import Link from "next/link";
import AnimeCard from "../AnimeCard";
import axios from "axios";

export default async function AnimeList() {
  const baseUrl: any = process.env.NEXT_PUBLIC_API_BASE_URL;
  const topAnimeData = await axios
    .get(`${baseUrl}/top/anime?limit=8`)
    .then((data) => data.data)
    .catch((e) => console.log(e));

  return (
    <section className="">
      <div className="p-4 flex flex-wrap justify-between items-center gap-2">
        <h2 className="font-bold text-2xl">Paling Populer</h2>
        <Link
          href="/populer"
          className="md:text-xl text-sm underline hover:text-blue-400 transition-all"
        >
          Lihat semua
        </Link>
      </div>
      <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 px-4">
        {topAnimeData.data.map((data: any) => (
          <AnimeCard
            key={data.mal_id}
            id={data.mal_id}
            title={data.title}
            image={data.images.webp.large_image_url}
          />
        ))}
      </div>
    </section>
  );
}

import axios from "axios";
import AnimeList from "./components/AnimeList";

export default async function Home() {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  const topAnimeData = await axios
    .get(`${baseUrl}/top/anime?limit=8`)
    .then((data) => data.data)
    .catch((e) => console.log(e));

  return (
    <>
      <AnimeList
        animeData={topAnimeData}
        title="Anime Populer"
        linkTitle="Lihat semua"
        linkHref="/populer"
      />
      <AnimeList
        animeData={topAnimeData}
        title="Anime Populer"
        linkTitle="Lihat semua"
        linkHref="/populer"
      />
    </>
  );
}

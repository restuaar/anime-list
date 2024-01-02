import AnimeList from "./components/AnimeList";
import { getNestedAnimeResponse, getAnimeResponse } from "@/libs/api-libs";

export default async function Page() {
  const topAnimeData = await getAnimeResponse("top/anime", "limit=8");
  let recommendedAnimeData = await getNestedAnimeResponse(
    "recommendations/anime"
  );

  let x = Math.random() * recommendedAnimeData.length;
  if (x > recommendedAnimeData.length - 4) {
    x = recommendedAnimeData.length - 4;
  }

  recommendedAnimeData = {
    data: recommendedAnimeData.slice(x, x + 4),
  };

  return (
    <>
      <AnimeList
        animeData={topAnimeData}
        title="Populer Sekarang"
        linkTitle="Lihat semua"
        linkHref="/populer"
      />
      <AnimeList animeData={recommendedAnimeData} title="Recommend Anime" />
    </>
  );
}

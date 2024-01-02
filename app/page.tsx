import AnimeList from "./components/AnimeList";
import {
  getNestedAnimeResponse,
  getAnimeResponse,
  getSliceAnime,
} from "@/libs/api-libs";

export default async function Page() {
  const topAnimeData = await getAnimeResponse("top/anime", "limit=8");
  let recommendedAnimeData = await getNestedAnimeResponse(
    "recommendations/anime",
    "entry"
  );

  recommendedAnimeData = getSliceAnime(recommendedAnimeData, 4);

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

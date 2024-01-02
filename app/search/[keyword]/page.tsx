import AnimeList from "@/app/components/AnimeList";
import { getAnimeResponse } from "@/libs/api-libs";

export default async function Page({ params }: any) {
  const { keyword } = params;
  const decodeKeyword = decodeURI(keyword);
  const searchAnime = await getAnimeResponse("anime", `q=${decodeKeyword}`);

  return (
    <>
      <AnimeList
        animeData={searchAnime}
        title={`Pencarian untuk ${decodeKeyword}...`}
      />
    </>
  );
}

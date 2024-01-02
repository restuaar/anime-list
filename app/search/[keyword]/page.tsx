import AnimeList from "@/app/components/AnimeList";
import axios from "axios";

export default async function Page({ params }: any) {
  const { keyword } = params;

  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  const decodeKeyword = decodeURI(keyword);

  const searchAnime = await axios
    .get(`${baseUrl}/anime?q=${decodeKeyword}`)
    .then((data) => data.data)
    .catch((e) => console.log(e));

  return (
    <>
      <AnimeList
        animeData={searchAnime}
        title={`Pencarian untuk ${decodeKeyword}...`}
      />
    </>
  );
}

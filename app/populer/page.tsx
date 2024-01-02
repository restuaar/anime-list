"use client";

import AnimeList from "@/app/components/AnimeList";
import HeaderMenu from "../components/utilities/HeaderMenu";
import Pagination from "../components/utilities/Pagination";
import { useEffect, useState } from "react";
import { getAnimeResponse } from "@/libs/api-libs";

export default function Page() {
  const [page, setPage] = useState<number>(1);
  const [topAnime, setTopAnime] = useState<any>([]);

  const fetchData = async (curPage: number) => {
    const data = await getAnimeResponse("top/anime", `page=${curPage}`);
    setTopAnime(data);
  };

  useEffect(() => {
    fetchData(page);
  }, [page]);

  return (
    <>
      <HeaderMenu title={`ANIME TERPOPULER #${page}`} />
      <AnimeList animeData={topAnime} />
      <Pagination
        page={page}
        lastPage={topAnime.pagination?.last_visible_page}
        setPage={setPage}
      />
    </>
  );
}

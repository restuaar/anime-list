"use client";

import AnimeList from "@/app/components/AnimeList";
import axios from "axios";
import HeaderMenu from "../components/utilities/HeaderMenu";
import Pagination from "../components/utilities/Pagination";
import { useEffect, useState } from "react";

export default function Page() {
  const [page, setPage] = useState<number>(1);
  const [topAnime, setTopAnime] = useState<any>([]);

  const fetchData = async (curPage: number) => {
    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
    const data = await axios
      .get(`${baseUrl}/top/anime?page=${curPage}`)
      .then((data) => data.data)
      .catch((e) => console.log(e));
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

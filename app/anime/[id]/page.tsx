import VideoPlayer from "@/app/components/utilities/VideoPlayer";
import { getAnimeResponse } from "@/libs/api-libs";
import Image from "next/image";

export default async function Page({ params: { id } }: any) {
  const anime = await getAnimeResponse(`anime/${id}`).then((data) => data.data);

  return (
    <>
      <main className="pt-4 px-4">
        <h3 className="px-4 text-2xl text-color-primary font-bold">
          {anime.title} - {anime.year}
        </h3>
        <div className="pt-4 px-4 flex gap-2 text-color-dark overflow-x-auto">
          <div className="w-36 flex flex-col justify-center items-center rounded border border-color-dark p-2 bg-color-accent">
            <h3>PERINGKAT</h3>
            <p>{anime.rank}</p>
          </div>
          <div className="w-36 flex flex-col justify-center items-center rounded border border-color-dark p-2 bg-color-accent">
            <h3>SKOR</h3>
            <p>{anime.score}</p>
          </div>
          <div className="w-36 flex flex-col justify-center items-center rounded border border-color-dark p-2 bg-color-accent">
            <h3>ANGGOTA</h3>
            <p>{anime.members}</p>
          </div>
          <div className="w-36 flex flex-col justify-center items-center rounded border border-color-dark p-2 bg-color-accent">
            <h3>EPISODE</h3>
            <p>{anime.episodes}</p>
          </div>
        </div>
        <div className="pt-4 px-4 flex md:flex-nowrap flex-wrap gap-2 text-color-primary">
          <Image
            src={anime.images.webp.large_image_url}
            alt={`${anime.title} cover`}
            width={350}
            height={350}
            className="w-full rounded object-cover"
          ></Image>
          <p className="text-justify text-xl">{anime.synopsis}</p>
        </div>
        <div>
          <VideoPlayer youtubeId={anime.trailer.youtube_id} />
        </div>
      </main>
    </>
  );
}
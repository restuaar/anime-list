import AnimeCard from "../AnimeCard";
import Header from "./Header";

export default async function AnimeList({
  animeData,
  title,
  linkTitle,
  linkHref,
}: any) {
  return (
    <section className="">
      <Header title={title} linkTitle={linkTitle} linkHref={linkHref} />
      <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 px-4">
        {animeData.data.map((data: any) => (
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

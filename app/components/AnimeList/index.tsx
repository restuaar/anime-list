import AnimeCard from "../AnimeCard";
import Header from "./Header";

export default async function AnimeList({
  animeData,
  title,
  linkTitle,
  linkHref,
}: any) {
  return (
    <section className="pb-4">
      {title ? (
        <Header title={title} linkTitle={linkTitle} linkHref={linkHref} />
      ) : null}
      <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 px-4">
        {animeData.data?.map((data: any, index: number) => (
          <AnimeCard
            key={index}
            id={data.mal_id}
            title={data.title}
            image={data.images.webp.large_image_url}
          />
        ))}
      </div>
    </section>
  );
}

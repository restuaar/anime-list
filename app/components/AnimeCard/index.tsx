import Image from "next/image";
import Link from "next/link";

interface AnimeCardProps {
  id: number;
  title: string;
  image: string;
}

export default function AnimeCard({ id, title, image }: AnimeCardProps) {
  return (
    <>
      <Link href={`/${id}`} className="shadow-xl cursor-pointer">
        <Image
          src={image}
          alt={`image of ${title}`}
          width={350}
          height={350}
          priority
          className="w-full max-h-64 object-cover"
        ></Image>
        <h3 className="font-bold md:text-xl p-4">{title}</h3>
      </Link>
    </>
  );
}

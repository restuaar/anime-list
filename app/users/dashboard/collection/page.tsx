import Header from "@/app/components/Dashboard/Header";
import authUserSession from "@/libs/auth-libs";
import prisma from "@/libs/prisma";
import Image from "next/image";
import Link from "next/link";

export default async function Page() {
  const user = await authUserSession();
  let collection;
  if (user?.email) {
    collection = await prisma.collection.findMany({
      where: {
        user_email: user?.email,
      },
    });
  }

  return (
    <>
      <section className="mt-4 px-4 w-full">
        <Header title="My Collection" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {collection?.map((data: any, index: number) => {
            return (
              <Link
                key={index}
                href={`/anime/${data.anime_mal_id}`}
                className="relative border-2 border-color-accent"
              >
                <Image
                  src={data.anime_image}
                  alt={`cover of ${data.anime_title}`}
                  width={350}
                  height={350}
                  className="w-full object-cover"
                />
                <div className="absolute bottom-0 flex items-center justify-center w-full bg-color-accent text-color-dark h-16">
                  <h5 className="text-xl text-center font-bold">
                    {data.anime_title}
                  </h5>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
}

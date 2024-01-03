import Header from "@/app/components/Dashboard/Header";
import Image from "next/image";
import Link from "next/link";

export default async function Page() {
  return (
    <>
      <section className="mt-4 px-4 w-full">
        <Header title="My Collection" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Link href={""} className="relative border-2 border-color-accent">
            <Image
              src={""}
              alt=""
              width={350}
              height={350}
              className="w-full object-cover"
            />
            <div className="absolute bottom-0 flex items-center justify-center w-full bg-color-accent text-color-dark h-16">
              <h5 className="text-xl text-center font-bold">
                Judul Anime Judul Anime
              </h5>
            </div>
          </Link>
        </div>
      </section>
    </>
  );
}

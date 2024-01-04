import Header from "@/app/components/Dashboard/Header";
import authUserSession from "@/libs/auth-libs";
import prisma from "@/libs/prisma";
import Link from "next/link";

export default async function Page() {
  const user = await authUserSession();

  let comments;
  if (user?.email) {
    comments = await prisma.comment.findMany({
      where: {
        user_email: user?.email,
      },
    });
  }

  return (
    <section className="mt-4 px-4 w-full">
      <Header title="My Comment" />
      <div className="grid grid-cols-1 py-2 gap-4">
        {comments?.map((comment: any) => {
          return (
            <Link
              href={`/anime/${comment.anime_mal_id}`}
              key={comment.id}
              className="text-color-dark bg-color-primary p-4 rounded-md"
            >
              <p className="font-semibold">{comment.anime_title}</p>
              <p className="italic">{comment.comment}</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

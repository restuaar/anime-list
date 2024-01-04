import prisma from "@/libs/prisma";

interface CommentBoxProps {
  anime_mal_id: string;
}

export default async function CommentBox({ anime_mal_id }: CommentBoxProps) {
  const comments = await prisma.comment.findMany({
    where: {
      anime_mal_id,
    },
  });

  return (
    <>
      <div className="grid grid-cols-4 gap-4 mb-4">
        {comments.map((comment) => {
          return (
            <div
              key={comment.id}
              className="text-color-dark bg-color-primary p-4 rounded-md"
            >
              <p className="font-semibold">{comment.username}</p>
              <p>{comment.comment}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

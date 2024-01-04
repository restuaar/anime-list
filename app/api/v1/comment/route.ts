import prisma from "@/libs/prisma";

export async function POST(request: Request) {
  const { anime_mal_id, anime_title, user_email, username, comment } =
    await request.json();
  const data = { anime_mal_id, anime_title, user_email, username, comment };

  const createComment = await prisma.comment.create({ data });

  if (!createComment) return Response.json({ status: 500, isCreated: false });

  return Response.json({ status: 200, isCreated: true });
}

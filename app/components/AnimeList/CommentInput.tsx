"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface CommentInputProps {
  anime_mal_id: string;
  user_email: string | null | undefined;
  username: string | null | undefined;
  anime_title: string | null | undefined;
}

type response = {
  status: 200 | 500;
  isCreated: boolean;
};

export default function CommentInput({
  anime_mal_id,
  user_email,
  username,
  anime_title,
}: CommentInputProps) {
  const [comment, setComment] = useState("");
  const [isCreated, setIsCreated] = useState(false);

  const router = useRouter();

  const handlePosting = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {

    if (!comment.trim() || comment.trim().length <= 3) return

    event.preventDefault();

    const response: response = await axios
      .post("/api/v1/comment", {
        anime_mal_id: anime_mal_id,
        anime_title: anime_title,
        user_email: user_email,
        username: username,
        comment: comment,
      })
      .then((res) => res.data);

    setIsCreated(response.isCreated);
    setComment("");

    if (response.isCreated) {
      router.refresh();
    }
  };

  return (
    <div className="flex flex-col gap-2">
      {isCreated && (
        <p className="text-color-primary font-bold">Postingan terkirim ...</p>
      )}
      <textarea
        className="h-32 w-full text-xl p-4"
        name="commentInput"
        id="commentInput"
        cols={30}
        rows={10}
        onChange={(event) => {
          setComment(event.target.value);
        }}
        value={comment}
      ></textarea>
      <button
        className="py-2 px-3 bg-color-accent w-52 rounded"
        onClick={handlePosting}
      >
        Posting Comment
      </button>
    </div>
  );
}

"use client";

import axios from "axios";
import { useState } from "react";

interface CollectionButtonProps {
  anime_mal_id: string;
  anime_image: string | null | undefined;
  anime_title: string | null | undefined;
  user_email: string | null | undefined;
}

type response = {
  status: 200 | 500;
  isCreated: boolean;
};

export default function CollectionButton({
  anime_mal_id,
  anime_image,
  anime_title,
  user_email,
}: CollectionButtonProps) {
  const [isCreated, setIsCreated] = useState(false);

  const handleAdd = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    const response: response = await axios
      .post("/api/v1/collection", {
        anime_mal_id: anime_mal_id,
        anime_image: anime_image,
        anime_title: anime_title,
        user_email: user_email,
      })
      .then((res) => res.data);

    setIsCreated(response.isCreated);
  };

  return (
    <button
      className="px-2 py-1 bg-color-accent text-color-dark rounded-sm"
      onClick={handleAdd}
      disabled={isCreated}
    >
      {isCreated ? "Success!" : "Add to Collection"}
    </button>
  );
}

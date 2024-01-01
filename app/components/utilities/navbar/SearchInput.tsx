"use client";

import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useRef } from "react";

export default function SearchInput() {
  const searchRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const handleSearch = (event: any) => {
    const keyword = searchRef.current!.value;
    if (keyword !== "" && keyword !== null) {
      event.preventDefault();
      router.push(`/search/${keyword}`);
    }
  };

  const handleEnterPress = (event: any) => {
    const keyword = searchRef.current!.value;

    if (event.key === "Enter") {
      if (keyword !== "" && keyword !== null) {
        event.preventDefault();
        router.push(`/search/${keyword}`);
      }
    }
  };

  return (
    <div className="relative">
      <input
        type="text"
        name="search"
        id="search"
        placeholder="..."
        className="p-2 w-full rounded"
        ref={searchRef}
        onKeyDown={handleEnterPress}
      />
      <button className="absolute top-2 end-1.5" onClick={handleSearch}>
        <MagnifyingGlass size={24} />
      </button>
    </div>
  );
}

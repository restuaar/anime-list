"use client";

import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useRef } from "react";

export default function SearchInput() {
  const searchRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const handleSearch = (event: any) => {
    if (event.key === "Enter" || event.type === "click") {
      const keyword = searchRef.current!.value;
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
        placeholder="search anime ..."
        className="p-2 w-full rounded"
        ref={searchRef}
        onKeyDown={handleSearch}
      />
      <button className="absolute top-2 end-1.5" onClick={handleSearch}>
        <MagnifyingGlass size={24} />
      </button>
    </div>
  );
}

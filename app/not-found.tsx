"use client";

import { XCircle } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  const handleBack = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    router.back();
  };

  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <XCircle size={64} className="text-color-accent" />
        <h3 className="font-bold text-4xl text-color-accent">NOT FOUND</h3>
        <button
          className="px-4 bg-color-accent hover:bg-color-dark text-color-dark hover:text-color-accent w-32 h-8 transition-all text-center text-base font-semibold shadow-md rounded-xl"
          onClick={handleBack}
        >
          Kembali
        </button>
      </div>
    </>
  );
}

"use client";

import Link from "next/link";
import { ArrowCircleLeft } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";

interface HeaderProps {
  title: string;
}

export default function Header({ title }: HeaderProps) {
  const router = useRouter();

  const handleBack = (event: any) => {
    event.preventDefault();
    router.back();
  };

  return (
    <div className="flex justify-between items-center mb-3">
      <button className="text-color-primary" onClick={handleBack}>
        <ArrowCircleLeft size={32} />
      </button>
      <h3 className="text-2xl text-color-primary font-bold">{title}</h3>
    </div>
  );
}

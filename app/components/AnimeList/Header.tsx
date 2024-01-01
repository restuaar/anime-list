import Link from "next/link";

interface HeaderProps {
  title: string;
  linkTitle: string;
  linkHref: string;
}

export default function Header({ title, linkTitle, linkHref }: HeaderProps) {
  return (
    <div className="p-4 flex flex-wrap justify-between items-center gap-2">
      <h2 className="font-bold text-2xl">{title}</h2>
      {linkTitle && linkHref ? (
        <Link
          href={linkHref}
          className="md:text-xl text-sm underline hover:text-blue-400 transition-all"
        >
          {linkTitle}
        </Link>
      ) : null}
    </div>
  );
}

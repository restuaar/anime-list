interface HeaderMenuProps {
  title: string;
}

export default function HeaderMenu({ title }: HeaderMenuProps) {
  return (
    <>
      <div className="p-8">
        <h3 className="text-center text-2xl font-bold text-color-primary">{title}</h3>
      </div>
    </>
  );
}

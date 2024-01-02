interface PaginationProps {
  page: number;
  lastPage: number;
  setPage: Function;
}

export default function Pagination({
  page,
  lastPage,
  setPage,
}: PaginationProps) {
  return (
    <div className="flex justify-center items-center py-4 px-2 gap-4 text-color-primary text-xl">
      {page > 1 ? (
        <button
          className="transition-all hover:text-color-accent hover:font-bold"
          onClick={() => {
            setPage((prev: number) => prev - 1);
          }}
        >
          Prev
        </button>
      ) : null}
      <p>
        {page} of {lastPage}
      </p>
      {page < lastPage ? (
        <button
          className="transition-all hover:text-color-accent hover:font-bold"
          onClick={() => {
            setPage((prev: number) => prev + 1);
          }}
        >
          Next
        </button>
      ) : null}
    </div>
  );
}

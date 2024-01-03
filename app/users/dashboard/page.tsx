import authUserSession from "@/libs/auth-libs";
import Image from "next/image";

export default async function Page() {
  const user = await authUserSession();

  return (
    <>
      <div className="text-color-primary">
        <h3>DASHBOARD</h3>
        <h5>Welcome, {user?.name}</h5>
        {user ? (
          <Image
            src={user?.image as string}
            alt={`photo profile ${user?.name as string}`}
            width={250}
            height={250}
          />
        ) : null}
      </div>
    </>
  );
}

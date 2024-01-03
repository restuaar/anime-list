import { getServerSession } from "next-auth";
import { authOption } from "@/app/api/auth/[...nextauth]/route";

export default async function authUserSession() {
  return await getServerSession(authOption).then((value) => value?.user);
}

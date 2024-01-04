import { getServerSession } from "next-auth";
import { authOption } from "./auth-option";

export default async function authUserSession() {
  return await getServerSession(authOption).then((value) => value?.user);
}

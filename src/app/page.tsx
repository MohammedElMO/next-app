import { getServerSession } from "next-auth";
import NavBar from "./components/NavBar";
import { authOptions } from "./api/auth/[...nextauth]/authOptions";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <main className="p-24">
      <p>{session && session.user?.email}</p>
    </main>
  );
}

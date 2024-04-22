import { Button } from "@/components/ui/button";
import { getServerSession } from "next-auth";
import Link from "next/link";
import React from "react";
import { authOptions } from "../api/auth/[...nextauth]/authOptions";

async function NavBar() {
  const session = await getServerSession(authOptions)
  return (
    <nav className="navbar bg-base-300">
      <div className="flex-1">
        <Link className="btn btn-ghost text-xl" href="/">
          daisyUI
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/users">Users</Link>
          </li>
          <li>
            <Button variant={"ghost"}>
              <Link href={"/"}>App</Link>
            </Button>
          </li>
          <li>
            {!session?.user ? (
              <Button variant={"default"} className="bg-red-500 ">
                <Link href={"/api/auth/signin"}>signin</Link>
              </Button>
            ) : (
              <Button variant={"default"} className="bg-red-500 ">
                <Link href={"/api/auth/signout"}>logout</Link>
              </Button>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;

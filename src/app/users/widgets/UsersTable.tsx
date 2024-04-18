import Link from "next/link";
import React from "react";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

async function UsersTable({ sortOrder }: { sortOrder: "email" | "name" }) {
  const users: { name: string; email: string }[] = await fetch(
    "https://jsonplaceholder.typicode.com/users",
    {
      cache: "no-store",
    }
  ).then((res) => res.json());

  return (
    <table className="p-2 table table-zebra-zebra ">
      <thead>
        <tr>
          <th className="cursor-pointer">
            <Link href="/users?sortOrder=name">name</Link>
          </th>
          <th className="cursor-pointer">
            <Link href="/users?sortOrder=email">email</Link>
          </th>
        </tr>
      </thead>
      <tbody>
        {users
          .sort((a, b) => {
            if (sortOrder === "email") return a.email.localeCompare(b.email);
            return a.name.localeCompare(b.name);
          })
          .map((u) => (
            <tr key={u.name}>
              <td>{u.name}</td>
              <td>{u.email}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}

export default UsersTable;

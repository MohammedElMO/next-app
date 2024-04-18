import Link from "next/link";
import React, { Suspense } from "react";
import UsersTable from "./widgets/UsersTable";
import { Loader } from "rsuite";
import { Divide } from "lucide-react";

async function Users({
  searchParams,
}: {
  searchParams: { sortOrder: "email" | "name" };
}) {
  return (
    <>
      <Link href="/users/new" className="link link-hover">
        Register
      </Link>
      <Suspense fallback={<Loader />}>
        <UsersTable sortOrder={searchParams.sortOrder} />
      </Suspense>
    </>
  );
}

export default Users;

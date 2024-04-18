import Link from "next/link";
import React from "react";

function NotFound() {
  return (
    <>
      <div>Sorry Try Again dont find that </div>
      <Link href="/">
        <button className="btn btn-gosted">go home</button>
      </Link>
    </>
  );
}

export default NotFound;

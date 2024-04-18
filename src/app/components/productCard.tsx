import React from "react";
import ProductAction from "./ProductAction";
import { MailWarning, User } from "lucide-react";
import Link from "next/link";
function ProductCard() {
  return (
    <>
      <div className="flex gap-3 items-center mb-3">
        <div className="text-xl text-slate-500">ProductCard</div>
        <ProductAction />
      </div>
      <div className="alert alert-success text-white">
        <MailWarning /> welcome wooohoooo!
        <Link className="link flex items-center" href={"/users"}>
          <User className="size-5" />
          users
        </Link>
      </div>
    </>
  );
}

export default ProductCard;

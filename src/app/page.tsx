import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/productCard";

export default function Home() {
  return (
    <main className="p-24">
      <ProductCard />
      {/* Next Iam Here <Link href={"users"}>To users</Link> */}
    </main>
  );
}

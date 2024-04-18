import React from "react";

function page({ params,searchParams }: { params: { type: string[] } ,searchParams:{
  sortOrder:string
}}) {
  return <div>page {params.type?.join(" ")} {searchParams.sortOrder}</div>;
}

export default page;

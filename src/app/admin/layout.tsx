import React, { ReactNode } from "react";

function Adminlayout({children}:{children:ReactNode}) {
  return<>
   <div>Admin layout</div>
   {children}
  </>
}

export default Adminlayout;

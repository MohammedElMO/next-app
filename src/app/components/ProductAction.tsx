"use client"
function ProductAction() {
  return (
    <button onClick={() => console.log("bought")} className="btn btn-circle" type="button">
      buy
    </button>
  );
}

export default ProductAction;

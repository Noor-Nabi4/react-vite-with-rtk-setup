import React from "react";
import { useGetProductsQuery } from "../api/productApi";

function ProductList() {
  const { data, error, isLoading } = useGetProductsQuery();

  if (isLoading) return <div>Loading products...</div>;
  if (error) return <div>Error loading products</div>;

  return (
    <div>
      {data.map((product) => (
        <div key={product._id}>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <span>${product.price}</span>
        </div>
      ))}
    </div>
  );
}

export default ProductList;

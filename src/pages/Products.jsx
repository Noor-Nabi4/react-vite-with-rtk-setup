import { useGetProductsQuery } from "../api/productApi";
import ProductCard from "../components/ProductCard";

const Products = () => {
  const { data: products, isLoading } = useGetProductsQuery();

  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      <h2>Products</h2>
      {products?.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
};

export default Products;

import { useEffect, useState } from 'react';
import { Product, readCatalog, toDollars } from '../lib';
import { Link } from 'react-router-dom';

export function Catalog() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown>();

  useEffect(() => {
    async function loadProducts() {
      try {
        const values = await readCatalog();
        setProducts(values);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    loadProducts();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        Error! {error instanceof Error ? error.message : 'Unknown Error'}
      </div>
    );
  }

  return (
    <div className="container">
      <h1>Dashboard</h1>
      <hr className="py-1" />
      <div className="flex flex-wrap items-stretch gap-4">
        {products?.map((product) => (
          <div
            key={product.productId}
            className="w-full sm:w-1/2 lg:w-1/3 p-4 flex">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

type ProductProps = {
  product: Product;
};
function ProductCard({ product }: ProductProps) {
  return (
    <Link
      to={`/details/${product.productId}`}
      className="block cursor-pointer text-gray-900 rounded border border-gray-300 mb-4 flex">
      <div className="flex-auto p-6">
        <img src={product.imageUrl}></img>
        <h5 className="font-bold mb-3">{product.name}</h5>
        <h6>{toDollars(+product.price)}</h6>
        <h6>{product.shortDescription}</h6>
      </div>
    </Link>
  );
}

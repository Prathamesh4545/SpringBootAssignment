import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:8080/products");
        if (!response.ok) throw new Error(`Backend error: ${response.status}`);
        const data = await response.json();
        setProducts(data);
        setFilteredProducts(data);
      } catch (error) {
        setError(error.message || "Failed to fetch products.");
        console.error("Fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const handler = setTimeout(() => {
      setFilteredProducts(
        products.filter((product) =>
          product.name.toLowerCase().includes(search.toLowerCase())
        )
      );
    }, 300);

    return () => clearTimeout(handler);
  }, [search, products]);

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <div className="p-2 mt-2 m-auto align-middle w-full max-w-2xl rounded-full bg-green-50 shadow-md">
        <div className="relative flex">
          <input
            type="search"
            name="search"
            placeholder="Product name..."
            value={search}
            onChange={handleSearchChange}
            className="border-r-0 h-10 px-5 w-full rounded-full focus:outline-none"
          />
        </div>
      </div>

      <section className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-y-20 gap-x-14 mt-10 mb-5">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
          >
            <Link to="/Preview" state={{ product }}>
              <img
                src={product.imageUrl || "fallback-image.jpg"}
                alt={product.name || "Product Image"}
                className="h-80 w-72 object-cover rounded-t-xl"
              />
              <div className="px-4 py-3 w-72">
                <span className="text-gray-400 mr-3 uppercase text-xs">
                  {product.brand || "Brand"}
                </span>
                <p className="text-lg font-bold text-black truncate block capitalize">
                  {product.name}
                </p>
                <div className="flex items-center">
                  <p className="text-lg font-semibold text-black cursor-auto my-3">
                    ${product.price}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </section>
    </>
  );
};

export default Product;

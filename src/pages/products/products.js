import { useEffect, useState } from "react";
import { FakeApi } from "../../componant/CallApi";
import { Item } from "../../componant/item";
import { useSearchParams } from "react-router-dom";
import { useCart } from "../../componant/context/cart";
import Slide from  "../../componant/slide/Slide";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoding] = useState(true);
  // eslint-disable-next-line
  const [query, setQuery] = useSearchParams();
  const searchQuery = query.get("q");
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProducts = async () => {
      setLoding(true);
      const products = searchQuery
        ? await FakeApi.fetchProductBySearchQuery(searchQuery)
        : await FakeApi.fetchAllProduct();
      setProducts(products);
      setLoding(false);
    };
    fetchProducts().catch(console.error);
  }, [searchQuery]);

  if (!loading && searchQuery && !products.length) {
    return (
      <div className="container">
        <div className="product py-2">
          <div className="details p-3">
            No Products Found Matching Your Query.
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Slide />
      <div className="container" style={{ display: "block" }}>
        <div className="products my-5">
          <div className="grid">
            {loading ? (
              <div className="loader" />
            ) : (
              products.map((product) => (
                <Item
                  key={product.id}
                  data={product}
                  addToCart={() => addToCart(product)}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export { Products };

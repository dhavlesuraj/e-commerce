import { FakeApi } from "../../componant/CallApi";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./product.css";
import { useCart } from "../../componant/context/cart";

const Product = () => {
  const [product, setProduct] = useState();
  const [loading, setLoding] = useState(true);
  const { productId } = useParams();
const { addToCart } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      setLoding(true);
      const product = await FakeApi.fetchProductById(productId);
      setProduct(product);
      setLoding(false);
    }
    fetchProduct().catch(console.error);
  }, [productId])

  if (!loading && !product) {
    return (
      <div className="container">
        <div className="product py-2">
          <div className="details p-3">
            No Products Found Matching Your Query.
            <Link to="/"> Home</Link> to see all available products
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <>
      <div className="container top">
        {loading ? (
          <div className="loading"></div>
        ) : (
          <div className="card mt-5" style={{ maxwidth: "540px" }}>
            <div className="row g-0">
              <div className="col-md-3">
                <img
                  src={product.image}
                  className="img-fluid rounded-start py-3 px-3"
                  alt=""
                />
              </div>
              <div className="col-md-8">
                <div className="card-body py-3">
                  <h3 className="card-title px-5">{product.title}</h3>
                  <p className="card-text px-5">{product.description}</p>
                  <div className="flex px-5">
                    <p className="card-text ">
                      <small className="text-body-secondary">
                        ${product.price}
                      </small>
                    </p>
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() =>
                       addToCart(product)}
                    >
                      Add Tocart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export { Product };

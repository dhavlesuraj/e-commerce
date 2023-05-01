import { Link,useNavigate } from "react-router-dom";
import { useCart } from "../../componant/context/cart";
import './cart.css';

const SHIPPING_CHARGES=25;


const Cart = () => {
  const navigate=useNavigate();
  const { cart, increaseQuntity, decreseQuntity, removeToCart } = useCart();

       const cartTotal = () => {
         return cart.reduce(
           (acc, item) => acc + item.product.price * item.quantity,0);
       };

       const round = (value, decimals) => {
         return Number(Math.round(value + "e" + decimals) + "e-" + decimals);
       };

    
  return (
    <>
      <div className="cartWrapper top">
        <div className="container">
          {cart.length >= 1 ? (
            <div className="grid my-5">
              <div className="cartItem p-3">
                <h2>Order Summary</h2>
                {cart.map((item) => (
                  <div className="item" key={item.product.id}>
                    <div className="grid py-3">
                      <div className="itemImage">
                        <img src={item.product.image} alt="" />
                      </div>
                      <div className="itemDesc">
                        <div className="title">
                          <Link
                            to={"/product/" + item.product.id}
                            className="titleLink"
                          >
                            {item.product.title}
                          </Link>
                        </div>
                        <span className="price">
                          ${round(item.product.price * item.quantity, 2)}
                        </span>
                        {/* <div className="remove">Remove</div> */}
                      </div>
                      <div className="itemControl flex">
                        <div>
                          <button
                            onClick={() => increaseQuntity(item.product.id)}
                            className="addQty"
                          >
                            +
                          </button>
                          <span className="mx-1">{item.quantity}</span>
                          <button
                            onClick={() => decreseQuntity(item.product.id)}
                            disabled={item.quantity === 1}
                            className="removeQty"
                          >
                            -
                          </button>
                          <div
                            className="remove my-1"
                            onClick={() => removeToCart(item.product.id)}
                          >
                            Remove
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="payment p-3">
                <h2>Payment Summary</h2>
                <div className="summary py-3 my-2">
                  <div className="flex py-1">
                    <span>Subtotal:</span>
                    <span className="price">${round(cartTotal(), 2)}</span>
                    {/* 2 is a desimal point */}
                  </div>
                  <div className="flex py-1">
                    <span>Shipping Fee:</span>
                    <span className="price">${SHIPPING_CHARGES}</span>
                  </div>
                  <div className=" flex py-1">
                    <span>Total:</span>
                    <span className="price">
                      ${round(cartTotal() + SHIPPING_CHARGES, 2)}
                      {/* 2 is a desimal point */}
                    </span>
                  </div>
                </div>
                <button
                  type="button"
                  class="btn btn-warning"
                  onClick={() => navigate("/payment")}
                >
                  Buy Now
                </button>
              </div>
            </div>
          ) : (
            <div className="error">
              <p>&#9432; Cart is empty</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export { Cart };

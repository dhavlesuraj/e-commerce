import { Link } from "react-router-dom";
import { Product } from "../../pages/product";

const Item = ({ data, addToCart }) => {
  const { id, image, title, price } = data;
  

  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="image">
        <img className="px-3 py-3" src={image} alt="" />
      </div>
      <div className="card-body">
        <Link to={`/product/${id}`} className=" link ">
          {title}
        </Link>
        <div className="flex">
          <p style={{ marginRight: 15 }} className="card-text text-primary">
            ${price}
          </p>
          <button
            type="button"
            className="btn btn-primary btn-sm"
            onClick={addToCart}
          >
            Add Tocart
          </button>
        </div>
      </div>
    </div>
  ); 
};

export { Item };

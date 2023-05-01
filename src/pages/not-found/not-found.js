import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <div className="container">
        <div className="product py-3">
          <div className="details p-3">
            Page not found. Goto {" "}
            <Link to="/" replace>
              homepage
            </Link>
              
          </div>
        </div>
      </div>
    </>
  );
};
export { NotFound };

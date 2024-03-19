import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useLocation } from "react-router-dom";
function Proddata() {
  let loc = useLocation();
  let product = loc.state;
  return (
    <div className="Proddata">
      <Header />
      <div style={{ minHeight: "85vh" }}>
        <div className="container">
          <img src={product.image} className="w-25 h-25 "></img>
          <div className="desc">
            <h1 className="fs-4">{product.title}</h1>
            <h1 className="fs-4">Category:{product.category}</h1>
            <h1 className="fs-4">Price:USD.{product.price}</h1>
            <br />
            <h1 className="fs-6 p-2 text-secondary">
              <u>Description:</u>
              {product.description}
            </h1>
            <button
              type="button"
              className="btn p-3 m-1"
              style={{ backgroundColor: "rgb(32, 178, 170)" }}
            >
              Buynow
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Proddata;

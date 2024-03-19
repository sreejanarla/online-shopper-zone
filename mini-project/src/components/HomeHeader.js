import React from "react";

import { useNavigate } from "react-router-dom";
function HomeHeader() {
  let navigate = useNavigate();
  return (
    <div className="HomeHeader d-flex m-auto bg-light">
      <div className="p-4 text-center text-center display-6 w-75 bg-light">
        SHOPER<span style={{ color: "rgb(32, 178, 170)" }}>ZONE</span>
      </div>
      <button
        type="button"
        className="btn btn-dark text-white m-4 p-2 "
        onClick={() => navigate("/shop")}
      >
        Shop Now
      </button>
    </div>
  );
}
export default HomeHeader;

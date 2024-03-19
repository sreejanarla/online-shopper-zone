import React from "react";
function Header() {
  return (
    <div
      style={({ minHeight: "4vh" }, { backgroundColor: "rgb(210,110,177)" })}
      className="p-3"
    >
      <div className="mx-5 d-flex justify-content-end">
        <input type="text" id="search" placeholder="Search"></input>
        <button type="button" className="mx-5 px=3 btn btn-warning">
          search
        </button>
      </div>
    </div>
  );
}
export default Header;

import React from "react";
import HomeHeader from "./HomeHeader";
import Footer from "./Footer";
function Home() {
  return (
    <div className="Home">
      <HomeHeader />
      <div className="">
        <img
          src="https://t4.ftcdn.net/jpg/05/39/99/67/360_F_539996737_T5gJEIEqsGUjMXhrLZt0lDLcrOWsSHlb.jpg"
          alt="image cannot be retrived"
          className="image w-100 h-100"
        />
      </div>
      <Footer />
    </div>
  );
}
export default Home;

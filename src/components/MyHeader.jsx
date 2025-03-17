import React from "react";

const MyHeader = () => {
  return (
    <div className="fixed_header flex bg-[#2483c3] md:bg-[#0959b2]">
      <div className="banner flex place-items-center justify-start">
        <div className="flex">
          <a href="/">
            <img
              src="../src/assets/TBBbanner.svg"
              alt="Travel by Baking http://TravelbyBaking.com"
              className="imgHlogo"
            />
          </a>
        </div>
      </div>
      <div className="flex justify-evenly place-items-center mywidth">
        <div className="main-nav__item">
          <a href="recipes" >Recipes</a>
        </div>
        <div className="main-nav__item">
          <a href="Movies/index.html"  >Videos</a>
        </div>
        <div className="main-nav__item">
          <a href="Aboutus/index.html">About us</a>
        </div>
        <div className="main-nav__item">
          <a href="More/index.html">More</a>
        </div>
      </div>
    </div>
  );
};
export default MyHeader;

import React from "react";

const MyHeader = () => {
  return (
    <div className="fixed_header flex bg-[#2483c3] md:bg-[#0959b2]">
      <header class="banner flex">
        <div className="flex">
          <a href="http://TravelbyBaking.com">
            <img
              src="src/assets/TBBbanner.svg"
              alt="Travel by Baking http://TravelbyBaking.com"
              className="ml-[2px] rounded-sm border-r-1 border-black"
            />
          </a>
        </div>
        <div className="flex mywidth">
          <nav className="flex">
            <ul className="flex main-nav__items ">
              <li className="main-nav__item">
                <a href="recipes/index.html">Recipes</a>
              </li>
              <li className="main-nav__item">
                <a href="videos/index.html">Videos</a>
              </li>
              <li className="main-nav__item">
                <a href="more/index.html">More</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};
export default MyHeader;

import React from "react";

const MyFooter = () => {
  return (
    <div className="MyFooter flex flex-wrap justify-evenly bg-[#2483c3] md:bg-[#0959b2] text-white p-1">
      <div className="content-center text-lg">Visit us :</div>
      <div className="content-center justify-center">
        <a className="flex flex-wrap"
          href="https://www.youtube.com/@TravelByBaking">
          <img
            src="youtube-6.svg"
            alt="YouTube icon"
            className="w-[90px] h-[70px]"
          />
        </a>
      </div>
      <div className="content-center justify-center">
        <a className="flex flex-wrap"
          href="https://www.facebook.com/profile.php?id=61554003034910">
          <img
            src="Facebook-f_Logo-Blue-Logo.wine.svg"
            alt="FaceBook icon"
            className="w-[60px] h-[55px]"
          />
        </a>
      </div>
      <div className="content-center justify-center">
        <a
          className="flex flex-wrap"
          href="https://www.instagram.com/travel_by_baking/"
        >
          <img
            src="Instagram-Logo.wine.svg"
            alt="Instagram icon"
            className="w-[60px] h-[55px]"
          />
        </a>
      </div>
      <div className="content-center justify-center oddImage">
        <a
          className="flex flex-wrap"
          href="https://www.pinterest.com/ilzepumpia/"
        >
          <img
            src="pinterest-tile.svg"
            alt="Pinterest icon"
            className=""
          />
        </a>
      </div>
    </div>
  );
};

export default MyFooter;

import React from "react";

const MyFooter = () => {
  return (
    <div className="MyFooter flex flex-wrap justify-evenly bg-[#2483c3] md:bg-[#0959b2] text-white pt-1">
      <div className="content-center text-lg">Follow us :</div>
      <div>
        <a className="flex flex-wrap"
          href="https://www.youtube.com/@TravelByBaking">
          <img
            src="public/youtube-6.svg"
            alt="YouTube"
            className="w-[70px] h-[55px]"
          />
        </a>
      </div>
      <div>
        <a className="flex flex-wrap"
          href="https://www.facebook.com/profile.php?id=61554003034910">
          <img
            src="public/Facebook-f_Logo-Blue-Logo.wine.svg"
            alt="YouTube"
            className="w-[60px] h-[55px]"
          />
        </a>
      </div>
      <div>
        <a
          className="flex flex-wrap"
          href="https://www.instagram.com/travel_by_baking/"
        >
          <img
            src="public/Instagram-Logo.wine.svg"
            alt="YouTube"
            className="w-[60px] h-[55px]"
          />
        </a>
      </div>
    </div>
  );
};

export default MyFooter;

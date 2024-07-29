import React from "react";

function LocationIcon({width, height, onClick, color}) {
  return (
    <svg
      onClick={onclick}
      xmlns="http://www.w3.org/2000/svg"
      width={26}
      height={26}
      fill={color || "currentColor"}
      viewBox="0 0 24 24"
    >
      <path
        fill="#080341"
        fillRule="evenodd"
        d="M12.285 18.994c-.128.093-.248.179-.357.255a13.41 13.41 0 01-.385-.266 18.008 18.008 0 01-2.36-2.03C7.454 15.179 6 12.915 6 10.5a6 6 0 1112 0c0 2.39-1.518 4.647-3.31 6.44-.87.87-1.746 1.57-2.405 2.053zM19.5 10.5c0 6-7.5 10.5-7.5 10.5-.375 0-7.5-4.5-7.5-10.5a7.5 7.5 0 1115 0zm-6 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm1.5 0a3 3 0 11-6 0 3 3 0 016 0z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default LocationIcon;
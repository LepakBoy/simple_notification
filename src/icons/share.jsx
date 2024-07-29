import React from "react";

function ShareIcon({className, onClick}) {
  return (
    <svg
    onClick={onClick}
    className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fillRule="evenodd"
      clipRule="evenodd"
    >
      <path d="M14 4H1v18h20V11h1v12H0V3h14v1zm10 5h-1V2.707L11.354 14.354l-.708-.708L22.293 2H16V1h8v8z"></path>
    </svg>
  );
}

export default ShareIcon;
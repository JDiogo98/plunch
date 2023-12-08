import React from "react";
import { propSvg } from "./svgSearch ";

export const AccountSvg = ({ size, color }: propSvg) => {
  return (
    <>
      <svg
        width={`${size}`}
        fill="#ffffff"
        height={`${size}`}
        viewBox="0 0 24 24"
        stroke={`${color}`}
        strokeWidth={"2px"}
        id="Layer_1"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs></defs>
        <circle cx="12" cy="7.25" r="5.73" />
        <path d="M1.5,23.48l.37-2.05A10.3,10.3,0,0,1,12,13h0a10.3,10.3,0,0,1,10.13,8.45l.37,2.05" />
      </svg>
    </>
  );
};

import React from "react";

export const BackSvg = () => {
  return (
    <>
      <svg
        width="3.1rem"
        height="3.1rem"
        style={{aspectRatio: "1/1", boxShadow: "0px 10px 10px rgba(0, 0, 0, 0.15)", borderRadius: "10px"}}
        viewBox="0 0 1125 1051"
        fill="#696868"
        className="icon"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        onMouseEnter={(e) => (e.target.style.opacity = "0.4")}
        onMouseLeave={(e) => (e.target.style.opacity = "1")}
      >
        <path
          d="M669.6 849.6c8.8 8 22.4 7.2 30.4-1.6s7.2-22.4-1.6-30.4l-309.6-280c-8-7.2-8-17.6 0-24.8l309.6-270.4c8.8-8 9.6-21.6 2.4-30.4-8-8.8-21.6-9.6-30.4-2.4L360.8 480.8c-27.2 24-28 64-0.8 88.8l309.6 280z"
          fill=""
        />
      </svg>
    </>
  );
};

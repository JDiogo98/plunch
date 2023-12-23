export const DeleteSvg = () => {
  return (
    <>
      <svg
        width="1.5rem"
        height="1.5rem"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          aspectRatio: "1/1",
          boxShadow: "0px 10px 10px rgba(0, 0, 0, 0.08)",
          borderRadius: "10px",
          padding: "7px",
          paddingRight: "12px",
          paddingLeft: "12px",
        }}
        onMouseEnter={(e: any) =>
          (e.target.style.boxShadow = "0px 10px 10px rgba(224, 69, 69, 0.428)")
        }
        onMouseLeave={(e: any) =>
          (e.target.style.boxShadow = "0px 10px 10px rgba(0, 0, 0, 0.08)")
        }
      >
        <path
          d="M10 11V17"
          stroke="#bc484c"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14 11V17"
          stroke="#bc484c"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4 7H20"
          stroke="#bc484c"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6 7H12H18V18C18 19.6569 16.6569 21 15 21H9C7.34315 21 6 19.6569 6 18V7Z"
          stroke="#bc484c"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z"
          stroke="#bc484c"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
};

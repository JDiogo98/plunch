export const InfoSvg = () => {
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
          (e.target.style.boxShadow = "0px 10px 10px rgba(83, 84, 131, 0.428)")
        }
        onMouseLeave={(e: any) =>
          (e.target.style.boxShadow = "0px 10px 10px rgba(0, 0, 0, 0.08)")
        }
      >
        <path
          d="M12 17V11"
          stroke="#646464"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle
          cx="1"
          cy="1"
          r="1"
          transform="matrix(1 0 0 -1 11 9)"
          fill="#646464"
        />
        <path
          d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7"
          stroke="#646464"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    </>
  );
};

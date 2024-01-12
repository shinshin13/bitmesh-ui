export const MenuIcon: React.FC<{ size?: number }> = ({ size = 24 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_196_330"
        style={{
          maskType: "alpha",
        }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="24"
        height="24"
      >
        <rect width="24" height="24" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_196_330)">
        <path
          d="M16.4769 12.4807L11.5385 7.54231L16.4769 2.60388L21.4153 7.54231L16.4769 12.4807ZM3.80774 10.8077V3.80773H10.8077V10.8077H3.80774ZM13.1923 20.1922V13.1923H20.1922V20.1922H13.1923ZM3.80774 20.1922V13.1923H10.8077V20.1922H3.80774Z"
          fill="white"
        />
      </g>
    </svg>
  );
};

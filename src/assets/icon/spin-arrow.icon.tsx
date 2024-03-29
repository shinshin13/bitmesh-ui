import * as React from "react";
const SpinArrow: React.FC<{ size?: number }> = ({ size = 40 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x={0.5}
      y={0.5}
      width={29}
      height={29}
      rx={7.5}
      fill="url(#paint0_radial_134_8794)"
    />
    <rect
      x={0.5}
      y={0.5}
      width={29}
      height={29}
      rx={7.5}
      stroke="url(#paint1_linear_134_8794)"
    />
    <path
      d="M15.0391 8.9375C14.5703 8.9375 14.1406 8.97656 13.7109 9.05469V7.17969C14.1406 7.10156 14.5703 7.0625 15.0391 7.0625C17.2266 7.0625 19.2188 7.88281 20.7031 9.25L22.0703 7.88281C22.4609 7.49219 23.125 7.76562 23.125 8.3125V12.4531C23.125 12.8047 22.8516 13.0781 22.5 13.0781H18.3984C17.8516 13.0781 17.5781 12.4141 17.9688 12.0234L19.375 10.5781C18.2031 9.5625 16.6797 8.9375 15.0391 8.9375ZM8.47656 15.5C8.47656 15.9297 8.51562 16.3594 8.59375 16.75H6.67969C6.60156 16.3594 6.60156 15.9297 6.60156 15.5C6.60156 13.3516 7.38281 11.3594 8.71094 9.875L7.34375 8.50781C6.95312 8.11719 7.22656 7.45312 7.77344 7.45312H11.9141C12.2656 7.45312 12.5391 7.72656 12.5391 8.07812V12.1797C12.5391 12.7266 11.875 13.0391 11.4844 12.6484L10.0391 11.2031C9.0625 12.375 8.47656 13.8594 8.47656 15.5ZM12.1094 19.1328L10.7422 20.4609C11.875 21.4766 13.3984 22.0625 15.0391 22.0625C15.4297 22.0625 15.8203 22.0234 16.25 21.9453V23.8594C15.8203 23.8984 15.4297 23.9375 15.0391 23.9375C12.8516 23.9375 10.8984 23.1172 9.41406 21.7891L7.96875 23.2344C7.57812 23.625 6.91406 23.3516 6.91406 22.8047V18.6641C6.91406 18.3516 7.1875 18.0391 7.53906 18.0391H11.6406C12.1875 18.0391 12.5 18.7422 12.1094 19.1328ZM18.5938 18.5078L19.9219 19.8359C20.9766 18.7031 21.6016 17.1797 21.6016 15.5C21.6016 15.0703 21.5625 14.6797 21.4844 14.25H23.3594C23.4375 14.6797 23.4766 15.0703 23.4766 15.5C23.4766 17.6875 22.6172 19.6797 21.25 21.1641L22.6953 22.6094C23.0859 23 22.8125 23.6641 22.2656 23.6641H18.125C17.8125 23.6641 17.5 23.3906 17.5 23.0391V18.9375C17.5 18.3906 18.2031 18.1172 18.5938 18.5078Z"
      fill="white"
    />
    <defs>
      <radialGradient
        id="paint0_radial_134_8794"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(15 -0.211267) scale(30.4225)"
      >
        <stop offset={0.35} stopColor="#101010" />
        <stop offset={0.68} stopColor="#401241" />
        <stop offset={1} stopColor="#701471" />
      </radialGradient>
      <linearGradient
        id="paint1_linear_134_8794"
        x1={1.09375}
        y1={30}
        x2={21.0938}
        y2={7.65625}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" />
        <stop offset={1} stopColor="white" stopOpacity={0} />
      </linearGradient>
    </defs>
  </svg>
);
export default SpinArrow;
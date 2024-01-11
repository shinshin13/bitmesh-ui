export const MIcon: React.FC<{ size?: number }> = ({ size = 40 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="20"
        cy="20"
        r="19.5"
        fill="url(#paint0_radial_134_8027)"
        stroke="url(#paint1_linear_134_8027)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.4923 20.3652L10 10.8335H15.9345L20.5594 16.7248L25.5004 10.86H28.7688L22.1397 18.7377L30 28.7502H24.0833L19.0754 22.3791L13.729 28.7325H10.4429L17.4923 20.3652ZM24.9457 26.9841L13.6388 12.5996H15.0714L26.364 26.9841H24.9457Z"
        fill="white"
      />
      <defs>
        <radialGradient
          id="paint0_radial_134_8027"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(20 -0.281689) scale(40.5634)"
        >
          <stop offset="0.35" stopColor="#101010" />
          <stop offset="0.68" stopColor="#401241" />
          <stop offset="1" stopColor="#701471" />
        </radialGradient>
        <linearGradient
          id="paint1_linear_134_8027"
          x1="1.45833"
          y1="40"
          x2="28.125"
          y2="10.2083"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};

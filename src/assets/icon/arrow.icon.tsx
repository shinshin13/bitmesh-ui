export const ArrowIcon: React.FC<{ size?: number }> = ({ size = 40 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_134_8684"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="24"
        height="24"
      >
        <rect width="24" height="24" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_134_8684)">
        <path
          d="M12 22C11.1667 22 10.4583 21.7083 9.87499 21.125C9.29165 20.5417 8.99999 19.8333 8.99999 19C8.99999 18.1667 9.29165 17.4583 9.87499 16.875C10.4583 16.2917 11.1667 16 12 16C12.8333 16 13.5417 16.2917 14.125 16.875C14.7083 17.4583 15 18.1667 15 19C15 19.8333 14.7083 20.5417 14.125 21.125C13.5417 21.7083 12.8333 22 12 22ZM11 10.175V3C11 2.71667 11.0958 2.47917 11.2875 2.2875C11.4792 2.09583 11.7167 2 12 2C12.2833 2 12.5208 2.09583 12.7125 2.2875C12.9042 2.47917 13 2.71667 13 3V10.175L14.875 8.3C15.0583 8.11667 15.2875 8.025 15.5625 8.025C15.8375 8.025 16.075 8.11667 16.275 8.3C16.475 8.5 16.575 8.7375 16.575 9.0125C16.575 9.2875 16.475 9.525 16.275 9.725L12.7 13.3C12.5 13.5 12.2667 13.6 12 13.6C11.7333 13.6 11.5 13.5 11.3 13.3L7.69999 9.7C7.51665 9.51667 7.42082 9.2875 7.41249 9.0125C7.40415 8.7375 7.49999 8.5 7.69999 8.3C7.88332 8.11667 8.11665 8.025 8.39999 8.025C8.68332 8.025 8.91665 8.11667 9.09999 8.3L11 10.175Z"
          fill="white"
        />
      </g>
    </svg>
  );
};

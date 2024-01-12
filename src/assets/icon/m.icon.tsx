export const MIcon: React.FC<{ size?: number }> = ({ size = 40 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="20" cy="20" r="20" fill="url(#paint0_linear_196_1304)" />
      <circle cx="20" cy="20" r="19.5" stroke="white" stroke-opacity="0.5" />
      <g clip-path="url(#clip0_196_1304)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M20 30C25.5228 30 30 25.5228 30 20C30 14.4772 25.5228 10 20 10C14.4772 10 10 14.4772 10 20C10 25.5228 14.4772 30 20 30Z"
          fill="white"
        />
        <path
          d="M14.9145 16.7935C14.931 16.626 14.8686 16.4604 14.7464 16.3477L13.5014 14.8128V14.5835H17.367L20.3548 21.2898L22.9817 14.5835H26.6667V14.8128L25.6023 15.8573C25.5105 15.9288 25.465 16.0465 25.484 16.163V23.8374C25.465 23.9538 25.5105 24.0715 25.6023 24.1431L26.6418 25.1876V25.4168H21.4131V25.1876L22.4899 24.1176C22.5957 24.0093 22.5957 23.9775 22.5957 23.8119V17.6087L19.6017 25.3914H19.1971L15.7112 17.6087V22.8247C15.6822 23.044 15.7533 23.2648 15.9042 23.4234L17.3047 25.1621V25.3914H13.3334V25.1621L14.7339 23.4234C14.8837 23.2645 14.9507 23.0423 14.9145 22.8247V16.7935Z"
          fill="black"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_196_1304"
          x1="20"
          y1="0"
          x2="20"
          y2="40"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#3E3E3E" />
          <stop offset="1" />
        </linearGradient>
        <clipPath id="clip0_196_1304">
          <rect
            width="20"
            height="20"
            fill="white"
            transform="translate(10 10)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

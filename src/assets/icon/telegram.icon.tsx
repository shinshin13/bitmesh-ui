export const TelegramIcon: React.FC<{ size?: number }> = ({ size = 40 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="20" cy="20" r="20" fill="url(#paint0_linear_196_1301)" />
      <circle cx="20" cy="20" r="19.5" stroke="white" strokeOpacity="0.5" />
      <path
        d="M20 28.3332C15.3975 28.3332 11.6666 24.6023 11.6666 19.9998C11.6666 15.3973 15.3975 11.6665 20 11.6665C24.6025 11.6665 28.3333 15.3973 28.3333 19.9998C28.3333 24.6023 24.6025 28.3332 20 28.3332ZM17.4083 20.9748L17.4191 20.969L18.1441 23.3607C18.2375 23.6198 18.3658 23.6665 18.5216 23.6448C18.6783 23.624 18.7608 23.5398 18.8633 23.4415L19.8533 22.4848L21.9783 24.0582C22.3666 24.2723 22.6458 24.1615 22.7425 23.6982L24.1233 17.1798C24.2758 16.5732 24.0091 16.3298 23.5383 16.5232L15.4275 19.6565C14.8741 19.8782 14.8775 20.1882 15.3275 20.3257L17.4083 20.9757V20.9748Z"
        fill="white"
      />
      <defs>
        <linearGradient
          id="paint0_linear_196_1301"
          x1="20"
          y1="0"
          x2="20"
          y2="40"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3E3E3E" />
          <stop offset="1" />
        </linearGradient>
      </defs>
    </svg>
  );
};

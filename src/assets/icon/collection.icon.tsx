export const CollectionIcon: React.FC<{ size?: number }> = ({ size = 40 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="24" cy="24" r="24" fill="white" />
      <mask
        id="mask0_134_9231"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="2"
        y="2"
        width="44"
        height="44"
      >
        <rect
          x="2.40112"
          y="2.39999"
          width="43.2"
          height="43.2"
          fill="#D9D9D9"
        />
      </mask>
      <g mask="url(#mask0_134_9231)">
        <path
          d="M9.60208 27.6003C8.61208 27.6003 7.76458 27.2478 7.05958 26.5428C6.35458 25.8378 6.00208 24.9903 6.00208 24.0003C6.00208 23.0103 6.35458 22.1628 7.05958 21.4578C7.76458 20.7528 8.61208 20.4003 9.60208 20.4003C10.5921 20.4003 11.4396 20.7528 12.1446 21.4578C12.8496 22.1628 13.2021 23.0103 13.2021 24.0003C13.2021 24.9903 12.8496 25.8378 12.1446 26.5428C11.4396 27.2478 10.5921 27.6003 9.60208 27.6003ZM11.3121 34.0803L16.6221 28.7703C16.9521 28.4403 17.3721 28.2753 17.8821 28.2753C18.3921 28.2753 18.8121 28.4403 19.1421 28.7703C19.4721 29.1003 19.6371 29.5203 19.6371 30.0303C19.6371 30.5403 19.4721 30.9603 19.1421 31.2903L13.8321 36.6003C13.5021 36.9303 13.0821 37.0953 12.5721 37.0953C12.0621 37.0953 11.6421 36.9303 11.3121 36.6003C10.9821 36.2703 10.8171 35.8503 10.8171 35.3403C10.8171 34.8303 10.9821 34.4103 11.3121 34.0803ZM16.7121 19.1403L11.4021 13.8303C11.0721 13.5003 10.9071 13.0803 10.9071 12.5703C10.9071 12.0603 11.0721 11.6403 11.4021 11.3103C11.7321 10.9803 12.1521 10.8153 12.6621 10.8153C13.1721 10.8153 13.5921 10.9803 13.9221 11.3103L19.2321 16.6203C19.5621 16.9503 19.7271 17.3703 19.7271 17.8803C19.7271 18.3903 19.5621 18.8103 19.2321 19.1403C18.9021 19.4703 18.4821 19.6353 17.9721 19.6353C17.4621 19.6353 17.0421 19.4703 16.7121 19.1403ZM24.0021 42.0003C23.0121 42.0003 22.1646 41.6478 21.4596 40.9428C20.7546 40.2378 20.4021 39.3903 20.4021 38.4003C20.4021 37.4103 20.7546 36.5628 21.4596 35.8578C22.1646 35.1528 23.0121 34.8003 24.0021 34.8003C24.9921 34.8003 25.8396 35.1528 26.5446 35.8578C27.2496 36.5628 27.6021 37.4103 27.6021 38.4003C27.6021 39.3903 27.2496 40.2378 26.5446 40.9428C25.8396 41.6478 24.9921 42.0003 24.0021 42.0003ZM24.0021 13.2003C23.0121 13.2003 22.1646 12.8478 21.4596 12.1428C20.7546 11.4378 20.4021 10.5903 20.4021 9.60027C20.4021 8.61027 20.7546 7.76277 21.4596 7.05777C22.1646 6.35277 23.0121 6.00027 24.0021 6.00027C24.9921 6.00027 25.8396 6.35277 26.5446 7.05777C27.2496 7.76277 27.6021 8.61027 27.6021 9.60027C27.6021 10.5903 27.2496 11.4378 26.5446 12.1428C25.8396 12.8478 24.9921 13.2003 24.0021 13.2003ZM28.7721 16.6203L34.1721 11.3103C34.5021 10.9803 34.9146 10.8078 35.4096 10.7928C35.9046 10.7778 36.3321 10.9503 36.6921 11.3103C37.0221 11.6403 37.1871 12.0603 37.1871 12.5703C37.1871 13.0803 37.0221 13.5003 36.6921 13.8303L31.3371 19.1853C30.9771 19.5453 30.5496 19.7253 30.0546 19.7253C29.5596 19.7253 29.1321 19.5453 28.7721 19.1853C28.4421 18.8253 28.2696 18.3978 28.2546 17.9028C28.2396 17.4078 28.4121 16.9803 28.7721 16.6203ZM34.1721 36.6003L28.8621 31.2903C28.5321 30.9603 28.3671 30.5403 28.3671 30.0303C28.3671 29.5203 28.5321 29.1003 28.8621 28.7703C29.1921 28.4403 29.6121 28.2753 30.1221 28.2753C30.6321 28.2753 31.0521 28.4403 31.3821 28.7703L36.6921 34.0803C37.0221 34.4103 37.1871 34.8303 37.1871 35.3403C37.1871 35.8503 37.0221 36.2703 36.6921 36.6003C36.3621 36.9303 35.9421 37.0953 35.4321 37.0953C34.9221 37.0953 34.5021 36.9303 34.1721 36.6003ZM38.4021 27.6003C37.4121 27.6003 36.5646 27.2478 35.8596 26.5428C35.1546 25.8378 34.8021 24.9903 34.8021 24.0003C34.8021 23.0103 35.1546 22.1628 35.8596 21.4578C36.5646 20.7528 37.4121 20.4003 38.4021 20.4003C39.3921 20.4003 40.2396 20.7528 40.9446 21.4578C41.6496 22.1628 42.0021 23.0103 42.0021 24.0003C42.0021 24.9903 41.6496 25.8378 40.9446 26.5428C40.2396 27.2478 39.3921 27.6003 38.4021 27.6003Z"
          fill="black"
        />
      </g>
    </svg>
  );
};

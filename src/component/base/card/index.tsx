import React, { FC, ReactNode } from "react";

const Card: FC<{
  icon: ReactNode;
  title: string;
  content: string;
  image: string;
}> = ({ icon, title, content, image }) => {
  return (
    <>
      <a
        href="/#"
        className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {icon}
          </h5>
          <div>{content}</div>
        </div>
        <img
          className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
          src={image}
          alt=""
        />
      </a>
    </>
  );
};

export default Card;

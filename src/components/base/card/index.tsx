import { FC, ReactNode } from "react";

const Card: FC<{
  icon: ReactNode;
  title: string;
  subTitle?: string;
  content: ReactNode;
  image?: ReactNode;
  className: string;
  imageClass?: string;
}> = ({ icon, title, subTitle, content, image, className, imageClass }) => {
  return (
    <div className="p-4 md:p-0">
      <div
        className={`flex flex-wrap md:flex-nowrap items-center bg-nav-gradient border border-[#ffffff1a] rounded-lg shadow md:flex-row max-w-[1128px] ${className}`}
      >
        <div className="p-6 md:p-8 md:basis-2/3 justify-between leading-normal pb-0">
          <h4 className="mb-2 text-2xl md:text-[32px] font-bold tracking-tight text-gray-900 dark:text-white flex items-center">
            <span className="pr-6">{icon}</span>
            {title}
          </h4>
          {subTitle && (
            <h5 className="mt-6 mb-3 text-white text-base md:text-xl font-bold">
              {subTitle}
            </h5>
          )}
          <div className="text-[#ffffffb3]">{content}</div>
        </div>
        {image && (
          <div className="pl-8 pr-6 mt-auto ">
            <div
              className={`p-6 h-full basis-1/3 rounded-t-xl h-96 border pb-0 border border-b-0 border-[#146EF4] ${imageClass}`}
            >
              {image}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;

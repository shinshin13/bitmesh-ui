import { BehindIcon } from "../../../assets/icon/behind.icon";

import nft1 from "../../../assets/image/behind1.png";
import nft2 from "../../../assets/image/behind2.png";
import nft3 from "../../../assets/image/behind3.png";
import nft4 from "../../../assets/image/behind4.png";
import nft5 from "../../../assets/image/behind5.png";
import nft6 from "../../../assets/image/behind6.png";
import nft7 from "../../../assets/image/behind7.png";
import nft8 from "../../../assets/image/behind8.png";

const nfts = [
  {
    imgUrl: nft1,
  },
  {
    imgUrl: nft2,
  },
  {
    imgUrl: nft3,
  },
  {
    imgUrl: nft4,
  },
  {
    imgUrl: nft5,
  },
  {
    imgUrl: nft6,
  },
  {
    imgUrl: nft7,
  },
  {
    imgUrl: nft8,
  },
];
const Behind = () => {
  return (
    <div className="container max-w-[1128px] mx-auto pt-12 lg:pt-40 px-4">
      <div className="bg-component-background px-6 pt-6 lg:px-8 lg:pt-8 rounded-xl lg:rounded-2xl">
        <div className="flex items-center">
          <BehindIcon size={40}></BehindIcon>
          <p className="text-largest pl-3">Behind the Scene</p>
        </div>
        <div className="grid grid-cols-2 border mt-6 lg:mt-8 px-3 pt-4 lg:px-4 lg:pt-4 gap-2 rounded-t-2xl border-[#146EF4] border-b-0">
          {nfts.map((item, index) => {
            return (
              <div key={index}>
                <img alt="nft collection" src={item.imgUrl} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Behind;

import CenterLogo from "../../../assets/image/bitmesh-footer.png";
import BitmeshLogo from "../../../assets/image/bitmesh-3D-logo.png";
import { XIcon } from "../../../assets/icon/x.icon";
import { TelegramIcon } from "../../../assets/icon/telegram.icon";
import { MIcon } from "../../../assets/icon/m.icon";

const Footer = () => {
  return (
    <div className=" bg-[url('/src/assets/image/cover.jpg')] bg-no-repeat bg-center bg-cover w-full ">
      <div className="h-dvh">
        <div className=" inset-0 bg-[url('/src/assets/image/blue_inside.png')] bg-repeat bg-center">
          <div className=" top-0 left-0 right-0 bottom-0 container z-1 max-w-[1128px] mx-auto flex md:items-center justify-center px-4 pt-16 md:pt-[282px] pb-16 md:pb-[282px]">
            <div className="flex flex-col lg:flex-row gap-5 bg-component-background p-12 rounded-xl lg:rounded-2xl w-full ">
              <div className="flex flex-col justify-around w-full lg:w-1/2 text-center lg:text-left">
                <div>
                  <p className="text-largest pb-6">Are You Ready to Join</p>
                  <img
                    alt="bitmesh logo"
                    className="mx-auto lg:mx-0"
                    src={BitmeshLogo}
                  />
                </div>
                <div>
                  <button className="text-larger py-3 px-12 bg-gray-gradient border rounded border-white/10 mt-6 lg:mt-0">
                    Lets Talk
                  </button>
                </div>
              </div>
              <div className="w-full lg:w-1/2 flex items-center justify-end order-first lg:order-none">
                <img alt="" className="mx-auto lg:mx-none" src={CenterLogo} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#141414] py-12 ">
        <div className="max-w-[1128px] mx-auto flex flex-col lg:flex-row justify-between items-center">
          <div className="flex flex-col justify-between">
            <div>
              <p className="text-largest pb-4">Are You Ready to Join</p>
              <img
                alt="bitmesh logo"
                className="mx-auto lg:mx-0 mb-4 lg:mb-9"
                src={BitmeshLogo}
              />
            </div>
            <div className="flex gap-4 justify-center lg:justify-normal">
              <a
                href="https://twitter.com/BitmeshGame"
                target="_blank"
                rel="noopener noreferrer"
              >
                <XIcon />
              </a>
              <TelegramIcon />
              <MIcon />
            </div>
          </div>
          <div className="text-left w-full lg:w-auto px-6 lg:px-0">
            <div className="max-w-[350px] lg:max-w-max lg:w-auto mx-auto grid grid-cols-2 justify-items-stretch lg:grid-cols-3 gap-6 gap-x-10 lg:gap-x-28 text-small pt-8 pb-12">
              <div>What is BitMesh </div>
              <div>Create your Story </div>
              <div className="lg:text-right">Build your World </div>
              <div>The Economy </div>
              <div>Native NFT Collection</div>
              <div className="lg:text-right">Our Technology</div>
            </div>
            <hr className="border-[#ffffff66]" />
            <p className="text-small text-center py-4 text-[#ffffff66]">
              ©BitMesh &nbsp;&nbsp; | &nbsp;&nbsp; All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;

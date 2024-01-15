import CenterLogo from "../../../assets/image/center-logo.png";
import BitmeshLogo from "../../../assets/image/bitmesh-3D-logo.png";
import IndipumpLogo from "../../../assets/image/indipump-logo.png";
import MacrocosmLogo from "../../../assets/image/macrocosm-logo.png";
import { SECTIONS, SECTION_MOBILE } from "../../../utils/constants/sections";
import useMediaQuery from "../../hooks/useMediaQuery";

const Header = () => {
  const [isMobile] = useMediaQuery("(min-width: 768px)");

  return (
    <div className="bg-[url('/src/assets/image/galaxy-cover.png')] md:bg-transparent">
      <div className="relative bg-[url('/src/assets/image/cover-mobile.png')] md:bg-[url('/src/assets/image/cover.jpg')] bg-no-repeat bg-cover-mobile	md:bg-center bg-contain md:bg-cover w-full h-full md:h-screen">
        <div className="absolute top-8 left-1/2 -translate-x-1/2">
          <img alt="" src={BitmeshLogo} className="w-[175px] md:w-max" />
        </div>
        <div className="overflow-x-hidden">
          {(isMobile ? SECTIONS(40) : SECTION_MOBILE(20)).map((item) => {
            return (
              <a
                className={`group absolute rounded md:rounded-lg top-[${item.top}] left-[${item.left}]`}
                style={{
                  top: item.top,
                  left: item.left,
                  width: item.size,
                  height: item.size,
                }}
                key={item.id}
                href={item.id}
                onClick={(e) => {
                  if (!item.text) {
                    e.preventDefault();
                  }
                }}
              >
                <div
                  className={`rounded md:rounded-lg w-full h-full ${
                    item.text
                      ? "group-hover:bg-dark-gradient p-1 md:p-2"
                      : "p-1"
                  }`}
                >
                  <div className="bg-gray-border p-px rounded md:rounded-lg w-full h-full">
                    <div
                      className={`bg-light-gradient rounded md:rounded-lg h-full p-${
                        item.text && isMobile ? "2" : "1"
                      }`}
                    >
                      <div
                        className={`bg-light-border ${
                          item.text ? "group-hover:bg-white-border" : ""
                        } p-px rounded md:rounded-lg h-full`}
                      >
                        <div
                          className={`custom-icon rounded md:rounded-lg bg-light-gradient ${
                            item.text ? "group-hover:bg-purple-gradient" : ""
                          } text-white flex items-center justify-center h-full`}
                        >
                          {item.icon}
                        </div>
                      </div>
                      {item.text && isMobile ? (
                        <div className="hidden group-hover:block font-semibold text-sm text-gray-100 rounded-md absolute py-[5px] px-3 w-max  left-[calc(100%-8px)] bg-tooltip-gradient top-1/2 -translate-y-1/2">
                          {item.text}
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
        <div className="flex justify-center items-center h-auto md:h-full pt-[63%] md:pt-0">
          <img
            className="w-[127px] h-[127px] md:w-60 md:h-60"
            alt=""
            src={CenterLogo}
          />
        </div>
        <div className="static md:absolute mt-48 md:-bottom-6 left-1/2 translate-x-0 md:-translate-x-1/2 mt-20">
          <div className="opacity-70 text-center mb-6 text-white ">
            Powered by
          </div>
          <div className="flex justify-center items-center gap-8 grayscale">
            <img alt="" src={IndipumpLogo} className="w-[115px] md:w-auto" />
            <img alt="" src={MacrocosmLogo} className="w-[142px] md:w-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

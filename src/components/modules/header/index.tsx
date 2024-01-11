import CenterLogo from "../../../assets/image/center-logo.png";
import BitmeshLogo from "../../../assets/image/bitmesh-3D-logo.png";
import IndipumpLogo from "../../../assets/image/indipump-logo.png";
import MacrocosmLogo from "../../../assets/image/macrocosm-logo.png";
import { SECTIONS } from "../../../utils/constants/sections";

const Header = () => {
  return (
    <div className="bg-[url('/src/assets/image/galaxy-cover.png')] md:bg-transparent">
      <div className="relative bg-[url('/src/assets/image/cover-mobile.png')]  md:bg-[url('/src/assets/image/cover.jpg')] bg-no-repeat bg-center bg-contain md:bg-cover w-full h-screen">
        <div className="absolute top-8 left-1/2 -translate-x-1/2">
          <img alt="" src={BitmeshLogo} className="w-[175px] md:w-max" />
        </div>
        <div>
          {SECTIONS(40).map((item) => {
            return (
              <a
                className={`group absolute rounded-lg top-[${item.top}] left-[${item.left}]`}
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
                  className={`rounded-lg w-full h-full ${
                    item.text ? "group-hover:bg-dark-gradient p-2" : "p-1"
                  }`}
                >
                  <div className="bg-gray-border p-px rounded-lg w-full h-full">
                    <div
                      className={`bg-light-gradient rounded-lg h-full p-${
                        item.text ? "2" : "1"
                      }`}
                    >
                      <div
                        className={`bg-light-border ${
                          item.text ? "group-hover:bg-white-border" : ""
                        } p-px rounded-lg h-full`}
                      >
                        <div
                          className={`custom-icon rounded-lg bg-light-gradient ${
                            item.text ? "group-hover:bg-purple-gradient" : ""
                          } text-white flex items-center justify-center h-full`}
                        >
                          {item.icon}
                        </div>
                      </div>
                      {item.text ? (
                        <div className="group-hover:opacity-100 transition-opacity font-semibold text-sm text-gray-100 rounded-md absolute py-[5px] px-3 w-max left-[calc(100%-8px)] bg-tooltip-gradient opacity-0 top-1/2 -translate-y-1/2">
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
        <div className="flex justify-center items-center h-full">
          <img
            className="w-[127px] h-[127px] md:w-60 md:h-60"
            alt=""
            src={CenterLogo}
          />
        </div>
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 mt-20">
          <div className="opacity-70 text-black text-center mb-6 md:text-white ">
            Powered by
          </div>
          <div className="flex justify-center items-center gap-8 grayscale">
            <img alt="" src={IndipumpLogo} />
            <img alt="" src={MacrocosmLogo} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

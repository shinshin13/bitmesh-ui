import "./App.css";
import BuildYourWorld from "./components/modules/build-your-world";
import CreateYourStory from "./components/modules/create-your-story";
import Header from "./components/modules/header";
import TheEconomy from "./components/modules/the-economy";
import WhatIsMesh from "./components/modules/what-is-mesh";
import { SECTIONS } from "./utils/constants/sections";
import { useState } from "react";
import NativeNftCollection from "./components/native-nft-collection";
import BitmeshLogo from "./assets/image/bitmesh-3D-logo.png";
import Behind from "./components/modules/behind-the-scene";
import Technology from "./components/modules/our-technology";
import Footer from "./components/modules/footer";
import { Menu } from "./components/base/menu";
import useMediaQuery from "./components/hooks/useMediaQuery";

function App() {
  const [panel, setPanel] = useState<string>(SECTIONS(40)[0].id);
  const [isMobile] = useMediaQuery("(min-width: 768px)");

  window.addEventListener("popstate", () => {
    setPanel(window?.location?.hash);
    document
      .getElementById(window?.location?.hash)
      ?.scrollIntoView({ behavior: "smooth" });
  });

  const renderTabContent = (id: string) => {
    switch (id) {
      case SECTIONS(40)[0].id:
        return <WhatIsMesh />;
      case SECTIONS(40)[1].id:
        return <CreateYourStory />;
      case SECTIONS(40)[2].id:
        return <BuildYourWorld />;
      case SECTIONS(40)[3].id:
        return <TheEconomy />;
      case SECTIONS(40)[5].id:
        return <NativeNftCollection />;
      case SECTIONS(40)[6].id:
        return <Behind />;
      case SECTIONS(40)[7].id:
        return <Technology />;
      default:
        break;
    }
  };

  const tabs = (
    <ul
      id="myTab"
      className="tabs flex justify-center items-center relative bottom-0 inset-x-0 h-24 nav nav-tabs mt-[104px] "
    >
      {SECTIONS(48).map(
        (item) =>
          item.text && (
            <li
              key={item.id}
              className={`text-gray-800 font-semibold cursor-pointer min-w-36 ${
                panel === item.id ? "active" : ""
              }`}
            >
              {panel === item.id ? (
                <a
                  href={item.id}
                  className="flex justify-center items-center gap-4 section md:text-md lg:text-lg xl:text-xl"
                >
                  <span>{item.icon}</span>
                  {panel === item.id ? item.text : ""}
                </a>
              ) : (
                <a
                  href={item.id}
                  className="flex justify-center items-center gap-4 section md:text-md lg:text-lg xl:text-xl"
                >
                  <span>{item.icon}</span>
                  {panel === item.id ? item.text : ""}
                </a>
              )}
            </li>
          )
      )}
    </ul>
  );

  const selectItem = SECTIONS(28).find((item) => item.id === panel);

  const mobileTab = (
    <ul
      id="myTab"
      className="tabs flex items-center relative bottom-0 inset-x-0 h-16 nav nav-tabs mt-9"
    >
      <div className="pr-4">
        <img alt="" src={BitmeshLogo} className="w-20 sm:hidden" />
      </div>

      <li className="text-gray-800 font-semibold cursor-pointer min-w-36 active w-full">
        <a
          href={selectItem?.id}
          className="flex justify-center items-center gap-4 section text-xs w-full"
        >
          <span>{selectItem?.icon}</span>
          {selectItem?.text}
        </a>
      </li>
      <Menu />
    </ul>
  );

  return (
    <div className="App w-full h-full bg-[#080808]">
      <div className="h-full">
        <Header />
      </div>
      <div id="tab-contents" className="relative">
        {renderTabContent(panel)}
        {isMobile ? tabs : mobileTab}
      </div>
      <Footer />
    </div>
  );
}

export default App;

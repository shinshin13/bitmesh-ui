import "./App.css";
import BuildYourWorld from "./components/modules/build-your-world";
import CreateYourStory from "./components/modules/create-your-story";
import Header from "./components/modules/header";
import TheEconomy from "./components/modules/the-economy";
import WhatIsMesh from "./components/modules/what-is-mesh";
import { SECTIONS } from "./utils/constants/sections";
import { useState } from "react";
import NativeNftCollection from "./components/native-nft-collection";

import Behind from "./components/modules/behind-the-scene";
import Technology from "./components/modules/our-technology";
import Footer from "./components/modules/footer";

function App() {
  const [panel, setPanel] = useState<string>(SECTIONS(40)[0].id);

  window.addEventListener("popstate", () => {
    setPanel(window?.location?.hash);
    const section = document.getElementById(window?.location?.hash);
    if (section) {
      const sectionTop = section.offsetTop;
      window.scrollTo({
        top: sectionTop,
        behavior: "smooth",
      });
    }
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
      className="tabs flex justify-center items-center relative bottom-0 inset-x-0 h-24 nav nav-tabs mt-[104px]"
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
                  className="flex justify-center items-center gap-4 section"
                >
                  <span>{item.icon}</span>
                  {panel === item.id ? item.text : ""}
                </a>
              ) : (
                <a
                  href={item.id}
                  className="flex justify-center items-center gap-4 section"
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
  return (
    <div className="App w-full h-full bg-[#080808]">
      <div className="h-full ">
        <Header />
      </div>
      <div id="tab-contents" className="overflow-x-hidden">
        {renderTabContent(panel)}
        {tabs}
      </div>
      <Footer />
    </div>
  );
}

export default App;

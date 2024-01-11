import React, { useState } from "react";
import "./App.css";
import BuildYourWorld from "./components/modules/build-your-world";
import CreateYourStory from "./components/modules/create-your-story";
import Header from "./components/modules/header";
import TheEconomy from "./components/modules/the-economy";
import WhatIsMesh from "./components/modules/what-is-mesh";
import { SECTIONS } from "./utils/constants/sections";
import NativeNftCollection from "./component/modules/native-nft-collection";

function App() {
  const [panel, setPanel] = useState<number>(1);

  const handleSelectPanel = (id: number) => {
    setPanel(id);
  };

  const renderTabContent = (id: number) => {
    switch (id) {
      case 1:
        return <WhatIsMesh />;
      case 2:
        return <CreateYourStory />;
      case 3:
        return <BuildYourWorld />;
      case 4:
        return <TheEconomy />;
      case 6:
        return <NativeNftCollection />;
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
              onClick={() => handleSelectPanel(item.id)}
            >
              {panel === item.id ? (
                <div className="flex justify-center items-center gap-4 section">
                  <span>{item.icon}</span>
                  {panel === item.id ? item.text : ""}
                </div>
              ) : (
                <div className="flex justify-center items-center gap-4 section">
                  <span>{item.icon}</span>
                  {panel === item.id ? item.text : ""}
                </div>
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
    </div>
  );
}

export default App;

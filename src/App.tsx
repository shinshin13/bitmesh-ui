import React, { useState } from "react";
import "./App.css";
import Header from "./component/modules/header";
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
        return <Header />;
      case 6:
        return <NativeNftCollection />;
      default:
        break;
    }
  };

  return (
    <div className="App w-full h-full">
      <div id="tab-contents">{renderTabContent(panel)}</div>
      <ul
        id="tabs"
        className="inline-flex pt-2 px-1 w-full border-b mt-auto h-24"
      >
        {SECTIONS.map(
          (item) =>
            item.text && (
              <li
                key={item.id}
                className={`px-4 text-gray-800 font-semibold py-2 cursor-pointer ${
                  panel === item.id
                    ? "rounded-t border-t border-r border-l -mb-px"
                    : ""
                }`}
                onClick={() => handleSelectPanel(item.id)}
              >
                <div key={item.id}>{item.text}</div>
              </li>
            )
        )}
      </ul>
    </div>
  );
}

export default App;

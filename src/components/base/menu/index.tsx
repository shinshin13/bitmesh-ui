import { useState } from "react";
import { MenuIcon } from "../../../assets/icon/menu.icon";
import { SECTIONS } from "../../../utils/constants/sections";

export const Menu = () => {
  const [open, setOpen] = useState(false);

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

  return (
    <div className="bg-[#1616160] w-12 h-12 ml-4 flex justify-center items-center">
      <ul>
        <li>
          <button
            onClick={() => setOpen(!open)}
            className="flex-none z-30 relative"
          >
            <MenuIcon />
          </button>
          <div
            className={`${
              open ? "visible opacity-40" : "invisible opacity-0"
            } absolute top-0 right-0 z-10 w-full bg-black transition`}
          />
          <div
            className={`${
              open ? "visible opacity-100" : "hidden invisible opacity-0"
            } absolute right-0 z-20 w-screen px-5 mt-6 transition`}
          >
            <ul className="flex flex-col bg-[#161616] w-full rounded shadow-md overflow-hidden">
              {SECTIONS(16).map((item) =>
                item.text && item.id !== panel ? (
                  <li key={item.id} className="font-semibold cursor-pointer">
                    <a
                      href={item.id}
                      onClick={() => setOpen(false)}
                      className="flex flex-1 text-sm text-white hover:bg-[#ffffff4d] font-semibold px-4 py-2 text-xs"
                    >
                      <span className="mr-2">{item.icon}</span>
                      {item.text}
                    </a>
                  </li>
                ) : null
              )}
            </ul>
          </div>
        </li>
      </ul>
    </div>
  );
};

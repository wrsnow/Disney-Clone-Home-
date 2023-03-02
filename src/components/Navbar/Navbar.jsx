import React, { useState } from "react";
import DisneyLogo from "../Icons/DisneyLogo";
import { RiMenuLine } from "react-icons/ri";
import NavItems from "./NavItems";
import ProfileIcon from "./ProfileIcon";

function Navbar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <nav className="w-full bg-black text-white flex items-center pb-6 pt-3 flex-wrap">
      <a href="#" className="w-28">
        <DisneyLogo />
      </a>
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="ml-auto mr-5 md:hidden block"
      >
        <RiMenuLine size={40} />
      </button>
      <div
        className={`${
          isCollapsed ? "flex" : "hidden"
        } md:flex md:flex-row flex-col md:items-center items-start flex-grow w-full md:w-fit`}
      >
        <ProfileIcon className="md:hidden flex my-3" />
        <NavItems />
        <ProfileIcon className="md:flex hidden" />
      </div>
    </nav>
  );
}

export default Navbar;

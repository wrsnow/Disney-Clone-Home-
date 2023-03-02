import React from "react";

function NavItem({ icon, title, className }) {
  return (
    <li className="md:hover:bg-white/25 md:active:bg-white/50 hover:bg-white/25 active:bg-white/50 md:p-1 p-4">
      <button className="flex gap-2 items-center">
        <span>{icon}</span>
        <span className="uppercase">{title}</span>
      </button>
    </li>
  );
}

export default NavItem;

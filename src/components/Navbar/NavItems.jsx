import {
  BsSearch,
  BsHouseDoorFill,
  BsPlusLg,
  BsStarFill,
} from "react-icons/bs";
import { RiMovie2Fill, RiTvFill } from "react-icons/ri";
import NavItem from "./NavItem";

function NavItems() {
  return (
    <ul className="flex md:flex-row flex-col md:w-fit w-full md:gap-5 gap-0 md:ml-5 ml-0 text-sm ">
      <NavItem icon={<BsHouseDoorFill />} title="Home" />
      <NavItem icon={<BsSearch />} title="Search" />
      <NavItem icon={<BsPlusLg />} title="WatchList" />
      <NavItem icon={<BsStarFill />} title="Originals" />
      <NavItem icon={<RiMovie2Fill />} title="Movies" />
      <NavItem icon={<RiTvFill />} title="Series" />
    </ul>
  );
}

export default NavItems;

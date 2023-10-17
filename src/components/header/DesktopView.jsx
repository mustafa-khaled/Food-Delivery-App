import { NavLink } from "react-router-dom";
import { headerLinks } from "../../data/staticData";
import { MdShoppingBasket } from "react-icons/md";
import { motion } from "framer-motion";

import Logo from "./Logo";
import Avatar from "./Avatar";

function DesktopView({ setShowConfirmDelete }) {
  return (
    <div className="hidden h-full w-full items-center justify-between gap-8 md:flex">
      {/* Logo  */}
      <Logo />

      {/* Links */}
      <motion.ul
        initial={{ opacity: 0, x: 200 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 200 }}
        className=" flex items-center gap-[20px]"
      >
        {headerLinks.map((l) => {
          return (
            <li key={l.id} className="text-base  font-bold hover:text-yellow">
              <NavLink to={l.to}>{l.title}</NavLink>
            </li>
          );
        })}
      </motion.ul>

      {/* Cart Icon & User Image */}
      <div className="flex items-center gap-[20px]">
        <div className="relative cursor-pointer">
          <MdShoppingBasket className="text-2xl" />
          <span
            className="absolute right-[-8px] top-[-5px] flex h-[18px] w-[18px]
              items-center justify-center rounded-full bg-yellow text-sm font-bold"
          >
            3
          </span>
        </div>
        {/* User Image  */}
        <Avatar setShowConfirmDelete={setShowConfirmDelete} />
      </div>
    </div>
  );
}

export default DesktopView;

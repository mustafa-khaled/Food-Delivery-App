import { useState } from "react";
import { MdList } from "react-icons/md";

import Avatar from "./Avatar";
import HeaderLinks from "./HeaderLinks";
import Logo from "./Logo";
import CartIcon from "./CartIcon";

function MobileView({ setShowConfirmDelete }) {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <div className="relative flex h-full w-full items-center justify-between md:hidden ">
      <Logo small={true} />
      {/* Overlay */}
      <div
        onClick={() => setShowLinks(false)}
        className={`fixed left-0 top-[60px] ${
          showLinks ? "h-full" : "h-0"
        } w-full bg-[#00000080]`}
      ></div>
      <HeaderLinks
        styles={`fixed flex items-center gap-[20px] flex-col duration-300 transition-right z-50 ${
          showLinks ? "left-[5%]" : "left-[-200%]"
        } top-[70px] bg-white w-[90%] p-[20px]`}
      />
      <div className="flex items-center gap-[20px]">
        <Avatar setShowConfirmDelete={setShowConfirmDelete} />
        <CartIcon />
        <MdList
          className="cursor-pointer text-2xl"
          onClick={() => setShowLinks((prev) => !prev)}
        />
      </div>
    </div>
  );
}

export default MobileView;

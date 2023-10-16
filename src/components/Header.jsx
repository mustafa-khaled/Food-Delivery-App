import { NavLink } from "react-router-dom";
import { headerLinks } from "../data/staticData";
import { MdShoppingBasket } from "react-icons/md";

import Container from "./Container";
import logoImage from "../assets/logo.png";
import avatarImage from "../assets/avatar.png";

function Header() {
  return (
    <header className="fixed z-50 flex h-[60px] w-screen items-center justify-center bg-white">
      <Container>
        {/* Desktop & Tablet */}
        <div className="hidden h-full w-full items-center justify-between gap-8 md:flex">
          {/* Logo  */}
          <img src={logoImage} alt="LogoImage" className="w-[100px]" />

          {/* Links */}
          <ul className=" flex items-center gap-[20px]">
            {headerLinks.map((l) => {
              return (
                <li
                  key={l.id}
                  className="hover:text-yellow  text-base font-bold"
                >
                  <NavLink to={l.to}>{l.title}</NavLink>
                </li>
              );
            })}
          </ul>

          {/* Cart Icon & User Image */}
          <div className="flex items-center gap-[20px]">
            <div className="relative cursor-pointer">
              <MdShoppingBasket className="text-2xl" />
              <span
                className="bg-yellow absolute right-[-8px] top-[-5px] flex h-[18px] 
              w-[18px] items-center justify-center rounded-full text-sm font-bold"
              >
                3
              </span>
            </div>
            <img
              src={avatarImage}
              alt="User Avatar"
              className="w-[30px] drop-shadow-xl"
            />
          </div>
        </div>
        {/* Mobile */}
        <div className="flex h-full w-full bg-slate-500 md:hidden">Header</div>
      </Container>
    </header>
  );
}

export default Header;

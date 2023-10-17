import { Link, NavLink, useNavigate } from "react-router-dom";
import { headerLinks } from "../data/staticData";
import { MdShoppingBasket, MdLogout } from "react-icons/md";
import { useState } from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

import Container from "./Container";
import logoImage from "../assets/logo.png";
import avatarImage from "../assets/avatar.png";
import noUserImage from "../assets/user.png";
import ConfirmLogout from "./ConfirmLogout";

function Header() {
  const navigate = useNavigate();

  const user = useSelector((state) => state.auth.user);
  const [showLoginBtn, setShowLoginBtn] = useState(false);
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);

  const handleClickAvatar = () => {
    if (user) {
      setShowLoginBtn((prev) => !prev);
    } else {
      navigate("/login");
    }
  };

  return (
    <header className="fixed z-50 flex h-[60px] w-screen items-center justify-center bg-white">
      <Container>
        {/* Desktop & Tablet */}
        <div className="hidden h-full w-full items-center justify-between gap-8 md:flex">
          {/* Logo  */}
          <Link to="/">
            <img src={logoImage} alt="LogoImage" className="w-[100px]" />
          </Link>

          {/* Links */}
          <ul className=" flex items-center gap-[20px]">
            {headerLinks.map((l) => {
              return (
                <li
                  key={l.id}
                  className="text-base  font-bold hover:text-yellow"
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
                className="absolute right-[-8px] top-[-5px] flex h-[18px] w-[18px]
              items-center justify-center rounded-full bg-yellow text-sm font-bold"
              >
                3
              </span>
            </div>
            {/* User Image  */}

            <div
              className="relative cursor-pointer"
              onClick={handleClickAvatar}
            >
              <motion.img
                whileTap={{ scale: 0.6 }}
                src={user ? avatarImage : noUserImage}
                alt="User Avatar"
                className="w-[30px] drop-shadow-xl"
              />
              {showLoginBtn && (
                <div
                  className="absolute right-0 top-[40px] flex w-[100px] items-center justify-between rounded-full
                 bg-white p-[5px] text-center text-sm drop-shadow-xl"
                  onClick={() => setShowConfirmDelete(true)}
                >
                  <p>Log out</p>
                  <MdLogout />
                </div>
              )}
            </div>
          </div>
        </div>
        {/* Mobile */}
        <div className="flex h-full w-full bg-slate-500 md:hidden">Header</div>
      </Container>

      {showConfirmDelete && (
        <ConfirmLogout setShowConfirmDelete={setShowConfirmDelete} />
      )}
    </header>
  );
}

export default Header;

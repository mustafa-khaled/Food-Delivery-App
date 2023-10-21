import { useState } from "react";
import { MdList } from "react-icons/md";

import Container from "../Container";
import ConfirmLogout from "../ConfirmLogout";
import Cart from "../cart/Cart";
import Logo from "./Logo";
import HeaderLinksDesktop from "./HeaderLinksDesktop";
import Avatar from "./Avatar";
import CartIcon from "./CartIcon";
import HeaderLinksMobile from "./HeaderLinksMobile";

function Header() {
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showLinks, setShowLinks] = useState(false);

  const toggleShowCart = () => {
    setShowCart((prev) => !prev);
    setShowLinks(false);
  };

  const toggleShowLinks = () => {
    setShowLinks((prev) => !prev);
    setShowCart(false);
  };

  return (
    <header className="fixed z-50 flex h-[60px] w-screen items-center justify-center bg-white">
      <Container>
        <div className="flex items-center justify-between">
          <Logo />

          <div className="hidden md:block">
            <HeaderLinksDesktop />
          </div>

          <div className="block md:hidden">
            <HeaderLinksMobile
              showLinks={showLinks}
              setShowLinks={setShowLinks}
            />
          </div>

          <div className="flex items-center gap-[20px] ">
            <CartIcon toggleShowCart={toggleShowCart} />
            <Avatar setShowConfirmDelete={setShowConfirmDelete} />
            <MdList
              className="block cursor-pointer text-2xl md:hidden"
              onClick={() => toggleShowLinks()}
            />
          </div>
        </div>
      </Container>

      {showConfirmDelete && (
        <ConfirmLogout setShowConfirmDelete={setShowConfirmDelete} />
      )}

      <Cart showCart={showCart} setShowCart={setShowCart} />
    </header>
  );
}

export default Header;

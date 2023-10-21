import { useState } from "react";

import Container from "../Container";
import ConfirmLogout from "../ConfirmLogout";
import DesktopView from "./DesktopView";
import MobileView from "./MobileView";
import Cart from "./Cart";

function Header() {
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);
  const [showCart, setShowCart] = useState(false);

  return (
    <header className="fixed z-50 flex h-[60px] w-screen items-center justify-center bg-white">
      <Container>
        {/* Desktop & Tablet */}
        <DesktopView
          setShowConfirmDelete={setShowConfirmDelete}
          setShowCart={setShowCart}
        />
        {/* Mobile */}
        <MobileView
          setShowConfirmDelete={setShowConfirmDelete}
          setShowCart={setShowCart}
        />
      </Container>

      {showConfirmDelete && (
        <ConfirmLogout setShowConfirmDelete={setShowConfirmDelete} />
      )}
      {showCart && <Cart showCart={showCart} setShowCart={setShowCart} />}
    </header>
  );
}

export default Header;

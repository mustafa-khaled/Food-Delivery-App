import { useState } from "react";

import Container from "../Container";
import ConfirmLogout from "../ConfirmLogout";
import DesktopView from "./DesktopView";
import MobileView from "./MobileView";

function Header() {
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);
  return (
    <header className="fixed z-50 flex h-[60px] w-screen items-center justify-center bg-white">
      <Container>
        {/* Desktop & Tablet */}
        <DesktopView setShowConfirmDelete={setShowConfirmDelete} />
        {/* Mobile */}
        <MobileView setShowConfirmDelete={setShowConfirmDelete} />
      </Container>

      {showConfirmDelete && (
        <ConfirmLogout setShowConfirmDelete={setShowConfirmDelete} />
      )}
    </header>
  );
}

export default Header;

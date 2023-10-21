import Logo from "./Logo";
import Avatar from "./Avatar";
import HeaderLinks from "./HeaderLinks";
import CartIcon from "./CartIcon";

function DesktopView({ setShowConfirmDelete, setShowCart }) {
  return (
    <div className="hidden h-full w-full items-center justify-between gap-8 md:flex">
      {/* Logo  */}
      <Logo />

      {/* Links */}
      <HeaderLinks styles={"flex items-center gap-[20px]"} />

      {/* Cart Icon & User Image */}
      <div className="flex items-center gap-[20px]">
        <CartIcon setShowCart={setShowCart} />
        {/* User Image  */}
        <Avatar setShowConfirmDelete={setShowConfirmDelete} />
      </div>
    </div>
  );
}

export default DesktopView;

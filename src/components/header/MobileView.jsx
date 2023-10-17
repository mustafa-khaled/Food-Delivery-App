import Avatar from "./Avatar";
import Logo from "./Logo";

function MobileView({ setShowConfirmDelete }) {
  return (
    <div className="flex h-full w-full items-center justify-between md:hidden">
      <Logo small={true} />
      <Avatar setShowConfirmDelete={setShowConfirmDelete} />
    </div>
  );
}

export default MobileView;

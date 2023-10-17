import { useDispatch } from "react-redux";
import { logoutUser } from "../redux/features/authSlice";
import { useOutsideClick } from "../hooks/useOutsideClick";

import Button from "./Button";

function ConfirmLogout({ setShowConfirmDelete }) {
  const dispatch = useDispatch();
  const modalRef = useOutsideClick(() => setShowConfirmDelete(false));

  const handleLogout = () => {
    dispatch(logoutUser());
    setShowConfirmDelete(false);
  };

  return (
    <div className="fixed left-0 top-0 flex h-screen w-screen items-center justify-center bg-[#00000080]">
      <div
        ref={modalRef}
        className="w-[400px] rounded-xl bg-white p-[20px] text-center font-bold"
      >
        Are You Sure You Want To Logout?
        <div className="mt-[10px] flex items-center justify-center gap-[10px]">
          <Button onClick={() => handleLogout()} variation="secondary">
            Logout
          </Button>
          <Button onClick={() => setShowConfirmDelete(false)}>Cancel</Button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmLogout;

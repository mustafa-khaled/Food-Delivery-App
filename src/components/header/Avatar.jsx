import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { MdLogout } from "react-icons/md";

import noUserImage from "../../assets/user.png";
import avatarImage from "../../assets/avatar.png";

function Avatar({ setShowConfirmDelete }) {
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);

  const [showLoginBtn, setShowLoginBtn] = useState(false);

  const handleClickAvatar = () => {
    if (user) {
      setShowLoginBtn((prev) => !prev);
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="relative cursor-pointer" onClick={handleClickAvatar}>
      <motion.img
        whileTap={{ scale: 0.6 }}
        src={user ? avatarImage : noUserImage}
        alt="User Avatar"
        className="w-[30px] drop-shadow-xl"
      />
      {showLoginBtn && (
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.6 }}
          className="absolute right-0 top-[40px] flex w-[100px] items-center justify-between bg-white
                 p-[5px] text-center text-sm drop-shadow-xl hover:bg-slate-100 "
          onClick={() => setShowConfirmDelete(true)}
        >
          <p>Log out</p>
          <MdLogout />
        </motion.div>
      )}
    </div>
  );
}

export default Avatar;

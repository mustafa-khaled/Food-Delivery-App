import { Link } from "react-router-dom";
import { MdOutlineEast } from "react-icons/md";

function NoUser() {
  return (
    <div className="flex min-h-[calc(100vh-80px)] flex-col items-center justify-center gap-[10px]  text-center">
      <h3 className="text-4xl">You have to login to complete your order.</h3>
      <Link
        to={"/login"}
        className="flex items-center justify-center gap-[10px]  hover:text-darkYellow"
      >
        Login!
        <MdOutlineEast className="text-xl font-bold" />
      </Link>
    </div>
  );
}

export default NoUser;

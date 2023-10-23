import { Link } from "react-router-dom";
import { HiExclamationCircle } from "react-icons/hi";

function NotFound() {
  return (
    <div className="container mx-auto flex h-[80vh] items-center justify-center px-[10px] text-center">
      <div>
        <HiExclamationCircle className="mx-auto text-6xl" />
        <h1 className="my-[10px] mb-[5p] text-3xl">Page Not Found.</h1>
        <Link
          to={"/"}
          replace
          className="text-gray-400 text-lg hover:text-darkYellow"
        >
          Go To Home Page!
        </Link>
      </div>
    </div>
  );
}

export default NotFound;

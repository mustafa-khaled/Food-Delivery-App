import { Link } from "react-router-dom";

function EmptyCart() {
  return (
    <div className="flex h-[300px] items-center justify-center  text-center">
      <div>
        <h3 className="mb-[10px] text-2xl font-bold uppercase">
          Cart Is Empty
        </h3>
        <Link to={"/menu"} className="hover:text-darkYellow">
          Go Menu!
        </Link>
      </div>
    </div>
  );
}

export default EmptyCart;

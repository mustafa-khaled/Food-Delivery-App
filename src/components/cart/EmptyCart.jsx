import { Link } from "react-router-dom";
import { AiOutlineMeh } from "react-icons/ai";

function EmptyCart() {
  return (
    <div className="flex h-[300px] items-center justify-center  text-center">
      <div>
        <AiOutlineMeh className="mx-auto text-5xl" />
        <h3 className="my-[10px] text-xl font-bold uppercase">Cart Is Empty</h3>
        <Link to={"/menu"} className="hover:text-darkYellow">
          Go Menu!
        </Link>
      </div>
    </div>
  );
}

export default EmptyCart;

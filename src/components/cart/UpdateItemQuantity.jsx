import { useDispatch } from "react-redux";
import {
  decreaseItemQuantity,
  increaseItemQuantity,
} from "../../redux/features/cartSlice";

function UpdateItemQuantity({ id, currentQuantity }) {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center gap-1 md:gap-3">
      <button
        className="flex h-[25px] w-[25px] items-center justify-center rounded-full bg-yellow hover:bg-white"
        onClick={() => dispatch(decreaseItemQuantity(id))}
      >
        -
      </button>
      <span className="text-sm font-medium">{currentQuantity}</span>
      <button
        className="flex h-[25px] w-[25px] items-center justify-center rounded-full bg-yellow hover:bg-white"
        onClick={() => dispatch(increaseItemQuantity(id))}
      >
        +
      </button>
    </div>
  );
}

export default UpdateItemQuantity;

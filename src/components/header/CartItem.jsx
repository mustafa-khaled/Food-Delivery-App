import { useDispatch } from "react-redux";
import {
  decreaseItemQuantity,
  increaseItemQuantity,
} from "../../redux/features/cartSlice";

function CartItem({ item }) {
  const { image, title, qty } = item;
  const dispatch = useDispatch();

  return (
    <div
      className="flex items-center justify-between gap-[10px] border-b border-gray 
    px-[10px] py-[5px]"
    >
      <img src={image} alt="" className="w-[50px]" />
      <div className="mr-auto font-bold">
        <h5 className="text-sm">{title}</h5>
        <span className="text-xs">price</span>
      </div>

      <div className="flex items-center gap-[5px] text-sm font-bold">
        <button
          onClick={() => dispatch(decreaseItemQuantity(image))}
          className="flex h-[20px] w-[20px] items-center justify-center rounded-full bg-darkGray"
        >
          -
        </button>
        <span>{qty}</span>
        <button
          onClick={() => dispatch(increaseItemQuantity(image))}
          className="flex h-[20px] w-[20px] items-center justify-center rounded-full bg-darkGray"
        >
          +
        </button>
      </div>
    </div>
  );
}

export default CartItem;

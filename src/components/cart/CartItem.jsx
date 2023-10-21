import { formatCurrency } from "../../utils/helpers";
import UpdateItemQuantity from "./UpdateItemQuantity";

function CartItem({ item }) {
  const { image, title, qty, id, price } = item;

  return (
    <div
      className="flex items-center justify-between gap-[10px] border-b border-gray 
    px-[10px] py-[5px]"
    >
      <img src={image} alt="" className="w-[50px]" />
      <div className="mr-auto font-bold">
        <h5 className="text-sm">{title}</h5>
        <span className="text-xs">
          {formatCurrency(price)} {qty > 1 && `x ${qty}`}
        </span>
      </div>

      <UpdateItemQuantity id={id} currentQuantity={qty} />
    </div>
  );
}

export default CartItem;

import { MdShoppingBasket } from "react-icons/md";

function CartIcon() {
  return (
    <div className="relative cursor-pointer">
      <MdShoppingBasket className="text-2xl" />
      <span
        className="absolute right-[-8px] top-[-5px] flex h-[18px] w-[18px]
              items-center justify-center rounded-full bg-yellow text-sm font-bold"
      >
        3
      </span>
    </div>
  );
}

export default CartIcon;

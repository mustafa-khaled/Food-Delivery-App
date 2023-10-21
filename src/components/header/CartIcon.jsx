import { MdShoppingBasket } from "react-icons/md";
import { useSelector } from "react-redux";

function CartIcon({ toggleShowCart }) {
  const cartItemsNum = useSelector((state) => state.cart.cart.length);

  return (
    <div className="relative cursor-pointer" onClick={() => toggleShowCart()}>
      <MdShoppingBasket className="text-2xl" />
      <span
        className="absolute right-[-8px] top-[-5px] flex h-[18px] w-[18px]
              items-center justify-center rounded-full bg-yellow text-sm font-bold"
      >
        {cartItemsNum}
      </span>
    </div>
  );
}

export default CartIcon;

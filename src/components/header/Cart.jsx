import { MdClose } from "react-icons/md";
import { formatCurrency } from "../../utils/helpers";
import { useSelector } from "react-redux";

import Button from "../Button";
import CartItem from "./CartItem";

function Cart({ showCart, setShowCart }) {
  const cartItems = useSelector((state) => state.cart.cart);

  console.log(cartItems);

  return (
    <>
      <div
        className={`transition-right fixed  z-50  duration-300 ease-in-out ${
          showCart ? "right-0" : "right-[-300px]"
        } top-[60px]
      h-[calc(100vh-60px)] w-[300px] border-l-[3px] border-t-[3px] border-gray bg-white`}
      >
        <div className="flex h-[40px] items-center justify-between bg-gray px-[10px] font-bold">
          <p>Shopping Cart</p>
          <MdClose
            className="cursor-pointer text-xl"
            onClick={() => setShowCart(false)}
          />
        </div>

        <div className=" flex h-[calc(100%-40px)] flex-col justify-between ">
          <div className="mt-[10px] flex flex-col gap-[10px] overflow-y-auto">
            {cartItems?.map((item) => {
              return <CartItem item={item} key={item.image} />;
            })}
          </div>

          <div className="text-center">
            <div className="mb-[10px] flex items-center justify-between bg-gray p-[10px]">
              <h5 className="font-bold">Total:</h5>
              <p>{formatCurrency(450)} </p>
            </div>
            <div className="p-[10px]">
              <Button styles="w-full">Check Out</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay */}
      <div
        className={`fixed left-0 top-[60px] z-20 ${
          showCart ? "h-full" : "h-0"
        } w-full bg-[#00000080]`}
        onClick={() => setShowCart(false)}
      ></div>
    </>
  );
}

export default Cart;

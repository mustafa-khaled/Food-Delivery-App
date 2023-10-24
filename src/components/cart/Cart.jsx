import { MdClose } from "react-icons/md";
import { formatCurrency } from "../../utils/helpers";
import { useDispatch, useSelector } from "react-redux";
import {
  clearCart,
  getCart,
  getTotalCartPrise,
} from "../../redux/features/cartSlice";

import Button from "../Button";
import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";
import { useNavigate } from "react-router-dom";

function Cart({ showCart, setShowCart }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cartItems = useSelector(getCart);
  const totalPrice = useSelector(getTotalCartPrise);

  return (
    <>
      <div
        className={`transition-right fixed  z-50  duration-300 ease-in-out ${
          showCart ? "right-0" : "right-[-100%]"
        } top-[60px]
      h-[calc(100vh-60px)] w-full border-l-[3px] border-t-[3px] border-gray bg-white md:w-[400px]`}
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
            {cartItems?.length > 0 ? (
              cartItems?.map((item) => {
                return <CartItem item={item} key={item.image} />;
              })
            ) : (
              <EmptyCart />
            )}
          </div>

          <div className="text-center">
            <div className="mb-[10px] flex items-center justify-between bg-gray p-[10px]">
              <h5 className="font-bold">Total:</h5>
              <p>{formatCurrency(totalPrice || 0)} </p>
            </div>

            {cartItems?.length > 0 && (
              <div className="flex items-center gap-[10px] p-[10px]">
                <Button styles="w-full" onClick={() => navigate("/orders")}>
                  Order Now
                </Button>
                <Button
                  styles="w-full"
                  variation="secondary"
                  onClick={() => dispatch(clearCart())}
                >
                  Clear Cart
                </Button>
              </div>
            )}
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

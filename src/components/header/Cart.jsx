import { MdClose } from "react-icons/md";
import { useOutsideClick } from "../../hooks/useOutsideClick";

function Cart({ showCart, setShowCart }) {
  const cartRef = useOutsideClick(() => setShowCart(false));

  return (
    <>
      <div
        ref={cartRef}
        className={`transition-right fixed  z-50 duration-300 ease-in-out ${
          showCart ? "right-0" : "right-[-300px]"
        } top-[60px]
      h-[calc(100vh-60px)] w-[300px] border-l-[3px] border-t-[3px] border-gray bg-white`}
      >
        <div className="flex items-center justify-between bg-gray p-[10px] font-bold">
          <p>Shopping Cart</p>
          <MdClose
            className="cursor-pointer text-xl"
            onClick={() => setShowCart(false)}
          />
        </div>
      </div>

      {/* Overlay */}
      <div
        className={`fixed left-0 top-[60px] z-20 ${
          showCart ? "h-full" : "h-0"
        } w-full bg-[#00000080]`}
      ></div>
    </>
  );
}

export default Cart;

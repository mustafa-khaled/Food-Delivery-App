import { useDispatch, useSelector } from "react-redux";
import { deleteItem } from "../../redux/features/cartSlice";

import NoUser from "./NoUser";
import Button from "../Button";
import UpdateItemQuantity from "../cart/UpdateItemQuantity";
import { formatCurrency } from "../../utils/helpers";

function OrdersList() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const cart = useSelector((state) => state.cart.cart);

  console.log(cart);

  if (!user) return <NoUser />;
  return (
    <div className="flex min-h-[calc(100vh-80px)] flex-col items-start gap-[20px] md:flex-row">
      <div className="w-full bg-red-400 md:w-[50%]">Form</div>
      <div className="w-full ">
        {cart?.map((item) => {
          return (
            <div
              key={item.id}
              className="flex items-center justify-between border-b border-darkGray  py-[10px]"
            >
              <p className="text-lightGray">
                <span className="text-sm">x{item.qty}</span> {item.title}
              </p>
              <div className="flex items-center gap-[20px]">
                <span className="text-sm">{formatCurrency(item.price)}</span>
                <UpdateItemQuantity id={item.id} currentQuantity={item.qty} />
                <Button onClick={() => dispatch(deleteItem(item.id))}>
                  Delete
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default OrdersList;

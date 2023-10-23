import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteItem, getTotalCartPrise } from "../../redux/features/cartSlice";
import { formatCurrency } from "../../utils/helpers";

import NoUser from "./NoUser";
import Button from "../Button";
import UpdateItemQuantity from "../cart/UpdateItemQuantity";
import SectionHead from "../SectionHead";

const initialState = {
  name: "",
  phone: "",
  address: "",
};

function OrdersList() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const cart = useSelector((state) => state.cart.cart);
  const [values, setValues] = useState(initialState);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const { name, phone, address } = values;

  const totalPrice = useSelector(getTotalCartPrise);

  if (!user) return <NoUser />;
  return (
    <div className="min-h-[calc(100vh-80px)] ">
      <SectionHead title={"Order Now"} showLink={false} />
      <div className="flex flex-col items-start gap-[20px] md:flex-row">
        <div className="w-full md:w-[50%]">
          <form className="flex w-full flex-col items-center gap-[20px] p-[20px]">
            <input
              className="input"
              type="text"
              name="name"
              placeholder={"Your Name"}
              value={name}
              onChange={handleChange}
            />

            <input
              className="input"
              type="number"
              name="phone"
              placeholder={"Phone Number"}
              value={phone}
              onChange={handleChange}
            />

            <div className="flex w-full items-center gap-[10px] rounded-full border border-lightGray bg-gray  p-[10px]">
              <input
                className="w-full bg-transparent outline-none placeholder:text-sm"
                type="text"
                name="address"
                placeholder={"Address"}
                value={address}
                onChange={handleChange}
              />
              <button className="h-full w-[150px] rounded-xl bg-yellow py-[3px] text-sm hover:bg-darkYellow hover:text-white">
                Get Position
              </button>
            </div>
            <Button>Order Now For {formatCurrency(totalPrice)}</Button>
          </form>
        </div>

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
    </div>
  );
}

export default OrdersList;

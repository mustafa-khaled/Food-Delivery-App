import { MdStarRate, MdShoppingBasket } from "react-icons/md";
import { formatCurrency } from "../../utils/helpers";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  getCurrentQuantityById,
} from "../../redux/features/cartSlice";

import Button from "../Button";
import styles from "./MenuItem.module.css";
import toast from "react-hot-toast";

function MenuItem({ item }) {
  const dispatch = useDispatch();
  const { image, title, id, price } = item || {};
  const starCount = 5;

  const currentQuantity = useSelector(getCurrentQuantityById(id));
  const isInCart = currentQuantity > 0;

  return (
    <div
      className={`${styles["menu-item"]} cursor-pointer rounded-xl border border-darkGray p-[10px]`}
    >
      <div className="relative flex h-[250px] items-center justify-center rounded-xl px-[20px] py-[30px]">
        <motion.img
          whileHover={{ scale: 1.2 }}
          src={image}
          alt=""
          className="relative z-10 mx-auto w-[120px]"
        />
        <div className={`${styles["item-overlay"]}`}></div>
      </div>

      <div className="p-[20px]">
        <div className="flex items-center gap-[3px]">
          {Array.from({ length: starCount }, (_, index) => (
            <MdStarRate key={index} className="text-lg text-yellow" />
          ))}
        </div>
        <div className="my-[10px] flex items-start justify-between">
          <div>
            <h3 className="text-lg font-bold">{title}</h3>
            <span className="font-bold text-yellow">
              {formatCurrency(price)}
            </span>
          </div>

          {!isInCart && (
            <Button
              onClick={() => {
                dispatch(addItem(item));
                toast.success(`'${title}' added to cart successfully.`);
              }}
            >
              <MdShoppingBasket className="text-2xl" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default MenuItem;

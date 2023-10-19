import { MdStarRate, MdShoppingBasket } from "react-icons/md";
import { formatCurrency } from "../../utils/helpers";

import styles from "./MenuItem.module.css";

function MenuItem({ data }) {
  const { img } = data;
  const starCount = 5;

  return (
    <div
      className={`${styles["menu-item"]} cursor-pointer rounded-xl border border-darkGray p-[10px]`}
    >
      <div className="relative rounded-xl px-[20px] py-[30px]">
        <img src={img} alt="" className="relative z-10 mx-auto w-[200px]" />
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
            <h3 className="text-lg font-bold">Bacon Burger</h3>
            <span className="font-bold text-yellow">
              {formatCurrency(16.0)}
            </span>
          </div>
          <div className="self-end rounded-xl bg-yellow p-[10px] hover:bg-opacity-[0.8]">
            <MdShoppingBasket className="text-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuItem;

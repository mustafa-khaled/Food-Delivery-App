import ttp from "../../assets/product/d1.png";

function CartItem() {
  return (
    <div
      className="flex items-center justify-between gap-[10px] border-b border-gray 
    px-[10px] py-[5px]"
    >
      <img src={ttp} alt="" className="w-[50px]" />
      <div className="mr-auto font-bold">
        <h5 className="text-sm">Title for product</h5>
        <span className="text-xs">Price</span>
      </div>

      <div className="flex items-center gap-[5px]">
        <button className="flex h-[20px] w-[20px] items-center justify-center rounded-full bg-darkGray">
          -
        </button>
        <span>2</span>
        <button className="flex h-[20px] w-[20px] items-center justify-center rounded-full bg-darkGray">
          +
        </button>
      </div>
    </div>
  );
}

export default CartItem;

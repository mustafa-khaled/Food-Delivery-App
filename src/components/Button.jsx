function Button({ children, variation = "regular", onClick, styles }) {
  return (
    <button
      onClick={onClick}
      className={` rounded-md  ${
        variation === "secondary" ? "bg-gray" : "bg-yellow"
      } px-[10px] py-[5px] text-sm font-bold hover:bg-darkYellow  hover:text-white ${styles}`}
    >
      {children}
    </button>
  );
}

export default Button;

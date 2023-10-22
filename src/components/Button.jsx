function Button({ children, variation = "regular", onClick, styles }) {
  return (
    <button
      onClick={onClick}
      className={`rounded-lg ${
        variation === "secondary" ? "bg-gray" : "bg-yellow"
      } hover:bg-darkYellow px-[15px] py-[8px] font-bold  hover:text-white ${styles}`}
    >
      {children}
    </button>
  );
}

export default Button;

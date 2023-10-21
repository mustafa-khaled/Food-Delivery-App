function Button({ children, variation = "regular", onClick, styles }) {
  return (
    <button
      onClick={onClick}
      className={`rounded-xl ${
        variation === "secondary" ? "bg-gray" : "bg-yellow"
      } px-[15px] py-[8px] font-bold hover:bg-opacity-[0.8] ${styles}`}
    >
      {children}
    </button>
  );
}

export default Button;

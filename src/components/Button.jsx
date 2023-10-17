function Button({ children, variation = "regular", onClick }) {
  return (
    <button
      onClick={onClick}
      className={`rounded-xl ${
        variation === "secondary" ? "bg-gray" : "bg-yellow"
      } px-[10px] py-[5px] font-bold hover:opacity-[0.8]`}
    >
      {children}
    </button>
  );
}

export default Button;

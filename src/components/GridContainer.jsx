function GridContainer({ children }) {
  return (
    <div
      className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))]
  gap-[20px] md:grid-cols-[repeat(auto-fill,minmax(250px,1fr))]"
    >
      {children}
    </div>
  );
}

export default GridContainer;

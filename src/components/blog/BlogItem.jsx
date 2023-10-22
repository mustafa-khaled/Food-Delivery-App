function BlogItem({ blog }) {
  const { title, image } = blog;
  return (
    <div className="rounded-xl  border border-lightGray">
      <img
        src={image}
        alt={title}
        className="w-full rounded-t-xl object-cover"
      />
      <div className="p-[20px]">
        <h2 className="cursor-pointer text-2xl font-bold hover:text-darkYellow sm:text-4xl">
          {title}
        </h2>
        <p className="my-[10px] text-lightGray">
          Ac haca ullamcorper donec ante habi tasse donec imperdiet eturpis
          varius per a augue magna hac. Nec hac et vestibulum duis a tincidunt
          per a aptent interdum purus feugiat a id aliquet erat himenaeos nunc
          torquent euismod adipiscing adipiscing dui gravida justo.
        </p>
      </div>
    </div>
  );
}

export default BlogItem;

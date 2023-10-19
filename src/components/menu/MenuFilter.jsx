import { categoryData } from "../../data/staticData";

function MenuFilter({ category, setCategory }) {
  return (
    <div className="w-full rounded-xl border border-darkGray p-[20px] md:w-[280px] ">
      <h3 className="mb-[10px] text-xl font-bold">Categories</h3>

      <ul className="rounded-xl border border-darkGray bg-white p-[10px]">
        {categoryData.map((c) => {
          return (
            <li
              key={c.id}
              className={`mb-[5px] cursor-pointer rounded-xl border-b border-darkGray ${
                category === c.category && "bg-yellow"
              } px-[10px] py-[8px]`}
              onClick={() => setCategory(c.category)}
            >
              {c.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default MenuFilter;

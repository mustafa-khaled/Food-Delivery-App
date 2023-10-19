import { categoryDta } from "../../data/staticData";
import SectionHead from "../SectionHead";

function Category() {
  return (
    <div>
      <SectionHead title={"Category"} to={"/menu"} />
      <div className="flex items-center justify-between gap-[10px]">
        {categoryDta.map((img) => {
          return (
            <div
              key={img.id}
              className="w-[calc(100%/6)] rounded-xl bg-white p-[10px] sm:p-[20px]"
            >
              <img
                src={img.img}
                alt=""
                className="mx-auto w-[40px] sm:w-[50px]"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Category;

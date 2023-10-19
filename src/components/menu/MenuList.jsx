import { useEffect, useState } from "react";
import {
  SectionHead,
  MenuItem,
  GridContainer,
  MenuFilter,
  Loader,
} from "../../components";
import { productData } from "../../data/staticData";
// import { getAllMenuItems } from "../../redux/features/menuItemsSlice";
// import { useDispatch, useSelector } from "react-redux";

function MenuList() {
  // const dispatch = useDispatch();
  const [category, setCategory] = useState("all");

  // const { data, loading, error } = useSelector((state) => state.menu);

  const DataToShow =
    category === "all"
      ? productData
      : productData.filter((i) => i.category === category);

  // useEffect(() => {
  //   dispatch(getAllMenuItems());
  // }, [dispatch]);

  return (
    <div>
      <SectionHead title={"Our Menu"} showLink={false} />
      <div className="flex flex-col-reverse items-start gap-[20px] md:flex-row md:gap-[10px]">
        <div className="w-full">
          <GridContainer>
            {DataToShow.map((item) => {
              return <MenuItem data={item} key={item.id} />;
            })}
          </GridContainer>
        </div>

        <MenuFilter category={category} setCategory={setCategory} />
      </div>
    </div>
  );
}

export default MenuList;

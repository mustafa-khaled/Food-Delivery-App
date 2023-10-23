import { useEffect, useState } from "react";
import {
  SectionHead,
  MenuItem,
  GridContainer,
  MenuFilter,
  Loader,
} from "../../components";
import { getAllMenuItems } from "../../redux/features/menuItemsSlice";
import { useDispatch, useSelector } from "react-redux";
import Empty from "../Empty";

function MenuList() {
  const dispatch = useDispatch();
  const [category, setCategory] = useState("all");
  const { data, loading } = useSelector((state) => state.menu);

  const dataToShow =
    category === "all" ? data : data.filter((el) => el.category === category);

  useEffect(() => {
    dispatch(getAllMenuItems());
  }, [dispatch, category]);

  if (loading) return <Loader />;

  if (data?.length <= 0) return <Empty message={"No menu Data Available"} />;

  return (
    <div className="min-h-[calc(100vh-80px)]">
      <SectionHead title={"Our Menu"} showLink={false} />
      <div className="flex flex-col-reverse items-start gap-[20px] md:flex-row md:gap-[10px]">
        <div className="w-full">
          <GridContainer>
            {dataToShow?.map((item) => {
              return <MenuItem item={item} key={item.id} />;
            })}
          </GridContainer>
        </div>

        <MenuFilter category={category} setCategory={setCategory} />
      </div>
    </div>
  );
}

export default MenuList;

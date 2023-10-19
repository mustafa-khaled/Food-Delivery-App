import { useState } from "react";
import {
  SectionHead,
  MenuItem,
  GridContainer,
  MenuFilter,
  Loader,
} from "../../components";
import { productData } from "../../data/staticData";

function MenuList() {
  const [category, setCategory] = useState("all");

  const DataToShow = 0;

  return (
    <div>
      <SectionHead title={"Our Menu"} showLink={false} />
      <div className="flex flex-col-reverse items-start gap-[20px] md:flex-row md:gap-[10px]">
        <div className="w-full">
          <GridContainer>
            {productData.map((item) => {
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

// const dispatch = useDispatch();
// const { data, loading, error } = useSelector((state) => state.menu);

//   useEffect(() => {
//     dispatch(getAllMenuItems());
//   }, [dispatch]);

// if (loading) return <Loader />;

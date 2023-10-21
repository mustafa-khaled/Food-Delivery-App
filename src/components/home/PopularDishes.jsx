import { useDispatch, useSelector } from "react-redux";
import { SectionHead, MenuItem, GridContainer, Loader } from "../../components";
import { useEffect } from "react";
import { getAllMenuItems } from "../../redux/features/menuItemsSlice";

function PopularDishes() {
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state.menu);

  useEffect(() => {
    dispatch(getAllMenuItems());
  }, [dispatch]);

  if (loading) return <Loader />;

  return (
    <div>
      <SectionHead title={"Popular Dishes"} to={"/menu"} />

      <GridContainer>
        {data?.slice(0, 5).map((item) => {
          return <MenuItem item={item} key={item.id} />;
        })}
      </GridContainer>
    </div>
  );
}

export default PopularDishes;

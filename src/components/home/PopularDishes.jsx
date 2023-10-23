import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllMenuItems } from "../../redux/features/menuItemsSlice";
import Empty from "../Empty";
import SectionHead from "../SectionHead";
import GridContainer from "../GridContainer";
import MenuItem from "../menuItem/MenuItem";
import Loader from "../loader/Loader";

function PopularDishes() {
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state.menu);

  useEffect(() => {
    dispatch(getAllMenuItems());
  }, [dispatch]);

  if (loading) return <Loader />;

  if (data?.length <= 0)
    return <Empty message={"No Popular Dishes Available"} />;

  return (
    <div>
      <SectionHead title={"Popular Dishes"} to={"/menu"} />

      <GridContainer>
        {data?.slice(0, 5)?.map((item) => {
          return <MenuItem item={item} key={item.id} />;
        })}
      </GridContainer>
    </div>
  );
}

export default PopularDishes;

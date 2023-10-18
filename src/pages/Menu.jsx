import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllMenuItems } from "../redux/features/menuItemsSlice";
import { Container, Loader } from "../components";

function Menu() {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.menu);

  //   useEffect(() => {
  //     dispatch(getAllMenuItems());
  //   }, [dispatch]);

  if (loading) return <Loader />;

  return (
    <div>
      <Container>Data</Container>
    </div>
  );
}

export default Menu;

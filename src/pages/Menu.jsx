import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllMenuItems } from "../redux/features/menuItemsSlice";
import { Container, Loader } from "../components";

import { SectionHead, MenuItem, GridContainer } from "../components";

import image1 from "../assets/dish_01.png";
import image2 from "../assets/dish_02.png";
import image3 from "../assets/dish_03.png";
import image4 from "../assets/dish_04.png";

const arr = [
  { id: 1, img: image1 },
  { id: 2, img: image2 },
  { id: 3, img: image3 },
  { id: 4, img: image4 },
];

function Menu() {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.menu);

  //   useEffect(() => {
  //     dispatch(getAllMenuItems());
  //   }, [dispatch]);

  if (loading) return <Loader />;

  return (
    <div>
      <Container>
        <SectionHead title={"Our Menu"} />
        <GridContainer>
          {arr.map((item) => {
            return <MenuItem data={item} key={item.id} />;
          })}

          {arr.map((item) => {
            return <MenuItem data={item} key={item.id} />;
          })}

          {arr.map((item) => {
            return <MenuItem data={item} key={item.id} />;
          })}

          {arr.map((item) => {
            return <MenuItem data={item} key={item.id} />;
          })}
        </GridContainer>
      </Container>
    </div>
  );
}

export default Menu;

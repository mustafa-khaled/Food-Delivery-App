import { SectionHead, MenuItem, GridContainer } from "../../components";

import image1 from "../../assets/dish_01.png";
import image2 from "../../assets/dish_02.png";
import image3 from "../../assets/dish_03.png";
import image4 from "../../assets/dish_04.png";

const arr = [
  { id: 1, img: image1 },
  { id: 2, img: image2 },
  { id: 3, img: image3 },
  { id: 4, img: image4 },
];

function PopularDishes() {
  return (
    <div>
      <SectionHead title={"Popular Dishes"} to={"/menu"} showLink={false} />

      <GridContainer>
        {arr.map((item) => {
          return <MenuItem data={item} key={item.id} />;
        })}
        <MenuItem data={arr[1]} />;
      </GridContainer>
    </div>
  );
}

export default PopularDishes;

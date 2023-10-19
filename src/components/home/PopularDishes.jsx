import { SectionHead, MenuItem, GridContainer } from "../../components";
import { productData } from "../../data/staticData";

function PopularDishes() {
  return (
    <div>
      <SectionHead title={"Popular Dishes"} to={"/menu"} />

      <GridContainer>
        {productData?.slice(0, 6).map((item) => {
          return <MenuItem data={item} key={item.id} />;
        })}
      </GridContainer>
    </div>
  );
}

export default PopularDishes;

import Container from "../components/Container";
import HomeSlider from "../components/home/HomeSlider";
import PopularDishes from "../components/home/PopularDishes";

function Home() {
  return (
    <div className="pt-[20px]">
      <Container>
        <div className="flex flex-col gap-[50px] ">
          <HomeSlider />
          <PopularDishes />
        </div>
      </Container>
    </div>
  );
}

export default Home;

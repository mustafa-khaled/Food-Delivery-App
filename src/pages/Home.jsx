import { Container, HomeSlider, PopularDishes, Category } from "../components";

function Home() {
  return (
    <div>
      <Container>
        <div className="flex flex-col gap-[50px]">
          <HomeSlider />
          <Category />
          <PopularDishes />
        </div>
      </Container>
    </div>
  );
}

export default Home;

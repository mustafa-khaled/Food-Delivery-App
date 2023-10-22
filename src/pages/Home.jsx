import {
  Container,
  HomeSlider,
  PopularDishes,
  Category,
  AboutOurFood,
  ChooseWhatYouWant,
} from "../components";

function Home() {
  return (
    <div>
      <Container>
        <div className="flex flex-col gap-[60px]">
          <HomeSlider />
          <Category />
          <AboutOurFood />
          <PopularDishes />
          <ChooseWhatYouWant />
        </div>
      </Container>
    </div>
  );
}

export default Home;

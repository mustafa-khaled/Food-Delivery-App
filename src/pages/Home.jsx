import {
  Container,
  HomeSlider,
  PopularDishes,
  Category,
  OurBurger,
  ChooseWhatYouWant,
} from "../components";

function Home() {
  return (
    <Container>
      <div className="flex flex-col gap-[60px]">
        <HomeSlider />
        <Category />
        <OurBurger />
        <PopularDishes />
        <ChooseWhatYouWant />
      </div>
    </Container>
  );
}

export default Home;

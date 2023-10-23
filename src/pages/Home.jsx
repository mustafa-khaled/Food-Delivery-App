import {
  Container,
  HomeSlider,
  PopularDishes,
  Category,
  OurBurger,
  ChooseWhatYouWant,
  ClientRatings,
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
        <ClientRatings />
      </div>
    </Container>
  );
}

export default Home;

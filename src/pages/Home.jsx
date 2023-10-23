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
    <>
      <HomeSlider />
      <Container>
        <div className="mt-[60px] flex flex-col gap-[60px]">
          <Category />
          <OurBurger />
          <PopularDishes />
          <ChooseWhatYouWant />
          <ClientRatings />
        </div>
      </Container>
    </>
  );
}

export default Home;

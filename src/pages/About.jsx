import {
  Container,
  HeroSection,
  ChickenSection,
  OurBurger,
  PizzaSection,
  OurTeam,
  DeliverySection,
} from "../components";

function About() {
  return (
    <div className="mt-[20px]">
      <Container>
        <div className="flex flex-col gap-[60px]">
          <HeroSection />
          <ChickenSection />
          <OurBurger flex={"md:flex-row-reverse"} />
          <PizzaSection />
          <OurTeam />
        </div>
      </Container>
      <DeliverySection />
    </div>
  );
}

export default About;

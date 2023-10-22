import {
  Container,
  HeroSection,
  ChickenSection,
  OurBurger,
  PizzaSection,
  OurTeam,
} from "../components";

function About() {
  return (
    <Container>
      <div className="flex flex-col gap-[60px]">
        <HeroSection />
        <ChickenSection />
        <OurBurger flex={"md:flex-row-reverse"} />
        <PizzaSection />
        <OurTeam />
      </div>
    </Container>
  );
}

export default About;

import SectionFlexContainer from "../SectionFlexContainer";
import photo from "../../assets/pizzaPanner.png";

function PizzaSection() {
  return (
    <SectionFlexContainer
      images={photo}
      title={"Pizza Douch"}
      description={"Our Quality"}
    />
  );
}

export default PizzaSection;

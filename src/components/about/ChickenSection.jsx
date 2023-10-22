import SectionFlexContainer from "../SectionFlexContainer";
import photo from "../../assets/ChickenPanner.png";

function ChickenSection() {
  return (
    <SectionFlexContainer
      images={photo}
      title={"Chicken"}
      description={"Our Quality"}
    />
  );
}

export default ChickenSection;

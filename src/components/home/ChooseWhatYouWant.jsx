import photo from "../../assets/shipper.png";
import SectionFlexContainer from "../SectionFlexContainer";

function ChooseWhatYouWant() {
  return (
    <SectionFlexContainer
      flex={"md:flex-row-reverse"}
      images={photo}
      title={"From Texas with American Love"}
      description={"About Our Food"}
    />
  );
}

export default ChooseWhatYouWant;

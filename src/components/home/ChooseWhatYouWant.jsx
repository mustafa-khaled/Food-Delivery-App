import { Link } from "react-router-dom";
import photo from "../../assets/shipper.png";
import Button from "../Button";

function ChooseWhatYouWant() {
  return (
    <div className="flex flex-col items-start justify-between gap-[20px] py-[30px] md:flex-row">
      <div className="w-full md:w-[calc(100%/3)]">
        <h2 className="text-3xl">
          Choose what you want, select a pick up time
        </h2>
        <p className="my-[10px] text-lightGray">
          As well known and we are very busy all days advice you. advice you to
          call us of before arriving, so we can guarantee your seat.
        </p>
        <Link to={"/menu"}>
          <Button>Order Now</Button>
        </Link>
      </div>
      <div className="w-full md:w-[calc(100%/3)]">
        <img src={photo} alt="ChooseWhatYouWant" />
      </div>
      <div className="w-full md:w-[calc(100%/3)]">
        <h2 className="text-3xl">
          Choose what you want, select a pick up time
        </h2>
        <p className="my-[10px] text-lightGray">
          As well known and we are very busy all days advice you. advice you to
          call us of before arriving, so we can guarantee your seat.
        </p>
        <Link to={"/menu"}>
          <Button>Order Now</Button>
        </Link>
      </div>
    </div>
  );
}

export default ChooseWhatYouWant;

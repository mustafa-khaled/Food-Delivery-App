import { Link } from "react-router-dom";
import photo from "../../assets/Delivery.jpg";
import Button from "../Button";

function DeliverySection() {
  return (
    <div
      className="mt-[60px] flex h-[50vh] items-center justify-center bg-cover"
      style={{ backgroundImage: `url(${photo})`, backgroundPosition: "50%" }}
    >
      <div className="mx-auto w-[90%] text-center text-lg md:w-[60%]">
        <p className="text-yellow">We guarantee</p>
        <h2 className="text-4xl">30 Minutes Delivery!</h2>
        <p className="my-[10px] text-lightGray">
          If you’re having a meeting, working late at night and need an extra
          push. Let us know and we will be there
        </p>
        <Link to={"/menu"}>
          <Button>Make An Order</Button>
        </Link>
      </div>
    </div>
  );
}

export default DeliverySection;

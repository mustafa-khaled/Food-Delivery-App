import { Link } from "react-router-dom";
import photo from "../../assets/aboutOurFood.png";
import Button from "../Button";

function AboutOurFood() {
  return (
    <div className="flex flex-col items-center justify-between gap-[20px] md:flex-row">
      <div className="w-full md:w-[50%]">
        <img src={photo} alt="AboutOurFood" />
      </div>
      <div className="w-full text-lg font-bold md:w-[50%]">
        <p className="text-yellow">About Our Food</p>
        <h1 className="text-4xl">From Texas with American Love</h1>
        <p className="text-lightGray my-[10px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab vero
          dolores delectus tempora ad, dolorum deserunt, sequi saepe
          voluptatibus illo tempore soluta reprehenderit repellat ut amet a non
          nemo ducimus!
        </p>
        <Link to={"/menu"}>
          <Button>Order Now</Button>
        </Link>
      </div>
    </div>
  );
}

export default AboutOurFood;

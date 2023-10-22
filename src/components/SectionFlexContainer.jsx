import { Link } from "react-router-dom";
import Button from "./Button";

function SectionFlexContainer({
  images,
  title,
  description,
  flex = "md:flex-row",
}) {
  return (
    <div
      className={`flex flex-col items-center justify-between gap-[20px] ${flex}`}
    >
      <div className="w-full md:w-[50%]">
        <img src={images} alt={title} />
      </div>
      <div className="w-full text-lg font-bold md:w-[50%]">
        <p className="text-yellow">{description}</p>
        <h1 className="text-4xl">{title}</h1>
        <p className="my-[10px] text-lightGray">
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

export default SectionFlexContainer;

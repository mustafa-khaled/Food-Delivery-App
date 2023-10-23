import { useState } from "react";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { sliderImages } from "../../data/staticData";
import { Link } from "react-router-dom";

import Button from "../Button";

function HomeSlider() {
  const [imageIndex, setImageIndex] = useState(0);

  const showNextImage = () => {
    setImageIndex((index) => {
      if (index === sliderImages.length - 1) return 0;
      return index + 1;
    });
  };

  const showPrevImage = () => {
    setImageIndex((index) => {
      if (index === 0) return sliderImages.length - 1;
      return index - 1;
    });
  };
  return (
    <div className="relative h-[60vh] w-full">
      <div className="flex h-full w-full overflow-hidden">
        {sliderImages.map((url) => (
          <img
            key={url}
            src={url}
            alt="imag"
            className={`block h-full w-full flex-shrink-0 flex-grow-0 object-cover`}
            style={{
              translate: `${-100 * imageIndex}%`,
              transition: "translate 400ms ease-in-out",
            }}
          />
        ))}
      </div>

      {/* Next and prev buttons */}
      <button
        onClick={showPrevImage}
        style={{ transition: "backgroundColor 100ms ease-in-out" }}
        className="text-gray-400 hover:text-gray-100 absolute bottom-0 left-0 top-0 block
        cursor-pointer rounded-xl p-[1rem] text-4xl transition duration-100
      ease-in-out hover:bg-[rgb(0,0,0,0.2)]"
      >
        <MdKeyboardArrowLeft className="hover:text-white" />
      </button>

      <button
        onClick={showNextImage}
        style={{ transition: "backgroundColor 100ms ease-in-out" }}
        className="text-gray-400 hover:text-gray-100 absolute bottom-0 right-0 top-0 block cursor-pointer
      rounded-xl p-[1rem] text-4xl transition duration-100
      ease-in-out hover:bg-[rgb(0,0,0,0.2)]"
      >
        <MdKeyboardArrowRight className="hover:text-white" />
      </button>

      {/* Navigate between slides buttons */}
      <div className="absolute bottom-[20px] left-[50%] flex translate-x-[-50%] gap-[20px]">
        {sliderImages.map((_, index) => (
          <button
            key={index}
            className={`h-[18px] w-[18px] rounded-full bg-textColor ${
              index === imageIndex && "border-[3px] border-yellow"
            }`}
            onClick={() => setImageIndex(index)}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default HomeSlider;

import { Link } from "react-router-dom";
import { ImGithub, ImLinkedin2 } from "react-icons/im";

import Container from "./Container";
import GridContainer from "./GridContainer";

function Footer() {
  return (
    <div className="mt-[50px] bg-textColor text-center text-white">
      <Container>
        <div className="py-[40px] text-sm">
          <GridContainer>
            <div>
              <h5 className="mb-[5px] text-xl uppercase">Address</h5>
              <p className="text-lightGray">Cairo, Egypt</p>
            </div>

            <div>
              <h5 className="mb-[5px] text-xl uppercase">Book A Table</h5>
              <p className="text-lightGray">
                Dogfood och Sliders foodtruck.
                <br /> Under Om oss kan ni läsa
              </p>
              <span className="text-yellow">(+20) 1151747091</span>
            </div>

            <div>
              <h5 className="mb-[5px] text-xl uppercase">Opening Hour</h5>
              <p className="text-lightGray">Monday – Friday: 8am – 4pm</p>
              <p className="text-lightGray">Saturday: 9am – 5pm</p>
            </div>

            <div>
              <h5 className="mb-[5px] text-xl uppercase">News Letter</h5>
              <p className="text-lightGray ">
                Subscribe to the weekly newsletter for all the latest updates
              </p>
              <div className="border-lightGray mt-[10px] flex items-center border">
                <input
                  type="text"
                  placeholder="Your Email"
                  className="w-full bg-transparent p-[10px] outline-none"
                />
                <button className="hover:bg-darkYellow bg-yellow p-[10px] text-textColor">
                  Subscribe
                </button>
              </div>
            </div>

            <div className="flex flex-row items-center justify-center gap-[10px] text-xl md:flex-col md:justify-start">
              <Link
                to={"https://github.com/mustafa-khaled"}
                target="_blank"
                className="hover:text-yellow"
              >
                <ImGithub />
              </Link>
              <Link
                to={"https://www.linkedin.com/in/the-mustafa-khaled/"}
                target="_blank"
                className="hover:text-yellow"
              >
                <ImLinkedin2 />
              </Link>
            </div>
          </GridContainer>
        </div>
      </Container>
      <p className="bg-yellow p-[20px] text-textColor ">
        Copyright © 2023{" "}
        <Link
          to={"https://www.linkedin.com/in/the-mustafa-khaled/"}
          target="_blank"
          className="underline"
        >
          Mustafa Khaled
        </Link>
        . All Rights Reserved.
      </p>
    </div>
  );
}

export default Footer;

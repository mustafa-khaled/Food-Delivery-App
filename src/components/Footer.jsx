import { Link } from "react-router-dom";
import { ImGithub, ImLinkedin2 } from "react-icons/im";

import Container from "./Container";
import GridContainer from "./GridContainer";

function Footer() {
  return (
    <div className="mt-[50px] bg-textColor text-center text-white">
      <Container>
        <div className="py-[30px] text-sm">
          <GridContainer>
            <div>
              <h5 className="mb-[5px] text-xl uppercase">Address</h5>
              <p>Cairo, Egypt</p>
            </div>

            <div>
              <h5 className="mb-[5px] text-xl uppercase">Book A Table</h5>
              <p>
                Dogfood och Sliders foodtruck.
                <br /> Under Om oss kan ni läsa
              </p>
              <span className="text-yellow">(850) 435-4155</span>
            </div>

            <div>
              <h5 className="mb-[5px] text-xl uppercase">Opening Hour</h5>
              <p>Monday – Friday: 8am – 4pm</p>
              <p>Saturday: 9am – 5pm</p>
              <div className="flex items-center justify-center gap-[10px]"></div>
            </div>

            <div>
              <h5 className="mb-[5px] text-xl uppercase">News Letter</h5>
              <p>
                Subscribe to the weekly newsletter for all the latest updates
              </p>
              <input type="text" placeholder="Your Email" />
            </div>

            <div className="flex flex-col items-center gap-[10px] text-xl">
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
      <p className="bg-yellow py-[20px] text-textColor">
        Copyright © 2023{" "}
        <Link
          to={"https://www.linkedin.com/in/the-mustafa-khaled/"}
          target="_blank"
        >
          Mustafa Khaled
        </Link>
        . All Rights Reserved.
      </p>
    </div>
  );
}

export default Footer;

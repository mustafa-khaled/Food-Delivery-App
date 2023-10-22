import { ourTeamData } from "../../data/staticData";
import SectionHead from "../SectionHead";

function OurTeam() {
  return (
    <div>
      <SectionHead title={"Our Talented Chefs"} showLink={false} />
      <div className="flex flex-col items-center justify-between gap-[20px] sm:flex-row">
        {ourTeamData.map((item) => {
          return (
            <div key={item.id} className="mx-auto text-center">
              <div className="relative">
                <img src={item.image} alt={item.title} className="mx-auto" />
                <p className="absolute bottom-[-10px] left-[50%] w-[80px] translate-x-[-50%] bg-yellow py-[5px]">
                  {item.title}
                </p>
              </div>
              <div className="py-[20px]">
                <h3 className="mb-[10px] text-xl font-bold uppercase">
                  {item.name}
                </h3>
                <p className="text-lightGray">
                  Everything We Pizza, We Pizza With Love. Designer Fastfood.
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default OurTeam;

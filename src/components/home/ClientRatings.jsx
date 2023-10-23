import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css";
import { ClientsData } from "../../data/staticData";

import photo from "../../assets/ratings.jpg";

function ClientRatings() {
  return (
    <Swiper
      className="relative grid h-[50vh] w-full grid-cols-[repeat(auto-fill,minmax(270px,1fr))] items-center  justify-center bg-cover"
      style={{ backgroundImage: `url(${photo})`, backgroundPosition: "50%" }}
      breakpoints={{
        0: {
          slidesPerView: 1,
        },
      }}
    >
      {ClientsData.map((r) => {
        return (
          <SwiperSlide key={r.id}>
            <div className="absolute left-0 top-0 h-full w-full bg-[#00000080]"></div>
            <div className="relative flex h-full flex-col items-center justify-center p-[20px] text-center text-lg">
              <img
                src={r.image}
                alt={r.name}
                className="mx-auto h-[80px] w-[80px] rounded-full"
              />

              <p className="text-lightGray">{r.description}</p>

              <h3 className="font-bold uppercase">{r.name}</h3>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default ClientRatings;

import { Container } from "@chakra-ui/react";
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { SlideItem } from "./SlideItem";
import { SlidesData } from "./data";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export const ContinentsSlide = () => {
  return (
    <Container maxW="container.xl" mb={["24px", "40px"]} p="0">
      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={1}
        slidesPerView={1}
        navigation
        pagination
        className="mySwiper"
      >
        {SlidesData.map(({ title, subtitle, img, url }) => (
          <SwiperSlide key={title}>
            <SlideItem title={title} subtitle={subtitle} img={img} url={url} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

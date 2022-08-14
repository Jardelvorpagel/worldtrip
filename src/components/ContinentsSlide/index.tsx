import { Box, Container, Flex } from "@chakra-ui/react";
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperProps, SwiperSlide } from "swiper/react";
import { SlideItem } from "./SlideItem";
import { SlidesData } from "./data";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export const ContinentsSlide = () => {
  return (
    <Container maxW="container.xl" mb="40px">
      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={1}
        slidesPerView={1}
        navigation
        pagination
        className="mySwiper"
      >
        {SlidesData.map(({ title, subtitle, img }) => (
          <SwiperSlide>
            <SlideItem title={title} subtitle={subtitle} img={img} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

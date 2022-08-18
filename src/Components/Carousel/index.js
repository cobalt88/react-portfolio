import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Card } from "react-bootstrap";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

export default function Coverflow() {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          900: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1400: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          2400: {
            slidesPerView: 7,
          },
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Card
            className="contact-card grow"
            href="https://github.com/cobalt88"
            target="_blank"
          >
            <h3 className="card-header">GitHub</h3>
            <p className="card-body">Put Stuff Here</p>
            <p className="card-footer">Maybe put something here?</p>
          </Card>
        </SwiperSlide>

        <SwiperSlide>
          <Card className="contact-card grow">
            <h3 className="card-header">Reach Out</h3>
            <p className="card-body">Put Stuff Here</p>
            <p className="card-footer">Maybe put something here?</p>
          </Card>
        </SwiperSlide>

        <SwiperSlide>
          <Card className="contact-card grow">
            <h3 className="card-header">Request Form</h3>
            <p className="card-body">Put Stuff Here</p>
            <p className="card-footer">Maybe put something here?</p>
          </Card>
        </SwiperSlide>

        <SwiperSlide>
          <Card className="contact-card grow">
            <h3 className="card-header">Resume</h3>
            <p className="card-body">Put Stuff Here</p>
            <p className="card-footer">Maybe put something here?</p>
          </Card>
        </SwiperSlide>

        <SwiperSlide>
          <Card className="contact-card grow">
            <h3 className="card-header">LinkedIn</h3>
            <p className="card-body">Put Stuff Here</p>
            <p className="card-footer">Maybe put something here?</p>
          </Card>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

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
            slidesPerView: 1,
          },
          900: {
            slidesPerView: 3,
          },
          1400: {
            slidesPerView: 4,
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
          <Card className="project-card grow">
            <div className="card-header">Test Project Card Header</div>
            <div className="card-body">
              Test body section for the standard project card. A brief
              description of the project will go here.
            </div>
            <div className="card-footer">Card Footer - Icons Go Here</div>
          </Card>
        </SwiperSlide>

        <SwiperSlide>
          <Card className="project-card grow">
            <div className="card-header">Test Project Card Header</div>
            <div className="card-body">
              Test body section for the standard project card. A brief
              description of the project will go here.
            </div>
            <div className="card-footer">Card Footer - Icons Go Here</div>
          </Card>
        </SwiperSlide>

        <SwiperSlide>
          <Card className="project-card grow">
            <div className="card-header">Test Project Card Header</div>
            <div className="card-body">
              Test body section for the standard project card. A brief
              description of the project will go here.
            </div>
            <div className="card-footer">Card Footer - Icons Go Here</div>
          </Card>
        </SwiperSlide>

        <SwiperSlide>
          <Card className="project-card grow">
            <div className="card-header">Test Project Card Header</div>
            <div className="card-body">
              Test body section for the standard project card. A brief
              description of the project will go here.
            </div>
            <div className="card-footer">Card Footer - Icons Go Here</div>
          </Card>
        </SwiperSlide>

        <SwiperSlide>
          <Card className="project-card grow">
            <div className="card-header">Test Project Card Header</div>
            <div className="card-body">
              Test body section for the standard project card. A brief
              description of the project will go here.
            </div>
            <div className="card-footer">Card Footer - Icons Go Here</div>
          </Card>
        </SwiperSlide>

        <SwiperSlide>
          <Card className="project-card grow">
            <div className="card-header">Test Project Card Header</div>
            <div className="card-body">
              Test body section for the standard project card. A brief
              description of the project will go here.
            </div>
            <div className="card-footer">Card Footer - Icons Go Here</div>
          </Card>
        </SwiperSlide>

        <SwiperSlide>
          <Card className="project-card grow">
            <div className="card-header">Test Project Card Header</div>
            <div className="card-body">
              Test body section for the standard project card. A brief
              description of the project will go here.
            </div>
            <div className="card-footer">Card Footer - Icons Go Here</div>
          </Card>
        </SwiperSlide>

        <SwiperSlide>
          <Card className="project-card grow">
            <div className="card-header">Test Project Card Header</div>
            <div className="card-body">
              Test body section for the standard project card. A brief
              description of the project will go here.
            </div>
            <div className="card-footer">Card Footer - Icons Go Here</div>
          </Card>
        </SwiperSlide>

        <SwiperSlide>
          <Card className="project-card grow">
            <div className="card-header">Test Project Card Header</div>
            <div className="card-body">
              Test body section for the standard project card. A brief
              description of the project will go here.
            </div>
            <div className="card-footer">Card Footer - Icons Go Here</div>
          </Card>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

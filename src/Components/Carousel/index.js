import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Card } from "react-bootstrap";
import resume from "../../assets/documents/Vincent_Teune_Resume.pdf";

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
        <SwiperSlide id="contact">
          <Card
            className="contact-card grow"
            href="https://github.com/cobalt88"
            target="_blank"
          >
            <h3 className="card-header">GitHub</h3>
            <p className="card-body">
              <i class="fa-brands fa-github fa-4x"></i>
            </p>
            <p className="card-footer">Check out my other projects</p>
          </Card>
        </SwiperSlide>

        <SwiperSlide>
          <a href="mailto:vincent@vtportfolio.net">
            <Card className="contact-card grow">
              <h3 className="card-header">Reach Out</h3>
              <p className="card-body">
                <i class="fa-sharp fa-solid fa-paper-plane fa-4x"></i>
              </p>
              <p className="card-footer">Send me an email</p>
            </Card>
          </a>
        </SwiperSlide>

        {/* <SwiperSlide>
          <Card className="contact-card grow">
            <h3 className="card-header">Request Form</h3>
            <p className="card-body">Put Stuff Here</p>
            <p className="card-footer">This is for pe</p>
          </Card>
        </SwiperSlide> */}

        <SwiperSlide>
          <a href={resume} download="Vincent Teune Resume">
            <Card className="contact-card grow">
              <h3 className="card-header">Resume</h3>
              <p className="card-body">
                <i class="fa-solid fa-file-arrow-down fa-4x"></i>
              </p>
              <p className="card-footer">Download a copy of my resume.</p>
            </Card>
          </a>
        </SwiperSlide>

        <SwiperSlide>
          <a href="https://www.linkedin.com/in/vincent-teune/" target="blank">
            <Card className="contact-card grow">
              <h3 className="card-header">LinkedIn</h3>
              <p className="card-body">
                <i class="fa-brands fa-linkedin fa-4x"></i>
              </p>
              <p className="card-footer">Go to my LinkedIn Profile</p>
            </Card>
          </a>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

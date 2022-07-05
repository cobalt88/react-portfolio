import React from "react";
import { Card, Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, Pagination } from "swiper";

function FeaturedCards() {
  return (
    <>
      <Swiper
        effect={"cube"}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={true}
        modules={[EffectCube, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Card className="featured-card">
            <Card.Img alt="project logo" className="card-image"></Card.Img>
            <h3 className="card-header">Featured Project 1</h3>
            <p className="card-body">body of project</p>
            <p className="card-footer">Card footer goes here</p>
          </Card>{" "}
        </SwiperSlide>

        <SwiperSlide>
          <Card className="featured-card">
            <Card.Img alt="project logo" className="card-image"></Card.Img>
            <h3 className="card-header">Featured Project 2</h3>
            <p className="card-body">body of project</p>
            <p className="card-footer">Card footer goes here</p>
          </Card>{" "}
        </SwiperSlide>

        <SwiperSlide>
          <Card className="featured-card">
            <Card.Img alt="project logo" className="card-image"></Card.Img>
            <h3 className="card-header">Featured Project 3</h3>
            <p className="card-body">body of project</p>
            <p className="card-footer">Card footer goes here</p>
          </Card>{" "}
        </SwiperSlide>

        <SwiperSlide>
          <Card className="featured-card">
            <Card.Img alt="project logo" className="card-image"></Card.Img>
            <h3 className="card-header">Featured Project 4</h3>
            <p className="card-body">body of project</p>
            <p className="card-footer">Card footer goes here</p>
          </Card>{" "}
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default FeaturedCards;

/* 
      <Card className="featured-card">
        <Card.Img alt="project logo" className="card-image"></Card.Img>
        <h3 className="card-header">Featured Project 1</h3>
        <p className="card-body">body of project</p>
        <p className="card-footer">Card footer goes here</p>
      </Card>

*/

import React, { Component } from "react";
import Slider from "react-slick";
import Card from "../Card";

import { Button } from "@mui/material";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "seagreen",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "seagreen",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
}

export default class SlickCorousel extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      infinite: true,
      dots: false,
      className: "mySwiper",
      id: "mySwiper",
      //   className: "slider-center",
      //   centerMode: true,

      //   nextArrow: <SampleNextArrow />,
      //   prevArrow: <SamplePrevArrow />,

      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 1050,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 1,
          },
        },
        {
          breakpoint: 750,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    return (
      <>
        <Slider {...settings}>
          <Card
            title={"Beginner"}
            amount={"450.000 so'm "}
            duration={"2.5 oy"}
          />
          <Card
            title={"Elementary"}
            amount={"450.000 so'm "}
            duration={"2 oy"}
          />
          <Card
            title={"Pre-Intermediate"}
            amount={"450.000 so'm "}
            duration={"3 oy"}
          />
          <Card
            title={"Intermediate"}
            amount={"450.000 so'm "}
            duration={"3 oy"}
          />
        </Slider>
      </>
    );
  }
}

import React, { Component } from "react";
import Slider from "react-slick";

import { Box, Button, CircularProgress, Divider } from "@mui/material";
import FeedbackBox from "../FeedbackBox";

export default class SlickCorousel2 extends Component {
  //

  //
  render() {
    console.log(Boolean(this.props?.data), " ------");

    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      infinite: true,
      dots: true,
      className: "mySwiper",
      //   id: "mySwiper",
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
    if (!Boolean(this.props?.data)) {
      return (
        <Box
          sx={{
            display: "flex",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            margin: "20px 0",
          }}
        >
          <CircularProgress />
        </Box>
      );
    }
    return (
      <>
        <Slider {...settings}>
          {Boolean(this.props?.data) &&
            this.props?.data.map((e) => <FeedbackBox data={e} />)}
        </Slider>
      </>
    );
  }
}

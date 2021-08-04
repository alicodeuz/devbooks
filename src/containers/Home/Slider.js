import React from 'react';
import Slider from "react-slick";

export default function SliderPage() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000
  };

  return (
    <div>
      <Slider {...settings}>
        <img src="https://cdn.pixabay.com/photo/2021/07/30/16/00/grizzly-bear-6510170__480.jpg" alt="Abduqahhor" />
        <img src="https://cdn.pixabay.com/photo/2021/07/30/16/51/beach-6510275__480.jpg" alt="Azamat" />
        <img src="https://cdn.pixabay.com/photo/2021/07/29/20/23/mountains-6508015__480.jpg" alt="Me" />
        <img src="https://cdn.pixabay.com/photo/2021/05/25/09/51/road-6281973__480.jpg" alt="Jamshid" />
        <img src="https://cdn.pixabay.com/photo/2019/03/21/20/27/south-tyrol-4071865__480.jpg" alt="Jamshid" />
      </Slider>
    </div>
  )
}

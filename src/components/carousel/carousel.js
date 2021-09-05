import React, { useState, useEffect, Component } from "react";
import Slider from "react-slick";
import axios from 'axios'


/* functional component way */
export const Carousel = () => {
  const [datas, setDatas] = useState([]);
  const token = localStorage.data
  useEffect(() => {
    axios.get('/home/carousel', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
      .then(res => { setDatas(res.data)/* , console.log(res.data)  */ })
      .catch(err => {
        console.log('Could not connect to the database. Exiting now...', err);
      });
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    speed: 10,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <>
      <h1 className="text-secondary font-weight-bold mt-4 mb-4">CAROUSEL</h1>
      <Slider {...settings} className="container">
        {datas.map(data => <img src={data.url} key={data._id} alt="CarouselImages" className="img-fluid" />)}
      </Slider>
    </>)
};


import React from "react";
import ChurchImage from "../assets/photo-1575936123452-b67c3203c357.jpeg";
import ChurchImage2 from "../assets/neom-dfglhJbc4Uc-unsplash.jpg";
import ChurchImage3 from "../assets/meta-6946620_1280.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";

const DiscoveryHome = () => {
  const images = [ChurchImage, ChurchImage2, ChurchImage3];

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1 },
    },
  };

  const containerVariants = {
    visible: {
      transition: { staggerChildren: 0.9 },
    },
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <div id='home'>
      <Slider
        {...settings}
        nextArrow={
          <div style={{ fontSize: "24px", color: "black", right: "10px" }}>
            Next
          </div>
        }
        prevArrow={
          <div style={{ fontSize: "24px", color: "black", left: "10px" }}>
            Prev
          </div>
        }
      >
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt={`churchimage-${index}`}
              className="w-[100%] h-[700px]"
            />
          </div>
        ))}
      </Slider>
      <section  className=" bg-[#F0FFF8]">
      <motion.div
          className="pt-14 bg-[#F0FFF8]"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
        <h1 className="text-center text-[44px] font-bold">
          ADVANCE CONFERENCE
        </h1>
        <motion.p
            className="text-center text-[#117C1A] font-medium"
            variants={textVariants}
          >
          A place to refire. A place of unlimited resources. A place to refresh
          and be refreshed. A place of spiritual growth.
        </motion.p>
        <motion.p
            className="text-[20px] w-[80%] mx-auto text-center font-medium mt-5 leading-9"
            variants={textVariants}
         
          >
          The Advance Conference is more than an event; it's a sanctuary of
          revitalization, a recharge station, an abundant wellspring of
          resources, and a catalyst for exponential growth. Beyond
          denominational boundaries, it unifies under one church with a shared
          mission: to reach the world collectively. At the core, we acknowledge
          the profound responsibility entrusted to the church. God calls us to
          be a beacon of refreshment, a source of inspiration, and a hub for
          invaluable resources. Our purpose is clear: to empower local churches
          with the knowledge and support necessary to unlock their boundless
          potential and extend their influence.
        </motion.p>
      </motion.div>
      </section>
    </div>
  );
};

export default DiscoveryHome;

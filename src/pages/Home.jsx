import React from "react";
import ChurchImage from "../assets/advance.jpg";
import ChurchImage2 from "../assets/advance3.jpg";
import ChurchImage3 from "../assets/advance.jpg";
import ChurchImage4 from "../assets/advance2.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";

const DiscoveryHome = () => {
  const images = [ChurchImage, ChurchImage2, ChurchImage3];
  const pictures = [ChurchImage4, ChurchImage2, ChurchImage4];

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
    <div id="home">
      <div className="hidden lg:block">
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
      </div>

      <div className="block lg:hidden">
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
          {pictures.map((picture, index) => (
            <div key={index}>
              <img
                src={picture}
                alt={`churchimage-${index}`}
                className="w-[100%] h-[700px]"
              />
            </div>
          ))}
        </Slider>
      </div>
      <section className=" bg-[#F0FFF8]">
        <motion.div
          className="pt-14 bg-[#F0FFF8]"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <h1 className="text-center text-[44px] font-bold leading-10">
            ADVANCE WORD CONFERENCE
          </h1>
          <motion.p
            className="text-center text-[#117C1A] font-medium"
            variants={textVariants}
          >
            A place to refire. A place of unlimited resources. A place to
            refresh and be refreshed. A place of spiritual growth.
          </motion.p>
          <motion.p
            className="text-[20px] w-[80%] mx-auto text-center font-medium mt-5 leading-9"
            variants={textVariants}
          >
            The Advance Conference is an annual event characterized by an
            in-depth teaching of God’s word and the mighty move of the spirit.
            The goal for us at this lifetime-changing event is simple: to be
            full of the spirit, and to be fed fat on God's word and it has
            stayed that way since its maiden edition in December 2020. Since
            that time, our tents have enlarged, and our cords have lengthened
            with the event transforming from just a small-town meeting to a
            meeting for all. Nations are birthed, lives
            are changed, and God’s will is established on earth.
          </motion.p>
        </motion.div>
      </section>
    </div>
  );
};

export default DiscoveryHome;

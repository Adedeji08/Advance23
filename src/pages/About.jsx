import React, { useEffect } from "react";
import ChurchLogo from "../assets/dc-logo.jpg";
import PstImage from "../assets/PVA.png";
import PstImage2 from "../assets/PFA.png";
import PstImage3 from "../assets/PFO.png";
import PstImage4 from "../assets/PIBK.png";
import PstImage5 from "../assets/ODUNAYO.png";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AboutAdvance = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("vissible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  const list = {
    vissible: {
      opacity: 1,
    },
    hidden: {
      opacity: 0,
    },
  };

  const item1 = {
    vissible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stifness: 300,
        damping: 24,
        delay: 0.5,
      },
    },
    hidden: {
      opacity: 0,
      x: -100,
      rotate: 360,
    },
  };

  const item2 = {
    vissible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stifness: 300,
        damping: 24,
        delay: 0.5,
      },
    },
    hidden: {
      opacity: 0,
      x: 100,
      rotate: 360,
    },
  };

  const flipVariants = {
    hidden: {
      scale: -1,
    },
    visible: {
      scale: 1,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <motion.div
      className="mt-20"
      id="about"
      variants={list}
      ref={ref}
      animate={control}
    >
      <section className="grid lg:grid-cols-[2fr,1fr] gap-9">
        <div>
          <h3 className="text-[#117C1A] text-[23px] font-medium text-center lg:text-left">
            Advance 2023
          </h3>
          <h1 className="text-[26px] font-semibold text-center lg:text-left"> Welcome to the Supernatural</h1>
          <motion.p
            variants={item1}
            className="text-[20px] font-medium mt-5 leading-10"
          >
            When our Word Conference began in 2020,
            the instruction we received for the next year was crystal clear:
            Advance. We have parted the red seas; Exodus 14: 19-31. We have
            walked on water; Matt 14:28-29, mountains have skipped like rams
            before us; Psalm 114:4, and our faith for the increase was made
            manifest in no small measure; 2 Corinthians 9:8-10. Now is the time
            for the supernatural.
          </motion.p>
        </div>
        <div className="mt-[130px] hidden lg:block ">
          <img src={ChurchLogo} alt="alt" className="w-[350px]" />
        </div>
      </section>

      {/* <section className="grid lg:grid-cols-[1fr,2fr] gap-10 mt-14">
        <div className="hidden lg:block mt-[130px]">
          <img src={ChurchLogo} alt="alt" />
        </div>

        <div>
          <motion.h3
            variants={item1}
            className="text-[#117C1A] text-[23px] font-medium"
          >
            Advance 2023
          </motion.h3>
          <h1 className="text-[26px] font-semibold"> Welcome to the Supernatural</h1>
          <motion.p
            variants={item2}
            className="text-[20px] font-medium mt-5 leading-10"
          >
            Rom 5:20 (NLT)....”But as people sinned more and more, God’s
            wonderful grace became more abundant. Join us in ushering an era of
            accelerated growth, both personal and global. This isn't just a
            conference; it's a call to action. Step out, take charge, and
            showcase God's wisdom. Church leadership is central—gain clarity,
            build competence, and catalyze a global shift. Exponential 2024
            invites you to be part of the governmental church, raising the
            banner of Christ in unexpected places. Join us in shaping a future
            where the church leads in unprecedented glory.
          </motion.p>
        </div>
      </section> */}
      <h1 className="text-center font-bold text-[28px] mt-5 text-[#117C1A]">
        THE MINISTERS
      </h1>
      <motion.div
        className="grid lg:grid-cols-5 gap-5 mt-5 justify-center cursor-pointer"
        variants={flipVariants}
        animate={inView ? "visible" : "hidden"}
      >
       <div className=" lg:w-full  mx-auto">
          <img
            src={PstImage3}
            variants={item1}
            alt="alt"
            className=" rounded-md"
          />
          <p className="text-[16px] text-center leading-4 pt-2">
           <b> Pastor Femi Oyetunde </b> <br /> Zonal Pastor, Expression Nation
          </p>
        </div>
        <div className=" lg:w-full mx-auto">
          <img
            src={PstImage2}
            variants={item1}
            alt="alt"
            className=" rounded-md"
          />
          <p className="text-[16px] text-center leading-4 pt-2">
           <b> Pastor Femi Akinwale</b> <br /> Lead Pastor, RCCG Discovery Centre
          </p>
        </div>
        
        <div className=" lg:w-full  mx-auto">
          <img
            src={PstImage}
            variants={item1}
            alt="alt"
            className="rounded-md"
          />
          <p className="text-[16px] text-center leading-4 pt-2">
           <b>Pastor Victory Adudu </b> <br />  Parish Pastor, Expression Church
          </p>
        </div>
        <div className=" lg:w-full  mx-auto">
          <img
            src={PstImage4}
            variants={item1}
            alt="alt"
            className=" rounded-md"
          />
          <p className="text-[16px] text-center leading-4 pt-2">
          <b> Pastor Ibukun Onifade </b> <br /> Lead Pastor, RCCG The Archivers.
          </p>
        </div>
        <div className=" lg:w-full mx-auto">
          <img
            src={PstImage5}
            variants={item1}
            alt="alt"
            className="rounded-md"
          />
          <p className="text-[16px] text-center leading-4 pt-2">
          <b> Minister Odunayo Adebayo </b> <br /> Music Minister
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AboutAdvance;

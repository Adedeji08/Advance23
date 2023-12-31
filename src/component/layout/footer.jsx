import React, { useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom';
import { Link} from 'react-scroll';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useForm } from "react-hook-form";
import emailjs, { sendForm } from '@emailjs/browser'
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import CircleLoader from "react-spinners/CircleLoader";

function Footer() {
  const control = useAnimation();
  const [loading, setLoading] = useState(false);
  const [ref, inView] = useInView();
  const form = useRef()

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
    },
  };
  
  const {
    handleSubmit,
    footerControl,
    reset,
    formState: { errors },
    setValue,
  } = useForm();

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true); 
    try {
      await emailjs.sendForm(
        'service_qbadhm9',
        'template_tr94g6q',
        form.current,
        '8LdIQzTIF_nj5NP0p'
      );
  
      toast.success('You have successfully subscribed for Discovery Center Newsletter!');
     
    } catch (error) {
      toast.error('Failed to send the message, please try again');
     
  
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <motion.div
    variants={list} 
    ref={ref}
    animate={control}
    className="mt-16">
    <motion.div
     variants={item1}
      className="bg-[#0d3c00] grid lg:grid-cols-4 grid-cols-1 pl-5 pt-5"
    >
    
      <div className='lg:ml-4'>
        <h1 className="text-2xl font-black text-white  footer__head border-b-1  border-red-500">
          Contact Us
        </h1>
        <ul
          className="text-white pt-5 font-medium text-sm leading-7"
        >
          <li>
            <span className="text-red-500">Phone:</span> +234 905 683 3756, +234
            806 017 2591
          </li>
          <li>
            <span className="text-red-500">Email:</span> discoverycentremowe@gmail.com
          </li>
          <li>
            <span className="text-red-500">Address:</span>
            <NavLink to="https://www.google.com/maps/@6.8212125,3.4414653,17z/data=!3m1!4b1?authuser=0&entry=ttu"
                  target='_blank' rel='noreferrer'
            >
              {" "}
              RCCG, Discovery Centre, Omiru Street by Transformer, Unity Estate, by NPOG Filling Station, Mowe.
            </NavLink>
          </li>
        </ul>
      </div>

      <div className='lg:ml-5 mt-5 lg:mt-0 '>
        <h1 className="text-2xl font-black border-b-1 text-white border-red-500  footer__head">
          Our Church
        </h1>
        <ul
          className="pt-5 font-medium text-sm text-white leading-7"
        >
         <li><Link to="home" smooth={true} className="cursor-pointer">Home</Link></li>
        <li>
        <li><Link to="about" smooth={true} className="cursor-pointer">About </Link></li>
        </li>
        <li>
        <li><Link to="register" smooth={true} 
        className="cursor-pointer"
        >
          Register</Link></li>
        </li>
        </ul>
      </div>

      <div className='lg:mr-5 mt-5 lg:mt-0 '>
        <h1 className="text-2xl font-black border-b-1 text-white border-red-500  footer__head">
         Giving
        </h1>
        <ul
          className="pt-5 font-medium text-sm text-white leading-7"
        >
          <li> You can support the church with your giving.</li>
        <li>  RCCG DISCOVERY CENTRE <span className='text-[#C5292A]'>0040099109</span> PREMIUM TRUST BANK</li>
        </ul>
      </div>

      <div className='lg:mr-5 mt-5 lg:mt-0 '>
        <h1 className="text-2xl font-black border-b-1 text-white border-red-500 footer__head">
          NewsLetter
        </h1>
        <p
          className="text-white text-xs font-extralight pt-5"
        >
          Subscribe to our Newsletter & Event right now to be updated.
        </p>
        <div className="mt-5">
          <form
           ref={form} onSubmit={sendEmail}
          >
          <input
            type="email"
            name='email'
            placeholder="Enter your email"
            className="border border-red-400 w-[65%] rounded h-10 pl-5 newsletter block"
          />
         
          <button
          type="submit"
          className="newsletter-btn border text-white rounded border-white w-[65%] mt-5 bg-red-600  h-10"
        >
          {loading ? (
            <CircleLoader color="#ffffff" loading={loading} size={20} />
          ) : (
            "Subscribe"
          )}
        </button>
          </form>
        </div>
      </div>
      <p className="text-red-500 font-extralight text-xs mt-4">
        © Discovey Center 2023. All rights reserved.
      </p>
    </motion.div>
  </motion.div>
  )
}

export default Footer
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

// import icon images
import ExceptionalDesigns1 from "../Images/exceptionalDesigns1.png";
import CostEffective1 from "../Images/costEffective1.png";
import FastTurnAround1 from "../Images/fastTurnAround1.png";

// Testimonial data
const testimonials = [
  {
    name: 'John Doe',
    feedback: 'This company provided excellent service, and I am very satisfied with their work. Highly recommended!',
    address: 'Lagos, Nigeria',
  },
  {
    name: 'Jane Smith',
    feedback: 'The team was professional and attentive to our needs. Their designs helped elevate our brand.',
    address: 'Abuja, Nigeria',
  },
  {
    name: 'Samuel Lee',
    feedback: 'Creative and timely design solutions. Their ability to translate our ideas into visuals is impressive.',
    address: 'Port Harcourt, Nigeria',
  },
  {
    name: 'Emily Davis',
    feedback: 'Working with this design company was a smooth experience. The results were above and beyond what we expected.',
    address: 'Kaduna, Nigeria',
  },
  {
    name: 'Michael Johnson',
    feedback: 'Their creative designs transformed our project. The attention to detail was amazing!',
    address: 'Ibadan, Nigeria',
  },
];

// Custom Next Arrow Component
const NextArrow = ({ onClick }) => (
  <div
  className="absolute right-1 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer h-10 w-10 md:w-14 md:h-14 rounded-full flex justify-center items-center bg-gray-900 hover:bg-gray-900 hover:border-2 hover:border-lemon hover:shadow-lg"
  onClick={onClick}
>
    <AiOutlineRight size={20} className="text-white text-center font-bold hover:text-lemon" />
  </div>
);

// Custom Previous Arrow Component
const PrevArrow = ({ onClick }) => (
    <div
    className="absolute left-1 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer h-10 w-10 md:w-14 md:h-14 rounded-full flex justify-center items-center bg-gray-900 hover:bg-gray-900 hover:border-2 hover:border-lemon hover:shadow-lg ho"
    onClick={onClick}
    >
      <AiOutlineLeft size={20} className="text-white text-center font-bold hover:text-lemon" />
  </div>
);

function Testimonials() {
  const settings = {
    dots: false,              // Show dots below the slider
    infinite: true,           // Infinite loop
    speed: 500,               // Speed of transition
    slidesToShow: 1,          // One testimonial at a time
    slidesToScroll: 1,        // Scroll one at a time
    autoplay: true,           // Auto slide
    autoplaySpeed: 3000,      // 5 seconds per slide
    arrows: true,             // Enable navigation arrows
    nextArrow: <NextArrow />, // Custom next arrow
    prevArrow: <PrevArrow />, // Custom prev arrow
  };

  return (
    <div className="z-10 w-screen bg-black flex flex-col justify-center items-center md:mt-20 " id="testimonials">
      <div className="text-white flex flex-col justify-center items-center text-center mb-20 px-4 md:px-20 pt-10 pb-5 md:pt-10">
        <h1 className="font-sans font-extrabold text-[32px] md:text-[36px] lg:text-[36px] leading-[36px] md:leading-[40px]">
          The Experience of Working With Us.
        </h1>
        <p className="font-sans font-medium mt-5 lg:text-[18px] md:mt-7 max-w-[800px]">
          Discover firsthand experiences of partnering with us through genuine feedback from our esteemed clients.
        </p>
      </div>

      <div className="relative max-w-[800px] w-full px-4">
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-lemon h-[300px] flex flex-col items-center justify-center rounded-lg py-10 px-8 text-center gap-4 mb-20">
              <div className="flex flex-col justify-center items-center h-full">
                <p className="md:text-lg text-black  md:px-24 mb-4">"{testimonial.feedback}"</p>
                <p className="text-lg md:text-2xl font-semibold text-black mb-2">{testimonial.name}</p>
                <p className="text-sm text-black">{testimonial.address}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="text-black bg w-screen bg-black flex flex-col justify-center items-center text-center px-4 md:px-20  pb-20 pt-10">
        <h1 className="font-sans text-white font-extrabold text-[32px] md:text-[36px] lg:text-[36px] leading-[36px] md:leading-[40px]">
        Explore the Unique Advantages of Partnering<br/> with Our Agency
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-16 px-4">
          <div className="bg-lilBlack flex flex-col py-8 rounded-lg w-[320px] h-[240px] px-5">
            <img 
            src={ExceptionalDesigns1} 
            alt="brief icon" 
            className="h-[32px] w-[32px]" />
            <div className="text-left text-white mt-3 flex flex-col gap-y-2">
              <h1 className="text-[24px] font-extrabold">
              Exceptional Designs
              </h1>
              <p className="text-left text-[13px]">
              Our team is dedicated to creating visually stunning and exceptional designs that elevate your brand. 
              We focus on understanding your vision and delivering custom solutions.
              </p>

            </div>

          </div>
          <div className="bg-lilBlack flex flex-col py-8 rounded-lg w-[320px] h-[240px] px-5">
            <img 
            src={CostEffective1} 
            alt="brief icon" 
            className="h-[32px] w-[32px]" />
            <div className="text-left text-white mt-3 flex flex-col gap-y-2">
              <h1 className="text-[24px] font-extrabold">
              Cost-Effective
              </h1>
              <p className="text-left text-[13px]">
              We believe high-quality design should be accessible to all. Our budget-friendly 
              services maintain exceptional quality, helping you achieve your goals without overspending.
              </p>

            </div>

          </div>
          <div className="bg-lilBlack flex flex-col py-8 rounded-lg w-[320px] h-[240px] px-5">
            <img 
            src={FastTurnAround1} 
            alt="brief icon" 
            className="h-[32px] w-[32px]" />
            <div className="text-left text-white mt-5 flex flex-col gap-y-2">
              <h1 className="text-[24px] font-extrabold">
              Fast Turnaround
              </h1>
              <p className="text-left text-[13px]">
              We recognize the need for timely delivery. Our efficient processes ensure 
              your designs are delivered within 24 hours, allowing you to move forward without delay.
              </p>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Testimonials;

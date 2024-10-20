import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

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
    className="absolute top-1/2 right-5 transform -translate-y-1/2 text-white text-2xl w-16 h-16 bg-black bg-opacity-50 p-3 rounded-full hover:bg-opacity-75 cursor-pointer"
    onClick={onClick}
  >
    <AiOutlineRight size={30} className= "text-white font-bold hover:text-lemon" />
  </div>
);

// Custom Previous Arrow Component
const PrevArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 left-5 transform -translate-y-1/2 text-white text-2xl w-16 h-16 bg-black bg-opacity-50 p-3 rounded-full hover:bg-opacity-75 cursor-pointer"
    onClick={onClick}
  >
     <AiOutlineLeft size={30} className="text-white font-bold hover:text-lemon" />
  </div>
);

function Testimonials() {
  const settings = {
    dots: false,              // Show dots below the slider
    infinite: true,          // Infinite loop
    speed: 500,              // Speed of transition
    slidesToShow: 1,         // One testimonial at a time
    slidesToScroll: 1,       // Scroll one at a time
    autoplay: true,          // Auto slide
    autoplaySpeed: 5000,     // 5 seconds per slide
    arrows: true,            // Enable navigation arrows
    nextArrow: <NextArrow />, // Custom next arrow
    prevArrow: <PrevArrow />, // Custom prev arrow
  };

  return (
    <div className="z-10 w-full flex flex-col justify-center mb-20 items-center max-w-[1200px]" id="testimonials">
      <div className="text-black flex flex-col justify-center items-center text-center px-4 md:px-20 pt-10 pb-5 md:pt-10">
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
            <div key={index} className="bg-lilBlack h-[300px] flex flex-col items-center justify-center rounded-lg shadow-lg py-10 px-8 text-center">
              <p className="md:text-lg text-white md:px-24 mb-4">"{testimonial.feedback}"</p>
              <p className="text-lg md:text-2xl font-semibold text-white mb-2">{testimonial.name}</p>
              <p className="text-sm text-gray-400">{testimonial.address}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Testimonials;

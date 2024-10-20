import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

// importing slider images
import Img1 from '../Images/img1.png'
import Img2 from '../Images/img2.png'
import Img3 from '../Images/img3.png'
import Img4 from '../Images/img4.png'
import Img5 from '../Images/img5.png'
import Img6 from '../Images/img6.png'

// import icon images
import Brief1 from "../Images/brief1.png";
import Design1 from "../Images/design1.png";
import Delivery1 from "../Images/delivery1.png";

function Services() {
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size for responsiveness
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize(); // Set initial state
    window.addEventListener('resize', handleResize); // Listener for resize event

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Custom Next Arrow
  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div
        className="absolute right-5 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer h-10 w-10 md:w-14 md:h-14 rounded-full flex justify-center items-center bg-white/25 hover:bg-gray-900 hover:border-2 hover:border-lemon hover:shadow-lg"
        onClick={onClick}
      >
        <AiOutlineRight size={30} className= "text-white font-bold hover:text-lemon" />
      </div>
    );
  }

  // Custom Prev Arrow
  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <div
        className="absolute left-5 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer h-10 w-10 md:w-14 md:h-14 rounded-full flex justify-center items-center bg-white/25 hover:bg-gray-900 hover:border-2 hover:border-lemon hover:shadow-lg ho"
        onClick={onClick}
      >
        <AiOutlineLeft size={30} className="text-white font-bold hover:text-lemon" />
      </div>
    );
  }

  // Slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: isMobile ? 1 : 2, // Show 1 slide on mobile, 2 slides on desktop
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  // Mock data for six slides with imported images
  const slides = [
    { title: 'Slide 1 - Container 1', imageUrl:Img1 },
    { title: 'Slide 1 - Container 2', imageUrl:Img2 },
    { title: 'Slide 2 - Container 1', imageUrl:Img3 },
    { title: 'Slide 2 - Container 2', imageUrl:Img4 },
    { title: 'Slide 3 - Container 1', imageUrl:Img5 },
    { title: 'Slide 3 - Container 2', imageUrl:Img6 },
  ];

  return (
    <div className='z-10 w-full max-w-[1200px]' id='services'>
      <div className='text-black text-center md:text-left px-4 md:px-20 pt-10 pb-5 md:pt-10'>
        <h1 className="font-sans font-extrabold text-[32px] md:text-[36px] lg:text-[36px] leading-[36px] md:leading-[40px]">
          Discover How We Can <br className='hidden md:block'/>Help Your Business Thrive.
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-5 mt-10 mb-6">
          <div className="w-40 h-44 md:w-60 md:h-64 bg-transparent shadow-sm rounded-md">
            <div className="bg-black w-40 h-32 md:w-60 md:h-52 mb-2"></div>
            <span className="font-bold text-[14px] md:text-[16px] px-4">Logo Design</span>
          </div>
          <div className="w-40 h-44 md:w-60 md:h-64 bg-transparent shadow-sm rounded-md">
            <div className="bg-black w-40 h-32 md:w-60 md:h-52 mb-2"></div>
            <span className="font-bold text-[14px] md:text-[16px] px-4">Logo Design</span>
          </div>
          <div className="w-40 h-44 md:w-60 md:h-64 bg-transparent shadow-sm rounded-md">
            <div className="bg-black w-40 h-32 md:w-60 md:h-52 mb-2"></div>
            <span className="font-bold text-[14px] md:text-[16px] px-4">Logo Design</span>
          </div>
          <div className="w-40 h-44 md:w-60 md:h-64 bg-transparent shadow-sm rounded-md">
            <div className="bg-black w-40 h-32 md:w-60 md:h-52 mb-2"></div>
            <span className="font-bold text-[14px] md:text-[16px] px-4">Logo Design</span>
          </div>
          <div className="">
            <button className="font-bold text-white w-[220px] h-[50px] rounded-md bg-black px-4 py-2 hover:animate-headShake hover:bg-lemon hover:text-black flex items-center gap-2 hover:cursor-pointer"> 
              View More Services
            </button>
          </div>
        </div>
      </div>

      <div className="text-black bg flex flex-col justify-center items-center text-center px-4 md:px-20 pt-10 pb-20 md:pt-10">
        <h1 className="font-sans font-extrabold text-[32px] md:text-[36px] lg:text-[36px] leading-[36px] md:leading-[40px]">
          Ready to Get Started? 
        </h1>
        <p className="font-sans font-medium mt-5 lg:text-[18px] md:mt-7 max-w-[800px]">
          Starting your project with us is an easy process. We’re all about making things smooth for you, from the first chat to the final touch. 
          We’re here to bring your ideas to life, no fuss involved. Let’s create something great together.
        </p>

        {/* Carousel */}
        <Slider {...settings} className="w-full mt-10 relative">
          {slides.map((slide, index) => (
            <div key={index} className={`grid grid-cols-1 ${!isMobile && 'md:grid-cols-2'} gap-4 p-4`}>
              {/* Slide Content */}
              <div className="h-[300px] md:h-[600px] bg-black text-white flex justify-center items-center rounded-md">
              <img
                  src={slide.imageUrl}
                  alt={slide.title}
                  className="h-full w-full object-cover rounded-md"
                />

              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="text-black bg flex flex-col justify-center items-center text-center px-4 md:px-20  pb-20 md:pt-10">
        <h1 className="font-sans font-extrabold text-[32px] md:text-[36px] lg:text-[36px] leading-[36px] md:leading-[40px]">
            Create your design in 3 quick steps!
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-16 px-4">
          <div className="bg-lilBlack flex flex-col py-8 rounded-lg w-[320px] h-[240px] px-5">
            <img 
            src={Brief1} 
            alt="brief icon" 
            className="h-[28px] w-[32px]" />
            <div className="text-left text-white mt-3 flex flex-col gap-y-2">
              <h1 className="text-[32px] font-extrabold">
              Brief
              </h1>
              <p className="text-left text-[13px]">
              Start by sharing your ideas and requirements with us. This initial step allows us to understand 
              your vision, target audience, and specific goals for the design.
              </p>

            </div>

          </div>
          <div className="bg-lilBlack flex flex-col py-8 rounded-lg w-[320px] h-[240px] px-5">
            <img 
            src={Design1} 
            alt="brief icon" 
            className="h-[28px] w-[32px]" />
            <div className="text-left text-white mt-3 flex flex-col gap-y-2">
              <h1 className="text-[32px] font-extrabold">
              Design
              </h1>
              <p className="text-left text-[13px]">
                Our creative team will transform your brief into captivating design concepts. 
                We’ll collaborate with you, making revisions as needed to ensure the final design aligns with your vision.
              </p>

            </div>

          </div>
          <div className="bg-lilBlack flex flex-col py-8 rounded-lg w-[320px] h-[240px] px-5">
            <img 
            src={Delivery1} 
            alt="brief icon" 
            className="h-[28px] w-[32px]" />
            <div className="text-left text-white mt-5 flex flex-col gap-y-2">
              <h1 className="text-[32px] font-extrabold">
              Delivery
              </h1>
              <p className="text-left text-[13px]">
              Once you’re satisfied with the design, we’ll deliver the final product promptly, 
              ensuring you have everything you need to implement your new design seamlessly.
              </p>
            </div>
          </div>
        </div>
          <div className="flex justify-center items-center">
            <button className='mt-6 text-black text-[16px] bg-lemon font-bold py-4 px-8 rounded-md hover:bg-lemon hover:animate-headShake'>
              Get In Touch
            </button>
          </div>
      </div>
    </div>
  );
}

export default Services;

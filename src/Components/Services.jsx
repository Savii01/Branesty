import React, { useState, useEffect } from 'react';
import * as AiIcons from 'react-icons/ai';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: isMobile ? 1 : 2, // Show 1 slide on mobile, 2 slides on desktop
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay for both mobile and desktop
    autoplaySpeed: 3000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  // Mock data for six slides
  const slides = [
    { title: 'Slide 1 - Container 1', content: 'Content 1' },
    { title: 'Slide 1 - Container 2', content: 'Content 2' },
    { title: 'Slide 2 - Container 1', content: 'Content 3' },
    { title: 'Slide 2 - Container 2', content: 'Content 4' },
    { title: 'Slide 3 - Container 1', content: 'Content 5' },
    { title: 'Slide 3 - Container 2', content: 'Content 6' },
  ];

  // Custom Next Arrow
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} absolute right-5 top-1/2 transform -translate-y-1/2`}
        style={{ ...style, display: "block", color: "black" }}
        onClick={onClick}
      />
    );
  }

  // Custom Prev Arrow
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} absolute left-5 top-1/2 transform -translate-y-1/2`}
        style={{ ...style, display: "block", color: "black" }}
        onClick={onClick}
      />
    );
  }

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
            <span className="font-bold text-white w-[220px] h-[50px] rounded-md bg-black px-4 py-2 hover:animate-headShake hover:bg-lemon hover:text-black flex items-center gap-2 hover:cursor-pointer"> 
              View More Services <AiIcons.AiOutlineArrowRight className='' />
            </span>
          </div>
        </div>
      </div>

      <div className="text-black bg flex flex-col justify-center items-center text-center px-4 md:px-20 pt-10 pb-20 md:pt-10">
        <h1 className="font-sans font-extrabold text-[32px] md:text-[36px] lg:text-[36px] leading-[36px] md:leading-[40px]">
          Ready to Get Started? 
        </h1>
        <p className="font-sans font-medium mt-5 lg:text-[18px] md:mt-7 max-w-[650px]">
          Starting your project with us is an easy process. We’re all about making things smooth for you, from the first chat to the final touch. 
          We’re here to bring your ideas to life, no fuss involved. Let’s create something great together.
        </p>

        {/* Carousel */}
        <Slider {...settings} className="w-full mt-10">
          {slides.map((slide, index) => (
            <div key={index} className={`grid grid-cols-1 ${!isMobile && 'md:grid-cols-2'} gap-4 p-4`}>
              {/* Slide Content */}
              <div className="h-[600px] bg-gray-200 flex justify-center items-center rounded-md">
                <h3 className="text-lg font-bold">{slide.title}</h3>
              </div>
              {/* {!isMobile && (
                <div className="h-[300px] bg-gray-300 flex justify-center items-center rounded-md">
                  <h3 className="text-lg font-bold">{slide.content}</h3>
                </div>
              )} */}
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Services;

import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import HeroBg from '../Images/herobg3.png';

function Home() {
  return (
    <div className="bg-black w-screen">
      <div
        className="
          relative 
          bg-cover
          md:bg-[length:900px] 
          lg:bg-[length:2200px] 
          xl:bg-[length:2100px] 
          2xl:bg-[length:2100px] 
          lg:bg-right 
          md:bg-center 
          bg-[right_40%_top]   {/* Push image to the right on xl */}
          lg:bg-[right_40%_top_60%]   {/* Push image to the right on xl */}
          xl:bg-[right_40%_top]   {/* Push image to the right on xl */}
          2xl:bg-[right_5%_top]  {/* Push image to the right on 2xl */}
          flex justify-center items-center 
          h-[567px] 
          lg:h-[600px] 
          xl:h-[560px] 
          py-10 
          lg:mt-[24px]"
        style={{ backgroundImage: `url(${HeroBg})` }}
        id="home"
      >
        {/* Overlay for mobile only - specific to Home */}
        <div className="absolute inset-0 bg-black opacity-70 xl:hidden"></div>

        <div className="relative z-10 text-white w-full max-w-[1200px] text-center md:text-left px-4 md:pl-20 pt-20 md:pt-20">
          <h1 className="font-sans font-extrabold text-[32px] md:text-[36px] lg:text-[50px] leading-[40px] md:leading-[66px]">
            We provide creative <br className="hidden md:block" />
            design <span className="text-lemon">solutions</span> <br className="hidden md:block" />
            for everyone.
          </h1>
          <p className="font-sans font-medium mt-5 lg:text-[18px] md:mt-7 max-w-[590px]">
            We create tailored solutions that bring your vision to life. Whether you’re a startup or an established business, 
            we focus on user experience and fresh ideas to deliver designs that inspire and engage.
          </p>
          <Link to="#contact" smooth>
            <button className="mt-8 text-black text-[16px] bg-lemon font-bold py-4 px-8 rounded-md hover:bg-lemon transition-all hover:animate-headShake">
              Get In Touch
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;

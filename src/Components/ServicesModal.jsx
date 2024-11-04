import React from 'react'
import * as AiIcons from 'react-icons/ai'
import { HashLink as Link } from 'react-router-hash-link'

//  import service images
import Logo from '../Images/logo.png'
import BusinessCard from "../Images/business card.png"
import LetterHead from "../Images/letterhead.png"
import Flyer from "../Images/flyer design.png"
import BookCover from "../Images/book cover design.png"
import TShirt from "../Images/Tshirt design.png"
import BagPack from "../Images/bag packaging design.png"
import FoodPack from "../Images/food package design.png"
import PackDes from "../Images/Packaging design.png"
import Invoice from "../Images/invoice design.png"
import ProductDes from "../Images/product design.png"
import StickDes from "../Images/sticker design.png"

// import icon images
import Brief1 from "../Images/brief1.png";
import Design1 from "../Images/design1.png";
import Delivery1 from "../Images/delivery1.png";

function ServicesModal({ visible, onClose }) {
    if (!visible) return null;

    const handleOutsideClick = (e) => {
        e.stopPropagation();
    };

    return (
        <div
            className="z-[10000]  fixed inset-0 bg-darkBlue bg-opacity-30 backdrop-blur-sm flex justify-center items-center animate-popIn p-4"
            onClick={onClose}
        >
            <div
                className="bg-white :w-[1500px] rounded-xl h-[500px] shadow-xl md:h-[680px] 2xl:h-[780px] relative md:mt-20 2xl:mt-0 overflow-hidden"
                onClick={handleOutsideClick}
            >
                {/* Close Button Positioned inside the Scrollable Content */}
                <div
                    className="absolute top-4 right-4 z-10 rounded-full flex justify-center items-center h-10 w-10 bg-black cursor-pointer text-lemon hover:text-white"
                    onClick={onClose}
                >
                    <AiIcons.AiOutlineClose size={20} />
                </div>

                {/* Scrollable Content Container */}
                <div className="text-black overflow-y-auto max-h-full w-full custom-scrollbar px-6 py-10 md:py-20 mb-20 flex justify-center">
                    {/* Centered Content */}
                    <div className="max-w-[414px] md:max-w-[1200px]">
                        <div className="text-center flex flex-col justify-center items-center">
                            <h1 className="font-sans font-extrabold text-[32px] md:text-[36px] lg:text-[36px] leading-[36px] md:leading-[40px]"> Our Services
                            </h1>
                            <p className="w-[300px] md:w-[800px] mt-5 text-[14px] md:text-[16px]">
                            With every project, we turn your ideas into beautifully crafted visuals that connect and inspire. From logo designs to full brand identities, 
                            our services are tailored to capture your unique message and ensure it resonates powerfully with your audience.
                            </p>
                        </div>

                        {/* First Service Section */}
                        <div className="mt-10 w-full">
                            <div className="flex items-center">
                                <h1 className="font-sans font-extrabold text-[18px] md:text-[14px] lg:text-[24px] leading-[36px] md:leading-[40px]">
                                    Brand Identity
                                </h1>
                                <div className="md:w-[970px] mt-5 h-2 border-b-2 border-b-black/20"></div>
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:mt-5">
                                <div className="w-36 h-48 md:w-60 md:h-72 bg-transparent shadow-sm rounded-md">
                                <div className="bg-black w-36 h-36 md:w-60 md:h-60 mb-2 rounded-lg">
                                    <img
                                    src={Logo}
                                    alt={"letter head image"}
                                    className="h-full w-full object-cover rounded-md"
                                    />
                                </div>
                                    <span className="font-bold text-[12px] text-left md:text-[16px] px-2 md:px-4">Logo Design</span>
                                </div>
                                <div className="w-36 h-48 md:w-60 md:h-72 bg-transparent shadow-sm rounded-md">
                                    <div className="bg-black w-36 h-36 md:w-60 md:h-60 mb-2 rounded-lg">
                                    <img
                                    src={BusinessCard}
                                    alt={"letter head image"}
                                    className="h-full w-full object-cover rounded-md"
                                    />
                                    </div>
                                    <span className="font-bold text-[12px] text-left md:text-[16px] px-2 md:px-4">Business Card</span>
                                </div>
                                <div className="w-36 h-48 md:w-60 md:h-72 bg-transparent shadow-sm rounded-md">
                                    <div className="bg-black w-36 h-36 md:w-60 md:h-60 mb-2 rounded-lg">
                                    <img
                                    src={LetterHead}
                                    alt={"letter head image"}
                                    className="h-full w-full object-cover rounded-md"
                                    />
                                    </div>
                                    <span className="font-bold text-[12px] text-left md:text-[16px] px-2 md:px-4">Letter Head</span>
                                </div>
                                <div className="w-36 h-48 md:w-60 md:h-72 bg-transparent shadow-sm rounded-md">
                                    <div className="bg-black w-36 h-36 md:w-60 md:h-60 mb-2 rounded-lg">
                                    <img
                                    src={Flyer}
                                    alt={"letter head image"}
                                    className="h-full w-full object-cover rounded-md"
                                    />
                                    </div>
                                    <span className="font-bold text-[12px] text-left md:text-[16px] px-2 md:px-4">Flyer Design</span>
                                </div>
                            </div>
                        </div>

                        {/* Second Service Section */}
                        <div className="mt-5 w-full">
                            <div className="flex items-center">
                                <h1 className="font-sans font-extrabold text-[18px] md:text-[14px] lg:text-[24px] leading-[36px] md:leading-[40px]">
                                    Package Design
                                </h1>
                                <div className="md:w-[950px] mt-5 h-2 border-b-2 border-b-black/20"></div>
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:mt-5">
                                <div className="w-36 h-48 md:w-60 md:h-72 bg-transparent shadow-sm rounded-md">
                                <div className="bg-black w-36 h-36 md:w-60 md:h-60 mb-2 rounded-lg">
                                    <img
                                    src={PackDes}
                                    alt={"letter head image"}
                                    className="h-full w-full object-cover rounded-md"
                                    /> 
                                </div>
                                    <span className="font-bold text-[12px] text-left md:text-[16px] px-2 md:px-4">Package Design</span>
                                </div>
                                <div className="w-36 h-48 md:w-60 md:h-72 bg-transparent shadow-sm rounded-md">
                                    <div className="bg-black w-36 h-36 md:w-60 md:h-60 mb-2 rounded-lg">
                                    <img
                                    src={StickDes}
                                    alt={"letter head image"}
                                    className="h-full w-full object-cover rounded-md"
                                    />
                                    </div>
                                    <span className="font-bold text-[12px] text-left md:text-[16px] px-2 md:px-4">Sticker Design</span>
                                </div>
                                <div className="w-36 h-48 md:w-60 md:h-72 bg-transparent shadow-sm rounded-md">
                                    <div className="bg-black w-36 h-36 md:w-60 md:h-60 mb-2 rounded-lg">
                                    <img
                                    src={FoodPack}
                                    alt={"letter head image"}
                                    className="h-full w-full object-cover rounded-md"
                                    />
                                    </div>
                                    <span className="font-bold text-[12px] text-left md:text-[16px] px-2 md:px-4">Food Packaging</span>
                                </div>
                                <div className="w-36 h-48 md:w-60 md:h-72 bg-transparent shadow-sm rounded-md">
                                    <div className="bg-black w-36 h-36 md:w-60 md:h-60 mb-2 rounded-lg">
                                    <img
                                    src={ProductDes}
                                    alt={"Product image"}
                                    className="h-full w-full object-cover rounded-md"
                                    />
                                    </div>
                                    <span className="font-bold text-[12px] text-left md:text-[16px] px-2 md:px-4">Product Design</span>
                                </div>
                            </div>
                        </div>

                        {/* Third Service Section */}
                        <div className="mt-5 w-full">
                            <div className="flex items-center">
                                <h1 className="font-sans font-extrabold text-[18px] md:text-[14px] lg:text-[24px] leading-[36px] md:leading-[40px]">
                                    Print Design
                                </h1>
                                <div className="md:w-[1000px] mt-5 h-2 border-b-2 border-b-black/20"></div>
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:mt-5">
                                <div className="w-36 h-48 md:w-60 md:h-72 bg-transparent shadow-sm rounded-md">
                                <div className="bg-black w-36 h-36 md:w-60 md:h-60 mb-2 rounded-lg">
                                 <img
                                    src={Invoice}
                                    alt={"letter head image"}
                                    className="h-full w-full object-cover rounded-md"
                                    />
                      
                                    </div>
                                    <span className="font-bold text-[12px] text-left md:text-[16px] px-2 md:px-4">Invoice Design</span>
                                </div>
                                <div className="w-36 h-48 md:w-60 md:h-72 bg-transparent shadow-sm rounded-md">
                                    <div className="bg-black w-36 h-36 md:w-60 md:h-60 mb-2 rounded-lg">
                                    <img
                                    src={BookCover}
                                    alt={"letter head image"}
                                    className="h-full w-full object-cover rounded-md"
                                    />
                                    </div>
                                    <span className="font-bold text-[12px] text-left md:text-[16px] px-2 md:px-4">Book Cover</span>
                                </div>
                                <div className="w-36 h-48 md:w-60 md:h-72 bg-transparent shadow-sm rounded-md">
                                <div className="bg-black w-36 h-36 md:w-60 md:h-60 mb-2 rounded-lg">
                                 <img
                                    src={BagPack}
                                    alt={"letter head image"}
                                    className="h-full w-full object-cover rounded-md"
                                    />                      
                                    </div>
                                    <span className="font-bold text-[12px] text-left md:text-[16px] px-2 md:px-4">Bag Design</span>
                                </div>
                                <div className="w-36 h-48 md:w-60 md:h-72 bg-transparent shadow-sm rounded-md">
                                    <div className="bg-black w-36 h-36 md:w-60 md:h-60 mb-2 rounded-lg">
                                    <img
                                    src={TShirt}
                                    alt={"letter head image"}
                                    className="h-full w-full object-cover rounded-md"
                                    />
                                    </div>
                                    <span className="font-bold text-[12px] text-left md:text-[16px] px-2 md:px-4">T-Shirt Design</span>
                                </div>
                            </div>
                        </div>
                        <div className="text-black mt-20 md:mt-10 bg flex flex-col justify-center items-center text-center md:px-20 pb-20 md:pt-10">
                            <h1 className="font-sans font-extrabold text-[28px] md:text-[36px] lg:text-[36px] leading-[32px] md:leading-[40px]">
                                Create your design in 3 quick steps!
                            </h1>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12 md:mt-16 px-4">
                            <div className="bg-lilBlack flex flex-col py-8 rounded-lg w-[280px] h-[280px] md:w-[320px] md:h-[240px] px-5">
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
                            <div className="bg-lilBlack flex flex-col py-8 rounded-lg w-[280px] h-[280px] md:w-[320px] md:h-[240px] px-5">
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
                            <div className="bg-lilBlack flex flex-col py-8 rounded-lg w-[280px] h-[280px] md:w-[320px] md:h-[240px] px-5">
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
                            <Link to='#getInTouch' smooth onClick={onClose}>
                                <button className='mt-6 text-black text-[16px] bg-lemon font-bold py-4 px-8 rounded-md hover:bg-lemon hover:animate-headShake'>
                                Get In Touch
                                </button>
                            </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ServicesModal;

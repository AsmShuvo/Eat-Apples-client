import React from "react";
import { Link } from "react-router-dom";
import img1 from "../../../assets/cover-banner/img1.png";
import img2 from "../../../assets/cover-banner/img2.png";
import img3 from "../../../assets/cover-banner/img3.png";
import img4 from "../../../assets/cover-banner/img3.png";
import { SlCallEnd } from "react-icons/sl";

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full h-[580px]">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={img1} className="w-full" />
                    <div className="absolute  h-full items-center  flex flex-col left-0 top-0 gap-4">
                        <div className="space-y-7 pl-16 mt-16 ml-20">
                            <h1 className="text-6xl text-gray-900 tracking-wider heading mt-16 uppercase  font-mono font-bold">
                                iPhone 15 Series <br /> in EatApple
                            </h1>
                            <p className="text-lg w-1/2 poppins text-gray-700">
                                Your new superpower
                            </p>
                            <div className="flex flex-col md:flex-row gap-2">
                                <Link
                                    to="/register"
                                    class="group relative inline-flex items-center overflow-hidden rounded-none bg-[#333333] px-8 py-3 text-white focus:outline-none focus:ring active:bg-primary"
                                >
                                    <span class="absolute -start-full transition-all group-hover:start-4">
                                        <svg
                                            class="size-5 rtl:rotate-180"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                                            />
                                        </svg>
                                    </span>

                                    <span class=" heading text-xl font-semibold transition-all group-hover:ms-4">
                                        GET STARTED
                                    </span>
                                </Link>
                                <Link
                                    class="group relative inline-flex items-center overflow-hidden rounded px-8 py-3 text-white focus:outline-none focus:ring "
                                    to="/latest"
                                >
                                    <span class="absolute -end-full transition-all group-hover:end-4">
                                        <svg
                                            class="size-5 rtl:rotate-180"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                                            />
                                        </svg>
                                    </span>

                                    <span class="heading text-xl font-semibold transition-all group-hover:me-4 flex gap-1 items-center">
                                        {" "}
                                        <SlCallEnd /> CONTACT US{" "}
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide4" className="btn btn-circle">
                            ❮
                        </a>
                        <a href="#slide2" className="btn btn-circle">
                            ❯
                        </a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={img2} className="w-full" />
                    <div className="absolute h-full items-center   flex flex-col left-0 top-0 gap-4">
                        <div className="space-y-7 pl-16 mt-16 ml-20">
                            <h1 className="text-5xl  tracking-wider heading mt-16 uppercase text-gray-900 font-mono font-bold">
                                Mackbook with <br/>retina display
                            </h1>
                            <p className="text-lg w-1/2 poppins text-gray-700">
                                All new with 13-inch & 15-inch
                            </p>
                            <div className="flex flex-col md:flex-row gap-2">
                                <Link
                                    to="/register"
                                    class="group relative inline-flex items-center overflow-hidden rounded-none bg-[#333333] px-8 py-3 text-white focus:outline-none focus:ring active:bg-primary"
                                >
                                    <span class="absolute -start-full transition-all group-hover:start-4">
                                        <svg
                                            class="size-5 rtl:rotate-180"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                                            />
                                        </svg>
                                    </span>

                                    <span class="heading text-xl font-semibold transition-all group-hover:ms-4">
                                        GET STARTED
                                    </span>
                                </Link>
                                <Link
                                    class="group relative inline-flex items-center overflow-hidden rounded px-8 py-3 text-gray-50 focus:outline-none focus:ring "
                                    to="/latest"
                                >
                                    <span class="absolute -end-full transition-all group-hover:end-4">
                                        <svg
                                            class="size-5 rtl:rotate-180"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                                            />
                                        </svg>
                                    </span>

                                    <span class=" heading text-xl font-semibold transition-all group-hover:me-4 flex gap-1 items-center">
                                        {" "}
                                        <SlCallEnd /> CONTACT US{" "}
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide1" className="btn btn-circle">
                            ❮
                        </a>
                        <a href="#slide3" className="btn btn-circle">
                            ❯
                        </a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={img3} className="w-full" />
                    <div className="absolute h-full items-center   flex flex-col left-0 top-0 gap-4">
                        <div className="space-y-7 pl-16 mt-16 ml-20">
                            <h1 className="text-5xl text-gray-900 tracking-wider heading mt-16 uppercase font-bold">
                                Future of healh is <br /> on your wrist
                            </h1>
                            <p className="text-lg w-1/2 poppins text-gray-700">
                                Apple watch series 7              </p>
                            <div className="flex flex-col md:flex-row gap-2">
                                <Link
                                    to="/register"
                                    class="group relative inline-flex items-center overflow-hidden rounded-none bg-[#333333] px-8 py-3 text-gray-50 focus:outline-none focus:ring active:bg-primary"
                                >
                                    <span class="absolute -start-full transition-all group-hover:start-4">
                                        <svg
                                            class="size-5 rtl:rotate-180"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                                            />
                                        </svg>
                                    </span>

                                    <span class=" heading text-xl font-semibold transition-all group-hover:ms-4">
                                        GET STARTED
                                    </span>
                                </Link>
                                <Link
                                    class="group relative inline-flex items-center overflow-hidden rounded px-8 py-3 text-white focus:outline-none focus:ring "
                                    to="/latest"
                                >
                                    <span class="absolute -end-full transition-all group-hover:end-4">
                                        <svg
                                            class="size-5 rtl:rotate-180"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                                            />
                                        </svg>
                                    </span>

                                    <span class="heading text-xl font-semibold transition-all group-hover:me-4 flex gap-1 items-center">
                                        {" "}
                                        <SlCallEnd /> CONTACT US{" "}
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide2" className="btn btn-circle">
                            ❮
                        </a>
                        <a href="#slide1" className="btn btn-circle">
                            ❯
                        </a>
                    </div>
                </div> 
            </div>
        </div>
    );
};

export default Banner;
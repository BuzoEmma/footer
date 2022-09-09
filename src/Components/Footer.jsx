import React from "react";
import logo from "../assets/logo.svg";
import { CgFacebook } from "react-icons/cg";
import { IoLogoTwitter } from "react-icons/io";
import { AiFillLinkedin } from "react-icons/ai";
import { GrMail } from "react-icons/gr";

const Footer = () => {
  return (
    <>
      <div className="bg-purple-900/100 w-full">
        {/*add the right bg-color */} {/* add the poppins font-family*/}
        {/**/}
        <div className="flex flex-col  mx-2 sm:w-full md:w-11/12 md:mx-auto lg:w-[98%] lg:mx-auto ">
          <div className="flex justify-between mt-5 relative md:static">
            <img
              src={logo}
              alt=""
              className=" md:w-[240px] md:h-[70px] w-[120px] h-[25px] md:block  md:static md:pl-0 absolute right-0 -bottom-1  "
            />
            {/* get the proper image and add to it*/}

            <div className="grid grid-cols-4 text-center text-white md:text-[20px] text-[9px]  py-[1rem] font-light w-full ">
              <div className="flex flex-col w-full ">
                <p className="text-[12px] md:text-[27px] font-medium  ">
                  Company
                </p>
                <a href="#">About Us</a>
                <a href="#">Blog</a>
              </div>
              <div className="flex flex-col w-full">
                <p className="text-[12px] md:text-[27px] font-medium ">
                  Features
                </p>
                <a href="#">API Documenttation</a>
                <a href="#" className="flex flex-col">
                  Teetree Stations
                </a>
              </div>
              <div className="flex flex-col  w-full  ">
                <p className="text-[12px] md:text-[27px] font-medium ">
                  Resource
                </p>
                <a href="#">Contact Us</a>
                <a href="#" className="">
                  Help Center
                </a>
                <a href="#">Security And Privacy</a>
              </div>
              <div className="flex flex-col  w-full  ">
                <p className=" font-medium text-[12px] md:text-[27px] ">Legal</p>
                <a href="#">Terms Of Use</a>
                <a href="#">Privacy Policy</a>
              </div>
              <div className="flex-row md:flex md:mt-5 mt-10  md:ml-[3rem] ml-4 md:w-[300px] h-16">
                {" "}
                {/*Work on the bg-color, border and font-family*/}
                <button
                  type="button"
                  class="w-[70px] md:w-[133px] text-white bg-purple-700   font-medium rounded-lg  md:px-2 py-2 text-center md:ml-0 mt-2 md:mr-5 "
                >
                  Login
                </button>
                <button
                  type="button"
                  class="w-[70px] md:w-[180px] text-white bg-blue-700   font-medium rounded-lg  md:px-8 py-2 text-center md:ml-0 mt-4"
                >
                  Get Start
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-between mt-10  md:ml-[2rem] md:static relative ">
            <div className="md:flex flex-col hidden mb-5 ">
              <label
                htmlFor=""
                className="text-[20px] font-medium text-white mb-2"
              >
                Newslatter
              </label>
              <div className="flex ">
                <input
                  type="text"
                  name=""
                  placeholder="Email address"
                  className="py-3 px-2 w-[470px] rounded-md mr-4 focus:outline-none"
                />
                <button
                  type="submit"
                  className="w-[180px] rounded-md text-[20px] font-normal bg-slate-500 py-3 "
                >
                  Subscribe
                </button>
              </div>
            </div>
            <div className="md:mr-16 mr-2 text-[20px] font-medium text-white mb-4 md:static absolute right-0 bottom-14">
              <p>Follow Us</p>
              <div className="flex">
                <a
                  href="#"
                  className="md:w-[60px] w-[30px]  h-[30px] md:h-[56px] rounded-full bg-purple-500 text-center flex justify-center items-center mr-1"
                >
                  <CgFacebook className="rounded-full md:text-[40px] text-[23px]  text-black  " />
                </a>
                <a
                  href="#"
                  className="md:w-[60px] md:h-[56px] w-[30px]  h-[30px] rounded-full bg-purple-500 text-center flex justify-center items-center mr-1"
                >
                  <IoLogoTwitter className="rounded-full md:text-[40px] text-[23px] text-black " />
                </a>
                <a
                  href="#"
                  className="md:w-[60px] md:h-[56px] w-[30px]  h-[30px] rounded-full bg-purple-500 text-center flex justify-center items-center mr-1"
                >
                  <AiFillLinkedin className="rounded-full md:text-[40px] text-[23px] text-black " />
                </a>
                <a
                  href="#"
                  className="md:w-[60px] md:h-[56px] w-[30px]  h-[30px] rounded-full bg-purple-500 text-center flex justify-center items-center"
                >
                  <GrMail className="rounded-full md:text-[40px] text-[23px] text-black " />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;



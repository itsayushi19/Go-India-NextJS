"use client"

import { useState } from "react";
import Discussion from "./discussion";
import { FaRegHeart } from "react-icons/fa6";
import { IoEyeOutline } from "react-icons/io5";
import { BiCommentDetail } from "react-icons/bi";
import { LuShare2 } from "react-icons/lu";
import { IoMdContact } from "react-icons/io";
import { IoMdArrowDroprightCircle } from "react-icons/io";
import { IoMdNotifications } from "react-icons/io";
import { AiFillDollarCircle } from "react-icons/ai";
import { BiSolidCommentDetail } from "react-icons/bi";
import { FaArrowAltCircleRight } from "react-icons/fa";
import Market from "./market";
import data from './data.json'

const App = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Sentiment", src: "User", img: false},
    { title: "Market ", src: "Calendar", img: false},
    { title: "Sector", src: "Search", img: false},
    { title: "Watchlist", src: "Chart", img: false},
    { title: "Events ", src: "Folder", img: false},
    { title: "News/ Interview", src: "Setting",img: false },
  ];
  const [toggle, setToggle] = useState(true)
    const handleToggle1 = () => {
        setToggle(true)
    }
    const handleToggle2 = () => {
        setToggle(false)
    }

  return (
    <div>
    <div className="flex">
      <div
        className={` ${
          open ? "w-72" : "w-0 "
        } bg-blue-950 h-screen p-5  pt-8 relative duration-300`}
      >
        <FaArrowAltCircleRight
          className={`absolute cursor-pointer -right-2 top-40 w-7  rounded-full  overflow-hidden ${open && "rotate-180"}`}
          onClick={() => setOpen(!open)}  color="white" size="20px" bgColor="dark-blue"
        />
        <div className="flex gap-x-2 lg:gap-x-4 items-center">
          <IoMdContact
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`} color="white" size="30px"
          />
          <h1
            className={`mr-3  lg:mr-10 text-white origin-left font-medium text-md lg:text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            Hello, User
          </h1>
          <IoMdNotifications  color="white" size="30px" />
        </div>
        <ul className="pt-6">
          <li 
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 `}>
              <BiSolidCommentDetail color="white" size="20px" />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                Discussion Forum
              </span>
          </li>
          <li
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
                `}>
              <AiFillDollarCircle color="white" size="20px" />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                Market Stories
              </span>
          </li>
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
               ${
                index === 0 && "bg-light-white"
              } `}
            >
              <span className={`${!open && "hidden"} ml-8 origin-left duration-200`}>
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="h-screen flex-1">
      <div class="flex md:hidden"> 
        <div class={`${toggle?"border-b-4 border-pink-400 bg-blue-900":"bg-blue-950"} w-1/2 h-12 cursor-pointer`} onClick={handleToggle1}>
            <h6 class="text-white text-center pt-3">Discussion Forum</h6>
        </div>
        <div class={`${toggle?"bg-blue-950":"border-b-4 bg-blue-900 border-pink-400"} w-1/2 h-12 cursor-pointer`} onClick={handleToggle2}>
            <h6 class="text-white text-center pt-3">Market Stories</h6>
        </div>
      </div>
      <div class="flex mb-4 md:hidden">
      <div class="w-full h-12">
        {toggle && <Discussion open={open} />}
        {!toggle && <Market open={open}/>}
      </div>
    </div>
      <div className="hidden md:block ">
      <div className='flex items-center justify-evenly'>
    
    
    </div>
    <div className="flex">
      <div className="mr-20">
    <div>
    <p className="text-3xl p-7"><span className="bg-slate-200 p-3 font-bold text-pink-600">DISCUSSION FORUM</span></p>
    <div className="max-w-[650px] pl-8 pt-3 mb-10">
      
    <div className=" shadow-[10px_20px_20px_-20px_rgba(0,0,0,0.3)] border-r border-b border-l border-gray-400 lg:border-l lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
    <div className="flex items-center">
    <img className={`${open ? "mr-2" : "mr-4"} w-12 h-12 rounded-full mt-1`} src='/cartoon.jpg' alt="" />
    <div className="flex justify-between">
      <h4 className={`${open? "mr-2":"mr-8"} md: mr-2`}>{data.title1}</h4>
      <h6 className="mr-20 md:mr-10"><span className="bg-blue-500 rounded-[23px] text-white pl-4 pr-4 pt-1 pb-1">Sector 2</span></h6>
      <p className={`${open? "ml-10":"ml-20"} md: ml-10`}>2 min ago</p>
    </div>
    </div>
      <div className="mb-8 pl-16">
        <p className="text-gray-700 text-base">{data.content1}</p>
      </div>
      <div className="flex pl-16 items-center md:pl-10">
        <div className="flex items-center mr-12">
          <FaRegHeart />
            <p>2k</p>
          </div>
        <div className="flex items-center mr-12">
          <IoEyeOutline />
            <p>2k</p>
          </div>
        <div className="flex items-center mr-12">
          <BiCommentDetail />
            <p>2k comments</p>
          </div>
        <div className="flex items-center">
          <LuShare2 />
            <p>Share</p>
        </div>
      </div>
    </div>
  </div>
  </div>
  <div>
    <div className="max-w-[650px] pl-8 pt-3 mb-10">
      
    <div className=" shadow-[10px_20px_20px_-20px_rgba(0,0,0,0.3)] border-r border-b border-l border-gray-400 lg:border-l lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
    <div className="flex items-center">
    <img className="w-12 h-12 rounded-full mt-1 mr-4" src='/cartoon.jpg' alt="" />
    <div className="flex justify-between">
      <h4 className={`${open? "mr-2":"mr-8"} md:mr-2`}>{data.title1}</h4>
      <h6 className="mr-20 md:mr-10"><span className="bg-blue-500 rounded-[23px] text-white pl-4 pr-4 pt-1 pb-1">Sector 2</span></h6>
      <p className={`${open? "ml-10":"ml-20"} md:ml-10`}>2 min ago</p>
    </div>
    </div>
      <div className="mb-8 pl-16">
        <p className="text-gray-700 text-base">{data.content1}</p>
      </div>
      <div className="flex pl-16 items-center md:pl-10">
        <div className="flex items-center mr-12">
          <FaRegHeart />
            <p>2k</p>
          </div>
        <div className="flex items-center mr-12">
          <IoEyeOutline />
            <p>2k</p>
          </div>
        <div className="flex items-center mr-12">
          <BiCommentDetail />
            <p>2k comments</p>
          </div>
        <div className="flex items-center">
          <LuShare2 />
            <p>Share</p>
        </div>
      </div>
    </div>
  </div>
  </div>
  <div>
    <div className="max-w-[650px] pl-8 pt-3 mb-10">
      
    <div className=" shadow-[10px_20px_20px_-20px_rgba(0,0,0,0.3)] border-r border-b border-l border-gray-400 lg:border-l lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
    <div className="flex items-center">
    <img className="w-12 h-12 rounded-full mt-1 mr-4" src='/cartoon.jpg' alt="" />
    <div className="flex justify-between">
      <h4 className={`${open? "mr-2":"mr-8"} md:mr-2`}>{data.title1}</h4>
      <h6 className="mr-20 md:mr-10"><span className="bg-blue-500 rounded-[23px] text-white pl-4 pr-4 pt-1 pb-1">Sector 2</span></h6>
      <p className={`${open? "ml-10":"ml-20"} md:ml-10`}>2 min ago</p>
    </div>
    </div>
      <div className="mb-8 pl-16">
        <p className="text-gray-700 text-base">{data.content1}</p>
      </div>
      <div className="flex pl-16 items-center md:pl-10">
        <div className="flex items-center mr-12">
          <FaRegHeart />
            <p>2k</p>
          </div>
        <div className="flex items-center mr-12">
          <IoEyeOutline />
            <p>2k</p>
          </div>
        <div className="flex items-center mr-12">
          <BiCommentDetail />
            <p>2k comments</p>
          </div>
        <div className="flex items-center">
          <LuShare2 />
            <p>Share</p>
        </div>
      </div>
    </div>
  </div>
  </div>
  <div>
    <div className="max-w-[650px] pl-8 pt-3 mb-10">
      
    <div className=" shadow-[10px_20px_20px_-20px_rgba(0,0,0,0.3)] border-r border-b border-l border-gray-400 lg:border-l lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
    <div className="flex items-center">
    <img className="w-12 h-12 rounded-full mt-1 mr-4" src='/cartoon.jpg' alt="" />
    <div className="flex justify-between">
      <h4 className={`${open? "mr-2":"mr-8"} md:mr-2`}>{data.title1}</h4>
      <h6 className="mr-20 md:mr-4"><span className="bg-blue-500 rounded-[23px] text-white pl-4 pr-4 pt-1 pb-1">Sector 2</span></h6>
      <p className={`${open? "ml-10":"ml-20"} md:ml-10`}>2 min ago</p>
    </div>
    </div>
      <div className="mb-8 pl-16">
        <p className="text-gray-700 text-base">{data.content1}</p>
      </div>
      <div className="flex pl-16 items-center">
        <div className="flex items-center mr-12">
          <FaRegHeart />
            <p>2k</p>
          </div>
        <div className="flex items-center mr-12">
          <IoEyeOutline />
            <p>2k</p>
          </div>
        <div className="flex items-center mr-12">
          <BiCommentDetail />
            <p>2k comments</p>
          </div>
        <div className="flex items-center">
          <LuShare2 />
            <p>Share</p>
        </div>
      </div>
    </div>
  </div>
  </div>
  </div>
  <div>
  <p className=" text-xl p-7"><span className="bg-slate-200 p-3 font-bold text-pink-600 mb-2">MARKET STORIES</span></p>
  <div className={`${open? "mr-4":"mr-0"}`}>
  <div class="max-w-[325px] mb-10 h-[350px] rounded overflow-hidden shadow-lg">
  <img class="w-full h-[175px]" src="/sunset.jpg" alt="Sunset in the mountains" />
  <div class="px-6 py-4 pb-2">
    <div class="font-bold text-xl mb-2">{data.title2}</div>
    <p class="text-gray-700 text-base">
    {data.content2}
    </p>
  </div>
  </div>
  <div class="max-w-[325px] mb-10 h-[350px] rounded overflow-hidden shadow-lg">
  <img class="w-full h-[175px]" src="/sunset.jpg" alt="Sunset in the mountains" />
  <div class="px-6 py-4 pb-2">
    <div class="font-bold text-xl mb-2">{data.title2}</div>
    <p class="text-gray-700 text-base">
    {data.content2}
    </p>
  </div>
  </div>
  <div class="max-w-[325px] mb-10 h-[350px] rounded overflow-hidden shadow-lg">
  <img class="w-full -[175px]" src="/sunset.jpg" alt="Sunset in the mountains" />
  <div class="px-6 py-4 pb-2">
    <div class="font-bold text-xl mb-2">{data.title2}</div>
    <p class="text-gray-700 text-base">
    {data.content2}
    </p>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
      </div>
      
      </div>
    </div>
  );
};
export default App;





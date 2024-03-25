"use client"
import React from "react"
import { useState } from "react";
import { FaRegHeart } from "react-icons/fa6";
import { IoEyeOutline } from "react-icons/io5";
import { BiCommentDetail } from "react-icons/bi";
import { LuShare2 } from "react-icons/lu";
import data from './data.json'

const Discussion = (open) => {
    return (
      <div className="mr-20">
    <div>
    <div className="max-w-[650px] pl-8 pt-3 mb-10">
      
    <div className=" shadow-[10px_20px_20px_-20px_rgba(0,0,0,0.3)] border-r border-b border-l border-gray-400 lg:border-l lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
    <div className="flex items-center">
    <img className={`${open ? "mr-2" : "mr-4"} w-12 h-12 rounded-full mt-1`} src='/cartoon.jpg' alt="" />
    <div className="flex justify-between">
      <h4 className={`${open? "mr-2":"mr-8"}`}>{data.title1}</h4>
      <h6 className={`${open? "mr-10":"mr-20"}`}><span className="bg-blue-500 rounded-[23px] text-white pl-4 pr-4 pt-1 pb-1">Sector 2</span></h6>
      <p className={`${open? "ml-10":"ml-20"}`}>2 min ago</p>
    </div>
    </div>
      <div className="mb-8 pl-16">
        <p className="text-gray-700 text-base">{data.content1}</p>
      </div>
      <div className={`${open ? "pl-10" : "pl-16"} flex pl-16 items-center`}>
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
    <img className={`${open ? "mr-2" : "mr-4"} w-12 h-12 rounded-full mt-1`} src='/cartoon.jpg' alt="" />
    <div className="flex justify-between">
      <h4 className={`${open? "mr-2":"mr-8"}`}>{data.title1}</h4>
      <h6 className={`${open? "mr-10":"mr-20"}`}><span className="bg-blue-500 rounded-[23px] text-white pl-4 pr-4 pt-1 pb-1">Sector 2</span></h6>
      <p className={`${open? "ml-10":"ml-20"}`}>2 min ago</p>
    </div>
    </div>
      <div className="mb-8 pl-16">
        <p className="text-gray-700 text-base">{data.content1}</p>
      </div>
      <div className={`${open ? "pl-10" : "pl-16"} flex pl-16 items-center`}>
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
    <img className={`${open ? "mr-2" : "mr-4"} w-12 h-12 rounded-full mt-1`} src='/cartoon.jpg' alt="" />
    <div className="flex justify-between">
      <h4 className={`${open? "mr-2":"mr-8"}`}>{data.title1}</h4>
      <h6 className={`${open? "mr-10":"mr-20"}`}><span className="bg-blue-500 rounded-[23px] text-white pl-4 pr-4 pt-1 pb-1">Sector 2</span></h6>
      <p className={`${open? "ml-10":"ml-20"}`}>2 min ago</p>
    </div>
    </div>
      <div className="mb-8 pl-16">
        <p className="text-gray-700 text-base">{data.content1}</p>
      </div>
      <div className={`${open ? "pl-10" : "pl-16"} flex pl-16 items-center`}>
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
    <img className={`${open ? "mr-2" : "mr-4"} w-12 h-12 rounded-full mt-1`} src='/cartoon.jpg' alt="" />
    <div className="flex justify-between">
      <h4 className={`${open? "mr-2":"mr-8"}`}>{data.title1}</h4>
      <h6 className={`${open? "mr-10":"mr-20"}`}><span className="bg-blue-500 rounded-[23px] text-white pl-4 pr-4 pt-1 pb-1">Sector 2</span></h6>
      <p className={`${open? "ml-10":"ml-20"}`}>2 min ago</p>
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
    )
}

export default Discussion
import React, { useState } from "react";
import fruit from "./images/fruitlogo.png";
import { TiThMenu } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";
export default function Header2() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <div className="text-xl flex justify-between items-center m-auto">
        <div className="flex justify-center items-center md:ml-3 lg:ml-5">
          <img src={fruit} className="hidden sm:block w-32"></img>
          <div className="text-center">
            <p>BHARGAV</p>
            <p>MALL</p>
          </div>
        </div>
        <div>
          <input
            type="text"
            placeholder="Search"
            className="border w-32 sm:w-52 border-black p-2 rounded-md"
          ></input>
        </div>
        {/* mobile menu */}
        {isMenuOpen && (
          <div className="grid md:hidden bg-slate-200 z-10  absolute top-24 left-0 justify-center w-full">
            <ul className="text-gray-700 grid justify-center items-center cursor-pointer mr-10">
              <li className="flex justify-center items-center">
                <i className="fa-solid fa-code-compare"></i>
                <p className="relative py-0 w-4 bg-green-400 rounded-[50%] text-white px-0.5 mb-4">
                  0
                </p>
                Compare
              </li>
              <li className="flex justify-center items-center">
                <i className="fa-solid fa-heart"></i>
                <p className="relative py-0 w-4 bg-green-400 rounded-[50%] text-white px-0.5 mb-4">
                  0
                </p>
                Whishlist
              </li>
              <li className="flex justify-center items-center">
                <i className="fa-solid fa-cart-shopping"></i>
                <p className="relative py-0 w-4 bg-green-400 rounded-[50%] text-white px-0.5 mb-4">
                  0
                </p>
                Cart
              </li>
              <li className="flex justify-center items-center">
                <i className="fa-solid fa-user"></i>
                <p className="relative py-0 w-4 bg-green-400 rounded-[50%] text-white px-0.5 mb-4">
                  0
                </p>
                Account
              </li>
            </ul>
          </div>
        )}

        {/* desktop menu */}
        <div className="hidden md:block">
          <ul className="text-gray-700 flex justify-center items-center gap-4 cursor-pointer mr-10">
            <li>
              <select className="hidden lg:block border border-black rounded-md">
                Your Location<option>Your Location</option>
              </select>
            </li>
            <li className="flex justify-center items-center">
              <i className="fa-solid fa-code-compare"></i>
              <p className="relative py-0 w-4 bg-green-400 rounded-[50%] text-white px-0.5 mb-4">
                0
              </p>
              Compare
            </li>
            <li className="flex justify-center items-center">
              <i className="fa-solid fa-heart"></i>
              <p className="relative py-0 w-4 bg-green-400 rounded-[50%] text-white px-0.5 mb-4">
                0
              </p>
              Whishlist
            </li>
            <li className="flex justify-center items-center">
              <i className="fa-solid fa-cart-shopping"></i>
              <p className="relative py-0 w-4 bg-green-400 rounded-[50%] text-white px-0.5 mb-4">
                0
              </p>
              Cart
            </li>
            <li className="flex justify-center items-center">
              <i className="fa-solid fa-user"></i>
              <p className="relative py-0 w-4 bg-green-400 rounded-[50%] text-white px-0.5 mb-4">
                0
              </p>
              Account
            </li>
          </ul>
        </div>
        <button
          className="grid lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {" "}
          {!isMenuOpen ? <TiThMenu /> : <RxCross2 />}
        </button>
      </div>
      <hr className="border border-gray-400"></hr>
    </>
  );
}

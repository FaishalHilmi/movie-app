import React from "react";
import { NavLink } from "react-router-dom";
import { IoHomeSharp } from "react-icons/io5";
import { MdLocalMovies } from "react-icons/md";
import { PiTelevisionSimpleFill } from "react-icons/pi";

function NavigasiBottom() {
  return (
    <nav className="block md:hidden w-full h-full fixed z-50 top-0">
      <div className="content h-full relative">
        <div className="content-wrapper py-3 font-figtree bg-primary w-full absolute -bottom-[1px] text-white rounded-t-lg">
          <div className="icon flex justify-center gap-16">
            <div className="icon-item">
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "text-cyan" : "")}
              >
                <div className="icon-wrapper flex flex-col justify-center items-center">
                  <IoHomeSharp className="text-xl mb-1" />
                  <p className="text-[12px]">Home</p>
                </div>
              </NavLink>
            </div>
            <div className="icon-item">
              <NavLink
                to="/movies"
                className={({ isActive }) => (isActive ? "text-cyan" : "")}
              >
                <div className="icon-wrapper flex flex-col justify-center items-center">
                  <MdLocalMovies className="text-xl mb-1" />
                  <p className="text-[12px]">Movies</p>
                </div>
              </NavLink>
            </div>
            <div className="icon-item">
              <NavLink
                to="/tvshow"
                className={({ isActive }) => (isActive ? "text-cyan" : "")}
              >
                <div className="icon-wrapper flex flex-col justify-center items-center">
                  <PiTelevisionSimpleFill className="text-xl mb-1" />
                  <p className="text-[12px]">TV Show</p>
                </div>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavigasiBottom;

import React from "react";
import { Link } from "react-router-dom";
import grid from "../../../public/img/grid-pattern.png";

function Footer() {
  return (
    <footer className="relative bg-secondary mb-[50px] md:mb-0">
      <img
        src={grid}
        alt="pattern"
        className="w-full h-full z-0 absolute object-cover"
      />
      <div className="line w-full h-2 bg-gradient-to-r from-primary to-secondary relative z-10"></div>
      <div className="content  text-white py-14 relative z-10">
        <div className="content-wrapper max-w-[1040px] mx-auto px-5 md:px-0">
          <div className="top-footer flex flex-col md:flex-row mb-14">
            <div className="right-top-footer w-full md:w-2/4 mb-8 md:mb-0">
              <h1 className="font-figtree font-bold text-2xl md:text-3xl mb-5">
                CINEMAX
              </h1>
              <p>
                <span className="font-figtree font-bold">CINEMAX</span> adalah
                sebuah website aplikasi yang didedikasikan untuk menyediakan
                layanan informasi dan pengalaman sinematik kepada pengguna.
              </p>
            </div>
            <div className="left-top-footer md:w-2/4 md:ps-28">
              <p className="font-roboto font-bold mb-2 md:mb-8">Links</p>
              <ul className="flex flex-row md:flex-col gap-3">
                <li>
                  <Link to="/" className="hover:font-semibold transition-all">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/movies"
                    className="hover:font-semibold transition-all"
                  >
                    Movies
                  </Link>
                </li>
                <li>
                  <Link
                    to="/tvshow"
                    className="hover:font-semibold transition-all"
                  >
                    TV Show
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="botton-footer">
            <p>
              Created by{" "}
              <a
                href="https://www.instagram.com/faisalmii"
                target="_blank"
                className="font-semibold underline"
              >
                faisalmi
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

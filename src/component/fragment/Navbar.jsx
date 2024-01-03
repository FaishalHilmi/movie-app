import React from "react";
import LogoNavbar from "../element/Navbar/LogoNavbar";
import NavLinks from "../element/Navbar/NavLinks";

function Navbar() {
  const dataLinks = [
    {
      path: "/",
      name: "Home",
    },
    {
      path: "/movies",
      name: "Movies",
    },
    {
      path: "/tvshow",
      name: "TV Show",
    },
  ];

  return (
    <nav className="flex justify-center">
      <div className="nav-wrapper max-w-[1040px] py-5 flex items-center justify-between font-figtree bg-transparent absolute z-50 w-full">
        <LogoNavbar />
        <NavLinks links={dataLinks} />
      </div>
    </nav>
  );
}

export default Navbar;

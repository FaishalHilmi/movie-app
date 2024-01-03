import React from "react";
import { NavLink } from "react-router-dom";

function NavLinks({ links }) {
  return (
    <div className="nav-link">
      <ul className="flex gap-10">
        {links.map((link, index) => {
          return (
            <li key={index}>
              <NavLink to={link.path} className=" text-white font-bold">
                {link.name}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default NavLinks;

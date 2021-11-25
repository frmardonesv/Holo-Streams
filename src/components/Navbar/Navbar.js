import React, { useState } from "react";
import { NabvarContainer } from "./NavbarStyles";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import { links } from "../../utils/contants";
import { useGlobalContext } from "../../context/context";

const Nabvar = () => {
  const { nav, clearFilters, setNavBar } = useGlobalContext();
  const [open, setOpen] = useState(false);

  const handleClick = (data) => {
    setOpen(false);
    clearFilters();
    setNavBar(data);
  };

  return (
    <NabvarContainer className={open ? "active" : null}>
      <div className="navbar">
        <Link
          to="/"
          onClick={() => {
            clearFilters();
            setNavBar("Home");
          }}
        >
          <h2>HoloUwU</h2>
        </Link>
        <div>
          {!open ? (
            <AiOutlineMenu
              color="#fff"
              className="menu"
              onClick={() => setOpen(true)}
            />
          ) : (
            <AiOutlineClose
              color="#fff"
              className="menu"
              onClick={() => setOpen(false)}
            />
          )}
        </div>
        <ul>
          {links.map((link) => {
            const { id, text, url, icon } = link;
            return (
              <Link key={id} to={url}>
                <li
                  className={nav === text ? "activeNav" : ""}
                  onClick={() => {
                    handleClick(text);
                  }}
                >
                  <i>{icon}</i>
                  {text}
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
    </NabvarContainer>
  );
};

export default Nabvar;

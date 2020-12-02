import React, { useEffect, useRef, useState } from "react";
import menu from "../image/menu.svg";
import burger from "../image/burger.svg";
import "./css/Menu.css";

import { gsap } from "gsap";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(MorphSVGPlugin);

const Menu = () => {
  const menuref = useRef();
  const [click, setClick] = useState(true);

  const onClick = () => {
    setClick(!click);
    console.log(click);
  };

  useEffect(() => {
    console.log(menuref.current);
  }, []);

  return (
    <div className="menu">
      {!click ? (
        <div ref={menuref} className="menu__Overlay">
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Clients</a>
          <a href="#">Contact</a>
          <div className="menu__body">
            <img src={menu} />
          </div>
          <div className="menu__burger" onClick={onClick}>
            <img onClick={onClick} src={burger} />
          </div>
        </div>
      ) : (
        <div className="menu__bar">
          <div className="menu__body">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="102.229"
              height="952.175"
              viewBox="0 0 102.229 952.175"
            >
              <path
                id="Path_3"
                data-name="Path 3"
                d="M87-.606c-.058,71.959,0,208.495,0,466.6s-.058,411.3,0,467.062c.005,5.019.112,7.575,0,7.309-14.863.68-102.06-239.5-102.06-474.371C-15.06,236.8,68.709-9.752,87-11.788,87.377-11.921,87.006-8.665,87-.606Z"
                transform="translate(15.06 11.792)"
              />
            </svg>
          </div>
          <div className="menu__burger" onClick={onClick}>
            <img onClick={onClick} src={burger} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;

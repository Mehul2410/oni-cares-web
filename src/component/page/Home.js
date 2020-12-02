import React from "react";
import "../css/Home.css";
import hellomon from "../../image/hellomon.png";

const Home = () => {
  return (
    <div className="home">
      <img src={hellomon} />
    </div>
  );
};

export default Home;

// import React from "react";
// import "./css/Menu.css";

// const Menu = () => {
//   const openNav = () => {
//     document.getElementById("myNav").style.width = "100%";
//   };

//   const closeNav = () => {
//     document.getElementById("myNav").style.width = "0%";
//   };

//   return (
//     <div className="menu">
//       <div id="myNav" className="overlay">
//         <div className="menu__Close">
//           <svg
//             onClick={closeNav}
//             xmlns="http://www.w3.org/2000/svg"
//             width="21.083"
//             height="35.184"
//             viewBox="0 0 21.083 35.184"
//           >
//             <g id="left-arrow" transform="translate(-101.98 -5.568)">
//               <g
//                 id="Group_1"
//                 data-name="Group 1"
//                 transform="translate(102.48 6.068)"
//               >
//                 <path
//                   id="Path_6"
//                   data-name="Path 6"
//                   d="M108.228,17.1,121.017,4.311a1.874,1.874,0,0,0,0-2.644L119.9.546a1.873,1.873,0,0,0-2.644,0L102.025,15.773a1.887,1.887,0,0,0,0,2.654l15.212,15.211a1.873,1.873,0,0,0,2.645,0l1.12-1.12a1.872,1.872,0,0,0,0-2.644Z"
//                   transform="translate(-101.48 0)"
//                   fill="#fff"
//                   stroke="#000"
//                   stroke-width="1"
//                 />
//               </g>
//             </g>
//           </svg>
//         </div>

//         <div className="overlay__Content">
//           <a href="#">About</a>
//           <a href="#">Services</a>
//           <a href="#">Clients</a>
//           <a href="#">Contact</a>
//         </div>
//       </div>
//       <div className="menu__Button">
//         {/* menu button svg code */}
//         <svg
//           onClick={openNav}
//           xmlns="http://www.w3.org/2000/svg"
//           width="41.722"
//           height="35.184"
//           viewBox="0 0 41.722 35.184"
//         >
//           <g id="Menu" transform="translate(0.5 0.5)">
//             <path
//               id="Path_3"
//               data-name="Path 3"
//               d="M1.273,67.42H39.45c.7,0,1.273-1.628,1.273-3.634s-.57-3.634-1.273-3.634H1.273C.57,60.152,0,61.78,0,63.786S.57,67.42,1.273,67.42Z"
//               transform="translate(0 -60.152)"
//               fill="#fff"
//               stroke="#000"
//               stroke-linecap="round"
//               stroke-linejoin="round"
//               stroke-width="1"
//             />
//             <path
//               id="Path_4"
//               data-name="Path 4"
//               d="M39.45,180.455H1.273c-.7,0-1.273,1.628-1.273,3.634s.57,3.634,1.273,3.634H39.45c.7,0,1.273-1.628,1.273-3.634S40.152,180.455,39.45,180.455Z"
//               transform="translate(0 -166.997)"
//               fill="#fff"
//               stroke="#000"
//               stroke-linecap="round"
//               stroke-linejoin="round"
//               stroke-width="1"
//             />
//             <path
//               id="Path_5"
//               data-name="Path 5"
//               d="M39.45,300.758H1.273c-.7,0-1.273,1.628-1.273,3.634s.57,3.634,1.273,3.634H39.45c.7,0,1.273-1.628,1.273-3.634S40.152,300.758,39.45,300.758Z"
//               transform="translate(0 -273.841)"
//               fill="#fff"
//               stroke="#000"
//               stroke-linecap="round"
//               stroke-linejoin="round"
//               stroke-width="1"
//             />
//           </g>
//         </svg>
//       </div>
//     </div>
//   );
// };

// export default Menu;

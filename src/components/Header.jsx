import React, { useState } from "react";
import { RxCaretDown,RxCross1 } from "react-icons/rx";
import { IoIosSearch,IoMdHelpCircleOutline } from "react-icons/io";
import { RiDiscountPercentLine } from "react-icons/ri";
import { SlPeople } from "react-icons/sl";
import { BsCart2 } from "react-icons/bs";



export default function Header() {
  const [toggle, setToggle] = useState(false);
  const showSideMenu = () => {
    setToggle(true);
  };
  const hideSideMenu = () => {
    setToggle(false);
  };
  const links=[
    {
        icon:<IoIosSearch  />,
        name:"Search"
    },
    {
        icon:<RiDiscountPercentLine/>,
        name:"Offers",
        sup:"NEW",
        
    },
    {
        icon:<IoMdHelpCircleOutline />,
        name:"Help"
    },
    {
        icon:<SlPeople />,
        name:"Sign In"
    },
    {
        icon:<BsCart2 />,
        name:"Cart"
    }
  ]


  
  return (
    <>
      <div
        className="black-overlay w-full h-full fixed duration-500 " onClick={hideSideMenu}
        style={{
          opacity: toggle ? 1 : 0,
          visibility: toggle ? "visible" : "hidden",
        }}>
        <div  onClick={(e)=>{
            e.stopPropagation();
        }} className="w-[500px] bg-white h-full absolute duration-[400ms] "style={{
            left: toggle? '0% ': '-100%'
        }}>
            < RxCross1/>
            

        </div>
      </div>
      <header className="p-[8px] shadow-xl sticky top-0 z-[999] bg-white">
        <div className="max-w-[1200px] mx-auto flex items-center">
          <div className="w-[50px]">
            <img src="image/swiggylogo.png" className="w-full" alt="" />
          </div>
          <div className="">
            <span className="font-bold border-b-[1px]  border-black">
              Lalbagh 
            </span><span> </span>
             Azar collage, Lucknow, Uttar Pradesh
            <RxCaretDown
              fontSize={25}
              className=" inline text-[#fc8019] cursor-pointer" onClick={showSideMenu}
            />
          </div>
          <nav className="flex list-none gap-10 ml-auto font-light text-[15px] ">
            {
                links.map(
                    (links , index)=>{
                       return <li key={index} className = 'cursor-pointer flex items-center gap-3 hover:text-[#367a3a] '>
                        {links.icon} {links.name}
                        <sup>{links.sup}</sup>
                        </li>  
                    }) 
            }
            
            
          </nav>
        </div>
      </header>
    </>
  );
}

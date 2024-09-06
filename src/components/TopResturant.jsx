import React, { useEffect, useState } from "react";
import { BiRightArrowAlt, BiLeftArrowAlt } from "react-icons/bi";
import restaurantChain from "./restaurantChains.json";
import CardElement from "./CardElement";


export default function TopResturant() {
  const [data, setData] = useState([]);
  const[slide,setSlide] = useState(0);

  useEffect(() => {
    setData(restaurantChain);
  }, []);

  const nextSlide = ()=>{
    console.log(data.length)
    if(data.length-5 == slide ) return false;
    setSlide(slide + 1)

}
const prevSlide = ()=>{
    if(slide == 0) return false;
    setSlide(slide - 1)

}

  return (
    <div className="max-w-[1200px] mx-auto mb-0">
      <div className="flex w-full  my-5 items-center justify-between">
        <div className="text-[25px] font-semibold">
          Top resturants chains in Lucknow
        </div>
        <div className="flex">
          <div className="cursor-pointer w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 flex items-center justify-center">
            <BiLeftArrowAlt onClick={prevSlide}/>
          </div>

          <div className="cursor-pointer w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 flex items-center justify-center">
            <BiRightArrowAlt onClick={nextSlide} />
          </div>
        </div>
      </div>
      
      <div className="flex gap-5 overflow-hidden">
        {
            data.map(
                (d,i) =>{
                    return <CardElement {...d} key={i}/>
                }
            )
        }
      </div>
      <hr className="my-0-border-[1px]"/>
    </div>
  );
}

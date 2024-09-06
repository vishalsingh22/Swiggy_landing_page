import React, { useEffect, useState,useRef } from "react";
import restaurantChain from "./restaurantChains.json";
import CardElement from "./CardElement";
//import CardElement from "./CardElement";

export default function OnlineDelivery() {

    // const elementRef = useRef(null); 
    
    // const [isAtTop, setIsAtTop] = useState(false); 
  
    // useEffect(() => {
    //   const handleScroll = () => {
    //     if (elementRef.current) {
    //       const top = elementRef.current.getBoundingClientRect().top;
  
    //       if (top <= 0) {
    //         setIsAtTop(true); 
    //       } else {
    //         setIsAtTop(false); 
    //       }
    //     }
    //   };
  
    //   window.addEventListener("scroll", handleScroll);
  
     
    //   return () => window.removeEventListener("scroll", handleScroll);
    // }, []);
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(restaurantChain);
  }, []);

  return (
    <div className="max-w-[1200px] mx-auto ">
      <div className="flex w-full  my-5 items-center justify-between">
        <div className="text-[25px] font-semibold">
          Restaurants with online food delivery in Lucknow
        </div>
        
      </div>
      <div  className="w-full ">
      {/* ref={elementRef} className={`sticky-element ${isAtTop ? "sticky-top-class" : ""}`} */}
            <div className="max-w-[1200px] mx-auto my-3 flex gap-3 ">
                <div className="p-3  rounded-md shadow">Filter</div>
                <div className="p-3  rounded-md shadow">Filter</div>
                <div className="p-3  rounded-md shadow">Filter</div>
                <div className="p-3  rounded-md shadow">Filter</div>
                <div className="p-3  rounded-md shadow">Filter</div>
                <div className="p-3  rounded-md shadow">Filter</div>
                <div className="p-3  rounded-md shadow">Filter</div>
                
            </div>
        </div>

      <div className="grid grid-cols-4 gap-3">
        {data.map((data, index) => {
          return <CardElement {...data} />;
        })}
      </div>
    </div>
  );
}

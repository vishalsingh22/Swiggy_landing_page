import React, { useEffect, useState } from "react";
import { BiRightArrowAlt,BiLeftArrowAlt } from "react-icons/bi";
import Categories from "./Categories.json";

export default function Category() {
    const[slide,setSlide] = useState(0);

    const[categories,setCategories] = useState([]);

    // const fetchCategory = async ()=>
    // {
    //     const response = await fetch("ApiURL");
    //     const data = await response.json();
    //     setCategories(data);
    // }

    
    useEffect(
        ()=>{
            setCategories(Categories);
             //fetchCategory();
        },[]
    )

    const nextSlide = ()=>{
        console.log(categories.length)
        if(categories.length-8 == slide ) return false;
        setSlide(slide + 3)

    }
    const prevSlide = ()=>{
        if(slide == 0) return false;
        setSlide(slide - 3)

    }


  return (
    <>
      <div className='max-w-[1200px] mx-auto'>
        <div className="flex w-full  my-5 items-center justify-between">

          <div className="text-[25px] font-semibold">What's on your mind?</div>


        <div className="flex">

            <div className="cursor-pointer w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 flex items-center justify-center">
            <BiLeftArrowAlt onClick={prevSlide}/>
            </div>

            <div className="cursor-pointer w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 flex items-center justify-center">
                <BiRightArrowAlt onClick={nextSlide}/>
            </div>

        </div>
       
        </div>
        <div className="flex  overflow-hidden  " >
            {
                categories.map(
                    (cat , index) => {
                        return (
                        <>
                        <div style={{

                          transform: `translateX(-${slide * 100}%)`,
                          transition: "transform 0.5s ease-in-out", 
                        }
                        } key={index} className="w-[150px] shrink-0">
                            <img src={process.env.PUBLIC_URL +"image/" + cat.image} alt="" />
                        </div>
                        </>

                        )

                }
                )
            }
        </div>
        <hr className="my-4-border-[2px]"/>
      </div>
    </>
  );
}

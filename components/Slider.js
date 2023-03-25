import React from 'react'
import bannerStyle from "../styles/banner.module.css"
import { useState, useEffect } from 'react';

const Slider = ({Slides, search}) => {
  const [currentSlide, setcurrentSlide]= useState(0);

  const slideLength = 5;
  const Slide = Slides.slice(0,5)
  let slideInterval;
  let IntervalTime =5000;
  const nextSlide = ()=>{
    setcurrentSlide(currentSlide === slideLength-1 ? 0: currentSlide+1)
  }

  const auto= () =>{
    slideInterval = setInterval(nextSlide, IntervalTime)
  }

  useEffect(()=>{
    setcurrentSlide(0)
  },[])
  
  useEffect(()=>{
   
    auto()
  
    return()=>clearInterval(slideInterval)
  },[currentSlide])



 
  return (
    <div className={search ? bannerStyle.none :bannerStyle.slider }>

    { Slide.map((slide, index)=>{
      return(
       
          <div className={index === currentSlide & !search ?bannerStyle.current: bannerStyle.none} style={{  backgroundImage: `linear-gradient(to right, #000000e6 10%,hsla(202, 43%, 16%, 0.451) 41%,#00000066 61%,#000000e3 100%), 
          linear-gradient(to bottom, #000000d9 10%,#172d3a66 41%,#00000066 61%,#000000f2 90%),url('https://image.tmdb.org/t/p/original${slide.backdrop_path}')`}} key={index}>

          </div>
      )
    })}
    </div>
)
}

export default Slider
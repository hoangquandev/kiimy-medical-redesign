
import  gsap  from "gsap";
import React, { useEffect, useRef } from 'react'
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);  
const Footer = () => {
  const footerRef = useRef(null)
  const contentRef = useRef(null)
    useEffect(()=>{
       
        gsap.fromTo(footerRef.current,{y:-500}, {
            y: 0,
            scrollTrigger: {
              trigger: contentRef.current,
              start: "bottom bottom",
              scrub: true,
            },
          });
          console.log(footerRef);
    },[])
    return (
      <footer className="w-full h-[350px] fixed left-0 bottom-0 -z-50" ref={footerRef}>
  <div id="content" ref={contentRef}>
    <div className="w-[90%] m-[40px] mb-[420px] p-[100px]">
      <div className="flex justify-between">
        <ul className="list-none">
          <li className="first:font-bold">Menu</li>
          <li className="first:font-bold">Home</li>
          <li className="first:font-bold">Projects</li>
          <li className="first:font-bold">About</li>
          <li className="first:font-bold">Contact</li>
        </ul>
        <ul className="list-none">
          <li className="first:font-bold">Shop</li>
          <li className="first:font-bold">Products</li>
          <li className="first:font-bold">Digitals</li>
          <li className="first:font-bold">FAQs</li>
          <li className="first:font-bold">Reviews</li>
        </ul>
        <ul className="list-none">
          <li className="first:font-bold">Projects</li>
          <li className="first:font-bold">Outside</li>
          <li className="first:font-bold">Fair Trade</li>
          <li className="first:font-bold">Peace</li>
          <li className="first:font-bold">Honest</li>
        </ul>
        <ul className="list-none">
          <li className="first:font-bold">Contact</li>
          <li className="first:font-bold">Text</li>
          <li className="first:font-bold">Email</li>
          <li className="first:font-bold">Social Media</li>
          <li className="first:font-bold">Call</li>
        </ul>
      </div>
      <div className="flex justify-between uppercase text-xs opacity-[0.5] m-0 mt-[6em]">
        <span>2022. All rights reserved.</span>
        <span>Site by <u>Codegrid</u></span>
      </div>
    </div>
  </div>
</footer>

    )
}

export default Footer
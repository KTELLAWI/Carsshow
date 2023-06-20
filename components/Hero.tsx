"use client";

import Image from "next/image";
import React from "react";
// import { AiFillCheckCircle } from "react-icons/ai";
// import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";

function Hero() {
    const handleScroll = () => {
    const nextSection = document.getElementById("discover");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section id="hero">
      <div className="px-8 lg:px-28 py-12 lg:py-0 h-screen flex items-center relative">
        <Image
          src="/hero-bg.png"
          alt="hero"
          width={680}
          height={870}
          className="absolute inset-y-30 -right-20 -z-10 hidden lg:inline-block"
        />
        {/* <Image src="/audi.png" alt="hero" fill className="object-contain" /> */}
        <Image
          src="/hero-big-car.png"
          alt="hero"
          width={800}
          height={450}
          className="absolute right-0 hidden lg:inline-block"
        />
        <div className="space-y-8 text-center lg:text-left lg:max-w-lg">
          <div className="font-bold space-y-2">
            <h3 className="text-xl font-mono ">خطط لرحلتك الان</h3>
            <h1 className="text-[3.2rem] leading-tight font-mono">
              استاجر سيارة أحلامك بكل سهولة <span className="text-custom-orange"></span> 
            </h1>
          </div>
          <div>
            <p className="text-custom-grey">
            
            </p>
          </div>
          <div className="flex flex-col lg:flex-row text-white font-bold gap-6">
            <a
              href="#discover"
              className="bg-primary-blue  border-none rounded-[20%] shadow-lg w-fit flex items-center gap-2 justify-center py-4 px-4 lg:px-8 shadow-orange-bottom hover:shadow-orange-bottom-hov transition-all duration-300 ease-linear rounded border-2 border-custom-orange"
            >
              <span className=" font-sans ">اكتشف اسطول السيارات  لدينا</span>
              <span className="text-xl">
                {/* <AiFillCheckCircle /> */}
              </span>
            </a>
            {/* <a
              href="#booking"
              className="bg-black flex items-center gap-2 justify-center py-4 px-4 lg:px-8 transition-all duration-300 ease-linear hover:bg-transparent hover:text-black rounded border-2 border-black"
            > */}
              <span>Learn More</span>
              <span className="text-xl">
                {/* <IoIosArrowForward /> */}
              </span>
            {/* </a> */}
          </div>
        </div>
        <a
          href="#booking"
          className="absolute bottom-16 inset-x-1/2 text-3xl animate-bounce"
        >
          {/* <IoIosArrowDown /> */}
        </a>
      </div>
    </section>
  );
}

export default Hero;


////////////////////////////////////

// import Image from "next/image";

// import { CustomButton } from "../components/";

// const Hero = () => {
//   const handleScroll = () => {
//     const nextSection = document.getElementById("discover");

//     if (nextSection) {
//       nextSection.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <div className="hero">
//       <div className="flex-1 pt-36 padding-x">
//         <h1 className="hero__title">
//           Find, book, rent a car—quick and super easy!
//         </h1>

//         <p className="hero__subtitle">
//           Streamline your car rental experience with our effortless booking
//           process.
//         </p>

//         <CustomButton
//           title="Explore Cars"
//           containerStyles="bg-primary-blue text-white rounded-full mt-10"
//           handleClick={handleScroll}
//         />
//       </div>
//       <div className="hero__image-container">
//         <div className="hero__image">
//           <Image src="/hero.png" alt="hero" fill className="object-contain" />
//         </div>

//         <div className="hero__image-overlay" />
//       </div>
//     </div>
//   );
// };

// export default Hero;
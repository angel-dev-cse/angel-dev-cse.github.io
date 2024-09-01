"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

export default function Cardx({
  title,
  description,
  category,
  image,
  stack_icons,
}: {
  title: string;
  description: string;
  category: string;
  image: string;
  stack_icons: string[];
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const controls = useAnimation();

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.8,
  });

  useEffect(() => {
    console.log("useEffect for resize listener is running");

    const handleResize = () => {
      const isMobile = window.innerWidth < 768;
      setIsMobile(isMobile);
      console.log(
        `Resize event: isMobile=${isMobile}, window.innerWidth=${window.innerWidth}`
      );
    };

    handleResize(); // Check on initial load
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;

    if (isMobile) {
      controls.start({
        opacity: 1,
        rotateX: 0,
      });
    } else {
      if (inView) {
        controls.start({
          opacity: 1,
          rotateX: 0,
          transition: { duration: 0.5 },
        });
      } else {
        controls.start({
          opacity: 0.1,
          rotateX: 89,
          transition: { duration: 0.1 },
        });
      }
    }
  }, [controls, inView, isMobile]);

  useEffect(() => {
    if (isHovered) {
      controls.start({
        boxShadow: "0px 0px 15px 3px rgba(200, 200, 200, .8)",
        borderWidth: 0,
      });
    } else {
      controls.start({
        boxShadow: "0px 0px 0px 0px rgba(50, 50, 50, 0.5)",
        borderLeftWidth: "2px",
        borderWidth: "4px",
      });
    }
  }, [isHovered, controls]);

  return (
    <div
      id="card"
      ref={ref}
      className="cursor-pointer m-2 sm:m-5 rounded-full select-none w-fit sm:w-[18rem]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setIsHovered(false)}
    >
      <motion.div
        initial={{
          opacity: 0.1,
          rotateX: 89,
          boxShadow: "0px 0px 0px 0px rgba(50, 50, 50, 0.5)",
          border:"auto"
        }}
        animate={controls}
        style={{ transformStyle: "preserve-3d", borderRadius: "0.5rem" }}
        className="card-shadow border-black-500 border-l-black-300 border-r-black-800 border-4 border-l-2 rounded-lg"
      >
        <div className="flex justify-between rounded-lg bg-black-100">
          <div className="flex flex-col mx-auto rounded-lg overflow-hidden">
            <motion.img
              className="rounded-lg rounded-b-none object-cover h-44 sm:h-auto"
              src={image}
              alt={title}
              loading="lazy"
              animate={{
                opacity: isHovered || isMobile ? 1 : 0.5,
              }}
            />

            <div className="flex mt-[-1.3rem] -ml-4 px-4">
              <motion.span
                className="inline-block bg-black-100 rounded-t-md text-sm sm:font-medium tracking-wide text-white-100 px-3 pt-0.5 items-center"
                animate={{ opacity: isHovered || isMobile ? 1 : 0.5 }}
              >
                {category}
              </motion.span>
            </div>

            <div className="flex -mt-[1.6rem] sm:-mt-[1.9rem] -mr-4 px-4 justify-end ">
              <motion.span
                className="inline-flex bg-black-100 rounded-t-md text-sm font-medium tracking-wide text-white-100 px-3 pt-0.5"
                animate={{ opacity: isHovered || isMobile ? 1 : 0.2 }}
              >
                {stack_icons.map((icon) => (
                  <Image
                    key={icon}
                    className="m-1 w-4 h-4 sm:w-5 sm:h-5"
                    width={1}
                    height={1}
                    src={`/assets/icons/${icon}`}
                    alt="stack icon"
                    loading="lazy"
                  />
                ))}
              </motion.span>
            </div>

            <div className="w-48 h-52 sm:w-72 sm:h-48">
              <div className="py-2 px-4">
                <h1 className="text-xl text-left font-bold leading-6 tracking-wide text-white-100">
                  {title}
                </h1>
              </div>
              <div className="px-4">
                <p className="text-gray-400 text-sm text-left tracking-wide overflow-hidden line-clamp-6 ">
                  {description}
                </p>
              </div>
            </div>

            {/* <div className="flex flex-row items-end h-full w-full px-4 mt-4">
              <div className="flex border-t border-gray-700 w-full py-4">
                <div className="flex items-center space-x-3 border-r border-gray-700 w-full">
                  <img
                    className="object-cover w-8 h-8 border-2 border-white rounded-full"
                    src="https://storageapi.fleek.co/kamaludin21-team-bucket/portfolio/avatar.jpg"
                    alt="profile users"
                    loading="lazy"
                  />
                  <div className="">
                    <p className="text-sm font-semibold tracking-wide text-gray-200">
                      Author
                    </p>
                    <p className="text-xs font-light tracking-wider text-gray-300">
                      2 Hours ago
                    </p>
                  </div>
                </div>
                <div className="flex items-center flex-shrink-0 px-2">
                  <div className="flex items-center space-x-1 text-gray-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                    <p className="font-medium">10</p>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

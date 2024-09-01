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
  github,
}: {
  title: string;
  description: string;
  category: string;
  image: string;
  stack_icons: string[];
  github: string;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const controls = useAnimation();

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.7,
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
          transition: { duration: 0.5 },
        });
      }
    }
  }, [controls, inView, isMobile]);

  useEffect(() => {
    if (isHovered) {
      controls.start({
        boxShadow: "0px 0px 10px 3px rgba(200, 200, 200, .7)",
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
      className="cursor-grabbing m-2 sm:m-5 rounded-full select-none w-56 sm:w-[18rem]"
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
          border: "auto",
        }}
        animate={controls}
        style={{ transformStyle: "preserve-3d", borderRadius: "0.5rem" }}
        className="card-shadow border-black-500 border-l-black-300 border-r-black-800 border-4 border-l-2 rounded-lg"
      >
        <div className="flex justify-between rounded-lg bg-black-100">
          <div className="flex flex-col mx-auto rounded-lg overflow-hidden">
            <div className="inline-flex">
              <motion.img
                className="rounded-lg rounded-b-none object-cover w-56 h-44 sm:h-44 sm:w-auto"
                src={image}
                alt={title}
                loading="lazy"
                animate={{
                  opacity: isHovered || isMobile ? 1 : 0.5,
                  zIndex: 1,
                }}
              />
            </div>

            <div className="flex mt-[-1.3rem] -ml-4 px-4">
              <motion.span
                className="inline-block bg-black-100 rounded-t-md text-sm sm:font-medium tracking-wide text-white-100 px-3 pt-0.5 items-center z-[2]"
                animate={{
                  opacity: isHovered || isMobile ? 1 : 0.1,
                  boxShadow:
                    isHovered || isMobile
                      ? "0px 0px 7px 5px rgba(0,0,0,0.5)"
                      : "0px 0px 0px 0px rgba(0,0,0,1)",
                }}
              >
                {category}
              </motion.span>
            </div>

            <div className="flex -mt-[1.6rem] sm:-mt-[1.9rem] -mr-4 px-4 justify-end ">
              <motion.span
                className="inline-flex bg-black-100 rounded-t-md text-sm font-medium tracking-wide text-white-100 px-3 pt-0.5 z-[2]"
                animate={{
                  opacity: isHovered || isMobile ? 1 : 0.1,
                  boxShadow:
                    isHovered || isMobile
                      ? "0px 0px 7px 5px rgba(0,0,0,0.5)"
                      : "0px 0px 0px 0px rgba(0,0,0,1)",
                }}
              >
                {stack_icons.map((icon) => (
                  <motion.img
                    key={icon}
                    className="m-1 w-5 h-auto object-cover"
                    width={1}
                    height={1}
                    src={`/assets/icons/${icon}`}
                    alt="stack icon"
                    loading="lazy"
                  />
                ))}
              </motion.span>
            </div>

            <div className="w-52 h-48 sm:w-72 sm:h-48">
              <div className="py-2 px-4">
                <h1 className="text-xl text-left font-bold leading-6 tracking-wide text-white-100">
                  {title}
                </h1>
              </div>
              <div className="ml-4 sm:mx-4">
                <p className="text-gray-400 text-sm text-left tracking-wide overflow-hidden line-clamp-5 ">
                  {description}
                </p>
              </div>
            </div>

            <div className="flex mt-7 items-center justify-center">
              <a href={github} target="_blank" rel="noopener noreferrer">
                <motion.img
                  src={`/assets/icons/github.png`}
                  width={45}
                  height={1}
                  alt="Github Icon"
                  animate={{
                    opacity:
                      (isMobile && inView) || (!isMobile && isHovered)
                        ? 1
                        : 0.1,
                    scale:
                      (isMobile && inView) || (!isMobile && isHovered)
                        ? 1.1
                        : 1,
                    translateY:
                      (isMobile && inView) || (!isMobile && isHovered)
                        ? -20
                        : 0,
                    boxShadow:
                      (isMobile && inView) || (!isMobile && isHovered)
                        ? "0px 0px 7px 2px rgba(200, 200, 200, .8)"
                        : "0px 0px 0px 0px rgba(200, 200, 200, .8)",
                  }}
                  className="-mb-8 opacity-50 rounded-full"
                />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

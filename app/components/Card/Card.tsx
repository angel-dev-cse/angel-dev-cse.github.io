"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export default function Cardx({
  title,
  description,
  category,
  image,
}: {
  title: string;
  description: string;
  category: string;
  image: string;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimation();

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.8,
  });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        rotateX: 0,
        transition: { duration: 0.7 },
      });
    } else {
      controls.start({
        opacity: 0.1,
        rotateX: 89,
        transition: { duration: 0.7 },
      });
    }
  }, [controls, inView]);

  return (
    <div
      id="card"
      ref={ref}
      className="cursor-pointer m-6"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        initial={{
          opacity: 0.1,
          width: "18rem",
          rotateX: 89,
          boxShadow: "0px 0px 1px 1px rgba(15, 15, 15, 0.7)",
        }}
        animate={controls}
        whileHover={{
          width: "20rem",
          boxShadow: "0px 0px 10px 5px rgba(50, 50, 50, 1)",
        }}
        style={{ transformStyle: "preserve-3d", borderRadius: "0.5rem" }}
        className="card-shadow"
      >
        <div className="flex justify-between rounded-lg bg-black-100">
          <div className="flex flex-col mx-auto rounded-lg overflow-hidden">
            <motion.img
              className="rounded-lg rounded-b-none object-cover"
              src={image}
              alt={title}
              loading="lazy"
              animate={{
                opacity: isHovered ? 1 : 0.5,
              }}
            />

            <div className="flex justify-center mt-[-1.3rem] px-4">
              <motion.span
                className="inline-block bg-black-200 rounded-t-md text-sm font-medium tracking-wide text-white-100 px-3 pt-0.5 items-center"
                animate={{ opacity: isHovered ? 1 : 0.2 }}
              >
                {category}
              </motion.span>
            </div>

            <div className="w-72 h-48 ">
              <div className="py-2 px-4">
                <h1 className="text-xl text-left leading-6 tracking-wide text-white-100">
                  {title}
                </h1>
              </div>
              <div className="px-4">
                <p className="text-gray-400 text-sm text-left tracking-wide overflow-hidden line-clamp-6">
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

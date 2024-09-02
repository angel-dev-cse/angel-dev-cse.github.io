"use client";

import { poppinsRegular, poppinsBold, poppinsExtraBold } from "../ui/fonts";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {
  const hiControls = useAnimation();
  const nameControls = useAnimation();
  const taglineControls = useAnimation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const name = "A ngel Sharma";

  const taglines = [
    {
      title: "Full Stack Developer",
      description:
        "Delivering complete software solutions to tackle real life challenges, designing innovative user experience, aspiring to learn new technologies.",
    },
    {
      title: "AI Enthusiast",
      description:
        "Exploring the world of artificial intelligence and machine learning.",
    },
    {
      title: "Freelancer",
      description: "Providing freelance services to help businesses grow.",
    },
  ];

  useEffect(() => {
    const sequence = async () => {
      await hiControls.start({
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5, type: "tween", stiffness: 500 },
      });

      await nameControls.start({
        opacity: 1,
        transition: { duration: 0.2, type: "just", stiffness: 500 },
      });

      let index = 0;
      const interval = setInterval(() => {
        if (index < name.length - 1) {
          setTypedText((prev) => prev + name[index]);
          index++;
        } else {
          clearInterval(interval);
        }
      }, 100);

      while (true) {
        for (let i = 0; i < taglines.length; i++) {
          setCurrentIndex(i);

          await taglineControls.start({
            opacity: 1,
            y: 0,
            transition: { duration: 1, ease: "easeOut" },
          });

          // Wait for some time before changing to the next text
          await new Promise((resolve) => setTimeout(resolve, 3000));

          // Fade out the current text before showing the next one
          await taglineControls.start({
            opacity: 0,
            y: 50,
            transition: { duration: 0.5, ease: "easeIn" },
          });
        }
      }
    };

    sequence();
  }, [hiControls, nameControls, taglineControls, taglines.length]);

  return (
    <div id="hero" className="flex flex-col relative h-auto sm:h-screen">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <div className="flex items-center justify-center sm:items-start sm:justify-start mt-5 sm:mt-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.1 }}
            animate={hiControls}
            className="relative"
          >
            <div
              className="flex rounded-full overflow-hidden bg-white-100 items-center justify-center h-16 w-16 sm:h-20 sm:w-20 2xl:h-32 2xl:w-32"
            >
              <h1
                className={`${poppinsBold.className} text-4xl sm:text-4xl 2xl:text-6xl text-black-100`}
              >
                Hi!
              </h1>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={nameControls}
          className="sm:mt-5 items-center flex flex-col sm:flex-row sm:items-start"
        >
          <span className="text-sm 2xl:text-lg text-white-200 mt-5">I am</span>
        </motion.div>

        <div className="align-middle text-center sm:text-left">
          <span className="relative text-2xl 2xl:text-4xl mr-2 text-white">
            {typedText}
            <Image
              src="/assets/gif/bar.gif"
              height={15}
              width={13}
              unoptimized={true}
              alt="White Image"
              className="absolute inline-flex align-baseline mt-6 2xl:mt-8 ml-[0.1em]"
            />
          </span>
        </div>

        <div className="relative sm:absolute flex w-full items-center justify-center sm:items-end sm:justify-end sm:top-32 sm:right-0 overflow-hidden">
            <motion.img
              src="/assets/svg/computer.svg"
              width={1}
              height={1}
              alt="Computer SVG"
              className="w-64 h-auto sm:w-80 sm:h-72 md:w-[35rem] md:h-[25rem] 2xl:w-[44rem] 2xl:h-auto z-9"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />
          </div>

        <div className="mb-10 sm:mt-36 2xl:mt-64 sm:mb-48">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={taglineControls}
            className="mt-0 max-h-1"
          >
            <div className="mb-3">
              {/* <span className="text-md text-white-200 mr-3">Full Stack</span> */}
              <span
                className={`${poppinsBold.className} text-3xl sm:text-5xl 2xl:text-7xl font-extrabold text-white-100`}
              >
                {taglines[currentIndex].title}
              </span>
            </div>

            <div className="max-w-[30em] text-balance text-white-100 text-sm sm:text-base 2xl:text-xl sm:mt-5">
              {taglines[currentIndex].description}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

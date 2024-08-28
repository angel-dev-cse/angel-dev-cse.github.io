"use client";

import { poppinsRegular, poppinsBold } from "../ui/fonts";
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
    // Add more text and description pairs here
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
        if (index < name.length-1) {
          setTypedText((prev) => prev + name[index]);
          index++;
        } else {
          clearInterval(interval);
        }
      }, 100);

      while (true) {
        for (let i = 0; i < taglines.length-1; i++) {
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
  }, [hiControls, nameControls, taglineControls]);

  return (
    <div id="hero" className="flex flex-col px-5 py-0 relative">
      <div className="flex items-center justify-center sm:items-start sm:justify-start">
        <motion.div
          initial={{ opacity: 0, scale: 0.1 }}
          animate={hiControls}
          className="relative"
        >
          <Image
            src="/assets/images/white.png"
            height={60}
            width={60}
            alt="White Image"
            className="rounded-full aspect-square object-cover opacity-90 relative"
          />
          <h1
            className={`${poppinsBold.className} absolute text-center text-4xl text-black-100 ml-0 mt-0 sm:ml-1 sm:mt-[-1.3em]`}
          >
            Hi!
          </h1>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={nameControls}
        className="mt-5"
      >
        <span className="text-sm text-white-200 mt-5">I am</span>
      </motion.div>

      <div className="align-middle">
        <span className="relative text-2xl mr-2">
          {typedText}
          <Image
            src="/assets/gif/bar.gif"
            height={15}
            width={13}
            alt="White Image"
            className="absolute inline-flex align-baseline mt-6 ml-[0.1em]"
          />
        </span>
      </div>

      <div className="mt-16 mb-0 sm:mt-36 sm:mb-48">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={taglineControls}
          className="mt-0 max-h-1"
        >
          <div className="mb-3">
            {/* <span className="text-md text-white-200 mr-3">Full Stack</span> */}
            <span className="text-5xl font-extrabold text-white-100">
              {taglines[currentIndex].title}
            </span>
          </div>

          <div className="max-w-[30em] text-balance text-white-100 mt-5">
            {taglines[currentIndex].description}
          </div>
        </motion.div>
      </div>

      <div className="md:absolute top-5 md:left-[40em] w-full h-full pointer-events-none justify-center">
        <Image
          src="/assets/svg/computer.svg"
          width={450}
          height={400}
          alt="Computer SVG"
          className="ml-10"
        />
      </div>
    </div>
  );
}

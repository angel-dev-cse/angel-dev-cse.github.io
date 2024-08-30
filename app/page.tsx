import Hero from "@/app/pages/Hero";
import Projects from "@/app/pages/Projects";

export default function Home() {
  return (
    <main
      className="relative bg-black-100 flex flex-col justify-center items-center overflow-hidden mx-auto px-0 sm:px-20"
      style={{
        backgroundImage: "url('/assets/images/background.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPositionY: "top",
      }}
    >
      <div className="max-w-full w-full">
        <Hero />
        <Projects />
      </div>
    </main>
  );
}

// "use client";

// import { useEffect, useRef } from "react";
// import { motion, useAnimation } from "framer-motion";
// import Hero from "@/app/pages/Hero";
// import Projects from "@/app/pages/Projects";

// export default function Home() {
//   const controls = useAnimation();
//   const containerRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const handleScroll = (event: WheelEvent) => {
//       event.preventDefault();
//       const delta = Math.sign(event.deltaY);
//       if (delta > 0) {
//         controls.start({ y: "-100vh" });
//       } else {
//         controls.start({ y: "0vh" });
//       }
//     };

//     const container = containerRef.current;

//     if (container) {
//       container.addEventListener("wheel", handleScroll);
//     }

//     return () => {
//       if (container) {
//         container.removeEventListener("wheel", handleScroll);
//       }
//     };
//   }, [controls]);

//   return (
//     <div
//       ref={containerRef}
//       className="overflow-hidden h-screen flex flex-col mx-auto px-0 sm:px-20"
//       style={{
//         backgroundImage: "url('/assets/images/background.png')",
//         backgroundSize: "cover",
//         backgroundRepeat: "no-repeat",
//         backgroundPositionY: "top",
//         backgroundAttachment: "fixed"
//       }}
//     >
//       <motion.div
//         animate={controls}
//         initial={{ y: "0vh" }}
//         transition={{ duration: 0.5 }}
//         className="h-screen"
//       >
//         <Hero />
//       </motion.div>
//       <motion.div
//         animate={controls}
//         initial={{ y: "100vh" }}
//         transition={{ duration: 0.5 }}
//       >
//         <Projects />
//       </motion.div>
//     </div>
//   );
// }

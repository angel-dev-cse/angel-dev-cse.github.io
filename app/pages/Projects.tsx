"use client";

import Card from "@/app/components/Card/Card";
import { poppinsBold, poppinsExtraBold } from "../ui/fonts";
import React, { useRef, useEffect } from "react";

const projects = [
  {
    title: "E-commerce Website",
    description:
      "A project that experiments with MENN stack to display an online shop. With separate stack for admin dashboard, user dashboard. Buy, sell and manage payment along with blogging system.",
    category: "Web",
    image: "/assets/images/ecommerce.png",
    stack_icons: ["mongodb.png", "expressjs.webp", "nodejs.png", "nextjs.png"],
    github: "https://github.com/angel-dev-cse/merncommerce",
  },
  {
    title: "Smart Assignment Manager",
    description:
      "A complete solution for student's assignment submission and teacher's evaluation coupled with full institution managment. Teacher and students can communiate easily through messaging and arranging events and schedules.",
    category: "Web",
    image: "/assets/images/assignment_manager.png",
    stack_icons: ["laravel.png", "php.png", "js.png", "mysql.png"],
    github: "https://github.com/angel-dev-cse/smart-assignment-manager",
  },
  {
    title: "Melodious",
    description:
      "An Android app where users can listen to music, create playlists, and share them with friends. Users can also follow their favorite artists and get notified when they release new music.",
    category: "Android",
    image: "/assets/images/melodious.png",
    stack_icons: ["android.png", "java.png"],
    github: "https://github.com/BLOODKINGZ/MelodiousAlpha",
  },
  {
    title: "JLNE",
    description:
      "An Android app where a machine supplier can manage their inventory, sales, and customer data. The app also provides a platform for customers to view and order machines.",
    category: "Android",
    image: "/assets/images/jlne-demo.png",
    stack_icons: ["android.png", "java.png"],
    github: "https://github.com/angel-dev-cse/JLNE",
  },
];

export default function Projects() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isDragging = useRef<boolean>(false);
  const startX = useRef<number>(0);
  const scrollLeft = useRef<number>(0);

  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    isDragging.current = true;
    startX.current = event.pageX - containerRef.current.offsetLeft;
    scrollLeft.current = containerRef.current.scrollLeft;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging.current || !containerRef.current) return;
    if (!isDragging.current) return;
    event.preventDefault();
    const x = event.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX.current) * 1; // Scroll-fast
    containerRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const handleWheel = (event: WheelEvent) => {
    if (event.shiftKey && containerRef.current) {
      event.preventDefault();
      containerRef.current.scrollLeft += event.deltaY;
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheelEvent = (event: WheelEvent) => {
      if (event.shiftKey) {
        event.preventDefault();
        event.stopPropagation(); // Stop the event from propagating to parent elements
        const scrollSpeed = 5; // Adjust this value to increase or decrease the scroll speed
        container.scrollLeft += event.deltaY * scrollSpeed;
      }
    };
    container.addEventListener("wheel", handleWheelEvent, { passive: false });
    return () => {
      container.removeEventListener("wheel", handleWheelEvent);
    };
  }, []);

  return (
    <div
      id="projects"
      className="flex flex-col text-white-100 h-auto sm:h-screen mt-10"
    >
      <h1 className={`${poppinsExtraBold.className} text-4xl mt-20`}>
        Projects
      </h1>
      <div
        id="card-container"
        ref={containerRef}
        className="flex overflow-scroll sm:overflow-x-scroll sm:overflow-y-hidden w-full py-10"
        style={{ scrollBehavior: "smooth" }}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {projects.map((project) => (
          <div key={project.title} className="flex-shrink-0">
            <Card
              title={project.title}
              description={project.description}
              category={project.category}
              image={project.image || ""}
              stack_icons={project.stack_icons}
              github={project.github}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

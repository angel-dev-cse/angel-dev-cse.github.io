"use client";

import Card from "@/app/components/Card/Card";
import { poppinsExtraBold } from "../ui/fonts";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "E-commerce Website",
      description:
        "A project that experiments with MENN stack to display an online shop. With separate stack for admin dashboard, user dashboard. Buy, sell and manage payment along with blogging system.",
      category: "Web",
      image: "/assets/images/ecommerce.png",
    },
    {
      title: "Smart Assignment Manager",
      description:
        "A complete solution for student's assignment submission and teacher's evaluation coupled with full institution managment. Teacher and students can communiate easily through messaging and arranging events and schedules.",
      category: "Web",
      image: "/assets/images/assignment_manager.png",
    },
    {
      title: "Melodious",
      description:
        "An Android app where users can listen to music, create playlists, and share them with friends. Users can also follow their favorite artists and get notified when they release new music.",
      category: "Android",
      image: "/assets/images/melodious.png",
    },
  ];

  return (
    <div id="projects" className="flex flex-col text-white-100 h-screen mt-10">
      <div className={`${poppinsExtraBold.className} text-4xl mt-20`}>Projects</div>
      <div className="flex flex-row justify-center items-center text-center">
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            category={project.category}
            image={project.image || ""}
          />
        ))}
      </div>
    </div>
  );
}

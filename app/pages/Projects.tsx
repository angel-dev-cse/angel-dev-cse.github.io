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
    },
    {
      title: "Smart Assignment Manager",
      description:
        "A complete solution for student's assignment submission and teacher's evaluation coupled with full institution managment. Teacher and students can communiate easily through messaging and arranging events and schedules.",
    },
    {
      title: "Melodius",
      description:
        "An Android app where users can listen to music, create playlists, and share them with friends. Users can also follow their favorite artists and get notified when they release new music.",
    },
  ];

  return (
    <div id="projects" className="flex flex-col text-white-100 h-screen">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <div className={`${poppinsExtraBold.className} text-4xl`}>Projects</div>
        <div className="flex flex-row justify-center items-center text-center">
          {projects.map((project) => (
            <Card
              key={project.title}
              title={project.title}
              description={project.description}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
